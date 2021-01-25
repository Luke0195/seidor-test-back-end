import { Router } from 'express';
import automobileRoutes from './automobile.routes';
import driverRoutes from './driver.routes';

const routes = Router();

routes.use('/automobiles', automobileRoutes);
routes.use('/drivers', driverRoutes);
export default routes;
