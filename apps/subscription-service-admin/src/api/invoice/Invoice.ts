import { Payment } from "../payment/Payment";
import { Subscription } from "../subscription/Subscription";

export type Invoice = {
  amount: number | null;
  createdAt: Date;
  dueDate: Date | null;
  id: string;
  issueDate: Date | null;
  payments?: Array<Payment>;
  status: string | null;
  subscription?: Subscription | null;
  updatedAt: Date;
};
