import { Component } from "react";

interface MessageProps {
  title: string;
  subtitle: string;
  id: string;
}

interface MessageState {

}

export default class Message extends Component<MessageProps, MessageState> {
  render() {
      return (
      <div className={"section"}>
        <div className="section-content" id={this.props.id}>
          <h1 style={{color: 'white' }}>{this.props.title}</h1>
          <p>{this.props.subtitle}</p>
        </div>
      </div>
    );
  }
}
  