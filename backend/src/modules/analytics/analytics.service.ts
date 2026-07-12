import { prisma } from "../../config/database";

export const analyticsService = {
  async recordEvent(input: { eventName: string; path?: string; userId?: string; metadata?: Record<string, unknown> }) {
    return prisma.analyticsEvent.create({ data: input as any });
  },

  /**
   * Compiles the monthly report NEIL's KPIs require to land by the 5th of
   * each month: traffic, top content, and knowledge-hub engagement. Wire
   * this up to a scheduled job (e.g. a cron-triggered worker, or a
   * serverless function on a monthly schedule) rather than calling it from
   * a request handler.
   */
  async compileMonthlyReport(month: Date) {
    const start = new Date(month.getFullYear(), month.getMonth(), 1);
    const end = new Date(month.getFullYear(), month.getMonth() + 1, 1);

    const pageViews = await prisma.analyticsEvent.count({
      where: { eventName: "page_view", occurredAt: { gte: start, lt: end } },
    });

    // TODO: merge with GA4 data via the Google Analytics Data API for
    // traffic sources and user journeys, per the NDIP documentation's
    // Digital Strategy & Analytics module.
    return { period: { start, end }, pageViews };
  },
};
