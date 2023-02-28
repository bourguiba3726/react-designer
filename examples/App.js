import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { Rect, Vector, Path, Text, Circle,Pen,Image } from '../src/objects';
import classes from './App.module'
import Designer from '../src/Designer';
import { useSvgDrawing } from 'react-hooks-svgdrawing';
import { BackgroundRect } from '@svg-drawing/react';


export const  SVGPen= (width, height)=>  {
  let [renderRef, draw] = useSvgDrawing( )
  draw.changePenColor("white")
 console.log({ dd: renderRef,draw})
  return (    
   <div  style={{ width: 200, height: 200, backgroundColor:"red" }} ref={renderRef}>

   </div>



     
     )
}
const obj = localStorage.obj
export const App = () => {
  const [objects, setObjects] = useState(
    obj ? JSON.parse(obj) : [])

  return (
    <div className={classes.container}>

      {/* <MondrianExample /> */}

      <Designer width={250} height={350}
        objectTypes={{
         Pen, Rect, Circle,Image, Text 
        }}
        onUpdate={(objects) => {
          localStorage.obj = JSON.stringify(objects)
          setObjects(objects)
        }}
        objects={objects} ></Designer>
          {/* <SVGPen  /> */}
    
 
    </div>

  );
}



//  class App {
//   state = {
//     objects: [
//       {type: "text", x: 10, y: 20, text: "Hello!", fill: "red"},
//       {type: "rect", x: 50, y: 70, width: 30, height: 40, fill: "red"}
//     ]
//   };

//   render() {
//     return (
//       <Designer width={250} height={350}
//         objectTypes={{
//           'text': Text,
//           'rect': Rect
//         }}
//         onUpdate={(objects) => this.setState({objects})}
//         objects={this.state.objects} />
//     )
//   }
// }  
export default App

