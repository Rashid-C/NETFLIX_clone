import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import {action,originals} from'./urls'
import Banner from "./Components/Banner/Banner";
import Rowpost from "./Components/RowPost/Rowpost";
function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <Rowpost url={originals} title='Netflix Originals'/>
     <Rowpost url={action} title='Action' isSmall/>
     <Rowpost url={action} title='Action' isSmall/>
    </div>
  );
}

export default App;
