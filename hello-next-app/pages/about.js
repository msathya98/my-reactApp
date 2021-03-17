import Link from "next/link";
import Navigation from "../components/nav"
import Layout from "../components/layout"

const About = () => <Layout>
    

    <h1> this is About page</h1>
    <Link href= "/">
<a style={{ color: "red", fontsize: 10  }}>Home page</a>
</Link>
<p>lorem sjfdhd fhd dsfywe f7tyfhjds 7ewgfdstfsfsd7f ffu weucui whgewf7yuwg tfwe</p>
<style jsx>{ `
p {
    color: green;
    font-size: 20px;
}`}</style>
</Layout>


export default About;
