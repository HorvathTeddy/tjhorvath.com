import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages'


const App = () => {
  return (
    <Router className='router'>
      <Routes>
        <Route path='/' element={<Home/>} exact />
      </Routes>
    </Router>
  );
}

export default App;
