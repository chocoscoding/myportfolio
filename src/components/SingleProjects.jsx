import React, { useState } from "react";
import {BsArrowUpRightCircle,BsArrowUpRightCircleFill} from 'react-icons/bs';

const SingleProjects = ({info, openmore}) => {
    const [currentC, setCurrentC] = useState(true);
    const {Stack, projectName, image, id} = info;
    return (
        <div className="project" style={{position: 'relative'}} key={id}>
            <div className="namecont">
              <p>{projectName}</p>
              <p className='stack'>{`${Stack.toString().substring(0,30)}...`}</p>
            </div>
              <img src={image} alt="project" />
              <p className="viewLive" onClick={()=>openmore({status:'open', id })} onMouseLeave={()=>{setCurrentC(true)}}  onMouseOver={()=>{setCurrentC(false)}}>
                More Info {currentC ?  (<BsArrowUpRightCircle className='icon'/>) : (<BsArrowUpRightCircleFill className='icon'/>)}
              </p>
          </div>
    )
}

export default SingleProjects
