import React from "react";
import Question from "./Question";
import { Link } from "react-router-dom";

export default function Results({
  commonData,
  changeCommonData,
  hash,
  results,
  checkedIds,
}) {
  var score = 0;
  var correct_answers = 0;
  var incorrect_answers = 0;
  var empty_answers = 0;

  for (let index = 0; index < 5; index++) {
    if (results[index] == -1) {
      score -= 1.0 / 4;
      incorrect_answers += 1;
    } else if (results[index] == 1) {
      score += 1;
      correct_answers += 1;
    } else empty_answers += 1;
  }

  return (
    <>
      <div className="row">
        <div>Thanks for your participation, {commonData.name}. </div>
      </div>
      <div className="row">
        <div>
          <p>Score :{score}</p>
          <p>Correct :{correct_answers}/5</p>
          <p>Incorrect :{incorrect_answers}/5</p>
          <p>Empty Answers :{incorrect_answers}/5</p>
        </div>
      </div>
      <div className="row">
        <div>
          {commonData.questions.map((question, i) => (
              <div style={{ width: "600px" }} key={i}>
              <Question
                checkedIds={checkedIds}
                disableAll={true}
                results={results}
                commonData={commonData}
                question={question}
                id={i}
              />
            </div>
          ))}
        </div>
      </div>
<a className="row" href="/">Restart</a>
    </>
  );
}
