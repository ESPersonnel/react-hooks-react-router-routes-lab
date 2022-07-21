import React from "react";
import { Route, Routes, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return <div>
    <NavBar />
    <Switch>
      <Route path="/movies"><Movies /></Route>
      <Route path="/directors"><Directors /></Route>
      <Route path="/actors"><Actors /></Route>
      <Route path="/"><Home /></Route>
    </Switch>
  </div>;
}

export default App;

// New routing as of react-router-dom@6.3.0
{/* <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/directors" element={<Directors />} />
      <Route path="/actors" element={<Actors />} />
      {/* <Route path="*" element={<ErrorPage />} />
    </Routes> */}