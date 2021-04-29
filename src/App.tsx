import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import ContactForm from "./components/ContactForm";
import Calendar from "./components/Calendar";
import Gallery from "./components/Gallery"
import AboutUs from "./components/AboutUs"
import Message from "./components/Message"
import PeopleTab from "./components/PeopleTab"
import message from './message';
import { animateScroll as scroll } from "react-scroll";
import { hot } from "react-hot-loader";
import "./App.css";

interface AppState {
  onboardEnabled: boolean;
  discordEnabled: boolean;
}

class App extends Component<any, AppState> {
  state = {onboardEnabled: true, discordEnabled: false};
  
  constructor(props: any) {
    super(props);
    this.onboard = this.onboard.bind(this)
    this.closeWindow = this.closeWindow.bind(this)
  }

  onboard() { 
    this.setState({onboardEnabled: false});
    scroll.scrollTo(20000)
  }

  closeWindow() {
    this.setState({onboardEnabled: true, discordEnabled: true})
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <AboutUs
          title="About Us"
          id="aboutUs"
          onboard={this.onboard}
        />
        <Message
          title="A Message from Gaia"
          subtitle={message}
          id="message"
        />
        <Gallery
          title="Gallery"
          dark={false}
          id="gallery"
        />
        <PeopleTab
          title="People"
          id="gallery"
        />
        <Calendar
          title="Events"
          dark={false}
          id="calendar"
          />
        <ContactForm
          title="Join Us"
          dark={false}
          onboard={this.onboard}
          closeWindow={this.closeWindow}
          id="joinUs"
          onboardEnabled={this.state.onboardEnabled}
          discordEnabled={this.state.discordEnabled}
        />
      </div>
    );
  }
}

export default hot(module)(App);