import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListingRoutingModule } from './listing-routing.module';
import { AllListingComponent } from './all-listing/all-listing.component';
import { ListingDetailComponent } from './listing-detail/listing-detail.component';


@NgModule({
  declarations: [AllListingComponent, ListingDetailComponent],
  imports: [
    CommonModule,
    ListingRoutingModule
  ]
})
export class ListingModule { }
