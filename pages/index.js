import Head from 'next/head'
import { stringify } from 'postcss'
import { layoutGuide } from '../utility'
import { hours } from '../assets/data'
import { useState } from 'react'


export default function CookieStandAdmin() {

  const [reports, setReports] = useState([])
  
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

        <p className="">
          {String.fromCharCode(123) + "'location' " + String.fromCharCode(58) + " 'Barcelona', 'minCustomers' " + String.fromCharCode(58) + ' 2, ' + "'maxCustomers' : 4, " + "'avgCookies' " + String.fromCharCode(58) + ' 2.5 ' + String.fromCharCode(125)}
          
        </p>


      </main>

      <footer className="">
       {/* copywrite 2021 */}
      </footer>
    </div>
  )
};


function Header(props){

  return(

      <header className={layoutGuide("px-5 mx-auto bg-green-300")}>
          <h1 className={layoutGuide("font-semibold text-4x1 ")}>{props.title}</h1>
      </header>
  )

};
  
function CreateStandForm(props){
  return(
    <form onSubmit={ onCreate } className={layoutGuide('w-7/8 h-7/8 grid grid-rows-4 grid-cols-4 items-baseline px-3 bg-green-300 gap-y-1 gap-x-2')}>
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


/* TODO: 
  # write submit handler
    # submit handler should return an object with a location property and an hourly_sales property.
    # {'location' : str, 'hourly_sales' : [sales_per_hour for hour in business_day]}
  # write a constructor for stand objects to be passed to the handler as well as to be used for
  rendering dynamic table rows. 
  
  # ReportTable should have a newStand prop passed to it on-invoke 
*/


function ReportTable(props){

  
  if (props.allStands.length == 0){
    return <h2>No Cookie Stands Available</h2>
  }
  
  const allSales = function(sold){
    return sold.map(avg => <td>{avg}</td>)
  }

  return (
    <table className={layoutGuide('')}>
      <thead>
        <tr>
          { props.hourly.map(hr=><th>{hr}</th>) }
        </tr>
      </thead>   
      <tr>
          {
      props.allStands.map(stand => {
        <td>{stand.location }</td>
        allSales(stand.hourlySales)
      })
      }
      </tr>
        
    </table>

  )
};


function onCreate(event){
  event.prevent.default()

  const cookieStand = {
    'location' : event.target.location.value,
    'hourlySales' : [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
  }


  setReports([...reports, cookieStand])
  console.log('reports', reports)
}


