import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.router.navigate(['/home/shops']);
  }
  flag = true;
  index = 0;

  onChange(item) {
    console.log('onChange', item);
  }

  onTabClick(item) {
    console.log('onTabClick', item);
    if(item.index === 0) {
      this.router.navigate(['/home/shops']);
    }else if(item.index === 1) {
      this.router.navigate(['/home/orders']);
    }else {
      this.router.navigate(['/home/self']);
    }
  }

  selectCard(e) {
    console.log(' ', JSON.stringify(e));
  }

  changeIndex() {
    this.index = 0;
  }
}
