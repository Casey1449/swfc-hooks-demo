import React from 'react';

export default function ToggleIcon({
  primary,
  alternate,
  isPrimary,
  disableAlt,
}) {
  return (
    <i
      className={`material-icons ${
        disableAlt && !isPrimary ? 'inactive' : 'active'
      }`}
    >
      {isPrimary ? primary : alternate}
    </i>
  );
}
