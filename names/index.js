const peopleNames = require("../country/state/city/index");
const getFirstNames = require("../utilities/utils/index");

const getPeopleInCity = () => {
  return getFirstNames(peopleNames);
};

module.exports = getPeopleInCity();
console.log(getPeopleInCity());
