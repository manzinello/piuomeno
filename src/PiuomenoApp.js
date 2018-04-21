import React, { Component } from 'react';

import App from 'grommet/components/App'
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';

class PiuomenoApp extends Component {
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
            <p>ciao</p>
          </Box>
        </Header>
      </App>
    );
  }
}

export default PiuomenoApp;
