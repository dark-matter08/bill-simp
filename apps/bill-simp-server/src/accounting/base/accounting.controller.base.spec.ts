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
import { AccountingController } from "../accounting.controller";
import { AccountingService } from "../accounting.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  amount: 42.42,
  category: "exampleCategory",
  createdAt: new Date(),
  description: "exampleDescription",
  entryDate: new Date(),
  id: "exampleId",
  updatedAt: new Date(),
  user: "exampleUser",
};
const CREATE_RESULT = {
  amount: 42.42,
  category: "exampleCategory",
  createdAt: new Date(),
  description: "exampleDescription",
  entryDate: new Date(),
  id: "exampleId",
  updatedAt: new Date(),
  user: "exampleUser",
};
const FIND_MANY_RESULT = [
  {
    amount: 42.42,
    category: "exampleCategory",
    createdAt: new Date(),
    description: "exampleDescription",
    entryDate: new Date(),
    id: "exampleId",
    updatedAt: new Date(),
    user: "exampleUser",
  },
];
const FIND_ONE_RESULT = {
  amount: 42.42,
  category: "exampleCategory",
  createdAt: new Date(),
  description: "exampleDescription",
  entryDate: new Date(),
  id: "exampleId",
  updatedAt: new Date(),
  user: "exampleUser",
};

const service = {
  createAccounting() {
    return CREATE_RESULT;
  },
  accountings: () => FIND_MANY_RESULT,
  accounting: ({ where }: { where: { id: string } }) => {
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

describe("Accounting", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: AccountingService,
          useValue: service,
        },
      ],
      controllers: [AccountingController],
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

  test("POST /accountings", async () => {
    await request(app.getHttpServer())
      .post("/accountings")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        entryDate: CREATE_RESULT.entryDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /accountings", async () => {
    await request(app.getHttpServer())
      .get("/accountings")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          entryDate: FIND_MANY_RESULT[0].entryDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /accountings/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/accountings"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /accountings/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/accountings"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        entryDate: FIND_ONE_RESULT.entryDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /accountings existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/accountings")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        entryDate: CREATE_RESULT.entryDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/accountings")
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
