import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly BASE_URL = 'https://62bd594ebac21839b6010d22.mockapi.io/users'

  public user?: User;

  constructor(private http: HttpClient, private router: Router) {}

  login(mail: string, password: string) {
    const url = this.BASE_URL + '?email=' + mail ;
    this.http.get<User[]>(url).subscribe({
      next:users => {

        if(users[0].password === password){
          this.user = users[0]
          this.router.navigate(['/user'])
        }else{
          alert('user name o password non corretti')
        }
      },
      error:err => console.log(err)
    })

  }

  logout(){
    this.user = undefined
  }

  register(user: User){
    const newUser = user;
    newUser.dob = new Date(newUser.dob);
    this.http.post<User>(this.BASE_URL, newUser, { headers: new HttpHeaders({ 'Content-Type': 'application/json' })}).subscribe({
      next: result => console.log(result),
      error: err => console.log(err)
    })
    this.router.navigate(['/login']);
  }

}
