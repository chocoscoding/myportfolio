import React, { useState } from 'react';
import {BsArrowUpRightCircle,BsArrowUpRightCircleFill} from 'react-icons/bs'


const SingleProject2 = ({staticData}) => {
  const [currentC, setCurrentC] = useState(true);
  const {url, name, stack, link, key} = staticData;

  const leavePage = (link)=>{
    window.location.href = link;

  }

    return (
        <div className="project" key={key}>
            <div className="namecont">
              <p>{name}</p>
              <p className='stack'>{stack}</p>
            </div>
              <img src={url} alt="project" />
              <p className="viewLive" onClick={()=>leavePage(link)} onMouseLeave={()=>{setCurrentC(true)}}  onMouseOver={()=>{setCurrentC(false)}}>
                View Live {currentC ?  (<BsArrowUpRightCircle className='icon'/>) : (<BsArrowUpRightCircleFill className='icon'/>)}
              </p>
          </div>
    )
}

export default SingleProject2
