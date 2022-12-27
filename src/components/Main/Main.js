import React from 'react';
import PropTypes from 'prop-types';
import {Grid, Typography, Divider} from '@material-ui/core';
import Markdown from './Markdown';
import useStyles from './style';

const Main = ({blogs, title, id}) => {


  const classes = useStyles();
  return (
    <Grid item className={classes.main}>
      <Typography component="h2" variant ="h5" gutterBottom>{title}</Typography>
      <Divider/>
      {blogs.map(blog => (
        <Markdown key ={blog.substring(0, 40)}>
          {blog}
        </Markdown>
      ))}
    </Grid>
  )
}


Main.propTypes = {
  blogs : PropTypes.arrayOf(PropTypes.string).isRequired,
  title : PropTypes.string.isRequired
}
export default Main;
