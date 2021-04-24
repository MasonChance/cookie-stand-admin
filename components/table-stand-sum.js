import {layoutGuide} from '../utility'



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
                {props.allStands.map(stand => <tr key={stand.location} className={layoutGuide('border-2 border-black text-center')}><td className={layoutGuide('border-2 border-black')}>{stand.location}</td>{stand.hourlySales.map(sold=><td className={layoutGuide('border-2 border-black')}>{sold}</td>)}</tr>)}
                
            </tbody> 
        </table>

    )
};

export default ReportTable;