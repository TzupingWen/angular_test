import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Input() product; 
  // 使用@Input()定義product的屬性。@Input()指出此屬性值要從本元件的父元件ProductListComponent中傳入
  @Output() notify = new EventEmitter();
  // 使用@Output和EventEmitter()定義一個名為notify的屬性。@Output()配置ProductAlertsComponent，會讓ProductAlertsComponent在notify屬性的值發生變化時引發一個事件
  constructor() {}

  ngOnInit() {}
}

// 將資料傳遞到父元件
// 為了使通知按鈕起作用，子元件須通知並將資料傳遞給父元件。當單擊通知時，ProductAlertsComponent需引發一個事件，並且ProductListComponent需響應此事件。