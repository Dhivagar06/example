import React from "react";
import Intidualdate from "./been";
import { Qwe } from "./beendate";


function Connectone(){
    const dk = Qwe.map((item,id)=>(
        <Intidualdate key={id} url={item.url} head={item.head}/>
    ))
    return(
<div>
    {dk}
</div>
    )
}

export default Connectone;