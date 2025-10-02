import { Component } from '@angular/core';
import { GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  showMoreIntro = false;
  showMoreSpecs = false;
  images: GalleryItem[] = [
    new ImageItem({
      src: 'gallery/1.jpg',
      thumb: 'gallery/1.jpg',
    }),
    new ImageItem({
      src: 'gallery/2.jpg',
      thumb: 'gallery/2.jpg',
    }),
    new ImageItem({
      src: 'gallery/3.jpg',
      thumb: 'gallery/3.jpg',
    }),
    new ImageItem({
      src: 'gallery/4.jpg',
      thumb: 'gallery/4.jpg',
    }),
  ];
  // مشخصات محصول
  specs = [
    { key: 'نوع موتور', value: 'دیزل ۵.۲ لیتری' },
    { key: 'قدرت موتور', value: '۱۵۵ اسب بخار' },
    { key: 'گیربکس', value: '۶ دنده دستی' },
    { key: 'استاندارد آلایندگی', value: 'یورو ۵' },
    { key: 'ظرفیت بار', value: '۶ تن' },
    { key: 'نوع کابین', value: 'تک کابین' },
    { key: 'وزن خالص', value: '۴.۵ تن' },
    { key: 'ابعاد', value: '۶.۵ × ۲.۲ × ۲.۴ متر' },
  ];

  toggleIntro() {
    this.showMoreIntro = !this.showMoreIntro;
  }

  toggleSpecs() {
    this.showMoreSpecs = !this.showMoreSpecs;
  }
}
