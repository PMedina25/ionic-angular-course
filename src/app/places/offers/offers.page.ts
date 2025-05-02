import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonRow,
  IonThumbnail,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import { Place } from '../places.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonButtons,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonIcon,
    IonImg,
    IonItem,
    IonLabel,
    IonList,
    IonRow,
    IonThumbnail,
    IonTitle,
    IonToolbar,
    RouterLink
  ]
})
export class OffersPage implements OnInit {
  offers!: Place[];

  constructor(private readonly placesService: PlacesService) {}

  ngOnInit() {
    this.offers = this.placesService.places;
  }
}
