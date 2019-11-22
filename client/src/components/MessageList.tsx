import * as React from 'react';

interface Messages {
  id: number;
  message: string;
  nickname: string;
  timestamp: Date;
}

export const MessageList: React.FC<{ messages: Array<Messages>, nickname: string }> = props => {
  const messages = props.messages;
  const nickname = props.nickname;
  if (!messages.length) return <p className="empty">Оставь сообщение первым.</p>;

  const elems = messages.map(item => {
    if (nickname === item.nickname) return <div className="messages__wrapper my" key={item.id}><li className="messages__elem my"><span>{item.message}</span></li></div>
    return <div className="messages__wrapper" key={item.id}><li className="messages__elem"><span>{item.message}</span></li></div>
  })

  return (
    <ul id='messages' className="messages">
      {elems}
    </ul>
  )
}
