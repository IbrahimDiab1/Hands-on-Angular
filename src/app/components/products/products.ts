import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import {Category} from '../../models/category';

@Component({
  selector: 'app-products',
  templateUrl: './products.html',
  standalone: false,
  styleUrls: ['./products.css']
})
export class Products {
  products: any[] = [];
  filteredProducts: any[] = [];
  categories: Category[] = [];
  selectedCategory: string = 'All';
  titleSearch: string = '';
  maxPrice: number | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data.products;
      this.filteredProducts = [...this.products];
    });

    this.productService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  resetFilters(): void {
    this.selectedCategory = 'All';
    this.titleSearch = '';
    this.maxPrice = null;
    this.filteredProducts = [...this.products];
  }


  getCategoryName(slug: string): string {
    if (slug === 'All') return 'All';
    const category = this.categories.find(cat => cat.slug === slug);
    return category ? category.name : 'Unknown';
  }
}
