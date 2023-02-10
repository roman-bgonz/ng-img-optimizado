import { Component, OnInit } from '@angular/core';
import { ImageService } from './services/image.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ng-img-optimizado';

  products: any[] = [];

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.imageService.obtieneProductos().subscribe({
      next: (response) => (this.products = response),
    });
  }
}
