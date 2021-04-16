import * as React from 'react';
import "./App.css";
import Navbar from "./Components/Navbar";
import ContactForm from "./Components/ContactForm";
import Calendar from "./Components/Calendar";
import Gallery from "./Components/Gallery"
import AboutUs from "./Components/AboutUs"
import Message from "./Components/Message"

import message from './message';
import { animateScroll as scroll } from "react-scroll";
import { hot } from "react-hot-loader";

interface AppProps {
}

interface AppState {
  onboardEnabled: boolean;
}

class App extends React.Component<AppProps, AppState> {
  state = {onboardEnabled: true};
  
  constructor(props: AppProps) {
    super(props);
    this.onboard = this.onboard.bind(this)
  }

  onboard() { 
    this.setState({onboardEnabled: false});
    scroll.scrollTo(20000)
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <AboutUs
          title="About Us"
          id="section1"
          onboard={this.onboard}
        />
        <Calendar
          title="Calendar"
          dark={false}
          id="section2"
        />
        <Message
          title="A Message from Gaia"
          subtitle={message}
          id="section3"
        />
        <Gallery
          title="Gallery"
          dark={false}
          id="section4"
        />
        <ContactForm
          title="Join Us"
          dark={false}
          onboard={this.onboard}
          id="section5"
          onboardEnabled={this.state.onboardEnabled}
        />
      </div>
    );
  }
}

export default hot(module)(App);