import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class Products {
  products = [
    { id: 1, title: 'iPhone 15 Pro', category: 'Electronics', price: 999, stock: 25, image: 'assets/images/iphone15pro.jpg' },
    { id: 2, title: 'Samsung Galaxy S24', category: 'Electronics', price: 899, stock: 15, image: 'assets/images/samsunggalaxys24.jpg' },
    { id: 3, title: 'Nike Air Max', category: 'Shoes', price: 120, stock: 50, image: 'assets/images/nikeairmax.jpg' },
    { id: 4, title: 'Adidas Ultraboost', category: 'Shoes', price: 180, stock: 35, image: 'assets/images/adidasultraboost.jpg' },
    { id: 5, title: 'MacBook M3', category: 'Electronics', price: 1299, stock: 12, image: 'assets/images/macbookm3.jpg' },
    { id: 6, title: 'Sony WH-1000XM5', category: 'Electronics', price: 399, stock: 40, image: 'assets/images/sonywh1000xm5.jpg' },
    { id: 7, title: "Levi's 501 Jeans", category: 'Clothing', price: 60, stock: 60, image: 'assets/images/levis501jeans.jpg' },
    { id: 8, title: 'Nike Dri-FIT Shirt', category: 'Clothing', price: 35, stock: 75, image: 'assets/images/nikedrifitshirt.jpg' }
  ];

  selectedCategory: string = 'All';
  titleSearch: string = '';
  maxPrice: number | null = null;
  filteredProducts = [...this.products];

  applyFilters(): void {
    this.filteredProducts = this.products.filter(product => {
      const matchesCategory = this.selectedCategory === 'All' || product.category === this.selectedCategory;
      const matchesTitle = product.title.toLowerCase().includes(this.titleSearch.toLowerCase());
      const matchesPrice = this.maxPrice === null || product.price <= this.maxPrice;
      return matchesCategory && matchesTitle && matchesPrice;
    });
  }
}
