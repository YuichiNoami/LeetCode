function removeElement(nums: number[], val: number): number {
  let isSame: number = 0;
  const end: number = nums.length;
  for (let i = 0; i < end; i++) {
    const el = nums[i];
    if (el === val) {
      nums.splice(i, 1);
      i--;
      isSame++;
    }
  }

  return end - isSame;
}
