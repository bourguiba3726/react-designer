import React from 'react'
import AnnotationListe from "./annotationListe"
import { useStyles } from './style'

export const SideMenu = ({ objects, setSelectedObject, setVisibility, setVisibilityText, setVisibilityAllText, setVisibilityAllElements,delElement }) => {

    const { listStyle } = useStyles()

    return (
        <div className={listStyle}>
            <div>
                <AnnotationListe {...{ objects, setSelectedObject, setVisibilityText, setVisibility, setVisibilityAllText, setVisibilityAllElements,delElement }} />
            </div>
        </div>
    )
}