import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SubscriptionWhereUniqueInput } from "../subscription/SubscriptionWhereUniqueInput";

export type InvoiceWhereInput = {
  amount?: FloatNullableFilter;
  dueDate?: DateTimeNullableFilter;
  id?: StringFilter;
  issueDate?: DateTimeNullableFilter;
  payments?: PaymentListRelationFilter;
  status?: StringNullableFilter;
  subscription?: SubscriptionWhereUniqueInput;
};
