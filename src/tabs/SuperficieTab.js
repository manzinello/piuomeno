import React, { Component } from "react";

import Utils from "../utils/Utils.js";

import Section from "grommet/components/Section";
import NumberInput from "grommet/components/NumberInput";
import Paragraph from "grommet/components/Paragraph";
import Select from "grommet/components/Select";

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
    let earth = "emoji/earth.png";
    let italy = "emoji/italy.png";
    let soccer = "emoji/soccer.png";
    let basket = "emoji/basket.png";
    let tennis = "emoji/tennis.png";
    let oceano = "emoji/oceano.png";

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
            <img alt="tennis" src={tennis} width="24" height="24" /> ~
            <strong>{this.state.campidatennis.toFixed(2)}</strong> campi da
            tennis
            <br />
            <img alt="basket" src={basket} width="24" height="24" /> ~
            <strong>{this.state.campidabasket.toFixed(2)}</strong> campi da
            basket
            <br />
            <img alt="soccer" src={soccer} width="24" height="24" /> ~
            <strong>{this.state.campidacalcio.toFixed(2)}</strong> campi da
            calcio
            <br />
            <img alt="italy" src={italy} width="24" height="24" /> ~
            <strong>{this.state.italia.toFixed(2)}</strong> Italie
            <br />
            <img alt="oceano" src={oceano} width="24" height="24" /> ~
            <strong>{this.state.oceaniatlantici.toFixed(2)}</strong> Oceani
            Atlantici
            <br />
            <img alt="oceano" src={oceano} width="24" height="24" /> ~
            <strong>{this.state.oceanipacifici.toFixed(2)}</strong> Oceani
            Pacifici
            <br />
            <img alt="earth" src={earth} width="24" height="24" /> ~
            <strong>{this.state.terre.toFixed(2)}</strong> Terre
          </Paragraph>
        </Section>
      </div>
    );
  };
}

export default SuperficieTab;
