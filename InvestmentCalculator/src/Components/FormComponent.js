import React, { useState } from "react";

function FormComponent(props) {
  const [formData, setFormData] = useState({
    currentSavings: 0,
    yearlyContribution: 0,
    expectedReturn: 0,
    duration: 0,
  });

  function resetHandler() {
    setFormData({
      currentSavings: 0,
      yearlyContribution: 0,
      expectedReturn: 0,
      duration: 0,
    });
  }

  function submitHandler(e) {
    e.preventDefault();
    props.onSubmit(formData);
    resetHandler();
  }

  function handleChange(e) {
    let value = e.target.value == "" ? null : e.target.value;
    switch (e.target.id) {
      case "current-savings": {
        setFormData((formData) => ({
          ...formData,
          currentSavings: Number(value),
        }));
        break;
      }

      case "yearly-contribution": {
        setFormData((formData) => ({
          ...formData,
          yearlyContribution: Number(value),
        }));
        break;
      }

      case "expected-return": {
        setFormData((formData) => ({
          ...formData,
          expectedReturn: Number(value),
        }));
        break;
      }

      case "duration": {
        setFormData((formData) => ({
          ...formData,
          duration: Number(value),
        }));
        break;
      }
    }
  }

  return (
    <div>
      <form className="form" onReset={resetHandler} onSubmit={submitHandler}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              type="number"
              id="current-savings"
              value={formData.currentSavings}
              onChange={handleChange}
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              type="number"
              id="yearly-contribution"
              value={formData.yearlyContribution}
              onChange={handleChange}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              type="number"
              id="expected-return"
              value={formData.expectedReturn}
              onChange={handleChange}
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              type="number"
              id="duration"
              value={formData.duration}
              onChange={handleChange}
            />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
}

export default FormComponent;
