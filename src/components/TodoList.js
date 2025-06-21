import React, { useState } from "react";

function TodoList() {
  const [input, setInput] = useState("");
  const [res, setRes] = useState([]);
  const handleAdd = () => {
    if (!input.trim()) return;
    const todo = {
      id: Date.now(),
      text: input,
      completed: false,
    };
    setRes((prev) => [...prev, todo]);
    setInput("");
  };
  const handleCheck = (id) => {
    setRes(
      res.map((item) => {
        return item?.id === id ? { ...item, completed: !item.completed } : item;
      })
    );
  };
  const handleDelete = (ind) => {
    let newArr = [...res];
    newArr.splice(ind, 1);
    setRes(newArr);
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          placeholder="Enter todo"
          type="text"
          value={input}
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <div>
        <ul>
          {res.map((item, ind) => {
            return (
              <div className="item">
                <li key={ind} style={{ margin: "20px" }}>
                  <input
                    style={{ margin: "5px" }}
                    type="checkbox"
                    onClick={() => handleCheck(item?.id)}
                  />
                  <span
                    style={{
                      "text-decoration": item.completed
                        ? "line-through"
                        : "none",
                    }}
                  >
                    {item?.text}
                  </span>
                  <button
                    onClick={() => handleDelete(ind)}
                    style={{ margin: "5px" }}
                  >
                    Delete
                  </button>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
