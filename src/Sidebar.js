import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { Context } from "./Context";

function Sidebar() {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompt, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    onSent(prompt);
  };

  return (
    <div className="sidebar">
      <div className="top">
        <div className="menu" onClick={() => setExtended((prev) => !prev)}>
          <i class="fa-solid fa-bars"></i>
        </div>
        <div onClick={() => newChat()} className="new-chat">
          <i class="fa-solid fa-plus"></i>
          {extended ? <span> New Chat</span> : null}
        </div>
      </div>
      {extended ? (
        <div className="recent">
          <p className="recent-title">Recent</p>
          {prevPrompt.map((item, index) => {
            return (
              <div
                onClick={() => loadPrompt(item)}
                className="recent-entery"
                key={index}
              >
                <i className="fa-regular fa-message"></i>
                <span>{item.slice(0, 18)}...</span>
              </div>
            );
          })}
        </div>
      ) : null}

      <div className="bottom">
        <div className="bottom-items ">
          <i class="fa-regular fa-circle-question"></i>
          {extended ? <span> Help</span> : null}
        </div>
        <div className="bottom-items ">
          <i class="fa-solid fa-clock-rotate-left"></i>
          {extended ? <span> Activity</span> : null}
        </div>
        <div className="bottom-items ">
          <i class="fa-solid fa-gear"></i>
          {extended ? <span> Setting</span> : null}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
