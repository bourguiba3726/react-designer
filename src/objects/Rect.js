import React, {Component} from 'react';
import {modes} from '../constants';
import Icon from '../Icon';
import _ from 'lodash';

import Vector from './Vector';

export default class Rect extends Vector {
  static meta = {
    icon: <Icon icon={'rectangle'} size={30} />,
    initial: {
      width: 5,
      height: 5,
      fill: "blue",
      radius: 0,
      blendMode: "normal",
      rotate: 0,
      title:"",
      contentText:"",
      stroke: "gray",
      strokeWidth: 1
    }
  };

  render() {
    let {object, index} = this.props;
    console.log({object})
    return (
      <rect style={this.getStyle()}
         {...this.getObjectAttributes()}
         rx={object.radius}
         width={object.width}
         height={object.height} />
    );
  }
}