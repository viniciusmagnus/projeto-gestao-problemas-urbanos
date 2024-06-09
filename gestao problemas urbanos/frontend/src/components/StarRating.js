import React from 'react';
import Rating from '@mui/material/Rating';

const StarRating = ({ value, onChange }) => {
  return (
    <Rating
      name="rating"
      value={value}
      onChange={(event, newValue) => {
        onChange(newValue);
      }}
    />
  );
};

export default StarRating;