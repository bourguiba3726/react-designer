import React, { Component, useLayoutEffect, useRef } from 'react';
import { modes } from '../constants';
import Icon from '../Icon';
import _ from 'lodash';
import { useSvgDrawing } from 'react-hooks-svgdrawing';
import Vector from './Vector';
import PenEditor from '../editors/PenEditor';

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


console.log("fff")
export default class Pen extends Vector {
  static meta = {
    icon: <Icon icon={'my-icon'} size={30} />,
    initial: {
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
      stroke: "white",
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
    return <g {..._.omit(this.getObjectAttributes(), 'paths', 'initX', 'initY')}>{object.paths.map((p, i) =>
      <path key={i} d={p} />
    )}
    </g>;
  }
}

