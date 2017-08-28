import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, Alert } from 'ionic-angular';
import { Booking } from '../../domain/booking/booking';
import { BookingService } from "../../domain/booking/booking-service";

import { HomePage } from '../home/home';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})

export class RegisterPage {

  public booking: Booking;
  private _alert: Alert;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private bookingService: BookingService,
    private _alertCtrl: AlertController) {

    this.booking = new Booking(
      this.navParams.get('car'),
      this.navParams.get('totalPrice')
    );

    this._alert = _alertCtrl.create({
      title: 'Notice',
      buttons: [{ text: 'Ok', handler: () => navCtrl.setRoot(HomePage) }]
    })

  }

  going(): void {

    if (!this.booking.name || !this.booking.address || !this.booking.email) {
      this._alertCtrl.create({
        title: 'Invalid Values!!!',
        buttons: [{ text: 'Ok' }]
      }).present();

      return;
    }

    this.bookingService
      .going(this.booking)
      .then(confirm => {
        confirm ?
          this._alert.setSubTitle('Sucess!!') :
          this._alert.setSubTitle('Error!!');
        this._alert.present();
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPagePage');
  }

}
