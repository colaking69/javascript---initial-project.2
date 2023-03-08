import PAGES from "../models/pageModel.js";
import {
  HOME_PAGE,
  ABOUT_PAGE,
  SHIPMENT_PAGE,
  MENU_PAGE,
  LOGIN_PAGE,
  JOIN_PAGE,
  ERROR_PAGE,
} from "../services/domService.js";

export const onChangePage = (page) => {
  HOME_PAGE.className = "d-none";
  ABOUT_PAGE.className = "d-none";
  SHIPMENT_PAGE.className = "d-none";
  MENU_PAGE.className = "d-none";
  LOGIN_PAGE.className = "d-none";
  JOIN_PAGE.className = "d-none";
  ERROR_PAGE.className = "d-none";
  if (page === PAGES.HOME) return (HOME_PAGE.className = "d-block");
  if (page === PAGES.ABOUT) return (ABOUT_PAGE.className = "d-block");
  if (page === PAGES.SHIPMENT) return (SHIPMENT_PAGE.className = "d-block");
  if (page === PAGES.MENU) return (MENU_PAGE.className = "d-block");
  if (page === PAGES.LOGIN) return (LOGIN_PAGE.className = "d-block");
  if (page === PAGES.JOIN) return (JOIN_PAGE.className = "d-block");
  return (ERROR_PAGE.className = "d-block");
};
