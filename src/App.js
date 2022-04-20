// import './App.css';
import {BrowserRouter, Route, Routes, Link, Navigate} from "react-router-dom"
import dogs from "./dogs"
import DogThumbnail from "./DogThumbnail";
import DogList from "./DogList";
import DogDetails from "./DogDetails";

function App() {

  
  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/dogs" element={<DogList dogs={dogs}/>}/>
            <Route path="/dogs/:name" element={<DogDetails dogs={dogs}/>}/>
            <Route path="*" element={<Navigate to="/dogs"/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

