import React from "react";

export const RadioOption = ({ description, value, configName }) => {
  return (
    <div className="field__radio">
      <input type="radio" name={configName} id={`${configName}-${value}`} value={value}/>
      <label htmlFor={`${configName}-${value}`}>{description}</label>
    </div>
  );
};
