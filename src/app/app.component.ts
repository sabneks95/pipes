import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Pipes';
  today=Date();

  user={
    name:'Kiran',
    age:28
  }

  emplyoee=[
    {
      name:"kiran",
      age:25,
      gender:"Male",
      email:"kiransabne@gmail.com",
      salary:23000
    },
    {
      name:"Snehal",
      age:22,
      gender:"Female",
      email:"snehal@gmail.com",
      salary:25000
    },
    {
      name:"Dilshad",
      age:28,
      gender:"Male",
      email:"dilshad@gmail.com",
      salary:25000
    },
    {
      name:"Afsa",
      age:29,
      gender:"Female",
      email:"tariq@gmail.com",
      salary:30000
    },
    {
      name:"Adil",
      age:25,
      gender:"Male",
      email:"adil@gmail.com",
      salary:35000
    }
  ]
}
