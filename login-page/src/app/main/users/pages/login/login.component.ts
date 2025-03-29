import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  LoginForm: FormGroup;
  errorMsg:  string = '';

  constructor(private form: FormBuilder, private userService: UserService, private router: Router){
    this.LoginForm = this.form.group({
      username: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  get username(){
    return this.LoginForm.get('username');
  }
  get password(){
    return this.LoginForm.get('password');
  }

  onLogin(){
    this.userService.validateLogin(this.LoginForm.value).subscribe({
      next: (data) => {
        if (data?.user) {
          this.router.navigate(['/main/dashboard']);
          this.errorMsg = '';
        }
      },
      error: () => {
          this.errorMsg = 'Invalid username or password.';
      }
    });
  }
}
