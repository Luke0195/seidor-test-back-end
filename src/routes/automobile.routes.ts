import { Router } from "express";

const automobileRoutes = Router();

automobileRoutes.post("/", (request, response) => {
  return response.json({ message: "Automobile Routes" });
});

export default automobileRoutes;
