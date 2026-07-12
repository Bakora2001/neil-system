// Redis is not used in this project.
// The backend uses in-memory rate limiting (express-rate-limit default store)
// and connects directly to the PostgreSQL database on Render.
// This file is intentionally a no-op stub so existing imports don't break.
export const redis = null;
