import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ICategory } from 'src/app/shared/models';
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminCategoriesService {

  constructor(private http: HttpClient) {

  }

  private handleError(error: any) {
    console.error(error);                                       //Created a function to handle and log errors, in case
    return throwError(error);
  }

getAllAdminCAtegories():Observable<any> {
return this.http.get('/assets/data/categories.json').pipe(map(res =>{
  let categories :ICategory []=[];
  let arrayOfCategories :any[] = res['arrayOfCategories'];
  arrayOfCategories.forEach(el=>{
    let category : ICategory={
      id: el['category_id'],
      name: el['category_name'],
      description: el['category_description'],
      imgSrc: el['category_url'],
      productCount: el['products_count']
    }
    categories.push(category);
  })
  return categories;
}))
}
// hna mo4klt l post
AddNewCategory(category:ICategory):Observable<any>{
  // debugger;
  


    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/json'
    //     })
    //   };


  return this.http.post('/assets/data/categories.json',JSON.stringify(category)).pipe(
    map(() => console.log('----------------------> done')),
    catchError(this.handleError)

  );
}
}
