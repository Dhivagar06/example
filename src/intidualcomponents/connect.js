import React from "react";
import Commonstructor from "./commonconstractor";
import { Data } from "./intidualdata";


function Connect(){
    const dk = Data.map((item,id)=>(
        <Commonstructor key={id} url={item.url} heading={item.heading}/>
    ))
    return(
<div>
    {dk}
</div>
    )
}

export default Connect;