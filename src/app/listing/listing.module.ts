import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ListingRoutingModule } from "./listing-routing.module";
import { AllListingComponent } from "./all-listing/all-listing.component";

@NgModule({
  declarations: [AllListingComponent],
  imports: [CommonModule, ListingRoutingModule]
})
export class ListingModule {}
