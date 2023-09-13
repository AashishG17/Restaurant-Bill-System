import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ICategory, IItem } from 'src/app/core/interfaces/item.interface';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  items!: IItem[];

  constructor(
    private readonly http: HttpClient,
  ) { }

  getItems(): Observable<IItem[]> {
    return this.http.get<IItem[]>('http://localhost:3000/items');
  }

  getCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>('http://localhost:3000/category');
  }

}
