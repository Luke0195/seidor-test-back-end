import Appointment from '../models/Appointment';

interface CreateAppointmentDTO {
  motorista: string;
  automovel: string;
  dataInicial: string;
  dataTermino: string;
  motivo: string;
}

interface ValidateDriverDTO {
  motorista: string;
}

interface ValidateCarDTO {
  automovel: string;
}
class AppointmentRepository {
  private appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  public validateDriver({ motorista }: ValidateDriverDTO): void {
    const findSameDriver = this.appointments.find(
      appointment => appointment.motorista === motorista
    );

    if (findSameDriver) {
      throw new Error('This driver is already have a car booked');
    }
  }

  public validateCar({ automovel }: ValidateCarDTO): void {
    const findSameCar = this.appointments.find(
      appointment => appointment.automovel === automovel
    );
    if (findSameCar) {
      throw new Error('This car is already booked');
    }
  }

  public create({
    motorista,
    dataInicial,
    dataTermino,
    motivo,
    automovel,
  }: CreateAppointmentDTO): Appointment {
    const appointment = new Appointment({
      motorista,
      automovel,
      dataInicial,
      dataTermino,
      motivo,
    });

    this.appointments.push(appointment);

    return appointment;
  }

  public findAll(): Appointment[] {
    return this.appointments;
  }
}

export default AppointmentRepository;
