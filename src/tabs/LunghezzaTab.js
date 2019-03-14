import React, { Component } from "react";

import Utils from "../utils/Utils.js";

import Section from "grommet/components/Section";
import NumberInput from "grommet/components/NumberInput";
import Paragraph from "grommet/components/Paragraph";
import Select from "grommet/components/Select";

import PiuomenoItem from "../components/PiuomenoItem";

import units from "../data/units";

class LunghezzaTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lunghezza: 0,
      select: "metri",
      terraluna: 0,
      lunghezzacampocalcio: 0,
      piscinaolimpionicalunghezza: 0,
      lunghezzaboeing747: 0
    };
  }

  handleChangeLunghezza = event => {
    this.setState(
      {
        lunghezza: event.target.value
      },
      () => this.updateUI()
    );
  };

  updateUI = () => {
    this.setState({
      terraluna:
        (this.state.lunghezza * units.lunghezza[this.state.select]) /
        Utils.DISTANZA_TERRA_LUNA,
      lunghezzacampocalcio:
        (this.state.lunghezza * units.lunghezza[this.state.select]) /
        Utils.LUNGHEZZA_CAMPO_CALCIO,
      piscinaolimpionicalunghezza:
        (this.state.lunghezza * units.lunghezza[this.state.select]) /
        Utils.PISCINA_OLIMPIONICA,
      lunghezzaboeing747:
        (this.state.lunghezza * units.lunghezza[this.state.select]) /
        Utils.LUNGHEZZA_BOEING747
    });
  };

  componentDidUpdate = () => {};

  handleChangeSelectLunghezza = target => {
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
            onChange={this.handleChangeLunghezza}
          />
          <div className="piuomeno-select">
            <Select
              options={["metri", "chilometri"]}
              inline={false}
              multiple={false}
              value={this.state.select}
              onChange={this.handleChangeSelectLunghezza}
            />
          </div>
        </Section>
        <Section>
          <Paragraph size="large">
            <PiuomenoItem
              tag={["swimmer"]}
              value={this.state.piscinaolimpionicalunghezza}
              text="lunghezza di una piscina olimpionica"
            />
            <PiuomenoItem
              tag={["plane"]}
              value={this.state.lunghezzaboeing747}
              text="Boeing 747-400"
            />
            <PiuomenoItem
              tag={["soccer"]}
              value={this.state.lunghezzacampocalcio}
              text="lunghezza di un campo da calcio"
            />
            <PiuomenoItem
              tag={["earth", "moon"]}
              value={this.state.terraluna}
              text="distanza Terra-Luna"
            />
          </Paragraph>
        </Section>
      </div>
    );
  };
}

export default LunghezzaTab;
