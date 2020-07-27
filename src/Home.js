import React from "react";
import { Link, Route } from "react-router-dom";
import Quiz from "./Quiz";


export default function Home({ commonData, changeCommonData }) {
  const changeName = (e) => {
    changeCommonData({ name: e.target.value });
  };
  const submitName = () => {
    commonData.name && changeCommonData({ nameSubmitted: true }) ;
  };
  return (
    <div style={{margin:"10%"}}>
    <h3 className="row">
        Welcome! 
    </h3>
      <div className="row">
          This a 1 minute test. Before starting please enter your name.
      </div>
      <div className="row">
        {!commonData.nameSubmitted&&<>    
          <input placeholder="Name Surname" onChange={changeName} style={{
                margin: "8px",
                paddingLeft:"6px",
                width: "200px",
                height: "24px",
                borderRadius: "5px",
                border: "solid",
                borderColor: "#e6e6e6ff",
              }} />
          <button disabled={!commonData.name} onClick={submitName} style={{
                margin: "8px",
                width: "70px",
                height: "32px",
                borderRadius: "5px",
                border: "solid",
                borderColor: "#e6e6e6ff",
              }}> Submit</button>
        </>}
        {commonData.nameSubmitted&&<>    
          <div className="row">Welcome {commonData.name}! Now you can <Link className="clickable" to="/quiz">start the quiz.</Link></div>
        </>}
      </div>
    </div>
  );
}
