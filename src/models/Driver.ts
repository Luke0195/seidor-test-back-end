import { v4 as uuid } from 'uuid';

class Driver {
  id: string;

  nome: string;

  constructor({ nome }: Omit<Driver, 'id'>) {
    this.id = uuid();
    this.nome = nome;
  }
}

export default Driver;
