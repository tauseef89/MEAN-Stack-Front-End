import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private ROOT_URL = "http://localhost:4000/api/user";

  constructor(private http: HttpClient) {}

  register(user) {
    return this.http.post<any>(`${this.ROOT_URL}/register`, user);
  }
}
