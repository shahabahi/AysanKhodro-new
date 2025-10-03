export interface Product {
  id: number;
  name: string;
  image: string; // 👈 اضافه شد
  engine: {
    model: string;
    type: string;
    cylinders?: string;
    displacement_cc: number;
    power_hp: string;
    torque_nm: string;
    emission: string;
  };
  dimensions: {
    length_mm: string | number;
    width_mm: number;
    height_mm?: string | number;
    wheelbase_mm?: number | number[];
    gvw_kg: number;
    payload_kg: string | number;
    gcw_kg?: string | number;
  };
  systems: {
    gearbox: string;
    steering?: string;
    suspension: string;
    brakes: string;
  };
  fuel_tank_l: number | string;
  features: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: 'کامیونت ایسوزو 6تن',
    image: 'product/6ton.png',
    engine: {
      model: 'ISUZU 4JJ1-TC',
      type: 'دیزلی، تزریق مستقیم، DOHC، توربوشارژ + انترکولر',
      cylinders: '۴ سیلندر خطی',
      displacement_cc: 2999,
      power_hp: '124 @ 2600 rpm',
      torque_nm: '354 @ 1500 rpm',
      emission: 'Euro 5',
    },
    dimensions: {
      length_mm: '6300–6500',
      width_mm: 2050,
      height_mm: '2300–2350',
      wheelbase_mm: [3360, 3885],
      gvw_kg: 6000,
      payload_kg: '3500–4000',
    },
    systems: {
      gearbox: '6 سرعته دستی',
      steering: 'هیدرولیک قابل تنظیم',
      suspension: 'فنر تخت نیم‌بیضی + کمک‌فنر هیدرولیک',
      brakes: 'دیسکی جلو، کاسه‌ای عقب + ABS/EBD',
    },
    fuel_tank_l: 100,
    features: [
      'کاب سه‌نفره با کمربند سه‌نقطه‌ای',
      'شیشه‌بالابر برقی',
      'تهویه مطبوع',
      'سیستم صوتی USB/AUX',
      'آینه‌های برقی گرم‌کن‌دار',
      'ایربگ راننده و سرنشین (برخی بازارها)',
    ],
  },
  {
    id: 2,
    name: 'کامیونت ایسوزو 4تن',
    image: 'product/4ton.png',
    engine: {
      model: 'ISUZU 4JJ1-TC',
      type: 'دیزلی، تزریق مستقیم، DOHC، توربوشارژ + انترکولر',
      cylinders: '۴ سیلندر خطی',
      displacement_cc: 2999,
      power_hp: '124 @ 2600 rpm',
      torque_nm: '354 @ 1500 rpm',
      emission: 'Euro 5',
    },
    dimensions: {
      length_mm: '6000–6200',
      width_mm: 2050,
      height_mm: 2300,
      wheelbase_mm: 3360,
      gvw_kg: 4000,
      payload_kg: '2000–2500',
    },
    systems: {
      gearbox: '6 سرعته دستی',
      steering: 'هیدرولیک',
      suspension: 'فنر تخت نیم‌بیضی + کمک‌فنر هیدرولیک',
      brakes: 'دیسکی جلو، کاسه‌ای عقب + ABS/EBD',
    },
    fuel_tank_l: 100,
    features: [
      'صندلی سه‌نفره با کمربند سه‌نقطه‌ای',
      'شیشه‌بالابر برقی',
      'تهویه مطبوع',
      'سیستم صوتی USB/AUX',
      'آینه‌های برقی گرم‌کن‌دار',
    ],
  },
  {
    id: 3,
    name: 'ISUZU NPR (8t)',
    image: 'product/8ton.jpg',
    engine: {
      model: 'ISUZU 4HK1-TC',
      type: 'دیزلی، تزریق مستقیم، DOHC، توربوشارژ + انترکولر',
      displacement_cc: 5193,
      power_hp: '150–155 @ 2600 rpm',
      torque_nm: '422–450 @ 1500 rpm',
      emission: 'Euro 5 / EPA 2025',
    },
    dimensions: {
      length_mm: 6650,
      width_mm: 2150,
      height_mm: 2480,
      gvw_kg: 8400,
      payload_kg: 5800,
    },
    systems: {
      gearbox: '6 سرعته دستی یا AMT',
      steering: 'هیدرولیک',
      suspension: 'فنر تخت نیم‌بیضی',
      brakes: 'دیسکی جلو، کاسه‌ای عقب + ABS/EBD/ASR',
    },
    fuel_tank_l: 140,
    features: [
      'تهویه مطبوع Valeo',
      'سیستم صوتی USB/AUX',
      'شیشه‌بالابر برقی',
      'آینه‌های برقی گرم‌کن‌دار',
    ],
  },
  {
    id: 4,
    name: 'ISUZU FSR',
    image: 'product/fsr.png',
    engine: {
      model: 'ISUZU 6HK1-TC',
      type: 'دیزلی، تزریق مستقیم، توربوشارژ + انترکولر',
      displacement_cc: 7790,
      cylinders: '6 سیلندر خطی',
      power_hp: '240–260 @ 2400 rpm',
      torque_nm: '706–735 @ 1450 rpm',
      emission: 'Euro 5/6',
    },
    dimensions: {
      length_mm: '8100–9500',
      width_mm: 2350,
      gvw_kg: 12000,
      payload_kg: '7000–8000',
    },
    systems: {
      gearbox: '6 یا 9 سرعته دستی',
      suspension: 'فنر تخت نیم‌بیضی یا بادی',
      brakes: 'ترمز بادی + ABS/EBS',
    },
    fuel_tank_l: '200–300',
    features: [
      'کاب راحت با صندلی بادی راننده',
      'تهویه مطبوع',
      'سیستم صوتی',
      'شیشه و آینه برقی',
    ],
  },
  {
    id: 5,
    name: 'ISUZU VC66 – کشنده سنگین',
    image: 'product/vcc6.png',
    engine: {
      model: 'ISUZU 6WG1-TC / WP13',
      type: 'دیزلی، تزریق مستقیم، توربو + انترکولر',
      displacement_cc: 15681,
      cylinders: '6 سیلندر خطی',
      power_hp: '420–460 @ 1800 rpm',
      torque_nm: '2000–2300 @ 1200 rpm',
      emission: 'Euro 5 / China VI',
    },
    dimensions: {
      length_mm: 6800,
      width_mm: 2490,
      height_mm: 3150,
      gvw_kg: 25000,
      gcw_kg: '49000–55000',
      payload_kg: 0,
    },
    systems: {
      gearbox: '12 سرعته دستی یا AMT',
      suspension: 'فنری یا بادی',
      brakes: 'ترمز بادی + ABS/EBS',
    },
    fuel_tank_l: '400–600',
    features: [
      'کاب خوابدار دونفره با تخت',
      'تهویه مطبوع اتوماتیک',
      'فضای ذخیره‌سازی داخلی',
      'سیستم صوتی پیشرفته + مانیتور چندکاربره',
    ],
  },
];
