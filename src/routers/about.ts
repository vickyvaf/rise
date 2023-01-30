import express from "express";
import { getAbout } from "../controllers/about";

const route = express();

route.get("/", getAbout);

export default route;
