// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe() {
    function handleFocuse() {
        console.log("Good!");
    }
    function handleBlur() {
        console.log("Hey! Eyes on me!");
    }



  return (
   <button onFocus={handleFocuse} onBlur={handleBlur}>Eyes on me</button>
  )
}

export default EyesOnMe;