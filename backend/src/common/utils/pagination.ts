/**
 * Cursor-based pagination helpers. Prefer this over OFFSET pagination for
 * any list endpoint (news, knowledge hub resources, institutions) that will
 * grow past a few thousand rows — OFFSET gets linearly slower as the table
 * grows; cursor pagination stays fast because it seeks on an indexed column.
 */
export interface CursorPageParams {
  cursor?: string;
  limit?: number;
}

export function parseCursorParams(query: Record<string, unknown>): Required<CursorPageParams> {
  const limit = Math.min(Number(query.limit) || 20, 100);
  const cursor = typeof query.cursor === "string" ? query.cursor : "";
  return { cursor, limit };
}

export function buildPrismaCursorArgs({ cursor, limit }: Required<CursorPageParams>) {
  return {
    take: limit + 1, // fetch one extra to know if there's a next page
    ...(cursor ? { cursor: { id: cursor }, skip: 1 } : {}),
  };
}

export function toPaginatedResult<T extends { id: string }>(rows: T[], limit: number) {
  const hasMore = rows.length > limit;
  const items = hasMore ? rows.slice(0, limit) : rows;
  return {
    items,
    nextCursor: hasMore ? items[items.length - 1]?.id ?? null : null,
  };
}
