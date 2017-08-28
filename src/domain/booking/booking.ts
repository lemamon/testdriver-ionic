import { Car } from '../car/car';

export class Booking {

  constructor(
    public car: Car = null,
    public value: number = 0,
    public name: string = '',
    public address: string = '',
    public email: string = '',
    public date: string = new Date().toISOString()
  ){}
}
