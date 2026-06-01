export const SITE_LOGO = "/logo.jpg";
export const HERO_BANNER = "/1.jpeg";

export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  description: string;
  image: string;
  badge: string;
  features: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: '20',
    name: 'Elit Safir Duvar Parkuru',
    category: 'park',
    price: '34.500 TL',
    description: 'Yeni nesil tasarım anlayışıyla üretilen, en kaliteli ahşap ve işçilikle donatılmış, odanızın havasını değiştirecek premium duvar parkuru.',
    image: '/20.jpeg',
    badge: 'Yeni Ürün',
    features: ["Akıllı Montaj Sistemi", "Gizli Kablo Kanalları", "Premium Huş Dokusu", "Dayanıklı Jüt Halat"]
  },
  {
    id: '21',
    name: 'Venedik Kedi Şatosu',
    category: 'house',
    price: '28.900 TL',
    description: 'Venedik mimarisinden esinlenilen, çok katlı ve geniş pencereli lüks kedi evi.',
    image: '/21.jpeg',
    badge: 'Yeni Ürün',
    features: ["3 Katlı Yaşam Alanı", "Yıkanabilir Velvet Minder", "El İşçiliği Oymalar", "Geniş Gözlem Terası"]
  },
  {
    id: '22',
    name: 'Zen Master Mama İstasyonu',
    category: 'station',
    price: '5.200 TL',
    description: 'Dostunuzun omurga sağlığı için ergonomik açıyla tasarlanmış, minimalist ve şık beslenme ünitesi.',
    image: '/22.jpeg',
    badge: 'Yeni Ürün',
    features: ["15 Derece Eğimli Kaplar", "Antibakteriyel Yüzey", "Paslanmaz Çelik", "Kaymaz Taban"]
  },
  {
    id: '23',
    name: 'İskandinav Duvar Modülü',
    category: 'park',
    price: '11.800 TL',
    description: 'Minimalist İskandinav tarzını yansıtan, modüler yapısı sayesinde dilediğiniz gibi genişletebileceğiniz duvar raf seti.',
    image: '/23.jpeg',
    badge: 'Yeni Ürün',
    features: ["Modüler Tasarım", "Doğal Yağ Cilası", "Kolay Kurulum", "Yüksek Taşıma Gücü"]
  },
  {
    id: '24',
    name: 'Kuzey Yıldızı Uyku Kapsülü',
    category: 'house',
    price: '9.400 TL',
    description: 'Tamamen kapalı, loş ve huzurlu bir uyku deneyimi sunan modern kedi yuvası.',
    image: '/24.jpeg',
    badge: 'Yeni Ürün',
    features: ["Loş İç Mekan", "Yüksek Kalite Kontra", "Nefes Alan Tasarım", "Kompakt Yapı"]
  },
  {
    id: '1',
    name: 'Mega Duvar Oyun Parkı - Efsane Seri',
    category: 'park',
    price: '38.500 TL',
    description: 'Dostlarınız için devasa bir yaşam alanı. 4 adet yuva, asma köprüler, tırmanma rampaları ve mama istasyonu içeren, tamamen el yapımı masif ahşap tasarım.',
    image: '/1.jpeg',
    badge: 'En Popüler',
    features: ["4 Adet İzleme Yuvası", "2 Adet Asma Köprü", "Entegre Mama İstasyonu", "%100 Masif Çam"]
  },
  {
    id: '2',
    name: 'Sanat ve Eğlence Paneli',
    category: 'park',
    price: '15.250 TL',
    description: 'El boyaması figürler ve LED aydınlatmalarla donatılmış, hem oyun alanı hem de eviniz için şık bir sanat eseri niteliğinde duvar paneli.',
    image: '/2.jpeg',
    badge: 'Özel Tasarım',
    features: ["LED Aydınlatma Sistemi", "El Boyaması Detaylar", "Keten Tırmalama Sütunu", "Yumuşak Minderli Yuva"]
  },
  {
    id: '3',
    name: 'Endüstriyel Master Seri Parkur',
    category: 'park',
    price: '24.000 TL',
    description: 'Gerçek metal borular ve fırınlanmış masif ahşabın muazzam uyumu. Endüstriyel tarzı sevenler için dayanıklı ve estetik bir tırmanma parkuru.',
    image: '/3.jpeg',
    badge: 'Klasik',
    features: ["Gerçek Metal Boru İskelet", "Yüksek Taşıma Kapasitesi", "Endüstriyel Tasarım", "Kolay Montaj"]
  },
  {
    id: '4',
    name: 'Modern Kedi Evi - Loft Tasarım',
    category: 'house',
    price: '9.800 TL',
    description: 'Minimalist ev dekorasyonuna uygun, geniş iç hacimli ve konforlu minderli modern kedi yuvası.',
    image: '/4.jpeg',
    badge: 'Trend',
    features: ["Geniş İç Hacim", "Yıkanabilir Minder", "Modern Çizgiler", "Dayanıklı Gövde"]
  },
  {
    id: '5',
    name: 'Duvar Tırmanma Seti - Galaksi',
    category: 'park',
    price: '12.400 TL',
    description: 'Farklı seviyelerde tırmanma basamakları ve gözlem noktaları içeren kompakt duvar parkuru.',
    image: '/5.jpeg',
    badge: 'Fiyat/Performans',
    features: ["6 Adet Basamak", "1 Adet Gözlem Balkonu", "Kaymaz Yüzey", "Masif Ahşap"]
  },
  {
    id: '6',
    name: 'Premium Masif Kedi Kulesi',
    category: 'house',
    price: '18.900 TL',
    description: 'Çok katlı, tırmalama alanlı ve gizli uyku bölmeli lüks kedi mobilyası.',
    image: '/6.jpeg',
    badge: 'Premium',
    features: ["3 Katlı Tasarım", "Sisal Tırmalama Alanı", "Gizli Bölme", "Ağır ve Dengeli"]
  },
  {
    id: '7',
    name: 'Doğa Serisi Oyun Alanı',
    category: 'park',
    price: '21.500 TL',
    description: 'Doğal ağaç dokusunu koruyan, organik formlu tırmanma ve oyun kompleksi.',
    image: '/7.jpeg',
    badge: 'Eko-Seri',
    features: ["Organik Formlar", "Keten İpler", "Doğal Yağ Cilası", "El İşçiliği"]
  },
  {
    id: '8',
    name: 'Minimalist Duvar Raf Seti',
    category: 'park',
    price: '7.200 TL',
    description: 'Şık ve işlevsel, duvarınıza estetik katan 3 parçalı kedi dinlenme raf seti.',
    image: '/8.jpeg',
    badge: 'Stokta',
    features: ["3 Adet Modüler Raf", "Gizli Bağlantı Sistemi", "Yumuşak Kumaş Kaplama", "Sağlam Yapı"]
  },
  {
    id: '9',
    name: 'Konforlu Uyku Köşesi',
    category: 'house',
    price: '6.400 TL',
    description: 'Dostunuzun en sevdiği uyku alanı olacak, yerden yüksek ve korunaklı tasarım.',
    image: '/9.jpeg',
    badge: 'Çok Satan',
    features: ["Yerden Yüksek Tasarım", "Ekstra Yumuşak İç Alan", "Hava Alan Gövde", "Kompakt Boyut"]
  },
  {
    id: '10',
    name: 'Pencere Keyif Platformu',
    category: 'park',
    price: '4.800 TL',
    description: 'Pencere kenarına monte edilebilen, dostunuzun dışarıyı izlemesi için ideal balkon.',
    image: '/10.jpeg',
    badge: 'Pratik',
    features: ["Güçlü Vantuz/Vida Sistemi", "Geniş İzleme Alanı", "Dayanıklı Akrilik/Ahşap", "Kolay Kurulum"]
  },
  {
    id: '11',
    name: 'Küp Tasarım Kedi Yuvası',
    category: 'house',
    price: '11.200 TL',
    description: 'Geometrik tasarımıyla dikkat çeken, modern ve korunaklı kedi evi.',
    image: '/11.jpeg',
    badge: 'Özel',
    features: ["Geometrik Estetik", "Masif Huş Kontra", "Çıkarılabilir İç Yatak", "Fırınlanmış Ahşap"]
  },
  {
    id: '12',
    name: 'Şeffaf Gözlem Tüneli',
    category: 'park',
    price: '14.600 TL',
    description: 'Duvara monte edilen, ortası şeffaf akrilik tünel ile dostunuzu her an görebilirsiniz.',
    image: '/12.jpeg',
    badge: 'İnovatif',
    features: ["Kırılmaz Şeffaf Akrilik", "Masif Çerçeve", "Havalandırma Delikleri", "Geniş Çap"]
  },
  {
    id: '13',
    name: 'Ahşap Beslenme Ünitesi',
    category: 'station',
    price: '3.900 TL',
    description: 'Duruş bozukluğunu önleyen, ergonomik ve şık mama/su kabı standı.',
    image: '/13.jpeg',
    badge: 'Sağlıklı',
    features: ["Ergonomik Yükseklik", "Paslanmaz Çelik Kaplar", "Kolay Temizlenir", "Kaymaz Ayaklar"]
  },
  {
    id: '14',
    name: 'Dinamik Duvar Parkuru',
    category: 'park',
    price: '27.500 TL',
    description: 'Enerjik dostlar için tırmanma, zıplama ve oyun alanlarını birleştiren set.',
    image: '/14.jpeg',
    badge: 'Geniş Set',
    features: ["Sarmal Tırmanma Direği", "Zıplama Platformları", "Hamak Alanı", "Full Modüler"]
  },
  {
    id: '15',
    name: 'Zen Serisi Dinlenme Alanı',
    category: 'house',
    price: '13.400 TL',
    description: 'Sessiz ve huzurlu bir uyku için tasarlanmış, kapalı ve loş kedi evi.',
    image: '/15.jpeg',
    badge: 'Huzur',
    features: ["Loş İç Mekan", "Sessiz Materyal", "Minimalist Kapak", "Doğal Doku"]
  },
  {
    id: '16',
    name: 'Esnek Asma Köprü',
    category: 'park',
    price: '5.600 TL',
    description: 'İki üniteyi birleştiren, dostunuzun dengesini geliştiren esnek ahşap köprü.',
    image: '/16.jpeg',
    badge: 'Eğlenceli',
    features: ["Esnek Yapı", "Dayanıklı Halat", "Kaymaz Basamaklar", "Farklı Uzunluk Seçeneği"]
  },
  {
    id: '17',
    name: 'Duvara Monte Kapalı Yuva',
    category: 'house',
    price: '10.800 TL',
    description: 'Yerden yüksekte güvenle uyumak isteyen dostlar için kapalı duvar yuvası.',
    image: '/17.jpeg',
    badge: 'Güvenli',
    features: ["Yüksek Taşıma Kapasitesi", "Geniş Giriş", "Minder Dahil", "Şık Ön Kapak"]
  },
  {
    id: '18',
    name: 'Komple Aktivite Duvarı',
    category: 'park',
    price: '42.000 TL',
    description: 'Odanızın bir duvarını tamamen dostunuza ayıran, en kapsamlı Makara Pati seti.',
    image: '/18.jpeg',
    badge: 'Full Paket',
    features: ["Her Şey Dahil", "Özel Montaj Desteği", "Sınırsız Eğlence", "Lüks Kaplama"]
  },
  {
    id: '19',
    name: 'Masif Tırmalama Kolonu',
    category: 'park',
    price: '8.500 TL',
    description: 'Tamamen doğal jüt ip sarılı, tavan bağlantılı ekstra uzun tırmalama kolonu.',
    image: '/19.jpeg',
    badge: 'Dayanıklı',
    features: ["Doğal Jüt İp", "Tavan Bağlantısı", "Ekstra Uzunluk", "Masif Çekirdek"]
  }
];
