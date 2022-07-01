import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   mail= '';
   password= '';

  constructor(private userS: UserService) { }

  ngOnInit(): void {
  }

    login(){
      this.userS.login(this.mail, this.password);

    }
}
