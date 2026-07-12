import { Router } from "express";
import { requireAuth, requireRole } from "../../common/middleware/auth.middleware";

export const cmsRouter = Router();

// The CMS module is the write-side counterpart to the public `programs`,
// `news`, and `partners` read endpoints. Every route here should be guarded
// to Secretariat/Admin only, since this is what lets non-technical staff
// publish content without a developer.
//
// Planned endpoints (see NDIP documentation, Training & Documentation module):
//   POST   /cms/programs            create a program (draft)
//   PATCH  /cms/programs/:id        edit + publish/unpublish
//   POST   /cms/news                create a news post
//   PATCH  /cms/news/:id            edit + publish/unpublish
//   POST   /cms/partners            add a partner logo/entry
//   POST   /cms/knowledge-hub       upload a knowledge hub resource + tags
//
// Each should reuse the same controller/service split as `modules/programs`,
// just targeting the unpublished/draft rows and requiring:
//   cmsRouter.use(requireAuth, requireRole("SECRETARIAT", "ADMIN"));
