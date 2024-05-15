import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InvoiceListRelationFilter } from "../invoice/InvoiceListRelationFilter";

export type SubscriptionWhereInput = {
  customer?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  invoices?: InvoiceListRelationFilter;
  plan?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
  status?: StringNullableFilter;
};
