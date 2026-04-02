import { useState } from "react";
import resolveExpression from "../utils/resolveExpression";

function RadioGroup({ config, item }) {
  const options = resolveExpression(config.option_fx, item);
  const defaultSelected = resolveExpression(config.selected_opt_fx, item);

  const [selected, setSelected] = useState(defaultSelected);

  return (
    <div>
      <label>{config.label}</label>

      {options.map((opt, i) => (
        <label key={i} style={{ marginRight: "10px" }}>
          <input
            type="radio"
            name={`${config.name}-${item.productName}`}            
            value={opt}
            checked={opt === selected}
            onChange={() => setSelected(opt)}
          />
          {opt}
        </label>
      ))}
    </div>
  );
}

export default RadioGroup;