import React from 'react';
import { Typography, Link, Box } from '@material-ui/core';

const Footer = () => {
  return (
    <>
      <Box sx={{padding : "3rem 0"}} align="center">
        <Typography component="h3" variant="h5" gutterBottom>Footer</Typography>
        <Typography component="h5" variant="body1" >Something here to give the footer a purpose!</Typography>
        <Typography component="h5" variant="body1" >
            Copyright © <Link src="#" color="primary">Your Website</Link> 2022.
        </Typography>
      </Box>
    </>
  )
}

export default Footer