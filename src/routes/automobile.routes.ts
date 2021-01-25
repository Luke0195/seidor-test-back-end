import { Router } from "express";
import AutomobileRepositories from "../repositories/AutomobileRepositories";
import Automobile from "../models/Automobile";

const automobileRoutes = Router();
const automobilesRepository = new AutomobileRepositories();

automobileRoutes.post("/", (request, response) => {
  try {
    const { placa, cor, marca } = request.body;
    const findSameAutomobile = automobilesRepository.findByPlaca(placa);
    const automobile = automobilesRepository.create({ placa, cor, marca });
    return response.json(automobile);
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
});

automobileRoutes.get("/:id", (request, response) => {
  try {
    const { id } = request.params;
    const automobile = automobilesRepository.findOne({ id });
    return response.json(automobile);
  } catch (error) {
    return response.status(400).json({ message: error.messsage });
  }
});
export default automobileRoutes;
