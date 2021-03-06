import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { Empregado } from 'src/model/empregado';

@Component({
  selector: 'app-empregado-editar',
  templateUrl: './empregado-editar.component.html',
  styleUrls: ['./empregado-editar.component.scss']
})
export class EmpregadoEditarComponent implements OnInit {
  empregado: Empregado = { id: null, nome: '', cargo: '', idade: null };
  id: number = null;
  productForm: FormGroup;
  nome: String = '';
  cargo: String = '';
  idade: number = null;
  isLoadingResults = false;
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getEmpregado(this.route.snapshot.params['id']);
    this.productForm = this.formBuilder.group({
   'nome' : [null, Validators.required],
   'cargo' : [null, Validators.required],
   'idade' : [null, Validators.required]
 });
 }

 getEmpregado(id: number) {
  this.api.getEmpregado(id).subscribe(data => {
    this.id = data.id;
    this.productForm.setValue({
      nome: data.nome,
      cargo: data.cargo,
      idade: data.idade
    });
  });
}

updateEmpregado(form: NgForm) {
  this.isLoadingResults = true;
  this.api.updateEmpregado(this.id, form)
    .subscribe(res => {
        this.isLoadingResults = false;
        this.router.navigate(['/empregado-detalhe/' + this.id]);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
}
}
