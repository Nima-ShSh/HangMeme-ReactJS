import React, { useContext, useEffect, useState } from "react"
import { GameContext } from "./GameProvider";
import "./Game.css"
import { useParams, useNavigate } from "react-router-dom" //this is just the route's param


export const GameDetail = () => {
  const { getWordById } = useContext(GameContext)   //coming from GameProvider
  const {wordCategoryId} = useParams(); /*connected to routes, wordCategoryId needs to be the
        same as what you added in the AppView route path -  <Route path="/detail/:wordCategoryId/*" */

        //useState's objects are global variables
    // const [playable, setPlayable] = useState(true);

    const [selectedCategory, setWordBank] = useState({})
    const [randomWord, setRandomWord] = useState('');
    const [chosenLetter, setChosenLetter] = useState({})
    const [count, setCount] = useState(0); //count how many times used screwed up
    const [correctLetters, setCorrectLetters] = useState([]); //keeping a record of user's correct guesses
    const [wrongLetters, setWrongLetters] = useState([]); //keeping a record of user's wrong guesses
    const [win, setWin] = useState(false);
    const [images, setImages] = useState([]);
    const navigate = useNavigate();
  
    // /* Here we go again, we added an empty string here instead of empty object {} becasue the first
    // part that runs after React is ran is the return section. Since {randomWord} is empty then
    // and React hasn't gotten to useEffect, it just freaks out and breaks. But also it breaks if
    // there was an empty object here since JSX doesn't know what to do with empty objects.
    // However, JSX is okay with empty string for whatever reason. So empty string in useState
    // calms it down. I don't need reasons anymore just have it calm and simple :) */
    
    const handleControlledInputChange = (e) =>{
        const newChosenLetter = {...chosenLetter}
        newChosenLetter[e.target.id] = e.target.value.toLowerCase()
        setChosenLetter(newChosenLetter)
    }
    const chosenWord = e => {
        const arrayLength = selectedCategory.wordBank?.length;
        const randomIndex = Math.floor(Math.random() * arrayLength);
        const work = selectedCategory.wordBank ? selectedCategory.wordBank[randomIndex]?.wordInCategory : ""
        setRandomWord(work);
    }
    const resetInput = ( ) => {
        setChosenLetter({
            guessedLetter: ""
        })
    }
    function wordForGame() {
        return (
            randomWord.split('').map((i) => {
               if( correctLetters.some(guess => guess === i )){
                    return <h1>{i}</h1> 
                  }
                  else{
                    return <div className="blankyboi">_</div>

                    //No span we added a better solution above
                    // <span className="letter" key={i}> {/*{We are mapping through, every object that is looped through should be keyed to display in order}*/}
                    //   {/* {Instead of printing an underscore added .letter in Game.css} */}
                    //   {/* if i = chosenletter.guessedletter then print that letter instead of the bracket */}
                    //   {/* {chosenLetter.guessedLetter === i ? <h1>{correctLetters}</h1> : ''} */}
                    // </span>
                    //<span></span> is an inline container used for grouping and styling
                
                }
            })
        )
    }
//a ternery can only do one thing, actual if conditional can do more than one thing that's why we added an if loop!
const compareLetter = () => {
    //compare chosenLetter to randomWord
    if (randomWord.includes(chosenLetter.guessedLetter)) {
        // window.alert(chosenLetter.guessedLetter + "  " + "it exists")
        // const arrayCorrect = [...correctLetters];
        // arrayCorrect.concat(chosenLetter.guessedLetter)
        //Adding the correct guessed letter to a new array, setting it to a new array is weird in React so we replaced the two lines
        //above with this
        setCorrectLetters(correctLetters => correctLetters.concat(chosenLetter.guessedLetter))

    } else { 

    // window.alert(chosenLetter.guessedLetter + "  " + "it doesn't");
    const newCount = count
    setCount(newCount + 1)
    setWrongLetters(wrongLetters => wrongLetters.concat(chosenLetter.guessedLetter))
    } 
} //add a new useState for correctLetters, if user chooses a correct letter add it to the state using state.concat


const countToLose = () => {
    if (count === 5) {
        window.alert("You guessed 6 times. YOU LOSE")
        // return(
        // <input type="submit" value="Go" />
        // )

    } else {
        return
    }
}

function figure () {
    return (
        wrongLetters.map((i) => {
        const randomIndexOfPic = Math.floor(Math.random() * images.length);
            
            return (
            <>
            <h1 className="wrongguess">In-correctomundo!</h1>
            <img src={images[randomIndexOfPic].img} />
            {/* images is the state and img is from the db */}
            </>
            )
        }
        )
    )
}
    const  dupearray = [...new Set(randomWord)]


    function getPics () {
    return fetch("http://localhost:8088/images")
    .then ( res => res.json())
    .then ( pics => setImages(pics))
    }


  useEffect(() => {
    getWordById(wordCategoryId)
    .then((response) => {
        setWordBank(response)
    })
    .then(getPics)
    }, [])

    useEffect(() => {
        chosenWord()
        }, [selectedCategory])
        /* When there's something in the [] it means that this useEffect will run when there's something in the
        []. In this case, when the first useEffect runs it returns a 0 or "nope" so we added a second one that only runs
        when there's something in the selectedCategory */

  return (
    <section className="game">
        
      <h1>Enter letters and guess the word!</h1>
      <div className="wordBank_word">{<div className="boxyboi">{wordForGame()}</div>}</div>
      {/* <div className="wordBank_word">{selectedCategory.wordBank?.map(object => <p>{object.wordInCategory}</p>)}</div> */}
      {/* <button onClick={chosenWord}> Change</button> */}
      {/* The question mark is an if statement, since wordBank itself is an array we'll put
      it after the wordBank array. For example, in Kennels we put the ? in front of the
      first element before mapping it. */}
            <p className="wrongguessarray">Wrong guesses: {wrongLetters + ""}</p>
<form onSubmit={(e)=>{
    e.preventDefault()
    compareLetter()
    countToLose()
    resetInput()
    }}>
      <input type="text" id="guessedLetter" maxLength="1" value={chosenLetter.guessedLetter} onChange={handleControlledInputChange} disabled={count === 6} />
          <input type="submit" value="Go" disabled={count === 6}/>
    </form>
    <div className="wrongAnswerSAWN">{figure()}
    </div>

    {/* {
        images.map((singleImageObj) => {
            return <img src= {singleImageObj.img} />
        })
    } */}
{/* 
randomWord.split('').map((i) => {
               if( correctLetters.some(guess => guess === i )){
                //   if(correctLetters.includes(i) ){ */}

    {/* //Determining a winning status */}
    { dupearray.length === correctLetters.length? 
    <>
    <h1 className="winTxt">Yup you guessed it </h1>
    <input type="submit" value="Play Again" className="winBtn" onClick={()=> navigate("/")}/>
    </>
    : null
    } 

    {/* //Determining a losing status */}
    { (count === 5)?
    <>
    <h1 className="loseTxt">You guessed 6 times and STILL didn't get it right.. Try again losser</h1>
    <input type="submit" value="Try Again?" className="loseBtn" onClick={()=> navigate("/")}/>
    </>
    : null}


    </section>
  )
}


