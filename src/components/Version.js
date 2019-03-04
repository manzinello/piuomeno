import React from "react";

import { version } from "../../package.json";

class Version extends React.Component {
  render = () => {
    return version;
  };
}

export default Version;
