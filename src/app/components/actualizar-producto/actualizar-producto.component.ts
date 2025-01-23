import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrls: ['./actualizar-producto.component.css'],
})
export class ActualizarProductoComponent {
  productNombre: string | null = null;
  productDesc: string | null = null;
  productColores: string[] = [];
  productId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductosService
  ) {}

  ngOnInit() {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    this.productNombre = this.route.snapshot.queryParamMap.get('nombre');
    this.productDesc = this.route.snapshot.queryParamMap.get('descripcion');
    this.productColores = this.route.snapshot.queryParamMap.getAll('colores');

    this.nombreProduct = this.productNombre || '';
    this.descProduct = this.productDesc || '';
    this.coloresProduct = [...this.productColores];
  }

  nombreProduct: string = '';
  descProduct: string = '';
  coloresProduct: string[] = [];

  products: any[] = [];
  product: any = {
    id: Number(this.route.snapshot.paramMap.get('id')),
    nombre: this.nombreProduct,
    descripcion: this.descProduct,
    colores: this.coloresProduct,
  };

  actualizarProduct(id: number) {
    const nuevaInfo = {
      nombre: this.nombreProduct,
      descripcion: this.descProduct,
      colores: this.coloresProduct,
    }; // Marcamos la tarea como completada
    this.productService.updateProduct(id, nuevaInfo); // Actualizamos la tarea
    this.products = this.productService.getProducts(); // Actualizamos la lista en la vista
  }
}
