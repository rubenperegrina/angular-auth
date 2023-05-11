import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form!: FormGroup;
  submitting = false;
  submitted = false;

  formBuilder = inject(FormBuilder);
  router = inject(Router);
  authService = inject(AuthService);

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.authService.authenticateUser(true).subscribe({
      next: (res: string) => {
        console.log("🚀 ~ file: login.component.ts:35 ~ LoginComponent ~ this.authService.authenticateUser ~ res:", res)
      }
    })
    this.router.navigateByUrl('/home');
  }
}
