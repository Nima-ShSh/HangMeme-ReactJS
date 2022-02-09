import React from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

export const MessageCard = ({singleMessage, stateChangingFunction, addMessageToState}) => {
    const navigate = useNavigate();
    

    const onClickHandler = () => {
        stateChangingFunction(singleMessage.id)
        addMessageToState(singleMessage)
      }
      //singleMessage relates to return in MessageList.js



   return(
    <section className="message">
    <h3 className="message_name">
      {singleMessage.user.username}: { }
        { singleMessage.message }
        { singleMessage.userId === +localStorage.activeUser ? <button onClick={onClickHandler}>Edit</button> : ""}
    </h3>
</section>
   )}
  