import React, { useState, useEffect } from "react";
import Select from "react-select";

import "./styles.scss";

const SelectList = props => {
  const { items, onChange, placeholder } = props;
  const [selectedValue, setSelectedValue] = useState(null);

  const customStyles = {
    singleValue: provided => ({
      ...provided,
      color: "var(--color-text)"
    }),
    placeholder: provided => ({
      ...provided,
      color: "var(--color-text)"
    }),
    control: (base, state) => ({
      ...base,
      background: "var(--bg-elements)",
      color: "var(--color-text)",
      borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
      borderColor: "var(--bg-shadow)",
      boxShadow: state.isFocused ? null : null,
      "&:hover": {
        borderColor: "var(--bg-shadow)"
      }
    }),
    option: (base, state) => ({
      ...base,
      background: state.isFocused ? "var(--bg-color)" : "var(--bg-elements)",
      color: "var(--color-text)"
    }),
    menu: base => ({
      ...base,
      background: "var(--bg-elements)"
    })
  };

  useEffect(() => {
    if (selectedValue) onChange(selectedValue.value);
    // eslint-disable-next-line
  }, [selectedValue]);

  const handleChange = selectedOption => {
    setSelectedValue(selectedOption);
  };

  return (
    <Select
      options={items}
      onChange={handleChange}
      placeholder={placeholder}
      className="select-box"
      styles={customStyles}
    />
  );
};

export default SelectList;
