import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonText,
  IonThumbnail
} from '@ionic/angular/standalone';

import { DatePipe } from '@angular/common';
import { Place } from '../../places.model';

@Component({
  selector: 'app-offer-item',
  templateUrl: './offer-item.component.html',
  styleUrls: ['./offer-item.component.scss'],
  imports: [
    IonText,
    IonIcon,
    IonImg,
    IonLabel,
    IonItem,
    IonThumbnail,
    DatePipe,
    RouterLink
  ]
})
export class OfferItemComponent implements OnInit {
  @Input({ required: true }) offer!: Place;

  constructor() {}

  ngOnInit() {}

  get dummyDate(): Date {
    return new Date();
  }
}
