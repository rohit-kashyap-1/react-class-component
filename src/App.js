
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Main from './components/Main';

import Counter from './components/Counter';



//use effect =  re rendering

//onResize={handleZoom2}

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Main />
     
      <Counter />
      
    </div>
  );
}

export default App;
