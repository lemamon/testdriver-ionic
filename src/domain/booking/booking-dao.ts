import { Injectable } from '@angular/core';
import { Booking } from "./booking";
import { Storage } from '@ionic/storage';


@Injectable()
export class BookingDao {
  constructor(private _storage: Storage) { }

  private _getKey(booking: Booking): string {
    return booking.email + booking.date.substr(0, 10);
  }

  save(booking: Booking) {
    return this._storage.set(this._getKey(booking), booking);
  }

  isDuplicated(booking: Booking) {
    return this._storage
      .get(this._getKey(booking))
      .then(data => data ? true : false);
  }
}
