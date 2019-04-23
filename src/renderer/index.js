import * as React from 'react'
import ReactDOM from 'react-dom'
import { H3, H5, Switch, Classes, Navbar, Button, Alignment } from "@blueprintjs/core";
import { Tab, Tabs } from "@blueprintjs/core";
import { Example, handleBooleanChange, IExampleProps } from "@blueprintjs/docs-theme"

import './app.scss'


class App extends React.Component {
  handleNavbarTabChange(navbarTabId) {
    this.setState({ navbarTabId })
  } 

  render() {
    const options = (
      <div>
          <H5>Props</H5>
      </div>
   );

    return (
      <div id="navi" className="skaffe-main bp3-dark">
        <Navbar>
          <Navbar.Group align={Alignment.LEFT}>
              <Navbar.Heading>Skaffe</Navbar.Heading>
              <Navbar.Divider />
              <Button className="bp3-minimal" icon="home" text="Home" />
              <Button className="bp3-minimal" icon="document" text="Files" />
          </Navbar.Group>
        </Navbar>        
        <Tabs id="TabsExample" onChange={this.handleTabChange} selectedTabId="rx">
          <Tab id="ng" title="Angular" panel={<AngularPanel />} />
          <Tab id="mb" title="Ember" panel={<EmberPanel />} panelClassName="ember-panel" />
          <Tab id="rx" title="React" panel={<ReactPanel />} />
          <Tab id="bb" disabled title="Backbone" panel={<BackbonePanel />} />
          <Tabs.Expander />
          <input className="bp3-input" type="text" placeholder="Search..." />
        </Tabs>
      </div>
    );
  }
}

const ReactPanel = () => (
  <div>
      <H3>Example panel: React</H3>
      <p className={Classes.RUNNING_TEXT}>
          Lots of people use React as the V in MVC. Since React makes no assumptions about the rest of your technology
          stack, it's easy to try it out on a small feature in an existing project.
      </p>
  </div>
);

const AngularPanel = () => (
  <div>
      <H3>Example panel: Angular</H3>
      <p className={Classes.RUNNING_TEXT}>
          HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic
          views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting
          environment is extraordinarily expressive, readable, and quick to develop.
      </p>
  </div>
);

const EmberPanel = () => (
  <div>
      <H3>Example panel: Ember</H3>
      <p className={Classes.RUNNING_TEXT}>
          Ember.js is an open-source JavaScript application framework, based on the model-view-controller (MVC)
          pattern. It allows developers to create scalable single-page web applications by incorporating common idioms
          and best practices into the framework. What is your favorite JS framework?
      </p>
      <input className={Classes.INPUT} type="text" />
  </div>
);

const BackbonePanel = () => (
  <div>
      <H3>Backbone</H3>
  </div>
);

ReactDOM.render( <App />, document.getElementById('app'));
