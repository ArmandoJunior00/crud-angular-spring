import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})

//implements OnInit abaixo
export class ClientesComponent  {

  clientes: Cliente[] = [
    {_id:'1',name:'Mario', endereco:'Pass São João'}
  ];
  displayedColumns=['name', 'endereco']

  constructor() {
    // this.clientes = [];

  }
}
