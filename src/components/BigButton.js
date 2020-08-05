import React from 'react';
import PropTypes from 'prop-types';
import './buttonStyles.css'

const BigButton = (props) => {
  const handleClick = () => {
    props.selectedHandler(props.caption);
  }

  return (
    <button
      className={props.selectedState ? "btnSelected" : "UnSelected"}
      onClick={handleClick}>
      {props.caption}
      <img src={props.image} alt={props.altTxt} />
    </button>
  )
}

BigButton.propTypes = {
  caption: PropTypes.string,
  image: PropTypes.string,
  selectedState: PropTypes.bool,
  selectedHandler: PropTypes.func,
  altTxt: PropTypes.string
}

export default BigButton