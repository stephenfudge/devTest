function findOutlier(integers) {
  let checkEven = true;

  // Determine if the majority of integers in the array are even or odd
  if ((integers[0] % 2) + (integers[1] % 2) + (integers[2] % 2) >= 2) {
    checkEven = false;
  }

  // Filter the array to find the outlier integer based on its parity
  return integers.filter(function (num) {
    return (num % 2 === 0) !== checkEven;
  })[0];
}

module.exports = { findOutlier };
