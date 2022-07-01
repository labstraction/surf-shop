import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  public products: Product[] = [];

  public searchString = ''
  public selectedCategory = ''

  constructor(private pServ: ProductService) { }


  ngOnInit(): void {
    this.getAllProducts();
  }

  search(){
    this.selectedCategory=''
    // const input = document.getElementById('search-input') as HTMLInputElement;
    // this.searchString = input!.value.trim().toLowerCase();
    this.pServ.getProducts(this.searchString).subscribe({
      next: products => this.products = products,
      error: err => console.log(err)
    })
  }

  getAllProducts(){
    this.pServ.getProducts().subscribe({
      next: products => this.products = products,
      error: err => console.log(err)
    })
  }
  orderByPrice(){
   this.products.sort((p1, p2)=> p1.price-p2.price)
  }

  orderByName(){
  this.products.sort((p1, p2) => p1.name.localeCompare(p2.name))
  }

  filterByCategory(){
    this.searchString= ''
    // const select = document.getElementById('category-select') as HTMLSelectElement
      this.pServ.getProducts(undefined, this.selectedCategory).subscribe({
        next: products => this.products = products,
        error: err => console.log(err)
      })

  }
}
