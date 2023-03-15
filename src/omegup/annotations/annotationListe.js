import React, { Component, useState } from 'react';
import { Avatar, Grid, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material';
import { styles } from "./annotationListe.styles"
import { Eye, TextIcon, EyeSlash, TrushSquare } from '../assets/icons/iconButton';

class AnnotationListe extends Component {

    state = {
        isHide: {
            allAnnotation: false,
            allElement: false
        }

    }

    render() {

        let { objects, setVisibility, setSelectedObject, setVisibilityText, setVisibilityAllText, setVisibilityAllElements, delElement } = this.props;

        const hideShowAllAnnotation = () => {
            this.setState({ isHide: { allAnnotation: !this.state.isHide.allAnnotation } })
        }
        const hideShowAllElement = () => {
            this.setState({ isHide: { allElement: !this.state.isHide.allElement } })
        }
        const hideShowElement = (objIndex) => {
            // console.log({ objIndex: objects[objIndex] })
            objects[objIndex].isElementHide = !objects[objIndex].isElementHide
        }
        const hideShowText = (objIndex) => {
            objects[objIndex].isTextHide = !objects[objIndex].isTextHide
            // console.log({ objIndex: objects[objIndex] })

        }

        return (
            <div>
                <div style={{ ...styles.listeHeader }}>
                    <div style={{ ...styles.textListeHeader }}>Liste d'annotation </div>
                    <div style={{ ...styles.buttonHeader }}>
                        <IconButton style={{ ...styles.buttonContainer }} onClick={() => { setVisibilityAllElements(); hideShowAllElement() }} >
                            {true ? <EyeSlash className={'iconStyle'} /> : <Eye />}
                        </IconButton>
                        <IconButton style={{ ...styles.buttonContainer }} onClick={() => { setVisibilityAllText() }} >
                            {/* {this.state.isHide.allElement ? "Show Elements" : "Hide Elements"} */}
                            <EyeSlash className={'iconStyle'} />
                            <TextIcon className={'iconStyle'} />
                        </IconButton >
                        <IconButton style={{ ...styles.buttonContainer }}>
                            <TrushSquare className={'iconStyle'} />
                        </IconButton>
                    </div>
                </div>
                <List style={{ ...styles.scroll }} className='customScroll'>
                    {objects.map((object, i) => (

                        <ListItem key={i} sx={{ color: object["stroke"] }} style={{ ...styles.liste }}>
                            <div style={{ ...styles.textListe }} onClick={() => { setSelectedObject(i) }}  >   {object["text"]} </div>
                            <div style={{ ...styles.buttonHeader }}>
                                <IconButton style={{ ...styles.buttonContainer }}
                                    onClick={() => { setVisibility(i); hideShowElement(i); setSelectedObject(i) }} >

                                    {true ? <EyeSlash className={'iconStyle'} /> : <Eye />}
                                </IconButton>
                                <IconButton style={{ ...styles.buttonContainer }} onClick={() => { setVisibilityText(i); hideShowText(i); setSelectedObject(i) }}>
                                    <EyeSlash className={'iconStyle'} />
                                    <TextIcon className={'iconStyle'} />
                                </IconButton >

                                <IconButton style={{ ...styles.buttonContainer }} onClick={() => { setSelectedObject(i); delElement(i) }}>
                                    <TrushSquare className={'iconStyle'} />
                                </IconButton>
                            </div>
                        </ListItem>
                    ))}
                </List>
            </div>
        );
    }
}



export default AnnotationListe;
