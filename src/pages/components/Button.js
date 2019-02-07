import React from 'react';

const Button = ({ children, disabled, error, errorText }) => {
  return (
    <div className={'centering_wrapper'}>
      <button className={'chat_button'} disabled={disabled}>
        {children}
      </button>
      <span className={`btn_message ${!error ? 'hide' : 'show'}`}>
        {errorText}
      </span>
    </div>
  );
};

export default Button;
