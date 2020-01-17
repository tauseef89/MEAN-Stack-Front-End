import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Listing } from "../model/listing";

@Injectable({
  providedIn: "root"
})
export class ListingService {
  private ROOT_URL = "http://localhost:4000/api/listings";

  // Http Options
  private httpOptions = {
    headers: new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("auth-token", localStorage.getItem("token"))
  };

  constructor(private http: HttpClient) {}

  getListings(): Observable<Listing[]> {
    return this.http.get<Listing[]>(this.ROOT_URL);
  }

  getListing(id: string) {
    return this.http.get<Listing>(`${this.ROOT_URL}/${id}`);
  }

  addListing(listing) {
    return this.http.post<any>(this.ROOT_URL, listing, this.httpOptions);
  }

  editListing(listing, id: string) {
    return this.http.put<any>(
      `${this.ROOT_URL}/${id}`,
      listing,
      this.httpOptions
    );
  }

  deleteListing(id: string) {
    return this.http.delete(`${this.ROOT_URL}/${id}`, this.httpOptions);
  }
}
