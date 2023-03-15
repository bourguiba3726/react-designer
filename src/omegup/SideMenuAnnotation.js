import React from 'react'
import AnnotationListe from "./annotations/annotationListe"


export const SideMenuAnnotation = ({ objects, setSelectedObject, setVisibility, setVisibilityText, setVisibilityAllText, setVisibilityAllElements,delElement }) => {


    return (
       
            <div>
                <AnnotationListe {...{ objects, setSelectedObject, setVisibilityText, setVisibility, setVisibilityAllText, setVisibilityAllElements,delElement }} />
            </div>
        
    )
}