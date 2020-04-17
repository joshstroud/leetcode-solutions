function minimumStepsToOne(num) {
  const minStepCounts = {
    1: 0,
    2: 1,
    3: 1
  };

  return minStepsHelper(num, minStepCounts);
}

function minStepsHelper(num, minStepCounts) {
  if (num === 1) {
    return 0;
  }

  if (minStepCounts[num]) {
    return minStepCounts[num];
  }

  const numsAfterOps = [num / 3, num / 2, num - 1];

  let prevStepCounts = [];
  let prevNums = [];
  numsAfterOps.forEach(currentNum => {
    if (currentNum % 1 === 0) {
      prevStepCounts.push(minStepsHelper(currentNum, minStepCounts));
      prevNums.push(currentNum);
    }
  });

  const minNumSteps = Math.min(...prevStepCounts);
  const prevNum = prevNums[prevStepCounts.indexOf(minNumSteps)];

  minStepCounts[num] = minNumSteps + 1;

  return 1 + minStepsHelper(prevNum, minStepCounts);
}

console.log(minimumStepsToOne(10000));
