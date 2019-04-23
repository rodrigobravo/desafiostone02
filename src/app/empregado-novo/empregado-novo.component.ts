import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-empregado-novo',
  templateUrl: './empregado-novo.component.html',
  styleUrls: ['./empregado-novo.component.scss']
})
export class EmpregadoNovoComponent implements OnInit {

  productForm: FormGroup;
  isLoadingResults = false;
  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.productForm = this.formBuilder.group({
   'nome' : [null, Validators.required],
   'cargo' : [null, [Validators.required, Validators.minLength(4)]],
   'idade' : [null, Validators.required]
 });
 }
 addEmpregado(form: NgForm) {
  this.isLoadingResults = true;
  this.api.addEmpregado(form)
    .subscribe(res => {
        const id = res['id'];
        this.isLoadingResults = false;
        this.router.navigate(['/empregado-detalhe', id]);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      });
}
}
