import React, { Component } from "react";

import Utils from "../utils/Utils.js";

import Section from "grommet/components/Section";
import NumberInput from "grommet/components/NumberInput";
import Paragraph from "grommet/components/Paragraph";
import Select from "grommet/components/Select";

import PiuomenoItem from "../components/PiuomenoItem";

class SuperficieTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      superficie: 0,
      select: "metri quadrati",
      campidacalcio: 0,
      campidabasket: 0,
      campidatennis: 0,
      italia: 0,
      oceaniatlantici: 0,
      oceanipacifici: 0,
      terre: 0
    };
  }

  handleChangeSuperficie = event => {
    this.setState(
      {
        superficie: event.target.value
      },
      () => this.updateUI()
    );
  };

  updateUI = () => {
    this.setState({
      campidacalcio:
        (this.state.superficie * this.switchSelect()) / Utils.CAMPO_DA_CALCIO,
      campidabasket:
        (this.state.superficie * this.switchSelect()) / Utils.CAMPO_DA_BASKET,
      campidatennis:
        (this.state.superficie * this.switchSelect()) / Utils.CAMPO_DA_TENNIS,
      italia: (this.state.superficie * this.switchSelect()) / Utils.ITALIA,
      oceaniatlantici:
        (this.state.superficie * this.switchSelect()) / Utils.OCEANO_ATLANTICO,
      oceanipacifici:
        (this.state.superficie * this.switchSelect()) / Utils.OCEANO_PACIFICO,
      terre: (this.state.superficie * this.switchSelect()) / Utils.TERRA
    });
  };

  componentDidUpdate = () => {};

  handleChangeSelectSuperficie = target => {
    this.setState(
      {
        select: target.value
      },
      () => this.updateUI()
    );
  };

  switchSelect = () => {
    switch (this.state.select) {
      case "metri quadrati":
        return 1;
      case "chilometri quadrati":
        return 1000000;
      default:
        this.setState({
          select: "metri quadrati"
        });
        return 1;
    }
  };

  render = () => {
    return (
      <div>
        <Section>
          <NumberInput onChange={this.handleChangeSuperficie} />
          <div className="piuomeno-select">
            <Select
              options={["metri quadrati", "chilometri quadrati"]}
              inline={false}
              multiple={false}
              value={this.state.select}
              onChange={this.handleChangeSelectSuperficie}
            />
          </div>
        </Section>
        <Section>
          <Paragraph size="large">
            <PiuomenoItem
              tag={["tennis"]}
              value={this.state.campidatennis}
              text="campi da tennis"
            />
            <PiuomenoItem
              tag={["basket"]}
              value={this.state.campidabasket}
              text="campi da basket"
            />
            <PiuomenoItem
              tag={["soccer"]}
              value={this.state.campidacalcio}
              text="campi da calcio"
            />
            <PiuomenoItem
              tag={["italy"]}
              value={this.state.italia}
              text="Italie"
            />
            <PiuomenoItem
              tag={["oceano"]}
              value={this.state.oceaniatlantici}
              text="Oceani Atlantici"
            />
            <PiuomenoItem
              tag={["oceano"]}
              value={this.state.oceanipacifici}
              text="Oceani Pacifici"
            />
            <PiuomenoItem
              tag={["earth"]}
              value={this.state.terre}
              text="Terre"
            />
          </Paragraph>
        </Section>
      </div>
    );
  };
}

export default SuperficieTab;
