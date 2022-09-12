import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/home/Home";
import List from "./component/list/List";
import Login from "./component/login/Login";
import New from "./component/new/New";
import Single from "./component/single/Single";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="login" element={<Login />} />x
          <Route exact path="list" element={<List />} />

          <Route exact path="new" element={< New/>} />
          <Route exact path="single" element={< Single/>} />


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
