import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import Icon from '../Icon';
import { Avatar, Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
class AnnotationListe extends Component {

    state = {
        isHide: {
            allAnnotation: false,
            allElement: false
        }

    }

    render() {

        let { objects, setVisibility, setSelectedObject, setVisibilityText, setVisibilityAllText, setVisibilityAllElements,delElement } = this.props;
        // console.log({ setVisibility })
        // console.log({ setSelectedObject })
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
                <button onClick={() => { setVisibilityAllText(); hideShowAllAnnotation() }} >
                    {this.state.isHide.allAnnotation ? "Show Annotations" : "Hide Annotations"}</button>
                <button onClick={() => { setVisibilityAllElements(); hideShowAllElement() }} >
                    {this.state.isHide.allElement ? "Show Elements" : "Hide Elements"}</button>

                <Grid item xs={12} md={6}>
                    <div>Liste d'annotation</div>
                </Grid>
                <List>
                    {objects.map((object, i) => (

                        <ListItem key={i} sx={{ color: object["stroke"] }}
                            onClick={() => { setSelectedObject(i) }} >
                            <button name={i} id={i} onClick={() => { setVisibilityText(i); hideShowText(i) }} >
                                {object["isTextHide"] ? "Show Text" : "Hide Text"}</button>

                            <button name={i} id={i} onClick={() => { setVisibility(i); hideShowElement(i) }} >
                                {object["isElementHide"] ? "Show Element" : "Hide Element"}</button>

                            <div style={{ whiteSpace: 'normal' }}>
                                {object["text"]}
                              
                              
                                <button name={i} id={i} onClick={() => { delElement(i) }} > Delete</button>
                            </div>
                        </ListItem>))}
                </List>
            </div>
        );
    }
}




export default AnnotationListe;
