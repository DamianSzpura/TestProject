import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthenticationService } from "src/app/services/authentication.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.less"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  activeUser: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      name: ["", Validators.required],
      password: ["", Validators.required]
    });

    this.activeUser = this.authenticationService.currentUserValue;
    this.returnUrl = "/features";
  }

  get form() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    if (
      this.authenticationService.login(
        this.form.name.value,
        this.form.password.value
      )
    ) {
      this.router.navigate([this.returnUrl]);
    } else {
      this.loading = false;
    }
  }

  onLogout() {
    this.authenticationService.logout();
    this.activeUser = this.authenticationService.currentUserValue;
  }
}
