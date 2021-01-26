import { Router } from 'express';
import DriverRepositories from '../repositories/DriverRepositories';

const driverRoutes = Router();
const driverRepository = new DriverRepositories();
driverRoutes.post('/', (request, response) => {
  try {
    const { nome } = request.body;
    const driver = driverRepository.create({ nome });
    return response.json(driver);
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
});

driverRoutes.get('/:id', (request, response) => {
  try {
    const { id } = request.params;
    const findDriver = driverRepository.findById(id);
    return response.json(findDriver);
  } catch (error) {
    return response.json({ message: error.message });
  }
});

driverRoutes.get('/', (request, response) => {
  try {
    const { nome } = request.query;
    const driver = driverRepository.findOne(nome);
    return response.json(driver);
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
});

driverRoutes.delete('/:id', (request, response) => {
  try {
    const { id } = request.params;
    const findDriver = driverRepository.delete(id);
    return response.status(200).json({ message: 'This driver was deleted' });
  } catch (error) {
    return response.json({ message: error.message });
  }
});
export default driverRoutes;
