import React, { useState } from "react";
import "./App.css";
import Home from "./Home";
import questions from "./questions";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Timer from "./Timer";

function App() {
  var results = [0, 0, 0, 0, 0];
  var checkedIds = [-1, -1, -1, -1, -1];
  const initialValues = {
    questions: questions,
    quizStarted: false,
    quizCompleted: false,
    nameSubmitted: false,
    leftTime: 2000,
  };
  const [commonData, setCommonData] = useState(initialValues);

  const changeCommonData = (newData) => {
    setCommonData({ ...commonData, ...newData });
  };

  const restart = () => {
    setCommonData({ initialValues });
  };
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home commonData={commonData} changeCommonData={changeCommonData} />
          </Route>
          <Route path="/quiz">
            <Timer
              results={results}
              checkedIds={checkedIds}
              commonData={commonData}
              changeCommonData={changeCommonData}
            />
          </Route>
          <Route path="/results">
            <>
              <div className="row">
                <h5>
                  You have to submit your name and solve the quiz to see the
                  results
                </h5>
              </div>
              <div className="row">
                <Link to="/">Go to home page.</Link>
              </div>
            </>
          </Route>
          <Route path="*">
            <div style={{margin:"10%"}}>
              <div className="row">
                <h2 >Page not found. :(</h2>
              </div>
              <div className="row">
                <Link to="/" >Go to home page.</Link>
              </div>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
