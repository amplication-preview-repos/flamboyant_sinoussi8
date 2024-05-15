import { InvoiceWhereUniqueInput } from "../invoice/InvoiceWhereUniqueInput";

export type PaymentUpdateInput = {
  amount?: number | null;
  date?: Date | null;
  invoice?: InvoiceWhereUniqueInput | null;
  method?: string | null;
  status?: string | null;
};
