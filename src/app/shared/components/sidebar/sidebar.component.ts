import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input('sidebarStatusLarge')
  sidebarStatusLarge: boolean = false;
  persona: string = '';
  menus: Array<any> = [
    {
      link: '/home/edi',
      name: 'Facultad',
      icon: 'fa-solid fa-file-contract',
    },
 
    {
      link: '/home/libro',
      name: 'ESCUELA ',
      icon: 'fa-solid fa-list-check',
    }
    
  ]
  constructor(private router: Router) {}

  ngOnInit(): void {}

  toggleSubMenu(menu: any): void {
    menu.open = !menu.open; 
  }
    redirectToAuth(): void {
      this.router.navigate(['/auth']); 
    }
}
