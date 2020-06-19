function handleRun(nums) {
  let globalMax = 0;
  let localMax = 0;
  let jumps = 0;
  let jumpIndices = [];
  for (let i = 0; i < nums.length - 1; i++) {
    // if next cell is out of bounds, return -1
    if (localMax < i) {
      jumps = -1;
      return;
    }

    //if last cell is reachable, return jump count
    else if (localMax > nums.length - 1) {
      return;
    }

    const jumpRange = i + nums[i];
    globalMax = Math.max(globalMax, jumpRange);
    if (localMax === i) {
      localMax = globalMax;
      jumps++;
    }

    return jumps;
  }
}

export default handleRun;
