import { Component, OnInit } from '@angular/core';

import { StorageService } from '../../services/storage.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(public storage: StorageService) {
    var getStorage = this.storage
  }

  public strings: string = '';
  public listItem: any[] = [];
  public doneListItem: any[] = [];

  ngOnInit() {

    if (this.storage.get('searchList')) {
      this.listItem = this.storage.get('searchList');
    }

    if (this.storage.get('doneList')) {
      this.doneListItem = this.storage.get('doneList');
    }
  }

  doSearch() {
    console.log(this.strings);
    if (!this.hasData(this.listItem, this.strings)) {
      this.listItem.push({
        content: this.strings,
        checked: false
      });
    }

    this.storage.set('searchList', this.listItem);

    this.strings = '';
  }

  doDelate(index) {
    this.listItem.splice(index, 1);

    this.storage.set('searchList', this.listItem);
  }

  doChange(key, item) {
    this.listItem.splice(key, 1);
    this.storage.set('searchList',this.listItem);

    this.doneListItem.push(item);
    this.storage.set('doneList',this.doneListItem);
  }

  doneDelate(index) {
    this.doneListItem.splice(index, 1);
    this.storage.set('doneList', this.doneListItem);
  }

  doneChange(key, item) {
    this.doneListItem.splice(key, 1);
    this.listItem.push(item);

    this.storage.set('searchList', this.listItem);
    this.storage.set('doneList', this.doneListItem);
  }

  hasData(item: any, string: any) {

    for (let i = 0; i < item.length; i++) {
      if (item[i].content == string) {
        return true;
      }
    }

    return false;
  }

}
