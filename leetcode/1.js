

// 一遍哈希表
var twoSum = function(nums, target) {
  const map = new Map();
  for(let i = 0; i < nums.length; i++) {
      const num = nums[i];
      const res = target - num
      const value = map.get(res)
      if(value !== undefined) {
          return [value, i]
      }
      map.set(num, i);
  }
};

twoSum([2,7,11,15], 9)