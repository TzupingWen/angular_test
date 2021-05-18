import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  // 使用FormBuilder的group()方法把checkoutForm屬性設定為一個包含name與address欄位的表單模型
  checkoutForm = this.formBuilder.group({
    name:'',
    address:''
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    ) {}
  
  // 定義onSubmit()方法處理表單，該方法允許使用者提交姓名和地址。另外使用CartService的clearCart()方法重置表單並清除購物車
  onSubmit():void{
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  // 使用購物車服務的getItems()方法設定這些商品  
  ngOnInit() {
    this.items = this.cartService.getItems();
  }
}
