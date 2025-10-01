import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  standalone: false,
  styleUrl: './features.component.scss',
})
export class FeaturesComponent {
  products = [
    {
      name: 'کامیونت ایسوزو NPR',
      capacity: '6 تن',
      model: 'NPR-75K',
      image: 'truck.png',
    },
    {
      name: 'کامیونت ایسوزو NPR',
      capacity: '8 تن',
      model: 'NPR-85K',
      image: 'truck.png',
    },
    {
      name: 'کامیونت ایسوزو NPR',
      capacity: '10 تن',
      model: 'NPR-95K',
      image: 'truck.png',
    },
    {
      name: 'کامیونت ایسوزو NPR',
      capacity: '12 تن',
      model: 'NPR-120K',
      image: 'truck.png',
    },
    {
      name: 'کامیونت ایسوزو NQR',
      capacity: '14 تن',
      model: 'NQR-140K',
      image: 'truck.png',
    },
    {
      name: 'کامیونت ایسوزو FVR',
      capacity: '18 تن',
      model: 'FVR-180K',
      image: 'truck.png',
    },
  ];

  mobileMenuOpen = false;

  toggleMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
