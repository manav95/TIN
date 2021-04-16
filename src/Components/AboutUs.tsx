import * as React from 'react';
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Component } from "react";

interface AboutUsProps {
  id: string;
  title: string;
  onboard: () => void; 
}

interface AboutUsState {
  onboardEnabled: boolean;
}


export default class AboutUs extends Component<AboutUsProps, AboutUsState> {
  onboard: () => void;
  constructor(props: AboutUsProps) {
    super(props);
    this.state = {onboardEnabled: true};
    this.onboard = props.onboard.bind(this)
  }

  render() {
    return (
      <div className={"section"}>
        <div className="section-content" id={this.props.id}>
          <h1 style={{ color: 'white' }}>{this.props.title}</h1>
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={20}
            totalSlides={5}
            touchEnabled
            dragEnabled>
            <Slider>
              <Slide index={0}>Time Is Now is an organization and movement of the people and for the people that creates peaceful solutions benefiting all life forms on the planet. TIN works with socially and environmentally conscious organizations, communities and movements, and elevates them through our various platforms. In doing so we draw forth solidarity, powerful unified action and together make strides towards world peace.</Slide>
              <Slide index={1}>On the physical level - In addition to bringing together our various influential partners and organizing impactful unity rallies, marches, peaceful protests, festivals and global drum circles, TIN builds conscious, self-sustainable, self-governing communities/retreat centers which host events, seminars, workshops, retreats, ceremonies, festivals, etc. for attendees from around the world that at the same time operate as community centers providing ongoing services to the local/indigenous people of a given center’s region. The centers provide alternative healing, education on health, wellness, fitness, arts, crafts, agriculture, trade, etc., basically all practical and relevant tools to help people live abundantly in today’s world. The first of its kind being in Hawaii, with Nicaragua, Belize, Israel, and Palestine to follow and then the rest of the world.</Slide>
              <Slide index={2}>On the spiritual level - Energetically/ spiritually / consciously -- We are weaving the matrix of our consciousness and turning ON the light of the flower-of-life that surrounds our planet earth. </Slide>
              <Slide index={3}>On the ecological level— We are creating a revolutionary, visionary “vehicle" of big production which will generate and bring though it Divine’s abundance. We will create an on going and on growing shared income to all who participate in the Enterprise with different options of involvement and participation. Eventually as we grow this could be an answer to homelessness, poverty, starvation and the need to buy into war. This would allow us to free our human minds from all the matter that does not matter any more, and live a peaceful abundant and harmonious life as we know to be our right and privilege to live as so. </Slide>
              <Slide index={4}>WE ARE NOT LEAVING ANYONE BEHIND :) <br></br> Here is how you can get started: <button onClick={this.props.onboard} className="onboarding"> Join Us </button> <br></br></Slide>
            </Slider>
            <DotGroup className='dot-group' />
          </CarouselProvider>
        </div>
      </div>
    );
  }
}