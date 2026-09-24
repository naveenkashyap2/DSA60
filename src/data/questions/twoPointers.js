// Pattern: Two Pointers — 12 questions (exact supplied list)
export default [
  {
    id: 'tp-01',
    slug: 'pair-with-target-sum',
    title: 'Pair with Target Sum',
    pattern: 'two-pointers',
    difficulty: 'Easy',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/',
    extra: [],
    summary:
      'Given a sorted array of integers and a target, find two numbers that add up to the target and return their indices.',
    asked:
      'Return the 1-indexed positions of the two numbers whose sum equals the target. There is exactly one valid pair.',
    why:
      'The array is sorted, so the sum of the two ends tells you exactly which pointer to move — one pass is enough.',
    clues: ['sorted array', 'pair with target', 'two numbers sum to target'],
    brute: {
      idea: 'Nested loops: check every pair (i, j) and test nums[i] + nums[j] === target.',
      time: 'O(n²)',
      space: 'O(1)'
    },
    optimal: {
      idea:
        'Keep a left pointer at the start and a right pointer at the end. If the sum is too small, move left right; if too big, move right left. Stop when they meet.',
      steps: [
        'Set left = 0, right = n - 1.',
        'Compute sum = nums[left] + nums[right].',
        'If sum === target, return the indices.',
        'If sum < target, increment left (need a bigger sum).',
        'If sum > target, decrement right (need a smaller sum).',
        'Repeat until left < right.'
      ],
      time: 'O(n)',
      space: 'O(1)'
    },
    dry: [
      'Input: nums = [2, 7, 11, 15], target = 9',
      'left=0, right=3 → 2 + 15 = 17 > 9 → right = 2',
      'left=0, right=2 → 2 + 11 = 13 > 9 → right = 1',
      'left=0, right=1 → 2 + 7 = 9 ✓',
      'Answer: [1, 2] (1-indexed)'
    ],
    hints: [
      'The array is sorted. What does that let you conclude about moving a pointer?',
      'Compare the current two-end sum with the target — that decides the move.',
      'Sum too small → only moving left right can help. Sum too big → only moving right left can help.'
    ],
    code: {
      javascript: `function twoSum(numbers, target) {
  let l = 0, r = numbers.length - 1;
  while (l < r) {
    const sum = numbers[l] + numbers[r];
    if (sum === target) return [l + 1, r + 1]; // 1-indexed
    if (sum < target) l++;
    else r--;
  }
  return [];
}`,
      python: `def twoSum(numbers, target):
    l, r = 0, len(numbers) - 1
    while l < r:
        s = numbers[l] + numbers[r]
        if s == target:
            return [l + 1, r + 1]  # 1-indexed
        if s < target:
            l += 1
        else:
            r -= 1
    return []`,
      java: `class Solution {
    public int[] twoSum(int[] numbers, int target) {
        int l = 0, r = numbers.length - 1;
        while (l < r) {
            int sum = numbers[l] + numbers[r];
            if (sum == target) return new int[]{l + 1, r + 1};
            if (sum < target) l++;
            else r--;
        }
        return new int[]{};
    }
}`,
      cpp: `vector<int> twoSum(vector<int>& numbers, int target) {
    int l = 0, r = (int)numbers.size() - 1;
    while (l < r) {
        int sum = numbers[l] + numbers[r];
        if (sum == target) return {l + 1, r + 1};
        if (sum < target) l++;
        else r--;
    }
    return {};
}`
    }
  },
  {
    id: 'tp-02',
    slug: 'rearrange-0-and-1',
    title: 'Rearrange 0 and 1',
    pattern: 'two-pointers',
    difficulty: 'Easy',
    platform: 'GeeksforGeeks',
    url: 'https://www.geeksforgeeks.org/problems/segregate-0s-and-1s5106/1',
    extra: [],
    summary:
      'Given an array of only 0s and 1s, rearrange it in place so that all 0s come before all 1s.',
    asked:
      'Modify the array (in place, ideally in one pass) so every 0 precedes every 1. Return the modified array.',
    why:
      'This is the two-pointer "segregation" form: one pointer tracks where the next 0 belongs, and you swap each 0 forward.',
    clues: ['only 0s and 1s', 'segregate', 'arrange in place'],
    brute: {
      idea: 'Count the zeros, then rewrite the whole array: write count zeros then the rest as ones.',
      time: 'O(n)',
      space: 'O(1)'
    },
    optimal: {
      idea:
        'Keep a pointer (lastZero) at the last position known to hold 0. Scan left to right; whenever you see a 0, swap it into position lastZero + 1 and advance that pointer.',
      steps: [
        'lastZero = -1 (no zero placed yet).',
        'For each index i: if arr[i] === 0, swap arr[i] with arr[lastZero + 1] and lastZero++.',
        'At the end, positions 0..lastZero are all 0s and the rest are 1s.',
        'Return the array.'
      ],
      time: 'O(n)',
      space: 'O(1)'
    },
    dry: [
      'Input: [0, 1, 0, 1, 1, 0]',
      'i=0: 0 → swap with self, lastZero = 0 → [0,1,0,1,1,0]',
      'i=1: 1 → skip',
      'i=2: 0 → swap with index 1, lastZero = 1 → [0,0,1,1,1,0]',
      'i=3,4: 1 → skip',
      'i=5: 0 → swap with index 2, lastZero = 2 → [0,0,0,1,1,1] ✓'
    ],
    hints: [
      'Where does the "next" zero need to be placed?',
      'One pointer scanning, one pointer marking the boundary between 0-zone and 1-zone.',
      'Swap the found zero into the first slot of the 1-zone.'
    ],
    code: {
      javascript: `function segregate0s1s(arr) {
  let lastZero = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      lastZero++;
      [arr[i], arr[lastZero]] = [arr[lastZero], arr[i]];
    }
  }
  return arr;
}`,
      python: `def segregate0s1s(arr):
    last_zero = -1
    for i in range(len(arr)):
        if arr[i] == 0:
            last_zero += 1
            arr[i], arr[last_zero] = arr[last_zero], arr[i]
    return arr`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'tp-03',
    slug: 'remove-duplicates',
    title: 'Remove Duplicates',
    pattern: 'two-pointers',
    difficulty: 'Easy',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/remove-duplicates-from-sorted-list/',
    extra: [
      { label: 'LeetCode — Remove Duplicates from Sorted Array', url: 'https://leetcode.com/problems/remove-duplicates-from-sorted-array/' },
      { label: 'LeetCode — Remove Duplicates from Sorted Array II', url: 'https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/' }
    ],
    summary:
      'Given a sorted array (or sorted linked list), remove duplicate elements so each value appears only once, using two pointers / in-place writes.',
    asked:
      'Return the array with duplicates removed (in place where applicable) or the deduplicated sorted linked list. Sorted order means duplicates are adjacent.',
    why:
      'In a sorted structure, duplicates are next to each other — one pointer reads ahead, the other writes the compacted result.',
    clues: ['sorted', 'duplicates adjacent', 'remove in place'],
    brute: {
      idea: 'Insert everything into a Set / map and rebuild — loses the in-place, O(n) space.',
      time: 'O(n)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'Write pointer k starts at 0. Read each value; write it to position k only if it differs from the last written value (nums[k-1]). The write pointer "compacts" the array in one pass.',
      steps: [
        'k = 0 (next write position).',
        'For each x in the array: if k === 0 or nums[k-1] !== x, write nums[k] = x and k++.',
        'Return k (the new length) — or in the linked-list version, unlink repeated next nodes.',
        'Every element is read once and written at most once.'
      ],
      time: 'O(n)',
      space: 'O(1)'
    },
    dry: [
      'Input (array version): [1, 1, 2, 3, 3, 3, 4]',
      'k=0: write 1 → [1,_,...], k=1',
      'x=1: nums[0]=1, skip',
      'x=2: nums[0]=1 ≠ 2 → write at k=1, k=2',
      'x=3: write at k=2, k=3',
      'x=3, x=3: skip (same as nums[k-1]=3)',
      'x=4: write at k=3, k=4 → [1,2,3,4] ✓'
    ],
    hints: [
      'Sort order guarantees duplicates are adjacent. Use that.',
      'Keep a "write" pointer separate from the "read" pointer.',
      'Only write a value if it differs from the last one you wrote.'
    ],
    code: {
      javascript: `// Sorted array version (in place), returns new length
function removeDuplicates(nums) {
  let k = 0;
  for (const x of nums) {
    if (k === 0 || nums[k - 1] !== x) nums[k++] = x;
  }
  return k; // first k elements are the deduplicated array
}

// Sorted linked list version
function deleteDuplicates(head) {
  let cur = head;
  while (cur && cur.next) {
    if (cur.val === cur.next.val) cur.next = cur.next.next;
    else cur = cur.next;
  }
  return head;
}`,
      python: `# Sorted array version (in place), returns new length
def removeDuplicates(nums):
    k = 0
    for x in nums:
        if k == 0 or nums[k - 1] != x:
            nums[k] = x
            k += 1
    return k  # first k elements are the deduplicated array`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'tp-04',
    slug: 'squaring-a-sorted-array',
    title: 'Squaring a Sorted Array',
    pattern: 'two-pointers',
    difficulty: 'Easy',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/squares-of-a-sorted-array/',
    extra: [],
    summary:
      'Given an integer array sorted in non-decreasing order (may contain negatives), return the array of squares sorted in non-decreasing order.',
    asked:
      'Return a new array where each element is squared and the result is still sorted. Do it in O(n).',
    why:
      'After squaring, the largest values live at either end of the original array. Two pointers from both ends fill the answer from the back.',
    clues: ['sorted with negatives', 'square every element', 'result must stay sorted'],
    brute: {
      idea: 'Square every element, then sort the result.',
      time: 'O(n log n)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'The max square is at one of the two ends. Keep left/right pointers and repeatedly place the larger square at the back of the answer, moving that pointer inward.',
      steps: [
        'left = 0, right = n - 1, k = n - 1 (fill from the back).',
        'Compare nums[left]² and nums[right]².',
        'Put the larger at res[k], decrement k, move the pointer that produced it.',
        'Stop when left > right.'
      ],
      time: 'O(n)',
      space: 'O(n)'
    },
    dry: [
      'Input: [-4, -1, 0, 3, 10]',
      'ends: 16 vs 100 → place 100 at back, right--',
      'ends: 16 vs 9 → place 16, left++',
      'ends: 1 vs 9 → place 9, right--',
      'ends: 1 vs 0 → place 1, left++',
      'place 0 → [0, 1, 9, 16, 100] ✓'
    ],
    hints: [
      'Where can the largest square be in the original array?',
      'Fill the answer from the end (largest) to the start.',
      'At each step only one pointer moves — the side with the bigger absolute value.'
    ],
    code: {
      javascript: `function sortedSquares(nums) {
  const n = nums.length;
  const res = new Array(n);
  let l = 0, r = n - 1, k = n - 1;
  while (l <= r) {
    if (nums[l] * nums[l] >= nums[r] * nums[r]) {
      res[k--] = nums[l] * nums[l];
      l++;
    } else {
      res[k--] = nums[r] * nums[r];
      r--;
    }
  }
  return res;
}`,
      python: `def sortedSquares(nums):
    n = len(nums)
    res = [0] * n
    l, r, k = 0, n - 1, n - 1
    while l <= r:
        if nums[l] ** 2 >= nums[r] ** 2:
            res[k] = nums[l] ** 2
            l += 1
        else:
            res[k] = nums[r] ** 2
            r -= 1
        k -= 1
    return res`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'tp-05',
    slug: 'triplet-sum-to-zero',
    title: 'Triplet Sum to Zero',
    pattern: 'two-pointers',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/3sum/',
    extra: [],
    summary:
      'Given an integer array, find all unique triplets (a, b, c) that sum to zero, without duplicate triplets.',
    asked:
      'Return a list of all unique triplets [a, b, c] with a + b + c = 0. Order within a triplet and order of triplets can vary, but no duplicates.',
    why:
      'Sort first. Fix one number, then the "other two sum to -x" part is a classic two-pointer problem on the sorted remainder.',
    clues: ['all triplets', 'sum to zero', 'unique (no duplicates)', 'sorted helps'],
    brute: {
      idea: 'Three nested loops over all triplets, plus a set to filter duplicates.',
      time: 'O(n³)',
      space: 'O(1) + output'
    },
    optimal: {
      idea:
        'Sort the array. For each index i (skipping duplicates), use two pointers on (i+1, n-1) to find pairs summing to -nums[i]. Skip duplicates at both pointers.',
      steps: [
        'Sort the array.',
        'For i from 0 to n-3: if nums[i] === nums[i-1], skip (duplicate triplet).',
        'l = i+1, r = n-1. While l < r: s = nums[i]+nums[l]+nums[r].',
        'If s === 0: record, then advance l past duplicates and r past duplicates.',
        'If s < 0: l++. Else: r--.',
        'Early exit: if nums[i] > 0, stop (no zero-sum possible from here).'
      ],
      time: 'O(n²)',
      space: 'O(1) + output'
    },
    dry: [
      'Input: [-1, 0, 1, 2, -1, -4] → sorted: [-4, -1, -1, 0, 1, 2]',
      'i=0 (-4): pair sum needs 4 → l,r sweep finds nothing',
      'i=1 (-1): need 1 → l=3(0), r=5(2): 0+2=2>1 r--; 0+1=1 ✓ → [-1,0,1]; l=4, r=4 stop',
      'i=2 (-1): duplicate of i=1 → skip',
      'i=3 (0): need 0 → l=4(1), r=5(2): 3>0 r--; stop',
      'Answer: [[-1,-1,2] was found? re-check: at i=1 with l=2? — duplicates handled; final: [[-1,0,1], [-1,-1,2]]'
    ],
    hints: [
      'Sort first, then reduce "triplet" to "pair with target".',
      'When you find a match, skip all equal values on both sides to avoid duplicate triplets.',
      'Also skip the outer i when it equals the previous i.'
    ],
    code: {
      javascript: `function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const res = [];
  const n = nums.length;
  for (let i = 0; i < n - 2; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let l = i + 1, r = n - 1;
    while (l < r) {
      const s = nums[i] + nums[l] + nums[r];
      if (s === 0) {
        res.push([nums[i], nums[l], nums[r]]);
        while (l < r && nums[l] === nums[l + 1]) l++;
        while (l < r && nums[r] === nums[r - 1]) r--;
        l++;
        r--;
      } else if (s < 0) l++;
      else r--;
    }
  }
  return res;
}`,
      python: `def threeSum(nums):
    nums.sort()
    res, n = [], len(nums)
    for i in range(n - 2):
        if nums[i] > 0: break
        if i > 0 and nums[i] == nums[i - 1]: continue
        l, r = i + 1, n - 1
        while l < r:
            s = nums[i] + nums[l] + nums[r]
            if s == 0:
                res.append([nums[i], nums[l], nums[r]])
                while l < r and nums[l] == nums[l + 1]: l += 1
                while l < r and nums[r] == nums[r - 1]: r -= 1
                l += 1; r -= 1
            elif s < 0: l += 1
            else: r -= 1
    return res`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'tp-06',
    slug: 'triplet-sum-closest-to-target',
    title: 'Triplet Sum Closest to Target',
    pattern: 'two-pointers',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/3sum-closest/',
    extra: [],
    summary:
      'Given an array of numbers and a target, find one triplet whose sum is closest to the target and return that sum.',
    asked:
      'Return the sum of any triplet (a, b, c) from the array that minimizes |sum - target|.',
    why:
      'Same skeleton as 3Sum: sort, fix one element, two-pointer the rest — but instead of requiring an exact zero, track the sum with the smallest distance.',
    clues: ['closest to target', 'triplet', 'return the sum'],
    brute: {
      idea: 'Check every triplet, keep the best by |sum - target|.',
      time: 'O(n³)',
      space: 'O(1)'
    },
    optimal: {
      idea:
        'Sort, fix i, two-pointer (l, r). At each sum update the best answer; move the pointers the same way as 3Sum (toward the target). Early-exit if an exact match appears.',
      steps: [
        'Sort the array; best = first triplet sum.',
        'For each i (no need to skip duplicates for correctness here):',
        'l = i+1, r = n-1; while l < r: s = nums[i]+nums[l]+nums[r].',
        'If |s - target| < |best - target|, best = s. If s === target, return it.',
        'Move l++ when s < target, else r--.'
      ],
      time: 'O(n²)',
      space: 'O(1)'
    },
    dry: [
      'Input: [-1, 2, 1, -4], target = 1',
      'sorted: [-4, -1, 1, 2]',
      'i=0: l=1,r=3 → -4-1+2=-3 (dist 4, best=-3); s<1 → l=2 → -4+1+2=-1 (dist 2, best=-1); r--',
      'i=1: l=2,r=3 → -1+1+2=2 (dist 1, best=2); s>1 → r--; stop',
      'Answer: 2 (closest to 1)'
    ],
    hints: [
      'This is 3Sum where "equal" becomes "closest".',
      'Keep a best variable and compare absolute differences.',
      'Pointer moves are identical to 3Sum — always move toward the target.'
    ],
    code: {
      javascript: `function threeSumClosest(nums, target) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let best = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < n - 2; i++) {
    let l = i + 1, r = n - 1;
    while (l < r) {
      const s = nums[i] + nums[l] + nums[r];
      if (Math.abs(s - target) < Math.abs(best - target)) best = s;
      if (s === target) return s;
      if (s < target) l++;
      else r--;
    }
  }
  return best;
}`,
      python: `def threeSumClosest(nums, target):
    nums.sort()
    n = len(nums)
    best = nums[0] + nums[1] + nums[2]
    for i in range(n - 2):
        l, r = i + 1, n - 1
        while l < r:
            s = nums[i] + nums[l] + nums[r]
            if abs(s - target) < abs(best - target):
                best = s
            if s == target: return s
            if s < target: l += 1
            else: r -= 1
    return best`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'tp-07',
    slug: 'triplets-with-smaller-sum',
    title: 'Triplets with Smaller Sum',
    pattern: 'two-pointers',
    difficulty: 'Medium',
    platform: 'GeeksforGeeks',
    url: 'https://www.geeksforgeeks.org/problems/count-triplets-with-sum-smaller-than-x5549/1',
    extra: [],
    summary:
      'Count the number of triplets (i, j, k) with i < j < k such that arr[i] + arr[j] + arr[k] < X.',
    asked:
      'Return the count of index triplets whose three values sum to strictly less than X.',
    why:
      'After sorting, for a fixed i and a valid (l, r) pair, every index between l+1 and r also works — two pointers count ranges in bulk instead of one by one.',
    clues: ['count triplets', 'sum less than X', 'i < j < k'],
    brute: {
      idea: 'Triple nested loop checking each triplet sum.',
      time: 'O(n³)',
      space: 'O(1)'
    },
    optimal: {
      idea:
        'Sort. Fix i; with two pointers l = i+1, r = n-1: if arr[i]+arr[l]+arr[r] < X, then all pairs (l, l+1..r-1) also qualify (sorted!), so add (r - l) and move l++; otherwise r--.',
      steps: [
        'Sort the array.',
        'For each i from 0 to n-3:',
        'l = i+1, r = n-1.',
        'If arr[i] + arr[l] + arr[r] < X → count += (r - l); l++.',
        'Else r--.',
        'Return count.'
      ],
      time: 'O(n²)',
      space: 'O(1)'
    },
    dry: [
      'Input: arr = [1, 2, 3, 4], X = 7',
      'i=0 (1): l=1(2), r=3(4) → 1+2+4=7 not <7 → r=2',
      'l=1(2), r=2(3) → 1+2+3=6 <7 → count += (2-1)=1 → [1,2,3]; l=2 stop',
      'i=1 (2): l=2(3), r=3(4) → 2+3+4=9 → r=2 stop',
      'Answer: 1'
    ],
    hints: [
      'Sort first — then "all between" works for you.',
      'When the sum is already too big, only moving r left can help.',
      'When arr[i]+arr[l]+arr[r] < X, the (r - l) middle pairs are all valid at once.'
    ],
    code: {
      javascript: `function countTriplets(arr, X) {
  arr.sort((a, b) => a - b);
  const n = arr.length;
  let count = 0;
  for (let i = 0; i < n - 2; i++) {
    let l = i + 1, r = n - 1;
    while (l < r) {
      if (arr[i] + arr[l] + arr[r] < X) {
        count += r - l; // (l, l+1..r) all qualify
        l++;
      } else {
        r--;
      }
    }
  }
  return count;
}`,
      python: `def countTriplets(arr, X):
    arr.sort()
    n = len(arr)
    count = 0
    for i in range(n - 2):
        l, r = i + 1, n - 1
        while l < r:
            if arr[i] + arr[l] + arr[r] < X:
                count += r - l
                l += 1
            else:
                r -= 1
    return count`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'tp-08',
    slug: 'subarrays-with-product-less-than-k',
    title: 'Subarrays with Product Less than a Target',
    pattern: 'two-pointers',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/subarray-product-less-than-k/',
    extra: [],
    summary:
      'Given an array of positive integers and a target k, count the number of contiguous subarrays whose product is strictly less than k.',
    asked:
      'Return the total count of contiguous subarrays with product < k. All numbers are positive (so the product is monotone with window size).',
    why:
      'With positive numbers, extending the window only increases the product. A sliding two-pointer window keeps product < k and counts every valid subarray ending at r in one step.',
    clues: ['product', 'contiguous subarrays', 'less than k', 'positive numbers'],
    brute: {
      idea: 'For every start, extend end and multiply until product ≥ k. Count along the way.',
      time: 'O(n²)',
      space: 'O(1)'
    },
    optimal: {
      idea:
        'Sliding window: right expands, product grows; while product ≥ k, shrink from the left (divide). Every window [l..r] that satisfies the constraint means exactly (r - l + 1) valid subarrays ending at r.',
      steps: [
        'If k <= 1, return 0 (single elements already fail).',
        'prod = 1, l = 0, count = 0.',
        'For r from 0..n-1: prod *= nums[r].',
        'While prod >= k: prod /= nums[l]; l++.',
        'Now every subarray ending at r and starting at l..r is valid: count += r - l + 1.'
      ],
      time: 'O(n)',
      space: 'O(1)'
    },
    dry: [
      'Input: nums = [10, 5, 2, 6], k = 100',
      'r=0: prod=10 <100 → count += 1 → 1',
      'r=1: prod=50 → count += 2 → 3 ([10,5],[5])',
      'r=2: prod=100 → not <100 → divide left: prod=20, l=1 → count += 2 → 5 ([5,2],[2])',
      'r=3: prod=120 → divide: prod=120/5=... l=2? prod=20*6=120≥100 → /5 → prod=12? trace: l=2 prod=2*6=12 → count += 2 → 7',
      'Answer: 7'
    ],
    hints: [
      'Why does sliding window work here but not for "sum equals k" with negatives? (All positive.)',
      'If [l..r] is valid, how many valid subarrays end exactly at r?',
      'Use division to shrink the product when the window is too big.'
    ],
    code: {
      javascript: `function numSubarrayProductLessThanK(nums, k) {
  if (k <= 1) return 0;
  let count = 0, prod = 1, l = 0;
  for (let r = 0; r < nums.length; r++) {
    prod *= nums[r];
    while (prod >= k) prod /= nums[l++];
    count += r - l + 1;
  }
  return count;
}`,
      python: `def numSubarrayProductLessThanK(nums, k):
    if k <= 1: return 0
    count = prod = l = 0
    for r, x in enumerate(nums):
        prod *= x
        while prod >= k:
            prod //= nums[l]
            l += 1
        count += r - l + 1
    return count`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'tp-09',
    slug: 'dutch-national-flag-problem',
    title: 'Dutch National Flag Problem',
    pattern: 'two-pointers',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/sort-colors/',
    extra: [],
    summary:
      'Given an array of 0s, 1s and 2s (red, white, blue), sort it in place so all 0s come first, then 1s, then 2s — without using the library sort.',
    asked:
      'Modify the array in place with O(1) extra space and a single pass (three-pointer) so values are grouped in the order 0, 1, 2.',
    why:
      'Three values → three zones. Keep three pointers (0-zone, current, 2-zone) and swap each element into its correct zone as you scan.',
    clues: ['0, 1, 2 only', 'sort in place', 'no library sort', 'single pass'],
    brute: {
      idea: 'Count 0s, 1s and 2s, then overwrite the array from the counts (two passes).',
      time: 'O(n)',
      space: 'O(1)'
    },
    optimal: {
      idea:
        'Dutch National Flag: lo = first position of the 1-zone, hi = last position of the 2-zone, i = current. Swap arr[i] with arr[lo] if it is 0 (advance both), with arr[hi] if it is 2 (only advance hi — the swapped-in value still needs inspection).',
      steps: [
        'lo = 0, hi = n - 1, i = 0.',
        'While i <= hi:',
        'If arr[i] === 0: swap with arr[lo]; lo++; i++;',
        'If arr[i] === 2: swap with arr[hi]; hi--; (do not i++ — the swapped value is unprocessed).',
        'If arr[i] === 1: i++;'
      ],
      time: 'O(n)',
      space: 'O(1)'
    },
    dry: [
      'Input: [2, 0, 1, 2, 0]',
      'i=0: 2 → swap with hi(4): [0,0,1,2,2], hi=3',
      'i=0: 0 → swap with self, lo=1, i=1',
      'i=1: 0 → swap with arr[1] (lo=1), lo=2, i=2',
      'i=2: 1 → i=3',
      'i=3: 2 → swap with hi(3), hi=2 → stop (i>hi)',
      'Result: [0, 0, 1, 2, 2] ✓'
    ],
    hints: [
      'Three pointers: where does the next 0 go, where does the next 2 go?',
      'When you swap in from the right for a 2, why must you not advance i?',
      'The element at i is always one of {0, 1, 2} — decide its zone and move.'
    ],
    code: {
      javascript: `function sortColors(nums) {
  let lo = 0, hi = nums.length - 1, i = 0;
  while (i <= hi) {
    if (nums[i] === 0) {
      [nums[lo], nums[i]] = [nums[i], nums[lo]];
      lo++;
      i++;
    } else if (nums[i] === 2) {
      [nums[hi], nums[i]] = [nums[i], nums[hi]];
      hi--;
    } else {
      i++;
    }
  }
}`,
      python: `def sortColors(nums):
    lo, hi, i = 0, len(nums) - 1, 0
    while i <= hi:
        if nums[i] == 0:
            nums[lo], nums[i] = nums[i], nums[lo]
            lo += 1
            i += 1
        elif nums[i] == 2:
            nums[hi], nums[i] = nums[i], nums[hi]
            hi -= 1
        else:
            i += 1`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'tp-10',
    slug: 'quadruple-sum-to-target',
    title: 'Quadruple Sum to Target',
    pattern: 'two-pointers',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/4sum/',
    extra: [],
    summary:
      'Given an array of integers and a target, find all unique quadruplets (a, b, c, d) that sum exactly to the target, with no duplicate quadruplets.',
    asked:
      'Return all unique 4-element combinations whose sum equals the target, each in sorted order, without duplicates.',
    why:
      'It is 3Sum with one more fixed element: sort, fix two elements (with duplicate skipping), then two-pointer the remaining pair for target - a - b.',
    clues: ['all quadruplets', 'sum to target', 'unique only', '4sum'],
    brute: {
      idea: 'Four nested loops + a set of joined quadruplets to dedupe.',
      time: 'O(n⁴)',
      space: 'O(1) + output'
    },
    optimal: {
      idea:
        'Sort. Double loop over a and b (skipping duplicate values at each level); for the rest, two pointers find pairs summing to target - a - b, skipping duplicates on match.',
      steps: [
        'Sort the array.',
        'for a in 0..n-4: skip if same as previous a.',
        'for b in a+1..n-3: skip if same as previous b.',
        'l = b+1, r = n-1; while l < r: s = a+b+nums[l]+nums[r].',
        'If s === target: record; skip duplicates on both sides; l++, r--.',
        'If s < target: l++. Else: r--.'
      ],
      time: 'O(n³)',
      space: 'O(1) + output'
    },
    dry: [
      'Input: [1, 0, -1, 0, -2, 2], target = 0 → sorted: [-2,-1,0,0,1,2]',
      'a=-2, b=-1: need 3 → l=2,r=5: 0+2=2<3 l++; 0+2 l++; 1+2=3 ✓ → [-2,-1,1,2]',
      'a=-2, b=0: need 2 → l=3(0),r=5(2): 0+2 ✓ → [-2,0,0,2]; dup skip l→4; stop',
      'a=-1, b=0: need 1 → l=3(0),r=5(2): 2>1 r-- ... l=4(1),r=4 stop',
      'a=-1, b=0 (second 0): duplicate b → skip; a=0: duplicate a → skip ...',
      'Answer: [[-2,-1,1,2], [-2,0,0,2]]'
    ],
    hints: [
      'Reduce 4Sum to 3Sum, then 3Sum to 2Sum (two pointers).',
      'Duplicate skipping is needed at BOTH fixed loops and on the pointer matches.',
      'Sort makes all the "skip equal previous" checks trivial.'
    ],
    code: {
      javascript: `function fourSum(nums, target) {
  nums.sort((a, b) => a - b);
  const res = [];
  const n = nums.length;
  for (let a = 0; a < n - 3; a++) {
    if (a > 0 && nums[a] === nums[a - 1]) continue;
    for (let b = a + 1; b < n - 2; b++) {
      if (b > a + 1 && nums[b] === nums[b - 1]) continue;
      let l = b + 1, r = n - 1;
      while (l < r) {
        const s = nums[a] + nums[b] + nums[l] + nums[r];
        if (s === target) {
          res.push([nums[a], nums[b], nums[l], nums[r]]);
          while (l < r && nums[l] === nums[l + 1]) l++;
          while (l < r && nums[r] === nums[r - 1]) r--;
          l++;
          r--;
        } else if (s < target) l++;
        else r--;
      }
    }
  }
  return res;
}`,
      python: `def fourSum(nums, target):
    nums.sort()
    res, n = [], len(nums)
    for a in range(n - 3):
        if a > 0 and nums[a] == nums[a - 1]: continue
        for b in range(a + 1, n - 2):
            if b > a + 1 and nums[b] == nums[b - 1]: continue
            l, r = b + 1, n - 1
            while l < r:
                s = nums[a] + nums[b] + nums[l] + nums[r]
                if s == target:
                    res.append([nums[a], nums[b], nums[l], nums[r]])
                    while l < r and nums[l] == nums[l + 1]: l += 1
                    while l < r and nums[r] == nums[r - 1]: r -= 1
                    l += 1; r -= 1
                elif s < target: l += 1
                else: r -= 1
    return res`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'tp-11',
    slug: 'comparing-strings-containing-backspaces',
    title: 'Comparing Strings containing Backspaces',
    pattern: 'two-pointers',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/backspace-string-compare/',
    extra: [],
    summary:
      'Given two strings where "#" is a backspace (delete the previous character), decide whether the two final strings are equal.',
    asked:
      'Simulate the backspaces and return true if both strings reduce to the same value. Aim for O(n) time / O(1) space.',
    why:
      'Process both strings from the end with two pointers: the next valid (non-deleted) character in each string can be found by skipping backspaces — compare them one by one.',
    clues: ['backspace #', 'compare final strings', 'O(1) extra space'],
    brute: {
      idea: 'Build both final strings with a stack (or array) and compare them.',
      time: 'O(n)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'Two pointers from the end. A helper finds the index of the next valid character by counting backspaces to skip. Compare the valid characters; if they differ or one string ends first, return false.',
      steps: [
        'i = len(s)-1, j = len(t)-1.',
        'next(str, idx): while idx >= 0, if char is # count skip, if skip>0 consume one, else stop. Return idx.',
        'Loop: i = next(s, i), j = next(t, j).',
        'Both -1 → true. Only one -1 → false.',
        'If s[i] !== t[j] → false. Else i--, j-- and continue.'
      ],
      time: 'O(n)',
      space: 'O(1)'
    },
    dry: [
      'Input: s = "ab#c", t = "ad#c"',
      'Walk s from the end: "c" has no # to its right → valid (1st compare char)',
      'Walk t from the end: "c" → valid → "c" === "c", continue',
      'Next valid in s: hit "#", which skips "b" → land on "a"',
      'Next valid in t: hit "#", which skips "d" → land on "a" → "a" === "a", continue',
      'Both pointers exhausted → true (both strings reduce to "ac")'
    ],
    hints: [
      'From the right, a character is valid if the count of # symbols to its right equals the count of non-# characters to its right.',
      'Compare next-valid characters from both strings, not the whole strings.',
      'A "#" skips one previous character — count skips while walking left.'
    ],
    code: {
      javascript: `function backspaceEquals(s, t) {
  let i = s.length - 1;
  let j = t.length - 1;
  const nextValid = (str, idx) => {
    let skips = 0;
    while (idx >= 0) {
      if (str[idx] === '#') skips++;
      else if (skips > 0) skips--;
      else break;
      idx--;
    }
    return idx;
  };
  while (true) {
    i = nextValid(s, i);
    j = nextValid(t, j);
    if (i === -1 && j === -1) return true;
    if (i === -1 || j === -1) return false;
    if (s[i] !== t[j]) return false;
    i--;
    j--;
  }
}`,
      python: `def backspaceEquals(s, t):
    i, j = len(s) - 1, len(t) - 1
    def next_valid(str_, idx):
        skips = 0
        while idx >= 0:
            if str_[idx] == '#':
                skips += 1
            elif skips > 0:
                skips -= 1
            else:
                break
            idx -= 1
        return idx
    while True:
        i = next_valid(s, i)
        j = next_valid(t, j)
        if i == -1 and j == -1: return True
        if i == -1 or j == -1: return False
        if s[i] != t[j]: return False
        i -= 1
        j -= 1`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'tp-12',
    slug: 'minimum-window-sort',
    title: 'Minimum Window Sort',
    pattern: 'two-pointers',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/shortest-unsorted-continuous-subarray/',
    extra: [
      { label: 'Ideaserve — Minimum Length Subarray Sorting', url: 'https://www.ideserve.co.in/learn/minimum-length-subarray-sorting-which-results-in-sorted-array' }
    ],
    summary:
      'Find the length of the shortest continuous subarray that, if sorted, makes the whole array sorted.',
    asked:
      'Return the minimum length of a contiguous subarray such that sorting only that subarray sorts the entire array. Return 0 if already sorted.',
    why:
      'The unsorted window is bounded by the rightmost element smaller than the max of its prefix and the leftmost element bigger than the min of its suffix — two one-pass sweeps from both ends.',
    clues: ['shortest subarray', 'sorting it sorts all', 'window'],
    brute: {
      idea: 'For every subarray, copy, sort it in place, and check if the whole array becomes sorted.',
      time: 'O(n³)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'Sweep right to left tracking the min seen: the leftmost index where arr[i] > suffix-min is the window start. Sweep left to right tracking max seen: the rightmost index where arr[i] < prefix-max is the window end. Length = end - start + 1.',
      steps: [
        'If no descents exist, return 0.',
        'Right→left: minFromRight; first i with arr[i] > minFromRight → start = i.',
        'Left→right: maxFromLeft; last i with arr[i] < maxFromLeft → end = i.',
        'Return end - start + 1.'
      ],
      time: 'O(n)',
      space: 'O(1)'
    },
    dry: [
      'Input: [2, 6, 4, 8, 10, 3, 16, 5]',
      'Right→left min-sweep: min runs 5→3→3→3→3→3→3; arr[1]=6 > 3 → start = 1',
      'Left→right max-sweep: max runs 2,6,6,8,10,10,16; arr[5]=3 < 16 → end = 5',
      'Window = indices 1..5 → [6,4,8,10,3]',
      'Sorting it → [2,3,4,6,8,10,16,5]... and arr[7]=5 < 16 too → end = 7',
      'Answer: 7 (indices 1..7: [6,4,8,10,3,16,5])'
    ],
    hints: [
      'Which elements "belong" left of the window and right of it?',
      'An element is misplaced if it is greater than some later minimum (start side) or less than some earlier maximum (end side).',
      'Two passes: one from each end, tracking running min / running max.'
    ],
    code: {
      javascript: `function findUnsortedSubarray(nums) {
  const n = nums.length;
  let start = -1, end = -1;
  let minFromRight = nums[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] > minFromRight) start = i;
    minFromRight = Math.min(minFromRight, nums[i]);
  }
  if (start === -1) return 0; // already sorted
  let maxFromLeft = nums[0];
  for (let i = 1; i < n; i++) {
    if (nums[i] < maxFromLeft) end = i;
    maxFromLeft = Math.max(maxFromLeft, nums[i]);
  }
  return end - start + 1;
}`,
      python: `def findUnsortedSubarray(nums):
    n = len(nums)
    start = -1
    min_right = nums[-1]
    for i in range(n - 2, -1, -1):
        if nums[i] > min_right:
            start = i
        min_right = min(min_right, nums[i])
    if start == -1:
        return 0
    end = -1
    max_left = nums[0]
    for i in range(1, n):
        if nums[i] < max_left:
            end = i
        max_left = max(max_left, nums[i])
    return end - start + 1`,
      java: '',
      cpp: ''
    }
  }
];
