import { Component } from '@angular/core';

@Component({
  selector: 'app-sale',
  standalone: false,
  templateUrl: './sale.component.html',
  styleUrl: './sale.component.scss',
})
export class SaleComponent {
  saleMethods = [
    {
      title: 'کامیونت ۶ تن ISUZU-NPR',
      methods: 'روش‌های فروش: نقدی',
      insurance: 'خدمات بیمه: بیمه شخص ثالث + بیمه بدنه با شرایط ویژه',
      goldCard: 'کارت طلایی: پوشش تعمیرات و امداد جاده‌ای تا ۵ سال',
      colSpan: 'col-span-1',
    },
    {
      title: 'کامیونت ۸ تن ISUZU-NPR',
      methods: 'روش‌های فروش: نقدی',
      insurance: 'خدمات بیمه: بیمه شخص ثالث + بیمه بدنه با شرایط ویژه',
      goldCard: 'کارت طلایی: پوشش تعمیرات و امداد جاده‌ای تا ۵ سال',
      colSpan: 'col-span-1',
    },
    {
      title: 'کامیونت ۴ تن ISUZU-NMR',
      methods: 'روش‌های فروش: نقدی',
      insurance: 'خدمات بیمه: بیمه شخص ثالث + بیمه بدنه با شرایط ویژه',
      goldCard: 'کارت طلایی: پوشش تعمیرات و امداد جاده‌ای تا ۵ سال',
      colSpan: 'col-span-1',
    },
    {
      title: 'کامیون ۱۲ تن ISUZU-FSR',
      methods: 'روش‌های فروش: نقدی',
      insurance: 'خدمات بیمه: بیمه شخص ثالث + بیمه بدنه با شرایط ویژه',
      goldCard: 'کارت طلایی: پوشش تعمیرات و امداد جاده‌ای تا ۵ سال',
      colSpan: 'col-span-1',
    },
    {
      title: 'کامیون کشنده ISUZU-VC66',
      methods: 'روش‌های فروش: نقدی',
      insurance: 'خدمات بیمه: بیمه شخص ثالث + بیمه بدنه با شرایط ویژه',
      goldCard: 'کارت طلایی: پوشش تعمیرات و امداد جاده‌ای تا ۵ سال',
      colSpan: 'md:col-span-2',
    },
  ];
}
