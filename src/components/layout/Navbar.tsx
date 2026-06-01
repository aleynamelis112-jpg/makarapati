"use client"

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, ShoppingBag, Heart, Phone, ShoppingCart, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navItems = [
  { name: 'Ana Sayfa', icon: Home, href: '/' },
  { name: 'Tüm Ürünler', icon: ShoppingBag, href: '/shop' },
  { name: 'Favoriler', icon: Heart, href: '/favorites' },
  { name: 'İletişim', icon: Phone, href: '/contact' },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 glass bg-background/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4 group transition-all">
          <div className="w-12 h-12 relative flex items-center justify-center bg-white/5 rounded-2xl border border-white/10 group-hover:border-primary/50 transition-colors overflow-hidden">
            <img 
              src="/logo.jpg" 
              alt="Makara Pati Logo" 
              className="w-full h-full object-cover transition-transform group-hover:scale-110"
            />
          </div>
          <span className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-tighter">
            MAKARA PATİ
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-xs font-black uppercase tracking-[0.2em] transition-all hover:text-primary relative py-2",
                  isActive ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full" : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/favorites">
            <Button variant="ghost" size="icon" className="relative hover:bg-primary/10 hover:text-primary rounded-2xl w-12 h-12">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-primary text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full text-white ring-4 ring-background shadow-lg">
                0
              </span>
            </Button>
          </Link>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-2xl w-12 h-12 bg-white/5">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background/95 backdrop-blur-2xl border-white/5 w-[85%]">
                <div className="mt-12 space-y-8">
                  <div className="flex items-center gap-3 px-2">
                    <img src="/logo.jpg" alt="Logo" className="w-10 h-10 rounded-xl" />
                    <span className="text-xl font-black tracking-tighter text-primary">MAKARA PATİ</span>
                  </div>
                  <nav className="flex flex-col gap-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "text-2xl font-black uppercase tracking-tighter flex items-center gap-4 p-4 rounded-3xl transition-all",
                          pathname === item.href ? "bg-primary text-white shadow-xl shadow-primary/20" : "text-muted-foreground hover:bg-white/5"
                        )}
                      >
                        <item.icon className="w-7 h-7" />
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                  <div className="pt-10 px-4">
                    <a href="https://wa.me/905475717177" className="w-full bg-green-500 text-white rounded-[2rem] h-16 flex items-center justify-center gap-3 font-black uppercase tracking-widest text-sm shadow-xl shadow-green-500/20">
                      <Phone className="w-5 h-5" /> WhatsApp Sipariş
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
