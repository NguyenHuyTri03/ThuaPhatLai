import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit{
  ngOnInit(): void {
    document.addEventListener("scroll", (e) => {this.ScrollWindow()});
    this.ScrollWindow();
  }

  constructor() {

  }


  protected curr_scroll_pos = 0;

  //Update scroll to fade back-to-top btn when reach >200
  private ScrollWindow() {
    this.curr_scroll_pos = window.scrollY;
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
