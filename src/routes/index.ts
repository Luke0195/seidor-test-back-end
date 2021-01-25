import { Router } from "express";
import automobileRoutes from "./automobile.routes";

const routes = Router();

routes.use("/automobiles", automobileRoutes);
export default routes;
