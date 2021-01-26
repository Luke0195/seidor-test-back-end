import { Router } from 'express';
import AppointmentRepository from '../repositories/AppoinmentRepository';

const appointmentsRouter = Router();

const appointmentRepository = new AppointmentRepository();

appointmentsRouter.post('/', (request, response) => {
  try {
    const {
      motorista,
      automovel,
      dataInicial,
      dataTermino,
      motivo,
    } = request.body;

    const validateMotorista = appointmentRepository.validateDriver({
      motorista,
    });

    const validateCar = appointmentRepository.validateCar({ automovel });

    const appointment = appointmentRepository.create({
      motorista,
      motivo,
      automovel,
      dataInicial,
      dataTermino,
    });

    return response.json(appointment);
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
});

appointmentsRouter.get('/', (request, response) => {
  try {
    const appointments = appointmentRepository.findAll();

    return response.json(appointments);
  } catch (error) {
    return response.json({ message: error.message });
  }
});

export default appointmentsRouter;
