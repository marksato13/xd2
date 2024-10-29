import { Component, OnInit } from '@angular/core';
import { LectoresService } from '../../services/lectores.service';
import Swal from 'sweetalert2';
import { Lect } from '../../../../models/lector';

@Component({
  selector: 'app-lectores-pages',
  templateUrl: './lectores-pages.component.html',
  styleUrls: ['./lectores-pages.component.css']
})
export class LectoresPagesComponent {
  lector: Lect[] = [];
  nuevoLector: Lect = new Lect();
  lectorSeleccionado: Lect = new Lect();

  constructor(private lectoresService: LectoresService) {}
  ngOnInit(): void {
    this.getAllLectors();
  }

  getAllLectors() {
    this.lectoresService.getAllLector().subscribe((data) => {
      this.lector = data;
    });
  }

  // FUNCION PARA CREAR UN AUTOR
  crearLector() {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Deseas agregar un nuevo autor?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        this.lectoresService.createLector(this.nuevoLector).subscribe(
          (data) => {
            console.log('Lector creado', data);
            this.nuevoLector = new Lect();
            this.getAllLectors();
            Swal.fire('Éxito', 'Lector agregado correctamente', 'success');
          },
          (error) => {
            console.error('Error al crear el Lector', error);
            Swal.fire('Error', 'No se pudo crear el Lector', 'error');
          }
        );
      }
    });
  }

  seleccionarLector(lector: Lect) {
    this.lectorSeleccionado = lector;
  }

  actualizarLector() {
    this.lectoresService.updateLector(this.lectorSeleccionado.id, this.lectorSeleccionado).subscribe(() => {
      this.lectorSeleccionado = new Lect();
      this.getAllLectors();
      Swal.fire('Éxito', 'Lector actualizado correctamente', 'success');
    });
  }
  // FUNCION PARA ELIMINAR EL AUTOR
  eliminarLector(id: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Deseas eliminar este autor?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        this.lectoresService.deleteLector(id).subscribe(() => {
          this.getAllLectors();
          Swal.fire('Éxito', 'Autor eliminado correctamente', 'success');
        });
      }
    });
  }
}
