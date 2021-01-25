import { Router } from 'express';
import DriverRepositories from '../repositories/DriverRepositories';

const driverRoutes = Router();
const driverRepositories = new DriverRepositories();
driverRoutes.post('/', (request, response) => {
  try {
    const { nome } = request.body;
    const driver = driverRepositories.create({ nome });
    return response.json(driver);
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
});

driverRoutes.get('/:id', (request, response) => {
  try {
    const { id } = request.params;
    const findDriver = driverRepositories.findById(id);
    return response.json(findDriver);
  } catch (error) {
    return response.json({ message: error.message });
  }
});
export default driverRoutes;
