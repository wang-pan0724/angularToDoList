import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent implements OnInit {

  public infoList:any={
    username:'',
    sex:'1',
    age:22,
    hobby:[
      {
        title:'吃饭',
        checked:false
      },
      {
        title:'睡觉',
        checked:false
      },
      {
        title:'玩游戏',
        checked:false
      }
    ]
  }

  constructor() { }

  ngOnInit() {
  }

  submitInfo(){
    console.log(this.infoList)
  }

}
