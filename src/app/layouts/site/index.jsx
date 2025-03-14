import React from 'react'
import SiteAppBar from './SiteAppBar'

import Footer from './Footer'

export default function SiteLayout({ children }) {
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
