import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-home-ecomerce',
  templateUrl: './home-ecomerce.component.html',
  styleUrls: ['./home-ecomerce.component.css'],
})
export class HomeEcomerceComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductosService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  eliminarProducto(id: number) {
    this.productService.deleteProduct(id); // Eliminamos la tarea del servicio
    this.products = this.productService.getProducts(); // Actualizamos la lista en la vista
  }

}
