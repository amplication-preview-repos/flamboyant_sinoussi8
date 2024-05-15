import { InvoiceCreateNestedManyWithoutSubscriptionsInput } from "./InvoiceCreateNestedManyWithoutSubscriptionsInput";

export type SubscriptionCreateInput = {
  customer?: string | null;
  endDate?: Date | null;
  invoices?: InvoiceCreateNestedManyWithoutSubscriptionsInput;
  plan?: string | null;
  startDate?: Date | null;
  status?: string | null;
};
