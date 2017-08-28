import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { Car } from '../../domain/car/car';
import { Option } from '../../domain/option/option';
import { RegisterPage } from '../register/register'


@Component({
  templateUrl: 'choose.html'
})

export class ChoosePage {

  public car: Car;
  public options: Array<Option>;
  private _totalPrice: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.car = this.navParams.get('selectedCar');
    this._totalPrice = this.car.preco;

    this.options = [
      new Option('Freio ABS', 800),
      new Option('Ar-condicionado', 1000),
      new Option('MP3 Player', 500)
    ];
  }

  get totalPrice(): number {
    return this._totalPrice;
  }

  syncTotal(on: boolean, option): void {
    on ? this._totalPrice += option.preco : this._totalPrice -= option.preco;
  }

  goToRegister(): void {
    this.navCtrl.push(RegisterPage, {
      car: this.car,
      totalPrice: this.totalPrice
    });
  }
}
