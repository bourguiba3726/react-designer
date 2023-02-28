
import *as  React from "react"
import { useEffect, } from 'react';


export const Visualiser = ({ background, foreground, width, height, className, ctx, canvasRef, barWidth, analyser, data }) => {

    let intiPosition = 0
    let list = []
    const loopingFunction = () => {
        let numb = null
        numb = requestAnimationFrame(loopingFunction)

    }
    requestAnimationFrame(loopingFunction)
    const draw = (list, ctx) => {
        if (canvasRef.current) {
            ctx.fillStyle = background;
            ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height)
            ctx.fillStyle = foreground;
            list = list.map((x) => ({ ...x, x: x.x - list[0].x, }))
            list.forEach((i) => {
                let region = new Path2D();
                region.moveTo(i.x, i.y + i.w / 2);
                region.lineTo(i.x + i.w / 2, i.y);
                region.lineTo(i.x + i.w, i.y + i.w / 2);
                region.lineTo(i.x + i.w, i.y + i.h - i.w / 2);
                region.lineTo(i.x + i.w / 2, i.y + i.h);
                region.lineTo(i.x, i.y + i.h - i.w / 2);
                region.closePath();
                ctx.fill(region)
            })
        }
    }

    return (
        <canvas style={{ width, height }} ref={canvasRef} {...{ className }}></canvas>
    )
}