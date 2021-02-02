import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private Auth: AuthService, private router: Router) { }

  ngOnInit(): void { }

  onlogin(formLogin) {
    let login = formLogin.value.login;
    let pwd = formLogin.value.pwd;
    this.Auth.getUserDetails(login, pwd).subscribe(data => {

      if (data.success) {

        this.router.navigate(['home'])
        this.Auth.setLoggedIn(true)
      }
      else {
        window.alert(data.message);
        //this.Auth.loggedStatus = false;
      }
    }
    );
  }
}
