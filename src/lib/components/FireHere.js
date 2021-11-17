import React, { useState } from "react";

function FireHere({onHereFn,childer}){
    return(
        <div >
            <button onClick={onHereFn} >من اینجام</button>
            {childer}
        </div>
    )
}
export default FireHere;