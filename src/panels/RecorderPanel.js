import React, { Component } from 'react';
import Column from './Column';
import Columns from './Columns';
import PropertyGroup from './PropertyGroup';
 // import {MicVoiceRecorder} from '../microVoice/MicVoiceRecorder'

export default class RecorderPanel extends Component {
  render() {
    let { object } = this.props;
    return (
      <PropertyGroup>
        <Columns label="Arrange">
          <Column>

          </Column>
        </Columns>
      </PropertyGroup>
    );
  }
}
