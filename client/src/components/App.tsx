import * as React from 'react';
import { MessageList } from './MessageList';
import { SendMessage } from './SendMessage';
import { NickName } from './NickName';
import * as io from 'socket.io-client';
import '../styles/main.scss'

interface Messages {
  id: number;
  message: string;
  nickname: string;
  timestamp: Date;
}

interface IMessage {
  message: string;
  nickname: string;
  timestamp: Date;
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

export class App extends React.Component<{}, { nickname: string, messageList: Array<Messages> }> {
  constructor(props: any) {
    super(props);
    this.state = {
      nickname: '',
      messageList: [],
    }
  }

  setNickName = (nickname: string): void => {
    this.setState({ nickname });
  }

  componentDidMount() {
    socket.on('chat message', (messageObj: IMessage) => {
      console.log(messageObj);
      this.setState({
        messageList: [...this.state.messageList, { id: messageId(), message: messageObj.message, nickname: messageObj.nickname, timestamp: messageObj.timestamp }]
      }, () => {
        document.getElementById('messages').scrollTop += 40;
      });
    })
  }

  render() {
    return (
      <>
        {!this.state.nickname && <NickName setNickName={this.setNickName} nickName={this.state.nickname} />}
        <h2 className="header">Откройте меня в нескольких окнах.</h2>
        <MessageList messages={this.state.messageList} nickname={this.state.nickname} />
        <SendMessage socket={socket} nickname={this.state.nickname} />
      </>
    )
  }
}
