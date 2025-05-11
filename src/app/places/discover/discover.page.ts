import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonRow,
  IonThumbnail,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import { Place } from '../places.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonButtons,
    IonItem,
    CurrencyPipe,
    IonCard,
    IonCardContent,
    IonCardTitle,
    IonCardHeader,
    IonCardSubtitle,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonImg,
    IonLabel,
    IonList,
    IonMenuButton,
    IonRow,
    IonThumbnail,
    IonTitle,
    IonToolbar,
    RouterLink
  ]
})
export class DiscoverPage implements OnInit {
  places!: Place[];

  constructor(private readonly placesService: PlacesService) {}

  ngOnInit() {
    this.places = this.placesService.places;
  }
}
