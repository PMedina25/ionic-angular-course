import { Component, OnInit, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonRow,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  standalone: true,
  imports: [
    IonRow,
    IonCol,
    IonGrid,
    IonInput,
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    FormsModule
  ]
})
export class AuthPage implements OnInit {
  isLogin = signal<boolean>(true);

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    if (!form.valid) {
      form.control.markAllAsTouched();
      return;
    }

    this.authService.login();
    this.router.navigateByUrl('/places/discover');
  }

  onSwitchAuthMode() {
    this.isLogin.update((prevIsLogin) => !prevIsLogin);
  }
}
