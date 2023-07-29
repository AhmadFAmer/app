import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowUpLong} from '@fortawesome/free-solid-svg-icons';

const GoUp =()=>{
    return(
        <button 
        onClick={()=>window.scrollTo(0,0)} className="btn-hover" id="goUp" >
        <FontAwesomeIcon icon={faArrowUpLong}  />
        </button>
    )
}
export default GoUp;