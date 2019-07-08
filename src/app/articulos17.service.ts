import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Articulos17Service {

  constructor() { }
  //Lo modificamos por el siguiente código que permita recuperar desde la componente el vector de artículos:
  retornar(){
    return [
      {
        codigo:1,
        descripcion: "kiwi",
        precio: 12.33
      },
      {
        codigo:2,
        descripcion: "mango",
        precio: 8.43
      },
      {
        codigo:3,
        descripcion: "higo",
        precio: 9.12
      }
    ]
  }
}
