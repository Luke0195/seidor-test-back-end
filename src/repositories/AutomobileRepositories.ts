import { fi } from "date-fns/locale";
import Automobile from "../models/Automobile";

interface CreateAutomobileDTO {
  // Data transfer Object
  placa: string;
  cor: string;
  marca: string;
}

interface FindAutomobileDTO {
  id: string;
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

  public findByPlaca(placa: string): Automobile | null {
    const findAutomobile = this.automobiles.find(
      (automobile) => automobile.placa === placa
    );

    if (findAutomobile) {
      throw new Error("This automobile is already exists");
    }

    return null;
  }

  public findOne({ id }: FindAutomobileDTO): Automobile | null {
    const findAutomobile = this.automobiles.find(
      (automobile) => automobile.id === id
    );

    if (!findAutomobile) {
      throw new Error("This automobile was not found");
    }

    return findAutomobile;
  }
}

export default AutomobileRepositories;
