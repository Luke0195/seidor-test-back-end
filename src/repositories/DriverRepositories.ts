import Driver from '../models/Driver';

interface CreateDriverDTO {
  nome: string;
}
class DriverRepositories {
  private drivers: Driver[];

  constructor() {
    this.drivers = [];
  }

  public create({ nome }: CreateDriverDTO): Driver {
    const driver = new Driver({ nome });
    this.drivers.push(driver);
    return driver;
  }

  public findById(id: string): Driver | null {
    const findDriverById = this.drivers.find(driver => driver.id === id);

    if (!findDriverById) {
      throw new Error('This Driver does not exists');
    }

    return findDriverById || null;
  }

  public findAll(): Driver[] | null {
    return this.drivers;
  }

  public findOne(nome: string): Driver[] | null {
    const findDriver = nome
      ? this.drivers.filter(driver => driver.nome.includes(nome))
      : this.drivers;

    if (!findDriver) {
      throw new Error('This driver does not exists');
    }

    return findDriver || null;
  }
}

export default DriverRepositories;
