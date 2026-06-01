"use client"
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

export default function MessagesRedirect() {
  useEffect(() => {
    redirect('/contact');
  }, []);
  return null;
}
