
import {layoutGuide} from '../utility'

function Footer(props){
    if (props.count.length === 1){
      return(
      <footer className={layoutGuide('bg-green-300')}>{props.count.length} Location World Wide</footer>
      )
    } else {
      return (
        <footer className={layoutGuide('bg-green-300')}>{props.count.length} Locations World Wide</footer>
      )
    }
    
  }

export default Footer; 