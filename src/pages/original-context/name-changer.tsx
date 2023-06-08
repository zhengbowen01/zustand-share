import { useState } from "react";
import { Input, Button } from "antd";
import { useNameContext } from "./context";
import { useOverallContext } from "./context/overall-context-provider";

export default function NameChanger() {
  // const { name, changeName } = useNameContext();
  const { name, changeName } = useOverallContext();
  const [newName, setNewName] = useState(name);

  return (
    <div style={{ marginBottom: 50 }}>
      <div>{name}</div>
      <Input
        style={{ width: 200, margin: "10px 10px 0 0" }}
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <Button onClick={() => changeName(newName)}>change name</Button>
    </div>
  );
}
