import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  invoiceId?: SortOrder;
  method?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
