import { v4 as uuid } from 'uuid';

class Appointment {
  id: string;

  dataInicial: string;

  dataTermino: string;

  motorista: string;

  automovel: string;

  motivo: string;

  constructor({
    dataInicial,
    dataTermino,
    motorista,
    automovel,
    motivo,
  }: Omit<Appointment, 'id'>) {
    this.id = uuid();
    this.dataInicial = dataInicial;
    this.dataTermino = dataTermino;
    this.motorista = motorista;
    this.automovel = automovel;
    this.motivo = motivo;
  }
}

export default Appointment;
