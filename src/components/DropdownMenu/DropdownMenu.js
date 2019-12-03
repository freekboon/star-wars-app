import React, { useState } from "react";
import styled from "styled-components";

const Select = styled.select`
  width: 100%;
`;

Select.displayName = "Select";

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
      <>
        <h2>{label}</h2>
        <Select onChange={handleChange} value={value}>
          <option value="">{label}</option>
          {options.map(option => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </Select>
      </>
    )
  );
};
