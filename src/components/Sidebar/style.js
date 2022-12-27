import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    sidebar : {
        width : '30%',
        [theme.breakpoints.down('sm')] : {
            width : '100%'
        }
    },
    paper : {
        backgroundColor : '#f3e5f5',
        color : "black",
        padding : '0.7rem 1.2rem'
    }
}))