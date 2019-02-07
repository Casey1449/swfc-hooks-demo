import React from 'react';

const ToggleIcon = ({ primary, alternate, isPrimary, disableAlt }) => {
  return (
    <i
      className={`material-icons ${
        disableAlt && !isPrimary ? 'inactive' : 'active'
      }`}
    >
      {isPrimary ? primary : alternate}
    </i>
  );
};

export default ToggleIcon;
