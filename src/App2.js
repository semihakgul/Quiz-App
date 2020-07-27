import React, { useState } from "react";
import "./App.css";
import { DB_CONFIG } from "./Config.js";
import Quiz from "./Quiz";

const data = [
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "easy",
    question:
      "This movie contains the quote, &quot;Nobody puts Baby in a corner.&quot;",
    correct_answer: "Dirty Dancing",
    incorrect_answers: [
      "Three Men and a Baby",
      "Ferris Bueller&#039;s Day Off",
      "Pretty in Pink",
    ],
    answers: [
      ["Three Men and a Baby", -1],
      ["Ferris Bueller&#039;s Day Off", -1],
      ["Pretty in Pink", -1],
      ["Dirty Dancing", 1],
    ],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "What ingredient is NOT used to craft a cake in Minecraft?",
    correct_answer: "Bread",
    incorrect_answers: ["Wheat", "Milk", "Egg"],
    answers: [
      ["Wheat", -1],
      ["Milk", -1],
      ["Egg", -1],
      ["Bread", 1],
    ],
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "easy",
    question: "What was Manfred von Richthofen&#039;s nickname?",
    correct_answer: "The Red Baron",
    incorrect_answers: [
      "The High Flying Ace",
      "The Blue Serpent ",
      "The Germany Gunner",
    ],
    answers: [
      ["The High Flying Ace", -1],
      ["The Blue Serpent ", -1],
      ["The Germany Gunner", -1],
      ["The Red Baron", 1],
    ],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "Who is the leader of Team Instinct in Pok&eacute;mon Go?",
    correct_answer: "Spark",
    incorrect_answers: ["Candela", "Blanche", "Willow"],
    answers: [
      ["Candela", -1],
      ["Blanche", -1],
      ["Willow", -1],
      ["Spark", 1],
    ],
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which small country is located between the borders of France and Spain?",
    correct_answer: "Andorra",
    incorrect_answers: ["San Marino", "Vatican City", "Lichtenstein"],
    answers: [
      ["San Marino", -1],
      ["Vatican City", -1],
      ["Lichtenstein", -1],
      ["Andorra", 1],
    ],
  },
];

function App() {
  
  return (
      <Quiz data={data} />
  );
}

export default App;
