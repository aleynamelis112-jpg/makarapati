"use client"

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ShoppingBag as ShopIcon, Heart as HeartIcon, CheckCircle2 as CheckIcon, MessageCircle as ChatIcon, ArrowLeft as BackIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { PRODUCTS } from '@/lib/constants';

export default function ProductDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const router = useRouter();
  const { toast } = useToast();
  const [isFavorite, setIsFavorite] = useState(false);

  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold">Ürün bulunamadı.</h1>
        <Button onClick={() => router.push('/shop')} className="mt-4">Mağazaya Dön</Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    toast({
      title: "Sepete Eklendi!",
      description: `${product.name} sepetinize başarıyla eklendi.`,
    });
  };

  return (
    <div className="space-y-12 py-10">
      <Button 
        variant="ghost" 
        onClick={() => router.back()}
        className="gap-2 text-muted-foreground hover:text-primary transition-colors font-bold uppercase tracking-widest text-xs"
      >
        <BackIcon className="w-4 h-4" /> Geri Dön
      </Button>

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-6">
          <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center bg-muted">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
            <Badge className="absolute top-8 left-8 bg-primary text-white border-none px-6 py-2 text-sm font-black tracking-widest uppercase">
              {product.badge}
            </Badge>
          </div>
        </div>

        <div className="space-y-10">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-black leading-tight italic uppercase">{product.name}</h1>
            <div className="flex items-baseline gap-6 mt-4">
              <span className="text-5xl font-black text-primary">{product.price}</span>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed pt-4">
              {product.description}
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-black flex items-center gap-2 uppercase tracking-widest">
              <CheckIcon className="w-6 h-6 text-primary" /> Ürün Detayları
            </h3>
            <ul className="grid sm:grid-cols-2 gap-4">
              {product.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground bg-white/5 p-4 rounded-2xl border border-white/5 font-medium">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button size="lg" className="flex-1 h-20 rounded-3xl text-xl font-black gap-3 shadow-2xl shadow-primary/30" onClick={handleAddToCart}>
              <ShopIcon className="w-7 h-7" /> Sepete Ekle
            </Button>
            <button 
              className={cn(
                "h-20 w-20 rounded-3xl transition-all flex items-center justify-center border",
                isFavorite ? "text-red-500 bg-red-500/10 border-red-500/20" : "bg-white/5 border-white/20 text-white"
              )}
              onClick={() => setIsFavorite(!isFavorite)}
            >
              <HeartIcon className={cn("w-7 h-7", isFavorite && "fill-current")} />
            </button>
          </div>

          <a href="https://wa.me/905475717177" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="w-full h-16 rounded-2xl text-lg font-black border-green-500/20 hover:bg-green-500/10 hover:text-green-500 gap-3 text-white">
              <ChatIcon className="w-6 h-6" /> WhatsApp ile Sipariş Ver
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
