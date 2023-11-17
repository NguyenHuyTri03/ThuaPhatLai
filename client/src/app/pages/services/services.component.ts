import { Component } from '@angular/core';

@Component({
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  protected curr_scroll_pos = 0;
  
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
