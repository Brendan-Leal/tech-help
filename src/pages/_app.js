import '@/styles/globals.css'
import { League_Spartan, Lato } from "next/font/google"
import Script from 'next/script';
import Head from 'next/head';

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-spartan"
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["400"]
})

export default function App({ Component, pageProps }) {
  return (
    <div className={`${lato.variable} ${leagueSpartan.variable} font-sans`}>
      <Script defer src='https://assets.calendly.com/assets/external/widget.js' ></Script>
      <Component {...pageProps} />
    </div>
  )
}
