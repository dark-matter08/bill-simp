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
import { CreditNoteController } from "../creditNote.controller";
import { CreditNoteService } from "../creditNote.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  amount: 42.42,
  client: "exampleClient",
  createdAt: new Date(),
  creditNoteDate: new Date(),
  creditNoteNumber: "exampleCreditNoteNumber",
  id: "exampleId",
  reason: "exampleReason",
  updatedAt: new Date(),
  user: "exampleUser",
};
const CREATE_RESULT = {
  amount: 42.42,
  client: "exampleClient",
  createdAt: new Date(),
  creditNoteDate: new Date(),
  creditNoteNumber: "exampleCreditNoteNumber",
  id: "exampleId",
  reason: "exampleReason",
  updatedAt: new Date(),
  user: "exampleUser",
};
const FIND_MANY_RESULT = [
  {
    amount: 42.42,
    client: "exampleClient",
    createdAt: new Date(),
    creditNoteDate: new Date(),
    creditNoteNumber: "exampleCreditNoteNumber",
    id: "exampleId",
    reason: "exampleReason",
    updatedAt: new Date(),
    user: "exampleUser",
  },
];
const FIND_ONE_RESULT = {
  amount: 42.42,
  client: "exampleClient",
  createdAt: new Date(),
  creditNoteDate: new Date(),
  creditNoteNumber: "exampleCreditNoteNumber",
  id: "exampleId",
  reason: "exampleReason",
  updatedAt: new Date(),
  user: "exampleUser",
};

const service = {
  createCreditNote() {
    return CREATE_RESULT;
  },
  creditNotes: () => FIND_MANY_RESULT,
  creditNote: ({ where }: { where: { id: string } }) => {
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

describe("CreditNote", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CreditNoteService,
          useValue: service,
        },
      ],
      controllers: [CreditNoteController],
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

  test("POST /creditNotes", async () => {
    await request(app.getHttpServer())
      .post("/creditNotes")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creditNoteDate: CREATE_RESULT.creditNoteDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /creditNotes", async () => {
    await request(app.getHttpServer())
      .get("/creditNotes")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creditNoteDate: FIND_MANY_RESULT[0].creditNoteDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /creditNotes/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/creditNotes"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /creditNotes/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/creditNotes"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creditNoteDate: FIND_ONE_RESULT.creditNoteDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /creditNotes existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/creditNotes")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creditNoteDate: CREATE_RESULT.creditNoteDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/creditNotes")
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
