import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { Phonenum} from './phonenum'

@Injectable({
  providedIn: 'root'
})
export class PhonenumService {

  private MYLIST: Phonenum[] = [
    {"phonenum" : "4001234567"},
    {"phonenum" : "4041234567"}
];

    constructor(private http: HttpClient) { }

    // to test with local mock data
    public getCombinationsMockData() : Phonenum[]{
    return this.MYLIST;
    }

    // to test with service api 
  public getCombinations(inputPhone) : Observable<Phonenum[]>{
    let url = "http://localhost:9081/phonenums/"+inputPhone;
    return this.http.get<Phonenum[]>(url);
  }
}
