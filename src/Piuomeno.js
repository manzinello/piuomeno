import React, { Component } from "react";

import App from "grommet/components/App";
import Tabs from "grommet/components/Tabs";
import Tab from "grommet/components/Tab";

import Header from "grommet/components/Header";
import Title from "grommet/components/Title";

import PesoTab from "./tabs/PesoTab";
import SuperficieTab from "./tabs/SuperficieTab";
import LunghezzaTab from "./tabs/LunghezzaTab";
import ValutaTab from "./tabs/ValutaTab";

import PiuomenoFooter from "./components/PiuomenoFooter";

import "./piuomeno.css";

class Piuomeno extends Component {
  state = {
    peso: 0,
    superficie: 0,
    lunghezza: 0,
    eta: 0,
    valuta: 0
  };

  handle = v => {
    this.setState({ v });
  };

  componentDidMount = () => {};

  render() {
    var elephant = "emoji/elephant.png";

    return (
      <App className="piuomeno-app">
        <Header size="large">
          <Title className="piuomeno-title">
            <img alt="elephant" src={elephant} width="24" height="24" />
            {"Più o meno"}
          </Title>
        </Header>
        <Tabs responsive={true} justify="start">
          <Tab title="Peso">
            <PesoTab />
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
        <PiuomenoFooter />
      </App>
    );
  }
}

export default Piuomeno;
