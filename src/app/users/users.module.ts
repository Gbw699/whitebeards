import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './register.component';
import { SignInComponent } from './sign-in.component';
import { UserRepositoryService } from '../services/user-repository.service';

@NgModule({
  imports: [SharedModule, FormsModule, ReactiveFormsModule, RouterModule],
  declarations: [RegisterComponent, SignInComponent],
  exports: [],
  providers: [UserRepositoryService],
})
export class UsersModule {}
