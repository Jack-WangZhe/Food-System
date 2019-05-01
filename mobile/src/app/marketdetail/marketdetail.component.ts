import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Toast } from 'ng-zorro-antd-mobile';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-marketdetail',
  templateUrl: './marketdetail.component.html',
  styleUrls: ['./marketdetail.component.scss']
})
export class MarketdetailComponent implements OnInit {

  orderStatus:boolean = false;

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private toast: Toast
  ) { }

  ngOnInit() {
  }

  //回退
  back() {
    this.router.navigate(['/home/shops']);
  }

  //点餐逻辑
  orderFood() {
    this.orderStatus = true;
  }

  //模拟点餐
  show: boolean = true;
  menuHeight: number = document.documentElement.clientHeight * 0.6;
  dataMenu: Array<any> = [
    {
      value: '1',
      label: 'Food',
      children: [
        {
          label: 'All Foods',
          value: '1',
          disabled: false
        },
        {
          label: 'Chinese Food',
          value: '2'
        },
        {
          label: 'Hot Pot',
          value: '3'
        },
        {
          label: 'Buffet',
          value: '4'
        },
        {
          label: 'Fast Food',
          value: '5'
        },
        {
          label: 'Snack',
          value: '6'
        },
        {
          label: 'Bread',
          value: '7'
        },
        {
          label: 'Fruit',
          value: '8'
        },
        {
          label: 'Noodle',
          value: '9'
        },
        {
          label: 'Leisure Food',
          value: '10'
        }
      ]
    },
    {
      value: '2',
      label: 'Supermarket',
      children: [
        {
          label: 'All Supermarkets',
          value: '1'
        },
        {
          label: 'Supermarket',
          value: '2',
          disabled: true
        },
        {
          label: 'C-Store',
          value: '3'
        },
        {
          label: 'Personal Care',
          value: '4'
        }
      ]
    },
    {
      value: '3',
      label: 'Extra',
      isLeaf: true,
      children: [
        {
          label: 'you can not see',
          value: '1'
        }
      ]
    }
  ];

  initData: Array<any> = this.dataMenu;

  onChange(value) {
    console.log(value);
  }

  onMaskClick() {
    this.show = false;
  }

  onOk(value) {
    console.log(value);
    this.onCancel();
  }

  onCancel() {
    this.show = false;
  }
}
