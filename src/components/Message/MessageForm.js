//form for the messaging
//will have a text box and a button
//will save the new text in the list
//will be shown on the main page on application 

import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MessageContext } from "./MessageProvider";

export const MessageForm = () => {
    const { addMessage, updateMessage } = useContext(MessageContext)


//States
const [message, setMessage] = useState({})

//Wait for data before activating button
const [isLoading, setIsLoading] = useState(true);

//Looking for the id at the end of URL pointing to each message
const {messageId} = useParams();

const navigate = useNavigate();

//when field changes, update state. This causes a re-render and updates the view.
    //Controlled component
    const handleControlledInputChange = (event) => {
        //When changing a state object or array,
        //always create a copy make changes, and then set state.
        const newMessage = { ...message }
        //animal is an object with properties.
        //set the property to the new value
        newMessage[event.target.id] = event.target.value
        //update state
        setMessage(newMessage)
      }


const handleSaveMessage = () => {
    if (parseInt(message.id) === 0) {
        window.alert("Please do something about your existence")
    } else {
      //disable the button - no extra clicks
      setIsLoading(true);
      //if there is id in the end of URL run updateMessage() else run addMessage()
      if (messageId){
        //PUT - update , gets message ID from address
        updateMessage({
            id: message.id,
            userId: +localStorage.activeUser,
            message: message.message
        })
        .then(() => navigate(`/messages`))
      }else {
        //POST - add
        addMessage({
            userId: +localStorage.activeUser,
            message: message.message
        })
        .then(() => navigate("/chat"))
      }
    }
  }

  useEffect(() => {
      setIsLoading(false)
  },[])

 return (
    <form className="messageForm">
      <fieldset>
        <div className="form-group">
          <input type="text" id="message" name="name" required autoFocus className="form-control"
          placeholder="Enter message"
          onChange={handleControlledInputChange}
          defaultValue={message.message}/>
        </div>
      </fieldset>
      <button className="btn btn-primary btn-dark"
        disabled={isLoading}
        onClick={event => {
          event.preventDefault() // Prevent browser from submitting the form and refreshing the page
          handleSaveMessage()
        }}>
        {<>Save message</>}
      </button>

    </form>
 )

}