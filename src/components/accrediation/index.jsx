import React, { useState } from "react";
import data from "./data";
import "./style.css";

const Index = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [multipleItems, setMultipleItems] = useState([]);
  const [showMultipleItems, setShowMultipleItems] = useState(false);
  const handleClick = (id) => {
    setSelectedItem(selectedItem === id ? null : id);
  };
  function handleMultipleItems(id) {
    let arr = [...multipleItems];
    const findIndexofid = arr.indexOf(id);
    if (findIndexofid == -1) {
      arr.push(id);
    } else arr.splice(findIndexofid, 1);
    setMultipleItems(arr);
  }

  return (
    <div className="container">
      <button onClick={() => setShowMultipleItems(!showMultipleItems)}>
        show multiple accordion
      </button>
      {data?.map((dataItem) => {
        return (
          <div key={dataItem.id}>
            <div
              onClick={() =>
                showMultipleItems
                  ? handleMultipleItems(dataItem.id)
                  : handleClick(dataItem.id)
              }
              className="items"
            >
              <h3>{dataItem.question}</h3>
              <span>+</span>
            </div>
            {showMultipleItems
              ? multipleItems.indexOf(dataItem.id) !== -1 && (
                  <div>{dataItem.answer}</div>
                )
              : selectedItem === dataItem.id && <div>{dataItem.answer}</div>}
            {/* <div onClick={() => setSelectedItem(null)}>
              {selectedItem === dataItem.id ? (
                <div>{dataItem.answer}</div>
              ) : null}
            </div> */}
          </div>
        );
      })}
    </div>
  );
};

export default Index;
