import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="http://127.0.0.1:8000/"

  constructor(private http:HttpClient) { }

get_data():Observable<any>{
  return this.http.get<any[]>(this.APIUrl + '/library/')
}
add_book(val:any){
  return this.http.post(this.APIUrl + 'library/', val)
}
update_book(val:any){
  return this.http.put(this.APIUrl + 'library/', val)
}
delete_book(val:any){
  return this.http.delete(this.APIUrl + 'library/' +val)
}

}
