import React, { Component } from 'react';
import styles from './styles';

class PanelList extends Component {
  render() {
    let {object, objectComponent, id} = this.props;
  
    return (

      <div style={{...styles.toolsContainer}}>
        {objectComponent.panels.map((Panel, i) => <Panel key={i} id={id} {...this.props} />)}
      </div>
    );
  }
};

export default PanelList;
