import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import { NavigationBar } from './NavigationBar';
import { Home } from './Home';
import { Create } from './Create';
import { BlogDetails } from './BlogDetails';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
// import { useState } from 'react';

function App() {

   return (
    <div className="App">
      <Router>
        <NavigationBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/create" element={<Create/>}/>
          <Route path="/blogs/:id" element={<BlogDetails/>} />
                
        </Routes>
      </Router>
       
    </div>
  );
}

export default App;


 