import './App.css';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar';
import Main from './components/Main';
import Menu from './components/Menu';

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar/>

        {/* <Routes>
          <Route component={Main} path="/" />
          <Route component={Menu} path="/menu" />
        </Routes> */}
        <Routes>
          <Route path="/menu" element={<Menu />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
