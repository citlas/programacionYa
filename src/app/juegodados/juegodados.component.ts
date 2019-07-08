import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juegodados',
  templateUrl: './juegodados.component.html',
  styleUrls: ['./juegodados.component.css']
})
export class JuegodadosComponent implements OnInit {
  valor116:number;
  valor216:number;
  valor316:number;
  resultado16: string;
  constructor() {
    this.valor116 = this.retornarAleatorio();
    this.valor216 = this.retornarAleatorio();
    this.valor316 = this.retornarAleatorio();
   }
   retornarAleatorio(){
     return Math.trunc(Math.random()*6)+1;
   }
   tirar(){
    this.valor116 = this.retornarAleatorio();
    this.valor216 = this.retornarAleatorio();
    this.valor316 = this.retornarAleatorio();
    if(this.valor116==this.valor216 && this.valor116==this.valor316){
      this.resultado16='Ganó'
    }else {
      this.resultado16='Perdió'
    }
   }

  ngOnInit() {
  }

}
