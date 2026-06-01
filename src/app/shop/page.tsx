"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { ShoppingBag, Filter, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { PRODUCTS } from '@/lib/constants';

const categories = [
  { id: 'all', name: 'Tümü' },
  { id: 'park', name: 'Oyun Parkları' },
  { id: 'house', name: 'Kedi Evleri' },
  { id: 'station', name: 'Mama İstasyonları' },
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Slicing or limiting is removed to show all products
  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-12 py-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/5 pb-12">
        <div className="space-y-4">
          <Badge variant="outline" className="text-primary border-primary/20 px-4 py-1 font-black uppercase tracking-widest text-[10px]">Pati Koleksiyonu</Badge>
          <h1 className="text-5xl font-black italic uppercase">Ürün Kataloğu</h1>
          <p className="text-muted-foreground text-lg max-w-md">Gerçek el yapımı, doğal ve dayanıklı {PRODUCTS.length} ürünümüzü keşfedin.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Ürün ara..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-primary/20 text-sm text-white"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        <aside className="w-full lg:w-64 space-y-8 shrink-0">
          <div className="space-y-6">
            <h3 className="text-sm font-black uppercase tracking-widest flex items-center gap-2">
              <Filter className="w-4 h-4 text-primary" /> Kategoriler
            </h3>
            <div className="flex flex-wrap lg:flex-col gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={cn(
                    "px-4 py-2 rounded-xl text-xs font-bold transition-all text-left uppercase tracking-wider",
                    selectedCategory === cat.id 
                      ? "bg-primary text-white shadow-lg shadow-primary/20" 
                      : "bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white"
                  )}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </aside>

        <div className="flex-1 space-y-8">
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Link key={product.id} href={`/shop/${product.id}`} className="group">
                <div className="bg-white/5 border border-white/5 rounded-[2.5rem] overflow-hidden transition-all hover:border-primary/30 group-hover:shadow-2xl h-full flex flex-col">
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <Badge className="absolute top-6 left-6 bg-primary/90 text-white border-none px-4 py-1.5 font-black uppercase text-[9px] tracking-widest">
                      {product.badge}
                    </Badge>
                  </div>
                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-1">
                      <h3 className="text-lg font-black leading-tight group-hover:text-primary transition-colors line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="text-2xl font-black text-primary">{product.price}</p>
                    </div>
                    <Button className="w-full h-12 rounded-xl text-xs font-black uppercase tracking-widest gap-2 mt-4">
                      <ShoppingBag className="w-4 h-4" /> Detayı İncele
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <div className="text-center py-20 border-2 border-dashed border-white/5 rounded-[3rem]">
              <p className="text-muted-foreground font-medium">Aradığınız kriterlere uygun ürün bulunamadı.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}