import React from "react";

function CardComponent(props) {
  console.log(props);
  return (
    <div style={{ margin: "auto", width: "500px", background: "white" }}>
      <div
        style={{
          padding: "20px",
          border: "2px solid black",
          borderRadius: "10px",
        }}
      >
        {props.data.map((item) => {
          return (
            <div
              style={{
                border: "1px solid black",
                padding: "5px",
                marginBottom: "2px",
              }}
            >
              {item.username} ({item.age} Years)
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CardComponent;
