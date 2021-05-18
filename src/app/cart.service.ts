import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // 定義items屬性將當前商品的陣列儲存在購物車中
  items = [];

  constructor(
    private http: HttpClient
  ) {}

  // 定義將商品新增到購物車、返回購物車及清除購物車的方法
  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

  

}
