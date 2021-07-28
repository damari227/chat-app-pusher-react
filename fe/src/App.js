import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Import Component
import Gabung from "./Components/Gabung/Gabung";
import Chat from "./Components/Chat/Chat";

function App() {

  return (
    <Router>
      <Route path='/' exact component={Gabung} />
      <Route path="/chat" component={Chat} />
    </Router>
  )
}

export default App;
