import React from "react";
import FormInput from "./Form";
import { BrowserRouter, Route, Link } from 'react-router-dom'



function Home() {
  return (
  <div>
  <h1>Lambda Eats</h1>
  <img src='https://unsplash.com/photos/MqT0asuoIcU?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink'/>
  </div>
  )
}

const App = () => {
  return (
    <div className='App'>
    <BrowserRouter>
  <div className='links'>
    <Link to='/'>Home</Link>
    <Link to='/Form'>Order Now</Link>
</div>
  <div className='paths'>
    
    <Route exact path='/' component={Home} />
    <Route path='/Form' component={FormInput}/>
</div>
    </BrowserRouter>
</div>
    
      
    
  );
};
export default App;