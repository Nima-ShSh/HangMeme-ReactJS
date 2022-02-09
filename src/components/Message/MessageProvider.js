import React, { useState, createContext } from "react";

export const MessageContext = createContext();

export const MessageProvider = (props) => {

 const [messages, setMessages] = useState([]);

 const getMessages = () => {
    return fetch("http://localhost:8088/messages?_expand=user")
    .then(res => res.json())
    .then(setMessages);
}

const addMessage = messageObj => {
    return fetch("http://localhost:8088/messages", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(messageObj)
    }).then(getMessages)
}

const updateMessage = message => {
    return fetch(`http://localhost:8088/messages/${message.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(message)
        })
          .then(getMessages)
}

//No need for this since we are using inline edit, we would use this
//if we wanted to edit by id of each message which would take user to a
//separate screen. We don like that!
// const getMessageById = (id) => {
//     return fetch(`http://localhost:8088/messages/${id}?_expand=users`)
//         .then(res => res.json())
// } //edit fot individual messages


return (
    <MessageContext.Provider value={{
        messages, getMessages, addMessage, updateMessage
    }}>
        {props.children}
    </MessageContext.Provider>
);
}