import React, { useState } from "react";
import data from "./data";
import "./style.css";

const Index = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const handleClick = (id) => {
    setSelectedItem(selectedItem === id ? null : id);
   
  };
  return (
    <div className="container">
      {data?.map((dataItem) => {
        return (
          <div>
            <div onClick={() => handleClick(dataItem.id)} className="items">
              <h3>{dataItem.question}</h3>
              <span>+</span>
            </div>
            <div>
              {selectedItem === dataItem.id ? (
                <div>{dataItem.answer}</div>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Index;
