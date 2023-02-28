
import React, { Component } from 'react';
import { modes } from '../constants';
import Icon from '../Icon';
import _ from 'lodash';
import WebFont from 'webfontloader';
import Vector from './Vector';

export default class Rect extends Vector {
  static meta = {
    icon: <Icon icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>} size={30} />,
    initial: {
      text: "votre text ici",
      fontWeight: "normal",
      fontStyle: "normal",
      textDecoration: "none",
      fill: "black",
      fontSize: 20,
      fontFamily: "Open Sans",
      width: 5,
      height: 5,
      fill: "#48b3e136",
      radius: 0,
      blendMode: "normal",
      rotate: 0,
      title: "",
      contentText: "",
      stroke: "black",
      strokeWidth: 1,

    }
  };

  render() {
    let { object, index } = this.props;

    // WebFont.load({
    //   google: {
    //     families: [object.fontFamily]
    //   }
    // });
    let textStyle = {
      dominantBaseline: 'central',
      textAnchor: 'left',
      fontWeight: object.fontWeight,
      fontStyle: object.fontStyle,
      textDecoration: object.textDecoration
    };
    return (
      <g visibility={object.visibility}>
        <text fill={object.stroke}
          visibility={object.visibilityText}
          x={object.x + 15}
          y={object.y - 15}
          fontFamily={object.fontFamily}
          style={textStyle}>{object.text}
        </text>
        <rect style={this.getStyle()}
          {...this.getObjectAttributes()}
          rx={object.radius}
          width={object.width}
          height={object.height} />


      </g>
    );
  }
}