    // function noBuenoLetter({wrongLetter}) {
    //     return (
    //         <div className="no-bueno-container">
    //             {wrongLetter.length > 0 && <p>Wow, look.. you are losing smh</p>}
    //             {wrongLetter.map(( i) => 
    //                 <span key={i}> {letterObj} </span>)
    //                 // .reduce((prevLetter, currentLetter) => prevLetter === null ? [currentLetter] : [prevLetter, '', currentLetter], null)
    //                 }
    //             {/* Reduce is like a join, adding the comma between each wrong letter */}
    //         </div>
    //     )
    // }



    // useEffect(() => {
    //     const handleKeydown = event => {
    //         const { key, keycode } = event;  //destructuring
    //         if(playable && keycode >= 65 && keycode <= 90)  //if it is a letter key on the keyboard
    //         // let letter = key.toLowerCase();   //store the value of the entered key
    //         const letter = keycode


     // const [correctLetter, setCorrectLetter] = useState([]);
    //     //Saving the correct letters in a new array, starting with an empty array
    // const [wrongLetter, setWrongLetter] = useState([]);
    //     //Saving the correct letters in a new array, starting with an empty array

    
    //         if(randomWord.includes(letter)) {
    //             if (!correctLetter.includes(letter)) {
    //                 setCorrectLetter(currentLetter => [ ...currentLetter, letter]);  //taking current letters and put them in a new array, then add the new letters to the array
    //             } else {
    //                 //show something
    //             }
    //         } else {
    //             if (!wrongLetter.includes(letter)) {
    //                 setWrongLetter(wrongLetter => [ ...wrongLetter, letter])
    //             } else {
    //                 //show something
    //             }
    //         }
    //     }
    
    //     window.addEventListener('keydown', handleKeydown)
    //     return () => window.removeEventListener('keydown', handleKeydown)
    //     //clean up event listener?, we are only going to have one event listener running
    // }, [correctLetter, wrongLetter, playable]); //any time these get updated, that's when this functionis going to call
