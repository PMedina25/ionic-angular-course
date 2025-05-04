import { Component, DestroyRef, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  NavController
} from '@ionic/angular/standalone';
import { Place } from '../../places.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar]
})
export class EditOfferPage implements OnInit {
  place!: Place | undefined;

  constructor(
    private readonly placesService: PlacesService,
    private readonly navController: NavController,
    private readonly route: ActivatedRoute,
    private readonly destroyRef: DestroyRef
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((paramMap) => {
        const placeId: string | null = paramMap.get('placeId');

        if (!placeId) {
          this.navController.navigateBack('/places/offers');
          return;
        }

        this.place = this.placesService.getPlace(placeId);
      });
  }
}
