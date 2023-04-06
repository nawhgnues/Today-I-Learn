// old
const addId = (user, id) => {
  user.id = id !== null && id !== undefined ? id : "unknown";
  return user;
};

// ES6
const addId = (user, id) => {
  user.id = id ?? "unknown";
  return user;
};
