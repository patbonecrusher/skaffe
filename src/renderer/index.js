import React from 'react'
import ReactDOM from 'react-dom';

class MyComponent extends React.Component {
	render() {
	  return <h1>Hello {this.props.message}!</h1>;
	}
}
  
ReactDOM.render(<MyComponent message="World from pat hola" />, document.getElementById('app'));