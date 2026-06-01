"use client"

import React from 'react';
import { Heart, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function FavoritesPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-8 text-center px-4">
      <div className="relative">
        <Heart className="w-32 h-32 text-white/5" />
        <Heart className="w-12 h-12 text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>
      <div className="space-y-4">
        <h1 className="text-4xl font-black italic">Henüz favori ürünün yok</h1>
        <p className="text-muted-foreground text-lg max-w-md mx-auto">
          Dostun için en sevdiğin ürünleri kalp ikonuna tıklayarak buraya kaydedebilirsin.
        </p>
      </div>
      <Link href="/shop">
        <Button size="lg" className="h-16 px-10 rounded-2xl text-lg font-bold gap-3">
          <ShoppingBag className="w-6 h-6" /> Mağazayı Keşfet
        </Button>
      </Link>
    </div>
  );
}
