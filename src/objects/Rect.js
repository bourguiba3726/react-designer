
import React, { Component } from 'react';
import { modes } from '../constants';
import Icon from '../Icon';
import _ from 'lodash';
import WebFont from 'webfontloader';
import Vector from './Vector';
import { MouseSquare } from '../omegup/assets/icons/iconButton/MouseSquare';
import './buttonstyles.styles.css'
export default class Rect extends Vector {
  static meta = {
    icon: <MouseSquare className={'iconStyle'} />,
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