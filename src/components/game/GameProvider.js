import React, { createContext, useState } from "react";
export const GameContext = createContext();

export const GameProvider = (props) => {

    const [wordCategory, setCategory] = useState([]);

    const getCategory = () => {
        return fetch("http://localhost:8088/wordCategory")
        .then(res => res.json())
        .then(setCategory);
    }

    const getWordById = (id) => {
        return fetch(`http://localhost:8088/wordCategory/${id}?_embed=wordBank`)
            .then(res => res.json())
    }

    return (
        <GameContext.Provider value ={{wordCategory, getCategory, getWordById}}> {props.children} </GameContext.Provider>
    );
}