const util = require('util');

function easyLog(variable) {
  console.log(
    `\n\n💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻 'Testing' 💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻\n\n${util.inspect(
      variable,
      { colors: true, depth: null }
    )}\n\n\n💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻💻\n\n\n`
  );
}

module.exports = easyLog;
