import React, { Component, useState } from 'react';
import _ from 'lodash';
import Icon from '../Icon';
import PropertyGroup from './PropertyGroup';
import Button from './Button';
import Columns from './Columns';
import Column from './Column';
import { MicVoiceRecorder } from '../microVoice/MicVoiceRecorder'
import { BehaviorSubject } from 'rxjs';

export default class RecorderPanel extends Component {
  render() {
    let { object } = this.props;
    const stateRecording = new BehaviorSubject("recording")

    const handleClick = () => {
      console.log("stateRecording onclick event")
      stateRecording.next("stop")
      console.log({ stateRecording })
    }



    const handleBlob = ({ blob }) => { console.log({ blob }) }
    return (
      <PropertyGroup>
        <Columns label="Arrange">
          <Column>
            <button onClick={handleClick}>click</button>
            <MicVoiceRecorder
              height={40}
              width={'100%'}
              background={"blue"}
              foreground={'white'}
              barWidth={5}
              {...{ state: stateRecording, handleBlob, }}
            />
          </Column>
        </Columns>
      </PropertyGroup>
    );
  }
}
