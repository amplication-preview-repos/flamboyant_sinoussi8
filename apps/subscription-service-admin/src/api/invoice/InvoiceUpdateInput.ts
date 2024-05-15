import { PaymentUpdateManyWithoutInvoicesInput } from "./PaymentUpdateManyWithoutInvoicesInput";
import { SubscriptionWhereUniqueInput } from "../subscription/SubscriptionWhereUniqueInput";

export type InvoiceUpdateInput = {
  amount?: number | null;
  dueDate?: Date | null;
  issueDate?: Date | null;
  payments?: PaymentUpdateManyWithoutInvoicesInput;
  status?: string | null;
  subscription?: SubscriptionWhereUniqueInput | null;
};
