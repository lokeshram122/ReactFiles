import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMeaning } from "../Reducers/DictionaryReducer";

function Dictionary() {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const dictionary = useSelector((state) => state?.dictionary);
  const definitions = dictionary?.data[0]?.definitions;
  function onChangeHandler(event) {
    setSearchText(event.target.value);
  }

  function handleSubmit() {
    if (searchText != "") {
      dispatch(getMeaning(searchText));
    }
  }

  return (
    <div>
      <div>
        <input
          type="text"
          value={searchText}
          onChange={onChangeHandler}
        ></input>
      </div>
      {dictionary?.isLoading && (
        <>
          <b>Loading...</b>
        </>
      )}
      <ol>
        {definitions?.map((i) => {
          return <li style={{ textAlign: "left" }}>{i.definition}</li>;
        })}
      </ol>
      <div>
        <button onClick={handleSubmit}>Search</button>
      </div>
    </div>
  );
}

export default Dictionary;
