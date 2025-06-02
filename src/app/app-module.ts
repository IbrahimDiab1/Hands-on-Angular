import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './navbar/navbar';
import { Products } from './products/products';
import { Footer } from './footer/footer';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    App,
    Navbar,
    Products,
    Footer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  bootstrap: [App]
})
export class AppModule { }
