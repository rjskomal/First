import React from 'react';
import  ReactDOM  from 'react-dom';

//const heading = React.createElement("h1" , {id : "heading"} , "This is a React Element");

const jsxheading = <h1 id="heading">JSX heading</h1> ; 

const root  = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxheading);