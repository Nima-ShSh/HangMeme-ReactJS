import React from "react"
import "./Game.css"
import { Link } from "react-router-dom"

export const GameCard = ({gameCat}) => {
    return (
        <section className="gameCat">
            {/* <h3 className="game_category">{gameCat.categoryName}</h3> */}
            <h3 className="game_category_chosen"> <Link to={`/detail/${gameCat.id}`}> {gameCat.categoryName} </Link> </h3>
        </section>
    )
}
//referencing to the child component of GameCard in GameList thing
//You can either deconstruct like above or use the props and bring
//Everything that's in the child component of the other file
//This way you have to use dot notation to target the specific component
//Deconstructing is a better practice
//Anyway,
// export const GameCard = (props) => {
//     console.log(props.gameCat.categoryName);
//     return (
//         <section className="game">
//             {/* <h3 className="game_category">{gameCat.categoryName}</h3> */}
//         </section>
//     )
// }