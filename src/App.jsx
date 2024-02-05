// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import BasicCalculatorPage from './pages/BasicCalculator';
import ScientificCalculatorPage from './pages/ScientificCalculator';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/basic">Basic Calculator</Link>
            </li>
            <li>
              <Link to="/scientific">Scientific Calculator</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Switch>
          <Route path="/basic">
            <BasicCalculatorPage />
          </Route>
          <Route path="/scientific">
            <ScientificCalculatorPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
