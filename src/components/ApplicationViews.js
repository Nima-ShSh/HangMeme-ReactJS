import { Route, Routes } from "react-router-dom";
import React from "react";

import { MessageList } from "./Message/MessageList";
import { MessageForm } from "./Message/MessageForm";
import { MessageProvider } from "./Message/MessageProvider";
import { GameList } from "./game/GameList";
import { GameProvider } from "./game/GameProvider";
import { GameDetail } from "./game/GameDetail";

export const ApplicationViews = () => {

    return (
        <GameProvider>
        <MessageProvider>
        <Routes>
        <Route path="/" element={<><GameList /> </>}/>
        <Route path="chat/*" element={<><MessageList /><MessageForm /></>}/>
        <Route path="/detail/:wordCategoryId/*" element={<><GameDetail /></>}/>
        </Routes>
        </MessageProvider>
        </GameProvider>
    )
}