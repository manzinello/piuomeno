import React, { Component } from "react";

import Utils from "../utils/Utils.js";

import Section from "grommet/components/Section";
import NumberInput from "grommet/components/NumberInput";
import Paragraph from "grommet/components/Paragraph";
import Select from "grommet/components/Select";

import PiuomenoItem from "../components/PiuomenoItem";

import units from "../data/units";

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
    rinocerontebianco: 0,
    matteomanzinellopeso: 0,
    boeing747peso: 0,
    toureiffel: 0,
    tirvuoto: 0
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
        (this.state.peso * units.peso[this.state.select]) /
        Utils.PESO_ELEFANTE_AFRICANO,
      elefantiasiatici:
        (this.state.peso * units.peso[this.state.select]) /
        Utils.PESO_ELEFANTE_ASIATICO,
      elefantiforeste:
        (this.state.peso * units.peso[this.state.select]) /
        Utils.PESO_ELEFANTE_FORESTE,
      balenottereazzurre:
        (this.state.peso * units.peso[this.state.select]) /
        Utils.PESO_BALENOTTERA,
      trex: (this.state.peso * units.peso[this.state.select]) / Utils.PESO_TREX,
      gorilla:
        (this.state.peso * units.peso[this.state.select]) / Utils.PESO_GORILLA,
      formiche:
        (this.state.peso * units.peso[this.state.select]) / Utils.PESO_FORMICA,
      rinocerontenero:
        (this.state.peso * units.peso[this.state.select]) /
        Utils.PESO_RINOCERONTE_NERO,
      rinoceronteindiano:
        (this.state.peso * units.peso[this.state.select]) /
        Utils.PESO_RINOCERONTE_INDIANO,
      rinocerontebianco:
        (this.state.peso * units.peso[this.state.select]) /
        Utils.PESO_RINOCERONTE_BIANCO,
      matteomanzinellopeso:
        (this.state.peso * units.peso[this.state.select]) /
        Utils.MATTEOMANZINELLO_PESO,
      boeing747peso:
        (this.state.peso * units.peso[this.state.select]) /
        Utils.PESO_BOEING747,
      tirvuoto:
        (this.state.peso * units.peso[this.state.select]) /
        Utils.TIR_VUOTO_PESO,
      toureiffel:
        (this.state.peso * units.peso[this.state.select]) /
        Utils.PESO_TOUR_EIFFEL
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

  render = () => {
    return (
      <div>
        <Section>
          <NumberInput
            defaultValue={0}
            min={0}
            onChange={this.handleChangePeso}
          />
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
              tag={["matteomanzinello-favicon"]}
              value={this.state.matteomanzinellopeso}
              text="Matteo Manzinello"
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
              tag={["tir"]}
              value={this.state.tirvuoto}
              text="tir vuoti"
            />
            <PiuomenoItem
              tag={["whale"]}
              value={this.state.balenottereazzurre}
              text="balenottere azzurre"
            />
            <PiuomenoItem
              tag={["plane"]}
              value={this.state.boeing747peso}
              text="Boeing 747"
            />
            <PiuomenoItem
              tag={["tour"]}
              value={this.state.toureiffel}
              text="Tour Eiffel"
            />
          </Paragraph>
        </Section>
      </div>
    );
  };
}

export default PesoTab;
