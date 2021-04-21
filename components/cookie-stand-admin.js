import Head from 'next/head'
import Header from '../components/header'
import CreateStandForm from '../components/form-new-stand'


function CookieStandAdmin(props){

    /* return what was previously the index page component

    */

    return (
        <>
            <Head>
                <title>Cookie Stand Admin</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header title='Cookie Stand Admin'/>

            <CreateStandForm />
        </>
    )

}