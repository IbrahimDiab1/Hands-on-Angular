import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { App } from './app';
import { Navbar} from './components/navbar/navbar';
import { Products } from './components/products/products';
import { Footer } from './components/footer/footer';
import { ProductFilterPipe } from './pipes/product-filter.pipe';

@NgModule({
  declarations: [
    App,
    Navbar,
    Products,
    Footer
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ProductFilterPipe
  ],
  bootstrap: [App]
})
export class AppModule { }
