import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllContent from "./components/AllContent";
import Movie from "./components/Movie/index";
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import requests from "./requests";
import tvrequests from "./tvRequests";
import homeRequests from "./homeRequests";
import TV from "./components/TV/index";

function App() {
  const api_key = "be010523b0166c9097a873ec75047a3b";
  return (
    
      <Router>
        <div className="App">
        <Header />
        <br />
        <br />
        <br />
        <div>
        <Switch>
          <Route exact path="/" render={() => (
              <Login/>
            )}
          />
          <Route exact path="/home" 
          render={() => (
            <Home
              api_key={api_key}
              requests={homeRequests}
              slideShowUrl="https://api.themoviedb.org/3/trending/all/day"
            />
          )}
          />
          <Route
            exact
            path="/movies"
            render={() => (
              <Home
                api_key={api_key}
                requests={requests}
                slideShowUrl={`https://api.themoviedb.org/3/movie/popular?api_key=be010523b0166c9097a873ec75047a3b&language=en-US&page=1`}
              />
            )}
          />
          <Route
            exact
            path="/tvShows"
            render={() => (
              <Home
                api_key={api_key}
                requests={tvrequests}
                slideShowUrl={`https://api.themoviedb.org/3/tv/popular?api_key=be010523b0166c9097a873ec75047a3b&language=en-US&page=1`}
              />
            )}
          />
          <Route
            exact
            path="/content"
            render={() => <AllContent API_KEY={api_key} />}
          />
          <Route
            exact
            path="/movie"
            render={() => <Movie api_key={api_key} />}
          />
          <Route exact path="/tv" render={() => <TV api_key={api_key} />} />
        </Switch>
      </div>
      </div>
  </Router >
  );
}

export default App;
