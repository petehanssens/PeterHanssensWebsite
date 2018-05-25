import React from "react";
import soccer from "../images/soccer.JPG";
import cafe from "../images/cafe.PNG";
import animal_farm from "../images/animal_farm.jpg";
import { Image } from 'semantic-ui-react';

const About = () => (
    <div>
      <h2>About Me</h2>
      <p>I'm a husband and father and my family mean the world to me!</p>
      <p>Me and my wife Catarina live by Cooks River in Earlwood with our son Zac.</p>
      <p>When we aren't taking a walk by the river, you can find us at one of the many cafe's in Marrickville or touring the many fun things kids can do in Sydney.</p>
      <Image.Group size='medium'>
        <Image src={soccer} fluid />
        <Image src={cafe} fluid style={{'height':225, 'width': 'auto'}}/>
        <Image src={animal_farm} fluid />
      </Image.Group>
      <div style={{"height": "300px"}}>
      </div>
    </div>
  );

export default About;