import React from 'react';
import { nanoid } from 'nanoid'
import { CssBaseline, Grid, Container,  } from '@material-ui/core';
import { GitHub, Facebook, Twitter } from '@material-ui/icons';

import {Header, Main, MainFeaturePost, FeaturePost, Sidebar, Footer} from './components/index';
import blog1 from './Blogs/blog-post.1.md';
import blog2 from './Blogs/blog-post.2.md';
import blog3 from './Blogs/blog-post.3.md';

const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
];

const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHub },
    { name: 'Twitter', icon: Twitter },
    { name: 'Facebook', icon: Facebook },
  ],
};

const blogs = [blog1, blog2, blog3];

function App() {
  let id = nanoid();
  return (
    <div className="App">
      <CssBaseline/>
      <Container maxwidth="lg" style={{border : "1px solid red"}} >
        <Header title="Blog" sections ={sections}/>
        <main>
          <MainFeaturePost
            title = {mainFeaturedPost.title}
            description = {mainFeaturedPost.description}
            image = {mainFeaturedPost.image}
            imageText = {mainFeaturedPost.imageText}
            linkText = {mainFeaturedPost.linkText}
          />
          <FeaturePost posts = {featuredPosts}/>
          <Grid container spacing={5} sx={{display : 'flex'}} >
            <Main title="From the firehose" blogs={blogs} id={id}/>
            <Sidebar
              titles = {sidebar.title}
              description = {sidebar.description}
              archives = {sidebar.archives}
              social = {sidebar.social}
            />
          </Grid>
        </main>
        <Footer/>
      </Container>
    </div>
  );
}

export default App;

/*
CssBaseline, Container, maxWidth "lg",
*/
