import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {


  @Input()
  //接受产品组件传来的星级评价
  private rating:number = 0;

  // 包含前端星星的数组
  private stars:boolean[];

  constructor() { }

  ngOnInit() {
    
    this.stars=[];
    // 将传入的rating 和stars相比
    for(let i=1;i<=5;i++){
      this.stars.push(i>this.rating);
    }
    
  }

}
