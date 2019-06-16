import * as React from 'react'
import ReactDOM from 'react-dom'
import { H3, H5, Switch, Classes, Navbar, Button, Alignment } from "@blueprintjs/core";
import { Example, handleBooleanChange, IExampleProps } from "@blueprintjs/docs-theme"
import { Header, ProjectViewer, TitleBar, StatusBar } from './components';
import { ProjectsView } from './views';

import './app.scss'


class App extends React.Component {
  render() {
    return (
      <div id="navi" className="skaffe-main bp3-dark">
        <TitleBar></TitleBar>
        <ProjectsView></ProjectsView>
        <StatusBar></StatusBar>
      </div>
    );
  }
}


ReactDOM.render( <App />, document.getElementById('app'));
