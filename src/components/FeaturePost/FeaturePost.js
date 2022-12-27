import React from 'react';
import {Box, Typography,CardActionArea, Card, CardContent, CardMedia, Link, Grid} from '@material-ui/core';

import useStyles from './style'

const FeaturePost = ({posts}) => {
  const classes = useStyles();

  return (
    <>
      <Box sx={{marginBottom : '3rem'}}>
        <Grid container spacing={1}>
          {posts.map((x)=> {
          let {title, date, description, image, imageLabel} =x;
          return (
            <Grid item key ={title} xs={12} md={6}>
              <CardActionArea>
                <Card className={classes.card}>
                    <CardContent className={classes.content}>
                      <Typography component="h3" variant ="h5" gutterBottom>{title}</Typography>
                      <Typography variant ='subtitle1' className={classes.date}>{date}</Typography>
                      <Typography variant ="subtitle1" paragraph>{description}</Typography>
                      <Link href="#" color ="primary"  variant="h6">Continue reading...</Link>
                    </CardContent>
                    <CardMedia 
                      component = 'img'
                      sx={{display : {xs : 'none', sm : "block"}}}
                      image={image}
                      alt={imageLabel}
                      className = {classes.img}
                    />
                  </Card> 
              </CardActionArea>
            </Grid>
          )
        })}
        </Grid>
      </Box>
    </>
  )
}

export default FeaturePost