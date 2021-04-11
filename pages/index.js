import Head from 'next/head'
import { stringify } from 'postcss'

export default function Home() {
  const layoutGuide = (tailwind, dev=true)=> {
    if (dev === true){
      return ('border-2 border-dotted border-red-500' + tailwind)  
    } else {
      return tailwind
    }
  }

  return (
    <div className={layoutGuide('')}>
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="pl-2.5 px-5 mx-auto bg-green-300">
        <h1 className="font-semibold text-4x1 ">Cookie Stand Admin</h1>
      </header>


      <main className={layoutGuide("w-auto mx-20 mt-2 ",false)}>

        <form className={layoutGuide("grid grid-cols-7 grid-rows-6 col-gap-4 bg-green-300 rounded ")} name='standInfo'>
          <legend className={layoutGuide('row-start-1 row-span-1 col-start-1 col-span-7 text-center',false)}>Create Cookie Stand</legend>
          
          <label className={layoutGuide('row-start-2 row-span-1 col-start-1 col-end-2 '),false} for="location">Location:</label>
          <input className={layoutGuide( 'row-start-2 row-span-1 col-start-2 col-end-8 '),false} type="text" name="location"></input>
            

          
        </form>

        <p className="pl-100">
          table coming soon!
        </p>

        <p className="">
          {/* json output of last entered cookie stand data */}
        </p>


      </main>

      <footer className="">
       {/* copywrite 2021 */}
      </footer>
    </div>
  )
}
