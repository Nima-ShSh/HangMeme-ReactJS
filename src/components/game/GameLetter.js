// import React, { useEffect, useState } from "react";

// const [playable, setPlayable] = useState(true);
// const [correctLetter, setCorrectLetter] = useState([]);
// //Saving the correct letters in a new array, starting with an empty array
// const [wrongLetter, setWrongLetter] = useState([]);
// //Saving the correct letters in a new array, starting with an empty array


// function noBuenoLetter() {
//     return (
//         <div className="no-bueno-container">
//             {wrongLetter.length > 0 && <p>Wow, look.. you are losing smh</p>}
//             {wrongLetter.map((letterObj, i) => 
//                 <span key={i}> {letterObj} </span>)
//                 .reduce((prevLetter, currentLetter) => prevLetter === null ? [currentLetter] : [prevLetter, '', currentLetter], null)
//                 }
//             {/* Reduce is like a join, adding the comma between each wrong letter */}
//         </div>
//     )
// }

// // export default noBuenoLetter

// // function buenoLetter() {
// //     return (
// //         <div className="bueno-container">
// //             {correctLetter.length }
// //         </div>
// //     )
// // }

// useEffect(() => {
//     const handleKeydown = event => {
//         const { key, keycode } = event;
//         if(playable && keycode >= 65 && keycode <= 90)  //if it is a letter key
//         const letter = key.toLowerCase();

//         if(randomWord)
//     }
// })