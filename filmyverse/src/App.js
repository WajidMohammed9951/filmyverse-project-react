import Header from "./components/Header";
import Card from "./components/Card";
import AddMovie from "./components/AddMovie";
import { Route, Routes } from "react-router-dom";
import Detail from "./components/Detail";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path="/" element={<Card />}/>
      <Route path="/addmovie" element={<AddMovie/>}/>
      <Route path="/detail/:id" element={<Detail/>} />
      </Routes>
    </div>
  );
}

export default App;
