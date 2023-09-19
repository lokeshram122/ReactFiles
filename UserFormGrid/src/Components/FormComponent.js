import React, { useState } from "react";

function FormComponent(props) {
  const initialState = { username: "", age: 0 };
  const [formData, setFormData] = useState(initialState);
  const [isValid, setIsValid] = useState(false);

  function changeHandler(event) {
    setFormData((formData) => {
      return { ...formData, [event.target.id]: event.target.value };
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    if (formData.age > 0 && formData.length != "") {
      props.onFormUpdate(formData);
    }
    setFormData(initialState);
  }

  return (
    <div style={{ margin: "auto", width: "500px", background: "white" }}>
      <form onSubmit={submitHandler}>
        <div
          style={{
            padding: "20px",
            border: "2px solid black",
            borderRadius: "10px",
          }}
        >
          <div style={{ marginTop: "10px" }}>
            <label htmlFor="username">Name</label>
            <input
              onChange={changeHandler}
              style={{ width: "100%" }}
              type="text"
              id="username"
              value={formData.username}
            ></input>
          </div>
          <div style={{ marginTop: "10px" }}>
            <label htmlFor="age">Age (Years)</label>
            <input
              onChange={changeHandler}
              style={{ width: "100%" }}
              type="number"
              id="age"
              value={formData.age}
            ></input>
          </div>
          <div style={{ marginTop: "20px" }}>
            <input
              style={{
                width: "100%",
                background: "purple",
                color: "white",
                borderRadius: "5px",
                padding: "10px",
              }}
              type="submit"
              id="submit"
              value="Add User"
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormComponent;
