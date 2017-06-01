const moment = require('moment');

const getAge = (dateOfBirth) => {
  if (!moment(dateOfBirth, 'YYYY-MM-DD', true).isValid()) { return 0; }

  return moment().diff(moment(dateOfBirth, 'YYYY-MM-DD', true), 'years');
};

module.exports = getAge;
