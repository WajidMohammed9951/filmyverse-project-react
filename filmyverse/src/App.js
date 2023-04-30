import Header from "./components/Header";
import Card from "./components/Card";
import AddMovie from "./components/AddMovie";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path="/" element={<Card />}/>
      <Route path="/addmovie" element={<AddMovie/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
