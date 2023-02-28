import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { Rect, Vector, PatchMeta, Text, Circle, Pen, Image } from '../src/objects';
import {useStyles} from './App.module'
import Designer from '../src/Designer';
import { useSvgDrawing } from 'react-hooks-svgdrawing';
import { BackgroundRect } from '@svg-drawing/react';
import Icon from '../src/Icon'
import { Menu } from '../src/omegup/menu';


let listeMeta = [{
  icon: <Icon icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>} size={30} />,
  initial: {
    text: "votre text ici",
    fontWeight: "normal",
    fontStyle: "normal",
    textDecoration: "none",
    fill: "black",
    width: 24,
    height: 24,
    title: "",
    contentText: "",
    xlinkHref: "/public/images/icones/m1.png"
  }
}, {
  icon: <Icon icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>} size={30} />,
  initial: {
    text: "votre text ici",
    fontWeight: "normal",
    fontStyle: "normal",
    textDecoration: "none",
    fill: "black",
    width: 24,
    height: 24,
    title: "",
    contentText: "",
    xlinkHref: "/public/images/icones/m2.png"
  }
}, {
  icon: <Icon icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>} size={30} />,
  initial: {
    text: "votre text ici",
    fontWeight: "normal",
    fontStyle: "normal",
    textDecoration: "none",
    fill: "black",
    width: 24,
    height: 24,
    title: "",
    contentText: "",
    xlinkHref: "/public/images/icones/m3.png"
  }
}, {
  icon: <Icon icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>} size={30} />,
  initial: {
    text: "votre text ici",
    fontWeight: "normal",
    fontStyle: "normal",
    textDecoration: "none",
    fill: "black",
    width: 24,
    height: 24,
    title: "",
    contentText: "",
    xlinkHref: "/public/images/icones/m1.png"
  }
}]
let icon1 = listeMeta.map(meta => PatchMeta(Image, meta))


const obj = localStorage.obj
export const App = () => {
  const [objects, setObjects] = useState(
    obj ? JSON.parse(obj) :
      [])
  const [img, setImg] = useState('')
  const onChange = (e) => {

    const file = e.target.files[0]
    setImg(URL.createObjectURL(file))
    // console.log({ file })
  }
  const [nProject, setNProject] = useState(false)
  const newProject = (e) => {
    setNProject(true)
  }
  const { container } = useStyles()
  return (
    <div className={container}>
      <Menu {...{ onChange, newProject }} />


      <Designer width={750} height={500}
        objectTypes={{
          Pen, Rect, Circle, Text, ...icon1
        }}
        background={`url(${img})` || 'url(../public/images/chantier.jpg)'}
        onUpdate={(objects) => {
          localStorage.obj = JSON.stringify(objects)
          setObjects(objects)
        }}
        objects={objects}>
      </Designer>


    </div>

  );
}
export default App

