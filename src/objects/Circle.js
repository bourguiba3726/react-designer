import React, { Component } from 'react';
import { modes } from '../constants';
import Icon from '../Icon';
import _ from 'lodash';
import WebFont from 'webfontloader';
import Vector from './Vector';
import { Text } from './Text';
export default class Circle extends Vector {
  static meta = {
    icon: <Icon icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>} size={30} />,
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
      rotate: 0,
      fill: "#d1cf6638",
      stroke: "blue",
      strokeWidth: 1,
      blendMode: "normal",
      title: "",
      contentText: "",
    }
  };

  render() {
    let { object, index } = this.props;
    WebFont.load({
      google: {
        families: [object.fontFamily]
      }
    });
    let textStyle = {
      dominantBaseline: 'central',
      textAnchor: 'left',
      fontWeight: object.fontWeight,
      fontStyle: object.fontStyle,
      textDecoration: object.textDecoration
    };
    return (

      <g  visibility={object.visibility}>
        <ellipse style={this.getStyle()}
          {...this.getObjectAttributes()}
          rx={object.width / 2}
          ry={object.height / 2}
          cx={object.x + object.width / 2}
          cy={object.y + 15 + object.height / 2}
          text={object.text}
        />
        <text fill={object.stroke}
          visibility={object.visibilityText}
          x={object.x + 25}
          y={object.y}
          fontFamily={object.fontFamily}
          style={textStyle}>{object.text}</text>

      </g>
    );
  }
}