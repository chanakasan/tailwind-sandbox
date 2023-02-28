import "@/styles/globals.css";
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tailwind Sandbox</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen w-screen">
        <div className="flex h-full">
          <div className="mt-10 mx-auto border border-gray-500 w-5/6 h-5/6">
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </>
  )
}