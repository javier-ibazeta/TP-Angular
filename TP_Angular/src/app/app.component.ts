import { Component, OnInit, Output} from '@angular/core';

type produc ={
  nombre: string;
  costo: number;
} 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  mostrar: boolean= true;

  productos: produc [] = [
    { nombre:'Azucar', costo: 100},
    { nombre:'Yerba' , costo: 150},
    { nombre:'Arroz' , costo: 200},
    { nombre:'Harina', costo: 250},
  ];  
   
   Ver():void{
    this.mostrar = !this.mostrar;
  
   }
}
