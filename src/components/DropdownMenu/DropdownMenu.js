import React, { useState } from "react";
import styled from "styled-components";

const Select = styled.select`
  width: 100%;
  font-size: 1rem;
  padding: 0.4rem 0.8rem;
  background: none;
  border-radius: 1rem;
  border: 1px solid black;
  &:focus {
    box-shadow: ${({ theme }) => theme.shadows.normal};
    outline: none;
  }
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
