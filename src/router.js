import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./components/pages/Landing"
const AppRouter = () => ( 
    <Router>
        <div>
            <Route path="/" exact component={Landing} />
            {/* <Route path="/about/" component={About} />
            <Route path="/users/" component={Users} /> */}
        </div>
    </Router>
)
  
export default AppRouter;