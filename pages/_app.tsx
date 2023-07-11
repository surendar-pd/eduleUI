import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Toaster } from '@/components/ui/toaster'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700','800','900'],
  variable: '--font-poppins',
  style: ['italic', 'normal']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${poppins.variable} font-poppins w-full min-w-[1200px] max-h-screen bg-primary text-white`}>
      <Toaster/>
      <Component {...pageProps} />
    </main>
  )
}
