import * as React from 'react';
import { H3, H5, Classes, Navbar, Button, Alignment } from "@blueprintjs/core";

import './header.scss'


class Header extends React.Component {

  render() {
    return (
      <div id="header">
        <Navbar>
          <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading>Skaffe</Navbar.Heading>
            <Navbar.Divider />
            <Button className="bp3-minimal" icon="home" text="Home" />
            <Button className="bp3-minimal" icon="document" text="Files" />
            <Button className="bp3-minimal" icon="document" text="Fileass" />
          </Navbar.Group>
        </Navbar>
      </div>
    );
  }
}

export default Header;