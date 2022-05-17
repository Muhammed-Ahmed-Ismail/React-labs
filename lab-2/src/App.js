import Home from "./Components/Home/Home";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import Header from "./Components/Header";
import About from "./Components/About";
import Error from "./Components/Error";

function App() {
    return (
        <BrowserRouter>
            <Header/>
          <Routes>
            <Route path={""} element={<Home/>}></Route>
            <Route path={"/home"} element={<Home/>}></Route>
            <Route path={"/about"} element={<About/>}></Route>
            <Route path={"/student/:id"} element={<About/>}></Route>

            <Route path={"*"} element={<Error/>}></Route>
          </Routes>
        </BrowserRouter>
    );
}

export default App;
