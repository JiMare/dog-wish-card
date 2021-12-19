import React from "react";

export const CreateOption = ({description, value, configName}) => {
  return (
    <div className="field__swatch">
      <input
        type="radio"
        name={configName}
        id={`${configName}-${value}`}
        value={value}
      />
      <label
        htmlFor={`${configName}-${value}`}
        className={configName === 'cover' ? `swatch--${configName}-${value}` : `swatch--${value}`}
        data-description={description}
      ></label>
    </div>
  );
};
