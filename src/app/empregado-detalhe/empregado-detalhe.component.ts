import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Empregado } from 'src/model/empregado';
@Component({
  selector: 'app-empregado-detalhe',
  templateUrl: './empregado-detalhe.component.html',
  styleUrls: ['./empregado-detalhe.component.scss']
})
export class EmpregadoDetalheComponent implements OnInit {
  empregado: Empregado = { id: null, nome: '', cargo: '', idade: null };
  isLoadingResults = true;
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }


  ngOnInit() {
    this.getEmpregado(this.route.snapshot.params['id']);
    console.log(this.route.snapshot.params['id']);
  }

  getEmpregado(id) {
    this.api.getEmpregado(id)
      .subscribe(data => {
        this.empregado = data;
        console.log(this.empregado);
        this.isLoadingResults = false;
      });

  }

  deleteEmpregado(id) {
    this.isLoadingResults = true;
    this.api.deleteEmpregado(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/empregados']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }
}
