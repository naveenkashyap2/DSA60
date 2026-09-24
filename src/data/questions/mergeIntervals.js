// Pattern: Merge Intervals — 7 questions (exact supplied list)
export default [
  {
    id: 'mi-01',
    slug: 'merge-intervals',
    title: 'Merge Intervals',
    pattern: 'merge-intervals',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/merge-intervals/',
    extra: [],
    summary:
      'Given an array of intervals, merge all overlapping intervals and return the non-overlapping result.',
    asked:
      'Return a list of intervals where any overlapping (or touching) intervals are merged into one [min start, max end].',
    why:
      'After sorting by start, an interval can only overlap with the LAST interval kept — a single sweep with a result list does the job.',
    clues: ['intervals', 'overlapping merge', 'non-overlapping result'],
    brute: {
      idea: 'For every pair, check overlap and merge repeatedly until stable.',
      time: 'O(n² · n) worst',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'Sort by start. Walk: if the current start ≤ last kept end, extend that end to max(end, current end); otherwise push a new interval.',
      steps: [
        'Sort intervals by start (then by end).',
        'res = [first interval].',
        'For each next interval iv:',
        'If iv.start <= last(res).end: last(res).end = max(last(res).end, iv.end).',
        'Else push iv.',
        'Return res.'
      ],
      time: 'O(n log n)',
      space: 'O(1) extra (+ output)'
    },
    dry: [
      'Input: [ [1,3], [2,6], [8,10], [15,18] ]',
      'Sorted (already): start with [1,3]',
      '[2,6]: 2 ≤ 3 → merge → [1,6]',
      '[8,10]: 8 > 6 → push',
      '[15,18]: 15 > 10 → push',
      'Answer: [[1,6], [8,10], [15,18]]'
    ],
    hints: [
      'What ordering makes "only the last interval matters" true?',
      'Overlap test: current.start <= last.end (touching counts).',
      'When merging, only the END can grow — the start is already minimal.'
    ],
    code: {
      javascript: `function merge(intervals) {
  intervals.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const res = [intervals[0].slice()];
  for (let i = 1; i < intervals.length; i++) {
    const last = res[res.length - 1];
    if (intervals[i][0] <= last[1]) {
      last[1] = Math.max(last[1], intervals[i][1]);
    } else {
      res.push(intervals[i].slice());
    }
  }
  return res;
}`,
      python: `def merge(intervals):
    intervals.sort(key=lambda iv: (iv[0], iv[1]))
    res = [intervals[0][:]]
    for s, e in intervals[1:]:
        last = res[-1]
        if s <= last[1]:
            last[1] = max(last[1], e)
        else:
            res.append([s, e])
    return res`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'mi-02',
    slug: 'insert-interval',
    title: 'Insert Interval',
    pattern: 'merge-intervals',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/insert-interval/',
    extra: [],
    summary:
      'Insert a new interval into a list of sorted, non-overlapping intervals, merging overlaps, and return the result.',
    asked:
      'Return the sorted non-overlapping list after inserting (and merging around) the new interval.',
    why:
      'The sorted structure splits into three zones: before the new interval, the overlapping middle (merge into one), and after. One pass, three phases.',
    clues: ['insert into sorted intervals', 'merge overlaps', 'non-overlapping input'],
    brute: {
      idea: 'Push the new interval and run the full merge algorithm.',
      time: 'O(n log n)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'Phase 1: copy all intervals ending before the new one starts. Phase 2: absorb every interval overlapping the new one (expand its start/end). Phase 3: copy the rest.',
      steps: [
        'res = [].',
        'Copy intervals with end < new.start into res.',
        'While intervals have start <= new.end: new = [min(starts), max(ends)]; advance.',
        'Push the merged new interval.',
        'Copy the remaining intervals.',
        'Return res.'
      ],
      time: 'O(n)',
      space: 'O(1) extra (+ output)'
    },
    dry: [
      'Input: [[1,3],[6,9]], new = [2,5]',
      'Phase 1: none end before 2',
      'Phase 2: [1,3] overlaps (1 ≤ 5) → new=[1,5]; [6,9]: 6 > 5 stop',
      'Push [1,5]; Phase 3: copy [6,9]',
      'Answer: [[1,5], [6,9]]'
    ],
    hints: [
      'Which intervals can NEVER overlap the new one? (those ending before it starts)',
      'The merge zone keeps absorbing while interval.start <= new.end.',
      'Two pointers / one index walks the input exactly once.'
    ],
    code: {
      javascript: `function insert(intervals, newInterval) {
  const res = [];
  let i = 0, n = intervals.length;
  while (i < n && intervals[i][1] < newInterval[0]) res.push(intervals[i++]);
  while (i < n && intervals[i][0] <= newInterval[1]) {
    newInterval = [
      Math.min(newInterval[0], intervals[i][0]),
      Math.max(newInterval[1], intervals[i][1])
    ];
    i++;
  }
  res.push(newInterval);
  while (i < n) res.push(intervals[i++]);
  return res;
}`,
      python: `def insert(intervals, newInterval):
    res = []
    i, n = 0, len(intervals)
    while i < n and intervals[i][1] < newInterval[0]:
        res.append(intervals[i]); i += 1
    while i < n and intervals[i][0] <= newInterval[1]:
        newInterval = [min(newInterval[0], intervals[i][0]),
                       max(newInterval[1], intervals[i][1])]
        i += 1
    res.append(newInterval)
    while i < n:
        res.append(intervals[i]); i += 1
    return res`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'mi-03',
    slug: 'intervals-intersection',
    title: 'Intervals Intersection',
    pattern: 'merge-intervals',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/interval-list-intersections/',
    extra: [],
    summary:
      'Given two lists of sorted, non-overlapping intervals, return the intersection of the two lists.',
    asked:
      'Return all intervals where the two lists overlap (intersection in the set sense), sorted and non-overlapping.',
    why:
      'Both lists sorted → classic two-pointer sweep: advance the pointer whose interval ends first; the intersection is [max starts, min ends] when non-empty.',
    clues: ['two sorted interval lists', 'intersection', 'common overlap'],
    brute: {
      idea: 'For each interval in list A, scan list B for overlaps.',
      time: 'O(n·m)',
      space: 'O(1)'
    },
    optimal: {
      idea:
        'i, j walk both lists. Intersection of A[i] and B[j] is [max(a.s, b.s), min(a.e, b.e)] — record it if start ≤ end. Then advance the list whose interval ends earlier.',
      steps: [
        'i = 0, j = 0.',
        'While both lists have intervals:',
        'lo = max(a[i].s, b[j].s); hi = min(a[i].e, b[j].e).',
        'If lo <= hi, push [lo, hi].',
        'If a[i].e < b[j].e → i++, else j++.',
        'Return the result.'
      ],
      time: 'O(n + m)',
      space: 'O(1) extra'
    },
    dry: [
      'A = [[1,3],[5,9]], B = [[0,5],[6,10],[11,15]]',
      'A[0]=[1,3], B[0]=[0,5] → [max(1,0), min(3,5)] = [1,3] ✓; A[0] ends first → i++',
      'A[1]=[5,9], B[0]=[0,5] → [5,5] ✓; A[1].e=9 > 5 → j++',
      'A[1]=[5,9], B[1]=[6,10] → [6,9] ✓; A[1] ends first → i++',
      'Answer: [[1,3], [5,5], [6,9]]'
    ],
    hints: [
      'Two sorted lists → think two pointers, not nested loops.',
      'Intersection start = max of starts; intersection end = min of ends.',
      'Whose pointer advances? The one whose interval ends FIRST.'
    ],
    code: {
      javascript: `function intervalIntersection(firstList, secondList) {
  const res = [];
  let i = 0, j = 0;
  while (i < firstList.length && j < secondList.length) {
    const a = firstList[i], b = secondList[j];
    const lo = Math.max(a[0], b[0]);
    const hi = Math.min(a[1], b[1]);
    if (lo <= hi) res.push([lo, hi]);
    if (a[1] < b[1]) i++;
    else j++;
  }
  return res;
}`,
      python: `def intervalIntersection(firstList, secondList):
    res = []
    i = j = 0
    while i < len(firstList) and j < len(secondList):
        a, b = firstList[i], secondList[j]
        lo, hi = max(a[0], b[0]), min(a[1], b[1])
        if lo <= hi:
            res.append([lo, hi])
        if a[1] < b[1]:
            i += 1
        else:
            j += 1
    return res`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'mi-04',
    slug: 'overlapping-intervals',
    title: 'Overlapping Intervals',
    pattern: 'merge-intervals',
    difficulty: 'Easy',
    platform: 'GeeksforGeeks',
    url: 'https://www.geeksforgeeks.org/check-if-any-two-intervals-overlap-among-a-given-set-of-intervals/',
    extra: [],
    summary:
      'Given a set of intervals, check if any two intervals overlap.',
    asked: 'Return true if at least one pair of intervals overlaps, else false.',
    why:
      'Sorting by start reduces the check to adjacent pairs: if ANY overlap exists, some adjacent sorted pair overlaps.',
    clues: ['any two overlap', 'check existence', 'intervals'],
    brute: {
      idea: 'Every pair, check the overlap condition.',
      time: 'O(n²)',
      space: 'O(1)'
    },
    optimal: {
      idea:
        'Sort by start. If for any adjacent pair the next start ≤ previous end, they overlap.',
      steps: [
        'Sort intervals by start.',
        'For i from 1 to n-1:',
        'If intervals[i].start <= intervals[i-1].end: return true.',
        'Return false.'
      ],
      time: 'O(n log n)',
      space: 'O(1) extra'
    },
    dry: [
      'Input: [[5,7], [1,4], [9,11], [2,6]]',
      'Sorted: [[1,4], [2,6], [5,7], [9,11]]',
      '[2,6]: 2 ≤ 4 → overlap!',
      'Answer: true',
      'Counter: [[1,2], [3,4], [5,6]] → no adjacent start ≤ prev end → false'
    ],
    hints: [
      'Why are non-adjacent overlaps impossible if no adjacent pair overlaps?',
      'Overlap condition: a.start <= b.end (with a before b).',
      'One sort + one scan.'
    ],
    code: {
      javascript: `function doIntervalsOverlap(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= intervals[i - 1][1]) return true;
  }
  return false;
}`,
      python: `def doIntervalsOverlap(intervals):
    intervals.sort(key=lambda iv: iv[0])
    for i in range(1, len(intervals)):
        if intervals[i][0] <= intervals[i - 1][1]:
            return True
    return False`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'mi-05',
    slug: 'minimum-meeting-rooms',
    title: 'Minimum Meeting Rooms',
    pattern: 'merge-intervals',
    difficulty: 'Hard',
    platform: 'GeeksforGeeks',
    url: 'https://www.geeksforgeeks.org/problems/attend-all-meetings-ii/1',
    extra: [],
    summary:
      'Given meeting start and end times, find the minimum number of rooms (platforms) so that no two meetings share a room.',
    asked: 'Return the maximum number of meetings happening simultaneously.',
    why:
      'The answer is the maximum overlap. A sweep line over (time, +1/-1) events computes the running overlap in one sorted pass — or a min-heap of end times works too.',
    clues: ['minimum rooms / platforms', 'simultaneous meetings', 'max overlap'],
    brute: {
      idea: 'For every point in time, count active meetings; take the max. Or sort by start and check all previous ends.',
      time: 'O(n²)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'Create events: (start, +1) and (end, -1). Sort by time, with END before START at the same time (a room frees up exactly when the next starts). Sweep and track the maximum running count.',
      steps: [
        'events = all (time, delta), delta +1 for start, -1 for end.',
        'Sort by time; on ties, -1 before +1.',
        'cur = 0, ans = 0.',
        'For each event: cur += delta; ans = max(ans, cur).',
        'Return ans.'
      ],
      time: 'O(n log n)',
      space: 'O(n)'
    },
    dry: [
      'Meetings: [[1,10], [2,7], [3,19], [5,6]]',
      'Events: 1:+1, 2:+1, 3:+1, 5:+1, 6:-1, 7:-1, 10:-1, 19:-1',
      'Sweep: 1 → 2 → 3 → 4 (peak 4 at time 5-6) → 3 → 2 → 1 → 0',
      'Answer: 4? retrace: at t=5 cur = 4; at t=6 (end) cur = 3 → peak = 4? meetings 1-10, 2-7, 3-19, 5-6 all active at t=5.5 → yes 4',
      'Answer: 4'
    ],
    hints: [
      'Rooms needed = maximum simultaneous meetings — a max-overlap question.',
      'Turn each meeting into two time events: one arrival, one departure.',
      'At equal times, process departures first (the room is reusable at the exact end time).'
    ],
    code: {
      javascript: `function minPlatforms(intervals) {
  const events = [];
  for (const [s, e] of intervals) {
    events.push([s, 1]);
    events.push([e, -1]);
  }
  events.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  let cur = 0, ans = 0;
  for (const [, d] of events) {
    cur += d;
    ans = Math.max(ans, cur);
  }
  return ans;
}`,
      python: `def minPlatforms(intervals):
    events = []
    for s, e in intervals:
        events.append((s, 1))
        events.append((e, -1))
    events.sort(key=lambda ev: (ev[0], ev[1]))
    cur = ans = 0
    for _, d in events:
        cur += d
        ans = max(ans, cur)
    return ans`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'mi-06',
    slug: 'maximum-cpu-load',
    title: 'Maximum CPU Load',
    pattern: 'merge-intervals',
    difficulty: 'Hard',
    platform: 'GeeksforGeeks',
    url: 'https://www.geeksforgeeks.org/maximum-cpu-load-from-the-given-list-of-jobs/',
    extra: [],
    summary:
      'Given jobs with start, end and weight (load units), find the maximum total CPU load at any instant.',
    asked: 'Return the peak of the sum of weights of all jobs active at the same time.',
    why:
      'Generalized max-overlap: each job contributes its weight at its start and removes it at its end. Same sweep-line events, with signed weights.',
    clues: ['maximum load', 'start/end/weight jobs', 'peak concurrency'],
    brute: {
      idea: 'For every job, sum weights of all jobs overlapping it.',
      time: 'O(n²)',
      space: 'O(1)'
    },
    optimal: {
      idea:
        'Events (start, +w) and (end, -w), sorted by time (ends before starts on ties). Sweep; the peak running sum is the answer.',
      steps: [
        'Build events: (start, +weight), (end, -weight).',
        'Sort by time; on ties, negative delta first.',
        'cur = 0, ans = 0.',
        'For each event: cur += delta; ans = max(ans, cur).',
        'Return ans.'
      ],
      time: 'O(n log n)',
      space: 'O(n)'
    },
    dry: [
      'Jobs: [[1,4,3], [2,5,4], [5,6,4]]',
      'Events: 1:+3, 2:+4, 4:-3, 5:-4, 5:+4, 6:-4',
      'Sort tie at 5: -4 before +4 → sweep: 3 → 7 → 4 → 0 → 4 → 0',
      'Answer: 7 (between t=2 and t=4, both first jobs active: 3+4)'
    ],
    hints: [
      'Same engine as meeting rooms — but events carry weights, not just 1.',
      'Ends before starts at the same timestamp (a job finishing at t frees capacity at t).',
      'Track the running sum, not the count.'
    ],
    code: {
      javascript: `function findMaxLoad(jobs) {
  const events = [];
  for (const [s, e, w] of jobs) {
    events.push([s, w]);
    events.push([e, -w]);
  }
  events.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  let cur = 0, ans = 0;
  for (const [, d] of events) {
    cur += d;
    ans = Math.max(ans, cur);
  }
  return ans;
}`,
      python: `def findMaxLoad(jobs):
    events = []
    for s, e, w in jobs:
        events.append((s, w))
        events.append((e, -w))
    events.sort(key=lambda ev: (ev[0], ev[1]))
    cur = ans = 0
    for _, d in events:
        cur += d
        ans = max(ans, cur)
    return ans`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'mi-07',
    slug: 'employee-free-time',
    title: 'Employee Free Time',
    pattern: 'merge-intervals',
    difficulty: 'Hard',
    platform: 'CoderTrain',
    url: 'https://www.codertrain.co/employee-free-time',
    extra: [],
    summary:
      'Given the busy intervals of a group of employees (as a list of lists), return the common free time slots when everyone is free.',
    asked:
      'Return the list of [start, end] intervals where NO employee is busy. Input is sorted per employee but not globally.',
    why:
      'Flatten everyone\'s busy intervals, merge them into one global busy schedule, and the gaps between merged intervals are exactly the common free slots.',
    clues: ['common free time', 'group of employees', 'gaps in busy schedule'],
    brute: {
      idea: 'For every candidate time, check all employees (timeline discretization).',
      time: 'O(n·m)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'Collect all busy intervals from all employees, sort by start, merge overlaps into a single merged list, then output the gaps between consecutive merged intervals.',
      steps: [
        'all = concat of every employee\'s intervals.',
        'Sort all by start.',
        'Merge: extend the last kept interval on overlap, else start a new one.',
        'For each adjacent merged pair, if next.start > last.end, the gap [last.end, next.start] is free.',
        'Return the gaps.'
      ],
      time: 'O(N log N)',
      space: 'O(N)'
    },
    dry: [
      'Emp1: [[9,10]], Emp2: [[10,12]], Emp3: [[11,13]]',
      'All busy: [9,10], [10,12], [11,13] → sorted & merged: [9,13]',
      'No gaps inside → only gaps before 9 and after 13 (unbounded, ignored)',
      'Answer: [] (no finite free slot where all three are free together)',
      'Example 2: Emp1 [[2,7]], Emp2 [[9,12]] → merged [[2,7],[9,12]] → free [7,9] ✓'
    ],
    hints: [
      'Global busy schedule = merge of ALL intervals (regardless of employee).',
      'Free slots are the gaps BETWEEN merged busy intervals.',
      'Per-employee sortedness does not help — flatten and sort globally.'
    ],
    code: {
      javascript: `function employeeFreeTime(schedule) {
  const all = schedule.flat().sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const merged = [];
  for (const [s, e] of all) {
    const last = merged[merged.length - 1];
    if (last && s <= last[1]) last[1] = Math.max(last[1], e);
    else merged.push([s, e]);
  }
  const free = [];
  for (let i = 1; i < merged.length; i++) {
    if (merged[i][0] > merged[i - 1][1]) {
      free.push([merged[i - 1][1], merged[i][0]]);
    }
  }
  return free;
}`,
      python: `def employeeFreeTime(schedule):
    all_ = sorted((s, e) for emp in schedule for s, e in emp)
    merged = []
    for s, e in all_:
        if merged and s <= merged[-1][1]:
            merged[-1][1] = max(merged[-1][1], e)
        else:
            merged.append([s, e])
    free = []
    for i in range(1, len(merged)):
        if merged[i][0] > merged[i - 1][1]:
            free.append([merged[i - 1][1], merged[i][0]])
    return free`,
      java: '',
      cpp: ''
    }
  }
];
