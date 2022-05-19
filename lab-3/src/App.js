import logo from './logo.svg';
import './App.css';
import MusicList from "./components/MusicList";

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import MusicDetails from "./components/MusicDetails";
import Error from "./components/Error";

function App() {
  return (
      <BrowserRouter>
    <Routes>
    <Route path={""} element={<Home/>}></Route>
    <Route path={"/artists"} element={<MusicList/>}></Route>
    <Route path={"/artists/:id"} element={<MusicDetails/>}></Route>
    <Route path={"*"} element={<Error/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
