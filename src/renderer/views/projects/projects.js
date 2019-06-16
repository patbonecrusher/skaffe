import * as React from 'react'
import { Header, ProjectViewer} from '../../components';

import './projects.scss'

class ProjectsView extends React.Component {
	render() {
		return (
			<div id="projects-view" className="skaffe-main bp3-dark">
				<Header></Header>
				<ProjectViewer></ProjectViewer>
			</div>
		);
	}
}

export default ProjectsView;
