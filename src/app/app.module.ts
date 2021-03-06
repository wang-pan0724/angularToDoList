import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { FormListComponent } from './components/form-list/form-list.component';
import { SearchComponent } from './components/search/search.component';

import { StorageService } from './services/storage.service'

@NgModule({
  declarations: [
    AppComponent,
    FormListComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
