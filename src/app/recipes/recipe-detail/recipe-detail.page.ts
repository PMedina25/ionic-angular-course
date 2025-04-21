import { Component, DestroyRef, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonRow,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';

import { Recipe } from '../recipes.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
  standalone: true,
  imports: [
    IonCol,
    IonGrid,
    IonContent,
    IonHeader,
    IonImg,
    IonItem,
    IonLabel,
    IonList,
    IonRow,
    IonTitle,
    IonToolbar
  ]
})
export class RecipeDetailPage implements OnInit {
  recipe!: Recipe | undefined;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly recipesService: RecipesService,
    private readonly destroyRef: DestroyRef
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((paramMap) => {
        if (!paramMap.has('recipeId')) {
          // redirect
          return;
        }

        const recipeId = paramMap.get('recipeId')!;

        this.recipe = this.recipesService.getRecipe(recipeId);
      });
  }
}
