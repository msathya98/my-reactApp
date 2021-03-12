import React from "react";
//import Articles from "../../../first-reactapp/src/Views/Articles";
//import NewsDetails from "./NewsDetails";
import "../articles.css";

function Articles({ data }) {
  return (
    <div onClick="location.href='./ArticlesDetails'" className="news">
      <a className="news-title" href={data.url} target="blank">{data.title}</a>
      <p className="news-desc">{data.description}</p>
      <img className="news-img" src={data.urlToImage} alt="news-image"></img>


      <br></br>
      <span className="news-author">Author: {data.author}</span> <br />
      <span className="news-published">Published At: {data.publishedAt}</span>
      <span className="news-source">Source: {data.source.name}</span>
      <br></br>
     
    </div>
  );
}

export default Articles;
