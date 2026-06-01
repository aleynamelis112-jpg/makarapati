"use client"

import React from 'react';
import { Phone, Instagram, MessageCircle, Mail, MapPin, ExternalLink, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  const contactInfo = [
    { 
      label: 'Telefon', 
      value: '+90 547 571 71 77', 
      icon: Phone, 
      color: 'bg-blue-500/20 text-blue-400',
      action: 'tel:+905475717177'
    },
    { 
      label: 'WhatsApp', 
      value: '+90 547 571 71 77', 
      icon: MessageCircle, 
      color: 'bg-green-500/20 text-green-400',
      action: 'https://wa.me/905475717177'
    },
    { 
      label: 'Instagram', 
      value: '@makara.pati', 
      icon: Instagram, 
      color: 'bg-pink-500/20 text-pink-400',
      action: 'https://instagram.com/makara.pati'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-16 py-12 px-4">
      <div className="text-center space-y-6">
        <Badge variant="outline" className="text-primary border-primary/30 px-6 py-2 rounded-full font-black uppercase tracking-[0.3em] text-[10px]">İletişim</Badge>
        <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none">
          BİZE <span className="text-primary">ULAŞIN</span>
        </h1>
        <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-medium">
          Dostunuz için en iyi tasarımı birlikte hayal edelim. Sorularınız için 7/24 yanınızdayız.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {contactInfo.map((info, idx) => (
          <a key={idx} href={info.action} target="_blank" rel="noopener noreferrer" className="block group">
            <Card className="bg-white/5 border border-white/5 rounded-[3rem] hover:border-primary/50 transition-all duration-500 shadow-2xl group-hover:translate-y-[-10px]">
              <CardContent className="p-10 flex flex-col items-center text-center space-y-6">
                <div className={`p-6 rounded-[2rem] ${info.color} group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <info.icon className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-black uppercase tracking-tighter">{info.label}</h3>
                  <p className="text-lg font-bold text-muted-foreground">{info.value}</p>
                </div>
                <Button variant="ghost" size="sm" className="gap-2 text-xs font-black uppercase tracking-[0.2em] text-primary hover:text-primary hover:bg-primary/10">
                  Bağlan <ExternalLink className="w-3 h-3" />
                </Button>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start pt-16 border-t border-white/5">
        <div className="space-y-10">
          <div className="space-y-4">
            <h2 className="text-4xl font-black italic uppercase tracking-tighter">ATÖLYEMİZ</h2>
            <p className="text-muted-foreground text-lg">Makara Pati tasarımları Konya'daki butik atölyemizde sevgiyle üretilmektedir.</p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center gap-6 bg-white/5 p-6 rounded-[2rem] border border-white/5">
              <div className="p-4 rounded-2xl bg-primary/20"><MapPin className="w-6 h-6 text-primary" /></div>
              <div>
                <p className="text-xs font-black text-primary uppercase tracking-widest">LOKASYON</p>
                <p className="text-lg font-bold">Konya / Türkiye</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 bg-white/5 p-6 rounded-[2rem] border border-white/5">
              <div className="p-4 rounded-2xl bg-primary/20"><Mail className="w-6 h-6 text-primary" /></div>
              <div>
                <p className="text-xs font-black text-primary uppercase tracking-widest">E-POSTA</p>
                <p className="text-lg font-bold">makarapati.com@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 border border-white/5 p-10 rounded-[3.5rem] space-y-8 shadow-2xl">
          <h3 className="text-2xl font-black italic uppercase tracking-tighter">HIZLI MESAJ</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest ml-4">Adınız</label>
              <input type="text" placeholder="Pati Sahibi" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-primary/30 transition-all font-bold" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest ml-4">Mesajınız</label>
              <textarea placeholder="Hayalinizdeki tasarımı anlatın..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-primary/30 transition-all font-bold min-h-[150px]" />
            </div>
            <Button className="w-full rounded-[1.5rem] h-16 text-md font-black uppercase tracking-widest shadow-xl gap-3">
              <Send className="w-5 h-5" /> Gönder
            </Button>
          </div>
        </div>
      </div>

      <footer className="text-center pt-24 text-muted-foreground text-[10px] font-black uppercase tracking-[0.4em]">
        © 2024 Makara Pati • Konya'da Sevgiyle Üretildi 🐾
      </footer>
    </div>
  );
}

function Badge({ children, variant, className }: any) {
  return (
    <span className={cn(
      "inline-block px-3 py-1 rounded-full text-sm",
      variant === 'outline' ? "border border-current" : "",
      className
    )}>
      {children}
    </span>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
