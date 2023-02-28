import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    listStyle: {
        '&&': {
            marginInlineStart: 40,
            paddingInline: 10,
            minHeight: '100%',

        },
        '&>div': {
            height: '100%',
            display: "flex",
            borderRadius: 10,
        },
        '&>div>div': {
            width: 300,
            padding: 10,
            borderRadius: 10,
            display: "flex",
            flexDirection: 'column',
            border: '2px solid #ccc9c940'
        },
        '&>div>div>button': {
            width: '100%',
            height: 30,
            margin: 1,
            borderRadius: 10,
            border: 'none',
            backgroundColor: '#23bcfa',
        },

        '&>div>div>div': {
            width: '100%',
            height: 40,
            paddingBlock: 10
        },
        '&>div>div>ul': {
            width: '100%',
            paddingBlock: 0
        },
        '&>div>div>ul>li': {

            boxShadow: '0px 0px 4px #e2e7ead1',
            borderRadius: 10,
            marginBlock: 7,
            '&:hover': {
                cursor: 'pointer',
                backgroundColor: '#23bcfa',
            },
            '&>div': {
                width: '100%',
                marginBlock: 0,
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                overflow: 'hidden'
            },
            '&&>div>div>ul>li>button': {
                width: '100%',
                margin: 2,
                height: 30,
                borderRadius: 10,
                border: 'none',
                backgroundColor: '#23bcfa'
            }
        }
    },
    // onClick: {
    //     '&>div>div>ul>li': {
    //         '&>div': {
    //             whiteSpace:'normal',
    //         }
    //     }
    // }
}) 