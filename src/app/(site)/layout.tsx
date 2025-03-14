import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '@/app/globals.css'

import { Button } from '@/components/ui/button'
import ReduxProviderWrapper from '@/lib/redux/ReduxProviderWrapper'
import HomeShell from '../layouts/site/HomeShell'
//hola
const geistSans = Geist({
   variable: '--font-geist-sans',
   subsets: ['latin'],
})

const geistMono = Geist_Mono({
   variable: '--font-geist-mono',
   subsets: ['latin'],
})

export const metadata: Metadata = {
   title: 'Create Next App',
   description: 'Generated by create next app',
}

export default function SiteLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang="en">
         <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
         >
            {/*    <ReduxProviderWrapper>*/}
            {/*  <GlobalDialogLoader />*/}
            <HomeShell>{children}</HomeShell>

            {/*</ReduxProviderWrapper>*/}
         </body>
      </html>
   )
}
