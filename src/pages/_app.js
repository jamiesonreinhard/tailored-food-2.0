import '@/styles/globals.css'
import Head from 'next/head'
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Tailored Food</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Google Tag Manager - Global base code */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-MCPQ21FQH2`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MCPQ21FQH2', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Component {...pageProps} />
    </div>
  )
}
