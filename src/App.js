import './App.css';
import * as React from 'react';
import Banner from './component/banner';
import Skills2 from './component/skills2';
import Portfolio from './component/potfolio';
import Footer from './component/footer';
import 'animate.css';
import Navbarr from './component/nav';



function App() {
  return (
    <>
    <Navbarr/>
    <Banner/>
    <Skills2/>
    <Portfolio/>
    <Footer/>

    </>
  );
}

export default App;
