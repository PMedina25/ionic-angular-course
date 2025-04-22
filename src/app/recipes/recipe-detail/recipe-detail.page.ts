import { Component, DestroyRef, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import {
  AlertController,
  IonBackButton,
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
    IonBackButton,
    IonButton,
    IonButtons,
    IonCol,
    IonGrid,
    IonContent,
    IonHeader,
    IonIcon,
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
    private readonly router: Router,
    private readonly alertController: AlertController,
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

  async onDeleteRecipe(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Are you sure?',
      message: 'Do you really want to delete the recipe?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            if (this.recipe) {
              this.recipesService.deleteRecipe(this.recipe.id);
            }

            this.router.navigate(['/recipes']);
          }
        }
      ]
    });

    await alert.present();
  }
}
