import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutesModule } from './routes.module';
import { MaterialModule } from './material.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { UserInfoComponent } from './user-info/user-info.component';

@NgModule({
  declarations: [LoginComponent, UserInfoComponent],
  imports: [
    CommonModule,
    RoutesModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [UserService]
})
export class UserModule { }
