import React from "react";
import { Icon, Segment, Grid, Header, List, Container } from "semantic-ui-react";

const Footer = () => (
    <Segment inverted vertical style={{ padding: '5em 5em', 'bottom': '0', 'width': '100%'}}>
        <Container>
            <Grid divided inverted stackable>
            <Grid.Row>
                <Grid.Column width={3}>
                <Header inverted as='h4' content='About' />
                <List link inverted>
                    <List.Item>
                    <a href="mailto:phanssens1@gmail.com">Contact Me
                    </a></List.Item>
                    <List.Item as='a'>
                    <a href="/about">About Me
                    </a></List.Item>
                    <List.Item as='a'>
                    <a href="/videos">Videos
                    </a></List.Item>
                </List>
                </Grid.Column>
                <Grid.Column width={3}>
                <Header inverted as='h4' content='Services' />
                <List link inverted>
                    <List.Item as='analytics'>
                    <a href="/analytics">Analytics
                    </a></List.Item>
                    <List.Item as='architecture'>
                    <a href="/architecture">Data Architecture
                    </a></List.Item>
                    <List.Item as='visualisations'>
                    <a href="/visualisations">Visualisations
                    </a></List.Item>
                    <List.Item as='web_dev'>
                    <a href="/web_dev">Web Development
                    </a></List.Item>
                </List>
                </Grid.Column>
                <Grid.Column width={7}>
                    <Header as='h4' inverted>Social</Header>
                    <a href="https://www.linkedin.com/in/peterhanssens/">
                    <Icon size='big' name='linkedin square' />
                    </a>
                    <a href="https://medium.com/@peterhanssens">
                    <Icon size='big' name='medium' />
                    </a>
                    <a href="https://twitter.com/petehanssens">
                    <Icon size='big' name='twitter square' />
                    </a>
                    <a href="https://github.com/phanssens1/">
                    <Icon size='big' name='github square' />
                    </a>
                        
                    <p>Feel free to connect with me on LinkedIn and follow me on Twitter and Medium.</p>
                </Grid.Column>
            </Grid.Row>
            </Grid>
        </Container>
    </Segment>
);

export default Footer;