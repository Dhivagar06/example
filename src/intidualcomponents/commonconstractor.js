import React from "react";
import Intidualdate from "../inticer/been";
import { Qwe } from "../inticer/beendate";


function Commonstructor(props){
    return(
        <div>
            <h1>{props.heading}</h1>
            <img src={props.url} alt="image" onClick={(id)=>(
              Intidualdate.id=== Qwe.id? Qwe.id:<h1>Not bound</h1>
            )}></img>
        </div>
    )
}


export default Commonstructor;