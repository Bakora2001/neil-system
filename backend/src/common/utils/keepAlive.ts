/**
 * keepAlive.ts
 * Pings the server's own /health endpoint every 14 minutes so Render's
 * free-tier instance never idles and spins down (idle timeout = 15 min).
 */

const PING_INTERVAL_MS = 14 * 60 * 1000; // 14 minutes

export function startKeepAlive(serverUrl: string): void {
  // Only run in production — no need to self-ping during local dev
  if (process.env["NODE_ENV"] !== "production") return;

  const healthUrl = `${serverUrl}/health`;

  const ping = async () => {
    try {
      const res = await fetch(healthUrl, { method: "GET" });
      console.log(
        `[keep-alive] ${new Date().toISOString()} → ${healthUrl} — ${res.status} ${res.statusText}`
      );
    } catch (err) {
      console.warn(`[keep-alive] ping failed:`, (err as Error).message);
    }
  };

  // First ping after 1 minute so the server is fully ready
  setTimeout(() => {
    void ping();
    setInterval(() => void ping(), PING_INTERVAL_MS);
  }, 60_000);

  console.log(`[keep-alive] Self-ping scheduled every 14 min → ${healthUrl}`);
}
