import { Http } from '@angular/http';
import { Injectable } from '@angular/core'
import { Booking } from './booking';

@Injectable()
export class BookingService {
  constructor(private _http: Http){}

  going(booking: Booking) {
    return this._http
    .get(`https://aluracar.herokuapp.com/salvarpedido?carro=${booking.car.nome}&nome=${booking.name}&preco=${booking.value}&endereco=${booking.address}&email=${booking.email}&dataAgendamento=${booking.date}`)
    .toPromise();
  }
}
