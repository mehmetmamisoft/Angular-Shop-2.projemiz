
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Category } from '../category/category';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
/*  başında {providedIn: 'root'} global servis olmadıgı için bunu silduk */
export class CategoryService {
  constructor(private http: HttpClient) {}
  path = 'http://localhost:3000/categories';

  getProducts(): Observable<Category[]> {
    return this.http.get<Category[]>(this.path).pipe(
      //çapa gibi düşün
      tap((data) => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  handleError(err: HttpErrorResponse) {

    let errorMessage=''
    if (err.error instanceof ErrorEvent) {
      errorMessage='bir hata oluştu' +err.error.message
    }
    else{
      errorMessage='sistemsel bir hata '
    }
    return throwError (errorMessage);
  };
}
