import React from 'react';

const TextForm = props => {

  return (
    <input type="text"
      {...props}
      value={props.text}
      onChange={props.onChange}
    />
  );
}

export default TextForm;
