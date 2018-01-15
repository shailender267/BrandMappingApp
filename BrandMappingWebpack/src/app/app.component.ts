import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  firstName: string;
  lastName: string;
  email: string;

  onLoginClick = false;

  public user: any;

  //onLoginClick() {
  //  let body2 = {
  //    firstName: this.firstName,
  //    lastName: this.lastName,
  //    email: this.email
  //  };

  //  console.log(body2);
  //}


  onProceed(firstName: string, lastName: string, email: string) {
    this.user = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email
    };
     
   console.log(this.user);

    return this.user;
  }
  

  //console.log(user);
  
}
