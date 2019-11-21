import * as React from 'react';

interface Sock extends Object {
  emit: (str: string, mes: string) => void;
}

export class SendMessage extends React.Component<{ socket: Sock }> {
  componentDidMount() {
    document.forms[0].addEventListener('submit', (e) => submitHander(e, this.props.socket));
  }

  render() {
    return (<form action="" name='message'>
      <input type="text" id='message' />
      <input type="submit" value='Send' />
    </form>)
  }
}

function submitHander(e: Event, socket: Sock): void {
  e.preventDefault();
  const mes = (document.getElementById('message') as HTMLInputElement).value;
  if (!mes) return;
  socket.emit('chat message', mes);
  (document.getElementById('message') as HTMLInputElement).value = '';
}