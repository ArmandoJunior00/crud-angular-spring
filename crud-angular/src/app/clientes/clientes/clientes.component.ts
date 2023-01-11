import { ClientesService } from './../../service/clientes.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/cliente';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss'],
})

//implements OnInit abaixo
export class ClientesComponent {
  clientes$: Observable <Cliente[]>;
  displayedColumns = ['name', 'endereco'];

  // clientesService: ClientesService;

  constructor(private clientesService: ClientesService) {
    // this.clientes = [];
    //this.clientesService = new ClientesService();
    this.clientes$ = this.clientesService.list();
  }

  ngOnInit(): void{

  }
}
