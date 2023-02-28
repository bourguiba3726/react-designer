import React, { Component } from 'react';
import { modes } from '../constants';
import Icon from '../Icon';
import _ from 'lodash';
import Vector from './Vector';
import WebFont from 'webfontloader';

export default class Image extends Vector {
  static meta = {
    icon: <Icon icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path stroke="#FFFFFE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.44 12h5.4M9.51 4.23l8.56 4.28c3.84 1.92 3.84 5.06 0 6.98l-8.56 4.28c-5.76 2.88-8.11.52-5.23-5.23l.87-1.73c.22-.44.22-1.17 0-1.61l-.87-1.74C1.4 3.71 3.76 1.35 9.51 4.23Z" />
    </svg>} size={30} />,
    initial: {
      text: "votre text ici",
      fontWeight: "normal",
      fontStyle: "normal",
      textDecoration: "none",
      fill: "black",
      fontSize: 20,
      fontFamily: "Open Sans",
      width: 24,
      height: 24,
      rotate: 0,
      title: "",
      contentText: "",
      xlinkHref: "/public/images/icones/m1.png"
    }
  };
  // constructor(ref){
  //   super(props);
  //   this.initial.xlinkHref =ref
  // }
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
        <image
          xlinkHref={object.xlinkHref}
          {...this.getObjectAttributes()}
          width={object.width}
          height={object.height} />
      </g>
    );
  }
}
