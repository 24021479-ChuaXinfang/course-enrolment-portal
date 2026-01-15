import {Routes, Route} from "react-router-dom";


import Home from "./Home";
import About from "./About";
import Diplomas from "./Diplomas";
import Diploma from "./Diploma";
import Module from "./Module";
import Register from "./Register";
import Favourites from "./Favourites";
import Confirmation from "./Confirmation";
import Header from "./Header";
import Faq from "./Faq"; 

function App() {
  return (
    <div className="app"> 
      <Header />

      <Routes>
        <Route path="/" element={<Home title="Welcome to the RP School of Infocomm (SOI)"/>}/>
        <Route path="about" element={<About />}/>
        <Route path="diplomas" element={<Diplomas/>}>
          <Route path=":diplomaId" element={<Diploma />}>
            <Route path=":moduleId" element={<Module/>}/>
          </Route>
          <Route index element={<h3 style={{ color: "#e85b14" }}>Select a course from above</h3>}/>
        </Route>
        <Route path="register" element={<Register/>}/>
        <Route path="favourites" element={<Favourites />}/>
        <Route path="confirmed" element={<Confirmation/>}/>
        <Route path="*" element={<h1 className="not-found">Page Not Found</h1>}/>
      </Routes>

      <footer className="container">
        <Faq />  <br></br>
        <hr /> <br></br>
        &copy;2026 | <a href="https://www.rp.edu.sg/schools-courses">Republic Polytechnic</a>
      </footer>
    </div>
  );
}

export default App;
