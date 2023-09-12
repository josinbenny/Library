import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryDataComponent } from './library-data/library-data.component';

const routes: Routes = [
  {path:'library',component:LibraryDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
