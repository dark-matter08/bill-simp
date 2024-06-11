import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { QuotationController } from "../quotation.controller";
import { QuotationService } from "../quotation.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  client: "exampleClient",
  createdAt: new Date(),
  description: "exampleDescription",
  id: "exampleId",
  quotationDate: new Date(),
  quotationNumber: "exampleQuotationNumber",
  total: 42.42,
  updatedAt: new Date(),
  validUntil: new Date(),
};
const CREATE_RESULT = {
  client: "exampleClient",
  createdAt: new Date(),
  description: "exampleDescription",
  id: "exampleId",
  quotationDate: new Date(),
  quotationNumber: "exampleQuotationNumber",
  total: 42.42,
  updatedAt: new Date(),
  validUntil: new Date(),
};
const FIND_MANY_RESULT = [
  {
    client: "exampleClient",
    createdAt: new Date(),
    description: "exampleDescription",
    id: "exampleId",
    quotationDate: new Date(),
    quotationNumber: "exampleQuotationNumber",
    total: 42.42,
    updatedAt: new Date(),
    validUntil: new Date(),
  },
];
const FIND_ONE_RESULT = {
  client: "exampleClient",
  createdAt: new Date(),
  description: "exampleDescription",
  id: "exampleId",
  quotationDate: new Date(),
  quotationNumber: "exampleQuotationNumber",
  total: 42.42,
  updatedAt: new Date(),
  validUntil: new Date(),
};

const service = {
  createQuotation() {
    return CREATE_RESULT;
  },
  quotations: () => FIND_MANY_RESULT,
  quotation: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Quotation", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: QuotationService,
          useValue: service,
        },
      ],
      controllers: [QuotationController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /quotations", async () => {
    await request(app.getHttpServer())
      .post("/quotations")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        quotationDate: CREATE_RESULT.quotationDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        validUntil: CREATE_RESULT.validUntil.toISOString(),
      });
  });

  test("GET /quotations", async () => {
    await request(app.getHttpServer())
      .get("/quotations")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          quotationDate: FIND_MANY_RESULT[0].quotationDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          validUntil: FIND_MANY_RESULT[0].validUntil.toISOString(),
        },
      ]);
  });

  test("GET /quotations/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/quotations"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /quotations/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/quotations"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        quotationDate: FIND_ONE_RESULT.quotationDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        validUntil: FIND_ONE_RESULT.validUntil.toISOString(),
      });
  });

  test("POST /quotations existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/quotations")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        quotationDate: CREATE_RESULT.quotationDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        validUntil: CREATE_RESULT.validUntil.toISOString(),
      })
      .then(function () {
        agent
          .post("/quotations")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
