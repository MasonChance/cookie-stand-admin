import Head from 'next/head'


function LoginForm(props){
    /*
    <LoginForm> should recieve a callback fn to pass in to
    <form onSubmit={fn:callback}>
    fn:callback should accept 2 args: (username, password)

    create state tied to user. 
    state is set/updated based on form input. 
    will need async to await response from token auth. 

    
    */



    return (
        <>
            <Head>
                <title>Cookie Stand Admin</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header title='Login to add and view Cookie Stands' />
            Login page coming soon 
        </>
    )



}

export default LoginForm;