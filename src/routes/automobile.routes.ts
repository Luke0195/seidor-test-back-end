import { Router } from 'express';
import AutomobileRepositories from '../repositories/AutomobileRepository';

const automobileRoutes = Router();
const automobilesRepository = new AutomobileRepositories();

automobileRoutes.get('/', (request, response) => {
  try {
    const { cor } = request.query;
    const filterCors = automobilesRepository.findByColor({ cor });

    return response.json(filterCors);
  } catch (error) {
    return response.json({ message: error.message });
  }
});

automobileRoutes.get('/marcas', (request, response) => {
  try {
    const { marca } = request.query;
    const filterByMarca = automobilesRepository.findByMarca({ marca });

    return response.json(filterByMarca);
  } catch (error) {
    return response.json({ message: error.message });
  }
});

automobileRoutes.post('/', (request, response) => {
  try {
    const { placa, cor, marca } = request.body;
    const findSameAutomobile = automobilesRepository.validationOfPlaca(placa);
    const automobile = automobilesRepository.create({ placa, cor, marca });
    return response.json(automobile);
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
});

automobileRoutes.get('/:id', (request, response) => {
  try {
    const { id } = request.params;
    const automobile = automobilesRepository.findOne({ id });
    return response.json(automobile);
  } catch (error) {
    return response.status(400).json({ message: error.messsage });
  }
});

automobileRoutes.put('/:id', (request, response) => {
  try {
    const { id } = request.params;
    const { placa, cor, marca } = request.body;
    const automobile = automobilesRepository.update(
      { id },
      { cor, marca, placa }
    );

    return response.json(automobile);
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
});

automobileRoutes.delete('/:id', (request, response) => {
  try {
    const { id } = request.params;
    const automobile = automobilesRepository.delete({ id });
    return response.json({ message: 'This automobile was deleted' });
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
});
export default automobileRoutes;
