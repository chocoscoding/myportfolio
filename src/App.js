import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import './styles/App.css';
import { Routes, Route, Link } from 'react-router-dom'
import { db } from './firebase-config';
import { BsMouseFill, BsArrowUpRightCircle, BsArrowUpRightCircleFill } from 'react-icons/bs'
import { Navbar, Header, About, Stacks, SingleProject2 } from './components/index'
import { ReactComponent as Asset3 } from './Assests/Asset3.svg';
import { ReactComponent as Asset4 } from './Assests/Asset1.svg';

{/* <Navbar/>

<SingleProjects/>
<SubFooter/>

<MainFooter/>  */}

const staticData = [{
  url: 'https://firebasestorage.googleapis.com/v0/b/cdportfolio-95923.appspot.com/o/we%20(2).jpeg?alt=media&token=c17e2bce-0905-41e8-a0a1-eecae705c926',
  name: 'Tabloid',
  stack: '//NODE, JS, MONGODB, CSS ...',
  link: 'https://tabloid-notes.herokuapp.com/',
  key: 1
}, {
  url: 'https://firebasestorage.googleapis.com/v0/b/cdportfolio-95923.appspot.com/o/we%20(1).jpeg?alt=media&token=4dac2030-d726-41e8-b14a-9155238a0394',
  name: 'Weatherapp',
  stack: '//NODE, JS, MONGODB, CSS ...',
  link: 'https://bestweatherappthisyear.vercel.app/',
  key: 2
}]

function App() {

  const [currentp, setCurrentp] = useState(true);


  return (
    <div className="App">
      <Asset3 id='asset3' />
      <Navbar />
      <div style={{ marginTop: '4rem' }}></div>
      <Header />
      <div className="scroll">
        <p>  Scroll Down</p>
        <br />
        <BsMouseFill />
      </div>
      <About />
      <Asset4 id='asset4' />
      <Stacks />
      <div className="projects">
        <p className="headingM">{'// Projects'}</p>
        <div className="projects-cont">
          {staticData.map((Data)=>(
            <SingleProject2 staticData={Data}/>
            ))}
        </div>

        
            <p className="headingM viewLive vap" onMouseLeave={()=>{setCurrentp(true)}}  onMouseOver={()=>{setCurrentp(false)}}>
            View all projects {currentp ?  (<BsArrowUpRightCircle className='icon'/>) : (<BsArrowUpRightCircleFill className='icon'/>)} 
              </p>
      </div>

    </div>
  );
}

export default App;
