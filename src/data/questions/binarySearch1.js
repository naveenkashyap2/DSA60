// Pattern: Binary Search — questions 1-10 of 23 (exact supplied list)
export default [
  {
    id: 'bs-01',
    slug: 'binary-search-basic',
    title: 'Binary Search Basic',
    pattern: 'binary-search',
    difficulty: 'Easy',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/binary-search/',
    extra: [],
    summary:
      'Given a sorted (ascending, unique) array and a target, return the index of the target or -1 if not present.',
    asked: 'O(log n) search: find the target\'s position in the sorted array.',
    why:
      'This IS the pattern: compare the middle, then the answer must lie in one half or the other — discard half each step.',
    clues: ['sorted array', 'find target', 'O(log n)'],
    brute: {
      idea: 'Linear scan from the start.',
      time: 'O(n)',
      space: 'O(1)'
    },
    optimal: {
      idea:
        'lo, hi bound the search range. mid = floor((lo+hi)/2). If arr[mid] === target, done; if smaller, the target (if anywhere) is right of mid; else left of mid. Repeat.',
      steps: [
        'lo = 0, hi = n - 1.',
        'While lo <= hi:',
        'mid = (lo + hi) >> 1.',
        'If arr[mid] === target: return mid.',
        'If arr[mid] < target: lo = mid + 1. Else: hi = mid - 1.',
        'Return -1.'
      ],
      time: 'O(log n)',
      space: 'O(1)'
    },
    dry: [
      'arr = [-1, 0, 3, 5, 9, 12], target = 9',
      'lo=0, hi=5 → mid=2, arr[2]=3 < 9 → lo=3',
      'lo=3, hi=5 → mid=4, arr[4]=9 ✓',
      'Answer: 4',
      'target = 2: mid=2 (3) → hi=1; mid=0 (-1) → lo=1; mid=1 (0) → lo=2; lo>hi → -1'
    ],
    hints: [
      'Why does arr[mid] < target guarantee the target is NOT at mid or left of mid?',
      'The invariant: the answer (if it exists) is always inside [lo, hi].',
      'lo = mid + 1, hi = mid - 1 — why not just mid?'
    ],
    code: {
      javascript: `function search(nums, target) {
  let lo = 0, hi = nums.length - 1;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) lo = mid + 1;
    else hi = mid - 1;
  }
  return -1;
}`,
      python: `def search(nums, target):
    lo, hi = 0, len(nums) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if nums[mid] == target:
            return mid
        if nums[mid] < target:
            lo = mid + 1
        else:
            hi = mid - 1
    return -1`,
      java: `class Solution {
    public int search(int[] nums, int target) {
        int lo = 0, hi = nums.length - 1;
        while (lo <= hi) {
            int mid = (lo + hi) >>> 1;
            if (nums[mid] == target) return mid;
            if (nums[mid] < target) lo = mid + 1;
            else hi = mid - 1;
        }
        return -1;
    }
}`,
      cpp: `int search(vector<int>& nums, int target) {
    int lo = 0, hi = (int)nums.size() - 1;
    while (lo <= hi) {
        int mid = lo + (hi - lo) / 2;
        if (nums[mid] == target) return mid;
        if (nums[mid] < target) lo = mid + 1;
        else hi = mid - 1;
    }
    return -1;
}`
    }
  },
  {
    id: 'bs-02',
    slug: 'upper-bound-ceiling',
    title: 'Upper Bound / Ceiling',
    pattern: 'binary-search',
    difficulty: 'Easy',
    platform: 'GeeksforGeeks',
    url: 'https://www.geeksforgeeks.org/problems/ceil-in-a-sorted-array/1',
    extra: [],
    summary:
      'In a sorted array, find the ceiling of a number: the smallest element that is greater than or equal to the target. Return -1 if none.',
    asked: 'Return the smallest arr[i] such that arr[i] >= target, else -1.',
    why:
      'Binary search for a BOUNDARY: find the first position where the predicate "arr[i] >= target" becomes true.',
    clues: ['smallest element ≥ target', 'ceiling', 'boundary search'],
    brute: {
      idea: 'Linear scan for the first element ≥ target.',
      time: 'O(n)',
      space: 'O(1)'
    },
    optimal: {
      idea:
        'Search the first index where arr[mid] >= target: when arr[mid] >= target, hi = mid (mid itself could be the answer); else lo = mid + 1. At the end, lo is the ceiling index.',
      steps: [
        'lo = 0, hi = n - 1, ans = -1.',
        'While lo <= hi:',
        'mid = (lo + hi) >> 1.',
        'If arr[mid] >= target: ans = mid; hi = mid - 1 (look for an earlier one).',
        'Else lo = mid + 1.',
        'Return ans === -1 ? -1 : arr[ans].'
      ],
      time: 'O(log n)',
      space: 'O(1)'
    },
    dry: [
      'arr = [1, 2, 8, 10, 10, 12, 70], target = 6',
      'lo=0, hi=6 → mid=3, 10 >= 6 → ans=3, hi=2',
      'mid=1, 2 >= 6? no → lo=2',
      'mid=2, 8 >= 6 → ans=2, hi=1 → stop',
      'Answer: 8',
      'target = 100: all fail → ans stays -1 → return -1'
    ],
    hints: [
      'Reframe: find the FIRST index where "arr[i] >= target" is true.',
      'When the predicate is true at mid, the answer could still be LEFT of mid — move hi, not lo.',
      'Track the best candidate seen so far (ans).'
    ],
    code: {
      javascript: `function ceilInSorted(arr, target) {
  let lo = 0, hi = arr.length - 1, ans = -1;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    if (arr[mid] >= target) {
      ans = mid;
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  return ans === -1 ? -1 : arr[ans];
}`,
      python: `def ceilInSorted(arr, target):
    lo, hi, ans = 0, len(arr) - 1, -1
    while lo <= hi:
        mid = (lo + hi) // 2
        if arr[mid] >= target:
            ans = mid
            hi = mid - 1
        else:
            lo = mid + 1
    return -1 if ans == -1 else arr[ans]`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'bs-03',
    slug: 'first-and-last-position',
    title: 'First and Last Position',
    pattern: 'binary-search',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/',
    extra: [],
    summary:
      'Given a sorted array with duplicates, find the first and last position of the target in O(log n). Return [-1, -1] if absent.',
    asked: 'Both boundary indices of the target, or [-1, -1].',
    why:
      'Two boundary searches: the first index where arr[i] >= target (left boundary) and the first index where arr[i] > target (right boundary + 1).',
    clues: ['first and last occurrence', 'duplicates', 'O(log n)'],
    brute: {
      idea: 'Find one occurrence, then expand left and right.',
      time: 'O(n) worst',
      space: 'O(1)'
    },
    optimal: {
      idea:
        'lowerBound(t) = first i with arr[i] >= t; upperBound(t) = first i with arr[i] > t. Answer = [lowerBound(t), upperBound(t) - 1], if arr[lower] === t.',
      steps: [
        'Write a helper bound(t, isUpper): first index with arr[i] > t (upper) or >= t (lower).',
        'lo = bound(t, false); hi = bound(t, true) - 1.',
        'If lo > hi or arr[lo] !== t: return [-1, -1].',
        'Return [lo, hi].'
      ],
      time: 'O(log n)',
      space: 'O(1)'
    },
    dry: [
      'arr = [5, 7, 7, 8, 8, 10], target = 8',
      'lowerBound(8): first ≥ 8 → index 3',
      'upperBound(8): first > 8 → index 5',
      'Answer: [3, 4]',
      'target = 6: lowerBound → 3 but arr[3]=8 ≠ 6 → [-1, -1]'
    ],
    hints: [
      'Do NOT find-the-target then scan — that is O(n) in the worst case.',
      'Two classic boundary functions answer everything: first ≥ t, first > t.',
      'The target exists iff arr[lowerBound(t)] === t.'
    ],
    code: {
      javascript: `function searchRange(nums, target) {
  const firstGreaterOrEqual = (t) => {
    let lo = 0, hi = nums.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (nums[mid] < t) lo = mid + 1;
      else hi = mid;
    }
    return lo;
  };
  const firstGreater = (t) => {
    let lo = 0, hi = nums.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (nums[mid] <= t) lo = mid + 1;
      else hi = mid;
    }
    return lo;
  };
  const lo = firstGreaterOrEqual(target);
  const hi = firstGreater(target) - 1;
  return lo <= hi && nums[lo] === target ? [lo, hi] : [-1, -1];
}`,
      python: `def searchRange(nums, target):
    def first_ge(t):
        lo, hi = 0, len(nums)
        while lo < hi:
            mid = (lo + hi) // 2
            if nums[mid] < t:
                lo = mid + 1
            else:
                hi = mid
        return lo
    def first_gt(t):
        lo, hi = 0, len(nums)
        while lo < hi:
            mid = (lo + hi) // 2
            if nums[mid] <= t:
                lo = mid + 1
            else:
                hi = mid
        return lo
    lo = first_ge(target)
    hi = first_gt(target) - 1
    return [lo, hi] if lo <= hi and nums[lo] == target else [-1, -1]`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'bs-04',
    slug: 'count-number-of-occurrences',
    title: 'Count Number of Occurrences',
    pattern: 'binary-search',
    difficulty: 'Easy',
    platform: 'GeeksforGeeks',
    url: 'https://www.geeksforgeeks.org/problems/number-of-occurrence2259/1',
    extra: [],
    summary:
      'Given a sorted array and a key, count how many times the key appears in O(log n).',
    asked: 'Frequency of the key in the sorted array (return -1 style per GFG if not present: return 0 or per platform).',
    why:
      'Count = (first index > key) - (first index ≥ key). Two boundary binary searches, no scanning.',
    clues: ['count occurrences', 'sorted array', 'O(log n)'],
    brute: {
      idea: 'Linear scan counting matches.',
      time: 'O(n)',
      space: 'O(1)'
    },
    optimal: {
      idea:
        'upperBound(key) - lowerBound(key) is exactly the number of keys in the array.',
      steps: [
        'lower = first index with arr[i] >= key.',
        'upper = first index with arr[i] > key.',
        'Return upper - lower (0 if key absent).'
      ],
      time: 'O(log n)',
      space: 'O(1)'
    },
    dry: [
      'arr = [1, 1, 2, 2, 3, 4, 4, 5], key = 2',
      'lowerBound(2) = 2',
      'upperBound(2) = 4',
      'Answer: 4 - 2 = 2',
      'key = 6: lower = 8, upper = 8 → 0'
    ],
    hints: [
      'You already know how to find the first ≥ and first > of a value.',
      'The gap between those two positions is the count.',
      'No loops over the run of keys — that would be O(count).'
    ],
    code: {
      javascript: `function countOccurences(arr, key) {
  const n = arr.length;
  const firstGE = () => {
    let lo = 0, hi = n;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (arr[mid] < key) lo = mid + 1;
      else hi = mid;
    }
    return lo;
  };
  const firstGT = () => {
    let lo = 0, hi = n;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (arr[mid] <= key) lo = mid + 1;
      else hi = mid;
    }
    return lo;
  };
  return firstGT() - firstGE();
}`,
      python: `def countOccurences(arr, key):
    n = len(arr)
    def first_ge():
        lo, hi = 0, n
        while lo < hi:
            mid = (lo + hi) // 2
            if arr[mid] < key: lo = mid + 1
            else: hi = mid
        return lo
    def first_gt():
        lo, hi = 0, n
        while lo < hi:
            mid = (lo + hi) // 2
            if arr[mid] <= key: lo = mid + 1
            else: hi = mid
        return lo
    return first_gt() - first_ge()`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'bs-05',
    slug: 'search-in-infinite-sorted-array',
    title: 'Search in Infinite Sorted Array',
    pattern: 'binary-search',
    difficulty: 'Medium',
    platform: 'GeeksforGeeks',
    url: 'https://www.geeksforgeeks.org/find-position-element-sorted-array-infinite-numbers/',
    extra: [],
    summary:
      'An unbounded (infinite) sorted array is accessible by index. Find the position of a target value.',
    asked: 'Return the index of the target in an array with no known size, or -1.',
    why:
      'First find a finite window that CONTAINS the target by exponentially expanding a right bound (1, 2, 4, 8...), then binary search inside [0, right].',
    clues: ['infinite / unbounded array', 'index access only', 'find target'],
    brute: {
      idea: 'Linear scan from index 0 until the target is found.',
      time: 'O(index)',
      space: 'O(1)'
    },
    optimal: {
      idea:
        'right = 1; while arr[right] < target: right *= 2. Now the target (if present) is in [0, right]. Binary search that window.',
      steps: [
        'If arr[0] > target: return -1.',
        'right = 1; while arr[right] < target: right <<= 1.',
        'Binary search in [0, right] for the target.',
        'Return the index or -1.'
      ],
      time: 'O(log index)',
      space: 'O(1)'
    },
    dry: [
      'Array: [3, 5, 7, 9, 11, 13, ...], target = 11',
      'arr[1]=5 < 11 → right=2; arr[2]=7 < 11 → right=4; arr[4]=11 → stop (window [0,4])',
      'Binary search [0,4]: mid=2 (7) → lo=3; mid=3 (9) → lo=4; arr[4]=11 ✓',
      'Answer: 4'
    ],
    hints: [
      'You cannot binary search without an upper bound — how do you find one fast?',
      'Doubling the bound costs O(log index) steps total, not O(index).',
      'The window [0, right] is guaranteed to contain the target once arr[right] >= target.'
    ],
    code: {
      javascript: `function searchInfinite(arr, target) {
  if (arr[0] > target) return -1;
  let right = 1;
  while (arr[right] < target) right <<= 1;
  let lo = 0, hi = right;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) lo = mid + 1;
    else hi = mid - 1;
  }
  return -1;
}`,
      python: `def searchInfinite(arr, target):
    if arr[0] > target:
        return -1
    right = 1
    while arr[right] < target:
        right <<= 1
    lo, hi = 0, right
    while lo <= hi:
        mid = (lo + hi) // 2
        if arr[mid] == target:
            return mid
        if arr[mid] < target:
            lo = mid + 1
        else:
            hi = mid - 1
    return -1`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'bs-06',
    slug: 'peak-index-in-mountain-array',
    title: 'Peak Index in Mountain Array',
    pattern: 'binary-search',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/peak-index-in-a-mountain-array/',
    extra: [],
    summary:
      'A mountain array strictly increases then strictly decreases. Find the index of the peak in O(log n).',
    asked: 'The index of the unique maximum element.',
    why:
      'Compare mid with its right neighbor: if arr[mid] < arr[mid+1] we are on the ascending side (peak is right); otherwise the peak is at mid or left.',
    clues: ['mountain / peak', 'strictly up then down', 'O(log n)'],
    brute: {
      idea: 'Linear scan for the local maximum.',
      time: 'O(n)',
      space: 'O(1)'
    },
    optimal: {
      idea:
        'lo = 0, hi = n - 1. mid: if arr[mid] < arr[mid + 1] the slope is up → lo = mid + 1; else hi = mid. They converge on the peak.',
      steps: [
        'lo = 0, hi = n - 1.',
        'While lo < hi:',
        'mid = (lo + hi) >> 1.',
        'If arr[mid] < arr[mid + 1]: lo = mid + 1 (climb).',
        'Else: hi = mid (peak at or left of mid).',
        'Return lo.'
      ],
      time: 'O(log n)',
      space: 'O(1)'
    },
    dry: [
      'arr = [0, 1, 0] → mid=1, arr[1]=1 > arr[2]=0 → hi=1 → lo=hi=1 → Answer: 1',
      'arr = [3, 5, 10, 20, 2]: lo=0,hi=4 mid=2 (10) < 20 → lo=3; mid=3 (20) > 2 → hi=3 → Answer: 3',
      'arr = [0, 3, 1]: mid=1 (3) > 1 → hi=1; mid=0 (0) < 3 → lo=1 → Answer: 1'
    ],
    hints: [
      'On which side of mid does the peak lie — and what tells you that?',
      'Compare with the RIGHT neighbor to avoid reading arr[mid-1] at the edge.',
      'When arr[mid] > arr[mid+1], the peak is at mid or somewhere left — set hi = mid (not mid-1).'
    ],
    code: {
      javascript: `function peakIndexInMountainArray(arr) {
  let lo = 0, hi = arr.length - 1;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (arr[mid] < arr[mid + 1]) lo = mid + 1;
    else hi = mid;
  }
  return lo;
}`,
      python: `def peakIndexInMountainArray(arr):
    lo, hi = 0, len(arr) - 1
    while lo < hi:
        mid = (lo + hi) // 2
        if arr[mid] < arr[mid + 1]:
            lo = mid + 1
        else:
            hi = mid
    return lo`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'bs-07',
    slug: 'find-peak-element',
    title: 'Find Peak Element',
    pattern: 'binary-search',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/find-peak-element/',
    extra: [],
    summary:
      'Given an array where adjacent elements differ, find ANY peak element (greater than its neighbors) in O(log n). Assume nums[-1] = nums[n] = -∞.',
    asked: 'Return the index of any local maximum.',
    why:
      'Same slope logic as the mountain array, but with no guarantee of a single mountain — following the uphill direction always terminates at SOME peak.',
    clues: ['any peak', 'adjacent differ', 'virtual -infinity borders'],
    brute: {
      idea: 'Linear scan comparing each element with neighbors.',
      time: 'O(n)',
      space: 'O(1)'
    },
    optimal: {
      idea:
        'lo = 0, hi = n - 1; mid: if arr[mid] < arr[mid+1] climb right (lo = mid + 1), else the peak is at mid or left (hi = mid). The virtual -∞ borders guarantee a peak exists.',
      steps: [
        'lo = 0, hi = n - 1.',
        'While lo < hi:',
        'mid = (lo + hi) >> 1.',
        'If arr[mid] < arr[mid + 1]: lo = mid + 1. Else: hi = mid.',
        'Return lo (a peak index).'
      ],
      time: 'O(log n)',
      space: 'O(1)'
    },
    dry: [
      'nums = [1, 2, 1, 3, 5, 6, 4]',
      'lo=0,hi=6 mid=3 (3) < 5 → lo=4',
      'mid=5 (6) > 4 → hi=5',
      'mid=4 (5) < 6 → lo=5 → Answer: 5 (value 6)',
      'Note: index 1 (value 2) is also a peak — "any peak" is accepted.'
    ],
    hints: [
      'Why can you always just follow the uphill neighbor?',
      'The edges behave like -∞, so an uphill direction can never run off the array.',
      'This is the same code as the mountain peak — the difference is only in the guarantee.'
    ],
    code: {
      javascript: `function findPeakElement(nums) {
  let lo = 0, hi = nums.length - 1;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (nums[mid] < nums[mid + 1]) lo = mid + 1;
    else hi = mid;
  }
  return lo;
}`,
      python: `def findPeakElement(nums):
    lo, hi = 0, len(nums) - 1
    while lo < hi:
        mid = (lo + hi) // 2
        if nums[mid] < nums[mid + 1]:
            lo = mid + 1
        else:
            hi = mid
    return lo`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'bs-08',
    slug: 'find-minimum-in-rotated-sorted-array',
    title: 'Find Minimum in Rotated Sorted Array',
    pattern: 'binary-search',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/',
    extra: [],
    summary:
      'A sorted array of unique elements was rotated at an unknown pivot. Find the minimum element in O(log n).',
    asked: 'The smallest value in the rotated (still strictly increasing in parts) array.',
    why:
      'Compare mid with the RIGHT end: if arr[mid] > arr[hi], the minimum is right of mid (the drop is there); otherwise the minimum is at mid or left.',
    clues: ['rotated sorted array', 'find minimum', 'unique elements'],
    brute: {
      idea: 'Linear scan for the minimum.',
      time: 'O(n)',
      space: 'O(1)'
    },
    optimal: {
      idea:
        'lo = 0, hi = n - 1. While lo < hi: mid. If arr[mid] > arr[hi]: lo = mid + 1 (min is right). Else hi = mid (min at mid or left). Converges on the minimum.',
      steps: [
        'lo = 0, hi = n - 1.',
        'While lo < hi:',
        'mid = (lo + hi) >> 1.',
        'If arr[mid] > arr[hi]: lo = mid + 1.',
        'Else: hi = mid.',
        'Return arr[lo].'
      ],
      time: 'O(log n)',
      space: 'O(1)'
    },
    dry: [
      'arr = [4, 5, 6, 7, 0, 1, 2]',
      'lo=0, hi=6, mid=3 (7) > arr[6]=2 → lo=4',
      'lo=4, hi=6, mid=5 (1) < 2 → hi=5',
      'lo=4, hi=5, mid=4 (0) < 2 → hi=4',
      'Answer: arr[4] = 0',
      'Unrotated [0,1,2,4,5]: mid 2 < 5 → hi=2; mid 1 < 5 → hi=1; mid 0 < 5 → hi=0 → Answer: 0'
    ],
    hints: [
      'The minimum is at the "drop point" — where does the array go down?',
      'Compare with arr[hi] (not arr[lo]) — why does that always identify the unsorted half?',
      'If arr[mid] < arr[hi], the right part is sorted, so the min is NOT right of mid.'
    ],
    code: {
      javascript: `function findMin(arr) {
  let lo = 0, hi = arr.length - 1;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (arr[mid] > arr[hi]) lo = mid + 1;
    else hi = mid;
  }
  return arr[lo];
}`,
      python: `def findMin(arr):
    lo, hi = 0, len(arr) - 1
    while lo < hi:
        mid = (lo + hi) // 2
        if arr[mid] > arr[hi]:
            lo = mid + 1
        else:
            hi = mid
    return arr[lo]`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'bs-09',
    slug: 'find-number-of-rotations',
    title: 'Find Number of Rotations in Sorted Array',
    pattern: 'binary-search',
    difficulty: 'Easy',
    platform: 'GeeksforGeeks',
    url: 'https://www.geeksforgeeks.org/problems/rotation4723/1',
    extra: [],
    summary:
      'Given a sorted array rotated k times, find k (the number of rotations) in O(log n).',
    asked: 'The count of left rotations applied to the original sorted array (i.e., the index of the minimum element).',
    why:
      'The rotation count IS the index of the minimum element in a rotated unique-sorted array — same binary search as finding the minimum.',
    clues: ['rotated k times', 'find k', 'index of minimum'],
    brute: {
      idea: 'Find the minimum by scanning.',
      time: 'O(n)',
      space: 'O(1)'
    },
    optimal: {
      idea:
        'Identical to find-minimum: lo/hi with mid compared to arr[hi]. The converged index is the rotation count.',
      steps: [
        'lo = 0, hi = n - 1.',
        'While lo < hi: mid; if arr[mid] > arr[hi] → lo = mid + 1 else hi = mid.',
        'Return lo (the number of rotations).'
      ],
      time: 'O(log n)',
      space: 'O(1)'
    },
    dry: [
      'arr = [5, 6, 8, 9, 1, 2, 3, 4] (rotated 4 times: [1,2,3,4,5,6,8,9] → [5,6,8,9,1,2,3,4])',
      'lo=0, hi=7, mid=3 (9) > 4 → lo=4',
      'mid=5 (2) < 4 → hi=5',
      'mid=4 (1) < 4 → hi=4',
      'Answer: 4 rotations'
    ],
    hints: [
      'Where is the "seam" of the rotation? (the index of the smallest element)',
      'Reuse the minimum-finding logic — the index is the rotation count.',
      'A zero-rotation array returns 0 (minimum at index 0).'
    ],
    code: {
      javascript: `function findRotations(arr) {
  let lo = 0, hi = arr.length - 1;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (arr[mid] > arr[hi]) lo = mid + 1;
    else hi = mid;
  }
  return lo;
}`,
      python: `def findRotations(arr):
    lo, hi = 0, len(arr) - 1
    while lo < hi:
        mid = (lo + hi) // 2
        if arr[mid] > arr[hi]:
            lo = mid + 1
        else:
            hi = mid
    return lo`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'bs-10',
    slug: 'search-in-rotated-sorted-array',
    title: 'Search in Rotated Sorted Array',
    pattern: 'binary-search',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/search-in-rotated-sorted-array/',
    extra: [],
    summary:
      'A sorted array of unique elements was rotated at an unknown pivot. Search for a target and return its index, or -1, in O(log n).',
    asked: 'Index of the target in the rotated array, or -1.',
    why:
      'At any mid, at least one half (lo..mid or mid..hi) is ALWAYS sorted. Decide which half is sorted, check whether the target lies inside it, and discard the other half.',
    clues: ['rotated sorted array', 'search target', 'O(log n)'],
    brute: {
      idea: 'Linear scan.',
      time: 'O(n)',
      space: 'O(1)'
    },
    optimal: {
      idea:
        'While lo <= hi: mid. If arr[mid] === target, return mid. Determine which side is sorted: if arr[lo] <= arr[mid], the LEFT is sorted — if target is in [arr[lo], arr[mid]) go left, else right. Symmetrically for the sorted right side.',
      steps: [
        'lo = 0, hi = n - 1.',
        'While lo <= hi:',
        'mid = (lo + hi) >> 1; if equal, return mid.',
        'If arr[lo] <= arr[mid] (left sorted): if arr[lo] <= target < arr[mid] → hi = mid - 1, else lo = mid + 1.',
        'Else (right sorted): if arr[mid] < target <= arr[hi] → lo = mid + 1, else hi = mid - 1.',
        'Return -1.'
      ],
      time: 'O(log n)',
      space: 'O(1)'
    },
    dry: [
      'arr = [4, 5, 6, 7, 0, 1, 2], target = 0',
      'lo=0, hi=6, mid=3 (7): left [4..7] sorted; 0 not in [4,7) → lo=4',
      'lo=4, hi=6, mid=5 (1): left [0..1] sorted (arr[4]=0 <= 1); 0 in [0,1)? yes → hi=4',
      'lo=4, hi=4, mid=4 (0) ✓',
      'Answer: 4'
    ],
    hints: [
      'Why is at least one of [lo..mid] or [mid..hi] always sorted?',
      'arr[lo] <= arr[mid] tells you the LEFT half is sorted (no seam inside it).',
      'Test membership with a half-open interval: [arr[lo], arr[mid]).'
    ],
    code: {
      javascript: `function search(arr, target) {
  let lo = 0, hi = arr.length - 1;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    if (arr[mid] === target) return mid;
    if (arr[lo] <= arr[mid]) {
      if (arr[lo] <= target && target < arr[mid]) hi = mid - 1;
      else lo = mid + 1;
    } else {
      if (arr[mid] < target && target <= arr[hi]) lo = mid + 1;
      else hi = mid - 1;
    }
  }
  return -1;
}`,
      python: `def search(arr, target):
    lo, hi = 0, len(arr) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if arr[mid] == target:
            return mid
        if arr[lo] <= arr[mid]:
            if arr[lo] <= target < arr[mid]:
                hi = mid - 1
            else:
                lo = mid + 1
        else:
            if arr[mid] < target <= arr[hi]:
                lo = mid + 1
            else:
                hi = mid - 1
    return -1`,
      java: '',
      cpp: ''
    }
  }
];
