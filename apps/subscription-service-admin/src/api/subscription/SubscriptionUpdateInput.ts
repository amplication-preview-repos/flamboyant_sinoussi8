import { InvoiceUpdateManyWithoutSubscriptionsInput } from "./InvoiceUpdateManyWithoutSubscriptionsInput";

export type SubscriptionUpdateInput = {
  customer?: string | null;
  endDate?: Date | null;
  invoices?: InvoiceUpdateManyWithoutSubscriptionsInput;
  plan?: string | null;
  startDate?: Date | null;
  status?: string | null;
};
