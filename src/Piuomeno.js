import React, { Component } from "react";

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

class Piuomeno extends Component {
  state = {
    peso: 0,
    superficie: 0,
    lunghezza: 0
  };

  handle = v => {
    this.setState({ v });
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
        </Tabs>
        <Footer justify="between" size="medium">
          <Box pad={{ between: "small" }}>
            <Paragraph margin="none">
              creato con <img alt="love" src={love} width="24" height="24" />{" "}
              per <strong>Ilaria</strong> da{" "}
              <a href="https://matteomanzinello.com">
                <strong>Matteo</strong>
              </a>
            </Paragraph>
            <Paragraph size="small" margin="none">
              Più o meno è un progetto <strong>open source</strong>, trovi tutto
              il suo codice su <a href="">GitHub</a>
            </Paragraph>
          </Box>
        </Footer>
      </App>
    );
  }
}

export default Piuomeno;
