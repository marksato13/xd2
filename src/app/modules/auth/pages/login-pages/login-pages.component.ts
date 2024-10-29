import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-pages',
  templateUrl: './login-pages.component.html',
  styleUrls: ['./login-pages.component.css']
})
export class LoginPagesComponent implements OnInit {

  formInputs: FormGroup = new FormGroup({});
  verifyDataSession: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.initInputs();
  }

  public initInputs(): void {
    this.formInputs = new FormGroup({
      usuario: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20)
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    });
  }

  public login(): void {
    const { usuario, password } = this.formInputs.value;
    if (usuario === 'admin' && password === '123') {
      this.verifyDataSession = false;
      // Redirige a la página específica después del inicio de sesión
      this.router.navigateByUrl('/home/inicio');
    } else {
      this.verifyDataSession = true;
    }
  }
}
