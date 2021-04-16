import React, { Component } from "react";
import Iframe from 'react-iframe'

interface ContactFormProps {
  title: string;
  dark: boolean;
  id: string;
  onboardEnabled: boolean;
  onboard: () => void;
}

interface ContactFormState {

}

export default class ContactForm extends Component<ContactFormProps, ContactFormState> {
  render() {
    return (
      <div className={"section" + (this.props.dark ? " section-dark" : "")}>
        <div className="section-content" id={this.props.id}>
          <h1>{this.props.title}</h1><br></br>
          {this.props.onboardEnabled && <button onClick={this.props.onboard} className="onboarding"> Onboarding</button>}
          {!this.props.onboardEnabled && <a style={{ 'color': 'white', 'fontSize': '24px' }} href="https://discord.gg/cAyrKSme">Join us on Discord</a>}
          {!this.props.onboardEnabled && <Iframe url="https://us7.list-manage.com/contact-form?u=e1e257145a4a30cfd2bf75ef6&form_id=13473e90a944f78f2592a96f9e26121e"
            position="absolute"
            width="100%"
            id="myId"
            className="myClassname"
            height="100%"
            styles={{ height: "100px" }} />}
        </div>
      </div>
    );
  }
}