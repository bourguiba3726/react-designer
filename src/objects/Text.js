import React, { Component } from 'react';
import { modes } from '../constants';
import Icon from '../Icon';
import _ from 'lodash';

import Vector from './Vector';
import WebFont from 'webfontloader';

export default class Text extends Vector {
  static meta = {
    icon: <Icon icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line></svg>} size={30} />,
    initial: {
      text: "Type some text...",
      rotate: 0,
      fontWeight: "normal",
      fontStyle: "normal",
      textDecoration: "none",
      fill: "black",
      fontSize: 20,
      fontFamily: "Open Sans"
    }
  };

  getStyle() {
    let { object } = this.props;
    return {
      ...super.getStyle(),
      dominantBaseline: "central",
      fontWeight: object.fontWeight,
      fontStyle: object.fontStyle,
      textDecoration: object.textDecoration,
      mixBlendMode: object.blendMode,
      WebkitUserSelect: "none"
    };
  }

  getTransformMatrix({ rotate, x, y }) {
    return `rotate(${rotate} ${x} ${y})`;
  }

  render() {
    let { object, index } = this.props;
    WebFont.load({
      google: {
        families: [object.fontFamily]
      }
    });
    const { rotate, ...restOfAttributes } = this.getObjectAttributes()
    return (
      <text style={this.getStyle()}
        {...restOfAttributes}
        textAnchor="right"
        fontSize={object.fontSize}
        fontFamily={object.fontFamily}>
        {object.text}
      </text>
    );
  }
}
