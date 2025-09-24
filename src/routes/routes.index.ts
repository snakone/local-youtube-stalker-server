import Router from "express";
import MAIN_ROUTE from './main/main.route';
import YOUTUBE_ROUTE from "./main/youtube.route";
import SCRAPPER_ROUTE from "./main/scrapper.route";

const ROUTES = Router();

ROUTES.use('/', [
  MAIN_ROUTE,
  YOUTUBE_ROUTE,
  SCRAPPER_ROUTE
]);

export default ROUTES;