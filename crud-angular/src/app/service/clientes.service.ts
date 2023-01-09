import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Cliente } from './../clientes/model/cliente';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  constructor(private httpClient: HttpClient) {}

  list(): Cliente[] {
    return [{ _id: '1', name: 'Mario', endereco: 'Pass São João' }];
  }
}
