/*
name: Daniel Woods
Project: CIT 281 P4
*/
const fastify = require("fastify")();
const {
  getQuestions,
  getAnswers,
  getQuestionsAnswers,
  getQuestion,
  getAnswer,
  getQuestionAnswer,
} = require("./p4-module.js");

fastify.get("/cit/question", (request, reply) => {
  let question = {
    error: "",
    statusCode: 200,
    questions: getQuestions(),
  };

  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(JSON.stringify(question));
});

fastify.get("/cit/answer", (request, reply) => {
  let answer = {
    error: "",
    statusCode: 200,
    answers: getAnswers(),
  };

  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(JSON.stringify(answer));
});

fastify.get("/cit/questionanswer", (request, reply) => {
  let questionAnswer = {
    error: "",
    statusCode: 200,
    questions_answers: getQuestionsAnswers(),
  };

  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(JSON.stringify(questionAnswer));
});

fastify.get("/cit/question/:number", (request, reply) => {
  const { number } = request.params;
  let n = parseInt(number);
  let que = getQuestion(n);

  let questionNumber = {
    error: "",
    statusCode: 200,
    question: que.question,
    number: n,
  };

  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(JSON.stringify(questionNumber));
});

fastify.get("/cit/answer/:number", (request, reply) => {
  const { number } = request.params;
  let n = parseInt(number);
  let ans = getAnswer(n);

  let questionAnswer = {
    error: "",
    statusCode: 200,
    answer: ans.answer,
    number: n,
  };

  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(JSON.stringify(questionAnswer));
});

fastify.get("/cit/questionanswer/:number", (request, reply) => {
  const { number } = request.params;
  let n = parseInt(number);

  let questionAnswerNumber = {
    error: "",
    statusCode: 200,
    question: getQuestionAnswer(n).question,
    answer: getQuestionAnswer(n).answer,
    number: n,
  };

  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(JSON.stringify(questionAnswerNumber));
});

fastify.get("*", (request, reply) => {
  let routeNotFound = {
    error: "Route not found",
    statusCode: 404,
  };

  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(JSON.stringify(routeNotFound));
});

const listenIP = "localhost";
const listenPort = 8082;
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});
