const fs = require('fs');
const { readFileSync, writeFileSync } = require("fs");
const arrayToString = (arr) => {
  return arr.reduce((acc, line) => {
    return line === '\r\n' ? (line) : (acc + line + '\r\n');
  } , '');
};
const readScenarioDefinition = (fileName, scenarioname) => {
  const range = [];
  let res = '';
  const content = readFileSync(`cypress/pool/lib/${fileName}.feature`, "utf8");
  content.split('\r\n').forEach((line, idx) => {
    const reg = new RegExp(`Scenario.*: ${scenarioname}`, 'i')
    if(reg.test(line) && !range.length) {
      range.push(idx);
    }
  });
  content.split('\r\n').forEach((line, idx) => {
    if(idx > range[0]) {
      if(/Scenario.*: .*/.test(line) && range.length === 1) {
        range.push(idx - 1);
      }
    }
  });
  const ret = content.split('\r\n').filter((line, idx) => {
    return (idx >= range[0]) && (idx <= range[1]);
  }).concat('\r\n');
  return ret;
};
const getReplacements = (input) => {
  const replacements = {};
  input.split('\n').forEach((line, idx) => {
    if(/Scenario: Use: .*/.test(line)) {
      const matches = /Scenario: Use: (.*)/.exec(line);
      const [fileName, scenarioName] = matches[1].split('/');
      const stepDefinition = readScenarioDefinition(fileName, scenarioName);
      replacements[idx] = arrayToString(stepDefinition);
    } else {
    }
   });
  return replacements;
};
const getReplacedFile = (input, replacements) => {
  console.log({input});
  const output = input.split('\r\n').map((line, idx) => {
    if(Object.keys(replacements).includes(idx.toString())) {
      return replacements[idx];
    } else {
      //console.log({line});
      return line;
    }
  });
  //console.log({output});
  return arrayToString(output);
};
const main = () => {
  var files = fs.readdirSync('cypress/pool');
  files.forEach((file) => {
    if(/.*feature/.test(file)) {
    const input = readFileSync(`cypress/pool/${file}`, "utf8");
    const replacements = getReplacements(input);
    const output = getReplacedFile(input, replacements);
    writeFileSync(`cypress/integration/${file}_temp.feature`, output);
    }
  });
};
main();