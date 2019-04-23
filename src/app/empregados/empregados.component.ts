import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Empregado } from 'src/model/empregado';

@Component({


  selector: 'app-empregados',
  templateUrl: './empregados.component.html',
  styleUrls: ['./empregados.component.scss']
})

export class EmpregadosComponent implements OnInit {
  displayedColumns: string[] = [ 'nome', 'cargo', 'idade', 'acao'];
  dataSource: Empregado[];
  constructor(private _api: ApiService) { }

  ngOnInit() {
    this._api.getEmpregados()
    .subscribe(res => {
      this.dataSource = res;
      console.log(this.dataSource);
    }, err => {
      console.log(err);
    });
  }

}
