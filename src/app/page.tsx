"use client"

import React from 'react';
import Link from 'next/link';
import { ShoppingBag, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PRODUCTS, HERO_BANNER } from '@/lib/constants';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function HomePage() {
  // Yeni eklenen ürünleri (20-24) ve öne çıkanları al
  const newArrivals = PRODUCTS.filter(p => p.badge === 'Yeni Ürün');
  const otherFeatured = PRODUCTS.filter(p => p.badge === 'En Popüler').slice(0, 3);

  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center rounded-[3rem] overflow-hidden mt-4">
        <img 
          src={HERO_BANNER} 
          alt="Makara Pati" 
          className="absolute inset-0 w-full h-full object-cover brightness-[0.4]"
        />
        <div className="relative z-10 text-center space-y-8 px-4 max-w-4xl">
          <Badge className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-[0.2em] border-none shadow-xl">
            Konya'dan %100 El Yapımı
          </Badge>
          <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter">
            PATİLER İÇİN <br />
            <span className="text-primary italic">LÜKS</span> & <span className="text-secondary italic">KONFOR</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl mx-auto">
            Gerçek ahşaptan, tamamen el yapımı ve dostlarınızın doğasına uygun benzersiz tasarımlar.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
            <Link href="/shop">
              <Button size="lg" className="h-20 px-12 rounded-[2rem] text-xl font-black gap-3 shadow-[0_20px_50px_rgba(248,129,61,0.3)] hover:scale-105 transition-transform">
                <ShoppingBag className="w-6 h-6" /> Mağazayı Keşfet
              </Button>
            </Link>
            <a href="https://wa.me/905475717177" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="h-20 px-12 rounded-[2rem] text-xl font-black bg-white/5 backdrop-blur-xl border-white/20 text-white hover:bg-white/10 hover:scale-105 transition-transform gap-3">
                <MessageCircle className="w-6 h-6 text-green-400" /> WhatsApp Sipariş
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* New Arrivals Carousel */}
      <section className="space-y-12 px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-8">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-5xl font-black italic uppercase tracking-tighter leading-none">Yeni Gelenler</h2>
            <p className="text-muted-foreground text-lg">Atölyemizden taze çıkan en yeni tasarımlarımız.</p>
          </div>
          <Link href="/shop">
            <Button variant="link" className="text-primary font-black uppercase tracking-widest gap-2 group p-0">
              Tümünü Gör <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Button>
          </Link>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {newArrivals.map((product) => (
              <CarouselItem key={product.id} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <div className="group relative bg-white/5 border border-white/5 rounded-[3rem] overflow-hidden transition-all hover:border-primary/50 shadow-2xl h-full flex flex-col">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <Badge className="absolute top-8 left-8 bg-primary text-white border-none px-6 py-2 font-black uppercase text-[10px] tracking-widest shadow-lg">
                      {product.badge}
                    </Badge>
                  </div>
                  <div className="p-8 space-y-6 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <h3 className="text-xl font-black leading-tight group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-2xl font-black text-primary">{product.price}</p>
                    </div>
                    <Link href={`/shop/${product.id}`}>
                      <Button className="w-full h-14 rounded-2xl text-sm font-black uppercase tracking-widest hover:scale-105 transition-transform">
                        Detayları İncele
                      </Button>
                    </Link>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="left-[-2rem] bg-white/5 border-white/10 text-white hover:bg-primary hover:text-white" />
            <CarouselNext className="right-[-2rem] bg-white/5 border-white/10 text-white hover:bg-primary hover:text-white" />
          </div>
        </Carousel>
      </section>

      {/* Featured Grid */}
      <section className="space-y-16 py-10">
        <div className="text-center space-y-4">
          <Badge variant="outline" className="text-primary border-primary/30 px-6 py-2 rounded-full font-black uppercase tracking-[0.3em] text-[10px]">Pati Favorileri</Badge>
          <h2 className="text-5xl font-black italic uppercase tracking-tighter">Öne Çıkan Koleksiyon</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10 px-4">
          {otherFeatured.map((product) => (
            <div key={product.id} className="group relative bg-white/5 border border-white/5 rounded-[3.5rem] overflow-hidden transition-all hover:border-primary/30 shadow-2xl hover:translate-y-[-10px] duration-500">
              <div className="relative aspect-square overflow-hidden bg-muted">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <Badge className="absolute top-8 left-8 bg-white/10 backdrop-blur-md text-white border-white/20 px-6 py-2 font-black uppercase text-[10px] tracking-widest">
                  {product.badge}
                </Badge>
              </div>
              <div className="p-10 space-y-8">
                <div className="space-y-2">
                  <h3 className="text-2xl font-black leading-tight group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-3xl font-black text-primary">{product.price}</p>
                </div>
                <Link href={`/shop/${product.id}`}>
                  <Button className="w-full h-16 rounded-[1.5rem] text-sm font-black uppercase tracking-widest shadow-xl">
                    Şimdi Keşfet
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="mx-4">
        <div className="bg-gradient-to-br from-primary via-primary to-orange-600 rounded-[4rem] p-16 md:p-32 text-center space-y-10 relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(248,129,61,0.5)]">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tighter uppercase italic">Özel Bir Tasarım mı İstiyorsunuz?</h2>
            <p className="text-white/90 text-xl font-medium">Mekanınıza ve pati dostunuza özel ölçülerde tasarımlar yapıyoruz. Hayalinizdeki kedi evini birlikte tasarlayalım.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="h-20 px-16 rounded-[2rem] text-2xl font-black shadow-2xl hover:scale-105 transition-transform text-primary uppercase">
                  Ücretsiz Teklif Al
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
