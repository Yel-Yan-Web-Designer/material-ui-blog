import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    appbar : {
        backgroundColor : "transparent",
        boxShadow : "none"
    },
    toolbar : {
        display : "flex",
        justifyContent : "space-between",
        alignItems : "center",
        borderBottom : '1px solid hsl(0, 10%, 10%, 0.2)'
    },
    subBtn : {
        color : theme.palette.info.dark,
        fontWeight : "700",
        fontSize : "0.78rem"
    },
    blog : {
        color : "hsl(0, 0%, 0%)"
    },
    box : {
        alignItems : "center",
    },
    signup : {
        color : theme.palette.primary.light,
        fontWeight : "bolder",
    },
    nav : {
     display : "flex",
     justifyContent : "space-between",
     overflowX : 'auto',
    },
    link : {
        color : "black",
        textDecoration : "underline"
    }
}))