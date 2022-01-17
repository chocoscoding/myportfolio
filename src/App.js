import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import './styles/App.css';
import {Routes, Route, Link} from 'react-router-dom'
import { db } from './firebase-config';
import {Navbar, Header} from './components/index'
import { ReactComponent as Asset3} from './Assests/Asset3.svg';

import { collection, getDocs } from 'firebase/firestore';
{/* <Navbar/>

<Header/>
<About/>
<Stacks/>
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
      <Asset3 id='asset3'/>
      <Navbar/>
      <div style={{marginTop: '4rem'}}></div>
      <Header/>
    </div>
  );
}

export default App;
