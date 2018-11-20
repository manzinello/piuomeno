import React, { Component } from "react";

import Utils from "../utils/Utils.js";

import Section from "grommet/components/Section";
import NumberInput from "grommet/components/NumberInput";
import Paragraph from "grommet/components/Paragraph";
import Select from "grommet/components/Select";

import PiuomenoItem from "../components/PiuomenoItem";

class ValutaTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valuta: 0,
      select: "euro",
      goleador: 0
    };
  }

  handleChangeValuta = event => {
    this.setState(
      {
        valuta: event.target.value
      },
      () => this.updateUI()
    );
  };

  updateUI = () => {
    this.setState({
      goleador: (this.state.valuta * this.switchSelect()) / Utils.GOLEADOR
    });
  };

  componentDidUpdate = () => {};

  handleChangeSelectValuta = target => {
    this.setState(
      {
        select: target.value
      },
      () => this.updateUI()
    );
  };

  switchSelect = () => {
    switch (this.state.select) {
      case "euro":
        return 1;
      default:
        this.setState({
          select: "euro"
        });
        return 1;
    }
  };

  render = () => {
    return (
      <div>
        <Section>
          <NumberInput
            defaultValue={0}
            min={0}
            onChange={this.handleChangeValuta}
          />
          <div className="piuomeno-select">
            <Select
              options={["euro"]}
              inline={false}
              multiple={false}
              value={this.state.select}
              onChange={this.handleChangeSelectValuta}
            />
          </div>
        </Section>
        <Section>
          <Paragraph size="large">
            <PiuomenoItem
              tag={["goleador"]}
              value={this.state.goleador}
              text="goleador"
            />
          </Paragraph>
        </Section>
      </div>
    );
  };
}

export default ValutaTab;
