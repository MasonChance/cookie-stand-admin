import Head from 'next/head'
import { stringify } from 'postcss'
import { layoutGuide } from '../utility'
import  Header  from '../components/header'
import CreateStandForm from '../components/form-new-stand'  // FIXME: import not maintaining state when imported


export default function CookieStandAdmin() {


  
  return (
    <div className={layoutGuide('')}>
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <Header title='Cookie Stand Admin' />


      <main className={layoutGuide("mx-20 mt-2 ",false)}>
        <CreateStandForm />

      </main>
    </div>
  )
};






