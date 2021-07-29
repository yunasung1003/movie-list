import React, { useState } from 'react';
import Movie from './components/Movie';
import MovieForm from './components/MovieForm';
import Navbar from './components/Navbar';
import Users from './pages/Users';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
        <Switch>
          <Route path="/movies">
            <h1>Movie list</h1>
            <MovieForm addMovie={addMovie} />
            {renderMovies}
          </Route>
          <Route path="/" exact>
            <h1>Home</h1>
          </Route>
          <Route path="/users">
            <Users />
          </Route>
        </Switch>
        </div>
       
      </div>
    </Router>
  );
}

export default App;