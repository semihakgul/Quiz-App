import React, { useState } from "react";

export default function Question({ id, commonData, changeCommonData, setN, results, disableAll, checkedIds}) {
  const [checkedId, setcheckedId] = useState(disableAll?(checkedIds[id]):-1);
  const handleChange = (e) => {
    checkedIds[id] = e.target.id
    setcheckedId(e.target.id);
    results[id] = e.target.value;
    
  };

  const handleUncheck = (e) => {
    checkedIds[id] = -1
    setcheckedId(-1);
    results[id] = e.target.value;
    
  };
  
  return (
    <>
      <div className="row" style={{ width: "100%" }}>
        <button
          className="arrow"
          hidden={disableAll}
          disabled={id == 0}
          onClick={() => setN(id - 1)}
          style={{
            borderRadius: "5px",
            border: "solid",
            borderColor: "#e6e6e6ff",
          }}
          >
          <h1>{"<"}</h1>
        </button>
        <div style={{ margin: "20px", width: "500px", minHeight: "150px" }}>
          <div>
            <label>{id + 1}- </label>
            {commonData.questions[id]["question"]}
          </div>

          {commonData.questions[id]["answers"].map((answer, i) => (
            <div key={i} style={{backgroundColor:(disableAll&&commonData.questions[id].correct_answer[1]==i&&"lightgreen")||(disableAll&&i==checkedId&&"tomato")}}>
              
              <input
                disabled={disableAll}
                type="radio"
                checked={checkedId == i}
                onChange={handleChange}
                id={i}
                value={answer[1]}
                />
              {answer[0]}
            </div>
          ))}
          {!disableAll&&<div >
            <div className="clickable" style={{color:"blue"}} onClick={handleUncheck} > Clear</div>
          </div>}
        </div>
        <button
          className="arrow"
          hidden={disableAll}
          disabled={id == 4}
          onClick={() => setN(id + 1)}
          style={{
            borderRadius: "5px",
            border: "solid",
            borderColor: "#e6e6e6ff",
          }}>
          <h1>{">"}</h1>
        </button>
      </div>
    </>
  );
}
