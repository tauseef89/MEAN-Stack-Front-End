import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AllListingComponent } from "./all-listing/all-listing.component";
import { ListingDetailComponent } from "./listing-detail/listing-detail.component";
import { AddListingComponent } from "./add-listing/add-listing.component";
import { AuthGuard } from "../user/guard/auth.guard";

const routes: Routes = [
  {
    path: "",
    component: AllListingComponent
  },
  {
    path: "add-listing",
    component: AddListingComponent,
    canActivate: [AuthGuard]
  },
  {
    path: ":id",
    component: ListingDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListingRoutingModule {}
