import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.scss';
import Landing from "./pages/Landing"
import 'antd/dist/antd.css';

const App = () => (
  <Router>
        <main>
            <Route path="/" exact component={Landing} />
            {/* <Route path="/about/" component={About} />
            <Route path="/users/" component={Users} /> */}
        </main>
  </Router>
)

export default App;
