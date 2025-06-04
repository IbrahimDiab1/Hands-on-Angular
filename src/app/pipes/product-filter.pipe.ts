import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
  transform(products: any[], selectedCategory: string, titleSearch: string, maxPrice: number | null): any[] {
    if (!products) return [];

    return products.filter(product => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesTitle = titleSearch ? product.title.toLowerCase().includes(titleSearch.toLowerCase()) : true;
      const matchesPrice = maxPrice !== null ? product.price <= maxPrice : true;
      return matchesCategory && matchesTitle && matchesPrice;
    });
  }
}
