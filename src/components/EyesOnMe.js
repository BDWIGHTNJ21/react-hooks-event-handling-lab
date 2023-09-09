// Code EyesOnMe Component Here
import React from 'react';

function EyesOnMe (){
const Focus =() =>{ 
console.log('Good!');   

};
    const Blur =()=>{
         console.log('Hey! Eyes on me!');
    };
         
       return (
       <button onFocus={Focus}onBlur={Blur}>'Eyes on me' </button>
   
       );  
  
}

export default EyesOnMe;