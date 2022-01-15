import { useState, useEffect } from 'react';
import './styles/App.css';
import {Routes, Route, Link} from 'react-router-dom'
import { db } from './firebase-config';

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
  const userCollection = collection(db, 'projects');

  useEffect(() => {
    const getProjects = async () => {
      const data = await getDocs(userCollection);
      const response = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setProjects(response)
      console.log(response);
    }
    getProjects();

  }, [])
  return (
    <div className="App">
      fklkflsdfl
    </div>
  );
}

export default App;
