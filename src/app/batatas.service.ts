import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import {HttpClient} from "@angular/common/http"
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BatatasService {

  constructor(private http:HttpClient) { }

  public getLanguageFromContent(search: string): Observable<any> {
    const formData = new FormData();
    //formData.append('text', search);
    formData.append("content", search);
    return this.http.post("URL", formData).pipe(
      map((res, err) => {
        if (res) {
        //  console.log(res);
          return of(true);
        } else {
        //  console.log(err);
          return of({yay:true});
        }
      })
    );
  }
}
