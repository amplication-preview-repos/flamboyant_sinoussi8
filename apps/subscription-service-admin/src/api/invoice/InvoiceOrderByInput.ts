import { SortOrder } from "../../util/SortOrder";

export type InvoiceOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  dueDate?: SortOrder;
  id?: SortOrder;
  issueDate?: SortOrder;
  status?: SortOrder;
  subscriptionId?: SortOrder;
  updatedAt?: SortOrder;
};
