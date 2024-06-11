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
import { RecurringInvoiceController } from "../recurringInvoice.controller";
import { RecurringInvoiceService } from "../recurringInvoice.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  amount: 42.42,
  client: "exampleClient",
  createdAt: new Date(),
  description: "exampleDescription",
  endDate: new Date(),
  frequency: "exampleFrequency",
  id: "exampleId",
  recurringInvoiceNumber: "exampleRecurringInvoiceNumber",
  startDate: new Date(),
  updatedAt: new Date(),
  user: "exampleUser",
};
const CREATE_RESULT = {
  amount: 42.42,
  client: "exampleClient",
  createdAt: new Date(),
  description: "exampleDescription",
  endDate: new Date(),
  frequency: "exampleFrequency",
  id: "exampleId",
  recurringInvoiceNumber: "exampleRecurringInvoiceNumber",
  startDate: new Date(),
  updatedAt: new Date(),
  user: "exampleUser",
};
const FIND_MANY_RESULT = [
  {
    amount: 42.42,
    client: "exampleClient",
    createdAt: new Date(),
    description: "exampleDescription",
    endDate: new Date(),
    frequency: "exampleFrequency",
    id: "exampleId",
    recurringInvoiceNumber: "exampleRecurringInvoiceNumber",
    startDate: new Date(),
    updatedAt: new Date(),
    user: "exampleUser",
  },
];
const FIND_ONE_RESULT = {
  amount: 42.42,
  client: "exampleClient",
  createdAt: new Date(),
  description: "exampleDescription",
  endDate: new Date(),
  frequency: "exampleFrequency",
  id: "exampleId",
  recurringInvoiceNumber: "exampleRecurringInvoiceNumber",
  startDate: new Date(),
  updatedAt: new Date(),
  user: "exampleUser",
};

const service = {
  createRecurringInvoice() {
    return CREATE_RESULT;
  },
  recurringInvoices: () => FIND_MANY_RESULT,
  recurringInvoice: ({ where }: { where: { id: string } }) => {
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

describe("RecurringInvoice", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: RecurringInvoiceService,
          useValue: service,
        },
      ],
      controllers: [RecurringInvoiceController],
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

  test("POST /recurringInvoices", async () => {
    await request(app.getHttpServer())
      .post("/recurringInvoices")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        endDate: CREATE_RESULT.endDate.toISOString(),
        startDate: CREATE_RESULT.startDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /recurringInvoices", async () => {
    await request(app.getHttpServer())
      .get("/recurringInvoices")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          endDate: FIND_MANY_RESULT[0].endDate.toISOString(),
          startDate: FIND_MANY_RESULT[0].startDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /recurringInvoices/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/recurringInvoices"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /recurringInvoices/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/recurringInvoices"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        endDate: FIND_ONE_RESULT.endDate.toISOString(),
        startDate: FIND_ONE_RESULT.startDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /recurringInvoices existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/recurringInvoices")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        endDate: CREATE_RESULT.endDate.toISOString(),
        startDate: CREATE_RESULT.startDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/recurringInvoices")
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
