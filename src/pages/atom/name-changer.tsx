import { useState } from "react";
import { Input, Button } from "antd";
import useInfoStore from "./use-info-store";

export default function NameChanger() {
  const name = useInfoStore((state) => state.name);
  const changeName = useInfoStore((state) => state.changeName);
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
