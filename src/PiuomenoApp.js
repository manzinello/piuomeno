import React, { Component } from 'react';

import App from 'grommet/components/App'
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Section from 'grommet/components/Section';
import NumberInput from 'grommet/components/NumberInput';
import Paragraph from 'grommet/components/Paragraph';
import Footer from 'grommet/components/Footer';
import Box from 'grommet/components/Box';
import Label from 'grommet/components/Label';

import Emoji from './components/Emoji'

class PiuomenoApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      num: props.num,
      elefanti: 0
    };
  }

  handleChange = (event) => {
    this.setState({
      elefanti: event.target.value / 4500
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
        <Section>
          <Label>
            Chilogrammi
            </Label>
          <NumberInput
            onChange={this.handleChange} />
        </Section>
        <Section>
          <Paragraph size='xlarge'>
            <Emoji e="🐘" /> {this.state.elefanti}
          </Paragraph>
        </Section>
        <Footer justify='between'
          size='medium'>
          <Box direction='row'
            align='center'
            pad={{ "between": "medium" }}>
            <Paragraph margin='none'>
              creato con amore (e React) da <strong>Matteo Manzinello</strong>
            </Paragraph>
          </Box>
        </Footer>
      </App>
    );
  }

}

export default PiuomenoApp;
