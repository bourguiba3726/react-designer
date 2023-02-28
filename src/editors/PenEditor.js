import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useSvgDrawing } from 'react-hooks-svgdrawing';
import { parseStringPromise } from 'xml2js';
import { parseString } from 'xml2js';


const PenEditor = props => {
  const [renderRef, draw] = useSvgDrawing()


  console.log({ props })
  let { object, width, height } = props;
  draw.changePenColor(object.stroke)
  draw.changePenWidth(object.strokeWidth)
  draw.changeFill(object.fill)

  let { moveX, moveY, x, y } = object;
  let offsetX = x - moveX,
    offsetY = y - moveY;
  // console.log({ draw, props })



  useEffect(() => {
    console.log('draw.instance', renderRef.current)

    // renderRef.current.dispatchEvent(new Event('pointerdown'));
  }, [])

  const scaleW = (object.initW ? object.width / object.initW : 1)
  const scaleH = (object.initH ? object.height / object.initH : 1)
  const diffX = (object.initW ? object.x - object.initX : 0)
  const diffY = (object.initH ? object.y - object.initY : 0)

  return (
    <>
      <div style={{
        "position": "absolute",
        "background": "#0000004a",
        "top": "-9999px",
        "bottom": "-99999px",
        "right": "-5000px",
        "left": "-6666px",
        "cursor": "pointer"
      }} onClick={() => props.onClose()}></div>
      <div style={{
        "position": "absolute",
        "width": "100%",
        "height": "100%",
        zIndex: 2,
        filter: 'brightness(0.5)',
        // transform: `translate(${diffX}px, ${diffY}px) scale(${scaleW}, ${scaleH})`
      }}
       onPointerUp={async () => {
        if (!renderRef.current.firstChild.firstChild) return
        const childRec = renderRef.current.firstChild.firstChild.getBoundingClientRect()
        const parentRec = renderRef.current.firstChild.getBoundingClientRect()
        const left = childRec.x - parentRec.x, right = left + childRec.width
        const top = childRec.y - parentRec.y, bottom = top + childRec.height
        const path = (await parseStringPromise(draw.getSvgXML())).svg.path
        const newX = object.paths.length ? Math.min(left, object.x) : left
        const newY = object.paths.length ? Math.min(top, object.y) : top
        const newRight = Math.max(object.x + object.width, right)
        const newBottom = Math.max(object.y + object.height, bottom)
        const newW = newRight - newX, newH = newBottom - newY
       
        props.onUpdate({
          x: newX + diffX,
          y: newY + diffY,
          initX: newX, initY: newY,
          width: newW * scaleW,
          height: newH * scaleH,
          initW: newW, initH: newH,
          paths: object.paths.concat(path ? path.map(x => x.$.d) : [])
        })
        draw.undo()
      }}
       
       onDoubleClick={()=> props.onClose()}
      ref={renderRef} 
      
      />
    </>
  );

}

export default PenEditor;
