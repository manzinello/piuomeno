import React, { Component } from "react";

require("dotenv").config();

import App from "grommet/components/App";
import Tabs from "grommet/components/Tabs";
import Tab from "grommet/components/Tab";

import Header from "grommet/components/Header";
import Title from "grommet/components/Title";
import Paragraph from "grommet/components/Paragraph";
import Footer from "grommet/components/Footer";
import Box from "grommet/components/Box";

import PesoTab from "./tabs/PesoTab";
import SuperficieTab from "./tabs/SuperficieTab";
import LunghezzaTab from "./tabs/LunghezzaTab";
import ValutaTab from "./tabs/ValutaTab";

import PiuomenoVersion from "./components/PiuomenoVersion";

const contentful = require("contentful");
const client = contentful.createClient({
  space: "ngkko1w843tf",
  accessToken:
    "96f66a8f02f3078f739071aed3e90664f69f70237fc82d3298c29f5dbed31115"
});

class Piuomeno extends Component {
  state = {
    peso: 0,
    superficie: 0,
    lunghezza: 0
  };

  handle = v => {
    this.setState({ v });
  };

  componentDidMount = () => {
    client
      .getEntries()
      .then(response => console.log(response.items))
      .catch(console.error);
  };

  render() {
    var love = "emoji/love.png";
    var elephant = "emoji/elephant.png";

    return (
      <App>
        <Header size="large">
          <Title>
            <img alt="elephant" src={elephant} width="24" height="24" />
            {"Più o meno"}
          </Title>
        </Header>
        <Tabs responsive={false} justify="start">
          <Tab title="Peso">
            <PesoTab peso={this.handle} />
          </Tab>
          <Tab title="Lunghezza">
            <LunghezzaTab />
          </Tab>
          <Tab title="Superficie">
            <SuperficieTab />
          </Tab>
          <Tab title="Valuta">
            <ValutaTab />
          </Tab>
        </Tabs>
        <Footer justify="between" size="medium">
          <Box pad={{ between: "small" }}>
            <Paragraph margin="none">
              Più o meno (versione <PiuomenoVersion />
              ), creato con <img
                alt="love"
                src={love}
                width="24"
                height="24"
              />{" "}
              per <strong>Ilaria</strong> da{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://matteomanzinello.com"
              >
                <strong>Matteo</strong>
              </a>
            </Paragraph>
            <Paragraph size="small" margin="none">
              Più o meno è un progetto <strong>open source</strong>, trovi tutto
              il suo codice su{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/manzinello/piuomeno"
              >
                GitHub
              </a>
            </Paragraph>
          </Box>
        </Footer>
      </App>
    );
  }
}

export default Piuomeno;
