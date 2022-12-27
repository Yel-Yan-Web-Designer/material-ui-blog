import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    card : {
        display : 'flex',
        border : '1px solid green'
    },
    content : {
        width : '75%'
    },
    img : {
        width : '30%' 
    },
    date : {
        color : 'gray'
    }
}))