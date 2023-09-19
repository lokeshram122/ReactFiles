import React, { useState } from "react";
import FormComponent from "./Components/FormComponent";
import CardComponent from "./Components/CardComponent";
import NoResults from "./Components/NoResults";

function App() {
  const [cardData, setCardData] = useState([]);

  function formUpdateHandler(formData) {
    setCardData([...cardData, formData]);
  }

  return (
    <div>
      <div style={{ marginTop: "15px" }}>
        <FormComponent onFormUpdate={formUpdateHandler} />
      </div>
      <div style={{ marginTop: "15px" }}>
        {cardData.length == 0 && <NoResults />}
        {cardData.length != 0 && <CardComponent data={cardData} />}
      </div>
    </div>
  );
}

export default App;
