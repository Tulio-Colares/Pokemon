import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import PokeApp from './PokeList/PokeApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Pokemon from './components/Pokemon';
import Link1 from './components/Header/Link1';
import Link2 from './components/Header/Link2';
import Sexy from './components/Header/Sexy';


 const App = () => {
  return (
    <Router>
      <div className="general-container">
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={PokeApp} />
            <Route path="/pokemon/:pokemonIndex" component={Pokemon} />
            <Route path="/link1" component={Link1} /> 
            <Route path="/link2" component={Link2} />      
            <Route path="/sexy" component={Sexy} />
          </Switch>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App;