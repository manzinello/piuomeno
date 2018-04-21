import React, { Component } from 'react';

import App from 'grommet/components/App'
import Header from 'grommet/components/Header';
import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab';
import Paragraph from 'grommet/components/Paragraph';
import Title from 'grommet/components/Title';
import Section from 'grommet/components/Section';
import NumberInput from 'grommet/components/NumberInput';

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
          <Tab title='First Title'>
            <Paragraph>
              First contents
    </Paragraph>
            <input type='text'
              value=''
              onChange={this.handleChange} />
          </Tab>
          <Tab title='Second Title'>
            <Paragraph>
              Second contents
    </Paragraph>
            <input type='text'
              value=''
              onChange={this.handleChange} />
          </Tab>
        </Tabs>
      </App>
    );
  }

}

export default PiuomenoApp;
