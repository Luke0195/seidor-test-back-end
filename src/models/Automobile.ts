import { v4 as uuid } from "uuid";

class Automobile {
  id: string;

  placa: string;

  cor: string;

  marca: string;

  constructor({ placa, cor, marca }: Omit<Automobile, "id">) {
    this.id = uuid();
    this.placa = placa;
    this.cor = cor;
    this.marca = marca;
  }
}

export default Automobile;
