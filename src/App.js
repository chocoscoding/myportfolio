import React from 'react';
import './styles/App.css';
import { Routes, Route, Link } from 'react-router-dom'
import { Navbar, MainFooter } from './components/index'
import { ReactComponent as Asset3 } from './Assests/Asset3.svg';
import { ReactComponent as Asset4 } from './Assests/Asset1.svg';
import Homepage from './routes/Homepage';
import AllProjects from './routes/AllProjects';
import { useLocation } from 'react-router';



function App() {
  let locationpath = useLocation();

  const scrollto = (location)=>{

    if(location === 'contactme'){
    document.querySelector(".ftrmain").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
  else if (location === 'about'){
    if(locationpath.pathname === '/allprojects'){
      window.location.href = '/'
    }
    else if (locationpath.pathname === '/'){
      document.querySelector(".about-body").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
    else{
      window.location.href = '/'
    }
    }
  }

  return (
    <div className="App">
      <Asset3 id='asset3' />
      <Asset4 id='asset4' />
      <Navbar scrollto={scrollto}/>
      <div style={{ marginTop: '4rem' }}></div>

      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/allprojects" element={<AllProjects/> }/>
        <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
      </Routes>
      <MainFooter />





    </div>
  );
}

export default App;
