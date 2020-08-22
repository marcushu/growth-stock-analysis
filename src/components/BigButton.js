import React from 'react';
import PropTypes from 'prop-types';
import './buttonStyles.css'

export default function BigButton(props){

  return (
    <button
      className={props.selectedState ? "btnSelected" : "UnSelected"}
      onClick={() => props.selectedHandler(props.caption)}>
      {props.caption}
      <img src={props.image} alt={props.altTxt} />
    </button>
  )
}

BigButton.propTypes = {
  caption: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  selectedState: PropTypes.bool.isRequired,
  selectedHandler: PropTypes.func.isRequired,
  altTxt: PropTypes.string.isRequired
}
