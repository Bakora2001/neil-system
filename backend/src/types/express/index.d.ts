import type { AccessTokenPayload } from "../../common/middleware/auth.middleware";

declare global {
  namespace Express {
    interface Request {
      user?: AccessTokenPayload;
    }
  }
}

export {};
