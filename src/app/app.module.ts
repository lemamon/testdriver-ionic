import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ChoosePage } from '../pages/choose/choose';
import { RegisterPage } from '../pages/register/register';
import { BookingService } from "../domain/booking/booking-service";
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

function provideStorage() {
  return new Storage(['indexeddb'], {
    name: 'testDriver',
    storeName: 'bookings'
  })
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChoosePage,
    RegisterPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChoosePage,
    RegisterPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    BookingService,
    { provide: Storage, useFactory: provideStorage }
  ]
})
export class AppModule { }
