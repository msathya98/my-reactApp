import React from 'react';
import Helloworld from "./components/helloworld";
import Message from "./components/message";
import Footer from "./components/footer";
import Navigation from "./components/navigation";
//import Helloworld from "./components/helloworld";
import "tailwindcss/tailwind.css"

function App() {
  return (
    <div className="App">
<Helloworld />
    <Message />
    <Navigation />
    <Footer />
   
    

    </div>
  );
}

export default App;
