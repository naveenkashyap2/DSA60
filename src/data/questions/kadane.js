// Pattern: Kadane — 6 questions (exact supplied list)
export default [
  {
    id: 'kd-01',
    slug: 'maximum-subarray-sum',
    title: 'Maximum Subarray Sum',
    pattern: 'kadane',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/maximum-subarray/',
    extra: [],
    summary:
      'Given an integer array (with at least one number), find the contiguous subarray with the largest sum and return that sum.',
    asked: 'Return the maximum sum of any non-empty contiguous subarray.',
    why:
      'This is the classic Kadane problem: the best subarray ending at i either extends the best ending at i-1 or restarts at i.',
    clues: ['contiguous subarray', 'maximum sum', 'one pass'],
    brute: {
      idea: 'Check every (start, end) pair and sum the slice.',
      time: 'O(n²)',
      space: 'O(1)'
    },
    optimal: {
      idea:
        'endHere = best subarray sum that must end at the current index. endHere = max(x, endHere + x). Keep the global best across all positions.',
      steps: [
        'endHere = nums[0], best = nums[0].',
        'For i from 1 to n-1:',
        'endHere = max(nums[i], endHere + nums[i]) — restart if extending hurts.',
        'best = max(best, endHere).',
        'Return best.'
      ],
      time: 'O(n)',
      space: 'O(1)'
    },
    dry: [
      'nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]',
      'endHere=-2, best=-2',
      'x=1: endHere=max(1,-1)=1, best=1',
      'x=-3: endHere=-2, best=1',
      'x=4: endHere=4, best=4',
      'x=-1: endHere=3; x=2: endHere=5, best=5; x=1: endHere=6, best=6',
      'x=-5: endHere=1; x=4: endHere=5',
      'Answer: 6 (subarray [4,-1,2,1])'
    ],
    hints: [
      'Think of "best sum of a subarray ending HERE" — what are the two options?',
      'If endHere + x < x, the previous part is a liability — drop it.',
      'An all-negative array must return the largest single element — does your formula handle that?'
    ],
    code: {
      javascript: `function maxSubArray(nums) {
  let endHere = nums[0], best = nums[0];
  for (let i = 1; i < nums.length; i++) {
    endHere = Math.max(nums[i], endHere + nums[i]);
    best = Math.max(best, endHere);
  }
  return best;
}`,
      python: `def maxSubArray(nums):
    end_here = best = nums[0]
    for x in nums[1:]:
        end_here = max(x, end_here + x)
        best = max(best, end_here)
    return best`,
      java: `class Solution {
    public int maxSubArray(int[] nums) {
        int endHere = nums[0], best = nums[0];
        for (int i = 1; i < nums.length; i++) {
            endHere = Math.max(nums[i], endHere + nums[i]);
            best = Math.max(best, endHere);
        }
        return best;
    }
}`,
      cpp: `int maxSubArray(vector<int>& nums) {
    int endHere = nums[0], best = nums[0];
    for (int i = 1; i < (int)nums.size(); i++) {
        endHere = max(nums[i], endHere + nums[i]);
        best = max(best, endHere);
    }
    return best;
}`
    }
  },
  {
    id: 'kd-02',
    slug: 'minimum-subarray-sum',
    title: 'Minimum Subarray Sum',
    pattern: 'kadane',
    difficulty: 'Medium',
    platform: 'GeeksforGeeks',
    url: 'https://www.geeksforgeeks.org/problems/smallest-sum-contiguous-subarray/1',
    extra: [],
    summary:
      'Given an array of positive and negative integers, find the smallest (most negative) sum of a contiguous subarray.',
    asked: 'Return the minimum sum over all non-empty contiguous subarrays.',
    why:
      'Kadane runs in reverse: now we track the minimum ending here, restarting when extending makes things better.',
    clues: ['contiguous subarray', 'minimum sum', 'negative numbers'],
    brute: {
      idea: 'All (start, end) pairs with running sums.',
      time: 'O(n²)',
      space: 'O(1)'
    },
    optimal: {
      idea:
        'Mirror of max Kadane: endHere = min(x, endHere + x), keep the global minimum.',
      steps: [
        'endHere = arr[0], best = arr[0].',
        'For each next x: endHere = min(x, endHere + x).',
        'best = min(best, endHere).',
        'Return best.'
      ],
      time: 'O(n)',
      space: 'O(1)'
    },
    dry: [
      'arr = [3, -4, 2, -3, -1, 7, -5]',
      'endHere=3, best=3',
      'x=-4: endHere=-4, best=-4',
      'x=2: endHere=-2',
      'x=-3: endHere=-5, best=-5',
      'x=-1: endHere=-6, best=-6',
      'x=7: endHere=1; x=-5: endHere=-4',
      'Answer: -6 (subarray [-4, 2, -3, -1])'
    ],
    hints: [
      'Same two choices, flipped: extend or restart.',
      'Now you restart when endHere + x > x (the previous part helps).',
      'Track the minimum of endHere across positions.'
    ],
    code: {
      javascript: `function minSubArraySum(arr) {
  let endHere = arr[0], best = arr[0];
  for (let i = 1; i < arr.length; i++) {
    endHere = Math.min(arr[i], endHere + arr[i]);
    best = Math.min(best, endHere);
  }
  return best;
}`,
      python: `def minSubArraySum(arr):
    end_here = best = arr[0]
    for x in arr[1:]:
        end_here = min(x, end_here + x)
        best = min(best, end_here)
    return best`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'kd-03',
    slug: 'maximum-product-subarray',
    title: 'Maximum Product Subarray',
    pattern: 'kadane',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/maximum-product-subarray/',
    extra: [],
    summary:
      'Find the contiguous subarray whose product is the largest, and return that product.',
    asked: 'Return the maximum product of any non-empty contiguous subarray.',
    why:
      'Kadane for product: because negatives flip signs, a currently small (negative) product can become the best when multiplied by another negative. Track both the max and min ending here.',
    clues: ['product instead of sum', 'negatives flip signs', 'contiguous subarray'],
    brute: {
      idea: 'All (start, end) pairs with running products.',
      time: 'O(n²)',
      space: 'O(1)'
    },
    optimal: {
      idea:
        'Keep maxSoFar and minSoFar (best/worst product ending at i). At each x: newMax = max(x, x*maxSoFar, x*minSoFar); newMin = min(x, x*maxSoFar, x*minSoFar). Answer is the global maxSoFar.',
      steps: [
        'maxSoFar = minSoFar = best = nums[0].',
        'For each next x:',
        'candidates = { x, x * maxSoFar, x * minSoFar }.',
        'maxSoFar = max(candidates); minSoFar = min(candidates).',
        'best = max(best, maxSoFar).'
      ],
      time: 'O(n)',
      space: 'O(1)'
    },
    dry: [
      'nums = [2, 3, -2, 4]',
      'start: max=2, min=2, best=2',
      'x=3: max=max(3,6,6)=6, min=min(3,6,6)=3, best=6',
      'x=-2: max=max(-2,-12,-6)=-2, min=min(-2,-12,-6)=-12, best=6',
      'x=4: max=max(4,-8,-48)=4, min=min(4,-8,-48)=-48, best=6',
      'Answer: 6 ([2,3])'
    ],
    hints: [
      'Why is one running value not enough here? (sign flips)',
      'A very negative product times a negative becomes very positive.',
      'Always consider three candidates: start fresh, extend max, extend min.'
    ],
    code: {
      javascript: `function maxProduct(nums) {
  let maxSoFar = nums[0], minSoFar = nums[0], best = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const x = nums[i];
    const c1 = x, c2 = x * maxSoFar, c3 = x * minSoFar;
    maxSoFar = Math.max(c1, c2, c3);
    minSoFar = Math.min(c1, c2, c3);
    best = Math.max(best, maxSoFar);
  }
  return best;
}`,
      python: `def maxProduct(nums):
    max_so_far = min_so_far = best = nums[0]
    for x in nums[1:]:
        c1, c2, c3 = x, x * max_so_far, x * min_so_far
        max_so_far = max(c1, c2, c3)
        min_so_far = min(c1, c2, c3)
        best = max(best, max_so_far)
    return best`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'kd-04',
    slug: 'maximum-subarray-sum-with-one-deletion',
    title: 'Maximum Subarray Sum with One Deletion',
    pattern: 'kadane',
    difficulty: 'Hard',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/maximum-subarray-sum-with-one-deletion/',
    extra: [],
    summary:
      'Return the maximum sum of a non-empty subarray where you may delete at most one element (the subarray must be non-empty after deletion).',
    asked:
      'Best Kadane answer where one element inside the chosen subarray may be dropped.',
    why:
      'Two Kadane tracks: one where no deletion has been used yet (endKeep) and one where the deletion already happened (endDel). Each step decides delete or keep.',
    clues: ['delete at most one element', 'subarray sum', 'Kadane variant'],
    brute: {
      idea: 'Try every deletion position and run max-subarray on the two sides + crossing cases.',
      time: 'O(n²)',
      space: 'O(1)'
    },
    optimal: {
      idea:
        'DP with two states per index: endKeep = best ending at i without deletion; endDel = best ending at i with deletion used. Transition: endDel_new = max(endKeep (delete i), endDel + x (keep i)); endKeep_new = max(x, endKeep + x).',
      steps: [
        'endKeep = nums[0]; endDel = -∞; best = nums[0].',
        'For i from 1 to n-1:',
        'newEndDel = max(endKeep, endDel + nums[i]) — delete nums[i] or keep it after an earlier deletion.',
        'endKeep = max(nums[i], endKeep + nums[i]).',
        'endDel = newEndDel; best = max(best, endKeep, endDel).',
        'Return best.'
      ],
      time: 'O(n)',
      space: 'O(1)'
    },
    dry: [
      'nums = [1, -2, 3, 5]',
      'endKeep=1, endDel=-∞, best=1',
      'i=1 (-2): endDel=max(1, -∞)=1 (delete -2); endKeep=max(-2,-1)=-1; best=1',
      'i=2 (3): endDel=max(-1, 1+3)=4; endKeep=3; best=4',
      'i=3 (5): endDel=max(3, 4+5)=9; endKeep=8; best=9',
      'Answer: 9 ([1,-2,3,5] with -2 deleted → 1+3+5)'
    ],
    hints: [
      'Model it as DP: state = has deletion been used yet?',
      'When processing x, the two choices are: delete x, or keep x (if you already deleted).',
      'endDel can only start from endKeep — deletion happens at some element.'
    ],
    code: {
      javascript: `function maximumSum(nums) {
  const n = nums.length;
  let endKeep = nums[0]; // best ending here, no deletion used
  let endDel = -Infinity; // best ending here, deletion used
  let best = nums[0];
  for (let i = 1; i < n; i++) {
    const x = nums[i];
    const newEndDel = Math.max(endKeep, endDel + x);
    endKeep = Math.max(x, endKeep + x);
    endDel = newEndDel;
    best = Math.max(best, endKeep, endDel);
  }
  return best;
}`,
      python: `def maximumSum(nums):
    n = len(nums)
    end_keep = nums[0]
    end_del = float('-inf')
    best = nums[0]
    for i in range(1, n):
        x = nums[i]
        new_end_del = max(end_keep, end_del + x)
        end_keep = max(x, end_keep + x)
        end_del = new_end_del
        best = max(best, end_keep, end_del)
    return best`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'kd-05',
    slug: 'maximum-absolute-sum-of-any-subarray',
    title: 'Maximum Absolute Sum of Any Subarray',
    pattern: 'kadane',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/',
    extra: [],
    summary:
      'Return the maximum absolute sum of any (possibly empty) subarray. Absolute sum = |sum of elements|.',
    asked:
      'Maximize |sum(subarray)| over all subarrays — so the answer is the larger of the max subarray sum and the absolute value of the min subarray sum.',
    why:
      '|x| is large when x is very positive OR very negative. Run Kadane twice: once for the maximum, once for the minimum subarray sum.',
    clues: ['absolute sum', 'empty subarray allowed', 'max of + and -'],
    brute: {
      idea: 'All subarray sums, take the max of absolute values.',
      time: 'O(n²)',
      space: 'O(1)'
    },
    optimal: {
      idea:
        'answer = max(maxKadane(nums), -minKadane(nums)). One pass maintaining both the max-ending and min-ending states.',
      steps: [
        'Track endMax and endMin simultaneously.',
        'endMax = max(x, endMax + x); bestMax = max(bestMax, endMax).',
        'endMin = min(x, endMin + x); bestMin = min(bestMin, endMin).',
        'Return max(bestMax, -bestMin).'
      ],
      time: 'O(n)',
      space: 'O(1)'
    },
    dry: [
      'nums = [2, 3, -3, -2, 4]',
      'Max Kadane: [2,3] or [4] or [2,3,-3,-2,4]=4 → bestMax = 5',
      'Min Kadane: [-3,-2] = -5 → -bestMin = 5',
      'Answer: max(5, 5) = 5'
    ],
    hints: [
      'A huge absolute value comes from either a huge sum or a huge negative sum.',
      'Run max-Kadane and min-Kadane in a single pass.',
      'The empty subarray (sum 0) is allowed — it never hurts the maximum.'
    ],
    code: {
      javascript: `function maxAbsoluteSum(nums) {
  let endMax = nums[0], bestMax = nums[0];
  let endMin = nums[0], bestMin = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const x = nums[i];
    endMax = Math.max(x, endMax + x);
    bestMax = Math.max(bestMax, endMax);
    endMin = Math.min(x, endMin + x);
    bestMin = Math.min(bestMin, endMin);
  }
  return Math.max(bestMax, -bestMin);
}`,
      python: `def maxAbsoluteSum(nums):
    end_max = best_max = nums[0]
    end_min = best_min = nums[0]
    for x in nums[1:]:
        end_max = max(x, end_max + x)
        best_max = max(best_max, end_max)
        end_min = min(x, end_min + x)
        best_min = min(best_min, end_min)
    return max(best_max, -best_min)`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'kd-06',
    slug: 'maximum-sum-circular-subarray',
    title: 'Maximum Sum Circular Subarray',
    pattern: 'kadane',
    difficulty: 'Hard',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/maximum-sum-circular-subarray/',
    extra: [],
    summary:
      'The array is circular (index i connects to (i+1) mod n). Find the maximum possible sum of a non-empty subarray.',
    asked:
      'A subarray may wrap around the end. Return the best sum (non-empty subarray required).',
    why:
      'A circular max subarray either does not wrap (ordinary Kadane) or wraps, which equals total - (minimum middle subarray). So: max(maxKadane, total - minKadane), with an all-negative guard.',
    clues: ['circular array', 'wrap around allowed', 'max subarray'],
    brute: {
      idea: 'Duplicate the array and restrict window length to n; check all windows.',
      time: 'O(n²)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'Best = max(normal Kadane max, totalSum - Kadane min). If the array is all negative, total - min equals 0 (empty), but subarray must be non-empty → answer is the max element (the normal Kadane result).',
      steps: [
        'Compute total, maxKadane, and minKadane in one pass.',
        'If maxKadane < 0: return maxKadane (all negative case).',
        'Otherwise return max(maxKadane, total - minKadane).'
      ],
      time: 'O(n)',
      space: 'O(1)'
    },
    dry: [
      'nums = [5, -3, 5]',
      'total = 7',
      'maxKadane = 5 (or 5-3+5=7 → actually 7!)',
      'maxKadane: 5 → 5; 2; 7 → best = 7',
      'minKadane = -3',
      'wrap candidate: total - min = 7 - (-3) = 10 → [5 (tail)] + [5 (head)] wrapping? that is 5+5 = 10? subarray [5, 5] wrapping = 10 ✓',
      'Answer: 10'
    ],
    hints: [
      'A wrapping subarray = the whole array minus a middle (non-wrapping) subarray.',
      'To maximize the wrap, minimize the middle — that is min-Kadane.',
      'What goes wrong with total - minKadane when every element is negative?'
    ],
    code: {
      javascript: `function maxSubarraySumCircular(nums) {
  const total = nums.reduce((a, b) => a + b, 0);
  let endMax = nums[0], bestMax = nums[0];
  let endMin = nums[0], bestMin = nums[0];
  for (let i = 1; i < nums.length; i++) {
    endMax = Math.max(nums[i], endMax + nums[i]);
    bestMax = Math.max(bestMax, endMax);
    endMin = Math.min(nums[i], endMin + nums[i]);
    bestMin = Math.min(bestMin, endMin);
  }
  if (bestMax < 0) return bestMax; // all negative
  return Math.max(bestMax, total - bestMin);
}`,
      python: `def maxSubarraySumCircular(nums):
    total = sum(nums)
    end_max = best_max = nums[0]
    end_min = best_min = nums[0]
    for x in nums[1:]:
        end_max = max(x, end_max + x)
        best_max = max(best_max, end_max)
        end_min = min(x, end_min + x)
        best_min = min(best_min, end_min)
    if best_max < 0:
        return best_max
    return max(best_max, total - best_min)`,
      java: '',
      cpp: ''
    }
  }
];
