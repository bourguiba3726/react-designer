import React, { Component } from 'react';
import _ from 'lodash';
import Icon from '../Icon';
import PropertyGroup from './PropertyGroup';
import Button from './Button';
import Columns from './Columns';
import Column from './Column';

import styles from './styles';
export default class ArrangePanel extends Component {
  render() {
    let { object } = this.props;
    return (
      <PropertyGroup >
        <Columns label="Arrange" style={styles.toolsContainer} >
          <Column style={styles.toolsContainer} >
            <Button onClick={this.props.onArrange.bind(this, 'back')} style={styles.colorPicker} >
              <Icon icon="send-to-back" />
              <span>send to back</span>
            </Button>
            <Button onClick={this.props.onArrange.bind(this, 'front')}  style={styles.colorPicker} >
              <Icon icon="bring-to-front" />
              <span>bring to front</span>
            </Button>
          </Column>
        </Columns>
      </PropertyGroup>
    );
  }
}
