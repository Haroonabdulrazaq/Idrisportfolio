import Home from './components/home/Index';
import About from './components/about/About';
import Contact from './components/contact/Contact';
// import Navigation from './components/navigation/Navigation';
import { Route } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <div className="App">
      {/* <Navigation /> */}
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <About/>
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
    </div>
  );
}

export default App;
