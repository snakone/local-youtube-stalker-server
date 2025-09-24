import { Router } from "express";
import YOUTUBE_CTRL from "../../controllers/youtube.controller";

const YOUTUBE_ROUTE = Router();

YOUTUBE_ROUTE.get('/youtube', YOUTUBE_CTRL.getVideoDetails);

export default YOUTUBE_ROUTE;