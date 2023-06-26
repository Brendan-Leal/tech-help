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
    <>
      <Head>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <div className={`${lato.variable} ${leagueSpartan.variable} font-sans`}>
        <Script defer src='https://assets.calendly.com/assets/external/widget.js' ></Script>
        <Component {...pageProps} />
      </div>
    </>
  )
}
