import { makeStyles } from "@material-ui/core";

export default makeStyles ((theme) => ({
    main : {
        width : "65%",
        [theme.breakpoints.down('sm')] : {
            width : '100%'
        }
    }
}))