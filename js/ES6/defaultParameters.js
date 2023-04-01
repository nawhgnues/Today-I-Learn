// old
const createUser = (name, email) => {
  const user = {
    name: name ?? "unknown",
    email,
  };
  // create user
};

// ES6
const createUser = (name = "unknown", email) => {
  const user = { email, name };
  // create user
};
