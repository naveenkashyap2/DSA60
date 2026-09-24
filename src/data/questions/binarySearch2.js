// Pattern: Binary Search — questions 11-23 of 23 (exact supplied list)
export default [
  {
    id: 'bs-11',
    slug: 'koko-eating-bananas',
    title: 'Koko Eating Bananas',
    pattern: 'binary-search',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/koko-eating-bananas/',
    extra: [],
    summary:
      'Koko eats bananas at speed K per hour; each hour she picks one pile and eats up to K. Find the minimum K so she finishes all piles within H hours.',
    asked: 'Minimum integer speed K that lets her finish all piles in ≤ H hours.',
    why:
      'Classic "minimize the answer" binary search: the predicate "can she finish at speed K?" is MONOTONIC (faster is never worse). Search K in [1, max pile].',
    clues: ['minimum speed to finish in time', 'monotonic feasibility', 'binary search on answer'],
    brute: {
      idea: 'Try every speed from 1 upward until the time fits.',
      time: 'O(n · maxPile)',
      space: 'O(1)'
    },
    optimal: {
      idea:
        'Binary search K in [1, max(piles)]. Hours needed at speed K = Σ ceil(pile / K). If hours ≤ H, try a smaller K (hi = mid), else lo = mid + 1.',
      steps: [
        'lo = 1, hi = max pile.',
        'While lo < hi:',
        'mid = (lo + hi) >> 1.',
        'hours = Σ ceil(p / mid).',
        'If hours <= H: hi = mid (K might be smaller). Else lo = mid + 1.',
        'Return lo.'
      ],
      time: 'O(n · log(maxPile))',
      space: 'O(1)'
    },
    dry: [
      'piles = [31, 11, 23], H = 6',
      'lo=1, hi=31 → mid=16: hours = 2+1+2 = 5 ≤ 6 → hi=16',
      'mid=8: 4+2+3 = 9 > 6 → lo=9',
      'mid=12: 3+1+2 = 6 ≤ 6 → hi=12',
      'mid=10: 4+2+3 = 9 > 6 → lo=11; mid=11: 3+1+3 = 7 > 6 → lo=12',
      'Answer: 12? recheck: at 11 hours=7 >6; at 12 hours=6 ✓ → 12? actually ceil(31/12)=3, ceil(11/12)=1, ceil(23/12)=2 → 6 ✓ → 12',
      'Answer: 12'
    ],
    hints: [
      'The answer space is a NUMBER (the speed), not an index — binary search the value range.',
      'Writing the feasibility check "hours(K) ≤ H" is the whole problem.',
      'Feasibility is monotonic: if K works, every K\' > K works.'
    ],
    code: {
      javascript: `function minEatingSpeed(piles, h) {
  const canFinish = (speed) =>
    piles.reduce((acc, p) => acc + Math.ceil(p / speed), 0) <= h;
  let lo = 1, hi = Math.max(...piles);
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (canFinish(mid)) hi = mid;
    else lo = mid + 1;
  }
  return lo;
}`,
      python: `def minEatingSpeed(piles, h):
    def can_finish(speed):
        return sum((p + speed - 1) // speed for p in piles) <= h
    lo, hi = 1, max(piles)
    while lo < hi:
        mid = (lo + hi) // 2
        if can_finish(mid):
            hi = mid
        else:
            lo = mid + 1
    return lo`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'bs-12',
    slug: 'min-number-of-days-to-make-m-bouquets',
    title: 'Min Number of Days to Make M Bouquets',
    pattern: 'binary-search',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/',
    extra: [],
    summary:
      'Flowers bloom on given days; each bouquet needs k ADJACENT bloomed flowers. Find the minimum day by which M bouquets can be made.',
    asked: 'Smallest day D such that the bloom pattern up to D contains M disjoint adjacent runs of length ≥ k.',
    why:
      '"Can we make M bouquets by day D?" is monotonic in D — binary search D in [min bloom, max bloom] and count adjacent bloomed runs per day.',
    clues: ['minimum days', 'adjacent k flowers per bouquet', 'monotonic check'],
    brute: {
      idea: 'Simulate day by day, counting bouquets each day.',
      time: 'O(maxDay · n)',
      space: 'O(1)'
    },
    optimal: {
      idea:
        'Binary search D. Feasibility: scan the row, tracking a run of consecutive flowers with bloomDay ≤ D; every time the run reaches k, make a bouquet and reset the run. Success if bouquets ≥ M. Early-out if M·K > n.',
      steps: [
        'If m * k > n: return -1.',
        'lo = min(bloomDay), hi = max(bloomDay).',
        'canMake(D): walk the array; count consecutive d ≤ D; at k, bouquets++, reset.',
        'If canMake(mid): hi = mid else lo = mid + 1.',
        'Return lo.'
      ],
      time: 'O(n · log(maxDay))',
      space: 'O(1)'
    },
    dry: [
      'bloomDay = [1, 10, 3, 10, 2], m = 3, k = 1',
      'Each flower is its own bouquet → need 3 flowers bloomed → day 3 (flowers at 1,3,2 bloom)',
      'lo=1, hi=10: mid=5 → flowers ≤5: 1,3,2 → 3 bouquets ✓ → hi=5',
      'mid=3 → 3 bouquets ✓ → hi=3; mid=2 → only 2 flowers → lo=3',
      'Answer: 3'
    ],
    hints: [
      'Search the DAY, not the flowers — the predicate is "bouquets by day D ≥ M".',
      'A bouquet needs a CONTIGUOUS run — reset your counter when a flower hasn\'t bloomed.',
      'M*K > n makes it impossible no matter the day.'
    ],
    code: {
      javascript: `function minDays(bloomDay, m, k) {
  const n = bloomDay.length;
  if (m * k > n) return -1;
  const canMake = (day) => {
    let bouquets = 0, run = 0;
    for (const d of bloomDay) {
      if (d <= day) {
        run++;
        if (run === k) { bouquets++; run = 0; }
      } else run = 0;
    }
    return bouquets >= m;
  };
  let lo = Math.min(...bloomDay), hi = Math.max(...bloomDay);
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (canMake(mid)) hi = mid;
    else lo = mid + 1;
  }
  return lo;
}`,
      python: `def minDays(bloomDay, m, k):
    n = len(bloomDay)
    if m * k > n:
        return -1
    def can_make(day):
        bouquets = run = 0
        for d in bloomDay:
            if d <= day:
                run += 1
                if run == k:
                    bouquets += 1
                    run = 0
            else:
                run = 0
        return bouquets >= m
    lo, hi = min(bloomDay), max(bloomDay)
    while lo < hi:
        mid = (lo + hi) // 2
        if can_make(mid):
            hi = mid
        else:
            lo = mid + 1
    return lo`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'bs-13',
    slug: 'aggressive-cows',
    title: 'Aggressive Cows',
    pattern: 'binary-search',
    difficulty: 'Hard',
    platform: 'GeeksforGeeks',
    url: 'https://www.geeksforgeeks.org/problems/aggressive-cows/1',
    extra: [],
    summary:
      'Place C cows into N stalls (given positions) so that the minimum distance between any two cows is MAXIMIZED. Return that largest minimum distance.',
    asked: 'The maximum possible value of the closest-pair distance (the "maximin" distance).',
    why:
      '"Can we place C cows with mutual distance ≥ D?" is monotonic in D — binary search D and greedily place cows at the farthest possible stalls.',
    clues: ['maximize the minimum distance', 'place items with gap', 'maximin'],
    brute: {
      idea: 'Try every pair configuration / every distance D linearly with binary search still needed for the check.',
      time: 'O(n² · C)',
      space: 'O(1)'
    },
    optimal: {
      idea:
        'Sort stall positions. Binary search D in [1, last - first]. Greedy check: place the first cow at stall 0; then place each next cow at the first stall ≥ last + D. Success if C cows fit.',
      steps: [
        'Sort positions.',
        'canPlace(D): count = 1, last = pos[0]; for each next stall: if stall - last >= D → place (count++, last = stall); stop early at C.',
        'Binary search: if canPlace(mid) → D = mid, lo = mid + 1 (try bigger); else hi = mid - 1.',
        'Return the best D.'
      ],
      time: 'O(n log n + n log(maxDist))',
      space: 'O(1)'
    },
    dry: [
      'stalls = [1, 2, 8, 4, 9], C = 3 → sorted [1, 2, 4, 8, 9]',
      'lo=1, hi=8 → mid=4: place 1, then 8 (8-1≥4), then? 9-8<4 → only 2 cows → fail; hi=3',
      'mid=2: 1, 4 (4-1≥2), 8 (8-4≥2) → 3 cows ✓ → D=2, lo=3',
      'mid=3: 1, 4, 8 ✓ → D=3, lo=4; mid=4 fail (shown) → hi=3',
      'Answer: 3'
    ],
    hints: [
      '"Maximize the MINIMUM" is the signature phrase for binary search on the answer.',
      'The feasibility check is GREEDY: always place the next cow as early as allowed.',
      'If D works, any smaller D also works — that monotonicity is what you search over.'
    ],
    code: {
      javascript: `function aggressiveCows(stalls, k) {
  stalls.sort((a, b) => a - b);
  const n = stalls.length;
  const canPlace = (dist) => {
    let count = 1, last = stalls[0];
    for (let i = 1; i < n; i++) {
      if (stalls[i] - last >= dist) {
        count++;
        last = stalls[i];
        if (count === k) return true;
      }
    }
    return false;
  };
  let lo = 1, hi = stalls[n - 1] - stalls[0], ans = 1;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    if (canPlace(mid)) { ans = mid; lo = mid + 1; }
    else hi = mid - 1;
  }
  return ans;
}`,
      python: `def aggressiveCows(stalls, k):
    stalls.sort()
    n = len(stalls)
    def can_place(dist):
        count, last = 1, stalls[0]
        for i in range(1, n):
            if stalls[i] - last >= dist:
                count += 1
                last = stalls[i]
                if count == k:
                    return True
        return False
    lo, hi, ans = 1, stalls[-1] - stalls[0], 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if can_place(mid):
            ans = mid
            lo = mid + 1
        else:
            hi = mid - 1
    return ans`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'bs-14',
    slug: 'h-index-ii',
    title: 'H-Index II',
    pattern: 'binary-search',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/h-index-ii/',
    extra: [],
    summary:
      'Given citation counts SORTED in ascending order (citations[i] = number of citations of paper i), compute the h-index in O(log n).',
    asked:
      'The largest h such that at least h papers have ≥ h citations each.',
    why:
      'h-index condition in a sorted array: at index i, papers from i to n-1 have ≥ citations[i] citations. We want the first i where citations[i] ≥ n - i — a boundary search.',
    clues: ['sorted citations', 'h-index', 'boundary search'],
    brute: {
      idea: 'Count from the largest citations downward.',
      time: 'O(n)',
      space: 'O(1)'
    },
    optimal: {
      idea:
        'Find the first index i with citations[i] >= n - i (i.e., from i onward there are n-i papers each with ≥ n-i ≥ citations[i]... condition). The h-index is n - i at that boundary.',
      steps: [
        'lo = 0, hi = n.',
        'While lo < hi: mid = (lo + hi) >> 1.',
        'If citations[mid] >= n - mid: hi = mid (boundary at mid or earlier).',
        'Else lo = mid + 1.',
        'Return n - lo.'
      ],
      time: 'O(log n)',
      space: 'O(1)'
    },
    dry: [
      'citations = [0, 1, 3, 5, 6]',
      'n = 5. Check: i=2: citations[2]=3 >= 5-2=3 ✓ → boundary candidate',
      'i=1: 1 >= 4? no → boundary is at i=2',
      'h-index = 5 - 2 = 3 ✓ (3 papers with ≥ 3 citations)',
      'Binary search: lo=0,hi=5 mid=2 (3>=3) hi=2; mid=1 (1>=4? no) lo=2 → answer 5-2=3'
    ],
    hints: [
      'At index i, the papers i..n-1 all have at least citations[i] citations.',
      'The condition "citations[i] >= n - i" means h = n - i is achievable.',
      'You are searching the FIRST index where the condition turns true.'
    ],
    code: {
      javascript: `function hIndex(citations) {
  const n = citations.length;
  let lo = 0, hi = n;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (citations[mid] >= n - mid) hi = mid;
    else lo = mid + 1;
  }
  return n - lo;
}`,
      python: `def hIndex(citations):
    n = len(citations)
    lo, hi = 0, n
    while lo < hi:
        mid = (lo + hi) // 2
        if citations[mid] >= n - mid:
            hi = mid
        else:
            lo = mid + 1
    return n - lo`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'bs-15',
    slug: 'max-candies-allocated-to-k-children',
    title: 'Max Candies Allocated to K Children',
    pattern: 'binary-search',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/maximum-candies-allocated-to-k-children/',
    extra: [],
    summary:
      'Given piles of candies, allocate to k children the SAME number of candies each, from a single pile per child. Maximize that number.',
    asked: 'The maximum X such that at least k children can each receive X candies (one pile per child).',
    why:
      '"Can every child get X?" is monotonic in X — binary search X in [0, total/k] and count piles that can each produce floor(pile / X) portions.',
    clues: ['equal allocation to k', 'one pile per child', 'maximize per child'],
    brute: {
      idea: 'Try X from total/k downward.',
      time: 'O(n · total/k)',
      space: 'O(1)'
    },
    optimal: {
      idea:
        'Binary search X. Feasibility: Σ floor(pile / X) ≥ k (each pile of size p yields floor(p/X) portions). If feasible, try larger (lo = mid); else hi = mid - 1. Start lo = 0 (always feasible) with the upper-mid variant to avoid infinite loops.',
      steps: [
        'lo = 0, hi = floor(total / k).',
        'While lo < hi:',
        'mid = (lo + hi + 1) >> 1 (guard against X = 0 division).',
        'portions = Σ floor(p / mid).',
        'If portions >= k: lo = mid. Else hi = mid - 1.',
        'Return lo.'
      ],
      time: 'O(n · log(total/k))',
      space: 'O(1)'
    },
    dry: [
      'candies = [5, 8, 6], k = 3',
      'total = 19, hi = 6',
      'mid = 3: floor(5/3)+floor(8/3)+floor(6/3) = 1+2+2 = 5 ≥ 3 → lo = 3',
      'mid = 5: 1+1+1 = 3 ≥ 3 → lo = 5',
      'mid = 6: 0+1+1 = 2 < 3 → hi = 5',
      'Answer: 5? check: 5/5=1, 8/5=1, 6/5=1 → 3 children get 5 each ✓'
    ],
    hints: [
      'Each pile independently produces floor(pile / X) portions — sum them.',
      'Why can one child only come from ONE pile? (the problem constraint)',
      'Use mid = (lo + hi + 1) >> 1 with lo = 0 to avoid division by zero and infinite loops.'
    ],
    code: {
      javascript: `function maximumCandies(candies, k) {
  const total = candies.reduce((a, b) => a + b, 0);
  let lo = 0, hi = Math.floor(total / k);
  while (lo < hi) {
    const mid = (lo + hi + 1) >> 1;
    const portions = candies.reduce((acc, p) => acc + Math.floor(p / mid), 0);
    if (portions >= k) lo = mid;
    else hi = mid - 1;
  }
  return lo;
}`,
      python: `def maximumCandies(candies, k):
    total = sum(candies)
    lo, hi = 0, total // k
    while lo < hi:
        mid = (lo + hi + 1) // 2
        portions = sum(p // mid for p in candies)
        if portions >= k:
            lo = mid
        else:
            hi = mid - 1
    return lo`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'bs-16',
    slug: 'capacity-to-ship-packages-within-d-days',
    title: 'Capacity to Ship Packages Within D Days',
    pattern: 'binary-search',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/',
    extra: [],
    summary:
      'Packages must be shipped in order, up to capacity C per day. Find the minimum C that ships everything within D days.',
    asked: 'The minimal daily capacity finishing in ≤ D days.',
    why:
      'The canonical "minimize the maximum" search: C in [max package, total weight]; feasibility = simulate the days with that capacity.',
    clues: ['minimum capacity in D days', 'order preserved', 'minimize the max'],
    brute: {
      idea: 'Try capacities from max weight upward.',
      time: 'O(n · total)',
      space: 'O(1)'
    },
    optimal: {
      idea:
        'Binary search C. Simulate: load the current day until adding the next package would exceed C, then start a new day. Success if days used ≤ D. Monotonic: bigger C never uses more days.',
      steps: [
        'lo = max(weights) (single package must fit), hi = sum(weights).',
        'canShip(C): days = 1, load = 0; for each w: if load + w > C → days++, load = 0; load += w.',
        'If days <= D: hi = mid else lo = mid + 1.',
        'Return lo.'
      ],
      time: 'O(n · log(total))',
      space: 'O(1)'
    },
    dry: [
      'weights = [1, 2, 3, 4, 5], D = 3',
      'lo = 5, hi = 15',
      'mid = 10: day1 [1,2,3,4] load 10 → day2 [5] → 2 days ≤ 3 ✓ → hi = 10',
      'mid = 7: [1,2,3] then [4] then [5] → 3 days ✓ → hi = 7',
      'mid = 6: [1,2,3] (6), [4], [5] → 3 ✓ → hi = 6',
      'mid = 5: [1,2] [3] [4] [5] → 4 > 3 ✗ → lo = 6',
      'Answer: 6'
    ],
    hints: [
      'Lower bound: the heaviest single package. Upper bound: everything in one day.',
      'The simulation is a linear scan that RESPECTS ORDER (no reordering allowed).',
      'Feasibility is monotonic — bigger capacity can only reduce the days needed.'
    ],
    code: {
      javascript: `function shipWithinDays(weights, days) {
  const canShip = (cap) => {
    let used = 1, load = 0;
    for (const w of weights) {
      if (load + w > cap) { used++; load = 0; }
      load += w;
    }
    return used <= days;
  };
  let lo = Math.max(...weights), hi = weights.reduce((a, b) => a + b, 0);
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (canShip(mid)) hi = mid;
    else lo = mid + 1;
  }
  return lo;
}`,
      python: `def shipWithinDays(weights, days):
    def can_ship(cap):
        used, load = 1, 0
        for w in weights:
            if load + w > cap:
                used += 1
                load = 0
            load += w
        return used <= days
    lo, hi = max(weights), sum(weights)
    while lo < hi:
        mid = (lo + hi) // 2
        if can_ship(mid):
            hi = mid
        else:
            lo = mid + 1
    return lo`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'bs-17',
    slug: 'book-allocation-problem',
    title: 'Book Allocation Problem',
    pattern: 'binary-search',
    difficulty: 'Hard',
    platform: 'GeeksforGeeks',
    url: 'https://www.geeksforgeeks.org/problems/allocate-minimum-number-of-pages0937/1',
    extra: [],
    summary:
      'Allocate N books (with page counts, in order) to K students so each gets a contiguous block. Minimize the maximum pages any student receives.',
    asked: 'The smallest possible value of the largest allocation (contiguity preserved).',
    why:
      'Identical engine to "capacity to ship": binary search the per-student page cap, simulate the contiguous allocation, count students used.',
    clues: ['contiguous allocation', 'minimize the maximum', 'K students'],
    brute: {
      idea: 'Recursively partition and take the best (exponential).',
      time: 'O(2ⁿ)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'Cap P in [max pages, total pages]. Simulation: walk books in order; start a new student when the next book would exceed P. Feasible if students used ≤ K. Binary search the smallest feasible P.',
      steps: [
        'If K > N: return -1 (per platform convention).',
        'lo = max(pages), hi = sum(pages).',
        'canAllocate(P): students = 1, cur = 0; for each p: if cur + p > P → students++, cur = 0; cur += p.',
        'If students <= K: hi = mid else lo = mid + 1.',
        'Return lo.'
      ],
      time: 'O(n · log(total))',
      space: 'O(1)'
    },
    dry: [
      'arr = [12, 34, 67, 90], K = 2',
      'lo = 90, hi = 203 → mid = 146: student1 [12,34,67] (113), student2 [90] → 2 ≤ 2 ✓ → hi = 146',
      'mid = 118: [12,34,67] 113, [90] → 2 ✓ → hi = 118',
      'mid = 104: [12,34,67]? 113 > 104 → [12,34] then [67,90]? 157>104 → [67],[90] → 3 > 2 ✗ → lo = 105',
      '... converges to 113 (student1 gets 113 pages)',
      'Answer: 113'
    ],
    hints: [
      'This is "ship packages" with books as packages and students as days.',
      'Contiguity means the simulation is a simple left-to-right greedy packing.',
      'Lower bound is the single largest book — no student can take less than that.'
    ],
    code: {
      javascript: `function findPages(arr, n, k) {
  if (k > n) return -1;
  const canAllocate = (cap) => {
    let students = 1, pages = 0;
    for (const p of arr) {
      if (pages + p > cap) { students++; pages = 0; }
      pages += p;
    }
    return students <= k;
  };
  let lo = Math.max(...arr), hi = arr.reduce((a, b) => a + b, 0);
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (canAllocate(mid)) hi = mid;
    else lo = mid + 1;
  }
  return lo;
}`,
      python: `def findPages(arr, n, k):
    if k > n:
        return -1
    def can_allocate(cap):
        students, pages = 1, 0
        for p in arr:
            if pages + p > cap:
                students += 1
                pages = 0
            pages += p
        return students <= k
    lo, hi = max(arr), sum(arr)
    while lo < hi:
        mid = (lo + hi) // 2
        if can_allocate(mid):
            hi = mid
        else:
            lo = mid + 1
    return lo`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'bs-18',
    slug: 'split-array-largest-sum',
    title: 'Split Array Largest Sum',
    pattern: 'binary-search',
    difficulty: 'Hard',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/split-array-largest-sum/',
    extra: [],
    summary:
      'Split a positive integer array into m CONTIGUOUS non-empty subarrays so that the largest subarray sum is minimized. Return that minimized largest sum.',
    asked: 'The minimum possible value of max(subarray sum) over all m-way contiguous splits.',
    why:
      'Same "minimize the maximum" family: binary search the allowed subarray sum S; feasibility = can we cut into ≤ m contiguous pieces each summing to ≤ S.',
    clues: ['m contiguous splits', 'minimize the largest sum', 'positive numbers'],
    brute: {
      idea: 'DP over split points (O(n·m²)) — possible but far slower.',
      time: 'O(n² · m)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'S in [max element, total]. Simulate cutting: accumulate until adding the next element would exceed S, then start a new piece. Feasible if pieces ≤ m. Binary search the smallest feasible S.',
      steps: [
        'lo = max(nums), hi = sum(nums).',
        'canSplit(S): pieces = 1, sum = 0; for each x: if sum + x > S → pieces++, sum = 0; sum += x.',
        'If pieces <= m: hi = mid else lo = mid + 1.',
        'Return lo.'
      ],
      time: 'O(n · log(total))',
      space: 'O(1)'
    },
    dry: [
      'nums = [7, 2, 5, 10, 8], m = 2',
      'lo = 10, hi = 32 → mid = 21: [7,2,5] (14), [10,8] (18) → 2 pieces ✓ → hi = 21',
      'mid = 15: [7,2] (9), [5] (5→ wait 9+5=14 ≤15 → [7,2,5]=14), [10] (10), [8] → 3 pieces ✗ → lo = 16',
      'mid = 18: [7,2,5]=14, [10,8]=18 → 2 ✓ → hi = 18',
      'mid = 17: [7,2,5]=14, [10,8]=18 >17 → [10],[8] → 3 ✗ → lo = 18',
      'Answer: 18'
    ],
    hints: [
      'If you could choose the "daily capacity" of each piece, what is the smallest capacity that still lets m pieces cover everything?',
      'Feasibility only gets easier as S grows — binary search it.',
      'Pieces ≤ m (not exactly m) — extra capacity can always be merged into a neighbor conceptually.'
    ],
    code: {
      javascript: `function splitArray(nums, m) {
  const canSplit = (S) => {
    let pieces = 1, sum = 0;
    for (const x of nums) {
      if (sum + x > S) { pieces++; sum = 0; }
      sum += x;
    }
    return pieces <= m;
  };
  let lo = Math.max(...nums), hi = nums.reduce((a, b) => a + b, 0);
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (canSplit(mid)) hi = mid;
    else lo = mid + 1;
  }
  return lo;
}`,
      python: `def splitArray(nums, m):
    def can_split(S):
        pieces, total = 1, 0
        for x in nums:
            if total + x > S:
                pieces += 1
                total = 0
            total += x
        return pieces <= m
    lo, hi = max(nums), sum(nums)
    while lo < hi:
        mid = (lo + hi) // 2
        if can_split(mid):
            hi = mid
        else:
            lo = mid + 1
    return lo`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'bs-19',
    slug: 'search-a-2d-matrix',
    title: 'Search a 2D Matrix',
    pattern: 'binary-search',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/search-a-2d-matrix/',
    extra: [],
    summary:
      'A matrix where rows increase left-to-right and the first column value of each row is greater than the last value of the previous row. Search a target in O(log m·n).',
    asked: 'Return true if the target is in the matrix.',
    why:
      'This matrix is a SORTED 1D array folded into a grid: index i maps to row i / cols, col i % cols — run ordinary binary search over the virtual 1D range.',
    clues: ['row-major sorted matrix', 'O(log(mn))', 'virtual 1D array'],
    brute: {
      idea: 'Scan every cell.',
      time: 'O(m·n)',
      space: 'O(1)'
    },
    optimal: {
      idea:
        'lo = 0, hi = m*n - 1 over the virtual flat index; mid maps to (row, col) = (mid / cols, mid % cols). Compare and halve as usual.',
      steps: [
        'rows = m, cols = n; lo = 0, hi = m*n - 1.',
        'While lo <= hi: mid = (lo + hi) >> 1.',
        'val = matrix[floor(mid / cols)][mid % cols].',
        'Standard binary search compare.',
        'Return false if exhausted.'
      ],
      time: 'O(log(m·n))',
      space: 'O(1)'
    },
    dry: [
      'matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target = 3',
      'flat: lo=0, hi=11 → mid=5 → (1,1)=11 > 3 → hi=4',
      'mid=2 → (0,2)=5 > 3 → hi=1',
      'mid=0 → (0,0)=1 < 3 → lo=1',
      'mid=1 → (0,1)=3 ✓',
      'Answer: true'
    ],
    hints: [
      'The matrix reads as one long sorted list — can you index into it arithmetically?',
      'row = mid / cols, col = mid % cols.',
      'Nothing about the 2D shape changes the binary search logic — only the addressing.'
    ],
    code: {
      javascript: `function searchMatrix(matrix, target) {
  const m = matrix.length, n = matrix[0].length;
  let lo = 0, hi = m * n - 1;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    const val = matrix[Math.floor(mid / n)][mid % n];
    if (val === target) return true;
    if (val < target) lo = mid + 1;
    else hi = mid - 1;
  }
  return false;
}`,
      python: `def searchMatrix(matrix, target):
    m, n = len(matrix), len(matrix[0])
    lo, hi = 0, m * n - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        val = matrix[mid // n][mid % n]
        if val == target:
            return True
        if val < target:
            lo = mid + 1
        else:
            hi = mid - 1
    return False`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'bs-20',
    slug: 'search-a-2d-matrix-ii',
    title: 'Search a 2D Matrix II',
    pattern: 'binary-search',
    difficulty: 'Hard',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/search-a-2d-matrix-ii/',
    extra: [],
    summary:
      'Rows increase left-to-right and columns increase top-to-bottom (but the first row\'s first element is not necessarily > the previous row\'s last). Search in O(m + n).',
    asked: 'Return true if the target exists.',
    why:
      'Start at the top-RIGHT corner: the only position where "going down increases, going left decreases" both make sense — each step eliminates a full row or column.',
    clues: ['row & column sorted', 'staircase search', 'O(m + n)'],
    brute: {
      idea: 'Scan all cells.',
      time: 'O(m·n)',
      space: 'O(1)'
    },
    optimal: {
      idea:
        'row = 0, col = n - 1 (top right). If cell === target, done. If cell < target, the target must be BELOW (row++). If cell > target, the target must be LEFT (col--).',
      steps: [
        'row = 0, col = last column.',
        'While row < m and col >= 0:',
        'val = matrix[row][col].',
        'If val === target: return true.',
        'If val < target: row++ (eliminate this row).',
        'Else: col-- (eliminate this column).',
        'Return false.'
      ],
      time: 'O(m + n)',
      space: 'O(1)'
    },
    dry: [
      'matrix = [[1, 4, 7, 11], [2, 5, 8, 12], [3, 6, 9, 16], [10, 13, 14, 17]], target = 5',
      'Start (0,3)=11 > 5 → col=2',
      '(0,2)=7 > 5 → col=1',
      '(0,1)=4 < 5 → row=1',
      '(1,1)=5 ✓',
      'Answer: true'
    ],
    hints: [
      'Which corner lets you eliminate a whole row OR column on every comparison?',
      'From top-right: down = bigger, left = smaller — both are "safe" directions.',
      'Each step moves strictly down or strictly left — at most m + n - 1 steps.'
    ],
    code: {
      javascript: `function searchMatrix(matrix, target) {
  const m = matrix.length, n = matrix[0].length;
  let row = 0, col = n - 1;
  while (row < m && col >= 0) {
    const val = matrix[row][col];
    if (val === target) return true;
    if (val < target) row++;
    else col--;
  }
  return false;
}`,
      python: `def searchMatrix(matrix, target):
    m, n = len(matrix), len(matrix[0])
    row, col = 0, n - 1
    while row < m and col >= 0:
        val = matrix[row][col]
        if val == target:
            return True
        if val < target:
            row += 1
        else:
            col -= 1
    return False`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'bs-21',
    slug: 'kth-smallest-in-sorted-matrix',
    title: 'Kth Smallest in Sorted Matrix',
    pattern: 'binary-search',
    difficulty: 'Hard',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/',
    extra: [],
    summary:
      'Given an n×n matrix sorted in rows and columns, find the kth smallest element.',
    asked: 'The kth smallest value in the whole matrix (1-indexed k).',
    why:
      'Binary search on the VALUE: for a candidate x, count how many elements are ≤ x using the staircase walk (O(n)). If the count < k, the answer is bigger.',
    clues: ['kth smallest', 'row & column sorted', 'count ≤ mid'],
    brute: {
      idea: 'Flatten and sort, pick index k-1.',
      time: 'O(n² log n)',
      space: 'O(n²)'
    },
    optimal: {
      idea:
        'lo = matrix[0][0], hi = matrix[n-1][n-1]. countLE(x): start bottom-left, walk: if cell ≤ x, the whole column above counts (row+1 elements), move right; else move up. Binary search the smallest x with countLE(x) ≥ k.',
      steps: [
        'lo = matrix[0][0], hi = matrix[n-1][n-1].',
        'countLE(mid): row = n-1, col = 0, count = 0; while row >= 0 && col < n: if matrix[row][col] <= mid → count += row + 1; col++ else row--.',
        'If countLE(mid) < k: lo = mid + 1 else hi = mid.',
        'Return lo.'
      ],
      time: 'O(n · log(max - min))',
      space: 'O(1)'
    },
    dry: [
      'matrix = [[1, 5, 9], [10, 11, 13], [12, 13, 15]], k = 8',
      'Values sorted: 1,5,9,10,11,12,13,13,15 → 8th = 13',
      'lo=1, hi=15: mid=8 → countLE: from (2,0)=12>8 up... count = 1 (just the 1) < 8 → lo=9',
      'mid=12: count = 1 (col0: 1,10,12) + 1 (col1: 5) = ... walk: (2,0)=12≤12 → count+=3, col=1; (2,1)=13>12 → row=1; (1,1)=11≤12 → count+=2 (total 5), col=2; (1,2)=13>12 → row=0; (0,2)=9≤12 → count+=1 (6), col=3 stop → 6 < 8 → lo=13',
      'mid=14: count = 3+... ≥ 8 → hi=14; mid=13: count ≥ 8 → hi=13',
      'Answer: 13'
    ],
    hints: [
      'Searching an index in a 2D matrix is hopeless — search the VALUE instead.',
      'The count of elements ≤ x can be done in O(n) with a bottom-left staircase.',
      'The answer is the SMALLEST x whose count reaches k.'
    ],
    code: {
      javascript: `function kthSmallest(matrix, k) {
  const n = matrix.length;
  const countLE = (x) => {
    let count = 0, row = n - 1, col = 0;
    while (row >= 0 && col < n) {
      if (matrix[row][col] <= x) {
        count += row + 1;
        col++;
      } else {
        row--;
      }
    }
    return count;
  };
  let lo = matrix[0][0], hi = matrix[n - 1][n - 1];
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (countLE(mid) < k) lo = mid + 1;
    else hi = mid;
  }
  return lo;
}`,
      python: `def kthSmallest(matrix, k):
    n = len(matrix)
    def count_le(x):
        count = 0
        row, col = n - 1, 0
        while row >= 0 and col < n:
            if matrix[row][col] <= x:
                count += row + 1
                col += 1
            else:
                row -= 1
        return count
    lo, hi = matrix[0][0], matrix[n - 1][n - 1]
    while lo < hi:
        mid = (lo + hi) // 2
        if count_le(mid) < k:
            lo = mid + 1
        else:
            hi = mid
    return lo`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'bs-22',
    slug: 'kth-smallest-in-multiplication-table',
    title: 'Kth Smallest in Multiplication Table',
    pattern: 'binary-search',
    difficulty: 'Hard',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/',
    extra: [],
    summary:
      'The m×n multiplication table (cell (i,j) = i·j). Find the kth smallest number in it.',
    asked: 'The kth smallest product among all i·j for 1 ≤ i ≤ m, 1 ≤ j ≤ n.',
    why:
      'No explicit matrix — but "count products ≤ x" is easy: row i contributes min(floor(x / i), n) products. Binary search x in [1, m·n].',
    clues: ['multiplication table', 'kth smallest', 'implicit matrix'],
    brute: {
      idea: 'Build the full table, sort, index k-1.',
      time: 'O(mn log(mn))',
      space: 'O(mn)'
    },
    optimal: {
      idea:
        'countLE(x) = Σ over rows i of min(floor(x / i), n). Binary search the smallest x with countLE(x) ≥ k.',
      steps: [
        'lo = 1, hi = m * n.',
        'countLE(mid): for i in 1..m: count += min(floor(mid / i), n).',
        'If countLE(mid) < k: lo = mid + 1 else hi = mid.',
        'Return lo.'
      ],
      time: 'O(m · log(mn))',
      space: 'O(1)'
    },
    dry: [
      'm = 2, n = 3, table: [1,2,3 / 2,4,6], k = 6',
      'Sorted values: 1,2,2,3,4,6 → kth = 6',
      'lo=1, hi=6: mid=3 → countLE = row1: min(3,3)=3; row2: min(1,3)=1 → 4 < 6 → lo=4',
      'mid=5: row1: 3, row2: min(2,3)=2 → 5 < 6 → lo=5',
      'mid=5 same... lo=5, hi=6 → mid=5 (using floor) → 5<6 → lo=6',
      'Answer: 6'
    ],
    hints: [
      'The table is never materialized — can you COUNT how many entries are ≤ x directly?',
      'In row i, the values are i, 2i, 3i, ... — how many of them are ≤ x?',
      'Again: the answer is the smallest x with count ≥ k.'
    ],
    code: {
      javascript: `function findKthNumber(m, n, k) {
  const countLE = (x) => {
    let count = 0;
    for (let i = 1; i <= m; i++) {
      count += Math.min(Math.floor(x / i), n);
    }
    return count;
  };
  let lo = 1, hi = m * n;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (countLE(mid) < k) lo = mid + 1;
    else hi = mid;
  }
  return lo;
}`,
      python: `def findKthNumber(m, n, k):
    def count_le(x):
        return sum(min(x // i, n) for i in range(1, m + 1))
    lo, hi = 1, m * n
    while lo < hi:
        mid = (lo + hi) // 2
        if count_le(mid) < k:
            lo = mid + 1
        else:
            hi = mid
    return lo`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'bs-23',
    slug: 'median-of-2-sorted-arrays',
    title: 'Median of 2 Sorted Arrays',
    pattern: 'binary-search',
    difficulty: 'Hard',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/median-of-two-sorted-arrays/',
    extra: [],
    summary:
      'Given two sorted arrays, find the median of the combined set in O(log(min(m, n))).',
    asked:
      'The median (average of the two middle values for even total length) of the union, without merging.',
    why:
      'Binary search a PARTITION of the shorter array: choose cut1 in A and cut2 = half - cut1 in B such that everything left ≤ everything right. The four boundary values give the median.',
    clues: ['median of two sorted arrays', 'O(log min)', 'partition cut'],
    brute: {
      idea: 'Merge both arrays and read the middle.',
      time: 'O(m + n)',
      space: 'O(m + n)'
    },
    optimal: {
      idea:
        'Ensure A is the shorter. half = (m + n + 1) / 2 (left side size). Binary search cut1 in [0, m]; cut2 = half - cut1. Valid partition when A[cut1-1] ≤ B[cut2] and B[cut2-1] ≤ A[cut1]. Odd total: median = max(left maxes); even: (max left + min right) / 2.',
      steps: [
        'If A longer than B, swap.',
        'half = (m + n + 1) >> 1.',
        'Binary search cut1 in [0, m]; cut2 = half - cut1.',
        'l1 = A[cut1-1] (or -∞), r1 = A[cut1] (or +∞); l2, r2 likewise for B.',
        'If l1 <= r2 && l2 <= r1: valid → compute median.',
        'Else if l1 > r2: cut1 too big → hi = cut1 - 1. Else lo = cut1 + 1.'
      ],
      time: 'O(log(min(m, n)))',
      space: 'O(1)'
    },
    dry: [
      'A = [1, 3], B = [2] (m=2, n=1, total 3, half = 2)',
      'cut1 = 1 → cut2 = 1: l1 = A[0] = 1, r1 = A[1] = 3; l2 = B[0] = 2, r2 = +∞',
      'Check: 1 ≤ ∞ ✓ and 2 ≤ 3 ✓ → valid',
      'Odd total → median = max(l1, l2) = max(1, 2) = 2 ✓',
      'Even example A = [1,2], B = [3,4]: half = 2; cut1 = 1 → l1=1, r1=2; l2=3, r2=4 → median = (max(1,3) + min(2,4))/2 = (3+2)/2 = 2.5 ✓'
    ],
    hints: [
      'The left half of the merged array is exactly "half" elements taken from the fronts of both arrays.',
      'Choosing cut1 determines cut2 — that is the ONE degree of freedom you binary search.',
      'Invalid partition tells you which direction: left side too big → move cut left.'
    ],
    code: {
      javascript: `function findMedianSortedArrays(nums1, nums2) {
  let A = nums1, B = nums2;
  if (A.length > B.length) [A, B] = [B, A];
  const m = A.length, n = B.length;
  const half = (m + n + 1) >> 1;
  let lo = 0, hi = m;
  while (true) {
    const cut1 = (lo + hi) >> 1;
    const cut2 = half - cut1;
    const l1 = cut1 === 0 ? -Infinity : A[cut1 - 1];
    const r1 = cut1 === m ? Infinity : A[cut1];
    const l2 = cut2 === 0 ? -Infinity : B[cut2 - 1];
    const r2 = cut2 === n ? Infinity : B[cut2];
    if (l1 <= r2 && l2 <= r1) {
      if ((m + n) % 2 === 1) return Math.max(l1, l2);
      return (Math.max(l1, l2) + Math.min(r1, r2)) / 2;
    } else if (l1 > r2) hi = cut1 - 1;
    else lo = cut1 + 1;
  }
}`,
      python: `def findMedianSortedArrays(nums1, nums2):
    A, B = nums1, nums2
    if len(A) > len(B):
        A, B = B, A
    m, n = len(A), len(B)
    half = (m + n + 1) // 2
    lo, hi = 0, m
    while True:
        cut1 = (lo + hi) // 2
        cut2 = half - cut1
        l1 = A[cut1 - 1] if cut1 > 0 else float('-inf')
        r1 = A[cut1] if cut1 < m else float('inf')
        l2 = B[cut2 - 1] if cut2 > 0 else float('-inf')
        r2 = B[cut2] if cut2 < n else float('inf')
        if l1 <= r2 and l2 <= r1:
            if (m + n) % 2 == 1:
                return max(l1, l2)
            return (max(l1, l2) + min(r1, r2)) / 2
        elif l1 > r2:
            hi = cut1 - 1
        else:
            lo = cut1 + 1`,
      java: '',
      cpp: ''
    }
  }
];
