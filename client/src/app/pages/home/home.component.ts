import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {
    document.addEventListener("scroll", (e) => {this.ScrollWindow()});
    this.ScrollWindow();
  }

  constructor() {

  }


  protected scroll_pos = 0;

  //get page state to toggle fade in/out
  protected FadePage(event: string) {
    if(event == 'open') {
      document.getElementById("fade-in-out")!.classList.add("fadein");
    } else {
      document.getElementById("fade-in-out")!.classList.remove("fadeout");
    }
  }

  //Update scroll to fade back-to-top btn when reach >200
  private ScrollWindow() {
    this.scroll_pos = window.scrollY;
    let top_btn = document.getElementById('to-top');

    if(window.scrollY > 200) {
      top_btn!.classList.remove('fade');
    } else {
      top_btn!.classList.add('fade');
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
}
