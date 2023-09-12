import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibraryDataComponent } from './library-data/library-data.component';
import { AddEditComponent } from './library-data/add-edit/add-edit.component';
import { ShowDeleteComponent } from './library-data/show-delete/show-delete.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedService } from './shared.service';

@NgModule({
  declarations: [
    AppComponent,
    LibraryDataComponent,
    AddEditComponent,
    ShowDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
