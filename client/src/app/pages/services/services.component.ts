import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  ngOnInit(): void {
    document.addEventListener("scroll", (e) => {this.ScrollWindow()});
    this.ScrollWindow();
  }

  protected services = [
    {
      id:"vb",
      title:"Lập Vi Bằng",
      img:"https://drive.google.com/uc?export=view&id=1omF1qsHhzpxrTFEv-QHl7vO864U5uzca",
      des:"Lập vi bằng làm chứng cứ, căn cứ để thực hiện các giao dịch khác theo yêu cầu của cá nhân, cơ quan, tổ chức."
    }, {
      id:"td",
      title:"Tống đạt văn bản",
      img:"https://drive.google.com/uc?export=view&id=1Zw7rpu0G4oKaLL7JfP4Bsdr7pnKaDUev",
      des:"Tống đạt các văn bản của Cơ quan thi hành án dân sự thành phố Hồ Chí Minh, Cơ quan thi hành án dân sự quận, huyện tại thành phố Hồ Chí Minh; Tòa án nhân dân thành phố Hồ Chí Minh và các Tòa án nhân dân quận, huyện tại thành phố Hồ Chí Minh."
    }, {
      id:"dk",
      title:"Xác minh điều kiện Thi hành án",
      img:"https://drive.google.com/uc?export=view&id=1rxL18xlVBuS3uDqdeWTtjLhsDAXS69Sl",
      des:"Để làm cơ sở nộp đơn yêu cầu Thi hành án cho đương sự, Văn phòng Thừa phát lại Quận 6 thực hiện việc xác minh điều kiện Thi hành án cho các Bản án, Quyết định do Tòa án và cơ quan Thi hành án các cấp ở Tp. Hồ Chí Minh ban hành đối với tất cả các loại tài sản cần xác minh cả trong và ngoài khu vực Tp. Hồ Chí Minh bao gồm: bất động sản, động sản..."
    }, {
      id:"th",
      title:"Thi hành án",
      img:"https://drive.google.com/uc?export=view&id=12uv4qB_mTmS8GFSbEfMv-IPDm1ZbAHej",
      des:"Thừa phát lại là người có đủ tiêu chuẩn được Nhà nước bổ nhiệm để xác minh điều kiện thi hành án dân sự, tổ chức thi hành án dân sự theo quy định của Nghị định này và pháp luật có liên quan."
    }
  ]

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
