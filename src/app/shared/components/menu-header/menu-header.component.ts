import { Component, EventEmitter, Input, OnInit, Output } 
from '@angular/core';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.css']
})
export class MenuHeaderComponent implements OnInit{
  //Output = Es usado para poder enviar datos a su componete padre
  @Output() buttonSidebarAction:EventEmitter<any>=new EventEmitter();
  nombre:string = 'Elias Alca';
  status:boolean=false;
  isMaximized: boolean = false;
  //ciclos de vida de un componente 
  ngOnInit(): void {
  }
    btnAction(){
      if (this.status == false){
      this.status = !this.status;
      this.buttonSidebarAction.emit(this.status)
    }else  {
      this.status= ! this.status;
      this.buttonSidebarAction.emit(this.status)
    }
    }
    maximizeAction() {
      this.isMaximized = !this.isMaximized;
      
      if (this.isMaximized) {
        document.documentElement.requestFullscreen(); // Solicita pantalla completa
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen(); // Sale de pantalla completa
        }
      }
    }

}
