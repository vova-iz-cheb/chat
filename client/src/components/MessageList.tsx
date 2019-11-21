import * as React from 'react';

interface Messages {
  id: number;
  message: string;
}

export const MessageList: React.FC<{ messages: Array<Messages> }> = props => {
  const messages = props.messages;
  if (!messages.length) return <p>Оставь сообщение первым.</p>;

  const elems = messages.map(item => {
    return <li key={item.id}>{item.message}</li>
  })

  return (
    <ul id='messages'>
      {elems}
    </ul>
  )
}
