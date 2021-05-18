import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippingCosts;

  // 把cartService注入到ShippingComponent的建構函式中
  constructor(
    private cartService: CartService
  ) {}

  // 利用cartService的getShippingPrices()方法設定shippingCosts屬性
  ngOnInit() {
    this.shippingCosts = this.cartService.getShippingPrices();
  }

}
