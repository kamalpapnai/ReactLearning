import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Heading from './Heading';
import Paragraph from './Paragraph';

import App from './App';

// /**
//  * Ist method
//  */
// ReactDOM.render(
//     <h1>Hello World</h1>,
//   document.getElementById('root')
// );

// /**
//  * 2nd method
//  */
// ReactDOM.render(React.createElement("h1",null,"Hello 2nd Rendering"),
// document.getElementById('root'));

// /**
//  * 3rd method
//  */
// var h1 = document.createElement('h1');
// h1.innerHTML = "Hello 3rd Rendering";
// document.getElementById('root').appendChild(h1);

/**
 * Render Multiple Elements
 */

//  ReactDOM.render(<div>
//    <h1>First Element</h1>
//    <h2>Second Element</h2>
//  </div>,
//   document.getElementById('root'));

//   /**Second Method */
//   ReactDOM.render ([
//     <h1>First Element using array</h1>,
//     <h2>Second Element using array</h2>,
//   ],
//    document.getElementById('root'));



//    /**
//     * React Fragment
//     */
// ReactDOM.render(
//   <React.Fragment>
//     <h1>Using react fragment</h1>
//     <h1>for multiple elements</h1>
//     <h1>without extra div</h1>
//   </React.Fragment>,
//   document.getElementById('root')
// )

// //another way 

// ReactDOM.render(
//   <>
//   <h1>Without using react fragment</h1>
//   <h3>form of syntactic sugar</h3>
//   </>,
//   document.getElementById('root')
// )




// //challenge No1

// ReactDOM.render([
//     <h1>Added heading</h1>,
//     <p>Added a paragraph</p>,
//     <ol type="number">
//       <li>Net Show 1</li>
//       <li>Net Show 2</li>
//       <li>Net Show 3</li>
//       <li>Net Show 4</li>
//       <li>Net Show 5</li>
//     </ol>
// ],
// document.getElementById('root'))


// // JS Expressions in JSX

// const userName = 'Kamal Papnai';
// ReactDOM.render(
//     <>
//     <h1>User Name is:{userName}</h1>
//     <p>Number of Likes:{2+3}</p>
//     <p>Random Number:{Math.floor(Math.random()*10)}</p>
//     </>,
//     document.getElementById('root')
// )


// //Template Literals
// const firstName = 'Kamal';
// const lastName = 'Papnai';
// ReactDOM.render(
//     <>
//     <h5>Full Name is {`${firstName} ${lastName}`}</h5>
//     <h6>{`Full Name is ${firstName} ${lastName}`}</h6>
//     </>,
//     document.getElementById('root')
// )


// //Challenge No2
// const name = "Kamal Papnai";
// const currentDateTime = new Date();
// ReactDOM.render(<>
//   <h1>
//       Name:{name}
//   </h1>
//   <p>Current Date:{`${currentDateTime.getDate()}-${currentDateTime.getMonth()}-${currentDateTime.getFullYear()}`}</p>
//   <p>Current Time:{currentDateTime.toLocaleTimeString()}</p>
//   </>,
//     document.getElementById('root'))



// //JSX Attributes (same as HTML But should be camelcased)
// const imgSrc = "https://picsum.photos/200/300"; 
// const imgSrc2 = "https://picsum.photos/300/300"; 
// const imgSrc3= "https://picsum.photos/200/300"; 
// const googleLink = "https://www.google.com";
// ReactDOM.render(
//     <>
//     <h1 contentEditable>My name is Kamal Papnai</h1>
//     <img src={imgSrc} alt="Random Image"/>
//     <img src={imgSrc2} alt="Random Image"/>
//     <a href={googleLink} target="_blank">
//     <img src={imgSrc3} alt="Random Image"/>
//     </a>
//     </>,
//     document.getElementById('root')
// )




// //Styling (cannot use class ** use className)
// const imgSrc = "https://picsum.photos/200/300"; 
// const imgSrc2 = "https://picsum.photos/300/300"; 
// const imgSrc3= "https://picsum.photos/200/300"; 
// const googleLink = "https://www.google.com";
// ReactDOM.render(
//     <>
//     <h1 contentEditable className="heading">My name is Kamal Papnai</h1>
//     <div className="img-div">
//     <img src={imgSrc} alt="Random Image"/>
//     <img src={imgSrc2} alt="Random Image"/>
//     <a href={googleLink} target="_blank">
//     <img src={imgSrc3} alt="Random Image"/>
//     </a>
//     </div>
//     </>,
//     document.getElementById('root')
// )



// //Inline CSS Styling
// const headingStyle = {
//     color:'blue',
//     textTransform:'capitalize',
//     marginTop:'20px'
// }
// ReactDOM.render(<>
// <h1 style = {headingStyle}>My Name is Kamal Papnai</h1>
// </>,
//     document.getElementById('root'))



// //Challenge No 3
// let greetingMessage = "Good ";

// const divGreeting = {
//     textAlign:'center',
//     position:'absolute',
//     top: '20%',
//     left: '50%',
//     transform: 'translateX(-80%)',
//     fontFamily: `'Josefin Sans', sans-serif'`,
//     border: 'solid 2px brown',
//     backgroundColor: 'rosybrown',
//     padding: '50px 100px'
// }
// const greetingMsg = {
//     border: '2px solid red',
//     padding:'20px 20px',
//     letterSpacing:'2px',
//     color: 'yellow',
// }
// let currentTime = (new Date()).toLocaleTimeString();
// let time  = currentTime.split(':');
// if(time[0]<12)
// {
//   greetingMessage+='Morning!';
//   greetingMsg['color']='orange'
// }
// else if(time[0]>12 && time[0]<19)
// {
//     greetingMessage+='Afternoon!'
//     greetingMsg['color'] = 'cherry'
// }
// else{
//     greetingMessage+='Night!';
//     greetingMsg['color']='yellow'
// }

// ReactDOM.render(<>
// <div style={divGreeting}>
//     <h3 style={greetingMsg}>{`Hello! ${greetingMessage}`}</h3>
// </div>
// </>,
//     document.getElementById('root'))


//Components
// ReactDOM.render(
//     <>
//     <Heading></Heading>
//     <Paragraph/>
//     </>,
//     document.getElementById('root')
// )



//using app component
ReactDOM.render(
    <>
    <App></App>
    </>,
    document.getElementById('root')

)


//Challenge 3 using components
