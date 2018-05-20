import React from 'react';
import './Gallery.css';
import images from './data';
import Chosen from './Chosen.jsx'
import Collection from './Collection.jsx'

const Gallery = () => {
  return (<section className="section Gallery project">
      <h1 className="title">Gallery React App</h1>
      <div className="container">

        <Collection/>
        <Chosen/>
        


      </div> 
    </section>)
}

export default Gallery;