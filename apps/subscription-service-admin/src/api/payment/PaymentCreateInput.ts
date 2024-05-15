import { InvoiceWhereUniqueInput } from "../invoice/InvoiceWhereUniqueInput";

export type PaymentCreateInput = {
  amount?: number | null;
  date?: Date | null;
  invoice?: InvoiceWhereUniqueInput | null;
  method?: string | null;
  status?: string | null;
};
