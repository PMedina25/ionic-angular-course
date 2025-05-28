import { Component, OnInit } from '@angular/core';
import {
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonMenuButton,
  IonRow,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import { Booking } from './booking.model';
import { BookingService } from './booking.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonItemOption,
    IonLabel,
    IonItemOptions,
    IonItem,
    IonItemSliding,
    IonList,
    IonCol,
    IonRow,
    IonGrid,
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonTitle,
    IonToolbar
  ]
})
export class BookingsPage implements OnInit {
  bookings!: Booking[];

  constructor(private readonly bookingService: BookingService) {}

  ngOnInit() {
    this.bookings = this.bookingService.bookings;
  }

  onCancelBooking(bookingId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
  }
}
