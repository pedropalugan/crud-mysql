import React, { useState } from "react";
import './main.css';
import { Link } from "react-router-dom";


const InputTag = () => {

    let userInput = React.createRef();
    let pswdInput = React.createRef();


    const handleClick = () =>{
        let user = userInput.current.value
        let pswd = pswdInput.current.value
        if(user === 'PePalugan' && pswd === 'Peppalugan12'){
            alert("FOI")
        }
        else{
            alert("YOU BITCH IS DUMB AS FUCK")
        }
    }

    return (
        <div>
          <input ref={userInput} type="text" placeholder="User" />
          <input ref={pswdInput} type="password" placeholder="Password" />
          <button onClick={handleClick}>asdasd</button>
          <Link to="/teste">sadasdas</Link>
        </div>
      )
    }


export default InputTag;