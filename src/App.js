import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Home from "./Pages/Home/Home";
import PortfolioList from "./Pages/Portfolio/Portfolio";
import PortfolioProject from "./Pages/Portfolio/PortfolioProject";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  /*
  image of me 
  link to linkedin github
  nav for 
  -bio landing
  -projects (github will have rest of files)
    -bowtowow
    -easyrx
    -react-recipes
    -redux-todos
  -resume
  -contact form
  footer for year updated
  */
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/portfolio" element={<PortfolioList />} />
        <Route exact path="/project" element={<PortfolioProject />} />
        <Route path="/project/:id" element={<PortfolioProject />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
