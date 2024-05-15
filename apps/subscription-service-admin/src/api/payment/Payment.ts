import { Invoice } from "../invoice/Invoice";

export type Payment = {
  amount: number | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  invoice?: Invoice | null;
  method: string | null;
  status: string | null;
  updatedAt: Date;
};
