// old
const save = (params) => {
  saveData(params.name, params.email, params.dob);
};

// ES6
const save = ({ name, email, dob }) => {
  saveData(name, email, dob);
};
