import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeEcomerceComponent } from './templates/home-ecomerce/home-ecomerce.component';
import { HeaderComponent } from './components/header/header.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { FormsModule } from '@angular/forms';
import { ActualizarProductoComponent } from './components/actualizar-producto/actualizar-producto.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeEcomerceComponent,
    HeaderComponent,
    CrearProductoComponent,
    ActualizarProductoComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
