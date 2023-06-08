import { useState } from "react";
import { InputNumber, Button } from "antd";
import { useAgeContext } from "./context";
import { useOverallContext } from "./context/overall-context-provider";

export default function AgeChanger() {
  const { age, changeAge } = useOverallContext();
  // const { age, changeAge } = useAgeContext();
  const [newAge, setNewAge] = useState(age);

  console.log("reconcile age changer");

  return (
    <div>
      <div>{age}</div>
      <InputNumber
        style={{ width: 200, margin: "10px 10px 0 0" }}
        value={newAge}
        onChange={(val) => setNewAge(val || 0)}
      />
      <Button onClick={() => changeAge(newAge)}>change age</Button>
    </div>
  );
}
