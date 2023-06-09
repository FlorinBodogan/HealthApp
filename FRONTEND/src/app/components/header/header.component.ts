import { Component, HostListener, OnInit } from '@angular/core';
import { faBars, faXmark, faHouse, faRightFromBracket, faCalculator, faRightToBracket, faUserPlus, faCircleInfo, faChartSimple, faUser } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit { 
  faBars = faBars;
  faXmark = faXmark;
  faHouse = faHouse;
  faRightFromBracket = faRightFromBracket;
  faCalculator = faCalculator;
  faRightToBracket = faRightToBracket;
  faUserPlus = faUserPlus;
  faCircleInfo = faCircleInfo;
  faChartSimple = faChartSimple;
  faUser = faUser;
  
  isAuthenticated = false;
  sticky: boolean = false;

  constructor(private authService: AuthService, private router: Router){}

  ngOnInit(): void {
    this.authService.isUserLogged$.subscribe((isLogged) => {
      this.isAuthenticated = isLogged;
    })
  }

  logout(): void{
    localStorage.removeItem("token");
    this.authService.isUserLogged$.next(false);
    this.router.navigate(["home"]);
  }

  //MOBILE NAV
  public isMenuOpen: boolean = false;
  public menuClass: string = "";

  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      this.menuClass = "nav-open"; 
    } else {
      this.menuClass = ""; 
    }
  }
  
  public selectPage(): void {
    this.isMenuOpen = false;
    this.menuClass = "";
  }
}
