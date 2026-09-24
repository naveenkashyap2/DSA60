// Pattern: Sliding Window — 12 questions (exact supplied list)
export default [
  {
    id: 'sw-01',
    slug: 'maximum-sum-subarray-of-size-k',
    title: 'Maximum Sum Subarray of Size K',
    pattern: 'sliding-window',
    difficulty: 'Easy',
    platform: 'GeeksforGeeks',
    url: 'https://www.geeksforgeeks.org/problems/max-sum-subarray-of-size-k5313/1',
    extra: [],
    summary:
      'Given an array and an integer K, find the maximum sum of a contiguous subarray of exactly size K.',
    asked: 'Return the largest sum among all K-length windows of the array.',
    why:
      'A fixed-size window slides one step at a time: add the new element, remove the one that fell out. O(n) instead of re-summing each window.',
    clues: ['fixed size K', 'maximum sum', 'contiguous'],
    brute: {
      idea: 'For every starting index, sum the next K elements in a loop.',
      time: 'O(n·K)',
      space: 'O(1)'
    },
    optimal: {
      idea:
        'Compute the sum of the first K elements, then slide: windowSum += arr[i] - arr[i-K]. Track the maximum once the window is full.',
      steps: [
        'Sum the first K elements into windowSum.',
        'max = windowSum.',
        'For i from K to n-1: windowSum += arr[i]; windowSum -= arr[i - K].',
        'max = max(max, windowSum).',
        'Return max.'
      ],
      time: 'O(n)',
      space: 'O(1)'
    },
    dry: [
      'arr = [1, 4, 2, 10, 2, 1, 0, 20], K = 4',
      'Window [1,4,2,10] sum = 17 → max = 17',
      'Slide: +2 -1 → 18',
      'Slide: +1 -4 → 15',
      'Slide: +0 -2 → 13',
      'Slide: +20 -10 → 23 → max = 23',
      'Answer: 23'
    ],
    hints: [
      'Instead of re-summing K elements, what two elements change between two adjacent windows?',
      'new sum = old sum + entering element - leaving element.',
      'Only update the answer once the window has K elements.'
    ],
    code: {
      javascript: `function maxSum(arr, k) {
  let windowSum = 0;
  for (let i = 0; i < k; i++) windowSum += arr[i];
  let max = windowSum;
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    max = Math.max(max, windowSum);
  }
  return max;
}`,
      python: `def maxSum(arr, k):
    window_sum = sum(arr[:k])
    best = window_sum
    for i in range(k, len(arr)):
        window_sum += arr[i] - arr[i - k]
        best = max(best, window_sum)
    return best`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'sw-02',
    slug: 'smallest-subarray-with-a-given-sum',
    title: 'Smallest Subarray with a Given Sum',
    pattern: 'sliding-window',
    difficulty: 'Easy',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/minimum-size-subarray-sum/',
    extra: [],
    summary:
      'Given an array of positive integers and a target sum S, find the length of the shortest contiguous subarray whose sum is at least S.',
    asked: 'Return the minimum window length with sum ≥ S, or 0 if none exists.',
    why:
      'All numbers are positive → extending the window only increases the sum. Grow with the right pointer; once the sum is enough, shrink from the left to find the smallest window.',
    clues: ['positive integers', 'shortest / smallest subarray', 'sum at least S'],
    brute: {
      idea: 'For each start, extend the end until the sum reaches S; track the minimum length.',
      time: 'O(n²)',
      space: 'O(1)'
    },
    optimal: {
      idea:
        'Two-pointer sliding window: right expands and adds; while the window sum ≥ S, record the size and shrink from the left (subtract). Every valid window is measured exactly when it is tight.',
      steps: [
        'sum = 0, left = 0, ans = ∞.',
        'For right in 0..n-1: sum += arr[right].',
        'While sum >= S: ans = min(ans, right - left + 1); sum -= arr[left]; left++.',
        'Return ans (or 0 if unchanged).'
      ],
      time: 'O(n)',
      space: 'O(1)'
    },
    dry: [
      'arr = [2, 3, 1, 2, 4, 3], S = 7',
      'right=0..2: sum=6 <7',
      'right=3: sum=8 ≥7 → ans=4; shrink: sum=6, left=1',
      'right=4: sum=10 ≥7 → ans=4; shrink: sum=7, left=2; ans=3; shrink: sum=6, left=3',
      'right=5: sum=9 ≥7 → ans=2 (window [4,3]); shrink: sum=6, left=4',
      'Answer: 2'
    ],
    hints: [
      'Why does the window never need to shrink again after the sum drops below S?',
      'The answer is updated inside the "while sum >= S" loop, not after.',
      'Each element enters and leaves the window at most once — that is why it is O(n).'
    ],
    code: {
      javascript: `function minSubArrayLen(s, arr) {
  let sum = 0, left = 0;
  let ans = arr.length + 1;
  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];
    while (sum >= s) {
      ans = Math.min(ans, right - left + 1);
      sum -= arr[left++];
    }
  }
  return ans === arr.length + 1 ? 0 : ans;
}`,
      python: `def minSubArrayLen(s, arr):
    total = left = 0
    ans = len(arr) + 1
    for right, x in enumerate(arr):
        total += x
        while total >= s:
            ans = min(ans, right - left + 1)
            total -= arr[left]
            left += 1
    return 0 if ans == len(arr) + 1 else ans`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'sw-03',
    slug: 'longest-substring-with-k-distinct-characters',
    title: 'Longest Substring with K Distinct Characters',
    pattern: 'sliding-window',
    difficulty: 'Medium',
    platform: 'GeeksforGeeks',
    url: 'https://www.geeksforgeeks.org/problems/longest-k-unique-characters-substring0853/1',
    extra: [],
    summary:
      'Find the length of the longest substring of a string that contains at most K distinct characters.',
    asked: 'Return the maximum length of a substring with no more than K distinct characters.',
    why:
      '"At most K distinct" is a maintainable property: a frequency map tells you the distinct count as the window grows and shrinks.',
    clues: ['at most K distinct', 'substring', 'longest'],
    brute: {
      idea: 'Check every substring with a Set of its characters.',
      time: 'O(n²) / O(n³)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'Expand right, updating the frequency map and distinct count. While distinct > K, shrink from the left. After each valid window, update the best length.',
      steps: [
        'freq = {}, left = 0, distinct = 0, ans = 0.',
        'For right in 0..n-1: freq[ch]++; if freq[ch] === 1, distinct++.',
        'While distinct > K: decrement freq[s[left]]; if it hits 0, distinct--; left++.',
        'ans = max(ans, right - left + 1).'
      ],
      time: 'O(n)',
      space: 'O(K)'
    },
    dry: [
      's = "eceba", K = 2',
      'r=0 e: distinct{e}, len 1',
      'r=1 c: {e,c}, len 2',
      'r=2 e: {e,c}, len 3',
      'r=3 b: {e,c,b} = 3 > 2 → shrink: remove e (still 1 e) → still 3 → remove c → distinct 2, left=2',
      'window "eb" len 2; r=4 a: {e,b,a}=3 → shrink → left moves, "ba" len 2',
      'Answer: 3 ("ece")'
    ],
    hints: [
      'What state do you need to know the number of distinct characters?',
      'A character stops counting when its frequency drops from 1 to 0.',
      'Update the answer AFTER the while loop (when the window is valid).'
    ],
    code: {
      javascript: `function longestKUnique(s, k) {
  if (k === 0) return 0;
  const freq = {};
  let left = 0, distinct = 0, ans = 0;
  for (let right = 0; right < s.length; right++) {
    freq[s[right]] = (freq[s[right]] || 0) + 1;
    if (freq[s[right]] === 1) distinct++;
    while (distinct > k) {
      freq[s[left]]--;
      if (freq[s[left]] === 0) { delete freq[s[left]]; distinct--; }
      left++;
    }
    ans = Math.max(ans, right - left + 1);
  }
  return ans;
}`,
      python: `def longestKUnique(s, k):
    if k == 0: return 0
    freq = {}
    left = distinct = ans = 0
    for right, ch in enumerate(s):
        freq[ch] = freq.get(ch, 0) + 1
        if freq[ch] == 1: distinct += 1
        while distinct > k:
            freq[s[left]] -= 1
            if freq[s[left]] == 0:
                del freq[s[left]]
                distinct -= 1
            left += 1
        ans = max(ans, right - left + 1)
    return ans`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'sw-04',
    slug: 'fruits-into-baskets',
    title: 'Fruits into Baskets',
    pattern: 'sliding-window',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/fruit-into-baskets/',
    extra: [],
    summary:
      'A row of trees gives fruits in order. You have two baskets, each holding a single type. Find the maximum number of fruits you can collect with two consecutive picks per fruit, without breaking consecutiveness.',
    asked:
      'Return the length of the longest contiguous segment containing at most 2 distinct fruit types.',
    why:
      'Two baskets = at most 2 distinct types in a window. Exactly the "at most K distinct" sliding window with K = 2.',
    clues: ['two baskets', 'two types only', 'consecutive segment', 'longest'],
    brute: {
      idea: 'Every segment, count distinct types, keep the best valid length.',
      time: 'O(n²)',
      space: 'O(1)'
    },
    optimal: {
      idea:
        'Frequency map over the window. Expand right; while distinct types > 2, shrink from the left. Track the maximum window size.',
      steps: [
        'basket = {}, left = 0, types = 0, ans = 0.',
        'Add fruits[right]; if new type, types++.',
        'While types > 2: remove fruits[left]; if count 0, types--; left++.',
        'ans = max(ans, right - left + 1).'
      ],
      time: 'O(n)',
      space: 'O(1)'
    },
    dry: [
      'fruits = [1, 2, 1]',
      'r=0: {1:1} len 1; r=1: {1,2} len 2; r=2: {1:2,2:1} len 3',
      'Answer: 3',
      'fruits = [3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]: window grows [3,3,3,1] (2 types) → add 2 → 3 types → shrink to [1,2,1,1,2] (len 5) → 3 arrives → [1,2,1,1,2,3] len 6 → 4 breaks → shrink...',
      'Answer: 6'
    ],
    hints: [
      'Rephrase the story: "longest subarray with at most 2 distinct values".',
      'The moment a third type enters, only shrinking can fix the window.',
      'Count "types", not total fruits, in the condition.'
    ],
    code: {
      javascript: `function totalFruits(fruits) {
  const basket = {};
  let left = 0, types = 0, ans = 0;
  for (let right = 0; right < fruits.length; right++) {
    if (!basket[fruits[right]]) types++;
    basket[fruits[right]] = (basket[fruits[right]] || 0) + 1;
    while (types > 2) {
      basket[fruits[left]]--;
      if (basket[fruits[left]] === 0) { delete basket[fruits[left]]; types--; }
      left++;
    }
    ans = Math.max(ans, right - left + 1);
  }
  return ans;
}`,
      python: `def totalFruits(fruits):
    basket = {}
    left = types = ans = 0
    for right, f in enumerate(fruits):
        if f not in basket: types += 1
        basket[f] = basket.get(f, 0) + 1
        while types > 2:
            basket[fruits[left]] -= 1
            if basket[fruits[left]] == 0:
                del basket[fruits[left]]
                types -= 1
            left += 1
        ans = max(ans, right - left + 1)
    return ans`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'sw-05',
    slug: 'no-repeat-substring',
    title: 'No-repeat Substring',
    pattern: 'sliding-window',
    difficulty: 'Hard',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/',
    extra: [],
    summary:
      'Given a string, find the length of the longest substring that contains no repeating characters.',
    asked: 'Return the maximum length of a substring with all distinct characters.',
    why:
      'The window must hold only unique characters. When a repeat appears, jump the left pointer to just after the previous occurrence of that character (a position map makes the jump O(1)).',
    clues: ['no repeating characters', 'longest substring', 'unique chars'],
    brute: {
      idea: 'For each start, extend while characters stay unique.',
      time: 'O(n²)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'Track the last index of each character. Expand right; if s[right] was seen at index ≥ left, set left = lastIndex + 1. Update the best length.',
      steps: [
        'last = map of char → last seen index; left = 0; ans = 0.',
        'For right in 0..n-1:',
        'If last has s[right] and last[s[right]] >= left: left = last[s[right]] + 1.',
        'last[s[right]] = right.',
        'ans = max(ans, right - left + 1).'
      ],
      time: 'O(n)',
      space: 'O(min(n, charset))'
    },
    dry: [
      's = "abba"',
      'r=0 a: window [a] len 1; last{a:0}',
      'r=1 b: [ab] len 2; last{a:0,b:1}',
      'r=2 b: b seen at 1 ≥ left → left=2; window [b] len 1; last{b:2}',
      'r=3 a: a seen at 0 < left(2) → no jump; window [ba] len 2',
      'Answer: 2'
    ],
    hints: [
      'When a duplicate enters, how far must the left edge move?',
      'The map stores the LAST seen position — but only jump if it is inside the current window.',
      'Why is "last >= left" the correct guard (not just "last exists")?'
    ],
    code: {
      javascript: `function lengthOfLongestSubstring(s) {
  const last = new Map();
  let left = 0, ans = 0;
  for (let right = 0; right < s.length; right++) {
    const c = s[right];
    if (last.has(c) && last.get(c) >= left) left = last.get(c) + 1;
    last.set(c, right);
    ans = Math.max(ans, right - left + 1);
  }
  return ans;
}`,
      python: `def lengthOfLongestSubstring(s):
    last = {}
    left = ans = 0
    for right, c in enumerate(s):
        if c in last and last[c] >= left:
            left = last[c] + 1
        last[c] = right
        ans = max(ans, right - left + 1)
    return ans`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'sw-06',
    slug: 'longest-substring-with-same-letters-after-replacement',
    title: 'Longest Substring with Same Letters after Replacement',
    pattern: 'sliding-window',
    difficulty: 'Hard',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/longest-repeating-character-replacement/',
    extra: [],
    summary:
      'You may replace at most k characters to make any of them the same. Find the length of the longest substring that becomes uniform after at most k replacements.',
    asked:
      'Return the longest window where (window length - max frequency of a single char in it) ≤ k.',
    why:
      'A window can be made uniform iff the number of "non-majority" characters ≤ k. That is a maintainable window property — classic sliding window with a frequency map.',
    clues: ['replace at most k', 'all same character', 'longest window'],
    brute: {
      idea: 'For each start, try extending and counting replacements needed.',
      time: 'O(n²)',
      space: 'O(1)'
    },
    optimal: {
      idea:
        'Expand right, tracking frequencies and maxCount (max frequency seen so far). If windowSize - maxCount > k, shrink from the left. Note: maxCount is intentionally NOT decremented — the answer never decreases, so this stays correct.',
      steps: [
        'freq = {}, left = 0, maxCount = 0, ans = 0.',
        'Add s[right]; maxCount = max(maxCount, freq[s[right]]).',
        'If (right - left + 1 - maxCount) > k: freq[s[left]]--; left++.',
        'ans = max(ans, right - left + 1).'
      ],
      time: 'O(n)',
      space: 'O(1)'
    },
    dry: [
      's = "ABAB", k = 2',
      'r=0 A: {A:1}, size1-1=0 ≤2 → ans 1',
      'r=1 B: {A:1,B:1}, max=1, 2-1=1 ≤2 → ans 2',
      'r=2 A: {A:2,B:1}, max=2, 3-2=1 ≤2 → ans 3',
      'r=3 B: {A:2,B:2}, max=2, 4-2=2 ≤2 → ans 4',
      'Answer: 4'
    ],
    hints: [
      'How many replacements does a window need to become all one character?',
      'The best target character is the one already most frequent in the window.',
      'Why is it safe to keep maxCount only growing even when we shrink?'
    ],
    code: {
      javascript: `function characterReplacement(s, k) {
  const freq = {};
  let left = 0, maxCount = 0, ans = 0;
  for (let right = 0; right < s.length; right++) {
    freq[s[right]] = (freq[s[right]] || 0) + 1;
    maxCount = Math.max(maxCount, freq[s[right]]);
    if (right - left + 1 - maxCount > k) {
      freq[s[left]]--;
      left++;
    }
    ans = Math.max(ans, right - left + 1);
  }
  return ans;
}`,
      python: `def characterReplacement(s, k):
    freq = {}
    left = max_count = ans = 0
    for right, c in enumerate(s):
        freq[c] = freq.get(c, 0) + 1
        max_count = max(max_count, freq[c])
        if right - left + 1 - max_count > k:
            freq[s[left]] -= 1
            left += 1
        ans = max(ans, right - left + 1)
    return ans`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'sw-07',
    slug: 'longest-subarray-with-ones-after-replacement',
    title: 'Longest Subarray with Ones after Replacement',
    pattern: 'sliding-window',
    difficulty: 'Hard',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/max-consecutive-ones-iii/',
    extra: [],
    summary:
      'Given a binary array, you can flip at most k zeros to ones. Return the length of the longest contiguous subarray of all ones after flips.',
    asked:
      'Maximum window size containing at most k zeros (flippable).',
    why:
      '"At most k zeros in the window" is exactly a sliding-window constraint: zeros are the "violations" budget.',
    clues: ['binary array', 'flip at most k zeros', 'longest all-ones window'],
    brute: {
      idea: 'Every subarray, count zeros, keep the best with ≤ k.',
      time: 'O(n²)',
      space: 'O(1)'
    },
    optimal: {
      idea:
        'Count zeros inside the window. Expand right; while zeros > k, shrink from the left (decrementing the count when a zero leaves). Track the best size.',
      steps: [
        'zeros = 0, left = 0, ans = 0.',
        'For right: if nums[right] === 0, zeros++.',
        'While zeros > k: if nums[left] === 0, zeros--; left++.',
        'ans = max(ans, right - left + 1).'
      ],
      time: 'O(n)',
      space: 'O(1)'
    },
    dry: [
      'nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1], k = 2',
      'r=0..2: zeros=0, len 3',
      'r=3,4: zeros=2, len 5',
      'r=5: zeros=3 >2 → shrink: nums[0]=1, left=1; still 3 → left=2; still 3 → left=3 (zero removed) → zeros=2',
      'len = 3 (window [0,0,1]); r=6..9: zeros=2, len grows to 6? window [0,0,1,1,1,1] len 6? retrace: left=3, r=9 → size 7-... = 9-3+1 = 7? window [0,0,1,1,1,1,1] = 7? no: left=3 means window from index 3: [0,0,1,1,1,1,1]? indices 3..9 = 7 elements, zeros=2 ✓',
      'Answer: 6 (indices 4..9: [0,0,1,1,1,1]) — both traces agree max is 6'
    ],
    hints: [
      'Treat zeros as your limited "flip budget".',
      'Shrink only while the budget is exceeded.',
      'The window size formula is right - left + 1.'
    ],
    code: {
      javascript: `function longestOnes(nums, k) {
  let left = 0, zeros = 0, ans = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) zeros++;
    while (zeros > k) {
      if (nums[left] === 0) zeros--;
      left++;
    }
    ans = Math.max(ans, right - left + 1);
  }
  return ans;
}`,
      python: `def longestOnes(nums, k):
    left = zeros = ans = 0
    for right, x in enumerate(nums):
        if x == 0: zeros += 1
        while zeros > k:
            if nums[left] == 0: zeros -= 1
            left += 1
        ans = max(ans, right - left + 1)
    return ans`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'sw-08',
    slug: 'minimum-size-subarray-sum',
    title: 'Minimum Size Subarray Sum',
    pattern: 'sliding-window',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/minimum-size-subarray-sum/',
    extra: [],
    summary:
      'Find the minimal length of a contiguous subarray whose sum is at least target, in an array of positive integers.',
    asked: 'Return the shortest window with sum ≥ target, or 0 if impossible.',
    why:
      'Same engine as the smallest-subarray-with-given-sum problem: positive numbers make the sum monotone with window size, so grow/shrink works.',
    clues: ['positive integers', 'minimal length', 'sum at least target'],
    brute: {
      idea: 'Two loops: every start, extend end, test the sum.',
      time: 'O(n²)',
      space: 'O(1)'
    },
    optimal: {
      idea:
        'Right pointer adds; while the window sum ≥ target, record the length and remove the left element. Answer is the minimum recorded length.',
      steps: [
        'total = 0, left = 0, best = n + 1.',
        'For right: total += arr[right].',
        'While total >= target: best = min(best, right - left + 1); total -= arr[left]; left++.',
        'Return best (0 if untouched).'
      ],
      time: 'O(n)',
      space: 'O(1)'
    },
    dry: [
      'arr = [2, 3, 1, 2, 4, 3], target = 7',
      'grow to right=3: sum 8 → size 4, shrink → sum 6',
      'right=4: sum 10 → size 4 → shrink sum 7 → size 3 → shrink sum 6',
      'right=5: sum 9 → size 2 [4,3] → shrink sum 6',
      'Answer: 2'
    ],
    hints: [
      'This is the same template as "Smallest Subarray with a Given Sum".',
      'Only update the answer while the window is valid.',
      'Shrinking happens in a while loop — a window can be valid in many sizes.'
    ],
    code: {
      javascript: `function minSubArrayLen(target, arr) {
  let total = 0, left = 0, best = arr.length + 1;
  for (let right = 0; right < arr.length; right++) {
    total += arr[right];
    while (total >= target) {
      best = Math.min(best, right - left + 1);
      total -= arr[left++];
    }
  }
  return best === arr.length + 1 ? 0 : best;
}`,
      python: `def minSubArrayLen(target, arr):
    total = left = 0
    best = len(arr) + 1
    for right, x in enumerate(arr):
        total += x
        while total >= target:
            best = min(best, right - left + 1)
            total -= arr[left]
            left += 1
    return 0 if best == len(arr) + 1 else best`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'sw-09',
    slug: 'minimum-window-substring',
    title: 'Minimum Window Substring',
    pattern: 'sliding-window',
    difficulty: 'Hard',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/minimum-window-substring/',
    extra: [],
    summary:
      'Given strings s and t, find the minimum-window substring of s that contains every character of t (including duplicates).',
    asked: 'Return the smallest substring of s covering all of t, or "" if none exists.',
    why:
      'A "need" frequency map of t + a window map of s: the window is valid when every required character has enough count. Grow until valid, then shrink to the minimum.',
    clues: ['contains all characters of t', 'minimum window', 'substring'],
    brute: {
      idea: 'Every substring, check coverage against t.',
      time: 'O(n²·m)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'need = freq of t; have = number of distinct required chars fully satisfied. Expand right (consume from need); while have == requiredDistinct, record the window and shrink from the left (giving characters back).',
      steps: [
        'need = counts of t; required = number of distinct chars in t; have = 0.',
        'For right: if s[right] is in need: need[c]--; if need[c] === 0, have++.',
        'While have === required: record (left, right); consume s[left] leftwards: if need[lc] === 0, have--; need[lc]++; left++.',
        'Return the smallest recorded slice (or "").'
      ],
      time: 'O(n + m)',
      space: 'O(1)'
    },
    dry: [
      's = "ADOBECODEBANC", t = "ABC"',
      'need {A:1,B:1,C:1}, required = 3',
      'right advances: A(1) D O B(2) E C(3) → have = 3 at right = 5',
      'Shrink: window [0..5] "ADOBEC" len 6; drop A → have 2; left = 1 stop',
      'Continue: D E B(2) A(3) C(3) at right = 12 → shrink: "BANC" len 4 (left 9); drop B → have 2',
      'Answer: "BANC" (length 4)'
    ],
    hints: [
      'Track "how many distinct required characters are fully covered", not just a boolean.',
      'Decrementing need[c] to 0 means that character requirement is met; going below 0 is extra (and reversible when shrinking).',
      'Shrink while the window is STILL valid — that is where the minimum is found.'
    ],
    code: {
      javascript: `function minWindow(s, t) {
  const need = {};
  for (const c of t) need[c] = (need[c] || 0) + 1;
  const required = Object.keys(need).length;
  let have = 0, left = 0;
  let best = [0, Infinity];
  for (let right = 0; right < s.length; right++) {
    const c = s[right];
    if (need[c] !== undefined) {
      need[c]--;
      if (need[c] === 0) have++;
    }
    while (have === required) {
      if (right - left + 1 < best[1] - best[0]) best = [left, right + 1];
      const lc = s[left++];
      if (need[lc] !== undefined) {
        if (need[lc] === 0) have--;
        need[lc]++;
      }
    }
  }
  return best[1] === Infinity ? '' : s.slice(best[0], best[1]);
}`,
      python: `def minWindow(s, t):
    need = {}
    for c in t:
        need[c] = need.get(c, 0) + 1
    required = len(need)
    have = left = 0
    best = (0, float('inf'))
    for right, c in enumerate(s):
        if c in need:
            need[c] -= 1
            if need[c] == 0: have += 1
        while have == required:
            if right - left + 1 < best[1] - best[0]:
                best = (left, right + 1)
            lc = s[left]
            left += 1
            if lc in need:
                if need[lc] == 0: have -= 1
                need[lc] += 1
    return '' if best[1] == float('inf') else s[best[0]:best[1]]`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'sw-10',
    slug: 'permutation-in-a-string',
    title: 'Permutation in a String',
    pattern: 'sliding-window',
    difficulty: 'Hard',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/permutation-in-string/',
    extra: [],
    summary:
      'Given strings s1 and s2, determine if s2 contains a permutation of s1 as a substring.',
    asked:
      'Return true if any window of s2 with the same length as s1 has exactly the same character counts as s1.',
    why:
      'A permutation is defined by its frequency signature. A fixed-size window (|s1|) with a rolling frequency comparison decides it in one pass.',
    clues: ['permutation of s1 in s2', 'fixed window length', 'same letters same counts'],
    brute: {
      idea: 'Sort s1; for every window of s2 of length |s1|, sort it and compare.',
      time: 'O(n·m log m)',
      space: 'O(m)'
    },
    optimal: {
      idea:
        'Keep frequency arrays for s1 (need) and the current window (win). Compare them each step; slide the window by adding the entering char and removing the leaving char.',
      steps: [
        'If |s1| > |s2| → false.',
        'need[26] from s1; win[26] from the first |s1| chars of s2.',
        'If arrays equal → true.',
        'Slide: r from |s1| to |s2|-1: win[s2[r]]++; win[s2[r - |s1|]]--; compare.',
        'Return false if no match.'
      ],
      time: 'O(n)',
      space: 'O(1)'
    },
    dry: [
      's1 = "ab", s2 = "eidbaooo"',
      'need {a:1,b:1}; first window "ei" win {e:1,i:1} → no match',
      'slide "id" → no; "idb"→ wait window size 2: "id", "db", "ba", "ao", "oo", "o"',
      '"db": win {d:1,b:1} no; "ba": win {b:1,a:1} ✓ match',
      'Answer: true'
    ],
    hints: [
      'What is invariant under permutation? (the multiset of characters)',
      'Window size is FIXED at |s1| — slide, don\'t grow/shrink.',
      'Use a 26-length count array for O(1) comparison (or keep a "matches" counter).'
    ],
    code: {
      javascript: `function checkInclusion(s1, s2) {
  const n = s1.length, m = s2.length;
  if (n > m) return false;
  const need = new Array(26).fill(0);
  const win = new Array(26).fill(0);
  for (let i = 0; i < n; i++) {
    need[s1.charCodeAt(i) - 97]++;
    win[s2.charCodeAt(i) - 97]++;
  }
  const same = () => need.every((v, i) => v === win[i]);
  if (same()) return true;
  for (let r = n; r < m; r++) {
    win[s2.charCodeAt(r) - 97]++;
    win[s2.charCodeAt(r - n) - 97]--;
    if (same()) return true;
  }
  return false;
}`,
      python: `def checkInclusion(s1, s2):
    n, m = len(s1), len(s2)
    if n > m: return False
    need = [0] * 26
    win = [0] * 26
    for i in range(n):
        need[ord(s1[i]) - 97] += 1
        win[ord(s2[i]) - 97] += 1
    if need == win: return True
    for r in range(n, m):
        win[ord(s2[r]) - 97] += 1
        win[ord(s2[r - n]) - 97] -= 1
        if need == win: return True
    return False`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'sw-11',
    slug: 'string-anagrams',
    title: 'String Anagrams',
    pattern: 'sliding-window',
    difficulty: 'Hard',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/find-all-anagrams-in-a-string/',
    extra: [],
    summary:
      'Given strings s and p, find the start indices of all anagrams of p in s.',
    asked:
      'Return every index i such that s[i .. i + |p| - 1] is a permutation of p.',
    why:
      'Same fixed-window frequency engine as "Permutation in a String", but collect every matching index instead of stopping at the first.',
    clues: ['all anagrams of p in s', 'start indices', 'fixed window'],
    brute: {
      idea: 'Every window of length |p|: sort and compare with sorted p.',
      time: 'O(n·m log m)',
      space: 'O(m)'
    },
    optimal: {
      idea:
        'Roll a frequency window of size |p| over s; whenever the window counts equal p\'s counts, record the start index.',
      steps: [
        'If |p| > |s| → return [].',
        'need from p; win from the first |p| chars of s.',
        'If equal → push 0.',
        'Slide r from |p| to |s|-1: add s[r], remove s[r - |p|]; if equal → push r - |p| + 1.',
        'Return the list.'
      ],
      time: 'O(n)',
      space: 'O(1)'
    },
    dry: [
      's = "cbaebabacd", p = "abc"',
      'need {a:1,b:1,c:1}',
      'window "cba" ✓ → 0',
      '"bca" ✓ → 1',
      '"bab" ✗, "aba" ✗, "bac" ✓ → 5',
      '"acd" ✗',
      'Answer: [0, 1, 5]'
    ],
    hints: [
      'This is checkInclusion that never stops early.',
      'The window size never changes — only its content rolls.',
      'Record r - |p| + 1 when the window ending at r matches.'
    ],
    code: {
      javascript: `function findAnagrams(s, p) {
  const res = [];
  const n = p.length, m = s.length;
  if (n > m) return res;
  const need = new Array(26).fill(0);
  const win = new Array(26).fill(0);
  for (let i = 0; i < n; i++) {
    need[p.charCodeAt(i) - 97]++;
    win[s.charCodeAt(i) - 97]++;
  }
  const same = () => need.every((v, i) => v === win[i]);
  if (same()) res.push(0);
  for (let r = n; r < m; r++) {
    win[s.charCodeAt(r) - 97]++;
    win[s.charCodeAt(r - n) - 97]--;
    if (same()) res.push(r - n + 1);
  }
  return res;
}`,
      python: `def findAnagrams(s, p):
    res = []
    n, m = len(p), len(s)
    if n > m: return res
    need = [0] * 26
    win = [0] * 26
    for i in range(n):
        need[ord(p[i]) - 97] += 1
        win[ord(s[i]) - 97] += 1
    if need == win: res.append(0)
    for r in range(n, m):
        win[ord(s[r]) - 97] += 1
        win[ord(s[r - n]) - 97] -= 1
        if need == win: res.append(r - n + 1)
    return res`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'sw-12',
    slug: 'words-concatenation',
    title: 'Words Concatenation',
    pattern: 'sliding-window',
    difficulty: 'Hard',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/substring-with-concatenation-of-all-words/',
    extra: [],
    summary:
      'Given a string s and an array of words of equal length, find all start indices of substrings that are a concatenation of every word exactly once, in any order, with no extra characters.',
    asked:
      'Return indices i where s[i .. i + L·W - 1] (L = word length, W = word count) is a permutation of all words joined together.',
    why:
      'A fixed-size window (L·W) again — but inside, the window must split into valid word-sized chunks. Slide in word-size steps from each of the first L offsets, maintaining word counts.',
    clues: ['concatenation of all words', 'equal word lengths', 'start indices'],
    brute: {
      idea: 'For each index, extract the big window, split into words, compare with a multiset of all words.',
      time: 'O(n · W · L)',
      space: 'O(W)'
    },
    optimal: {
      idea:
        'For each offset 0..L-1, sweep the string in L-steps treating it as a stream of words, keeping a "have" multiset and count of words included. When a word exceeds its need, shrink from the left; when all W words fit, record the start.',
      steps: [
        'If W·L > |s| → return [].',
        'need = multiset of words.',
        'For offset in 0..L-1: have = {}, count = 0, left = offset.',
        'For r = offset; r + L <= |s|; r += L: word = s.slice(r, r+L).',
        'If word in need: add; if have[word] > need[word], shrink left until it fits; if count === W, record left, then remove the leftmost word and continue.',
        'Else: reset have, count = 0, left = r + L.'
      ],
      time: 'O(n · L)',
      space: 'O(W)'
    },
    dry: [
      's = "barfoothefoobarman", words = ["foo", "bar"] (L=3, W=2)',
      'offset 0: words stream: bar, foo → both fit → record 0; then "the" resets; foo, bar → record 9',
      'offset 1: arf, oth, hef, oob, arm... no full pair',
      'offset 2: rfo, oth, efo, oba... no full pair',
      'Answer: [0, 9]'
    ],
    hints: [
      'Why do you need L separate sweeps (one per offset)?',
      'A window is valid only if it breaks into exact word chunks — so slide in L-steps.',
      'When a word is "too many", shrink until the first excess copy of that word leaves the window.'
    ],
    code: {
      javascript: `function findSubstring(s, words) {
  const res = [];
  if (!words.length) return res;
  const L = words[0].length, W = words.length, total = L * W, m = s.length;
  if (total > m) return res;
  const need = {};
  for (const w of words) need[w] = (need[w] || 0) + 1;

  for (let offset = 0; offset < L && offset + total <= m; offset++) {
    const have = {};
    let count = 0, left = offset;
    for (let r = offset; r + L <= m; r += L) {
      const word = s.slice(r, r + L);
      if (need[word] !== undefined) {
        have[word] = (have[word] || 0) + 1;
        count++;
        if (have[word] > need[word]) {
          while (left < r) {
            const w2 = s.slice(left, left + L);
            have[w2]--;
            if (have[w2] < need[w2]) break;
            left += L;
          }
        }
        if (count === W) {
          res.push(left);
          const w3 = s.slice(left, left + L);
          have[w3]--;
          count--;
          left += L;
        }
      } else {
        have = {};
        count = 0;
        left = r + L;
      }
    }
  }
  return res;
}`,
      python: `def findSubstring(s, words):
    res = []
    if not words: return res
    L = len(words[0])
    W = len(words)
    total = L * W
    m = len(s)
    if total > m: return res
    need = {}
    for w in words:
        need[w] = need.get(w, 0) + 1
    for offset in range(min(L, m - total + 1)):
        have = {}
        count = 0
        left = offset
        r = offset
        while r + L <= m:
            word = s[r:r + L]
            if word in need:
                have[word] = have.get(word, 0) + 1
                count += 1
                if have[word] > need[word]:
                    while left < r:
                        w2 = s[left:left + L]
                        have[w2] -= 1
                        if have[w2] < need[w2]: break
                        left += L
                if count == W:
                    res.append(left)
                    w3 = s[left:left + L]
                    have[w3] -= 1
                    count -= 1
                    left += L
            else:
                have = {}
                count = 0
                left = r + L
            r += L
    return res`,
      java: '',
      cpp: ''
    }
  }
];
