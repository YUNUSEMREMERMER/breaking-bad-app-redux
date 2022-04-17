
import './App.css';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import Detail from './pages/detail/Detail';
import Quotes from './pages/quotes';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
          height: "35px",
          marginBottom:"10px",
          display: 'flex',
          alignItems:'center',
          justifyContent:'center'
        }}
      >
        <ul>
          <li ><Link to="/">Characters</Link></li>
          <li><Link to="/quotes">Quotes</Link></li>
        </ul>
        
        
      </nav>
      
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/quotes" exact element={<Quotes />} />
        <Route path="/char/:char_id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
