import { Component, EventEmitter, OnInit, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit, OnChanges{
  @Output() mobile_menu = new EventEmitter<string>();
  @Input() scroll_pos = 0;

  constructor(
    private router: Router,
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
      for(let pos in changes) {
        if(changes[pos].currentValue != changes[pos].previousValue) {
          this.NavScroll(changes[pos].currentValue, changes[pos].previousValue);
          if(changes[pos].currentValue != changes[pos].previousValue) {
            document.getElementById('mobile-menu')!.classList.remove("open");
          }
        }
      }
  }

  ngOnInit(): void {
    this.BtnFocus();
  }


  /*Toggle mobile menu*/
  protected ToggleMobileMenu(state: string) {    
    let menu = document.getElementById('mobile-menu');

    menu!.classList.toggle('open');

    if(state === 'open') {
      this.mobile_menu.emit("open");
    } else {      
      this.mobile_menu.emit("close");
    }
  }

  /*Change nav behavior on scroll */
  private NavScroll(curr: number, prev: number) {
    let container = document.getElementById("container");
    if(curr >= 200 && curr > prev) {
      if(!container!.classList.contains("scrolled")) {
        container!.classList.add("scrolled");
      }
    } else {
      container!.classList.remove("scrolled");
    }
  }

  /*Routing*/
  protected WebRouting(route: string) {

    if(route === 'home') {
      this.router.navigate(['/home']);
    } else if (route === 'news') {
      this.router.navigate(['/news']);
    } else if (route === 'about') {
      this.router.navigate(['/services']);
    } else if (route === 'contact') {
      this.router.navigate(['/contact']);
    }
  }

  private BtnFocus() {
    let btn_home = document.getElementById("btn-home");
    let btn_news = document.getElementById("btn-news");
    let btn_about = document.getElementById("btn-about");
    let btn_contact = document.getElementById("btn-contact");

    if(this.router.url === '/home') {
      btn_home!.classList.add("active");
      btn_news!.classList.remove("active");
      btn_about!.classList.remove("active");
      btn_contact!.classList.remove("active");

    } else if (this.router.url === '/news') {      
      btn_home!.classList.remove("active");
      btn_news!.classList.add("active");
      btn_about!.classList.remove("active");
      btn_contact!.classList.remove("active");

    } else if (this.router.url === '/about') {
      btn_home!.classList.remove("active");
      btn_news!.classList.remove("active");
      btn_about!.classList.add("active");
      btn_contact!.classList.remove("active");

    } else if (this.router.url === '/contact') {
      btn_home!.classList.remove("active");
      btn_news!.classList.remove("active");
      btn_about!.classList.remove("active");
      btn_contact!.classList.add("active");
    }
  }
}
