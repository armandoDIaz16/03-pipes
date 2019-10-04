import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre = 'Armando#4a1=si2!f';
  nombre2 = 'perro gato ususario zapato ñoño';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI = Math.PI;
  a = 0.234;
  salario = 1500.5;

  heroe = {
    nombre: "Logan",
    clave: "Wolverine",
    edad: 500,
    direccion:{
      calle: "Primera",
      casa: "19"
    }
  };


  video = "mOeSfOJrUIk";


  resultadoPromesa = new Promise (( resolve, reject ) => {
setTimeout(() =>  resolve('llego la data'), 3500);
  });

  fecha = new Date();

  mostrar = false;


}
