import Driver from '../models/Driver';

interface CreateDriverDTO {
  nome: string;
}
class DriverRepository {
  private drivers: Driver[];

  constructor() {
    this.drivers = [];
  }

  public create({ nome }: CreateDriverDTO): Driver {
    const createDriver = new Driver({ nome });
    this.drivers.push(createDriver);
    return createDriver;
  }

  public findById(id: string): Driver | null {
    const findDriverById = this.drivers.find(driver => driver.id === id);

    if (!findDriverById) {
      throw new Error('This Driver does not exists');
    }

    return findDriverById || null;
  }

  public findDriver(nome: string): Driver[] | null {
    const findDriver = nome
      ? this.drivers.filter(driver => driver.nome.includes(nome))
      : this.drivers;

    if (!findDriver) {
      throw new Error('This driver does not exists');
    }

    return findDriver || null;
  }

  public deleteDriver(id: string): void {
    const findDriver = this.drivers.findIndex(driver => driver.id === id);

    if (findDriver < 0) {
      throw new Error('This driver does not exists');
    }
    this.drivers.splice(findDriver, 1);
  }

  public uppdateDriver(id: string, nome: string): Driver | null {
    const findDriver = this.drivers.findIndex(driver => driver.id === id);

    if (findDriver < 0) {
      throw new Error('This driver does not exists');
    }

    const updatedDrive = new Driver({ nome });

    this.drivers[findDriver] = updatedDrive;

    return updatedDrive;
  }
}

export default DriverRepository;
