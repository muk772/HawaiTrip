import logo from "./logo.svg";
import "./App.css";
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  Navigate,
} from "react-router-dom";
import Body from "./Body";
import Header from "./Header";
import Activities from "./Activities";

function App() {
  return (
    <div className="">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route path="/activities/:id" element={<Activities />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
