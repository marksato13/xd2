import { Component } from '@angular/core';
import { Cate } from '../../../../models/categoria';
import { CateService } from '../../services/cate.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cate-pages',
  templateUrl: './cate-pages.component.html',
  styleUrls: ['./cate-pages.component.css']
})
export class CatePagesComponent {
  categoria: Cate[] = [];
  nuevoCategoria: Cate = new Cate();
  categoriaSeleccionado: Cate = new Cate();

  constructor(private cateService: CateService) {}

  ngOnInit(): void {
    this.getAllCategorias();
  }


  getAllCategorias() {
    this.cateService.getAllCategoria().subscribe((data) => {
      this.categoria = data;
    });
  }


  crearCategoria() {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Deseas agregar un nuevo autor?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
    this.cateService.createCategoria(this.nuevoCategoria).subscribe(
      (data) => {
        console.log('Categoria creado', data);
        this.nuevoCategoria = new Cate(); 
        this.getAllCategorias(); 
      },
      (error) => {
        console.error('Error al crear el autor', error);
        Swal.fire('Error', 'No se pudo crear el autor', 'error');

      }
    );
  }
});
}



  seleccionarCategoria(categoria: Cate) {
    this.categoriaSeleccionado = categoria;
  }



  actualizarCategoria() {
    this.cateService.updateCategoria(this.categoriaSeleccionado.id, this.categoriaSeleccionado).subscribe(() => {
      this.categoriaSeleccionado = new Cate(); 
      this.getAllCategorias(); 
      Swal.fire('Éxito', 'Autor actualizado correctamente', 'success');

    });
  }


  eliminarCategoria(id: number) {
    this.cateService.deleteCategoria(id).subscribe(() => {
      this.getAllCategorias(); 
    });
  }
}