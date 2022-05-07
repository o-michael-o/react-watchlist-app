import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { WatchList } from "./WatchList/WatchList";
import { Watched } from "./Watched/Watched";
import { Add } from "./Add/Add";
import { Header } from "./Header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<WatchList />} />
        <Route exact path="/watched" element={<Watched />} />
        <Route exact path="/add" element={<Add />} />
      </Routes>
    </Router>
  );
}

export default App;
