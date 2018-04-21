import React, { Component } from 'react';

import App from 'grommet/components/App'
import Header from 'grommet/components/Header';
import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab';
import Paragraph from 'grommet/components/Paragraph';
import Title from 'grommet/components/Title';
import Section from 'grommet/components/Section';
import NumberInput from 'grommet/components/NumberInput';
import Footer from 'grommet/components/Footer';
import Box from 'grommet/components/Box';

class PiuomenoApp extends Component {

  handleChange(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <App>
        <Header>
          <Title>
            Più o meno
          </Title>
        </Header>
        <Tabs>
          <Tab title='Peso'>
            <Paragraph>
              First contents
    </Paragraph>
            <input type='text'
              value=''
              onChange={this.handleChange} />
          </Tab>
          <Tab title='Distanza'>
            <Paragraph>
              Second contents
    </Paragraph>
            <input type='text'
              value=''
              onChange={this.handleChange} />
          </Tab>
        </Tabs>
        <Footer justify='between'
          size='large'>
          <Box direction='row'
            align='center'
            pad={{ "between": "medium" }}>
            <Paragraph margin='none'>
              sviluppato con amore (e React) da Matteo Manzinello
    </Paragraph>
          </Box>
        </Footer>
      </App>
    );
  }

}

export default PiuomenoApp;
