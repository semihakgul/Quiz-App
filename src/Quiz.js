import React, { useState } from "react";
import Question from "./Question";
export default function Quiz({
  commonData,
  changeCommonData,
  results,
  checkedIds,
}) {
  const [questionN, setquestionN] = useState(0);

  return (
    <div>
      <div className="row">
        {commonData.questions.map((question, i) => (
          <div style={{ width: "600px" }} key={i} hidden={!(questionN == i)}>
            <Question
              checkedIds={checkedIds}
              results={results}
              commonData={commonData}
              changeCommonData={changeCommonData}
              setN={(n) => setquestionN(n)}
              question={question}
              id={i}
            />
          </div>
        ))}
      </div>

      <div className="row">
        {commonData.questions.map((question, i) => (
          <div
            onClick={() => setquestionN(i)}
            style={{
              margin: "4px",
              color: "blue",
              cursor: "pointer",
              fontSize: "20px",
              fontWeight: i == questionN && "bold",
            }}
          >
            {i}
          </div>
        ))}
      </div>
    </div>
  );
}
