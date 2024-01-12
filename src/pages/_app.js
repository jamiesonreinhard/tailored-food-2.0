import '@/styles/globals.css'
import Head from 'next/head'
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Function to initialize GTM
    const initializeGTM = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', 'G-MCPQ21FQH2', {
        page_path: window.location.pathname,
      });
    }

    // Load GTM script
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-MCPQ21FQH2';
    script.async = true;
    script.onload = initializeGTM;
    document.head.appendChild(script);
  }, []);

  return (
    <div>
      <Head>
        <title>Tailored Food</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}
