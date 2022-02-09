import React, { useContext, useEffect } from "react";
// import { useNavigate } from "react-router"
import { GameContext } from "./GameProvider";
import { GameCard } from "./GameCard";
import "./Game.css"

export const GameList = () => {
    
    // const navigate = useNavigate()
    const { wordCategory, getCategory } = useContext(GameContext)

    useEffect(() => {
        // console.log("game list is rendering!")
        getCategory()
    }, [])

    return (
    <>
        <h2 className="firstpage">Welcome to Hang-Meme 3000</h2>
        <h2 className="firstpage">Choose a category and lets procrastinate</h2>
    
        <div className="gameforms">
            {
                wordCategory.map(wordCategory => {
                    return <GameCard key={wordCategory.id} gameCat={wordCategory} greeting={"hello"} thirdProp={1} />
                }) //Jordan was showing me that we can have many props in a child component in GameList vs. GameCard
            }
        </div>

    </>
    )
}