import React from 'react';
//Router
import {Switch, Route} from 'react-router-dom'
//context
import { ProviderYoutube } from './context/useContext';
//pages
import Home from "./pages/Home"
//components
import Nav from "./components/Nav"

//styles
import GlobalStyles from './styles/GlobalStyles';


function App() {

  return (
    <ProviderYoutube>
      <GlobalStyles />
      <div className="App">
        <Nav/>
    <Switch>
      <Route path="/">
        <Home/>
      </Route>
    </Switch>
    
        
      </div>
    </ProviderYoutube>
  );
}

export default App;
