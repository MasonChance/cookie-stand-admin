import {layoutGuide} from '../utility'
import Link from 'next/link'

function Header(props){

    return(

        <header className={layoutGuide("px-5 mx-auto w-full bg-green-300 inline-grid ")}>
            <h1 className={layoutGuide(" w-auto font-semibold text-4x1")}>{props.title}</h1>
            <nav className={layoutGuide('col-start-2 col-span-1 self-end')}>

                <Link href="/overview">
                <a className={layoutGuide('border-1 border-gray-300 rounded-sm bg-green-500')}>overview</a>
                </Link>
            </nav>
        </header>
    )

  };
export default Header;
 