import Home from "./Components/Home/Home";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import Header from "./Components/Header";
import About from "./Components/About";
import Error from "./Components/Error";
import StudentsList from "./Components/Home/StudentsList";
import StudentDetails from "./Components/Home/StudentDetails";

function App() {
    return (
        <BrowserRouter>
            <Header/>
          <Routes>
            <Route path={""} element={<Home/>}></Route>
            <Route path={"/home"} element={<Home/>}></Route>
            <Route path={"/about"} element={<About/>}></Route>
            <Route path={"/student/:id"} element={<StudentDetails/>}></Route>

            <Route path={"*"} element={<Error/>}></Route>
          </Routes>
        </BrowserRouter>
    );
}

export default App;
