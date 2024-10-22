/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  const bkNums1: number[] = structuredClone(nums1);

  let start1: number = 0;
  let start2: number = 0;

  for (let i = 0; i < m + n; i++) {
    const num1: number = bkNums1[start1];
    const num2: number = nums2[start2];
    if (!num1 && start1 >= m) {
      nums1[i] = num2;
      start1++;
      start2++;
    } else if (num2 == null) {
      nums1[i] = num1;
      start1++;
    } else if (num1 === num2) {
      nums1[i] = num1;
      nums1[++i] = num2;
      start1++;
      start2++;
    } else if (num1 < num2) {
      nums1[i] = num1;
      start1++;
    } else {
      nums1[i] = num2;
      start2++;
    }
  }
}
