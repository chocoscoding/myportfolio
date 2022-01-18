import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import './styles/App.css';
import { Routes, Route, Link } from 'react-router-dom'
import { db } from './firebase-config';
import {BsMouseFill} from 'react-icons/bs'
import { Navbar, Header, About, Stacks } from './components/index'
import { ReactComponent as Asset3 } from './Assests/Asset3.svg';
import { ReactComponent as Asset4 } from './Assests/Asset3.svg';

import { collection, getDocs } from 'firebase/firestore';
{/* <Navbar/>

<Header/>
<SingleProjects/>
<SubFooter/>

<MainFooter/>  */}

function App() {

  const [projects, setProjects] = useState([]);

  // const getProjects = useCallback( async () => {
  //   const userCollection = collection(db, 'projects');
  //   const data = await getDocs(userCollection);
  //   const response = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  //   setProjects(response)
  //   console.log(response);
  // }, [])
  // useEffect(() => {
  //   getProjects();

  // },[getProjects])
  return (
    <div className="App">
      <Asset3 id='asset3' />
      <Navbar />
      <div style={{ marginTop: '4rem' }}></div>
      <Header />
      <div className="scroll">
       <p>  Scroll Down</p>
         <br />
        <BsMouseFill/>
      </div>
      <About />
      <Asset4 id='asset4' />
      <Stacks/>

    </div>
  );
}

export default App;
