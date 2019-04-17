// import React from 'react'
// import ReactDOM from 'react-dom';

// class MyComponent extends React.Component {
// 	render() {
// 	  return <h1>Hello {this.props.message}!</h1>;
// 	}
// }
  
// ReactDOM.render(<MyComponent message="World from pat hola" />, document.getElementById('app'));

// import React from 'react'
// import ReactDOM from 'react-dom';
// import { Card, CardTitle, CardText, CardActions, Button, RaisedButton } from 'react-md'

// import './styles.scss'

// class App extends React.Component {
//   render() {
//     return (
//       <div className="md-grid">
//         <Card className="md-cell">
//           <CardTitle title="Hello, World!" />
//           <h5>Theme Examples</h5>
//           {/* <CardText primary>
//             Lorem ipsum... pretend more ...
//           </CardText> */}
//           <CardActions>
//             <Button raised primary>Action 1</Button>
//             <Button flat secondary>Action 2</Button>
//           </CardActions>
//         </Card>
//       </div>
//     );
//   }
// }

// ReactDOM.render( <App />, document.getElementById('app'));

import React from 'react'
import ReactDOM from 'react-dom';
import { Navbar, Button, Alignment } from "@blueprintjs/core";

import './app.scss'

class App extends React.Component {
    render() {
      return (
        <Navbar className="bp3-dark">
            <Navbar.Group align={Alignment.LEFT}>
                <Navbar.Heading>Blueprint</Navbar.Heading>
                <Navbar.Divider />
                <Button className="bp3-minimal" icon="home" text="Home" />
                <Button className="bp3-minimal" icon="document" text="Files" />
            </Navbar.Group>
        </Navbar>        
      );
    }
}

ReactDOM.render( <App />, document.getElementById('app'));
