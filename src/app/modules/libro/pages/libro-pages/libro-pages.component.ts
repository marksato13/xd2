import { Component, OnInit } from '@angular/core';
import { LibroService } from '../../services/libro.service';
import { Facultad } from 'src/app/models/editorial';
import { Libr } from 'src/app/models/libro';

@Component({
  selector: 'app-libro-pages',
  templateUrl: './libro-pages.component.html',
  styleUrls: ['./libro-pages.component.css']
})
export class LibroPagesComponent implements OnInit {
  nuevoEscuela: Libr = new Libr();
  facultades: Facultad[] = [];
  escuelas: any[] = [];
  idEscuelaEditar: number = 0;

  constructor(private libroService: LibroService) { }

  ngOnInit() {
    this.obtenerFacultades();
    this.listarEscuelas();
  }

  obtenerFacultades() {
    this.libroService.obtenerFacultades().subscribe((data) => {
      this.facultades = data;
    });
  }

  agregarEscuela() {
    this.libroService.agregarEscuela(this.nuevoEscuela).subscribe(
      (data) => {
        console.log('Escuela agregada correctamente', data);
        this.nuevoEscuela = new Libr();
        this.listarEscuelas();
      },
      (error) => {
        console.error('Error al agregar la escuela', error);
      }
    );
  }

  listarEscuelas() {
    this.libroService.listarEscuelas().subscribe(
      (data) => {
        console.log(data);
        this.escuelas = data;
      },
      (error) => {
        console.error('Error al obtener la lista de escuelas', error);
      }
    );
  }

  eliminarEscuela(id: number) {
    this.libroService.eliminarEscuela(id).subscribe(
      () => {
        console.log('Escuela eliminada correctamente');
        this.listarEscuelas();
      },
      (error) => {
        console.error('Error al eliminar la escuela', error);
      }
    );
  }

  cargarDatosEscuelaParaEdicion(id: number) {
    this.idEscuelaEditar = id;
    const escuelaParaEditar = this.escuelas.find((escuela) => escuela.id === id);
    this.nuevoEscuela = { ...escuelaParaEditar };
    this.nuevoEscuela.facultad = escuelaParaEditar.facultad.id;
  }

  editarEscuela() {
    this.libroService.actualizarEscuela(this.idEscuelaEditar, this.nuevoEscuela).subscribe(
      (data) => {
        console.log('Escuela editada correctamente', data);
        this.nuevoEscuela = new Libr();
        this.idEscuelaEditar = 0;
        this.listarEscuelas();
      },
      (error) => {
        console.error('Error al editar la escuela', error);
      }
    );
  }
}
