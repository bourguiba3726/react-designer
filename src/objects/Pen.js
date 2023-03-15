import React, { Component, useLayoutEffect, useRef } from 'react';
import { modes } from '../constants';
import Icon from '../Icon';
import _ from 'lodash';
import { useSvgDrawing } from 'react-hooks-svgdrawing';
import Vector from './Vector';
import PenEditor from '../editors/PenEditor';
import WebFont from 'webfontloader';
import { MagicPen } from '../omegup/assets/icons/iconButton';
import './buttonstyles.styles.css'

export const SVGPen = ({ attr, obj }) => {
  const [renderRef, draw] = useSvgDrawing()
  const ref = useRef()
  draw.changePenColor("red")

  useLayoutEffect(() => {

  })

  const untilDiv = (x) => x.tagName == 'div' ? x : untilDiv(x.parentElement)
  return (<>
    {/* <rect
      {...attr} ref={x => attr.ref(ref.current = x)} xlinkHref={obj.xlinkHref}>
    </rect> */}

    {ref.current && ReactDOM.createPortal(<></>, untilDiv(ref.current))}
    <div style={{ width: attr.width, height: attr.height, top: attr.y, left: attr.x }} ref={renderRef}></div>

  </>


    //  
  )
}

export default class Pen extends Vector {
  static meta = {
    icon: <MagicPen className={'iconStyle'}/>,
      initial: {
      text: "votre text ici",
      fontWeight: "normal",
      fontStyle: "normal",
      textDecoration: "none",
      fill: "black",
      fontSize: 20,
      fontFamily: "Open Sans",
      width: 0,
      height: 0,
      fill: "transparent",
      rotate: 0,
      x: 0,
      y: 0,
      initX: 0,
      initY: 0,
      initW: 0,
      initH: 0,
      paths: [],
      stroke: "red",
      title: "",
      contentText: "",
      strokeWidth: 1,
      rotate: 0,
    },
    mode: modes.DRAW_PATH,
    editor: PenEditor
  };
  getTransformMatrix({ rotate, x, y, initX, initY, width, height, initW, initH }) {
    return `
      translate(${x - initX * (width / initW)} ${y - initY * (height / initH)})
      scale(${width / initW} ${height / initH})
    `;
  }
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
    return <g {..._.omit(this.getObjectAttributes(), 'paths', 'initX', 'initY')}>{object.paths.map((p, i) =>
      <path key={i} d={p} />
    )}
      {/* <text fill={object.stroke}
        x={object.x}
        y={object.y}
        fontFamily={object.fontFamily}
        style={textStyle}>{object.text}</text> */}
    </g>;
  }
}

