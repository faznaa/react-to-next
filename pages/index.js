import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SaaSProductLandingPage from 'demos/SaaSProductLandingPage.js'
import  tw,{css,styled}  from 'twin.macro';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="debug-screens">
        
        <SaaSProductLandingPage/>

      </body>
    </div>
  )
}


