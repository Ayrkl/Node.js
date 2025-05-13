//public
var firstName = "Mehmet";

//private
var age = 30;

var log = function (name) {
  console.log(name);
};

module.exports.name = firstName;
module.exports.log = log;
