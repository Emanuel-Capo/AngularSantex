import { Component } from '@angular/core';

type Products = {
  name: string,
  price: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  techProds: Products[] = [
    { name: "monitor", price: 12300},
    { name: "teclado", price: 1800},
    { name: "mouse", price: 700},
    { name: "cpu", price: 32500},
    { name: "parlante", price: 3500},
    { name: "impresora", price: 7500},
    { name: "disco externo", price: 9000},
    { name: "memoria ram", price: 11200},
  ]

  show: boolean = true;

  cambio = () => this.show = !this.show
}
