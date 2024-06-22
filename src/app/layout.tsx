import { ClerkProvider,UserButton  } from '@clerk/nextjs'
import Header from '../components/Header';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
        <Header />
          <main>
            {children}
          </main>
        </body>
      </html>
      </ClerkProvider>
    
  )
}