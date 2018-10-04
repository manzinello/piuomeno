import React, { Component } from "react";

import Section from "grommet/components/Section";
import NumberInput from "grommet/components/NumberInput";
import Paragraph from "grommet/components/Paragraph";
import Label from "grommet/components/Label";
import Select from "grommet/components/Select";

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
      peso: 0,
      select: "chilogrammi",
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
    this.setState(
      {
        peso: event.target.value
      },
      () => this.updateUI()
    );
  };

  updateUI = () => {
    this.setState({
      elefantiafricani:
        (this.state.peso * this.switchSelect()) / PESO_ELEFANTE_AFRICANO,
      elefantiasiatici:
        (this.state.peso * this.switchSelect()) / PESO_ELEFANTE_ASIATICO,
      elefantiforeste:
        (this.state.peso * this.switchSelect()) / PESO_ELEFANTE_FORESTE,
      balenottereazzurre:
        (this.state.peso * this.switchSelect()) / PESO_ELEFANTE_BALENOTTERA,
      trex: (this.state.peso * this.switchSelect()) / PESO_TREX,
      gorilla: (this.state.peso * this.switchSelect()) / PESO_GORILLA,
      formiche: (this.state.peso * this.switchSelect()) / PESO_FORMICA,
      rinocerontenero:
        (this.state.peso * this.switchSelect()) / PESO_RINOCERONTE_NERO,
      rinoceronteindiano:
        (this.state.peso * this.switchSelect()) / PESO_RINOCERONTE_INDIANO,
      rinocerontebianco:
        (this.state.peso * this.switchSelect()) / PESO_RINOCERONTE_BIANCO
    });
  };

  componentDidUpdate = () => {};

  handleChangeSelectPeso = (target, option, value) => {
    this.setState(
      {
        select: target.value
      },
      () => this.updateUI()
    );
  };

  switchSelect = () => {
    switch (this.state.select) {
      case "chilogrammi":
        return 1;
      case "quintali":
        return 100;
      case "tonnellate":
        return 1000;
      default:
        this.setState({
          select: "chilogrammi"
        });
        return 1;
    }
  };

  render = () => {
    let elephant = "emoji/elephant.png";
    let africa = "emoji/africa.png";
    let india = "emoji/india.png";
    let tree = "emoji/tree.png";
    let whale = "emoji/whale.png";
    let trex = "emoji/trex.png";
    let gorilla = "emoji/gorilla.png";
    let formica = "emoji/formica.png";
    let rino = "emoji/rino.png";

    let black = "emoji/black.png";
    let white = "emoji/white.png";

    return (
      <div>
        <Section>
          <Label>Chilogrammi</Label>
          <NumberInput onChange={this.handleChangePeso} />
          <Select
            options={["chilogrammi", "quintali", "tonnellate"]}
            inline={false}
            multiple={false}
            value={this.state.select}
            onChange={this.handleChangeSelectPeso}
          />
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
      </div>
    );
  };
}

export default PesoTab;
