import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonApp,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonRouterOutlet,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import {
  add,
  business,
  card,
  checkboxOutline,
  exit,
  search,
  trash
} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [
    IonApp,
    IonContent,
    IonHeader,
    IonItem,
    IonIcon,
    IonLabel,
    IonList,
    IonMenu,
    IonMenuToggle,
    IonRouterOutlet,
    IonTitle,
    IonToolbar,
    RouterLink
  ]
})
export class AppComponent {
  constructor() {
    addIcons({
      add,
      business,
      card,
      checkboxOutline,
      exit,
      search,
      trash
    });
  }

  onLogout(): void {
    console.log('logout');
  }
}
