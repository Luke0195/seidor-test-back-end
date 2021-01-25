import { fi } from 'date-fns/locale';
import { request } from 'express';
import Automobile from '../models/Automobile';
import automobileRoutes from '../routes/automobile.routes';

interface CreateAutomobileDTO {
  // Data transfer Object
  placa: string;
  cor: string;
  marca: string;
}

interface FindAutomobileBYIdDTO {
  id: string;
}

interface FindAutomobileByColor {
  cor: string;
}

interface FindByPlacaDTO {
  placa: string;
}

class AutomobileRepositories {
  private automobiles: Automobile[];

  constructor() {
    this.automobiles = [];
  }

  public create({ placa, cor, marca }: CreateAutomobileDTO): Automobile {
    const automobile = new Automobile({ cor, marca, placa });
    this.automobiles.push(automobile);
    return automobile;
  }

  // Esse método não vai permitir que o usuário cadastre um novo carro com a mesma carro.
  public validationOfPlaca(placa: string): Automobile | null {
    const findAutomobile = this.automobiles.find(
      automobile => automobile.placa === placa
    );

    if (findAutomobile) {
      throw new Error('This automobile is already exists');
    }

    return null;
  }

  public findOne({ id }: FindAutomobileBYIdDTO): Automobile | null {
    const findAutomobile = this.automobiles.find(
      automobile => automobile.id === id
    );

    if (!findAutomobile) {
      throw new Error('This automobile was not found');
    }

    return findAutomobile;
  }

  public findByColor({ cor }: FindAutomobileByColor): Automobile[] {
    const results = cor
      ? this.automobiles.filter(automovel =>
          automovel.cor.includes(cor.toLocaleLowerCase())
        )
      : this.automobiles;

    return results;
  }

  public findByPlaca({ placa }: FindByPlacaDTO): Automobile[] {
    const results = placa
      ? this.automobiles.filter(automovel => automovel.placa.includes(placa))
      : this.automobiles;

    return results;
  }

  public findAll(): Automobile[] {
    return this.automobiles;
  }

  public delete({ id }: FindAutomobileBYIdDTO): void {
    const findAutomobile = this.automobiles.findIndex(
      automobile => automobile.id === id
    );

    if (findAutomobile < 0) {
      throw new Error('This automobile was not found');
    }
    this.automobiles.splice(findAutomobile, 1);
  }

  public update(
    { id }: FindAutomobileBYIdDTO,
    { cor, marca, placa }: CreateAutomobileDTO
  ): Automobile | null {
    const findIndex = this.automobiles.findIndex(
      automobile => automobile.id === id
    );
    if (findIndex < 0) {
      throw new Error('This automobile was not found');
    }

    const newAutomobile = new Automobile({ cor, marca, placa });

    this.automobiles[findIndex] = newAutomobile;
    return newAutomobile;
  }
}

export default AutomobileRepositories;
