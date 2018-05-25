import React from "react";
import me from "../images/peterhanssens.jpg";
import { Image } from 'semantic-ui-react';

const Home = () => (
    <div style={{"height": "750px"}}>
      <h2>Peter Hanssens</h2>
        <Image src={me} fluid size='medium'  floated='left'/>
        <p>Welcome to my new website</p>
        <p>I've been learning react router recently and this is the result</p>
        <p></p>
        <p>I won't be changing careers to become a frontend developer anytime soon but it has been good fun!</p>
    </div>
  );

export default Home;