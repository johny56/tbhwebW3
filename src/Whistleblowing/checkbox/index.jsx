import React from 'react';

const StyledCheckbox = ({ label }) => {
  return (
    <label className="flex items-center space-x-2">
      <input type="checkbox" className="form-checkbox text-blue-500 h-4 w-4" />
      <span>{label}</span>
    </label>
  );
};

export default StyledCheckbox;
