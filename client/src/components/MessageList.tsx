import * as React from 'react';
import { formatDate } from '../utils/formatDate';

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
    const dateString = formatDate(item.timestamp);

    return <div className={nickname === item.nickname ? "messages__wrapper my" : "messages__wrapper"} key={item.id}><li className={nickname === item.nickname ? "messages__elem my" : "messages__elem"}><span><div className="messages__nickname">{item.nickname}</div>{item.message}<time className='messages__date'>{dateString}</time></span></li></div>
  })

  return (
    <ul id='messages' className="messages">
      {elems}
    </ul>
  )
}
