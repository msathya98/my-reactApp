import React, {Component, useState, useEffect } from 'react';


const App= () => {
  const [ articles, setArticle ] = useState([]);
  const [ searchQuery, setsearchQuery]  = useState('Blockchain')
  const [url, setURL] = useState('http://newsapi.org/v2/everything?q=blockchain&from=2021-03-02&sortBy=publishedAt&apiKey=16e6ffaa1cea436fb8a9ee615c2a608e');
  const [loading, setLoading] = useState(false);

// const increment = () => {
//   setCount(count + 1);

// }

const fetchArticle = () => {
  setLoading(true)
  fetch(url)
  .then( result => result.json())
.then(data => (setArticle(data.articles), setLoading(false))).catch(error => console.log(error))

}

useEffect(() => {
  fetchArticle();
}, [ url ]);


const  handleChange = (e) => {
 
  setsearchQuery(e.target.value)

}

const handleSubmit = (e) => {
  e.preventDefault()
  setURL(`http://newsapi.org/v2/everything?q=${searchQuery}&from=2021-03-02&sortBy=publishedAt&apiKey=16e6ffaa1cea436fb8a9ee615c2a608e`)


}

return (
<div>
      <h1>Counter App</h1>
      { loading ? <h2>Loading.....</h2> : " " }
      <form value={searchQuery} onSubmit={handleSubmit} >
        <input type="text" value={searchQuery} onChange={handleChange} ></input>
        <button>Search</button>
      </form>
     {articles.map((articles, i) => (
    <p key={i} >{articles.title}</p>
     ))}
</div>
);
}
export default App
