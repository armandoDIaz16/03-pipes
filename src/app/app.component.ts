import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre = 'Armando';
  nombre2 = 'perro gato ususario zapato ñoño';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI = Math.PI;
  a = 0.234;
  salario = 1500.5;

  resultadoPromesa = new Promise (( resolve, reject ) => {
setTimeout(() =>  resolve('llego la data'), 3500);
  });

  fecha = new Date();


}
