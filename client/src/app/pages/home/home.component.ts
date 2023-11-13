import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {
    // this.BackToTop();
    document.addEventListener("scroll", (e) => {this.ScrollWindow()});
    this.ScrollWindow();

    // let cursor = document.getElementById("circle");
    // document.addEventListener('mousemove', function(e) {
    //   let x = e.clientX;
    //   let y = e.clientY;

    //   cursor!.style.left = x + "px";
    //   cursor!.style.top = y + "px";
    // });
  }

  constructor() {

  }


  protected curr_scroll_pos = 0;

  //Update scroll to fade back-to-top btn when reach >200
  private ScrollWindow() {
    this.curr_scroll_pos = window.scrollY;
    let top_btn = document.getElementById('to-top');
    let to_about = document.getElementById('scroll-indicator');

    if(window.scrollY > 200) {      
      top_btn!.classList.remove('fade');
      to_about!.classList.add('fade');
    } else {
      top_btn!.classList.add('fade');
      to_about!.classList.remove('fade');
    }
  }

  //Scroll back to top when clicked
  protected BackToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  //Scroll to About when clicked
  protected ScrollToAbout() {
    if(window.innerWidth >= 1920) {
      window.scrollTo({
        top: 1000,
        behavior: 'smooth',
      });
    } else if (window.innerWidth >= 1600) {
      console.log("1600");
      window.scrollTo({
        top: 970,
        behavior: 'smooth',
      });
    } else if(window.innerWidth >= 1280) {
      window.scrollTo({
        top: 800,
        behavior: 'smooth',
      });
    } else if(window.innerWidth >= 700) {
      window.scrollTo({
        top: 1100,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo({
        top: 840,
        behavior: 'smooth',
      });
    }
  }

  //Fade back-to-top btn
  protected MobileMenu(state: string) {
    let top_btn = document.getElementById('to-top');
    let to_about = document.getElementById('scroll-indicator');
    // console.log(state);
    

    if(state === 'open' && this.curr_scroll_pos < 200) {
      to_about!.classList.add('fade');
    } else if (state === 'open' && this.curr_scroll_pos > 200) {
      top_btn!.classList.add('fade');
    } else if (state === 'close' && this.curr_scroll_pos < 200) {      
      to_about!.classList.remove('fade');
    } else {
      top_btn!.classList.remove('fade');
    }
  }

}
