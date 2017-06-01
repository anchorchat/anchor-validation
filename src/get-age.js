const moment = require('moment');

const getAge = (dateOfBirth, format) => {
  if (!moment(dateOfBirth, format, true).isValid()) { return 0; }

  return moment().diff(moment(dateOfBirth, format, true), 'years');
};

module.exports = getAge;
