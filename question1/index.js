function isValidWalk(walk) {
  // Check if the walk is exactly 10 minutes long
  if (walk.length !== 10) {
    return false;
  }

  // Count the number of steps in each direction
  let count = {
    n: 0,
    s: 0,
    e: 0,
    w: 0,
  };

  // Iterate over each step and update the count
  for (let direction of walk) {
    count[direction]++;
  }

  // Check if the number of steps in the opposite directions cancel each other out
  if (count["n"] === count["s"] && count["e"] === count["w"]) {
    return true;
  }

  return false;
}

module.exports = { isValidWalk };
