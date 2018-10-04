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
  constructor(props) {
    super(props);
  }

  handleChangeVolume = event => {
    console.log(event.target.value);
  };

  render() {
    var love = "emoji/love.png";
    var elephant = "emoji/elephant.png";

    return (
      <App>
        <Header size="large">
          <Title>
            <img src={elephant} width="24" height="24" /> Più o meno
          </Title>
        </Header>
        <Tabs responsive={false} justify="start">
          <Tab title="Peso">
            <PesoTab />
          </Tab>
          <Tab title="Lunghezza">
            <LunghezzaTab />
          </Tab>
          <Tab title="Superficie">
            <SuperficieTab />
          </Tab>
        </Tabs>
        <Footer justify="between" size="medium">
          <Box direction="row" align="center" pad={{ between: "medium" }}>
            <Paragraph margin="none">
              creato con <img src={love} width="24" height="24" /> per{" "}
              <strong>Ilaria</strong> da{" "}
              <a href="https://matteomanzinello.com">
                <strong>Matteo</strong>
              </a>
            </Paragraph>
          </Box>
        </Footer>
      </App>
    );
  }
}

export default Piuomeno;
