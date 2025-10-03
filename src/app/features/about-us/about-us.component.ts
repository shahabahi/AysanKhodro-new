import { Component } from '@angular/core';
import { TeamMember } from './members';

@Component({
  selector: 'app-about-us',
  standalone: false,
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent {
  members: TeamMember[] = [
    {
      name: 'مهدی اسمی زاده شکراب',
      role: 'رئیس هیئت مدیره',
      image: 'gallery/p1.png',
    },
    {
      name: 'امیراسدی',
      role: 'مدیرعامل و نایب رئیس هیئت مدیره',
      image: 'gallery/p2.png',
    },
    {
      name: 'کامران فرحناک',
      role: 'عضو هیئت مدیره',
      image: 'gallery/p3.png',
    },
    {
      name: 'مالک خداداد',
      role: 'عضو هیئت مدیره',
      image: 'gallery/p4.png',
    },
    {
      name: 'حسین خداداد',
      role: 'عضو هیئت مدیره',
      image: 'gallery/p4.png',
    },
  ];
}
