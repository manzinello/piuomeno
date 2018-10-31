import React, { Component } from "react";

import Utils from "../utils/Utils.js";

import Section from "grommet/components/Section";
import NumberInput from "grommet/components/NumberInput";
import Paragraph from "grommet/components/Paragraph";
import Select from "grommet/components/Select";

import PiuomenoItem from "../components/PiuomenoItem";

class EtaTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eta: 0,
      select: "anni",
      goleador: 0
    };
  }

  handleChangeEta = event => {
    this.setState(
      {
        eta: event.target.value
      },
      () => this.updateUI()
    );
  };

  updateUI = () => {
    this.setState({
      goleador: (this.state.eta * this.switchSelect()) / Utils.GOLEADOR
    });
  };

  componentDidUpdate = () => {};

  handleChangeSelectEta = target => {
    this.setState(
      {
        select: target.value
      },
      () => this.updateUI()
    );
  };

  switchSelect = () => {
    switch (this.state.select) {
      case "anni":
        return 1;
      default:
        this.setState({
          select: "anni"
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
            onChange={this.handleChangeEta}
          />
          <div className="piuomeno-select">
            <Select
              options={["anni"]}
              inline={false}
              multiple={false}
              value={this.state.select}
              onChange={this.handleChangeSelectEta}
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

export default EtaTab;
