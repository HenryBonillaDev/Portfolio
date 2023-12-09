import './App.css';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Banner from './components/Banner';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar></NavBar>
      </header>
      <Banner></Banner>
    </div>
  );
}

export default App;
