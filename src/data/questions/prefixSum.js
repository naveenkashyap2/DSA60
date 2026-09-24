// Pattern: Prefix Sum — 6 questions (exact supplied list)
export default [
  {
    id: 'ps-01',
    slug: 'subarray-sum-equals-k',
    title: 'Subarray Sum Equals K',
    pattern: 'prefix-sum',
    difficulty: 'Easy',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/subarray-sum-equals-k/',
    extra: [],
    summary:
      'Given an array of integers (positive, negative, zero) and an integer k, count the number of subarrays whose sum equals k.',
    asked: 'Return the count of contiguous subarrays with sum exactly k.',
    why:
      'Subarray sum [l..r] = prefix[r] - prefix[l-1]. It equals k when a previous prefix equals prefix[r] - k — a hash map of prefix sums answers that in O(1).',
    clues: ['count subarrays', 'sum equals k', 'negatives allowed'],
    brute: {
      idea: 'For each end, walk backwards summing until the prefix check fails / completes.',
      time: 'O(n²)',
      space: 'O(1)'
    },
    optimal: {
      idea:
        'Walk left to right keeping the running prefix and a map of prefix value → how many times seen. At each position, add map[prefix - k] to the answer, then record the current prefix. Initialize the map with {0: 1} (empty prefix).',
      steps: [
        'map = {0: 1}; prefix = 0; count = 0.',
        'For each x: prefix += x.',
        'count += map[prefix - k] (how many starts give sum k ending here).',
        'map[prefix]++.',
        'Return count.'
      ],
      time: 'O(n)',
      space: 'O(n)'
    },
    dry: [
      'nums = [1, 1, 1], k = 2',
        'map{0:1}, prefix=0',
      'x=1: prefix=1; count += map[-1]=0; map{0:1,1:1}',
      'x=1: prefix=2; count += map[0]=1 → 1 ([1,1] at 0..1); map{0:1,1:1,2:1}',
      'x=1: prefix=3; count += map[1]=1 → 2 ([1,1] at 1..2)',
      'Answer: 2'
    ],
    hints: [
      'Why can\'t sliding window be used here? (negatives break monotonicity)',
      'The question becomes: "how many earlier prefixes equal prefix - k?"',
      'The empty prefix (sum 0, before index 0) must be in the map from the start.'
    ],
    code: {
      javascript: `function subarraySum(nums, k) {
  const map = new Map([[0, 1]]);
  let prefix = 0, count = 0;
  for (const x of nums) {
    prefix += x;
    count += map.get(prefix - k) || 0;
    map.set(prefix, (map.get(prefix) || 0) + 1);
  }
  return count;
}`,
      python: `def subarraySum(nums, k):
    from collections import defaultdict
    cnt = defaultdict(int)
    cnt[0] = 1
    prefix = count = 0
    for x in nums:
        prefix += x
        count += cnt[prefix - k]
        cnt[prefix] += 1
    return count`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'ps-02',
    slug: 'find-pivot-index',
    title: 'Find Pivot Index',
    pattern: 'prefix-sum',
    difficulty: 'Easy',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/find-pivot-index/',
    extra: [],
    summary:
      'Find the index where the sum of all elements strictly to the left equals the sum of all elements strictly to the right.',
    asked: 'Return the pivot index, or -1 if none exists. If several, return the leftmost.',
    why:
      'With the total sum known, leftSum and rightSum = total - leftSum - nums[i] — each index is checked in O(1) as you walk, maintaining a running leftSum.',
    clues: ['left sum equals right sum', 'balance point', 'pivot'],
    brute: {
      idea: 'For each index, sum the left side and the right side separately.',
      time: 'O(n²)',
      space: 'O(1)'
    },
    optimal: {
      idea:
        'total = sum(arr). Walk left to right with leftSum. At index i: rightSum = total - leftSum - nums[i]. If leftSum === rightSum → pivot. Then leftSum += nums[i].',
      steps: [
        'total = sum of the array.',
        'leftSum = 0.',
        'For i from 0 to n-1:',
        'If leftSum === total - leftSum - nums[i]: return i.',
        'leftSum += nums[i].',
        'Return -1.'
      ],
      time: 'O(n)',
      space: 'O(1)'
    },
    dry: [
      'nums = [1, 7, 3, 6, 5, 6]',
      'total = 28',
      'i=0: left=0, right=28-0-1=27 → no; left=1',
      'i=1: left=1, right=28-1-7=20 → no; left=8',
      'i=2: left=8, right=28-8-3=17 → no; left=11',
      'i=3: left=11, right=28-11-6=11 ✓',
      'Answer: 3'
    ],
    hints: [
      'You only need the TOTAL once — every side sum derives from it.',
      'rightSum = total - leftSum - current element.',
      'Check BEFORE adding the current element to leftSum (it is neither left nor right).'
    ],
    code: {
      javascript: `function pivotIndex(nums) {
  const total = nums.reduce((a, b) => a + b, 0);
  let left = 0;
  for (let i = 0; i < nums.length; i++) {
    if (left === total - left - nums[i]) return i;
    left += nums[i];
  }
  return -1;
}`,
      python: `def pivotIndex(nums):
    total = sum(nums)
    left = 0
    for i, x in enumerate(nums):
        if left == total - left - x:
            return i
        left += x
    return -1`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'ps-03',
    slug: 'subarray-sums-divisible-by-k',
    title: 'Subarray Sums Divisible By K',
    pattern: 'prefix-sum',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/subarray-sums-divisible-by-k/',
    extra: [],
    summary:
      'Count the number of non-empty subarrays whose sum is divisible by k.',
    asked: 'Return the count of contiguous subarrays with sum % k === 0.',
    why:
      'Subarray [l..r] sum ≡ 0 (mod k) exactly when prefix[r] and prefix[l-1] have the same remainder mod k. So count pairs of equal remainders — a frequency map over remainders.',
    clues: ['divisible by k', 'count subarrays', 'remainders'],
    brute: {
      idea: 'Every subarray, check sum % k.',
      time: 'O(n²)',
      space: 'O(1)'
    },
    optimal: {
      idea:
        'Track the running prefix remainder. For each position, the answer increases by how many earlier prefixes share that remainder. Keep a count array of size k. Handle negative remainders with ((x % k) + k) % k.',
      steps: [
        'cnt = array of k zeros; cnt[0] = 1 (empty prefix).',
        'prefix = 0.',
        'For each x: prefix += x; mod = ((prefix % k) + k) % k.',
        'ans += cnt[mod]; cnt[mod]++.',
        'Return ans.'
      ],
      time: 'O(n)',
      space: 'O(k)'
    },
    dry: [
      'nums = [4, 5, 0, -9], k = 5',
      'cnt[0]=1',
      'x=4: prefix=4, mod=4 → ans+=0; cnt[4]=1',
      'x=5: prefix=9, mod=4 → ans+=1 ([4,5]=9? no — [5] and [4,5]? count pairs: prefixes 4 and 9 share mod 4 → subarray [5] sum 5 ✓) → ans=1; cnt[4]=2',
      'x=0: prefix=9, mod=4 → ans+=2 → 3; cnt[4]=3',
      'x=-9: prefix=0, mod=0 → ans+=1 → 4 (the whole array); cnt[0]=2',
      'Answer: 4'
    ],
    hints: [
      'Two prefixes with the same remainder give a divisible subarray between them.',
      'Why must cnt[0] start at 1? (subarrays starting at index 0)',
      'Negative prefixes need a normalized remainder (0..k-1).'
    ],
    code: {
      javascript: `function subarrayDivByK(nums, k) {
  const cnt = new Array(k).fill(0);
  cnt[0] = 1;
  let prefix = 0, ans = 0;
  for (const x of nums) {
    prefix += x;
    const mod = ((prefix % k) + k) % k;
    ans += cnt[mod];
    cnt[mod]++;
  }
  return ans;
}`,
      python: `def subarrayDivByK(nums, k):
    cnt = [0] * k
    cnt[0] = 1
    prefix = ans = 0
    for x in nums:
        prefix += x
        mod = prefix % k
        ans += cnt[mod]
        cnt[mod] += 1
    return ans`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'ps-04',
    slug: 'contiguous-array',
    title: 'Contiguous Array',
    pattern: 'prefix-sum',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/contiguous-array/',
    extra: [],
    summary:
      'Given a binary array, find the length of the longest contiguous subarray with an equal number of 0s and 1s.',
    asked: 'Return the maximum length of a subarray containing equal counts of 0 and 1.',
    why:
      'Map 0 → -1. Equal counts means the running sum returns to a value it has seen before. The longest such gap between two equal prefix balances is the answer — first-occurrence map.',
    clues: ['equal number of 0s and 1s', 'longest subarray', 'binary array'],
    brute: {
      idea: 'Every subarray, count zeros and ones.',
      time: 'O(n²)',
      space: 'O(1)'
    },
    optimal: {
      idea:
        'balance += (x === 1 ? 1 : -1). Keep a map of balance → first index seen. If the balance was seen at index j, the subarray (j+1..i) is balanced; length = i - j. Keep the FIRST occurrence to maximize length.',
      steps: [
        'map = {0: -1} (balance 0 before the array starts).',
        'balance = 0, ans = 0.',
        'For i, x: balance += x === 1 ? 1 : -1.',
        'If map has balance: ans = max(ans, i - map[balance]).',
        'Else: map[balance] = i.',
        'Return ans.'
      ],
      time: 'O(n)',
      space: 'O(n)'
    },
    dry: [
      'nums = [0, 1]',
      'map{0:-1}, balance=0',
      'i=0 x=0: balance=-1 (new) → map{-1:0}',
      'i=1 x=1: balance=0 (seen at -1) → ans = 1 - (-1) = 2',
      'Answer: 2'
    ],
    hints: [
      'Convert the "equal counts" condition into a "return to a previous value" condition.',
      'What do you do with 0s so that equal counts means balance returns to an old value?',
      'Store the FIRST index of each balance, not the latest — longest gap wins.'
    ],
    code: {
      javascript: `function findMaxLength(nums) {
  const first = new Map([[0, -1]]);
  let balance = 0, ans = 0;
  for (let i = 0; i < nums.length; i++) {
    balance += nums[i] === 1 ? 1 : -1;
    if (first.has(balance)) {
      ans = Math.max(ans, i - first.get(balance));
    } else {
      first.set(balance, i);
    }
  }
  return ans;
}`,
      python: `def findMaxLength(nums):
    first = {0: -1}
    balance = ans = 0
    for i, x in enumerate(nums):
        balance += 1 if x == 1 else -1
        if balance in first:
            ans = max(ans, i - first[balance])
        else:
            first[balance] = i
    return ans`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'ps-05',
    slug: 'shortest-subarray-with-sum-at-least-k',
    title: 'Shortest Subarray With Sum at Least K',
    pattern: 'prefix-sum',
    difficulty: 'Hard',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/',
    extra: [],
    summary:
      'Given an array of integers (positives AND negatives) and a target K, return the length of the shortest non-empty subarray with sum at least K, or -1.',
    asked: 'Shortest contiguous subarray whose sum ≥ K, in O(n) or better.',
    why:
      'Prefix sums with a monotonic deque: for each end j, we want the farthest-back i with P[j] - P[i] ≥ K. A deque of candidate i\'s with strictly increasing P values gives the answer in one pass.',
    clues: ['at least K with negatives', 'shortest subarray', 'O(n) required'],
    brute: {
      idea: 'Every start, extend end (or two pointers — broken by negatives).',
      time: 'O(n²)',
      space: 'O(1)'
    },
    optimal: {
      idea:
        'P = prefix sums. Maintain a deque of indices with strictly increasing P. For each j: while P[j] - P[front] ≥ K, record j - front and pop the front (an earlier i is always at least as good for future j... actually we want the FARthest i, and front is the oldest). Then pop back while P[back] ≥ P[j] (those can never be optimal), and push j.',
      steps: [
        'Build prefix array P[0..n].',
        'dq = [0] (indices into P; P values kept increasing).',
        'For j from 1 to n:',
        'While dq non-empty and P[j] - P[dq.front] ≥ K: ans = min(ans, j - dq.front); pop front.',
        'While dq non-empty and P[j] ≤ P[dq.back]: pop back.',
        'Push j.',
        'Return ans or -1.'
      ],
      time: 'O(n)',
      space: 'O(n)'
    },
    dry: [
      'nums = [2, -1, 2], k = 3',
      'P = [0, 2, 1, 3]',
      'j=1 (P=2): 2-0 <3; push → dq=[0,1]',
      'j=2 (P=1): 1-0<3; P[2]=1 ≤ P[1]=2 → pop 1; push → dq=[0,2]',
      'j=3 (P=3): 3-0 ≥3 → ans=3, pop 0 → 3-1? P[2]=1: 3-1=2 <3 stop. P[3]=3 > P[2]=1 → push → dq=[2,3]',
      'Answer: 3? but [2,-1,2] sum 3 length 3; is there shorter? [2, -1, 2]... subarrays: [2] (2), [2,-1] (1), [-1,2] (1), [2,-1,2] (3) → 3 ✓'
    ],
    hints: [
      'Negatives kill two-pointer. What structure remembers "promising starting prefixes"?',
      'A candidate i with a LARGER prefix is never better than one with a smaller prefix at an earlier-or-equal position... keep P strictly increasing in the deque.',
      'Popping the front after a match is safe: the same front can never yield a shorter answer for a later j.'
    ],
    code: {
      javascript: `function shortestSubarray(nums, k) {
  const n = nums.length;
  const P = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) P[i + 1] = P[i] + nums[i];
  const dq = [0];
  let ans = Infinity;
  for (let j = 1; j <= n; j++) {
    while (dq.length && P[j] - P[dq[0]] >= k) {
      ans = Math.min(ans, j - dq[0]);
      dq.shift();
    }
    while (dq.length && P[j] <= P[dq[dq.length - 1]]) dq.pop();
    dq.push(j);
  }
  return ans === Infinity ? -1 : ans;
}`,
      python: `from collections import deque
def shortestSubarray(nums, k):
    n = len(nums)
    P = [0] * (n + 1)
    for i in range(n):
        P[i + 1] = P[i] + nums[i]
    dq = deque([0])
    ans = float('inf')
    for j in range(1, n + 1):
        while dq and P[j] - P[dq[0]] >= k:
            ans = min(ans, j - dq.popleft())
        while dq and P[j] <= P[dq[-1]]:
            dq.pop()
        dq.append(j)
    return -1 if ans == float('inf') else ans`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'ps-06',
    slug: 'count-of-range-sum',
    title: 'Count of Range Sum',
    pattern: 'prefix-sum',
    difficulty: 'Hard',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/count-of-range-sum/',
    extra: [],
    summary:
      'Given an array and two integers lower and upper, count the number of (i, j) pairs with i ≤ j and lower ≤ sum(i..j) ≤ upper.',
    asked: 'Count subarrays whose sum lies in [lower, upper] — in O(n log n).',
    why:
      'Again prefix pairs: lower ≤ P[j] - P[i] ≤ upper with i < j. This is "count pairs with difference in a range" — the classic merge-sort counting (or Fenwick tree) problem.',
    clues: ['sum in [lower, upper]', 'count pairs', 'O(n log n)'],
    brute: {
      idea: 'All (i, j) with running sums.',
      time: 'O(n²)',
      space: 'O(1)'
    },
    optimal: {
      idea:
        'Merge sort on the prefix array. At each merge step, both halves are sorted; count cross pairs (i in left, j in right) with P[i] + lower ≤ P[j] ≤ P[i] + upper using two sliding pointers over the sorted right half. Then merge as usual. Total O(n log n).',
      steps: [
        'Build P[0..n] (prefix sums).',
        'sortCount(l, r): if r - l < 2 return 0; m = mid.',
        'count = sortCount(l, m) + sortCount(m, r).',
        'Cross: for each i in the sorted left half, advance two pointers over the sorted right half to count P[j] in [P[i]+lower, P[i]+upper].',
        'Merge the two sorted halves.',
        'Answer = sortCount(0, n+1).'
      ],
      time: 'O(n log n)',
      space: 'O(n)'
    },
    dry: [
      'nums = [-2, 5, -1], lower = -2, upper = 2',
      'P = [0, -2, 3, 2]',
      'Pairs (i<j) with -2 ≤ P[j]-P[i] ≤ 2: (0,1): -2 ✓; (0,3): 2 ✓; (2,3): -1 ✓; others out of range',
      'Merge-sort counting accumulates: left half [0,-2] gives 1 cross; right half [3,2] gives 1; top cross (left [-2,0] vs right [2,3]) gives 1 for P[i]=0 → P[j]=2 in [−2,2] ✓',
      'Answer: 3'
    ],
    hints: [
      'Reduce to: count pairs of prefix sums whose difference is in [lower, upper].',
      'In merge sort, when do you have two sorted halves? (after the recursive calls, before merging)',
      'Two pointers over the sorted right half move only forward as P[i] increases in the sorted left half.'
    ],
    code: {
      javascript: `function countRangeSum(nums, lower, upper) {
  const P = [0];
  for (const x of nums) P.push(P[P.length - 1] + x);

  function sortCount(l, r) {
    if (r - l < 2) return 0;
    const m = (l + r) >> 1;
    let count = sortCount(l, m) + sortCount(m, r);
    // P[l..m) and P[m..r) are sorted here
    let j = m, k = m;
    for (let i = l; i < m; i++) {
      while (j < r && P[j] < P[i] + lower) j++;
      if (k < j) k = j;
      while (k < r && P[k] <= P[i] + upper) k++;
      count += k - j;
    }
    const temp = P.slice(l, r);
    let a = l, b = m, t = l;
    while (a < m && b < r) P[t++] = temp[a] <= temp[b] ? temp[a++] : temp[b++];
    while (a < m) P[t++] = temp[a++];
    while (b < r) P[t++] = temp[b++];
    return count;
  }
  return sortCount(0, P.length);
}`,
      python: `def countRangeSum(nums, lower, upper):
    P = [0]
    for x in nums:
        P.append(P[-1] + x)

    def sort_count(l, r):
        if r - l < 2:
            return 0
        m = (l + r) // 2
        count = sort_count(l, m) + sort_count(m, r)
        j = k = m
        for i in range(l, m):
            while j < r and P[j] < P[i] + lower:
                j += 1
            if k < j:
                k = j
            while k < r and P[k] <= P[i] + upper:
                k += 1
            count += k - j
        temp = P[l:r]
        a, b, t = l, m, l
        while a < m and b < r:
            P[t] = temp[a - l] if temp[a - l] <= temp[b - m] else temp[b - m]
            if temp[a - l] <= temp[b - m]:
                a += 1
            else:
                b += 1
            t += 1
        while a < m:
            P[t] = temp[a - l]; a += 1; t += 1
        while b < r:
            P[t] = temp[b - m]; b += 1; t += 1
        return count

    return sort_count(0, len(P))`,
      java: '',
      cpp: ''
    }
  }
];
