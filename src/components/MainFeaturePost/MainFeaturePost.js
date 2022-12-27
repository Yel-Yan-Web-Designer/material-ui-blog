import React from 'react';
import { Grid, Typography, Box, Link } from '@material-ui/core';

const MainFeaturePost = ({title, description, image, imageText, linkText}) => {
  return (
    <div style={{
      backgroundImage : `url(${image})`,
      backgroundSize : 'cover',
      backgroundRepeat : 'no-repeat',
      backgroundPosition : 'center',
      position : 'relative',
      height : '60vh',
      marginBottom : '1.4rem'
    }}>
        <Box
          sx={{
            position : 'absolute',
            top : 0, right : 0, bottom : 0, left : 0,
            backgroundColor : 'hsl(0, 0%, 0%, 0.5)'
          }}
        >
          <Grid container>
            <Grid item md={6}>
              <Box sx={{
                position : 'relative',
                p : {xs : 3, md : 6},
                pr : {md : 0},
                color : "white"
                }}>
                <Typography component="h1" variant ="h3" color="inherit" gutterBottom>{title}</Typography>
                <Typography component="h3" variant ="h6" color="inherit" paragraph>{description}</Typography>
                <Link color="primary" variant="h6">{linkText}</Link>

              </Box>
            </Grid>
          </Grid>
        </Box>
    </div>
  )
}

export default MainFeaturePost;

/*
Grid, Typography, Box, Link, sx ,color , variant , component, gutterBottom, paragraph, inherit
*/