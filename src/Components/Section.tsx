import { Component } from "react";

interface SectionProps {
  title: string;
  subtitle: string;
  dark: string;
  id: string;
}

interface SectionState {

}

export default class Section extends Component<SectionProps, SectionState> {
  render() {
    return (
      <div className={"section" + (this.props.dark ? " section-dark" : "")}>
        <div className="section-content" id={this.props.id}>
          <h1 style={{ color: 'white' }}>{this.props.title}</h1>
          <p>{this.props.subtitle}</p>
        </div>
      </div>
    );
  }
}
