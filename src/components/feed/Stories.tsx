"use client"

import React from 'react';
import { Plus } from 'lucide-react';
import { PRODUCTS } from '@/lib/constants';

export function Stories() {
  const storyProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar pt-2">
      <div className="flex flex-col items-center gap-2 flex-shrink-0 cursor-pointer group">
        <div className="relative w-16 h-16 rounded-full p-[2px] bg-muted overflow-hidden">
          <div className="w-full h-full rounded-full bg-background flex items-center justify-center border-2 border-dashed border-muted-foreground/30 group-hover:border-primary/50 transition-colors">
            <Plus className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
        </div>
        <span className="text-[11px] font-medium text-muted-foreground">Hikayen</span>
      </div>

      {storyProducts.map((product) => (
        <div key={product.id} className="flex flex-col items-center gap-2 flex-shrink-0 cursor-pointer">
          <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-primary via-secondary to-primary">
            <div className="w-full h-full rounded-full border-2 border-background overflow-hidden relative">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <span className="text-[11px] font-medium text-muted-foreground">{product.name.split(' ')[0]}</span>
        </div>
      ))}
    </div>
  );
}
