"use client"

import React from 'react';
import { Settings, Grid, Bookmark, UserSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function ProfilePage() {
  const profilePhotos = Array.from({ length: 9 }).map((_, i) => ({
    id: i,
    url: `https://picsum.photos/seed/profile-feed${i}/400/400`
  }));

  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center md:flex-row md:items-start gap-8 md:gap-12">
        <div className="relative">
          <div className="w-24 h-24 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-tr from-primary to-secondary">
            <div className="w-full h-full rounded-full border-4 border-background overflow-hidden">
              <Avatar className="w-full h-full">
                <AvatarImage src="https://picsum.photos/seed/owner/200/200" />
                <AvatarFallback>PS</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-4 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <h2 className="text-2xl font-bold">patisever_123</h2>
            <div className="flex gap-2">
              <Button variant="secondary" size="sm" className="rounded-xl">Profili Düzenle</Button>
              <Button variant="ghost" size="icon" className="rounded-xl"><Settings className="w-5 h-5" /></Button>
            </div>
          </div>

          <div className="flex justify-center md:justify-start gap-8">
            <div className="text-center md:text-left">
              <span className="font-bold block text-lg">24</span>
              <span className="text-xs text-muted-foreground uppercase tracking-widest">Gönderi</span>
            </div>
            <div className="text-center md:text-left">
              <span className="font-bold block text-lg">1.2k</span>
              <span className="text-xs text-muted-foreground uppercase tracking-widest">Takipçi</span>
            </div>
            <div className="text-center md:text-left">
              <span className="font-bold block text-lg">342</span>
              <span className="text-xs text-muted-foreground uppercase tracking-widest">Takip</span>
            </div>
          </div>

          <div className="space-y-1">
            <p className="font-semibold">Pati Sever</p>
            <p className="text-sm text-muted-foreground">Kuki adında bir Golden sahibi 🐾 | Hayvansever & Doğa tutkunu 🌿 | Konya</p>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-white/5">
        <Tabs defaultValue="posts" className="w-full">
          <TabsList className="w-full justify-center bg-transparent border-none h-auto gap-12">
            <TabsTrigger value="posts" className="data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:border-t-2 data-[state=active]:border-primary rounded-none px-0 py-2 transition-all flex items-center gap-2">
              <Grid className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Gönderiler</span>
            </TabsTrigger>
            <TabsTrigger value="saved" className="data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:border-t-2 data-[state=active]:border-primary rounded-none px-0 py-2 transition-all flex items-center gap-2">
              <Bookmark className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Kaydedilenler</span>
            </TabsTrigger>
            <TabsTrigger value="tagged" className="data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:border-t-2 data-[state=active]:border-primary rounded-none px-0 py-2 transition-all flex items-center gap-2">
              <UserSquare className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Etiketlenenler</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="posts" className="mt-8">
            <div className="grid grid-cols-3 gap-2 md:gap-4">
              {profilePhotos.map((img) => (
                <div key={img.id} className="aspect-square rounded-xl overflow-hidden cursor-pointer group">
                  <img 
                    src={img.url} 
                    alt="Profile feed" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-ai-hint="golden retriever dog"
                  />
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="saved" className="mt-8 text-center py-20">
            <p className="text-muted-foreground italic">Henüz kaydedilmiş bir pati fotoğrafı yok.</p>
          </TabsContent>
          
          <TabsContent value="tagged" className="mt-8 text-center py-20">
            <p className="text-muted-foreground italic">Kimse sizi bir patide etiketlemedi.</p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
