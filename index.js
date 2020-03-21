const logger = require("./src/utils/logger");

const addTwoNumbers = (a, b) => {
  logger.info("Adding " + a + " and " + b);
  return a + b;
};
const addThreeNumbers = (a, b, c) => {
  return a + b + c;
};

exports.addTwoNumbers = addTwoNumbers;
exports.addThreeNumbers = addThreeNumbers;
