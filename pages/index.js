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


      <main className={layoutGuide("mx-20 mt-2 ",false)}>
        <form className={layoutGuide('w-7/8 grid grid-rows-4 grid-cols-4 gap-1')}>
          <legend className={layoutGuide('row-span-1 col-span-4 self-center text-center')}>Create Cookie Stand</legend>

          <label for='location' className={layoutGuide('row-start-2 col-start-1 ml-2  ')}>Location:</label> 
          <input name='location' type='text' className={layoutGuide('row-start-2 col-start-2 col-span-2 self-end w-5/6 pr-3 mx-5')}></input>

          <label for='minCust' className={layoutGuide('row-start-3 col-start-1')}>Minimum Customers per Hour</label>
          <input name='minCust' type='text' className={layoutGuide(' row-start-4 col-start-1')}></input>
          

          <label for='maxCust' className={layoutGuide('row-start-3 col-start-2 ')}>Maximum Customers per Hour</label>
          <input name='maxCust' type='text' className={layoutGuide('row-start-4 col-start-2')}></input>
          

          <label for='avgCookie' className={layoutGuide('row-start-3 col-start-3 ')}>Average Cookies per Sale</label>
          <input name='avgCookie' type='text' className={layoutGuide('row-start-4 col-start-3')}></input>
          
          <button type='submit' className={layoutGuide('row-start-3 col-start-4')}>Create</button>
          

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
