import "./App.css";
import MainPage from "./Main";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  // <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>;
  <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>;
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
