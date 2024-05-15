import { Invoice } from "../invoice/Invoice";

export type Subscription = {
  createdAt: Date;
  customer: string | null;
  endDate: Date | null;
  id: string;
  invoices?: Array<Invoice>;
  plan: string | null;
  startDate: Date | null;
  status: string | null;
  updatedAt: Date;
};
