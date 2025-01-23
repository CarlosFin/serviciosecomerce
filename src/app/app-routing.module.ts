import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeEcomerceComponent } from './templates/home-ecomerce/home-ecomerce.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ActualizarProductoComponent } from './components/actualizar-producto/actualizar-producto.component';

const routes: Routes = [
  { path: '', component: HomeEcomerceComponent },
  { path: 'crear-producto', component: CrearProductoComponent },
  { path: 'home-ecomerce', component: HomeEcomerceComponent },
  { path: 'actualizar-producto/:id', component: ActualizarProductoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
