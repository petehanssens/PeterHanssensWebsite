import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Image, Container, Menu, Icon, Header } from "semantic-ui-react";
import presenting from "./images/linkedin_background.png";
import 'semantic-ui-css/semantic.min.css';
import Home from "./pages/home";
import About from "./pages/about";
import Analytics from "./pages/analytics";
import Architecture from "./pages/architecture";
import Videos from "./pages/video";
import Visualisations from "./pages/visualisations";
import Web_Development from "./pages/web_dev";
import Footer from './footer';
document.title = "The website of Peter Hanssens";

const BasicExample = () => (
  <Router>
    <div>
    {/* <Image src={presenting} fluid /> */}
      <Container>
            <Menu pointing secondary stackable onSelect={k => this.handleSelect(k)}>
                <Menu.Item href="/">
                  <h4>
                    <Icon name='home' /> Home
                  </h4>
                </Menu.Item>
                <Menu.Item href="/about">
                  <h4>
                  <Icon name='meh' /> About Me
                  </h4>
                </Menu.Item>
                <Menu.Item href="/analytics">
                  <h4>
                  <Icon name='search' /> Analytics
                  </h4>
                </Menu.Item>
                <Menu.Item href="/architecture">
                  <h4>
                  <Icon name='database' /> Data Architecture
                  </h4>
                </Menu.Item>
                <Menu.Item href="/videos">
                  <h4>
                  <Icon name='video' /> Videos
                  </h4>
                </Menu.Item>
                <Menu.Item href="/visualisations">
                  <h4>
                  <Icon name='home' /> Visualisations
                  </h4>
                </Menu.Item>
                <Menu.Item href="/web_dev">
                  <h4>
                  <Icon name='at' /> Web Development
                  </h4>
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
  
      <Footer />
    </div>
  </Router>
);

export default BasicExample;