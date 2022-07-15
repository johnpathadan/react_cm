import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Home from './Home';

function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  const links = 'http://google.com';
  return (
    <div className='App'>
     <NavBar />
     <div className="content">
       <Home />
     </div>
    </div>
  );
}

export default App;
