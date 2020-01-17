import { Component, OnInit } from "@angular/core";
import { ListingService } from "../service/listing.service";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-add-listing",
  templateUrl: "./add-listing.component.html",
  styleUrls: ["./add-listing.component.scss"]
})
export class AddListingComponent implements OnInit {
  listingForm = new FormGroup({
    title: new FormControl("", [Validators.required]),
    price: new FormControl("", [Validators.required]),
    locality: new FormControl("", [Validators.required]),
    details: new FormControl("", [Validators.required])
  });

  constructor(private listingService: ListingService, private router: Router) {}

  ngOnInit() {}

  newListing() {
    if (this.listingForm.valid) {
      this.listingService.addListing(this.listingForm.value).subscribe(res => {
        this.listingForm.reset();
        this.router.navigate(["/listings"]);
      });
    }
  }
}
