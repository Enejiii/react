import React from "react";

function Joke (props){
    return(
        <div>
            <h1 style={{color:"purple",background:"yellow"}}>Question: {props.question}</h1>
            <h3 style={{color:"green",background:"red"}}>Punchline:{props.punchline}</h3>
        </div>
    )
}
export default Joke;