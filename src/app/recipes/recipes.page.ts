import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonAvatar,
  IonContent,
  IonHeader,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';

import { Recipe } from './recipes.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
  standalone: true,
  imports: [
    IonImg,
    IonAvatar,
    IonLabel,
    IonItem,
    IonContent,
    IonHeader,
    IonList,
    IonTitle,
    IonToolbar,
    RouterLink
  ]
})
export class RecipesPage {
  recipes!: Recipe[];

  constructor(private readonly recipesService: RecipesService) {}

  ionViewWillEnter() {
    this.recipes = this.recipesService.getAllRecipes();
  }
}
