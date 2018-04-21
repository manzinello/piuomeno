import React, { Component } from 'react';

import App from 'grommet/components/App'
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
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
          <Box flex={true}
            justify='end'
            direction='row'
            responsive={true}>
            <p>Testo</p>
          </Box>
        </Header>
        <NumberInput value={10}
          onChange={this.handleChange} />
      </App>
    );
  }
  
}

export default PiuomenoApp;
