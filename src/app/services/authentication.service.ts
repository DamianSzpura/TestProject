import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { User } from "../models/user";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;

  constructor() {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(sessionStorage.getItem("currentUser"))
    );
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(name: string, password: string) {
    var user: User = new User();
    user.name = name;
    user.password = password;
    sessionStorage.setItem("currentUser", JSON.stringify(user));
    this.currentUserSubject.next(user);

    return user;
  }

  logout() {
    sessionStorage.removeItem("currentUser");
    this.currentUserSubject.next(null);
  }
}
