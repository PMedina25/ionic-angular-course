import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'recipes',
    pathMatch: 'full'
  },
  {
    path: 'recipes',
    children: [
      {
        path: '',
        loadComponent: () => import('./recipes/recipes.page').then((m) => m.RecipesPage)
      },
      {
        path: ':recipeId',
        loadComponent: () =>
          import('./recipes/recipe-detail/recipe-detail.page').then(
            (m) => m.RecipeDetailPage
          )
      }
    ]
  },
  {
    path: 'auth',
    loadComponent: () => import('./auth/auth.page').then((m) => m.AuthPage)
  },
  {
    path: 'places',
    loadComponent: () => import('./places/places.page').then((m) => m.PlacesPage)
  },
  {
    path: 'bookings',
    loadComponent: () => import('./bookings/bookings.page').then((m) => m.BookingsPage)
  }
];
