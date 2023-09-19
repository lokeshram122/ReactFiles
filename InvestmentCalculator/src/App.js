import { useState } from "react";
import FormComponent from "./Components/FormComponent";
import GridComponent from "./Components/GridComponent";
import HeaderComponent from "./Components/HeaderComponent";
import NoResultsFound from "./Components/NoResultsFound";

function App() {
  const [yearlyData, setYearlyData] = useState([]);

  function submitForm(formData) {
    setYearlyData(calculateHandler(formData));
  }

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...
    debugger;
    const yearlyData = []; // per-year results

    let currentSavings = +userInput["currentSavings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearlyContribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expectedReturn"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
        initialInvestment: userInput["currentSavings"],
      });
    }
    return yearlyData;
    // do something with yearlyData ...
  };

  return (
    <div>
      <HeaderComponent />
      {/* Todo: Show below table conditionally (only once result data is available) */}
      <FormComponent onSubmit={submitForm} />
      {/* Show fallback text if no data is available */}

      {yearlyData && yearlyData.length > 0 && (
        <GridComponent data={yearlyData} />
      )}
      {yearlyData && yearlyData.length == 0 && <NoResultsFound />}
    </div>
  );
}

export default App;
