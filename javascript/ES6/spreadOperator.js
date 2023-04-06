// old
const details = { name: "Man Utd" };
const stats = { games: 7, points: 21 };

const team = Object.assign({}, details, stats);

// ES6
const details = { name: "Man Utd" };
const stats = { games: 7, points: 21 };

const team = {
  ...details,
  ...stats,
};
