import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { WatchList } from "./WatchList/WatchList";
import { Watched } from "./Watched/Watched";
import { Add } from "./Add/Add";
import { Header } from "./Header/Header";

import { GlobalProvider } from "../context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<WatchList />} />
          <Route exact path="/watched" element={<Watched />} />
          <Route exact path="/add" element={<Add />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
