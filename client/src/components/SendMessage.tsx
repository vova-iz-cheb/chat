import * as React from 'react';

interface Sock extends Object {
  emit: (str: string, mes: { message: string, nickname: string }) => void;
}

export class SendMessage extends React.Component<{ socket: Sock, nickname: string }> {
  componentDidMount() {
    document.getElementsByClassName('form')[0].addEventListener('submit', (e) => submitHander(e, this.props.socket, this.props.nickname));
  }

  render() {
    return (<form action="" name='message' className="form">
      <input type="text" id='message' className="form__input" />
      <input type="submit" value='Send' className="form__submit" />
    </form>)
  }
}

function submitHander(e: Event, socket: Sock, nickname: string): void {
  e.preventDefault();
  const mes = (document.getElementById('message') as HTMLInputElement).value;
  if (!mes) return;
  socket.emit('chat message', { message: mes, nickname });
  (document.getElementById('message') as HTMLInputElement).value = '';
}