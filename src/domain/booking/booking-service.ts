import { Http } from '@angular/http';
import { Injectable } from '@angular/core'
import { Booking } from './booking';
import { Storage } from '@ionic/storage'

@Injectable()
export class BookingService {
  constructor(private _http: Http, private _storage: Storage) { }

  going(booking: Booking) {
    return this._http
      .get(`https://aluracar.herokuapp.com/salvarpedido?carro=${booking.car.nome}&nome=${booking.name}&preco=${booking.value}&endereco=${booking.address}&email=${booking.email}&dataAgendamento=${booking.date}`)
      .toPromise()
      .then(() => booking.confirm = true, err => console.log(err))
      .then(() => {
        let key = booking.email + booking.date.substr(0, 10);
        return this._storage.set(key, booking);
      })
      .then(() => booking.confirm);
  }
}
