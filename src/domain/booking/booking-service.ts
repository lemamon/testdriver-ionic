import { Http } from '@angular/http';
import { Injectable } from '@angular/core'
import { Booking } from './booking';
import { BookingDao } from "./booking-dao";

@Injectable()
export class BookingService {
  constructor(private _http: Http, private _dao: BookingDao) { }

  going(booking: Booking) {

    return this._dao
      .isDuplicated(booking)
      .then(duplicated => {
        if (duplicated) throw new Error('Booking duplicated');
        return this._http
          .get(`https://aluracar.herokuapp.com/salvarpedido?carro=${booking.car.nome}&nome=${booking.name}&preco=${booking.value}&endereco=${booking.address}&email=${booking.email}&dataAgendamento=${booking.date}`)
          .toPromise()
          .then(() => booking.confirm = true, err => console.log(err))
          .then(() => this._dao.save(booking))
          .then(() => booking.confirm);
      });
  }
}
