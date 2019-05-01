import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss']
})
export class ShopsComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  data = [
    {icon:"/assets/images/join.svg",text:'申请加盟'},
    {icon:'/assets/images/evaluate.svg',text:'评价历史'},
    {icon:'/assets/images/selfinfo.svg',text:'个人信息'}
  ]

  clickItem(event) {
    if(event.index === 0){
      this.router.navigate(['/apply'],{queryParams:{'source':'shops'}})
      console.log('申请加盟店铺');
    }else if(event.index === 1){
      console.log('评价历史')
    }else {
      console.log('个人信息')
    }
  }
}
