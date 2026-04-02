import resolveExpression from "../utils/resolveExpression";

function TextInput({ config, item }) {
  const value = resolveExpression(config.value_fx, item);

  return (
    <div style={{marginBottom:"12px"}}>
      <label style={{ display: "block", fontWeight: "bold" }}>{config.label}</label>
      <input style={{padding: "6px",
      width: "200px",
      marginTop: "4px"}}onChange={{}}value={value} readOnly />
    </div>
  );
}

export default TextInput;