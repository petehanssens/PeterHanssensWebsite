import React from "react";
import architecture from "../images/data_architecture.png";
import { Image, Container } from "semantic-ui-react";

const Architecture = () => (
  <Container>
    <div style={{"height": "750px"}}>
      <h2>Data Architecture</h2>
      <p>Conceptualising the movement of data into various functional tiers is useful for the business to understand how data happens in a business</p>
      <p>It's important that all stakeholders have a clear understanding of the functions each tier provides and it's importance in the overall health of the ecosystem</p>
      <Image src={architecture} fluid size='big' />
    </div>
  </Container>
  );

export default Architecture;