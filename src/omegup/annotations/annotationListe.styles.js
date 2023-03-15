import { colors } from "../styles"
export const styles = {
    listeHeader: {
        "display": "flex",
        "flexDirection": "row",
        // "justifyContent": "center",
        // "alignItems": "center",
        "padding": "0px",
        //  "width": "383px",
        //  "height": "64px",
        "borderRadius": "10px",
        "flex": "none",
        "order": "0",
        "alignSelf": "stretch",
        "flexGrow": "0"
    },
    liste: {

        "display": "flex",
        "flexDirection": "row",
        // "justifyContent": "center",
        // "alignItems": "center",
        "padding": "0px",
        // "width": "363px",
        "borderRadius": "10px",
        "flex": "none",
        "order": "0",
        "alignSelf": "stretch",
        "flexGrow": "0",
        margin: "3px"
    },
    textListe: {
        "display": "flex",
        "flexDirection": "row",
        "alignItems": "flex-start",
        "padding": "20px 10px",
        // "width": "177px",
        // "height": "64px",
        "background": "#BAE2FF",
        "borderRadius": "10px 0px 0px 10px",
        "flex": "none",
        "order": "0",
        "flexGrow": "1",
        "width": "144px",
        "height": "24px",
        "fontFamily": "'Poppins'",
        "fontStyle": "normal",
        "fontWeight": "500",
        "fontSize": "16px",
        "lineHeight": "24px",

        "flex": "none",
        "order": "0",
        "flexGrow": "0"

    },
    textListeHeader: {
        "display": "flex",
        "flexDirection": "row",
        "alignItems": "flex-start",
        "padding": "20px 10px",
        // "width": "177px",
        // "height": "64px",
        "background": "#BAE2FF",
        "borderRadius": "10px 0px 0px 10px",
        "flex": "none",
        "order": "0",
        "flexGrow": "1",
        "width": "144px",
        "height": "24px",
        "fontFamily": "'Poppins'",
        "fontStyle": "normal",
        "fontWeight": "500",
        "fontSize": "16px",
        "lineHeight": "24px",
        "color": "#094067",
        "flex": "none",
        "order": "0",
        "flexGrow": "0"

    },
    buttonHeader: {
        "display": "flex",
        "flexDirection": "row",
        "alignItems": "flex-start",
        "padding": "10px",
        "gap": "15px",
        // "width": "206px",
        "background": "#BAE2FF",
        "borderRadius": "0px 10px 10px 0px",
        "flex": "none",
        "order": "1",
        "flexGrow": "0"
    },
    ButtonElement: {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "padding": "10px",
        "gap": "10px",
        "width": "50%",
        "background": "#BAE2FF",
        "borderRadius": "10px",
        "flex": "none",
        "order": "0",
        "alignSelf": "stretch",
        "flexGrow": "0",
        "marginInline": "2px"

    },
    viewButtonAnnotation: {
        "display": "flex",
        "flexDirection": "row",
        "alignItems": "flex-start",
        "padding": "10px",
        "gap": "10px",
        "width": "68px",
        "height": "44px",
        "background": "#D8EEFE",
        "boxShadow": "0px 0px 4px rgba(0, 0, 0, 0.25)",
        "borderRadius": "10px",
        "flex": "none",
        "order": "1",
        "flexGrow": "0"
    },
    viewButtonDel: {
        "display": "flex",
        "flexDirection": "row",
        "alignItems": "flex-start",
        "padding": "10px",
        "gap": "10px",
        "width": "44px",
        "height": "44px",
        "background": "#D8EEFE",
        "boxShadow": "0px 0px 4px rgba(0, 0, 0, 0.25)",
        "borderRadius": "10px",
        "flex": "none",
        "order": "2",
        "flexGrow": "0"
    },
    buttonContainer: {
        background: colors.lightBlue,
        borderRadius: 10,
        padding: 10,
        display: 'flex',
        alignItems: 'center',

    }
    ,
    scroll: {

        width:" max-content",
        "height": "500px", 
         overflow: "auto",
        "overflowX": "hidden",
        '&::-webkit-scrollbar': {
            width: 5,
        },
        '&::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 5px grey',
            borderRadius: 10,
        },
        '&::-webkit-scrollbar-thumb': {
            background: colors.blue,
            borderRadius: 10,
        },

  

}

}