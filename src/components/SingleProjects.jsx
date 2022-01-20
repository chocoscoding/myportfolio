import React, { useState } from "react";
import {BsArrowUpRightCircle,BsArrowUpRightCircleFill} from 'react-icons/bs';

const SingleProjects = ({info, openmore}) => {
    const [currentC, setCurrentC] = useState(true);
    const {url, name, stack, link, key} = info;
    return (
        <div className="project" style={{position: 'relative'}} key={key}>
            <div className="namecont">
              <p>{name}</p>
              <p className='stack'>{stack}</p>
            </div>
              <img src={url} alt="project" />
              <p className="viewLive" onClick={()=>openmore('open')} onMouseLeave={()=>{setCurrentC(true)}}  onMouseOver={()=>{setCurrentC(false)}}>
                More Info {currentC ?  (<BsArrowUpRightCircle className='icon'/>) : (<BsArrowUpRightCircleFill className='icon'/>)}
              </p>
          </div>
    )
}

export default SingleProjects
