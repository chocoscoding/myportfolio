import React, { useState } from "react";
import { SingleProjects } from "../components";
import "../styles/Allprojects.css";
// import { db } from "../firebase-config";

const staticData = [
  {
    url: "https://firebasestorage.googleapis.com/v0/b/cdportfolio-95923.appspot.com/o/we%20(2).jpeg?alt=media&token=c17e2bce-0905-41e8-a0a1-eecae705c926",
    name: "Tabloid",
    stack: "//NODE, JS, CSS ...",
    link: "https://tabloid-notes.herokuapp.com/",
    key: 1,
    id: "e34",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/cdportfolio-95923.appspot.com/o/we%20(2).jpeg?alt=media&token=c17e2bce-0905-41e8-a0a1-eecae705c926",
    name: "Tabloid",
    stack: "//NODE, JS, CSS ...",
    link: "https://tabloid-notes.herokuapp.com/",
    key: 1,
    id: "e34",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/cdportfolio-95923.appspot.com/o/we%20(2).jpeg?alt=media&token=c17e2bce-0905-41e8-a0a1-eecae705c926",
    name: "Tabloid",
    stack: "//NODE, JS, CSS ...",
    link: "https://tabloid-notes.herokuapp.com/",
    key: 1,
    id: "e34",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/cdportfolio-95923.appspot.com/o/we%20(2).jpeg?alt=media&token=c17e2bce-0905-41e8-a0a1-eecae705c926",
    name: "Tabloid",
    stack: "//NODE, JS, CSS ...",
    link: "https://tabloid-notes.herokuapp.com/",
    key: 1,
    id: "e34",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/cdportfolio-95923.appspot.com/o/we%20(2).jpeg?alt=media&token=c17e2bce-0905-41e8-a0a1-eecae705c926",
    name: "Tabloid",
    stack: "//NODE, JS, CSS ...",
    link: "https://tabloid-notes.herokuapp.com/",
    key: 1,
    id: "e34",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/cdportfolio-95923.appspot.com/o/we%20(1).jpeg?alt=media&token=4dac2030-d726-41e8-b14a-9155238a0394",
    name: "Weatherapp",
    stack: "//NODE, JS, CSS ...",
    link: "https://bestweatherappthisyear.vercel.app/",
    key: 2,
    id: "e34",
  },
];
const AllProjects = () => {
  const [moreinfo, setMoreinfo] = useState(false);

  const openmore = (state) => {
    if (state === "open") {
      setMoreinfo(true);
    } else {
      setMoreinfo(false);
    }
  };

  return (
      <>
            <div style={{ marginTop: '4rem' }}></div>
    <div className="allprojects">
      {staticData.map((Data, index) => (
        <SingleProjects info={Data} openmore={openmore} key={index} />
        ))}
    </div>
    
      { moreinfo && (
      <div
        onClick={() => {
            openmore("close");
        }}
        className={`${moreinfo? 'moreinfo openmoreinfo': 'moreinfo'}`}
        >
           <div className="infocont">

           </div>
      </div>)}
      
        </>
  );
};

export default AllProjects;
