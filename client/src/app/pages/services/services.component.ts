import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  ngOnInit(): void {
    // window.scrollTo({
    //   top: 0,
    // });
    document.addEventListener("scroll", (e) => {this.ScrollWindow()});
    this.ScrollWindow();
  }
  protected scroll_pos = 0;

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

  protected ExpandDetail(id: string) {
    let stat = document.getElementById(`expand-stat${id}`)!.innerHTML;
    let content = document.getElementById(`expand-detail${id}`);
    let arrow = document.getElementById(`expand${id}`);

    if(stat == "Thu gọn") {
      document.getElementById(`expand-stat${id}`)!.innerHTML = "Đọc thêm";
      content!.classList.remove("open");
      arrow!.classList.remove("open");
    } else {
      document.getElementById(`expand-stat${id}`)!.innerHTML = "Thu gọn";
      content!.classList.add("open");
      arrow!.classList.add("open");
    }    
  }
}
