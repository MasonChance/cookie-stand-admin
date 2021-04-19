import Head from 'next/head'
import { stringify } from 'postcss'
import { layoutGuide } from '../utility'
import { hours } from '../assets/data'
import { useState } from 'react'
import { Link } from 'next/link'


export default function CookieStandAdmin() {

  const [reports, setReports] = useState([])

  function onCreateHandler(event){
    event.preventDefault();
  
    const cookieStand = {
      location : event.target.location.value,
      hourlySales : [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
    }
  
  
    setReports([...reports, cookieStand])
    
  }
  
  return (
    <div className={layoutGuide('')}>
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <Header title='Cookie Stand Admin' />


      <main className={layoutGuide("mx-20 mt-2 ",false)}>
        <CreateStandForm />

        <ReportTable allStands={reports} hourly={hours} />

       
      </main>

      <Footer count={reports} />
    </div>
  )



  function Header(props){

    return(

        <header className={layoutGuide("px-5 mx-auto")}>
            <h1 className={layoutGuide("font-semibold text-4x1")}>{props.title}</h1>
            {/* <nav>
              <Link href="/overview">
                <a>overview</a>
              </Link>
            </nav> */}
        </header>
    )

  };
    
  function CreateStandForm(props){
    return(
      <form onSubmit={onCreateHandler} className={layoutGuide('w-7/8 h-7/8 mb-5 grid grid-rows-4 grid-cols-4 items-baseline px-3 bg-green-300 gap-y-1 gap-x-2')}>
        <legend className={layoutGuide('row-span-1 col-span-4 self-center text-center')}>Create Cookie Stand</legend>

        <label htmlFor='location' className={layoutGuide('row-start-2 col-start-1 ml-2')}>Location:</label> 
        <input name='location' type='text' className={layoutGuide('row-start-2 col-start-2 col-span-3 w-7/8 pr-3 mx-5 bg-white')}></input>

        <label htmlFor='minCust' className={layoutGuide('row-start-3 col-start-1')}>Minimum Customers per Hour</label>
        <input name='minCust' type='text' className={layoutGuide(' row-start-4 col-start-1 bg-white')}></input>
        
        <label htmlFor='maxCust' className={layoutGuide('row-start-3 row-end-4 col-start-2')}>Maximum Customers per Hour</label>
        <input name='maxCust' type='text' className={layoutGuide('row-start-4 col-start-2 bg-white')}></input>
        
        <label htmlFor='avgCookie' className={layoutGuide('row-start-3 row-end-4 col-start-3')}>Average Cookies per  <br/>Sale </label>
        <input name='avgCookie' type='text' className={layoutGuide('row-start-4 col-start-3 bg-white')}></input>
        
        <button className={layoutGuide('row-start-3 row-end-4 col-start-4 col-end-5 self-end h-5/6 bg-green-600 ml-2')}>Create</button>
            

      </form>
    )
  };

  function Footer(props){
    if (props.count.length === 1){
      return(
      <p>{props.count.length} Location World Wide</p>
      )
    } else {
      return (
        <p>{props.count.length} Locations World Wide</p>
      )
    }
    
  }

  function ReportTable(props){

    
    if (props.allStands.length == 0){
      return <h2>No Cookie Stands Available</h2>
    }
    
    return (
      <table className={layoutGuide('w-7/8 mt-10 bg-green-200 table-auto')} >
        <thead className={layoutGuide('')}>
          <tr className={layoutGuide('')}>
            <th className={layoutGuide('mr-3 pr-10 border-b-2 border-black')}>Location</th>
            { props.hourly.map(hr=><th className={layoutGuide('mx-1 pr-1 border-b-2 border-black')}>{hr}</th>) }
          </tr>
        </thead>
        <tbody>  
          {reports.map(stand => <tr key={stand.location} className={layoutGuide('border-2 border-black text-center')}><td className={layoutGuide('border-2 border-black')}>{stand.location}</td>{stand.hourlySales.map(sold=><td className={layoutGuide('border-2 border-black')}>{sold}</td>)}</tr>)}
          
        </tbody> 
      </table>

    )
  };
}




