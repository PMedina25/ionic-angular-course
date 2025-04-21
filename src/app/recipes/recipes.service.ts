import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private readonly recipes = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      ingredients: ['French Fries', 'Pork Meat', 'Salad'],
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes'],
    },
  ];

  constructor() {}

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return this.recipes.find((recipe) => recipe.id === recipeId);
  }
}
