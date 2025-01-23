import { Component } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css'],
})
export class CrearProductoComponent {
  products: {
    id: number;
    nombre: string;
    descripcion: string;
    colores: any;
  }[] = [];

  nombreProducto: string = '';
  descripcionProducto: string = '';
  coloresProducto = [];
  imagenProducto: string = '';

  errorMensaje: string = '';

  constructor(private productosService: ProductosService) {}

  onImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagenProducto = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  agregarTarea() {
    if (this.nombreProducto.trim()) {
      const nueva = {
        id: Date.now(), // Generamos un ID único basado en la fecha actual
        nombre: this.nombreProducto,
        descripcion: this.descripcionProducto,
        colores: this.coloresProducto,
        imagen: this.imagenProducto,
      };
      this.productosService.products.push(nueva); // Añadimos la tarea al servicio
      this.products = this.productosService.getProducts(); // Actualizamos la lista en la vista
    } else {
      this.errorMensaje = 'No puedes añadir una tarea vacía';
    }
  }
}
