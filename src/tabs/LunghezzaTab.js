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
        (this.state.lunghezza * this.switchSelect()) / Utils.DISTANZA_TERRA_LUNA,
      lunghezzacampocalcio:
        (this.state.lunghezza * this.switchSelect()) / Utils.LUNGHEZZA_CAMPO_CALCIO,
      piscinaolimpionicalunghezza:
        (this.state.lunghezza * this.switchSelect()) / Utils.PISCINA_OLIMPIONICA
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
    var elephant = "emoji/elephant.png";
    var africa = "emoji/africa.png";
    var india = "emoji/india.png";
    var tree = "emoji/tree.png";
    var whale = "emoji/whale.png";
    var earth = "emoji/earth.png";
    var moon = "emoji/moon.png";
    var italy = "emoji/italy.png";
    var soccer = "emoji/soccer.png";
    var love = "emoji/love.png";
    var trex = "emoji/trex.png";
    var gorilla = "emoji/gorilla.png";
    var swimmer = "emoji/swimmer.png";
    var basket = "emoji/basket.png";
    var tennis = "emoji/tennis.png";
    var formica = "emoji/formica.png";
    var oceano = "emoji/oceano.png";
    var rino = "emoji/rino.png";

    var black = "emoji/black.png";
    var white = "emoji/white.png";

    return (
      <div>
        <Section>
          <Label>Metri</Label>
          <NumberInput onChange={this.handleChangeLunghezza} />
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
