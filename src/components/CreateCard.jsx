import React from "react";
import { CreateOption } from "./CreateOption";
import { RadioOption } from "./RadioOption";

export const CreateCard = ({
  label,
  createClassName,
  config,
  configName,
  radio,
  set
}) => {
  return (
    <div className="field">
      <label className="field__label">{label}</label>
      <div className={createClassName} onChange={(e) => set(e.target.value)}>
        {config.map((card) =>
          radio ? (
            <RadioOption
              key={card.value}
              description={card.description}
              value={card.value}
              configName={configName}
            />
          ) : (
            <CreateOption
              key={card.value}
              description={card.description}
              value={card.value}
              configName={configName}
            />
          )
        )}
      </div>
    </div>
  );
};
