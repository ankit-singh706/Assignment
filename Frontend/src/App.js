import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import Doctor from "./components/Doctor";
import Cards from './components/Cards';
import Medicine from './components/Medicine';
import HyperLink from './components/HyperLink';


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>

        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/doctor' element={<Doctor/>}></Route>
          <Route path='/disease' element={<HyperLink/>}></Route>
          <Route path='/medicine' element={<Medicine/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
