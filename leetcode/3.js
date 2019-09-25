/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays1 = function(nums1, nums2) {
  let ans = 0
  const arr = nums1
  arr.push(...nums2)
  arr.sort((a, b) => (a - b))
  const len = arr.length;
  if(len%2 === 0) {
    ans = (arr[len/2] + arr[len/2 - 1]) / 2;
  } else {
    ans = arr[Math.floor(len/2)]
  }

  return ans;
};

const findMedianSortedArrays2 = function(nums1, nums2) {
  const m = nums1.length
  const n = nums2.length

};

const nums1 = [1, 3]

const nums2 = [2]

const nums3 = [1, 2]

const nums4 = [3, 4]

var res1 = findMedianSortedArrays1(nums1, nums2)
var res2 = findMedianSortedArrays1(nums3, nums4)

console.log(res1, res2);
