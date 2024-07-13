import React from 'react';
import  ReactDOM  from 'react-dom';

//const heading = React.createElement("h1" , {id : "heading"} , "This is a React Element");
const Name = () =>(
    <>
    <h2>Sova</h2>
    </>
);




const Heading = () =>(
    <div>
    <Name/>
    <h1>I AM THE HUNTER!!!!</h1>
    </div>
);


const root  = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading/>);


