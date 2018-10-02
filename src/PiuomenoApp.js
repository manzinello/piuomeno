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

import Emoji from "@components/Emoji";

// In chilogrammi
const PESO_FORMICA = 0.000006;
const PESO_GORILLA = 160;
const PESO_RINOCERONTE_NERO = 1100;
const PESO_RINOCERONTE_INDIANO = 2100;
const PESO_RINOCERONTE_BIANCO = 2300;
const PESO_ELEFANTE_FORESTE = 2700;
const PESO_ELEFANTE_ASIATICO = 5400;
const PESO_ELEFANTE_AFRICANO = 6000;
const PESO_TREX = 6100;
const PESO_ELEFANTE_BALENOTTERA = 140000;

// In metri
const PISCINA_OLIMPIONICA = 50;
const LUNGHEZZA_CAMPO_CALCIO = 105;
const DISTANZA_TERRA_LUNA = 384400000;

// In metri quadrati
const CAMPO_DA_TENNIS = 260.8666;
const CAMPO_DA_BASKET = 420;
const CAMPO_DA_CALCIO = 7140;
const ITALIA = 301338000000;
const OCEANO_ATLANTICO = 106500000000000;
const OCEANO_PACIFICO = 161800000000000;
const TERRA = 510100000000000;

class PiuomenoApp extends Component {
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

  handleChangePeso = event => {
    this.setState({
      elefantiafricani: event.target.value / PESO_ELEFANTE_AFRICANO,
      elefantiasiatici: event.target.value / PESO_ELEFANTE_ASIATICO,
      elefantiforeste: event.target.value / PESO_ELEFANTE_FORESTE,
      balenottereazzurre: event.target.value / PESO_ELEFANTE_BALENOTTERA,
      trex: event.target.value / PESO_TREX,
      gorilla: event.target.value / PESO_GORILLA,
      formiche: event.target.value / PESO_FORMICA,
      rinocerontenero: event.target.value / PESO_RINOCERONTE_NERO,
      rinoceronteindiano: event.target.value / PESO_RINOCERONTE_INDIANO,
      rinocerontebianco: event.target.value / PESO_RINOCERONTE_BIANCO
    });
  };

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
            <Section>
              <Label>Chilogrammi</Label>
              <NumberInput onChange={this.handleChangePeso} />
            </Section>
            <Section>
              <Paragraph size="large">
                <img src={formica} width="24" height="24" /> ~
                <strong>{this.state.formiche.toFixed(2)}</strong> formiche
                <br />
                <img src={gorilla} width="24" height="24" /> ~
                <strong>{this.state.gorilla.toFixed(2)}</strong> gorilla
                <br />
                <img src={rino} width="24" height="24" />{" "}
                <img src={black} width="24" height="24" /> ~
                <strong>{this.state.rinocerontenero.toFixed(2)}</strong>{" "}
                rinoceronti neri
                <br />
                <img src={rino} width="24" height="24" />{" "}
                <img src={india} width="24" height="24" /> ~
                <strong>{this.state.rinoceronteindiano.toFixed(2)}</strong>{" "}
                rinoceronti indiani
                <br />
                <img src={rino} width="24" height="24" />{" "}
                <img src={white} width="24" height="24" /> ~
                <strong>{this.state.rinocerontebianco.toFixed(2)}</strong>{" "}
                rinoceronti bianchi
                <br />
                <img src={elephant} width="24" height="24" />{" "}
                <img src={tree} width="24" height="24" /> ~
                <strong>{this.state.elefantiforeste.toFixed(2)}</strong>{" "}
                elefanti delle foreste
                <br />
                <img src={elephant} width="24" height="24" />{" "}
                <img src={india} width="24" height="24" /> ~
                <strong>{this.state.elefantiasiatici.toFixed(2)}</strong>{" "}
                elefanti asiatici
                <br />
                <img src={elephant} width="24" height="24" />{" "}
                <img src={africa} width="24" height="24" /> ~
                <strong>{this.state.elefantiafricani.toFixed(2)}</strong>{" "}
                elefanti africani
                <br />
                <img src={trex} width="24" height="24" /> ~
                <strong>{this.state.trex.toFixed(2)}</strong> T-Rex
                <br />
                <img src={whale} width="24" height="24" /> ~
                <strong>{this.state.balenottereazzurre.toFixed(2)}</strong>{" "}
                balenottere azzurre
              </Paragraph>
            </Section>
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

export default PiuomenoApp;
