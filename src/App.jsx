import schema from "./schema.json";
import buildChildrenMap from "./Utils/ChildrenMap"
import RepeatContainer from "./components/container_repeat";

function App() {
  const childrenMap = buildChildrenMap(schema);

  const repeatContainer = schema.find(
    (item) => item.type === "container_repeat"
  );

  return (
    <div>
      <RepeatContainer
        container={repeatContainer}
        childrenMap={childrenMap}
      />
    </div>
  );
}

export default App;

