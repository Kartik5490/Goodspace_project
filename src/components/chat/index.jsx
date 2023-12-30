import React from "react";
import { useMultiChatLogic,MultiChatSocket,MultiChatWindow } from "react-chat-engine-advanced";
import Header from "@/components/customHeader";

const Chat = () => {
    const chatProps = useMultiChatLogic(
        import.meta.env.VITE_PROJECT_ID,
        "Kartik",
        "1234"
    )

    return <div style ={{ flexbasis: "100%"}}> 
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow
            {...chatProps}
            style = {{height:"100vh"}}
            renderChatHeader = {(chat)=> <Header chat={chat} />}
        />
    </div>;
};

export default Chat;