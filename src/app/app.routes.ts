import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'places/discover',
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
    loadComponent: () => import('./places/places.page').then((m) => m.PlacesPage),
    canActivate: [authGuard],
    children: [
      {
        path: 'discover',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./places/discover/discover.page').then((m) => m.DiscoverPage)
          },
          {
            path: ':placeId',
            loadComponent: () =>
              import('./places/discover/place-detail/place-detail.page').then(
                (m) => m.PlaceDetailPage
              )
          }
        ]
      },
      {
        path: 'offers',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./places/offers/offers.page').then((m) => m.OffersPage)
          },
          {
            path: 'new',
            loadComponent: () =>
              import('./places/offers/new-offer/new-offer.page').then(
                (m) => m.NewOfferPage
              )
          },
          {
            path: 'edit/:placeId',
            loadComponent: () =>
              import('./places/offers/edit-offer/edit-offer.page').then(
                (m) => m.EditOfferPage
              )
          },
          {
            path: ':placeId',
            loadComponent: () =>
              import('./places/offers/offer-bookings/offer-bookings.page').then(
                (m) => m.OfferBookingsPage
              )
          }
        ]
      }
    ]
  },

  {
    path: 'bookings',
    loadComponent: () => import('./bookings/bookings.page').then((m) => m.BookingsPage)
  }
];
