import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProveedoresListComponent } from './proveedores-list/proveedores-list.component';
import { AddProveedorComponent } from './modal/add-proveedor/add-proveedor.component';

const routes: Routes = [
  {path:'', component: WelcomeComponent},
  {path:'lista-proveedores', component: ProveedoresListComponent},
  {path:'add-proveedor', component: AddProveedorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
