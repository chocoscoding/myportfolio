import React from "react";
import '../styles/Stacks.css'

const stacklist = ['HTML 5', 'CSS', 'SCSS', 'TAILWIND', 'JAVASCRIPT', 'TYPESCRIPT', 'REACT', 'REDUX', 'NODE.JS', 'MONGO DB', 'FIREBASE'];

function getfinalNum(index){
    const number = index + 1;
    let x = number.toString().length;
    if(x<2){
        return `0${number}`
    }
    return number
}
const Stacks = () => {
    return (
        <div className="stacks">
            <p className="headingM">{'// My stacks'}</p>
            <div className="stacks-cont">
                {stacklist.map((singleStack, index)=> (<div className="stack" key={index}>
                <p className="number">{`${getfinalNum(index)}/`}</p>
                <p className="stackname">{singleStack}</p>
            </div>))}
            </div>
        </div>
    )
}

export default Stacks
