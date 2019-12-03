import React, { useState } from "react";

export default ({
  options,
  label = "Select",
  selected = undefined,
  handleSelect
}) => {
  const [value, setValue] = useState(selected);
  const handleChange = event => {
    setValue(event.target.value);
    handleSelect(event.target.value);
  };
  return (
    options && (
      <select onChange={handleChange} value={value}>
        <option value="">{label}</option>
        {options.map(option => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    )
  );
};
