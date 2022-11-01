
import './App.css';
import Home from './components/Home'
import Add from './components/Add'
import Edit from './components/Edit'
import Navbar from './components/Navbar'



import {BrowserRouter as Router ,Route,Routes}  from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/create" element={<Add/>}/>
          <Route path="/edit" element={<Edit/>}/>
        </Routes>
      </Router>
      
    </div>
   
  );
}

export default App;
