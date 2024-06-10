import './App.css';
import * as React from 'react';
import NavBar from './component/navbar';
import Banner from './component/banner';
import Skills2 from './component/skills2';
import Portfolio from './component/potfolio';
import Footer from './component/footer';
import 'animate.css';
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  return (
    <>

    <NavBar />
    <Banner/>
    <Skills2/>
    <Portfolio/>
    <Footer/>

    </>
  );
}

export default App;
