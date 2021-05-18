import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;

  // addToCart()方法：以product作為引數，使用CartService addToCart()方法新增產品到購物車，顯示一條已添加產品到購物車訊息
  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('你的商品已經加入購物車');
  }

  // 透過private route:ActivatedRoute新增為建構函式括號內的引數，把ActivatedRoute注入到constructor()中。
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  // 在ngOnInit()方法中從路由引數中提取productId，並在products陣列中找到相應產品
  ngOnInit() {
    //first get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    //find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute);

    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }
}
