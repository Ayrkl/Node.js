console.log(__filename);
console.log(__dirname);

var firstName = "Mehmet";
var age = 30;

var log = function (name) {
  console.log(name);
};

exports = {
  firstName,
  log,
};
