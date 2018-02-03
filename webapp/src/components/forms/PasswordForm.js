import React from 'react';

const PasswordForm = props => {

  return (
    <input type="password"
      {...props}
      placeholder="Your Password"
      value={props.password}
      onChange={props.onChange}
    />
  );
}

export default PasswordForm;
