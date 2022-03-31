
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Friends from './components/Friends/Friends';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/friends" element={<Friends></Friends>}></Route>
    </Routes>
    </div>
  );
}

export default App;
