/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Subscription as PrismaSubscription,
  Invoice as PrismaInvoice,
} from "@prisma/client";

export class SubscriptionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.SubscriptionCountArgs, "select">
  ): Promise<number> {
    return this.prisma.subscription.count(args);
  }

  async subscriptions<T extends Prisma.SubscriptionFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SubscriptionFindManyArgs>
  ): Promise<PrismaSubscription[]> {
    return this.prisma.subscription.findMany<Prisma.SubscriptionFindManyArgs>(
      args
    );
  }
  async subscription<T extends Prisma.SubscriptionFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SubscriptionFindUniqueArgs>
  ): Promise<PrismaSubscription | null> {
    return this.prisma.subscription.findUnique(args);
  }
  async createSubscription<T extends Prisma.SubscriptionCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SubscriptionCreateArgs>
  ): Promise<PrismaSubscription> {
    return this.prisma.subscription.create<T>(args);
  }
  async updateSubscription<T extends Prisma.SubscriptionUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SubscriptionUpdateArgs>
  ): Promise<PrismaSubscription> {
    return this.prisma.subscription.update<T>(args);
  }
  async deleteSubscription<T extends Prisma.SubscriptionDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SubscriptionDeleteArgs>
  ): Promise<PrismaSubscription> {
    return this.prisma.subscription.delete(args);
  }

  async findInvoices(
    parentId: string,
    args: Prisma.InvoiceFindManyArgs
  ): Promise<PrismaInvoice[]> {
    return this.prisma.subscription
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .invoices(args);
  }
}
