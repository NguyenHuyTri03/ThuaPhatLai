import { Component, EventEmitter, OnInit, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { fade } from 'src/app/route-animations';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit, OnChanges{
  @Output() linkState = new EventEmitter<string>();
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

    const btn_list = document.getElementsByClassName("btn-div__btn");
    for(let i = 0; i < btn_list.length; i++) {
      console.log(btn_list[i].id);
      if(btn_list[i].id == this.router.url.split("/")[1]) {
        btn_list[i].classList.add("active");
      } else {
        btn_list[i].classList.remove("active");
      }
    }
  }


  /*Toggle mobile menu*/
  protected ToggleMobileMenu(state: string) {    
    let menu = document.getElementById('mobile-menu');

    menu!.classList.toggle('open');

    if(state === 'open') {
      this.linkState.emit("open");
    } else {      
      this.linkState.emit("close");
    }
  }

  /*Change nav behavior on scroll */
  private NavScroll(curr: number, prev: number) {
    let container = document.getElementById("container");    
    let logo = document.getElementById("logo-div");

    if(curr == 0) {
      container!.classList.remove("scrolled");
      logo!.classList.remove("scrolled");
    } else {
      container!.classList.add("scrolled");
      logo!.classList.add("scrolled");
    }
  }

  /*Routing*/
  protected WebRouting(route: string) {
    document.getElementById("fade")!.classList.add("goin");

    if(route === 'home') {
      this.router.navigate(['/home']);
    } else if (route === 'news') {
      this.router.navigate(['/news']);
    } else if (route === 'services') {
      this.router.navigate(['/services']);
    } else if (route === 'contact') {
      this.router.navigate(['/contact']);
    } else if(route === 'faq') {
      this.router.navigate(['/faq']);
    }
  }
}
