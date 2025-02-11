import React, { ReactNode } from 'react'
import SiteAppBar from './SiteAppBar'
import Footer from './Footer'

type HomeShellProps = {
   children: ReactNode
}

export default function HomeShell({ children }: HomeShellProps) {
   return (
      <div>
         <div className="min-h-full">
            <SiteAppBar />
            <main>{children}</main>
            <Footer />
         </div>
      </div>
   )
}
