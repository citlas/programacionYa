import { Component, ViewChild } from '@angular/core';
import { SelectornumericoComponent } from './selectornumerico/selectornumerico.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'programacionYa';
  nombre = 'Rodriguez Pablo';
  edad = 40;
  email = 'rpablo@gmail.com';
  sueldos = [1700, 1600, 1900];
  activo = true;
  //ejercicio 8
  valor1:number;
  valor2:number;
  valor3:number;
  resultado:string;
 //ejercicio 10
  mensaje='';
  //ejercicio 12
  @ViewChild('selector2', null) selector2: SelectornumericoComponent;
  @ViewChild('selector3', null) selector3: SelectornumericoComponent;
 //ejercicio 13
 articulos=[{codigo:1,descripcion:'papas',precio:10.22},
            {codigo:2,descripcion:'manzanas',precio:12.10},
            {codigo:3,descripcion:'melon',precio:52.30},
            {codigo:4,descripcion:'cebollas',precio:17},
            {codigo:5,descripcion:'calabaza',precio:20}]
 //ejercicio 
 //ejercicio 
 //ejercicio 
 //ejercicio 

  esActivo(){
    if(this.activo){
      return 'Trabajador Activo';
     } else {
      return 'Trabajador Inctivo';
    }
  }

  ultimos3Sueldos(){
    let suma=0;
    for(let x=0; x<this.sueldos.length; x++){
      suma+=this.sueldos[x];
      return suma;
    }
  }

  //ejercicio 6
  contador=1;
  incrementar(){
    this.contador++;
  }
  decrementar(){
    this.contador--;
  }

  //ejercicio 7
  nombre2="";
  apellido2="";

  art={
    codigo:null,
    descripcion:null,
    precio:null
  }

  articulos =[{codigo:1, descripcion:'papas',precio:10.55},
    {codigo:2, descripcion:'manzanas',precio:12.10},
    {codigo:3, descripcion:'melón',precio:52.30},
    {codigo:4, descripcion:'cebollas',precio:17},
    {codigo:5, descripcion:'calabaza',precio:20},
  ];

  hayRegistros(){
    return this.articulos.length>0
  }

  agregar(){
    for (let x = 0; x < this.articulos.length; x++) 
      if(this.articulos[x].codigo==this.art.codigo){
        alert('ya existe un articulo con dicho codigo')
        return;
      } 
        this.articulos.push({codigo: this.art.codigo,
        descripcion: this.art.descripcion,
      precio: this.art.precio})
      this.art.codigo=null;
      this.art.descripcion=null;
      this.art.precio=null;
      }
    
  

  borrar(art){
    for (let x = 0; x < this.articulos.length; x++) {
      if(this.articulos[x].codigo==art.codigo){
        this.articulos.splice(x,1);
        return;
      } 
    }
  }

  seleccionar(art){
    this.art.codigo=art.codigo;
    this.art.descripcion=art.descripcion;
    this.art.precio=art.precio;
  }

  modificar(){
    for (let x = 0; x < this.articulos.length; x++) 
      if(this.articulos[x].codigo==this.art.codigo){
        this.articulos[x].descripcion=this.art.descripcion;
        this.articulos[x].precio=this.art.precio;
        return;
      } 
      alert('no existe el código de articulo ingresado')
    
  }

  //ejercicio 8
  constructor(){
    this.valor1 = this.retornarAleatorio();
    this.valor2 = this.retornarAleatorio();
    this.valor3 = this.retornarAleatorio();
  }

  retornarAleatorio(){
    return Math.trunc(Math.random() * 6) + 1;
  }

  tirar(){
    this.valor1 = this.retornarAleatorio();
    this.valor2 = this.retornarAleatorio();
    this.valor3 = this.retornarAleatorio();
    if(this.valor1 ==this.valor2 && this.valor1 ==this.valor3){
      this.resultado ='Ganó';
    } else {
      this.resultado ='Perdió';
    }
  }
 
  //ejercicio 10
  actualizar(t){
    this.mensaje = t + '(se actualiza cada 10 segundos hasta llegar a 30)';
  }

//ejercicio 12
fijarSelector2(valor:number){
  this.selector2.fijar(valor);
}
fijarSelector3(valor:number){
  this.selector3.fijar(valor);
}


}//fin
