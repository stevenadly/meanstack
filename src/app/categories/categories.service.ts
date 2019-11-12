import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import 'rxjs';
import { ICategory } from '../shared/models';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<any> {

    return this.http.get('/assets/data/categories.json')
      .pipe(map(res => {
        let result: ICategory[] = [];
        let allCategories: any[] = res['arrayOfCategories'];
        allCategories.forEach(el => {
          const cat: ICategory = {
            id: el['category_id'],
            name: el['category_name'],
            description: el['category_description'],
            imgSrc: el['category_url'],
            productCount: el['products_count']


          }
          

          result.push(cat);

          // describtion: el['category_description'],


        })
        // console.table(result);
        return result;
      }

      ))
  }
}
