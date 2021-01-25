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
}

export default DriverRepositories;
