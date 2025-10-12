import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-webmail',
  template: ''
})
export class WebmailComponent implements OnInit {
  ngOnInit(): void {
    // انتقال به آدرس وب‌میل اصلی
    window.location.href = 'http://mail.aysankhodro.com/webmail/';
  }
}
