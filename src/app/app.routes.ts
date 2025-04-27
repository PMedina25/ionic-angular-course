import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'recipes',
    pathMatch: 'full',
  },
  {
    path: 'recipes',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./recipes/recipes.page').then((m) => m.RecipesPage),
      },
      {
        path: ':recipeId',
        loadComponent: () =>
          import('./recipes/recipe-detail/recipe-detail.page').then(
            (m) => m.RecipeDetailPage
          ),
      },
    ],
  },
  {
    path: 'auth',
    loadComponent: () => import('./auth/auth.page').then( m => m.AuthPage)
  },
  {
    path: 'discover',
    loadComponent: () => import('./places/discover/discover.page').then( m => m.DiscoverPage)
  },
  {
    path: 'new-offer',
    loadComponent: () => import('./places/offers/new-offer/new-offer.page').then( m => m.NewOfferPage)
  },
  {
    path: 'edit-offer',
    loadComponent: () => import('./places/offers/edit-offer/edit-offer.page').then( m => m.EditOfferPage)
  },
  {
    path: 'place-detail',
    loadComponent: () => import('./places/discover/place-detail/place-detail.page').then( m => m.PlaceDetailPage)
  },
  {
    path: 'offer-bookings',
    loadComponent: () => import('./places/offers/offer-bookings/offer-bookings.page').then( m => m.OfferBookingsPage)
  },
  {
    path: 'places',
    loadComponent: () => import('./places/places.page').then( m => m.PlacesPage)
  },
];
