import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import Icon from '../Icon';
import { useStyles } from './style'
import { stylesMenue } from "../omegup/toolsMenu/toolsMenue.style"
import { Eye, Text, EyeSlash, TrushSquare } from '../omegup/assets/icons/iconButton';
import { IconButton, List, ListItem } from '@mui/material';
import { Cursor } from '../omegup/assets/icons/iconButton/Cursor';
import { AddSquare } from '../omegup/assets/icons/iconButton/AddSquare';

class InsertMenu extends Component {

  constructor(props) {
    super(props)
    this.state = {
      menuOpened: false,
      hoveredTool: null,
      maxElemntIcons: 2
    }
  }


  openMenu = () => {
    this.setState({ menuOpened: true })
  }

  closeMenu = () => {
    this.setState({ menuOpened: false })
  }
  handleMenu = () => {
    console.log(this.state.menuOpened)
    this.setState({ menuOpened: !this.state.menuOpened })
  }
  hoverTool = type => {
    this.setState({ hoveredTool: type })
  }

  unhoverTool = type => {
    if (this.state.hoveredTool == type) {
      this.setState({ hoveredTool: null })
    }
  }

  render() {
    let { currentTool, tools } = this.props;
    let { menuOpened, hoveredTool } = this.state;
    let keys = Object.keys(tools);
    let listIcons = [];
    let listTools = [];

    let listeType = ["Pen", "Circle", "Path", "Text", "Rect"]

    let numberIcons = 0;
    let maxElemntIcons = 2;
    let test = false
    keys.map((type, i) => {
      (test = (type in listeType),
        listeType.some(x => x === type) ?
          listTools.push(type) : listIcons.push(type)
      )
    }
    )
    console.log({ listIcons, listTools })

    return (
      <>
        <div
          style={{
            ...stylesMenue.tools
          }}   >
          <div style={{ ...stylesMenue.cursor, }}>
            {currentTool
              ? tools[currentTool].meta.icon
              : <Cursor className={'iconStyle'} />}
          </div>

          <List>
            {listTools.map((type, i) => (

              <ListItem key={i}
                style={{
                  ...stylesMenue.buttonContainer,
                  ...currentTool === type ? stylesMenue.buttonContainerSelected : {},
                  ...hoveredTool === type ? stylesMenue.buttonContainerHovred : {}
                }}
                onMouseOver={() => this.hoverTool(type)}
                onMouseOut={() => this.unhoverTool(type)}
                onMouseDown={this.props.onSelect.bind(this, type)}
              >
                <div   >
                  {tools[type].meta.icon}
                </div>
              </ListItem>
            ))}
          </List>
        </div>
        <div
          style={{
            ...stylesMenue.icons

          }}
        >
          <List>

            {listIcons.map((type, i) => (
              (i < maxElemntIcons) &&
              <ListItem key={i}
                style={{
                  ...stylesMenue.buttonContainer,
                  ...currentTool === type ? stylesMenue.buttonContainerSelected : {},
                  ...hoveredTool === type ? stylesMenue.buttonContainerHovred : {}
                }}
                onMouseOver={() => this.hoverTool(type)}
                onMouseOut={() => this.unhoverTool(type)}
                onMouseDown={this.props.onSelect.bind(this, type)}
              >


                {/* <div style={{ 
                      ...stylesMenue.buttonContainer,
                      ...currentTool === type ? stylesMenue.buttonContainerSelected : {},
                      ...hoveredTool === type ? stylesMenue.buttonContainerHovred : {}}} > */}
                {tools[type].meta.icon}
                {/* </div> */}
              </ListItem>

            ))}

          </List>
          <div style={{ ...stylesMenue.cursor, }} onClick={() => { this.handleMenu() }}>
            <AddSquare className={'iconStyle'} />
          </div>
        </div>
        {this.state.menuOpened && <div style={{ ...stylesMenue.expandingIcons }} >
          <List style={{ ...stylesMenue.expandingLitse }}>
            {listIcons.map((type, i) => (
              (i >= maxElemntIcons) &&
              <ListItem key={i}
                style={{
                  ...stylesMenue.buttonContainer,
                  ...currentTool === type ? stylesMenue.buttonContainerSelected : {},
                  ...hoveredTool === type ? stylesMenue.buttonContainerHovred : {}
                }}
                onMouseOver={() => this.hoverTool(type)}
                onMouseOut={() => this.unhoverTool(type)}
                onMouseDown={this.props.onSelect.bind(this, type)}
              >
                {/* <div style={{
                  ...stylesMenue.buttonContainer,
                  ...currentTool === type ? stylesMenue.buttonContainerSelected : {},
                  ...hoveredTool === type ? stylesMenue.buttonContainerHovred : {}
                }} > */}
                {tools[type].meta.icon}
                {/* </div> */}
              </ListItem>
            ))}
          </List>
        </div>}

      </>

    );
  }
}

const styles = {
  insertMenu: {
    height: 40,
    width: 40,
    overflow: 'hidden',
    position: 'absolute'
  },
  insertMenuHover: {
    background: '#eeeff5',
    height: 'auto',
  },
  toolBox: {
    margin: 0,
    padding: 0,
  },
  toolBoxItem: {
    listStyle: "none",
    padding: "5px 5px",
    cursor: "pointer"
  },
  currentToolboxItem: {
    background: "#ebebeb"
  },
  mainIcon: {
    padding: "10px 5px",
    borderBottom: "1px solid #e0e0e0"
  }
  ,


};

export default InsertMenu;
