import React, { Component } from 'react';

import App from 'grommet/components/App'
import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab';

import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Section from 'grommet/components/Section';
import NumberInput from 'grommet/components/NumberInput';
import Paragraph from 'grommet/components/Paragraph';
import Footer from 'grommet/components/Footer';
import Box from 'grommet/components/Box';
import Label from 'grommet/components/Label';

import Emoji from './components/Emoji'

const PESO_ELEFANTE_AFRICANO = 6000;
const PESO_ELEFANTE_ASIATICO = 5400;
const PESO_ELEFANTE_FORESTE = 2700;
const PESO_ELEFANTE_BALENOTTERA = 140000;

class PiuomenoApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      elefantiafricani: 0,
      elefantiasiatici: 0,
      elefantiforeste: 0,
      balenottereazzurre: 0,
    };
  }

  handleChange = (event) => {
    this.setState({
      elefantiafricani: event.target.value / PESO_ELEFANTE_AFRICANO,
      elefantiasiatici: event.target.value / PESO_ELEFANTE_ASIATICO,
      elefantiforeste: event.target.value / PESO_ELEFANTE_FORESTE,
      balenottereazzurre: event.target.value / PESO_ELEFANTE_BALENOTTERA,
    })
  }

  render() {
    return (
      <App>
        <Header>
          <Title>
            Più o meno
          </Title>
        </Header>
        <Tabs responsive={false}
          justify='start'>
          <Tab title='Peso'>
            <Section>
              <Label>
                Chilogrammi
            </Label>
              <NumberInput
                onChange={this.handleChange} />
            </Section>
            <Section>
              <Paragraph size='large'>
                <Emoji e="🐘" /><Emoji e="🇨🇬" /> ~<strong>{this.state.elefantiafricani.toFixed(2)}</strong> elefanti africani
            <br />
                <Emoji e="🐘" /><Emoji e="🇨🇳" /> ~<strong>{this.state.elefantiasiatici.toFixed(2)}</strong> elefanti asiatici
            <br />
                <Emoji e="🐘" /><Emoji e="🌳" /> ~<strong>{this.state.elefantiforeste.toFixed(2)}</strong> elefanti delle foreste
            <br />
                <Emoji e="🐳" /> ~<strong>{this.state.balenottereazzurre.toFixed(2)}</strong> balenottere azzurre
          </Paragraph>
            </Section>
          </Tab>
          <Tab title='Distanza'>
            <Paragraph>
              Work in progress!
            </Paragraph>
          </Tab>
        </Tabs>
        <Footer justify='between'
          size='medium'>
          <Box direction='row'
            align='center'
            pad={{ "between": "medium" }}>
            <Paragraph margin='none'>
              creato con <Emoji e="❤️" /> da <a href="https://matteomanzinello.com"><strong>Matteo Manzinello</strong></a>
            </Paragraph>
          </Box>
        </Footer>
      </App>
    );
  }

}

export default PiuomenoApp;
