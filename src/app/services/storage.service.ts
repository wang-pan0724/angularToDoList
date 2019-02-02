import { Injectable } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  get(key:any){
    console.log('storage get.....');
    return JSON.parse(localStorage.getItem(key))
  }

  set(key:any,value:any){
    localStorage.setItem(key,JSON.stringify(value))
  }
}
