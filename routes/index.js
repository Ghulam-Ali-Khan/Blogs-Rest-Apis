import { Router } from "express";
import postsRoutes from "./post.routes.js";
import categoriesRoutes from "./category.routes.js";
import authRoutes from "./auth.routes.js";

const routes = Router();

routes.use('/posts', postsRoutes);
routes.use('/categories', categoriesRoutes);
routes.use('/auth', authRoutes)

export default routes;