import { Component } from '@angular/core';
import { AuthService } from '@mdv6/core-data';
import { Router } from '@angular/router';

@Component({
  selector: 'mdv6-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard';

  links = [
    {path: '/kicks', title: 'kicks'}
  ];

  get authenticated() {
    return this.authService.authenticated;
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  onLogout() {
    this.authService.logout();
    this.router.navigateByUrl('/login')
  }


}
