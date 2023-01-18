import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Cliente } from '../model/cliente';
import { ClientesService } from './../../service/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss'],
})

//implements OnInit abaixo
export class ClientesComponent {
  clientes$: Observable<Cliente[]>;
  displayedColumns = ['name', 'endereco'];

  // clientesService: ClientesService;

  constructor(private clientesService: ClientesService,
    public dialog: MatDialog
    ) {
    // this.clientes = [];
    //this.clientesService = new ClientesService();
    this.clientes$ = this.clientesService.list()
    .pipe(
      catchError((error) => {
        this.onError('Erro ao carregar cliente.')
        return of([]);
      })
    );
  }

  onError(errorMSG: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMSG
    });
  }

  ngOnInit(): void {}
}
