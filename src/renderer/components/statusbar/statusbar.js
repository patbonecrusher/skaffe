import React, { Component, PropTypes } from 'react'

import './statusbar.scss'

class StatusBar extends React.Component {
	constructor() {
		super();
		this.onHeaderMouseDown = this.onHeaderMouseDown.bind(this);
	}

	onHeaderMouseDown() {
		console.log("foo", this.clicks)
		this.headerMouseDownWindowX = window.screenX;
		this.headerMouseDownWindowY = window.screenY;

		this.clicks = this.clicks || 1;

		if (this.clicks++ >= 2) {
			if (this.maximized) {
				this.rpc.emit('unmaximize');
			} else {
				this.rpc.emit('maximize');
			}
			this.clicks = 0;
			this.maximized = !this.maximized;
		} else {
			// http://www.quirksmode.org/dom/events/click.html
			// https://en.wikipedia.org/wiki/Double-click
			this.clickTimer = setTimeout(() => {
				this.clicks = 0;
			}, 500);
		}
	}

	componentWillUnmount() {
		delete this.clicks;
		clearTimeout(this.clickTimer);
	}

	render() {
		const { store } = this.props
		return (
			<footer
				onMouseDown={this.onHeaderMouseDown}>
				SENTRUM
			</footer>
		);
	}
}

export default StatusBar;
