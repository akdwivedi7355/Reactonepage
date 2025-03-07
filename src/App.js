// /src/App.js
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Cards from './components/Cards/Cards';

function App() {
  return (
   
    <div className="App">
       <div>
      <Header />
      <div className='areabet'>
        <Hero />
      <Cards />
      </div>
      
    </div>
    </div>
  );
}

export default App;
