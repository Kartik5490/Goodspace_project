import React from "react";
import {ChatBubbleLeftRightIcon, PhoneIcon} from "@heroicons/react/24/solid";
const CustomerHeader = ({chat}) => {
    console.log("chat.description",chat.description);
  return (
    <div classname="chat-header">
        <div classname="flexbetween">
            <ChatBubbleLeftRightIcon classname ="icon-chat" />
            <h3 classname ="header-text">{chat.title}</h3>
        </div>
        <div classname ="flexbetween">
            <PhoneIcon className="icon-phone" />
            <p classname="header-text">{chat.description}</p>
        </div>
    </div>
  );
};

export default CustomerHeader