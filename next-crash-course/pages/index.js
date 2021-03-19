import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from "../components/Header";
export default function Home({articles}) {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {articles.map((article) => (
        <h4>{article.title}</h4>

      ))}

      
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`http://newsapi.org/v2/everything?q=cricket&from=2021-03-02&sortBy=publishedAt&apiKey=16e6ffaa1cea436fb8a9ee615c2a608e`)
  const data = await res.json();
 const articles = data.articles;
  return{
    props:{
    articles
    }
  }
}

