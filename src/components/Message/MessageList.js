import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MessageContext } from "./MessageProvider";
import { MessageCard } from "./MessageCard";

export const MessageList = ({props}) => {
    const [idToEdit, setIdToEdit] = useState(0)
    // [0].idToEdit holds the value of the message to be editted
    // const {messageId} = useParams(); //grabbing number param (ID) from end of URL

    const { messages, getMessages, updateMessage } = useContext(MessageContext)
    const [message, setMessage] = useState({})  //for the handle stuff
    const navigate = useNavigate();

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
          if (idToEdit){    //if theres id to edit in the state then do this
            //PUT - update , gets message ID from address
            updateMessage({
                id: message.id,
                userId: +localStorage.activeUser,
                message: message.message
            })
            .then(()=> {
                //resetting both states
                setIdToEdit(0)
                setMessage({})
                getMessages() })  //reloading the list with the new list, message edit state set back to 0, message needs to ga back to empty
          }
        }

    // const navigate = useNavigate()
    useEffect(() => {
       getMessages()
    }, [])

return (
    
<div className="messages">
<h2>Messages/Chat</h2>
    {
        messages.map(mssg => {

            if (mssg.id === idToEdit) {
                return (
                    <fieldset>
                    <p>This is your event</p>
                    <input type="text" id="message" name="name" required autoFocus className="form-control" 
                    placeholder="Edit message" onChange={handleControlledInputChange} defaultValue={mssg.message}/>
                   
                   <button className="btn btn-primary btn-dark"
       onClick={handleSaveMessage}> {<>Save editted message</>}
      </button>
                   
                    </fieldset>  
                )
            } else {
                return <MessageCard key={mssg.id} singleMessage={mssg} stateChangingFunction={setIdToEdit} addMessageToState={setMessage}/>
            }

            
        })
    }
            </div>
    
)
}