import React from "react";
import me from "../images/peterhanssens.jpg";
import floorly from "../images/floorly_rectangle.png";
import data_engineering_meetup from "../images/data_engineering_meetup.jpeg";
import { Image, Container, Segment, Header } from 'semantic-ui-react';
import '../css/background.css';

const Home = () => (
    <div style={{"height": "1600px"}}>
      <Segment vertical>
        <Container>
          <h2>The website of Peter Hanssens</h2>
          <Image src={me} fluid size='medium'  floated='left'/>
          <p>Welcome to my website, handcoded using react router and deployed via netlify</p>
          <p>I hope you enjoy the content listed here and in the process find out a bit about the different things I'm interested in and if you share some common interests, please do feel free to reach out.</p>
        </Container>
      </Segment>
      <Segment vertical>
        <Container>
          <a href="https://www.meetup.com/Sydney-Data-Engineering-Meetup/">
            <Image src={data_engineering_meetup} fluid size='medium'  floated='right'/>
          </a><h4>Sydney Data Engineering meetup</h4>
          <p>The Sydney Data Engineering meetup has been running since October 2017 and is all about sharing patterns and ideas for the benefit of the community and aiding in each others personal and career growth</p>
        </Container>
      </Segment>
      <Segment vertical>
        <Container>
          <a href="https://floorly.com.au/">
            <Image src={floorly} fluid size='medium'  floated='left'/>
          </a><h4>Floorly</h4>
          <p>A startup that my brother and I have founded which focusses on the timber flooring marketing providing a platform linking customers with trusted and verified businesses</p>
        </Container>
      </Segment>
    </div>
  );

export default Home;