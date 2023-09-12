import { Component,Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent {

  constructor(private service:SharedService){}

@Input() libb:any
Book_id:any
Book_Name:any
Book_author:any
Book_price:any


ngOnInit():void{
  this.Book_id= this.libb.Book_id
  this.Book_Name= this.libb.Book_Name
  this.Book_author= this.libb.Book_author
  this.Book_price= this.libb.Book_price
}

savebook(){
  var val={
    Book_id:this.Book_id,
    Book_Name:this.Book_Name,
    Book_author:this.Book_author,
    Book_price:this.Book_price

  }
  this.service.add_book(val).subscribe(res=>{
    alert(res.toString())
  })
}

updatebook(){
  var val={
    Book_id:this.Book_id,
    Book_Name:this.Book_Name,
    Book_author:this.Book_author,
    Book_price:this.Book_price

  }
  this.service.update_book(val).subscribe(res=>{
    alert(res.toString())
  })
}


}
