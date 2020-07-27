import React, { useState } from "react";
import Countdown from "react-countdown";
import Quiz from "./Quiz";
import Results from "./Results";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";

export default function Timer({
  commonData,
  changeCommonData,
  results,
  checkedIds,
}) {
  const [leftTime, setLeftTime] = useState(10000);
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return (
        <>
          <div className="row">
            <h3>Exam finished</h3>
          </div>
          <div className="">
            <Router>
              <div className="row">
                {leftTime > -1 && (
                  <Link
                    to={{ pathname: "/results" }}
                    onClick={() => setLeftTime(-1)}
                  >
                    See the results{" "}
                  </Link>
                )}
              </div>
              <Switch>
                <Route path="/results">
                  <Results
                    results={results}
                    checkedIds={checkedIds}
                    commonData={commonData}
                    changeCommonData={changeCommonData}
                  />
                </Route>
              </Switch>
            </Router>
          </div>
        </>
      );
    } else {
      // Render a countdown
      return (
        <div>
          <h5 className="row">
            {hours}:{minutes}:{seconds}
          </h5>
          <div className="row">
            <button
              onClick={() => setLeftTime(0)}
              style={{
                borderRadius: "5px",
                border: "solid",
                borderColor: "#e6e6e6ff",
              }}
            >
              Finish Now
            </button>
          </div>
          ;
          <Quiz
            commonData={commonData}
            changeCommonData={changeCommonData}
            results={results}
            checkedIds={checkedIds}
          />
        </div>
      );
    }
  };
  return (
    <>
      {commonData.nameSubmitted ? (
        <div style={{margin:"4%"}}>
          <Countdown
            date={Date.now() + leftTime}
            onComplete={() => setLeftTime(0)}
            renderer={renderer}
          />
        </div>
      ) : (
        <div className="row">
          <Link to="/">You have not submitted your name!</Link>{" "}
        </div>
      )}
    </>
  );
}
