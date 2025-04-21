import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonAvatar,
  IonContent,
  IonHeader,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar,
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
    CommonModule,
    FormsModule,
  ],
})
export class RecipesPage implements OnInit {
  recipes!: Recipe[];

  constructor(private readonly recipesService: RecipesService) {}

  ngOnInit() {
    this.recipes = this.recipesService.getAllRecipes();
  }
}
