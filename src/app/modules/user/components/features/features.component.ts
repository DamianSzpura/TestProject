import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "src/app/services/authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-features",
  templateUrl: "./features.component.html",
  styleUrls: ["./features.component.less"]
})
export class FeaturesComponent implements OnInit {
  returnUrl: string;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    this.returnUrl = "/login";
  }

  onLogout() {
    this.authenticationService.logout();
    this.router.navigate([this.returnUrl]);
  }
}
