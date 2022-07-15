import React from 'react';
import ReactDOM from 'react-dom/client';

function Football(){
    const shoot = () =>{
        alert("Great shot");
    }
    return (
        <button onClick={shoot}>Take The shot</button>
    );
}

export default Football;