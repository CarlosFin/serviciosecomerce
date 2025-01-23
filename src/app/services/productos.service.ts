import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class ProductosService {
  products = [
    {
      id: 1,
      nombre: 'MacBook PRO',
      descripcion: 'El ordenador más potente de Apple',
      colores: ['silver', 'grey', 'black'],
      imagen: '../../../assets/img/macbook.jpeg',
    },
    {
      id: 2,
      nombre: 'Imac de 2017',
      descripcion: 'El Imac que representa a apple',
      colores: ['black'],
      imagen: '../../../assets/img/imac.jpeg',
    },
    {
      id: 3,
      nombre: 'Iphone 12',
      descripcion: 'No hace falta tener el ultimo Iphone',
      colores: ['yellow', 'blue', 'purple'],
      imagen: '../../../assets/img/iphone.jpeg',
    },
  ];

  getProducts() {
    return this.products;
  }

  // Borrar un producto
  deleteProduct(id: number) {
    this.products = this.products.filter((product) => product.id !== id);
  }

  // Actualizar producto
  updateProduct(
    id: number,
    nuevoProduct: { nombre?: string; descripcion?: string; colores?: string[]; imagen?: string}
  ) {
    const index = this.products.findIndex((product) => product.id === id);

    if (index !== -1) {
      this.products[index] = {
        // Operador de propagación: copia todas las propiedades del producto original y sobrescribe las que se pasan en nuevoProducto
        ...this.products[index],
        ...nuevoProduct,
      };
    } else {
      console.error(`No se encontró el producto con ID: ${id}`);
    }
  }
}
