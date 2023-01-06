import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() { }

  list(){
    return [
      {_id:'1',nome:'Maria', endereco:'Rodovia Arthur Bernades'}
    ]
  }
}
