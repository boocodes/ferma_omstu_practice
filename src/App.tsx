import styled from "styled-components";
import {WelcomePage} from "./pages";
import {Route, Routes} from "react-router-dom";
import {PolicyPage} from "./pages";




interface Props{

}

function App(props:Props) {
  return(
    <Routes>
        <Route
            path={"/"}
            element={<WelcomePage/>}
        />
        <Route
            path={"/policy"}
            element={<PolicyPage/>}
        />
    </Routes>
  )
            
}

 



export default App;

