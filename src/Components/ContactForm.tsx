import { Component } from "react";
import Iframe from 'react-iframe'

interface ContactFormProps {
  title: string;
  dark: boolean;
  id: string;
  onboardEnabled: boolean;
  discordEnabled: boolean;
  onboard: () => void;
  closeWindow: () => void;
}

interface ContactFormState {

}

export default class ContactForm extends Component<ContactFormProps, ContactFormState> {
  render() {
    return (
      <div className={"section" + (this.props.dark ? " section-dark" : "")}>
        <div className="section-content" id={this.props.id}>
          <h1 style={{ color: 'black' }}>{this.props.title}</h1><br></br>
          {!this.props.discordEnabled && this.props.onboardEnabled && <button onClick={this.props.onboard} className="onboarding"> Onboarding</button>}
          {!this.props.onboardEnabled && <button onClick={this.props.closeWindow} className="onboarding"> Close Form </button>}
          {!this.props.onboardEnabled && <Iframe url="https://us7.list-manage.com/contact-form?u=e1e257145a4a30cfd2bf75ef6&form_id=13473e90a944f78f2592a96f9e26121e"
            position="absolute"
            width="25%"
            id="myId"
            className="myClassname"
            height="75%"/>}
          {this.props.discordEnabled && <a style={{ 'color': 'black', 'fontSize': '24px' }} href="https://discord.gg/cAyrKSme">Now join us on Discord!</a>}
        </div>
      </div>
    );
  }
}