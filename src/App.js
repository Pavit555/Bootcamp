import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Search } from './search';

function App() {
  return (
    <div className="App">
      <header>
        Books with Hooks
      </header>
      <Search/>
    </div>
  );
}

export default App;