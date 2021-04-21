import {layoutGuide} from '../utility'
import { useState } from 'react'
import ReportTable from './table-stand-sum'
import { hours } from '../assets/data'
import Footer from './footer'


function CreateStandForm(event){
    const [reports, setReports] = useState([])

    function onCreateHandler(event){
      event.preventDefault();
    
      const cookieStand = {
        location : event.target.location.value,
        hourlySales : [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
      }
      
      setReports([...reports, cookieStand])
      
    }

    return(
        <>
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
                
                <button type='submit' className={layoutGuide('row-start-3 row-end-4 col-start-4 col-end-5 self-end h-5/6 bg-green-600 ml-2')}>Create</button>
                

            </form>

            <ReportTable allStands={reports} hourly={hours} />

            <Footer count={reports} />
        </>
    )
};

export default CreateStandForm;