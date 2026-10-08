import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  name: string = 'ñengo Flow';
  age:number = 32;
  gender: string = 'Masculino';
  stature: number = 1.76;
  isProgrammer: boolean = true;

}
