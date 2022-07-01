import { Component } from '@angular/core';
import { UserService } from './services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'surf-shop';

  constructor(public userS: UserService) { }

  logout() {
    this.userS.logout();

  }

}
