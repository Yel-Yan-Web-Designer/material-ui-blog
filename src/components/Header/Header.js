import React from 'react';
import {AppBar, Toolbar, Typography, IconButton, Button, Box, Link} from '@material-ui/core';
import { Search } from '@material-ui/icons';

import useStyles from './style';

const Header = ({sections}) => {
  const classes = useStyles();
  return (
    <AppBar position ="static" className={classes.appbar}>
        <Toolbar sx={{borderBottom : 1, borderColor : 'divider'}} className={classes.toolbar} >
          <Button variant="text" className={classes.subBtn} size="small">Subscribe</Button>
          <Typography variant='h5' color ="inherit" component="h2" align="center" noWrap className={classes.blog}>
              Blog
          </Typography>
          <Box display="flex" className={classes.box}>
            <IconButton><Search/></IconButton>
            <Button variant="outlined" size="small" className={classes.signup}>Sign Up</Button>
          </Box>
        </Toolbar>
        <Toolbar component ="nav"
        className={classes.nav}
        >
          {
            sections.map(x => {
              let {title , url} = x;
            return <Link 
              href={url} 
              className = {classes.link}
              variant ="body2" 
              key ={title}>
                {title}
              </Link>
            })
          }
        </Toolbar>
    </AppBar>
  )
}

export default Header;

/*
AppBar, Toolbar, Box, Typography, variant, component, IconButton, Button, sx, size, outlined, position, static
*/