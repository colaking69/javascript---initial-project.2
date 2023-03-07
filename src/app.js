import PAGES from "./models/pageModel.js";
import { onChangePage } from "./routes/router.js";
import {
  HOME_PAGE_LINK,
  ABOUT_PAGE_LINK,
  CREATE_PAGE_LINK,
  LOGIN_PAGE_LINK,
  ERROR_PAGE_LINK,
} from "./services/domService.js";

/* ************** event listener ************* */
// pages link

HOME_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.HOME));
ABOUT_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.ABOUT));
CREATE_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.CREATE));
LOGIN_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.LOGIN));
ERROR_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.ERROR));
