import React from 'react';
import './style.css';
import { useSelector } from 'react-redux';

export default function Message() {
  const messages = useSelector((state) => state.user.messages);

  return (
    <div className="msgContainer">
      <div className="msgTitles">
        <div className="msgTitle">
          Stats
        </div>
        <div className="msgTitle msgSelected">
          Messages
        </div>
      </div>
      {messages.map((msg) => (
        <div className="cards">
          <div className="card">
            <div className="cardFirstRow">
              <div className="cardUserImg" style={{ background: msg.avatar }} />
              <div className="cardDate">{msg.date}</div>
            </div>
            <div className="cardTexts">
              <div className="cardUserName">
                {msg.name}
              </div>
              <div className="cardTextContent">
                {msg.msg}
              </div>
            </div>
          </div>

        </div>
      ))}
    </div>
  );
}
