import { useState } from "react";
import resolveExpression from "../utils/resolveExpression";

function CheckboxGroup({ config, item }) {
  const options = resolveExpression(config.option_fx, item);
  const defaultSelected = resolveExpression(config.selected_opt_fx, item);

  // make it array
  const [selected, setSelected] = useState([defaultSelected]);
  
  const handleChange = (opt) => {
    setSelected(opt); 
  };

  return (
    <div style={{ marginBottom: "12px" }}>
      <label style={{ fontWeight: "bold", display: "block" }}>{config.label}</label>

      {options.map((opt, i) => (
        <label key={i} style={{ marginRight: "10px" }}>
          <input
            type="checkbox"
            name={`${config.name}-${item.productName}`} 
            checked={selected.includes(opt)} 
            onChange={() => handleChange(opt)}
          />
          {opt}
        </label>
      ))}
    </div>
  );
}

export default CheckboxGroup;