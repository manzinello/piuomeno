import React, { Component } from "react";

import Utils from "../utils/Utils.js";

import Section from "grommet/components/Section";
import NumberInput from "grommet/components/NumberInput";
import Paragraph from "grommet/components/Paragraph";
import Label from "grommet/components/Label";
import Select from "grommet/components/Select";

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
        (this.state.peso * this.switchSelect()) / Utils.PESO_ELEFANTE_AFRICANO,
      elefantiasiatici:
        (this.state.peso * this.switchSelect()) / Utils.PESO_ELEFANTE_ASIATICO,
      elefantiforeste:
        (this.state.peso * this.switchSelect()) / Utils.PESO_ELEFANTE_FORESTE,
      balenottereazzurre:
        (this.state.peso * this.switchSelect()) /
        Utils.PESO_ELEFANTE_BALENOTTERA,
      trex: (this.state.peso * this.switchSelect()) / Utils.PESO_TREX,
      gorilla: (this.state.peso * this.switchSelect()) / Utils.PESO_GORILLA,
      formiche: (this.state.peso * this.switchSelect()) / Utils.PESO_FORMICA,
      rinocerontenero:
        (this.state.peso * this.switchSelect()) / Utils.PESO_RINOCERONTE_NERO,
      rinoceronteindiano:
        (this.state.peso * this.switchSelect()) /
        Utils.PESO_RINOCERONTE_INDIANO,
      rinocerontebianco:
        (this.state.peso * this.switchSelect()) / Utils.PESO_RINOCERONTE_BIANCO
    });
  };

  componentDidUpdate = () => {};

  handleChangeSelectPeso = target => {
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
    var elephant = "emoji/elephant.png";
    var africa = "emoji/africa.png";
    var india = "emoji/india.png";
    var tree = "emoji/tree.png";
    var whale = "emoji/whale.png";
    var trex = "emoji/trex.png";
    var gorilla = "emoji/gorilla.png";
    var formica = "emoji/formica.png";
    var rino = "emoji/rino.png";

    var black = "emoji/black.png";
    var white = "emoji/white.png";

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
