import { Router } from 'express';
import automobileRoutes from './automobile.routes';
import driverRoutes from './driver.routes';
import appointmentsRoutes from './appointments.routes';

const routes = Router();

routes.use('/automobiles', automobileRoutes);
routes.use('/drivers', driverRoutes);
routes.use('/appointments', appointmentsRoutes);
export default routes;
