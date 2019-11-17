import { Component, OnInit } from '@angular/core';
import { INavigationUrl, ICartItem } from '../shared/models';
import { PAGES } from '../shared/constants/page-routes.config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navbarresponsive:boolean=false;
  dropdownMenu: boolean = false;


  urls: INavigationUrl[] = [
    { text: 'login', url: PAGES.login.url },
    { text: 'prducts', url: PAGES.products.url },
    { text: 'categories', url: PAGES.categories.url },

  ];

  

  ngOnInit(){

  }
  toggleNavbar(){
    this.navbarresponsive= !this.navbarresponsive;
  }
  
  toggleDropDown() {
    this.dropdownMenu = !this.dropdownMenu;
  }

  

}
