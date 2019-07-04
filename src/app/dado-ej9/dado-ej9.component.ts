import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dado-ej9',
  templateUrl: './dado-ej9.component.html',
  styleUrls: ['./dado-ej9.component.css']
})
export class DadoEj9Component implements OnInit {

  @Input() valor: number;
  
  constructor() { }

  ngOnInit() {
  }

}
