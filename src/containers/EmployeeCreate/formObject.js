export const formObject = {
  name: {
    label: 'Name',
    elementType: 'input',
    elementConfig: {
      id: 'name',
      name: 'name',
      type: 'text',
      placeholder: 'e.g. Jane Doe'
    },
    value: '',
    validation: {
      required: true
    },
    valid: false,
    touched: false,
    hint: 'First and last name'
  },
  dateOfBirth: {
    label: 'Birthdate',
    elementType: 'input',
    elementConfig: {
      type: 'date',
      placeholder: 'e.g. 02/17/1990'
    },
    value: '',
    validation: {
      required: true
    },
    valid: false,
    touched: false,
    hint: 'MM/DD//YYYY'
  },
  jobTitle: {
    label: 'Job Title',
    elementType: 'input',
    elementConfig: {
      type: 'text',
      placeholder: 'e.g. Product manager'
    },
    value: '',
    validation: {
      required: true
    },
    valid: false,
    touched: false,
    hint: 'What is their role?'
  },
  country: {
    label: 'Country',
    elementType: 'select',
    elementConfig: {
      options: [
        { value: 'Argentina', displayValue: 'Argentina' },
        { value: 'Ukraine', displayValue: 'Ukraine' },
        { value: 'Portugal', displayValue: 'Portugal' },
        { value: 'UAE', displayValue: 'United Arab Emirates' },
        { value: 'UK', displayValue: 'United Kingdom' },
        { value: 'Venezuela', displayValue: 'Venezuela' }
      ]
    },
    value: 'Portugal',
    validation: {
      required: true
    },
    valid: true,
    touched: false,
    hint: 'Where are they based?'
  },
  salary: {
    label: 'Salary',
    elementType: 'input',
    elementConfig: {
      type: 'number',
      placeholder: 'e.g. 5000'
    },
    value: '',
    validation: {
      required: true
    },
    valid: false,
    touched: false,
    hint: 'Gross yearly salary'
  }
};
