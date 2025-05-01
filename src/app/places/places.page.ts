import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonIcon,
  IonLabel,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
  standalone: true,
  imports: [
    IonLabel,
    IonIcon,
    IonContent,
    IonTabButton,
    IonTabBar,
    IonTabs,
    CommonModule,
    FormsModule
  ]
})
export class PlacesPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
