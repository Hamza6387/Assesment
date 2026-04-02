import TextInput from "./TextInput";
import RadioGroup from "./radio";
import CheckboxGroup from "./CheckBox";

function RepeatContainer({ container, childrenMap }) {
  const { id, data } = container;
  const childrens = childrenMap[id] || [];

    //repeat comtainer
  //  {
  //   "id": 10,
  //   "type": "container_repeat",
  //   "name": "products",
  //   "data": [
  //     {
  //       "productName": "Laptop",
  //       "options": ["Laptop", "Mouse", "Keyboard"]
  //     },
  //     {
  //       "productName": "Mobile",
  //       "options": ["Mobile", "Charger", "Cover"]
  //     }
  //   ]
  // }
  return (
    <div>
      {data.map((item, index) => (
        <div key={index} 
        style={{
    border: "1px solid #ddd",
    padding: "16px",
    marginBottom: "20px",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9"
  }}
        >
          <h3 style={{ marginBottom: "10px" }}>Product {index + 1}</h3>

          {childrens.map((child) => {
            if (child.type === "text") {
              return <TextInput key={child.id} config={child} item={item} />;
            }

            if (child.type === "radio") {
              return <RadioGroup key={child.id} config={child} item={item} />;
            }

            if (child.type === "checkbox") {
              return <CheckboxGroup key={child.id} config={child} item={item} />;
            }

            return null;
          })}
        </div>
      ))}
    </div>
  );
}

export default RepeatContainer;