import React, { useCallback, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { Rect, Vector, PatchMeta, Text, Circle, Pen, Image, Path } from '../src/objects';
import { useStyles } from './App.module'
import Designer from '../src/Designer';
import OmegUpDesigner from '../src/OmegUpDesigner';
import { useSvgDrawing } from 'react-hooks-svgdrawing';
import { BackgroundRect } from '@svg-drawing/react';
import Icon from '../src/Icon'
import { Menu } from '../src/omegup/menu/menu';
import { useEventListener } from '../src/omegup/hooks/capture'
import { Auger, Briks, Cran, Drill } from '../src/omegup/assets/icons'


let listeMeta = [{
  icon: <Auger />,
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
},{
  icon: <Auger />,
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
}, 
{
  icon: <Auger />,
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
  icon: <Auger />,
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
},  {
  icon: <Briks />
  , initial: {
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
  icon: <Cran />, initial: {
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
  icon: <Drill />, initial: {
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
  const [img, setImg] = useState('')
  const [nProject, setNProject] = useState(false)

  const handler = useCallback((e) => {
    if (!e) return
    const imageFiles = Array.from(e.clipboardData && e.clipboardData.files || []).filter(x => x.type.includes('image'));
    setImg(URL.createObjectURL(...imageFiles))
    formik.setFieldValue('imageFiles', [...formik.values && formik.values.imageFiles || [], ...imageFiles])
    const noneImageFiles = Array.from(e.clipboardData && e.clipboardData.files || []).filter(x => !x.type.includes('image'));
    formik.setFieldValue('attachmentFiles', [...formik.values && formik.values.attachmentFiles || [], ...noneImageFiles])
  }, [])
  useEventListener({ eventName: 'paste', handler, eventHost: document.body })
  const handleImageChange = (e) => {
    const file = e.target.files[0]
    setImg(URL.createObjectURL(file))
    setNProject(true)
    setObjects([])
  }
  const [objects, setObjects] = useState( obj? JSON.parse(obj):[])
  console.log({ nProject })
  const { container } = useStyles()
  return (
    <div>
      <div className={container}>

  {    nProject?  <OmegUpDesigner width={750} height={500}
          objectTypes={{
            ...icon1, Pen, Rect, Circle, Text, Path
          }}
          background={`url(${img})` || 'url(../public/images/chantier.jpg)'}
          onUpdate={(objects) => {
            localStorage.obj = JSON.stringify(objects)
            setObjects(objects)
          }}
          objects={objects}>
        </OmegUpDesigner>:
        <OmegUpDesigner width={750} height={500}
        objectTypes={{
          ...icon1, Pen, Rect, Circle, Text, Path
        }}
        background={`url(${img})` || 'url(../public/images/chantier.jpg)'}
        onUpdate={(objects) => {
          localStorage.obj = JSON.stringify(objects)
          setObjects(objects)
        }}
        objects={objects}>
      </OmegUpDesigner>}
        </div>
      <div>    <Menu {...{
        handleImageChange
      }} />
      </div>
    </div>
  );
}
export default App

