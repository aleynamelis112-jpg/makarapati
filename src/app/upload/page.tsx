"use client"
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

export default function UploadRedirect() {
  useEffect(() => {
    redirect('/shop');
  }, []);
  return null;
}
