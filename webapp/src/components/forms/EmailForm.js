import React from 'react';

const EmailForm = props => {

  return (
    <input type="email"
      {...props}
      placeholder="your@example.com"
      value={props.email}
      onChange={props.onChange}
    />
  );
}

export default EmailForm;
