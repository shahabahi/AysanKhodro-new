import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  // Structure for dynamic data (future extension)
  newsList = [{
    id: 1,
    title: 'هلدینگ بین‌المللی آیسان خودرو حامی مالی ۹۰ ارومیه شد',
    date: '۱۴۰۴/۰۸/۱۷',
    image: '/gallery/news1.jpeg',
    intro: 'توافق مهم مه‌پیچی بهاری و دکتر اسمرزاده؛ هلدینگ بین‌المللی آیسان خودرو...',
    author: 'محمد دانش',
    badge: 'اطلاعیه شرکت'
  }];
}
