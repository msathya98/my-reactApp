import React from 'react';
import Header from "./components/Header";
import Message from "./components/Message";
import Footer from "./components/Footer";
import Home from "./Views/Home";
import About from "./Views/About";


//import Helloworld from "./components/helloworld";
import "tailwindcss/tailwind.css"

import { BrowserRouter as Router,
Switch,
Route,
Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <Header />
    <Message />
    <Footer />
    <Router >
      <ul>
        <li>
          <Link to="/" className="text-blue-500">Home</Link>
        </li>
        <li>
          <Link to="/about" className="text-blue-500">About</Link>
        </li>
      </ul>
   
   
   <Switch>
     <Route exact path="/">
       <Home />
     </Route>

     <Route path="/about">
     <About />
     </Route>

   </Switch>
   </Router>

    </div>
  );
}

export default App;
