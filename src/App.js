import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/home/Home";
import Page from "./component/page/Page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/iMoviearea/" element={<Home />} />
        <Route path="/iMoviearea/page" element={<Page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
