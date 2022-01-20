import React, { useState } from 'react';
import {Header, About, Stacks, SingleProject2, MainFooter } from '../components/index';
import { BsMouseFill, BsArrowUpRightCircle, BsArrowUpRightCircleFill } from 'react-icons/bs';



const staticData = [{
    url: 'https://firebasestorage.googleapis.com/v0/b/cdportfolio-95923.appspot.com/o/we%20(2).jpeg?alt=media&token=c17e2bce-0905-41e8-a0a1-eecae705c926',
    name: 'Tabloid',
    stack: '//NODE, JS, MONGODB...',
    link: 'https://tabloid-notes.herokuapp.com/',
    key: 1
  }, {
    url: 'https://firebasestorage.googleapis.com/v0/b/cdportfolio-95923.appspot.com/o/we%20(1).jpeg?alt=media&token=4dac2030-d726-41e8-b14a-9155238a0394',
    name: 'Weatherapp',
    stack: '//REACT, CSS ...',
    link: 'https://bestweatherappthisyear.vercel.app/',
    key: 2
  }]
  

const Homepage = () => {
  const [currentp, setCurrentp] = useState(true);
    return (
        <>
                  <Header />
      <div className="scroll">
        <p>  Scroll Down</p>
        <br />
        <BsMouseFill />
      </div>
      <About />
      <Stacks />
      <div className="projects">
        <p className="headingM">{'// Projects'}</p>
        <div className="projects-cont">
          {staticData.map((Data, index) => (
            <SingleProject2 key={index} staticData={Data} />
          ))}
        </div>


        <p className="headingM viewLive vap" onMouseLeave={() => { setCurrentp(true) }} onMouseOver={() => { setCurrentp(false) }}> <a href='/allprojects'>
          View all projects {currentp ? (<BsArrowUpRightCircle className='icon' />) : (<BsArrowUpRightCircleFill className='icon' />)}</a>
        </p>
        <MainFooter />
      </div>
        </>
    )
}

export default Homepage
