import React from "react";
import { Grid } from "semantic-ui-react";

const Videos = () => (
    <div>
      <h2>Videos</h2>
    <Grid columns={2} doubling>
      <Grid.Column>
      <p>A Live Twitter Feed using Python and Postgres 01 Introduction</p>
      <iframe src="https://www.youtube.com/embed/qmcxpvQUZFs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe>
      </Grid.Column>
      <Grid.Column>
      <p>A Live Twitter Feed using Python and Postgres 02 Setting it up</p>
      <iframe src="https://www.youtube.com/embed/gLLUflVYdSM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe>
      </Grid.Column>
      <Grid.Column>
      <p>My Amazon Alexa built using a Raspberry Pi</p>
      <iframe src="https://www.youtube.com/embed/kWoioo-L4fo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe>
      </Grid.Column>
      <Grid.Column>
      <p>Data Concierge</p>
      <iframe src="https://www.youtube.com/embed/vv4_mmsBvbk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe>
      </Grid.Column>
    </Grid>
    <div style={{"height": "250px"}}>
    </div>
    </div>
  );

export default Videos;