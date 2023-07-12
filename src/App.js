import Navbar from './components';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import "./App.css";
import { Bars } from './components/NavbarElements';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Search } from './search';

function App() {
  return (
    <div className="App">
      <Router>
         <Navbar />
            <Bars />
            </Router>
      <Search/>
    </div>
  );
}

export default App;
