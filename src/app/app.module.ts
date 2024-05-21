import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ItemDetailProductsComponent } from './item-detail-products/item-detail-products.component';
import { DetailComponentComponent } from './detail-component/detail-component.component';
import { CartComponent } from './cart/cart.component';
import { NavbarComponent } from './navbar/navbar.component';


const appRoute:Routes=[
  {path:'', component:ItemDetailProductsComponent},
  {path:'detail/:id', component:DetailComponentComponent},
  {path:'cart', component:CartComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ItemDetailProductsComponent,
    DetailComponentComponent,
    CartComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
