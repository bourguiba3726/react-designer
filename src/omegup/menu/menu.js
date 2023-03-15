import { useState } from "react";
import React, { ReactDOM } from "react";
import { principaleMenue } from "../menu/menu.style"
import { IconButton, List, ListItem } from "@mui/material";
import '../annotations/annotationListe.styles.css'
import { Monitor } from "../assets/icons";
import { SearchZoomOut } from "../assets/icons/iconButton/SearchZoomOut";
import { SearchZoomin1 } from "../assets/icons/iconButton/SearchZoomin1";
import { ImportCurve } from "../assets/icons/iconButton/Iconsax_Linear_importcurve";
import { Export } from "../assets/icons/iconButton/Iconsax_Linear_exportcircle";
import { Import } from "../assets/icons/iconButton/Iconsax_Linear_importcircle";
import { AddSquare } from "../assets/icons/iconButton/AddSquare";
import ImageUpload from "./imageUpload";
export const Menu = ({ handleImageChange }) => {

  return (


    <div style={{ ...principaleMenue.container }}>

      <List style={{ ...principaleMenue.listeZoom }}>
        <ListItem style={{ ...principaleMenue.listeItem }}>
          <div style={{ ...principaleMenue.icons }}>
            <AddSquare className={'iconStyle'} />
          </div>
          
          <div style={{ ...principaleMenue.textStyle }}> <ImageUpload {...{handleImageChange}}/> </div>
       </ListItem>
      </List>
      {/* <List style={{ ...principaleMenue.listeZoom }}>
        <ListItem style={{ ...principaleMenue.listeItem }}>
          <div style={{ ...principaleMenue.icons }}>
            <SearchZoomin1 className={'iconStyle'} />
          </div>
          <div style={{ ...principaleMenue.textStyle }}>
            100%
          </div>
          <div style={{ ...principaleMenue.icons }}>
            <SearchZoomOut className={'iconStyle'} />
          </div>
        </ListItem>
      </List> */}
      <List style={{ ...principaleMenue.liste }}>
        <ListItem style={{ ...principaleMenue.listeItem }}>
          <div style={{ ...principaleMenue.icons }}>
            <Monitor className={'iconStyle'} />
          </div>
          <div style={{ ...principaleMenue.textStyle }}>
            Capture d'écran
          </div>
        </ListItem>
        <ListItem style={{ ...principaleMenue.listeItem }}>
          <div style={{ ...principaleMenue.icons }}>
            <ImportCurve className={'iconStyle'} />
          </div>
          <div style={{ ...principaleMenue.textStyle }}>Sauvgarder le proje</div>  </ListItem>
        <ListItem style={{ ...principaleMenue.listeItem }}>
          <div style={{ ...principaleMenue.icons }}>
            <Import className={'iconStyle'} />
          </div>
          <div style={{ ...principaleMenue.textStyle }}> Importer un projet</div>
        </ListItem>
        <ListItem style={{ ...principaleMenue.listeItem }}>
          <div style={{ ...principaleMenue.icons }}>
            <Export className={'iconStyle'} />
          </div>
          <div style={{ ...principaleMenue.textStyle }}> Exporter</div>
        </ListItem>

      </List>
    </div>


  )
}
