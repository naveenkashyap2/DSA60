// Pattern: Greedy — 4 questions (exact supplied list)
export default [
  {
    id: 'gd-01',
    slug: 'jump-game',
    title: 'Jump Game',
    pattern: 'greedy',
    difficulty: 'Easy',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/jump-game/',
    extra: [],
    summary:
      'Each element is the maximum jump length from that position. Starting at index 0, can you reach the last index?',
    asked: 'True iff the last index is reachable.',
    why:
      'Track the farthest index reachable so far. If at position i the farthest point is BEHIND i, the path is broken (unreachable). Otherwise extend farthest with i + nums[i]. The greedy insight: you do not need to know WHICH path — only the reachable frontier, and that frontier never shrinks.',
    clues: ['reach the end', 'maximum jumps', 'reachable frontier', 'monotonic boundary'],
    brute: {
      idea: 'BFS/DFS over reachable positions (works, O(n) with a visited set — same engine, less sharp).',
      time: 'O(n)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'farthest = 0. For i in 0..n-1: if i > farthest → false (gap). farthest = max(farthest, i + nums[i]). If farthest >= n-1 → true early. Finish → true.',
      steps: [
        'farthest = 0 (the reachable boundary).',
        'Walk i left to right — but only positions inside the boundary are real.',
        'If i exceeds the boundary: the array is split → return false.',
        'Otherwise the boundary may grow: i + nums[i].',
        'Reaching (or passing) the last index → true.'
      ],
      time: 'O(n)',
      space: 'O(1)'
    },
    dry: [
      'nums = [2, 3, 1, 1, 4]',
      'i=0: boundary 2; i=1: boundary max(2, 1+3=4) = 4 ≥ 4 (last) → true',
      'Answer: true (0 → 1 → 4)',
      'nums = [3, 2, 1, 0, 4]: i=0: boundary 3; i=1: 3; i=2: 3; i=3: boundary 3 (3+0) → i=4 > 3 → false',
      'Answer: false (stuck at the 0)'
    ],
    hints: [
      'Instead of simulating every jump, ask: "what is the farthest index I can be standing on, considering all positions so far?"',
      'The boundary only GROWS (monotonic) — that is the greedy contract.',
      'A gap appears exactly when you are asked to stand on an index beyond the boundary.'
    ],
    code: {
      javascript: `function canJump(nums) {
  let farthest = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > farthest) return false;
    farthest = Math.max(farthest, i + nums[i]);
    if (farthest >= nums.length - 1) return true;
  }
  return true;
}`,
      python: `def canJump(nums):
    farthest = 0
    for i, x in enumerate(nums):
        if i > farthest:
            return False
        farthest = max(farthest, i + x)
        if farthest >= len(nums) - 1:
            return True
    return True`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'gd-02',
    slug: 'jump-game-ii',
    title: 'Jump Game II',
    pattern: 'greedy',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/jump-game-ii/',
    extra: [],
    summary:
      'Same setup as Jump Game, but every position can reach the last. Return the MINIMUM number of jumps to reach the last index.',
    asked: 'Fewest jumps from index 0 to index n-1.',
    why:
      'Think in layers: one jump from the current "layer" of reachable indices takes you to the next layer. Greedy: within the current layer (up to curEnd), compute the farthest you can go; when the layer is exhausted, that counts as ONE jump and the new layer becomes the farthest. Exactly BFS levels — without a queue.',
    clues: ['minimum jumps', 'layers / levels', 'curEnd boundary', 'BFS without a queue'],
    brute: {
      idea: 'BFS with a queue, level by level (correct, O(n)).',
      time: 'O(n)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'jumps = 0, curEnd = 0, farthest = 0. For i in 0..n-2: farthest = max(farthest, i + nums[i]); if i === curEnd: jumps++, curEnd = farthest (a new layer begins). Answer: jumps.',
      steps: [
        'curEnd = the last index of the CURRENT jump layer (starts at 0).',
        'Scan i; update farthest with i + nums[i].',
        'When i reaches curEnd: the layer is done → one more jump; the next layer ends at farthest.',
        'Stop at n-2 (the last index is a landing, not a launch).',
        'Answer: jumps.'
      ],
      time: 'O(n)',
      space: 'O(1)'
    },
    dry: [
      'nums = [2, 3, 1, 1, 4]',
      'i=0: farthest 2; i === curEnd(0) → jumps 1, curEnd 2',
      'i=1: farthest 4; i=2: i === curEnd(2) → jumps 2, curEnd 4',
      'stop at n-2 = 3 (i=3: farthest stays 4)',
      'Answer: 2 (0 → 1 → 4)',
      'nums = [1, 1, 1, 1]: layers {0} → {1} → {2} → {3}: jumps = 3'
    ],
    hints: [
      'All indices reachable in the same number of jumps form a LAYER — count the layers, not the paths.',
      'The layer boundary (curEnd) and the best reach (farthest) are two different numbers — when do they equalize? (at a jump).',
      'This is BFS levels compressed: no queue needed because indices are naturally ordered.'
    ],
    code: {
      javascript: `function jump(nums) {
  let jumps = 0, curEnd = 0, farthest = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);
    if (i === curEnd) {
      jumps++;
      curEnd = farthest;
    }
  }
  return jumps;
}`,
      python: `def jump(nums):
    jumps = cur_end = farthest = 0
    for i in range(len(nums) - 1):
        farthest = max(farthest, i + nums[i])
        if i == cur_end:
            jumps += 1
            cur_end = farthest
    return jumps`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'gd-03',
    slug: 'non-overlapping-intervals',
    title: 'Non-overlapping Intervals',
    pattern: 'greedy',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/non-overlapping-intervals/',
    extra: [],
    summary:
      'Given an array of intervals, return the minimum number of intervals to REMOVE so the rest are all non-overlapping (touching edges count as non-overlapping).',
    asked: 'Fewest removals = total − maximum number of non-overlapping intervals you can keep.',
    why:
      'The classic interval scheduling greedy: to keep as many as possible, always keep the interval that ENDS earliest (it leaves the most room for everything after). Sort by end; walk the list; an interval overlapping the kept one must go (count++), otherwise keep it (advance the end boundary).',
    clues: ['minimum removals', 'interval scheduling', 'earliest end wins', 'keep vs drop'],
    brute: {
      idea: 'Try all subsets (2ⁿ) to find the largest non-overlapping set.',
      time: 'O(2ⁿ · n)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'Sort by end. keep = first interval (prevEnd = its end). For each next interval: if start < prevEnd → it overlaps → remove it (count++); else keep it (prevEnd = its end). Answer: count.',
      steps: [
        'Sort intervals by END (not start).',
        'prevEnd = intervals[0][1]; count = 0.',
        'For each [s, e] from index 1: if s < prevEnd: count++ (must remove); else prevEnd = e (keep).',
        'Why earliest-end is optimal: any other choice ends no earlier, so it can never allow more future intervals.',
        'Answer: count (removals).'
      ],
      time: 'O(n log n) sort + O(n)',
      space: 'O(1) beyond the sort'
    },
    dry: [
      'intervals = [1,2], [2,3], [3,4], [1,3]',
      'sorted by end: [1,2], [2,3], [1,3], [3,4]',
      'keep [1,2] (prevEnd 2); [2,3]: 2 >= 2 → keep (prevEnd 3); [1,3]: 1 < 3 → remove (count 1); [3,4]: 3 >= 3 → keep',
      'Answer: 1 (remove [1,3])',
      'intervals = [1,2], [2,3], [3,4], [1,3] → 1; [[1,2],[1,2,]... [[1,2],[2,3]] → 0'
    ],
    hints: [
      'Which interval should you KEEP when two compete? (the one that ends earliest — it blocks the least future space)',
      'After keeping an interval, the next kept one must start at or after the kept end — that is the whole loop condition.',
      '"Minimum removals" = "total minus maximum kept" — the greedy maximizes the kept set.'
    ],
    code: {
      javascript: `function eraseOverlapIntervals(intervals) {
  if (intervals.length === 0) return 0;
  intervals.sort((a, b) => a[1] - b[1]); // by END
  let count = 0, prevEnd = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < prevEnd) {
      count++; // overlaps the kept one → remove
    } else {
      prevEnd = intervals[i][1]; // keep
    }
  }
  return count;
}`,
      python: `def eraseOverlapIntervals(intervals):
    if not intervals:
        return 0
    intervals.sort(key=lambda x: x[1])  # by END
    count = 0
    prev_end = intervals[0][1]
    for i in range(1, len(intervals)):
        if intervals[i][0] < prev_end:
            count += 1
        else:
            prev_end = intervals[i][1]
    return count`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'gd-04',
    slug: 'merge-intervals-greedy',
    title: 'Merge Intervals (Greedy View)',
    pattern: 'greedy',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/merge-intervals/',
    extra: [],
    summary:
      'Given an array of intervals, merge all overlapping intervals and return the resulting set. (The Merge Intervals pattern page covers the sweep — here it is framed as the greedy anchor: sorting by start makes "merge or not" a one-pass local decision.)',
    asked: 'A partition into maximal non-overlapping intervals covering the same points.',
    why:
      'Greedy anchor of the interval family: after sorting by start, at any moment only the LAST output interval can overlap the next input (everything earlier ends before it starts). So the decision is always local: overlap → extend the last; disjoint → start a new one. No look-ahead, no backtracking.',
    clues: ['merge overlaps', 'sort by start', 'only the last output matters', 'one pass'],
    brute: {
      idea: 'Check every pair and union (O(n²) passes until stable).',
      time: 'O(n² log n)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'Sort by start. Walk: if the next start ≤ current end → extend current end to max(both) (merge); else push current as done and start fresh. Push the final one.',
      steps: [
        'If empty: return [].',
        'Sort by start ascending (tie-break by end).',
        'cur = first interval.',
        'For each [s, e]: if s <= cur[1]: cur[1] = max(cur[1], e); else: push cur; cur = [s, e].',
        'Push cur; return the result.',
        'Why it is greedy: sorted starts make future intervals only "more to the right", so a closed interval can never be re-merged later.'
      ],
      time: 'O(n log n)',
      space: 'O(n)'
    },
    dry: [
      'intervals = [1,3], [2,6], [8,10], [15,18]',
      'sorted (already): [1,3], [2,6], [8,10], [15,18]',
      'cur [1,3]; [2,6]: 2 ≤ 3 → cur [1,6]; [8,10]: 8 > 6 → push [1,6], cur [8,10]; [15,18]: 15 > 10 → push [8,10], cur [15,18]; push [15,18]',
      'Answer: [[1,6], [8,10], [15,18]]'
    ],
    hints: [
      'After sorting by start, which output interval can the next input possibly overlap? (only the LAST one)',
      'Merging can only GROW the end of the current interval — never move its start.',
      'This one-pass local decision is the greedy contract: no future interval can reopen a past decision.'
    ],
    code: {
      javascript: `function merge(intervals) {
  if (intervals.length === 0) return [];
  intervals.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const res = [];
  let cur = [...intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const [s, e] = intervals[i];
    if (s <= cur[1]) {
      cur[1] = Math.max(cur[1], e); // merge
    } else {
      res.push(cur); // close it
      cur = [s, e];
    }
  }
  res.push(cur);
  return res;
}`,
      python: `def merge(intervals):
    if not intervals:
        return []
    intervals.sort(key=lambda x: (x[0], x[1]))
    res = []
    cur = list(intervals[0])
    for s, e in intervals[1:]:
        if s <= cur[1]:
            cur[1] = max(cur[1], e)
        else:
            res.append(cur)
            cur = [s, e]
    res.append(cur)
    return res`,
      java: '',
      cpp: ''
    }
  }
];
