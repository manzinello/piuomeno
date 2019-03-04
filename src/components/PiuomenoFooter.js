import React, { Component } from "react";

import Paragraph from "grommet/components/Paragraph";
import Footer from "grommet/components/Footer";
import Box from "grommet/components/Box";

import PiuomenoVersion from "./PiuomenoVersion";

class PiuomenoFooter extends Component {
  render = () => {
    var love = "emoji/love.png";

    return (
      <div class="piuomeno-footer">
        <Footer justify="between" size="medium">
          <Box pad={{ between: "small" }}>
            <Paragraph margin="none">
              Più o meno (versione <PiuomenoVersion />
              ), creato con <img
                alt="love"
                src={love}
                width="24"
                height="24"
              />{" "}
              per{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://ilariaberetta.com"
              >
                <strong>Ilaria</strong>
              </a>{" "}
              da{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://matteomanzinello.com"
              >
                <strong>Matteo</strong>
              </a>
            </Paragraph>
            <Paragraph size="small" margin="none">
              Più o meno è un progetto <strong>open source</strong>, trovi tutto
              il suo codice su{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/manzinello/piuomeno"
              >
                GitHub
              </a>
            </Paragraph>
          </Box>
        </Footer>
      </div>
    );
  };
}

export default PiuomenoFooter;
