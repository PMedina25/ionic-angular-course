import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
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
  calendar,
  card,
  checkboxOutline,
  create,
  exit,
  search,
  trash
} from 'ionicons/icons';
import { AuthService } from './auth/auth.service';

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
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {
    addIcons({
      add,
      business,
      calendar,
      card,
      checkboxOutline,
      create,
      exit,
      search,
      trash
    });
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/auth');
  }
}
