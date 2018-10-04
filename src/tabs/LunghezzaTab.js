import React, { Component } from "react";

import Utils from "../utils/Utils.js";

import Section from "grommet/components/Section";
import NumberInput from "grommet/components/NumberInput";
import Paragraph from "grommet/components/Paragraph";
import Label from "grommet/components/Label";
import Select from "grommet/components/Select";

class LunghezzaTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lunghezza: 0,
      select: "chilometri",
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
        (this.state.lunghezza * this.switchSelect()) /
        Utils.DISTANZA_TERRA_LUNA,
      lunghezzacampocalcio:
        (this.state.lunghezza * this.switchSelect()) /
        Utils.LUNGHEZZA_CAMPO_CALCIO,
      piscinaolimpionicalunghezza:
        (this.state.lunghezza * this.switchSelect()) / Utils.PISCINA_OLIMPIONICA
    });
  };

  componentDidUpdate = () => {};

  handleChangeSelectLunghezza = (target, option, value) => {
    this.setState(
      {
        select: target.value
      },
      () => this.updateUI()
    );
  };

  switchSelect = () => {
    switch (this.state.select) {
      case "metri":
        return 1;
      case "chilometri":
        return 1000;
      default:
        this.setState({
          select: "metri"
        });
        return 1;
    }
  };

  render = () => {
    var earth = "emoji/earth.png";
    var moon = "emoji/moon.png";
    var soccer = "emoji/soccer.png";
    var swimmer = "emoji/swimmer.png";

    return (
      <div>
        <Section>
          <Label>Metri</Label>
          <NumberInput onChange={this.handleChangeLunghezza} />
          <Select
            options={["metri", "chilometri"]}
            inline={false}
            multiple={false}
            value={this.state.select}
            onChange={this.handleChangeSelectLunghezza}
          />
        </Section>
        <Section>
          <Paragraph size="large">
            <img src={swimmer} width="24" height="24" /> ~
            <strong>{this.state.piscinaolimpionicalunghezza.toFixed(2)}</strong>{" "}
            lunghezza di una piscina olimpionica
            <br />
            <img src={soccer} width="24" height="24" /> ~
            <strong>{this.state.lunghezzacampocalcio.toFixed(2)}</strong>{" "}
            lunghezza di un campo da calcio
            <br />
            <img src={earth} width="24" height="24" />{" "}
            <img src={moon} width="24" height="24" /> ~
            <strong>{this.state.terraluna.toFixed(2)}</strong> distanza
            Terra-Luna
          </Paragraph>
        </Section>
      </div>
    );
  };
}

export default LunghezzaTab;
