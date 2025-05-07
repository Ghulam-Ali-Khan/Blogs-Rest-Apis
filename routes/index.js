import { Router } from "express";
import postsRoutes from "./post.routes.js";
import categoriesRoutes from "./category.routes.js";

const routes = Router();

routes.use(postsRoutes);
routes.use(categoriesRoutes);

export default  routes;