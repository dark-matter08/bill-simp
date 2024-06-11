import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { InvoiceList } from "./invoice/InvoiceList";
import { InvoiceCreate } from "./invoice/InvoiceCreate";
import { InvoiceEdit } from "./invoice/InvoiceEdit";
import { InvoiceShow } from "./invoice/InvoiceShow";
import { QuotationList } from "./quotation/QuotationList";
import { QuotationCreate } from "./quotation/QuotationCreate";
import { QuotationEdit } from "./quotation/QuotationEdit";
import { QuotationShow } from "./quotation/QuotationShow";
import { RecurringInvoiceList } from "./recurringInvoice/RecurringInvoiceList";
import { RecurringInvoiceCreate } from "./recurringInvoice/RecurringInvoiceCreate";
import { RecurringInvoiceEdit } from "./recurringInvoice/RecurringInvoiceEdit";
import { RecurringInvoiceShow } from "./recurringInvoice/RecurringInvoiceShow";
import { EmailList } from "./email/EmailList";
import { EmailCreate } from "./email/EmailCreate";
import { EmailEdit } from "./email/EmailEdit";
import { EmailShow } from "./email/EmailShow";
import { CreditNoteList } from "./creditNote/CreditNoteList";
import { CreditNoteCreate } from "./creditNote/CreditNoteCreate";
import { CreditNoteEdit } from "./creditNote/CreditNoteEdit";
import { CreditNoteShow } from "./creditNote/CreditNoteShow";
import { AccountingList } from "./accounting/AccountingList";
import { AccountingCreate } from "./accounting/AccountingCreate";
import { AccountingEdit } from "./accounting/AccountingEdit";
import { AccountingShow } from "./accounting/AccountingShow";
import { DeliveryNoteList } from "./deliveryNote/DeliveryNoteList";
import { DeliveryNoteCreate } from "./deliveryNote/DeliveryNoteCreate";
import { DeliveryNoteEdit } from "./deliveryNote/DeliveryNoteEdit";
import { DeliveryNoteShow } from "./deliveryNote/DeliveryNoteShow";
import { StatementList } from "./statement/StatementList";
import { StatementCreate } from "./statement/StatementCreate";
import { StatementEdit } from "./statement/StatementEdit";
import { StatementShow } from "./statement/StatementShow";
import { ClientList } from "./client/ClientList";
import { ClientCreate } from "./client/ClientCreate";
import { ClientEdit } from "./client/ClientEdit";
import { ClientShow } from "./client/ClientShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"BillSimp"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Invoice"
          list={InvoiceList}
          edit={InvoiceEdit}
          create={InvoiceCreate}
          show={InvoiceShow}
        />
        <Resource
          name="Quotation"
          list={QuotationList}
          edit={QuotationEdit}
          create={QuotationCreate}
          show={QuotationShow}
        />
        <Resource
          name="RecurringInvoice"
          list={RecurringInvoiceList}
          edit={RecurringInvoiceEdit}
          create={RecurringInvoiceCreate}
          show={RecurringInvoiceShow}
        />
        <Resource
          name="Email"
          list={EmailList}
          edit={EmailEdit}
          create={EmailCreate}
          show={EmailShow}
        />
        <Resource
          name="CreditNote"
          list={CreditNoteList}
          edit={CreditNoteEdit}
          create={CreditNoteCreate}
          show={CreditNoteShow}
        />
        <Resource
          name="Accounting"
          list={AccountingList}
          edit={AccountingEdit}
          create={AccountingCreate}
          show={AccountingShow}
        />
        <Resource
          name="DeliveryNote"
          list={DeliveryNoteList}
          edit={DeliveryNoteEdit}
          create={DeliveryNoteCreate}
          show={DeliveryNoteShow}
        />
        <Resource
          name="Statement"
          list={StatementList}
          edit={StatementEdit}
          create={StatementCreate}
          show={StatementShow}
        />
        <Resource
          name="Client"
          list={ClientList}
          edit={ClientEdit}
          create={ClientCreate}
          show={ClientShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
