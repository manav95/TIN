import { Component } from "react";

interface PeopleProps {
  title: string;
  id: string;
}

interface PeopleState {

}

export default class PeopleTab extends Component<PeopleProps, PeopleState> {
  render() {
    return (
      <div className={"section"}>
        <div className="section-content" id={this.props.id}>
          <h1 style={{ color: 'black' }}>{this.props.title}</h1>
          <p>Manav Dutta: Star App Programmer</p>
          <p>Yarden River: Star Musician</p>
          <p>Gaia: Star Mystic</p>
          <p>Eco Joe: Star Eco Superhero</p>
          <p>Sean Fritz: Star App Programmer</p>
        </div>
      </div>
    );
  }
}
