import React from "react";
import { Component } from "react";

interface CalendarProps {
  title: string;
  dark: boolean;
  id: string;
}

interface CalendarState {

}

export default class Calendar extends Component<CalendarProps, CalendarState> {
  render() {
    return (
      <div className={"section" + (this.props.dark ? " section-dark" : "")}>
        <div className="section-content" id={this.props.id}>
          <h1>{this.props.title}</h1><br></br>
          <div data-tockify-component="calendar" data-tockify-calendar="timeisnow"></div>
          <script data-cfasync="false" data-tockify-script="embed" src="https://public.tockify.com/browser/embed.js"></script>
        </div>
      </div>
    );
  }
}