//import logo from './logo.svg';
//import './App.css';
//import Greet from "./components/greet";
//import welcome from "./components/welcome";
//import Welcome from "./components/welcome";
//import Message from "./components/message"
import React , { Component } from 'react';
//import Axios from "axios";
import axios from 'axios';

import Loading from "./components/loading"
 
class App extends Component {
  constructor(props){
    super(props);
  this.state = {
   articles: [],
   loading: false
  }
  }
 getUsers() {
  this.setState({
    loading: true

  })
  axios("http://newsapi.org/v2/everything?q=tesla&from=2021-03-02&sortBy=publishedAt&apiKey=16e6ffaa1cea436fb8a9ee615c2a608e").then(response => this.setState({
      articles: response.data.articles,
      loading: false
    }) )
 }
   componentWillMount() {
    this.getUsers();
  }
  
  render() {
    return (
      <div className="App"> 
        {!this.state.loading ? (this.state.articles.map(article => <div>{article.publishedAt}</div>)) : ( <Loading />) }
       </div>
    )
  }
    
  }


  

export default App;
