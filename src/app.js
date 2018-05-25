import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Icon, Segment, Grid, Header, List, Container, Menu } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
import Home from "./pages/home";
import About from "./pages/about";
import Analytics from "./pages/analytics";
import Architecture from "./pages/architecture";
import Videos from "./pages/video";
import Visualisations from "./pages/visualisations";
import Web_Development from "./pages/web_dev";
document.title = "The website of Peter Hanssens";

const BasicExample = () => (
  <Router>
    <div>
    <Container>
          <Menu pointing secondary stackable onSelect={k => this.handleSelect(k)}>
              <Menu.Item href="/">
                Home
              </Menu.Item>
              <Menu.Item href="/about">
                About Me
              </Menu.Item>
              <Menu.Item href="/analytics">
                Analytics
              </Menu.Item>
              <Menu.Item href="/architecture">
                Data Architecture
              </Menu.Item>
              <Menu.Item href="/videos">
                Videos
              </Menu.Item>
              <Menu.Item href="/visualisations">
                Visualisations
              </Menu.Item>
              <Menu.Item href="/web_dev">
                Web Development
              </Menu.Item>
          </Menu>
          <Container>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/analytics" component={Analytics} />
            <Route path="/architecture" component={Architecture} />
            <Route path="/videos" component={Videos} />
            <Route path="/visualisations" component={Visualisations} />
            <Route path="/web_dev" component={Web_Development} />
            </Container>
</Container>
  
    <Segment inverted vertical style={{ padding: '5em 5em', 'bottom': '0', 'width': '100%'}}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Sitemap</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
                <List.Item as='a'>
                <a href="/about">About Us
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
              <Header as='h4' inverted>Footer Header</Header>
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
    </div>
  </Router>
);

export default BasicExample;