import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpregadosComponent } from './empregados/empregados.component';
import { EmpregadoDetalheComponent } from './empregado-detalhe/empregado-detalhe.component';
import { EmpregadoNovoComponent } from './empregado-novo/empregado-novo.component';
import { EmpregadoEditarComponent } from './empregado-editar/empregado-editar.component';

const routes: Routes = [
  {
    path: 'empregados',
    component: EmpregadosComponent,
    data: { title: 'Lista de Empregados' }
  },
  {
    path: 'empregado-detalhe/:id',
    component: EmpregadoDetalheComponent,
    data: { title: 'Detalhe do Empregado' }
  },
  {
    path: 'empregado-novo',
    component: EmpregadoNovoComponent,
    data: { title: 'Adicionar Empregado' }
  },
  {
    path: 'empregado-editar/:id',
    component: EmpregadoEditarComponent,
    data: { title: 'Editar o Empregado' }
  },
  { path: '',
    redirectTo: '/empregados',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
