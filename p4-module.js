/*
name: Daniel Woods
Project: CIT 281 P4
*/

const { data } = require("./p4-data.js");

function getQuestions() {
  return data.map((x) => x.question);
}
//console.log(getQuestions());

function getAnswers() {
  return data.map((x) => x.answer);
}
//console.log(getAnswers());

function getQuestionsAnswers() {
  return data.map((x) => ({ ...x }));
}
//console.log(getQuestionsAnswers());

function getQuestion(number = "") {
  const questionNumber = parseInt(number, 10);

  if (isNaN(questionNumber)) {
    return {
      error: "Question number must be an integer",
      question: "",
      number: "",
    };
  } else if (questionNumber < 1) {
    return {
      error: "Question number must be >= 1",
      question: "",
      number: "",
    };
  } else if (questionNumber > data.length) {
    return {
      error:
        "Question number must be less than the number of questions (" +
        data.length +
        ")",
      question: "",
      number: "",
    };
  }

  const index = questionNumber - 1;
  const question = data[index].question;

  return {
    error: "",
    question,
    number: questionNumber,
  };
}
//console.log(getQuestion(1));

function getAnswer(number = "") {
  const answerNumber = parseInt(number, 10);

  if (isNaN(answerNumber)) {
    return {
      error: "Answer number must be an integer",
      answer: "",
      number: "",
    };
  } else if (answerNumber < 1) {
    return {
      error: "Answer number must be >= 1",
      answer: "",
      number: "",
    };
  } else if (answerNumber > data.length) {
    return {
      error:
        "Answer number must be less than the number of answers (" +
        data.length +
        ")",
      answer: "",
      number: "",
    };
  }

  const index = answerNumber - 1;
  const answer = data[index].answer;

  return {
    error: "",
    answer,
    number: answerNumber,
  };
}

function getQuestionAnswer(number = "") {
  const questionAnswerNumber = parseInt(number, 10);

  if (isNaN(questionAnswerNumber)) {
    return {
      error: "Answer number must be an integer",
      answer: "",
      number: "",
    };
  } else if (questionAnswerNumber < 1) {
    return {
      error: "Question number must be >= 1",
      question: "",
      number: "",
    };
  } else if (questionAnswerNumber > data.length) {
    return {
      error:
        "Question number must be less than the number of questions (" +
        data.length +
        ")",
      question: "",
      number: "",
    };
  }

  const index = questionAnswerNumber - 1;
  const answer = data[index].answer;
  const question = data[index].question;

  return {
    error: "",
    question,
    number: questionAnswerNumber,
    answer,
  };
}

/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
  console.log(`\n** Testing ${category} **`);
  console.log("-------------------------------");
  for (const o of args) {
    console.log(`-> ${category}${o.d}:`);
    console.log(o.f);
  }
}

// Set a constant to true to test the appropriate function
const testGetQs = false;
const testGetAs = false;
const testGetQsAs = false;
const testGetQ = false;
const testGetA = false;
const testGetQA = true;
const testAdd = false; // Extra credit
const testUpdate = false; // Extra credit
const testDelete = false; // Extra credit

// getQuestions()
if (testGetQs) {
  testing("getQuestions", { d: "()", f: getQuestions() });
}

// getAnswers()
if (testGetAs) {
  testing("getAnswers", { d: "()", f: getAnswers() });
}

// getQuestionsAnswers()
if (testGetQsAs) {
  testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
}

// getQuestion()
if (testGetQ) {
  testing(
    "getQuestion",
    { d: "()", f: getQuestion() }, // Extra credit: +1
    { d: "(0)", f: getQuestion(0) }, // Extra credit: +1
    { d: "(1)", f: getQuestion(1) },
    { d: "(4)", f: getQuestion(4) } // Extra credit: +1
  );
}

// getAnswer()
if (testGetA) {
  testing(
    "getAnswer",
    { d: "()", f: getAnswer() }, // Extra credit: +1
    { d: "(0)", f: getAnswer(0) }, // Extra credit: +1
    { d: "(1)", f: getAnswer(1) },
    { d: "(4)", f: getAnswer(4) } // Extra credit: +1
  );
}

// getQuestionAnswer()
if (testGetQA) {
  testing(
    "getQuestionAnswer",
    { d: "()", f: getQuestionAnswer() }, // Extra credit: +1
    { d: "(0)", f: getQuestionAnswer(0) }, // Extra credit: +1
    { d: "(1)", f: getQuestionAnswer(1) },
    { d: "(4)", f: getQuestionAnswer(4) } // Extra credit: +1
  );
}

module.exports = {
  getQuestions,
  getAnswers,
  getQuestionsAnswers,
  getQuestion,
  getAnswer,
  getQuestionAnswer,
};