import { useState } from "react";

function App() {
  const [value, setValue] = useState([]);
  const [input, setInput] = useState("");

  function handleAdd() {
    if (input.trim() !== "") {
      const copy = [...value, input];
      setValue(copy);
      setInput("");
    }
  }

  function remove(index) {
    const newCopy = value.filter((elem, i) => i !== index);
    setValue(newCopy);
  }



  return (
    <div>
      <ul>
        {value.map((elem, index) => {
          return (
            <li key={index}>
              {elem}
              <button onClick={() => remove(index)}>remove</button>
            </li>
          );
        })}
      </ul>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>add</button>
    </div>
  );
}

export default App;
