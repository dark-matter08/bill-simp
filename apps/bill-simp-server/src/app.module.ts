import { Module } from "@nestjs/common";
import { InvoiceModule } from "./invoice/invoice.module";
import { QuotationModule } from "./quotation/quotation.module";
import { RecurringInvoiceModule } from "./recurringInvoice/recurringInvoice.module";
import { EmailModule } from "./email/email.module";
import { CreditNoteModule } from "./creditNote/creditNote.module";
import { AccountingModule } from "./accounting/accounting.module";
import { DeliveryNoteModule } from "./deliveryNote/deliveryNote.module";
import { StatementModule } from "./statement/statement.module";
import { ClientModule } from "./client/client.module";
import { UserModule } from "./user/user.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    InvoiceModule,
    QuotationModule,
    RecurringInvoiceModule,
    EmailModule,
    CreditNoteModule,
    AccountingModule,
    DeliveryNoteModule,
    StatementModule,
    ClientModule,
    UserModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
