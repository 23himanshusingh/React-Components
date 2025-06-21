import React, { useState } from "react";
import "../styles.css";

export default function TransferList() {
  const [list1, setList1] = useState(["Item A", "Item B", "Item C"]);
  const [list2, setList2] = useState([]);
  const [selected1, setSelected1] = useState([]);
  const [selected2, setSelected2] = useState([]);

  const list1ToSelected1 = (e) => {
    const value = e.target.value;
    setSelected1((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const list2ToSelected2 = (e) => {
    const value = e.target.value;
    setSelected2((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const selected1ToList2 = () => {
    if (selected1.length === 0) return;
    setList2((prev) => [...prev, ...selected1]);
    setList1((prev) => prev.filter((item) => !selected1.includes(item)));
    setSelected1([]);
  };

  const selected2ToList1 = () => {
    if (selected2.length === 0) return;
    setList1((prev) => [...prev, ...selected2]);
    setList2((prev) => prev.filter((item) => !selected2.includes(item)));
    setSelected2([]);
  };

  return (
    <div>
      <div className="header">
        <div>
          <h1>Available</h1>
        </div>
        <div className="buttons">
          <button onClick={selected1ToList2}>&rarr;</button>
        </div>
        <button onClick={selected2ToList1}>&larr;</button>
        <div>
          <h1>Selected</h1>
        </div>
      </div>
      <div className="body">
        <div className="list-1">
          {list1.map((item, ind) => {
            const labelId = `label-list1-${ind}`;
            return (
              <div key={ind}>
                <input
                  type="checkbox"
                  value={item}
                  checked={selected1.includes(item)}
                  onChange={list1ToSelected1}
                  id={`checkbox-list1-${ind}`}
                  aria-labelledby={labelId}
                />
                <label id={labelId} htmlFor={`checkbox-list1-${ind}`}>
                  {item}
                </label>
              </div>
            );
          })}
        </div>
        <div className="list-2">
          {list2.map((item, ind) => {
            const labelId = `label-list2-${ind}`;
            return (
              <div key={ind}>
                <input
                  type="checkbox"
                  value={item}
                  checked={selected2.includes(item)}
                  onChange={list2ToSelected2}
                  id={`checkbox-list2-${ind}`}
                  aria-labelledby={labelId}
                />
                <label id={labelId} htmlFor={`checkbox-list2-${ind}`}>
                  {item}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
