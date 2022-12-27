import React from 'react';
import { Grid, Typography, Link, Paper, Box } from '@material-ui/core';
import useStyles from './style'

const Sidebar = ({titles, description, archives, social}) => {

  const classes = useStyles();
  return (
    <>
      <Grid item className={classes.sidebar}>
        <Paper className={classes.paper}>
          <Typography component="h3" variant="h6">{titles}</Typography>
          <Typography component='p' variant = "body1">{description}</Typography>
        </Paper>
        <Box sx={{marginTop : '1rem'}}>
          <Typography component="h3" variant = "h6" gutterBottom>Archives</Typography>
          <Box sx={{display : 'flex', flexDirection : "column", marginBottom : '2rem'}}>
            {archives.map(x => {
              let {title, url} =x;
              return (  
                <Link src={url} key ={title} component="p" color ="primary" variant="body1">
                  {title}
                </Link>
              )
            })}
          </Box>
          <Box sx={{display : 'flex', flexDirection : 'column'}}>
            <Typography component="h3" variant = "h6" gutterBottom>Social</Typography>
            {social.map((network) => (
              <Link
                display ="block"
                variant ="body1"
                key ={network.name}
                href="#"
                sx={{mb : 0.5}}
              >
                <Box spacing={1}
                  sx={{display : 'flex', flexDirection : 'row', alignItems : 'center', columnGap : '0.5rem'}}
                >
                  <network.icon/>
                  <span>{network.name}</span>
                </Box>
              </Link>
            ))}
          </Box>
        </Box>
        <Box>

        </Box>
      </Grid>
    </>
  )
}

export default Sidebar;