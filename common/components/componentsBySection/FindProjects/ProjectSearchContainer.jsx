// @flow

import ProjectFilterContainer from './ProjectFilterContainer.jsx';
import ProjectTagContainer from './ProjectTagContainer.jsx';
import ProjectSearchBar from './ProjectSearchBar.jsx';
import React from 'react';

class ProjectSearchContainer extends React.PureComponent<{||}> {
  render(): React$Node {
    return (
      <div>
        <ProjectSearchBar />
        <ProjectTagContainer />
        <ProjectFilterContainer />
      </div>
    );
  }
}

export default ProjectSearchContainer;
