import { Router } from "express";
import Automobile from "../models/Automobile";

const automobileRoutes = Router();
const automobiles: Automobile[] = [];
automobileRoutes.post("/", (request, response) => {
  const { placa, cor, marca } = request.body;

  const automobile = new Automobile(placa, cor, marca);

  automobiles.push(automobile);

  return response.json(automobile);
});

export default automobileRoutes;
