import express from "express";
import * as views from "../views/home.views.js";

const route = express.Router();

route.get("/", (req, res) => {
  res.send(views.menuPage());
});

export default route;
