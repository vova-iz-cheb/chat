import * as React from 'react';
import { MessageList } from './MessageList';
import { SendMessage } from './SendMessage';
import * as io from 'socket.io-client';

const socket = io('http://localhost:3000');
console.log(socket);

socket.on('connect', () => {
  console.log('Connect success');
});

export class App extends React.Component {
  render() {
    return (
      <div>
        <MessageList />
        <SendMessage socket={socket} />
      </div>
    )
  }
}
