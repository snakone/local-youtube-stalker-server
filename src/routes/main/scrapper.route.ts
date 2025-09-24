import { Router } from "express";
import SCRAPPER_CTRL from "../../controllers/scrapper.controller";

const SCRAPPER_ROUTE = Router();

SCRAPPER_ROUTE.get('/scrapper', SCRAPPER_CTRL.scrappePage);

export default SCRAPPER_ROUTE;