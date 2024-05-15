import { PaymentCreateNestedManyWithoutInvoicesInput } from "./PaymentCreateNestedManyWithoutInvoicesInput";
import { SubscriptionWhereUniqueInput } from "../subscription/SubscriptionWhereUniqueInput";

export type InvoiceCreateInput = {
  amount?: number | null;
  dueDate?: Date | null;
  issueDate?: Date | null;
  payments?: PaymentCreateNestedManyWithoutInvoicesInput;
  status?: string | null;
  subscription?: SubscriptionWhereUniqueInput | null;
};
