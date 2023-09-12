import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-delete',
  templateUrl: './show-delete.component.html',
  styleUrls: ['./show-delete.component.css']
})
export class ShowDeleteComponent {

  constructor(private service:SharedService){}
  Librarylist:any = [];

  Modal_title:any;
  Activate_add_edit:boolean=false
  libb:any


ngOnInit():void{
  this.refreshlib()
}

addclick(){
  this.libb={
    Book_id:0,
    Book_Name:"",
    Book_author:"",
    Book_price:""

  }
  this.Modal_title="Add new Book"
  this.Activate_add_edit= true
}

editclick(item:any){
  this.libb=item
  this.Modal_title="Edit Book details"
  this.Activate_add_edit=true
}

closeClick(){
  this.Activate_add_edit=false
  this.refreshlib()
}

deleteData(dataid:any){
  if(confirm("Are you sure..?")){
    this.service.delete_book(dataid.Book_id).subscribe(data=>{
      alert(data.toString())
      this.refreshlib()
    })
  }
}

  refreshlib(){
    this.service.get_data().subscribe(data=>{
      this.Librarylist=data
    })
  }

}
