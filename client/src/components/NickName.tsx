import * as React from 'react';

export class NickName extends React.Component<{ nickName: string, setNickName: (nickName: string) => void }> {
  submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const nickname: string = (document.getElementsByClassName('nickNameForm__input')[0] as HTMLInputElement).value;

    this.props.setNickName(nickname);
  }

  render() {
    return (
      <div className="modalBox" >
        <form className="nickNameForm" onSubmit={(e: React.FormEvent) => this.submitHandler(e)}>
          <h3 style={{ textAlign: "center" }}>Введите ваш никнейм</h3>
          <input type="text" className="nickNameForm__input" /><br />
          <input type="submit" className="nickNameForm__submit" />
        </form>
      </div>
    )
  }
}
