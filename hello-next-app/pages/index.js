import Link from "next/link";
import Layout from "../components/layout";
import Navigation from "../components/nav"


const Index = () => <Layout
mainContent= "my home page with nextjs"
footer ={'copyright by sathya @2021'} >
    
    
    <head>
        <title>Home page</title>
        <meta name="description" content="my first NextJs web-page"></meta>
        <meta name="keywords" content="next react html"></meta>
        <meta name="author" content="Sathya M"></meta>
        <link rel="stylesheet" href="https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css" integrity="sha384-wXznGJNEXNG1NFsbm0ugrLFMQPWswR3lds2VeinahP8N0zJw9VWSopbjv2x7WCvX" crossorigin="anonymous"></link>

    </head>
    
    <h1> this is Index page</h1>
    <Link href="/about">
    <a >About page</a>
    </Link>
    </Layout>

export default Index;
