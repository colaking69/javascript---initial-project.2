import PAGES from "../models/pageModel.js";
import { onChangePage } from "./router.js";
import {
  HOME_PAGE_LINK,
  ABOUT_PAGE_LINK,
  SHIPMENT_PAGE_LINK,
  LOGIN_PAGE_LINK,
  ERROR_PAGE_LINK,
  MENU_PAGE_LINK,
  JOIN_PAGE_LINK,
} from "../services/domService.js";

/* ************** event listener ************* */
// pages link

HOME_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.HOME));
ABOUT_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.ABOUT));
SHIPMENT_PAGE_LINK.addEventListener("click", () =>
  onChangePage(PAGES.SHIPMENT)
);
MENU_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.MENU));
LOGIN_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.LOGIN));
JOIN_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.JOIN));
ERROR_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.ERROR));
