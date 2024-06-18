import React from "react";
import axios from 'axios';
import { useState } from 'react';

function GalleryItem({ item }) {
    const [showDescription, setShowDescription] = useState(false);
    const [likes, setLikes] = useState(item.likes);
  
    const toggleDescription = () => {
      setShowDescription(!showDescription);
    };

    const addLike = () =>{
        axios.put(`/api/gallery/like/${item.id}`)
      .then(() => {
        setLikes(likes + 1);
      })
      .catch(error => {
        console.error('Error adding like:', error);
      });
    }
    return (
        <div data-testid="galleryItem">
          <h2>{item.title}</h2>
          <div data-testid="toggle" onClick={toggleDescription}>
            {showDescription ? <p>{item.description}</p> : <img src={item.url} alt={item.title} />}
          </div>
          <button data-testid="like" onClick={addLike}>Like</button>
          <p>Likes: {likes}</p>
        </div>
      );
}

export default GalleryItem;