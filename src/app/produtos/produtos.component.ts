import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Produto } from 'src/model/produto';

@Component({


  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})

export class ProdutosComponent implements OnInit {
  displayedColumns: string[] = [ 'nome', 'cargo', 'idade', 'acao'];
  dataSource: Produto[];
  constructor(private _api: ApiService) { }

  ngOnInit() {
    this._api.getProdutos()
    .subscribe(res => {
      this.dataSource = res;
      console.log(this.dataSource);
    }, err => {
      console.log(err);
    });
  }

}
