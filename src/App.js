import Nav from './components/Nav'
import News from './components/News'
import './App.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {HashRouter} from "react-router-dom";

function App() {

  //4fb20e56e83443acbf31e5746df87fd4 - apikey
  return (
    <>
      <HashRouter>
        <Nav />

        <Switch>
          <Route exact path="/">
            <News key="general" size={9} country={'in'} cat={'general'} />
          </Route>
          <Route exact path="/business">
            <News key="business" size={9} country={'in'} cat={'business'} />
          </Route>
          <Route exact path="/science">
            <News key="science" size={9} country={'in'} cat={'science'} />
          </Route>
          <Route exact path="/entertainment">
            <News key="entertainment" size={9} country={'in'} cat={'entertainment'} />
          </Route>
          <Route exact path="/health">
            <News key="health" size={9} country={'in'} cat={'health'} />
          </Route>
          <Route exact path="/technology">
            <News key="technology" size={9} country={'in'} cat={'technology'} />
          </Route>
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
