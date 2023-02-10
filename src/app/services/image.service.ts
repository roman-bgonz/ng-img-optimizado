import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(private http: HttpClient) {}

  url = 'https://api.escuelajs.co/api/v1/products';

  obtieneProductos = () => {
    return this.http.get<any[]>(this.url);
  };
}
