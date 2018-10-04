import React, { Component } from "react";

import Utils from "../utils/Utils.js";

import Section from "grommet/components/Section";
import NumberInput from "grommet/components/NumberInput";
import Paragraph from "grommet/components/Paragraph";
import Select from "grommet/components/Select";

import PiuomenoItem from "../components/PiuomenoItem";

class PesoTab extends Component {
  state = {
    peso: 0,
    select: "chilogrammi",
    elefantiafricani: 0,
    elefantiasiatici: 0,
    elefantiforeste: 0,
    balenottereazzurre: 0,
    trex: 0,
    gorilla: 0,
    formiche: 0,
    rinocerontenero: 0,
    rinoceronteindiano: 0,
    rinocerontebianco: 0
  };
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
    return (
      <div>
        <Section>
          <NumberInput onChange={this.handleChangePeso} />
          <div className="piuomeno-select">
            <Select
              options={["chilogrammi", "quintali", "tonnellate"]}
              inline={false}
              multiple={false}
              value={this.state.select}
              onChange={this.handleChangeSelectPeso}
            />
          </div>
        </Section>
        <Section>
          <Paragraph size="large">
            <PiuomenoItem
              tag={["formica"]}
              value={this.state.formiche}
              text="formiche"
            />
            <PiuomenoItem
              tag={["gorilla"]}
              value={this.state.gorilla}
              text="gorilla"
            />
            <PiuomenoItem
              tag={["rino", "black"]}
              value={this.state.rinocerontenero}
              text="rinoceronti neri"
            />
            <PiuomenoItem
              tag={["rino", "india"]}
              value={this.state.rinoceronteindiano}
              text="rinoceronti indiani"
            />
            <PiuomenoItem
              tag={["rino", "white"]}
              value={this.state.rinocerontebianco}
              text="rinoceronti bianchi"
            />
            <PiuomenoItem
              tag={["elephant", "tree"]}
              value={this.state.elefantiforeste}
              text="elefanti delle foreste"
            />
            <PiuomenoItem
              tag={["elephant", "india"]}
              value={this.state.elefantiasiatici}
              text="elefanti asiatici"
            />
            <PiuomenoItem
              tag={["elephant", "africa"]}
              value={this.state.elefantiafricani}
              text="elefanti africani"
            />
            <PiuomenoItem tag={["trex"]} value={this.state.trex} text="T-Rex" />
            <PiuomenoItem
              tag={["whale"]}
              value={this.state.balenottereazzurre}
              text="balenottere azzurre"
            />
          </Paragraph>
        </Section>
      </div>
    );
  };
}

export default PesoTab;
