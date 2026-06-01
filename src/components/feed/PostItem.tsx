"use client"

import React, { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface PostItemProps {
  id: string;
  user: {
    name: string;
    handle: string;
    avatar: string;
  };
  image: string;
  caption: string;
  likes: number;
  comments: number;
  time: string;
}

export function PostItem({ user, image, caption, likes, comments, time }: PostItemProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const toggleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  return (
    <article className="glass-card rounded-[2rem] overflow-hidden mb-8 shadow-2xl">
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10 border-2 border-primary/20">
            <AvatarImage src={user.avatar} />
            <AvatarFallback>{user.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-semibold">{user.name}</p>
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest">{time}</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="text-muted-foreground">
          <MoreHorizontal className="w-5 h-5" />
        </Button>
      </div>

      <div className="relative aspect-square group overflow-hidden" onDoubleClick={toggleLike}>
        <img 
          src={image} 
          alt={caption} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          data-ai-hint="pet photo"
        />
        {/* Heart animation overlay would go here */}
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <button onClick={toggleLike} className="group">
              <Heart className={cn("w-7 h-7 transition-all duration-300", isLiked ? "fill-primary text-primary scale-110" : "text-white group-hover:text-primary")} />
            </button>
            <button className="group">
              <MessageCircle className="w-7 h-7 text-white group-hover:text-primary transition-colors" />
            </button>
            <button className="group">
              <Send className="w-7 h-7 text-white group-hover:text-primary transition-colors" />
            </button>
          </div>
          <button>
            <Bookmark className="w-7 h-7 text-white hover:text-primary transition-colors" />
          </button>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-bold text-primary">{likeCount} Pati Beğenisi</p>
          <p className="text-sm leading-relaxed">
            <span className="font-bold mr-2">@{user.handle}</span>
            {caption}
          </p>
          <button className="text-xs text-muted-foreground hover:text-white transition-colors">
            {comments} yorumun tümünü gör
          </button>
        </div>

        <div className="mt-4 flex items-center gap-2">
          <Avatar className="w-6 h-6">
            <AvatarImage src="https://picsum.photos/seed/me/50/50" />
            <AvatarFallback>ME</AvatarFallback>
          </Avatar>
          <input 
            type="text" 
            placeholder="Pati yorumu ekle..." 
            className="flex-1 bg-transparent text-sm outline-none border-none focus:ring-0 placeholder:text-muted-foreground/50"
          />
          <button className="text-primary text-xs font-semibold disabled:opacity-50">Paylaş</button>
        </div>
      </div>
    </article>
  );
}