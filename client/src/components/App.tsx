import * as React from 'react';
import { MessageList } from './MessageList';
import { SendMessage } from './SendMessage';
import * as io from 'socket.io-client';

interface Messages {
  id: number;
  message: string;
}

const socket = io('http://localhost:3000');

socket.on('connect', () => {
  console.log('Connect success');
});

let i = 0;
function messageId(): number {
  i++;
  return i;
}

export class App extends React.Component<{}, { messageList: Array<Messages> }> {
  constructor(props: any) {
    super(props);
    this.state = {
      messageList: [],
    }
  }

  componentDidMount() {
    socket.on('chat message', (mes: string) => {
      this.setState({
        messageList: [...this.state.messageList, { id: messageId(), message: mes }]
      });
    })
  }

  render() {
    return (
      <div>
        <MessageList messages={this.state.messageList} />
        <SendMessage socket={socket} />
      </div>
    )
  }
}
