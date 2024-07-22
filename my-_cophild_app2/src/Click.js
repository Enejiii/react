import React from "react";

function Click (){
    function HandClick() {
        console.log("i was clicked")
    }

    return(
        <div>
           <button onClick={HandClick} style={{color:"white",backgroundColor:"black"}}>click me</button>
        </div>
    )
}

export default Click