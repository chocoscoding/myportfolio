import React, { useEffect, useState } from "react";
import { SingleProjects } from "../components";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import "../styles/Allprojects.css";
import { AiOutlineClose } from "react-icons/ai";

import { db } from "../firebase-config";
import { collection, getDocs } from 'firebase/firestore';

const AllProjects = () => {
  const [moreinfo, setMoreinfo] = useState(false);
  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState(null);
  const userCollection = collection(db, 'projects');

  useEffect(() => {
    const getProjects = async () => {
      try {
        const data = await getDocs(userCollection);
        const response = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setProjects(response)

      } catch (error) {
        console.log('ok');
      }
    }
    getProjects();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  const openmore = (state) => {
    const {status, id} = state
    if (status === "open") {
      let datafinal = projects.filter((data) => data.id === id)
      setCurrentProject(datafinal)
      setMoreinfo(true);
    } else {
      setMoreinfo(false);
    }
  };


  if(projects.length <1){
    return (
      <div style={{textAlign: 'center', fontSize: '2em'}}>
        L0ADING DATA...
      </div>
    );
  }

  return (
    
    <section className="allprojectfraction">
      <div className="headingM" style={{color: "#cdd5f295", textAlign: 'center'}}>All Projects</div>
      <div className="allprojects">
        {projects.map((Data, index) => (
          <SingleProjects info={Data} openmore={openmore} key={index} />
        ))}
      </div>

      {moreinfo && (
        <div className="moreinfo">
          <div className="infocont">
            <AiOutlineClose
              className="icon"
              onClick={() => {
                openmore("close");
              }}
            />
            <div className="infocont-inner">
              <img
                src={currentProject[0].image}
                alt={currentProject[0].projectName}
                className="projectimage"
              />
              <div className="side">
                <h3>About</h3>
                <p>
                  { currentProject[0].about}
                </p>
                <h3>Stacks</h3>
                <p>{currentProject[0].Stack.toString()}</p>
                <br />
                <div className="linkto">
                  <a href={currentProject[0].link}>
                    <button className="link">
                      View Site <BsArrowUpRightCircle className="icons" />{" "}
                    </button>
                  </a>
                  <a href={currentProject[0].github}>
                    <button className="link">
                      View Code <FaGithub className="icons" />{" "}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AllProjects;
