import React, { Component } from "react";

import App from "grommet/components/App";
import Tabs from "grommet/components/Tabs";
import Tab from "grommet/components/Tab";

import Header from "grommet/components/Header";
import Title from "grommet/components/Title";
import Section from "grommet/components/Section";
import NumberInput from "grommet/components/NumberInput";
import Paragraph from "grommet/components/Paragraph";
import Footer from "grommet/components/Footer";
import Box from "grommet/components/Box";
import Label from "grommet/components/Label";
import Select from "grommet/components/Select";

import PesoTab from "./tabs/PesoTab";

class Piuomeno extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      elefantiafricani: 0,
      elefantiasiatici: 0,
      elefantiforeste: 0,
      balenottereazzurre: 0,
      trex: 0,
      campidacalcio: 0,
      campidabasket: 0,
      campidatennis: 0,
      terraluna: 0,
      italia: 0,
      gorilla: 0,
      piscinaolimpionicalunghezza: 0,
      formiche: 0,
      oceaniatlantici: 0,
      oceanipacifici: 0,
      lunghezzacampocalcio: 0,
      rinocerontenero: 0,
      rinoceronteindiano: 0,
      rinocerontebianco: 0,
      terre: 0
    };
  }

  handleChangeSuperficie = event => {
    this.setState({
      campidacalcio: event.target.value / CAMPO_DA_CALCIO,
      campidabasket: event.target.value / CAMPO_DA_BASKET,
      campidatennis: event.target.value / CAMPO_DA_TENNIS,
      italia: event.target.value / ITALIA,
      oceaniatlantici: event.target.value / OCEANO_ATLANTICO,
      oceanipacifici: event.target.value / OCEANO_PACIFICO,
      terre: event.target.value / TERRA
    });
  };

  handleChangeLunghezza = event => {
    this.setState({
      terraluna: event.target.value / DISTANZA_TERRA_LUNA,
      lunghezzacampocalcio: event.target.value / LUNGHEZZA_CAMPO_CALCIO,
      piscinaolimpionicalunghezza: event.target.value / PISCINA_OLIMPIONICA
    });
  };

  handleChangeVolume = event => {
    console.log(event.target.value);
  };

  render() {
    var elephant = "emoji/elephant.png";
    var africa = "emoji/africa.png";
    var india = "emoji/india.png";
    var tree = "emoji/tree.png";
    var whale = "emoji/whale.png";
    var earth = "emoji/earth.png";
    var moon = "emoji/moon.png";
    var italy = "emoji/italy.png";
    var soccer = "emoji/soccer.png";
    var love = "emoji/love.png";
    var trex = "emoji/trex.png";
    var gorilla = "emoji/gorilla.png";
    var swimmer = "emoji/swimmer.png";
    var basket = "emoji/basket.png";
    var tennis = "emoji/tennis.png";
    var formica = "emoji/formica.png";
    var oceano = "emoji/oceano.png";
    var rino = "emoji/rino.png";

    var black = "emoji/black.png";
    var white = "emoji/white.png";

    return (
      <App>
        <Header size="large">
          <Title>Più o meno ~</Title>
        </Header>
        <Tabs responsive={false} justify="start">
          <Tab title="Peso">
            <PesoTab />
          </Tab>
          <Tab title="Lunghezza">
            <Section>
              <Label>Metri</Label>
              <NumberInput onChange={this.handleChangeLunghezza} />
            </Section>
            <Section>
              <Paragraph size="large">
                <img src={swimmer} width="24" height="24" /> ~
                <strong>
                  {this.state.piscinaolimpionicalunghezza.toFixed(2)}
                </strong>{" "}
                lunghezza di una piscina olimpionica
                <br />
                <img src={soccer} width="24" height="24" /> ~
                <strong>{this.state.lunghezzacampocalcio.toFixed(2)}</strong>{" "}
                lunghezza di un campo da calcio
                <br />
                <img src={earth} width="24" height="24" />{" "}
                <img src={moon} width="24" height="24" /> ~
                <strong>{this.state.terraluna.toFixed(2)}</strong> distanza
                Terra-Luna
              </Paragraph>
            </Section>
          </Tab>
          <Tab title="Superficie">
            <Section>
              <Label>Metri quadrati</Label>
              <NumberInput onChange={this.handleChangeSuperficie} />
            </Section>
            <Section>
              <Paragraph size="large">
                <img src={tennis} width="24" height="24" /> ~
                <strong>{this.state.campidatennis.toFixed(2)}</strong> campi da
                tennis
                <br />
                <img src={basket} width="24" height="24" /> ~
                <strong>{this.state.campidabasket.toFixed(2)}</strong> campi da
                basket
                <br />
                <img src={soccer} width="24" height="24" /> ~
                <strong>{this.state.campidacalcio.toFixed(2)}</strong> campi da
                calcio
                <br />
                <img src={italy} width="24" height="24" /> ~
                <strong>{this.state.italia.toFixed(2)}</strong> Italie
                <br />
                <img src={oceano} width="24" height="24" /> ~
                <strong>{this.state.oceaniatlantici.toFixed(2)}</strong> Oceani
                Atlantici
                <br />
                <img src={oceano} width="24" height="24" /> ~
                <strong>{this.state.oceanipacifici.toFixed(2)}</strong> Oceani
                Pacifici
                <br />
                <img src={earth} width="24" height="24" /> ~
                <strong>{this.state.terre.toFixed(2)}</strong> Terre
              </Paragraph>
            </Section>
          </Tab>
          <Tab title="Volume">
            <Section>
              <Label>Metri cubi</Label>
              <NumberInput onChange={this.handleChangeVolume} />
            </Section>
            <Section>
              <Paragraph size="large">Ci stiamo lavorando!</Paragraph>
            </Section>
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
