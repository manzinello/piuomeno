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

import Emoji from "./components/Emoji";

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

class PesoTab extends Component {
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
  render = () => {
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
      <View>
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
            <strong>{this.state.rinocerontenero.toFixed(2)}</strong> rinoceronti
            neri
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
            <strong>{this.state.elefantiforeste.toFixed(2)}</strong> elefanti
            delle foreste
            <br />
            <img src={elephant} width="24" height="24" />{" "}
            <img src={india} width="24" height="24" /> ~
            <strong>{this.state.elefantiasiatici.toFixed(2)}</strong> elefanti
            asiatici
            <br />
            <img src={elephant} width="24" height="24" />{" "}
            <img src={africa} width="24" height="24" /> ~
            <strong>{this.state.elefantiafricani.toFixed(2)}</strong> elefanti
            africani
            <br />
            <img src={trex} width="24" height="24" /> ~
            <strong>{this.state.trex.toFixed(2)}</strong> T-Rex
            <br />
            <img src={whale} width="24" height="24" /> ~
            <strong>{this.state.balenottereazzurre.toFixed(2)}</strong>{" "}
            balenottere azzurre
          </Paragraph>
        </Section>
      </View>
    );
  };
}

export default PesoTab;
