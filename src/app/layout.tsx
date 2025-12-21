// 'use client'
import * as React from 'react';
import NavBar from '@/components/common/navbar';
import BottomNavigation from '@/components/common/bottom-navigation';
import BottomNavbar from '@/components/common/bottom-navbar';
import AuthProvider from '@/context/AuthContext';
import { NewsProvider } from '@/context/NewsContext';
import { WaqfProvider } from '@/context/WaqfContext';
// import { useJWT } from '@/hooks/use-jwt';
// import { useWaqf } from '@/hooks/use-waqf';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cwaqf | an Islamic endowment",
  description: "It provide different waqf-funded causes to support",
  viewport: {
    width: "device-width",
    initialScale: 1.0
  },
  keywords: ["waqf", "endowment", 'Islamic endowment', 'awqaf', 'cash waqf'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  // const { token } = useJWT();

  return (
    <html lang="en" >
      <body>
        <AuthProvider>
          <NewsProvider>
            <WaqfProvider>
              <NavBar />
              {children}
              <BottomNavigation />
              <BottomNavbar />
            </WaqfProvider>
          </NewsProvider>
        </AuthProvider>
      </body>
    </html>

  );
}
