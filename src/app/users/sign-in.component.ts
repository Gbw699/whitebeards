import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserRepositoryService } from '../services/user-repository.service';
import { IUser } from './user.model';

@Component({
  styleUrls: ['./sign-in.components.css'],
  templateUrl: './sign-in.component.html',
})
export class SignInComponent {
  credentials: any = {};

  constructor(
    private router: Router,
    private userRepository: UserRepositoryService
  ) {}

  signIn(credentials: any) {
    this.userRepository.signIn(credentials).subscribe({
      error: (err) => {
        console.error(err, 'Error');
      },
      complete: () => this.router.navigate(['/catalog']),
    });
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
