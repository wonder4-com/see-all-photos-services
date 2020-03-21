import React from 'react';
import Star from './userAvatars/Star.jsx';
import Person from './userAvatars/Person.jsx';
import PersonRed from './userAvatars/PersonRed.jsx';
import Barista from './userAvatars/Barista.jsx';
import BarMan from './userAvatars/BarMan.jsx';
import Glasses from './userAvatars/Glasses.jsx';

const randomUser = [Barista, BarMan, Glasses];
const randomize = Math.floor(Math.random() * 3);

const Text = ({ photo }) => {
    const { id, user_name, photo_title, date_added, url_address, comment } = photo;
    return(
        <div className="model-text"> 
        <div className="title">{photo_title} {comment}</div>
      <div className="subtitle">{date_added.slice(0, 10)}</div>
      <div>
      <Glasses />
        <strong className="title">{user_name}</strong>
      <div className="subtitle">
        <ul><PersonRed /><Person />{id+100} <Star /> {id} </ul>
          </div>
      </div>
        </div>
    )
}

export default Text;
