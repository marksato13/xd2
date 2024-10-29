import { Component, OnInit } from '@angular/core';
import { AutorService } from '../../services/autor.service';
import { Autr } from '../../../../models/autor';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-autor-pages',
  templateUrl: './autor-pages.component.html',
  styleUrls: ['./autor-pages.component.css']
})
export class AutorPagesComponent {
  autor: Autr[] = [];
  nuevoAutor: Autr = new Autr();
  autorSeleccionado: Autr = new Autr();

  constructor(private autorService: AutorService) {}

  ngOnInit(): void {
    this.getAllAutors();
  }

  getAllAutors() {
    this.autorService.getAllAutor().subscribe((data) => {
      this.autor = data;
    });
  }

  // FUNCION PARA CREAR UN AUTOR
  crearAutor() {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Deseas agregar un nuevo autor?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        this.autorService.createAutor(this.nuevoAutor).subscribe(
          (data) => {
            console.log('Autor creado', data);
            this.nuevoAutor = new Autr();
            this.getAllAutors();
            Swal.fire('Éxito', 'Autor agregado correctamente', 'success');
          },
          (error) => {
            console.error('Error al crear el autor', error);
            Swal.fire('Error', 'No se pudo crear el autor', 'error');
          }
        );
      }
    });
  }

  seleccionarAutor(autor: Autr) {
    this.autorSeleccionado = autor;
  }

  actualizarAutor() {
    this.autorService.updateAutor(this.autorSeleccionado.id, this.autorSeleccionado).subscribe(() => {
      this.autorSeleccionado = new Autr();
      this.getAllAutors();
      Swal.fire('Éxito', 'Autor actualizado correctamente', 'success');
    });
  }
  // FUNCION PARA ELIMINAR EL AUTOR
  eliminarAutor(id: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Deseas eliminar este autor?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        this.autorService.deleteAutor(id).subscribe(() => {
          this.getAllAutors();
          Swal.fire('Éxito', 'Autor eliminado correctamente', 'success');
        });
      }
    });
  }
}
