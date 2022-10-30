import { useState } from "react";

function Form() {
  const [value, setValue] = useState(1);
  const [text, setText] = useState("Text");

  return (
    <div>
      <h1>{value}</h1>
      <h1>{text}</h1>
      <div>
        <input
          type="number"
          onChange={(e) => setValue(e.target.valueAsNumber)}
        />
      </div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
    </div>
  );
}

export default Form;
