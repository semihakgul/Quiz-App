const questions = [
    {
      category: "Entertainment: Film",
      type: "multiple",
      difficulty: "easy",
      question:
        "This movie contains the quote, \"Nobody puts Baby in a corner.\"",
      correct_answer: ["Dirty Dancing",1],
      incorrect_answers: [
        "Three Men and a Baby",
        "Ferris Bueller\'s Day Off",
        "Pretty in Pink",
      ],
      answers: [
        ["Three Men and a Baby", -1],
        ["Dirty Dancing", 1],
        ["Ferris Bueller\'s Day Off", -1],
        ["Pretty in Pink", -1],
      ],
    },
    {
      category: "Entertainment: Video Games",
      type: "multiple",
      difficulty: "easy",
      question: "What ingredient is NOT used to craft a cake in Minecraft?",
      correct_answer: ["Bread",2],
      incorrect_answers: ["Wheat", "Milk", "Egg"],
      answers: [
        ["Wheat", -1],
        ["Milk", -1],
        ["Bread", 1],
        ["Egg", -1],
      ],
    },
    {
      category: "History",
      type: "multiple",
      difficulty: "easy",
      question: "What was Manfred von Richthofen\'s nickname?",
      correct_answer: ["The Red Baron",1],
      incorrect_answers: [
        "The High Flying Ace",
        "The Blue Serpent ",
        "The Germany Gunner",
      ],
      answers: [
        ["The High Flying Ace", -1],
        ["The Red Baron", 1],
        ["The Blue Serpent ", -1],
        ["The Germany Gunner", -1],
      ],
    },
    {
      category: "Entertainment: Video Games",
      type: "multiple",
      difficulty: "easy",
      question: "Who is the leader of Team Instinct in Pokémon Go?",
      correct_answer: ["Spark",3],
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
      correct_answer: ["Andorra",0],
      incorrect_answers: ["San Marino", "Vatican City", "Lichtenstein"],
      answers: [
        ["Andorra", 1],
        ["San Marino", -1],
        ["Vatican City", -1],
        ["Lichtenstein", -1],
      ],
    },
  ];
  export default questions;