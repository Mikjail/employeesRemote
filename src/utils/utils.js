import moment from 'moment';

export const updateObject = (oldObject, updatedProperties) => ({
  ...oldObject,
  ...updatedProperties
});

export const setInputValue = (type, value) => {
  if (type === 'date') {
    return moment(value, 'MM/DD/YYYY').format('YYYY-MM-DD');
  }
  return value;
};

export const checkValidity = (value, rules) => {
  let isValid = true;

  if (!rules) {
    return true;
  }

  if (rules.required) {
    isValid = value.toString().trim() !== '' && isValid;
  }

  if (rules.isNumeric) {
    const pattern = /^\d+$/;
    isValid = pattern.test(value) && isValid;
  }

  return isValid;
};
