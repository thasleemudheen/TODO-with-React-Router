import React from 'react';
import Header from './component/Header/Header'
import About from './component/About/About'
import TodoApp from './component/TodoApp/TodoApp';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
function App() {
  return (
    
    <Router>
       <Header />
      <Routes>
      <Route path='/' exact Component={TodoApp} />
      <Route path='/about' Component={About} />
      </Routes>

    </Router>
    
  );
}

export default App;
