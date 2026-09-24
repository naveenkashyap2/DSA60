// Pattern: Heap — 17 questions (exact supplied list)
// Sub-groups: Kth Element (1-4), K Closest (5-7), Heap as Pointer (8-9),
// Greedy + Heap (10-15), Two Heaps (16-17)
export default [
  {
    id: 'hp-01',
    slug: 'kth-smallest',
    title: 'Kth Smallest',
    pattern: 'heap',
    difficulty: 'Medium',
    platform: 'GeeksforGeeks',
    url: 'https://www.geeksforgeeks.org/problems/kth-smallest-element5635/1',
    extra: [],
    summary:
      'Find the kth smallest element in an unsorted array in O(n) average time (no full sort).',
    asked: 'The element that would sit at index k-1 if the array were sorted.',
    why:
      'Keep a min-heap of size k over the whole array: everything smaller than the answer falls out, and the heap top is exactly the kth smallest.',
    clues: ['kth smallest', 'unsorted array', 'O(n) without sorting'],
    brute: {
      idea: 'Sort the array, return arr[k-1].',
      time: 'O(n log n)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'Min-heap capped at size k. Push each element; when the heap exceeds k, pop the smallest. At the end the top is the kth smallest.',
      steps: [
        'Implement a min-heap (array-based, sift up/down).',
        'For each x: push(x); if size > k, pop().',
        'After the scan, the heap holds the k smallest elements.',
        'Return the heap top (the smallest of those = kth smallest overall).'
      ],
      time: 'O(n log k)',
      space: 'O(k)'
    },
    dry: [
      'arr = [7, 10, 4, 3, 20, 15], k = 3',
      'push 7 → [7]; push 10 → [7,10]; push 4 → [4,10,7]',
      'push 3 → size 4 > 3 → pop 4 → [3,10,7]',
      'push 20 → pop 3 → [7,10,20]',
      'push 15 → pop 7 → [10,20,15]... wait heap [10,15,20] top 10',
      'Answer: 10? sorted = [3,4,7,10,15,20], 3rd = 7. retrace: heap keeps 3 smallest seen so far: after all: {3,4,7} → top 3? no — pop removes the SMALLEST of the 4, keeping the 3 largest of the seen... hmm: keeping k in a MIN-heap and popping the min leaves the k LARGEST. For kth SMALLEST keep a MAX-heap of size k (pop the largest).',
      'Corrected: use MAX-heap of size k: push 7,10,4 → pop 10; push 3 → [7,4,3]; push 20 → pop 20; push 15 → pop 15 → heap {7,4,3}, top 7',
      'Answer: 7'
    ],
    hints: [
      'Which heap keeps the k SMALLEST elements? (pop the biggest intruder)',
      'A max-heap of size k: the top is the largest among the k smallest = the kth smallest.',
      'JS has no built-in heap — implement the array-based one (or note the sort fallback).'
    ],
    code: {
      javascript: `function kthSmallest(arr, k) {
  // max-heap of size k (top = largest of the k smallest)
  const heap = [];
  const push = (x) => {
    heap.push(x);
    let i = heap.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (heap[p] >= heap[i]) break;
      [heap[p], heap[i]] = [heap[i], heap[p]];
      i = p;
    }
  };
  const pop = () => {
    const top = heap[0];
    heap[0] = heap[heap.length - 1];
    heap.pop();
    for (let i = 0; ; ) {
      const l = 2 * i + 1, r = l + 1;
      let s = i;
      if (l < heap.length && heap[l] > heap[s]) s = l;
      if (r < heap.length && heap[r] > heap[s]) s = r;
      if (s === i) break;
      [heap[s], heap[i]] = [heap[i], heap[s]];
      i = s;
    }
    return top;
  };
  for (const x of arr) {
    push(x);
    if (heap.length > k) pop();
  }
  return heap[0];
}`,
      python: `import heapq
def kthSmallest(arr, k):
    # max-heap of size k via negative values
    heap = []
    for x in arr:
        heapq.heappush(heap, -x)
        if len(heap) > k:
            heapq.heappop(heap)
    return -heap[0]`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'hp-02',
    slug: 'kth-largest',
    title: 'Kth Largest',
    pattern: 'heap',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/kth-largest-element-in-an-array/',
    extra: [],
    summary:
      'Given an integer array, return the kth largest element (not the kth distinct).',
    asked: 'The element at index n-k in the sorted array.',
    why:
      'Mirror of kth smallest: a min-heap of size k keeps the k LARGEST elements, and its top is the kth largest.',
    clues: ['kth largest', 'unsorted', 'without full sort'],
    brute: {
      idea: 'Sort descending, take index k-1.',
      time: 'O(n log n)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'Min-heap of size k over the array. Each new element larger than the heap top replaces it (push then pop the min). At the end, the top is the answer.',
      steps: [
        'Min-heap (array-based).',
        'For each x: push(x); if size > k pop().',
        'The heap now holds the k largest elements.',
        'Return the top (the smallest of the k largest = kth largest overall).'
      ],
      time: 'O(n log k)',
      space: 'O(k)'
    },
    dry: [
      'nums = [3, 2, 1, 5, 6, 4], k = 2',
      'heap grows: 3 → 3,2 → 2,3 → push 5 → 2,3,5 → push 6 → pop 2 → 3,5,6 → push 4 → pop 3 → 4,5,6',
      'Top = 4? wait k=2: heap size 2: trace: [3] → [3,2] → [2,3] → +5 → [2,3,5] pop 2 → [3,5] → +6 → [3,5,6] pop 3 → [5,6]',
      'Answer: 5 (2nd largest) ✓'
    ],
    hints: [
      'kth largest = the smallest among the top-k largest.',
      'A min-heap of size k discards exactly the elements that are NOT in the top k.',
      'Compare with "kth smallest" — only the heap type flips.'
    ],
    code: {
      javascript: `function findKthLargest(nums, k) {
  const heap = [];
  const push = (x) => {
    heap.push(x);
    let i = heap.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (heap[p] <= heap[i]) break;
      [heap[p], heap[i]] = [heap[i], heap[p]];
      i = p;
    }
  };
  const pop = () => {
    const top = heap[0];
    heap[0] = heap[heap.length - 1];
    heap.pop();
    for (let i = 0; ; ) {
      const l = 2 * i + 1, r = l + 1;
      let s = i;
      if (l < heap.length && heap[l] < heap[s]) s = l;
      if (r < heap.length && heap[r] < heap[s]) s = r;
      if (s === i) break;
      [heap[s], heap[i]] = [heap[i], heap[s]];
      i = s;
    }
    return top;
  };
  for (const x of nums) {
    push(x);
    if (heap.length > k) pop();
  }
  return heap[0];
}`,
      python: `import heapq
def findKthLargest(nums, k):
    heap = []
    for x in nums:
        heapq.heappush(heap, x)
        if len(heap) > k:
            heapq.heappop(heap)
    return heap[0]`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'hp-03',
    slug: 'top-k-frequent-elements',
    title: 'Top K Frequent Elements',
    pattern: 'heap',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/top-k-frequent-elements/',
    extra: [],
    summary:
      'Given an integer array, return the k most frequent elements (any order).',
    asked: 'The k values with the highest occurrence counts.',
    why:
      'Frequency map + max-heap keyed by count: pop k times. (Bucket sort gives O(n) — but the heap is the canonical answer.)',
    clues: ['most frequent', 'top k', 'frequency'],
    brute: {
      idea: 'Count, then sort the distinct values by frequency, take k.',
      time: 'O(n log n)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'Count frequencies. Push each [value, count] into a max-heap (by count). Pop k times and collect the values.',
      steps: [
        'freq = {}; for each x: freq[x]++.',
        'Max-heap of [value, count] comparing count.',
        'res = []; for i in 0..k-1: res.push(heap.pop().value).',
        'Return res.'
      ],
      time: 'O(n log k)',
      space: 'O(n)'
    },
    dry: [
      'nums = [1, 1, 1, 2, 2, 3], k = 2',
      'freq: 1→3, 2→2, 3→1',
      'Heap by count: [1,3] top',
      'pop → 1; pop → 2',
      'Answer: [1, 2]'
    ],
    hints: [
      'Two stages: count, then select.',
      'The heap comparison key is the COUNT, not the value.',
      'Only k pops are needed — that is what makes it O(n log k), not O(n log n).'
    ],
    code: {
      javascript: `function topKFrequent(nums, k) {
  const freq = {};
  for (const x of nums) freq[x] = (freq[x] || 0) + 1;
  const heap = [];
  const push = (e) => {
    heap.push(e);
    let i = heap.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (heap[p][1] >= heap[i][1]) break;
      [heap[p], heap[i]] = [heap[i], heap[p]];
      i = p;
    }
  };
  const pop = () => {
    const top = heap[0];
    heap[0] = heap[heap.length - 1];
    heap.pop();
    for (let i = 0; ; ) {
      const l = 2 * i + 1, r = l + 1;
      let s = i;
      if (l < heap.length && heap[l][1] > heap[s][1]) s = l;
      if (r < heap.length && heap[r][1] > heap[s][1]) s = r;
      if (s === i) break;
      [heap[s], heap[i]] = [heap[i], heap[s]];
      i = s;
    }
    return top;
  };
  for (const [v, c] of Object.entries(freq)) push([v, c]);
  const res = [];
  for (let i = 0; i < k; i++) res.push(pop()[0]);
  return res;
}`,
      python: `import heapq
def topKFrequent(nums, k):
    from collections import Counter
    freq = Counter(nums)
    # max-heap by count
    heap = [(-c, v) for v, c in freq.items()]
    heapq.heapify(heap)
    return [heapq.heappop(heap)[1] for _ in range(k)]`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'hp-04',
    slug: 'top-k-frequent-words',
    title: 'Top K Frequent Words',
    pattern: 'heap',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/top-k-frequent-words/',
    extra: [],
    summary:
      'Return the k most frequent words from a text, sorted by frequency descending; ties broken by lexicographic ascending order.',
    asked: 'Top-k words with the (frequency, -lexicographic) ordering.',
    why:
      'Same frequency-map + heap skeleton as top-k elements, but the comparator has TWO keys: count first, then word order.',
    clues: ['most frequent words', 'tie-break lexicographic', 'top k'],
    brute: {
      idea: 'Count, sort all distinct words by (count desc, word asc), take k.',
      time: 'O(n log n)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'Max-heap where "greater" = higher count, or same count and lexicographically smaller word. Pop k times.',
      steps: [
        'freq = word counts.',
        'Heap comparator: (a, b) → a.count - b.count, then b.localeCompare(a) (smaller word = better).',
        'Pop k words in order.',
        'Return the list.'
      ],
      time: 'O(n log k)',
      space: 'O(n)'
    },
    dry: [
      'text = "the day is sunny the the the sunny the", k = 2',
      'freq: the→5, sunny→2, day→1, is→1',
      'Order: the (5), sunny (2), day (1, "day" < "is"), is (1)',
      'Answer: ["the", "sunny"]',
      'Tie example k=4: ["the","sunny","day","is"] (day before is lexicographically)'
    ],
    hints: [
      'The comparator decides EVERYTHING: count first, then word.',
      'For a tie, the lexicographically SMALLER word must win — invert the string compare in a max-heap.',
      'Reuse the top-k elements code; only the comparison changes.'
    ],
    code: {
      javascript: `function topKFrequent(words, k) {
  const freq = {};
  for (const w of words) freq[w] = (freq[w] || 0) + 1;
  const entries = Object.entries(freq);
  // max-heap: higher count first; tie → lexicographically smaller first
  const better = (a, b) =>
    a[1] !== b[1] ? a[1] > b[1] : a[0] < b[0];
  const heap = [];
  const push = (e) => {
    heap.push(e);
    let i = heap.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (!better(heap[i], heap[p])) break;
      [heap[p], heap[i]] = [heap[i], heap[p]];
      i = p;
    }
  };
  const pop = () => {
    const top = heap[0];
    heap[0] = heap[heap.length - 1];
    heap.pop();
    for (let i = 0; ; ) {
      const l = 2 * i + 1, r = l + 1;
      let s = i;
      if (l < heap.length && better(heap[l], heap[s])) s = l;
      if (r < heap.length && better(heap[r], heap[s])) s = r;
      if (s === i) break;
      [heap[s], heap[i]] = [heap[i], heap[s]];
      i = s;
    }
    return top;
  };
  for (const e of entries) push(e);
  const res = [];
  for (let i = 0; i < k; i++) res.push(pop()[0]);
  return res;
}`,
      python: `import heapq
from collections import Counter
def topKFrequent(words, k):
    freq = Counter(words)
    # (-count, word) → min-heap gives count desc, word asc
    heap = [(-c, w) for w, c in freq.items()]
    heapq.heapify(heap)
    return [heapq.heappop(heap)[1] for _ in range(k)]`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'hp-05',
    slug: 'k-closest-points-to-origin',
    title: 'K Closest Points to Origin',
    pattern: 'heap',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/k-closest-points-to-origin/',
    extra: [],
    summary:
      'Given an array of points on the X-Y plane, return the k closest to the origin (0, 0) by squared Euclidean distance.',
    asked: 'Any ordering of the k nearest points is accepted.',
    why:
      'Distance is the heap key: either keep a max-heap of size k (top = farthest of the chosen) or a min-heap popping k times.',
    clues: ['k closest to origin', 'distance as key', 'points'],
    brute: {
      idea: 'Compute all distances, sort, take k.',
      time: 'O(n log n)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'Max-heap of size k keyed by squared distance. For each point: push; if size > k, pop the farthest. The remaining k are the answer.',
      steps: [
        'd(p) = x² + y² (skip the sqrt — ordering is the same).',
        'Max-heap of [d, point], size capped at k.',
        'After the scan, return the points.',
        'Order of the result does not matter.'
      ],
      time: 'O(n log k)',
      space: 'O(k)'
    },
    dry: [
      'points = [[4,4], [1,3], [3,2]], k = 2',
      'd: 32, 10, 13',
      'heap(k=2): [4,4](32), [1,3](10) → push [3,2](13) → pop max(32) → keep [1,3], [3,2]',
      'Answer: [[1,3],[3,2]]'
    ],
    hints: [
      'Squared distance preserves the ordering — avoid the square root.',
      'A max-heap capped at k automatically evicts the farthest point chosen so far.',
      'This is "kth largest" applied to distances, keeping the whole heap instead of just the top.'
    ],
    code: {
      javascript: `function kClosest(points, k) {
  const d = (p) => p[0] * p[0] + p[1] * p[1];
  // max-heap by distance
  const heap = [];
  const push = (e) => {
    heap.push(e);
    let i = heap.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (heap[p][0] >= heap[i][0]) break;
      [heap[p], heap[i]] = [heap[i], heap[p]];
      i = p;
    }
  };
  const pop = () => {
    const top = heap[0];
    heap[0] = heap[heap.length - 1];
    heap.pop();
    for (let i = 0; ; ) {
      const l = 2 * i + 1, r = l + 1;
      let s = i;
      if (l < heap.length && heap[l][0] > heap[s][0]) s = l;
      if (r < heap.length && heap[r][0] > heap[s][0]) s = r;
      if (s === i) break;
      [heap[s], heap[i]] = [heap[i], heap[s]];
      i = s;
    }
    return top;
  };
  for (const p of points) {
    push([d(p), p]);
    if (heap.length > k) pop();
  }
  return heap.map((e) => e[1]);
}`,
      python: `import heapq
def kClosest(points, k):
    # max-heap of size k via negative distances
    heap = []
    for x, y in points:
        dist = x * x + y * y
        heapq.heappush(heap, (-dist, (x, y)))
        if len(heap) > k:
            heapq.heappop(heap)
    return [p for _, p in heap]`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'hp-06',
    slug: 'find-k-closest-elements',
    title: 'Find K Closest Elements',
    pattern: 'heap',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/find-k-closest-elements/',
    extra: [],
    summary:
      'Given a SORTED array, a target and k, return the k elements closest to the target (in any order).',
    asked: 'The k values minimizing |x - target|.',
    why:
      'Heap keyed by |x - target|: push all, pop k. (Two pointers from the target position is even better — but the heap shows the general tool.)',
    clues: ['sorted array', 'closest to target', 'k elements'],
    brute: {
      idea: 'Sort all elements by |x - target|, take k.',
      time: 'O(n log n)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'Min-heap of [ |x - target|, x ]. Push every element, pop k times. (Alternative O(n): binary search the target position, then two pointers expanding to whichever side is closer.)',
      steps: [
        'heap = min-heap of (abs(x - target), x).',
        'Push all elements.',
        'Pop k times, collect the values.',
        'Return them (order irrelevant).'
      ],
      time: 'O(n log n) with the heap; O(n) with two pointers',
      space: 'O(n)'
    },
    dry: [
      'arr = [1, 2, 3, 4, 5], target = 3, k = 3',
      '|x-3|: 2, 1, 0, 1, 2',
      'Heap order: 3(0), 2(1), 4(1), 1(2), 5(2)',
      'Pop 3 → [3, 2, 4]',
      'Answer: [3, 2, 4] (any order)'
    ],
    hints: [
      'The key is the ABSOLUTE difference from the target.',
      'Ties can go either way — the problem accepts any valid k-set.',
      'Since the array is sorted, the k closest are always a CONTIGUOUS block — a bonus for the two-pointer version.'
    ],
    code: {
      javascript: `function findLeastAbsDiffElements(arr, target, k) {
  const heap = [];
  const push = (e) => {
    heap.push(e);
    let i = heap.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (heap[p][0] <= heap[i][0]) break;
      [heap[p], heap[i]] = [heap[i], heap[p]];
      i = p;
    }
  };
  const pop = () => {
    const top = heap[0];
    heap[0] = heap[heap.length - 1];
    heap.pop();
    for (let i = 0; ; ) {
      const l = 2 * i + 1, r = l + 1;
      let s = i;
      if (l < heap.length && heap[l][0] < heap[s][0]) s = l;
      if (r < heap.length && heap[r][0] < heap[s][0]) s = r;
      if (s === i) break;
      [heap[s], heap[i]] = [heap[i], heap[s]];
      i = s;
    }
    return top;
  };
  for (const x of arr) push([Math.abs(x - target), x]);
  const res = [];
  for (let i = 0; i < k; i++) res.push(pop()[1]);
  return res;
}`,
      python: `import heapq
def findLeastAbsDiffElements(arr, target, k):
    heap = [(abs(x - target), x) for x in arr]
    heapq.heapify(heap)
    return [heapq.heappop(heap)[1] for _ in range(k)]`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'hp-07',
    slug: 'k-weakest-rows-in-a-matrix',
    title: 'K Weakest Rows in a Matrix',
    pattern: 'heap',
    difficulty: 'Easy',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/',
    extra: [],
    summary:
      'A binary matrix (1 = soldier) with rows sorted (1s then 0s). Return the row indices of the k weakest rows (fewest soldiers; ties → lower index first).',
    asked: 'The k smallest rows by (soldier count, index).',
    why:
      'Key = (count of 1s, row index): a min-heap pops exactly the weakest rows in the required order.',
    clues: ['k weakest rows', 'row strength = sum', 'tie by index'],
    brute: {
      idea: 'Compute row sums, sort indices by (sum, index), take k.',
      time: 'O(m·n + m log m)',
      space: 'O(m)'
    },
    optimal: {
      idea:
        'Min-heap of [soldiers, rowIndex]. Push every row, pop k times.',
      steps: [
        'For each row i: soldiers = row.reduce((a, b) => a + b).',
        'Min-heap keyed by soldiers, then index.',
        'Pop k times, collect the indices.',
        'Return them.'
      ],
      time: 'O(m·n + m log k)',
      space: 'O(m)'
    },
    dry: [
      'mat = [[1,1,0,0,0], [1,1,1,1,0], [1,0,0,0,0], [1,1,0,0,0], [1,1,1,1,1]], k = 3',
      'soldiers: 2, 4, 1, 2, 5',
      'Order: row2(1), row0(2), row3(2), row1(4), row4(5)',
      'Answer: [2, 0, 3]'
    ],
    hints: [
      'Row strength = sum of the row (or, since rows are sorted, the index of the first 0).',
      'Tie-break is the row INDEX — include it as the second heap key.',
      'A min-heap of size "all rows" popping k is the simplest framing; a capped heap also works.'
    ],
    code: {
      javascript: `function kWeakestRows(mat, k) {
  const heap = [];
  const push = (e) => {
    heap.push(e);
    let i = heap.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      const better =
        heap[i][0] < heap[p][0] ||
        (heap[i][0] === heap[p][0] && heap[i][1] < heap[p][1]);
      if (!better) break;
      [heap[p], heap[i]] = [heap[i], heap[p]];
      i = p;
    }
  };
  const pop = () => {
    const top = heap[0];
    heap[0] = heap[heap.length - 1];
    heap.pop();
    for (let i = 0; ; ) {
      const l = 2 * i + 1, r = l + 1;
      let s = i;
      const better = (a, b) =>
        heap[a][0] < heap[b][0] ||
        (heap[a][0] === heap[b][0] && heap[a][1] < heap[b][1]);
      if (l < heap.length && better(l, s)) s = l;
      if (r < heap.length && better(r, s)) s = r;
      if (s === i) break;
      [heap[s], heap[i]] = [heap[i], heap[s]];
      i = s;
    }
    return top;
  };
  mat.forEach((row, i) => push([row.reduce((a, b) => a + b, 0), i]));
  const res = [];
  for (let t = 0; t < k; t++) res.push(pop()[1]);
  return res;
}`,
      python: `import heapq
def kWeakestRows(mat, k):
    heap = [(sum(row), i) for i, row in enumerate(mat)]
    heapq.heapify(heap)
    return [heapq.heappop(heap)[1] for _ in range(k)]`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'hp-08',
    slug: 'merge-k-sorted-arrays',
    title: 'Merge K Sorted Arrays',
    pattern: 'heap',
    difficulty: 'Medium',
    platform: 'GeeksforGeeks',
    url: 'https://www.geeksforgeeks.org/problems/merge-k-sorted-arrays/1',
    extra: [],
    summary:
      'Given k sorted arrays, merge them into a single sorted array in O(N log k), where N = total elements.',
    asked: 'One sorted array containing all elements of the k inputs.',
    why:
      'K sorted streams → the next smallest is always one of the k current HEADS. A min-heap over the heads yields the merged order, pushing each stream\'s successor after a pop.',
    clues: ['k sorted streams', 'k-way merge', 'O(n log k)'],
    brute: {
      idea: 'Concatenate everything and sort.',
      time: 'O(N log N)',
      space: 'O(N)'
    },
    optimal: {
      idea:
        'Heap of (value, arrayIndex, position) for each array\'s first element. Repeat N times: pop the minimum, append it, and push that array\'s next element if any.',
      steps: [
        'Initialize the heap with (arr[i][0], i, 0) for each array.',
        'While the heap is non-empty:',
        'Pop (v, i, p); append v.',
        'If p + 1 < arr[i].length: push (arr[i][p+1], i, p+1).',
        'Return the merged list.'
      ],
      time: 'O(N log k)',
      space: 'O(k)'
    },
    dry: [
      'arrays = [[2,5,7], [1,3,6]]',
      'heap: (1,a2), (2,a1)',
      'pop 1 → push 3 → heap (2,a1),(3,a2)',
      'pop 2 → push 5 → heap (3,a2),(5,a1)',
      'pop 3 → push 6 → heap (5,a1),(6,a2)',
      'pop 5 → push 7 → heap (6,a2),(7,a1)',
      'pop 6 → pop 7 → pop 5? (5 already popped) → result [1,2,3,5,6,7]',
      'Answer: [1, 2, 3, 5, 6, 7]'
    ],
    hints: [
      'At any moment, only the HEAD of each array can be the next smallest.',
      'One head per array in the heap — that is why the heap stays at size k.',
      'After popping array i\'s head, its successor becomes eligible — push it.'
    ],
    code: {
      javascript: `function mergeKArrays(arrays) {
  const heap = [];
  const push = (e) => {
    heap.push(e);
    let i = heap.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (heap[p][0] <= heap[i][0]) break;
      [heap[p], heap[i]] = [heap[i], heap[p]];
      i = p;
    }
  };
  const pop = () => {
    const top = heap[0];
    heap[0] = heap[heap.length - 1];
    heap.pop();
    for (let i = 0; ; ) {
      const l = 2 * i + 1, r = l + 1;
      let s = i;
      if (l < heap.length && heap[l][0] < heap[s][0]) s = l;
      if (r < heap.length && heap[r][0] < heap[s][0]) s = r;
      if (s === i) break;
      [heap[s], heap[i]] = [heap[i], heap[s]];
      i = s;
    }
    return top;
  };
  const res = [];
  arrays.forEach((a, i) => a.length && push([a[0], i, 0]));
  while (heap.length) {
    const [v, ai, p] = pop();
    res.push(v);
    if (p + 1 < arrays[ai].length) push([arrays[ai][p + 1], ai, p + 1]);
  }
  return res;
}`,
      python: `import heapq
def mergeKArrays(arrays):
    heap = []
    for i, a in enumerate(arrays):
        if a:
            heapq.heappush(heap, (a[0], i, 0))
    res = []
    while heap:
        v, i, p = heapq.heappop(heap)
        res.append(v)
        if p + 1 < len(arrays[i]):
            heapq.heappush(heap, (arrays[i][p + 1], i, p + 1))
    return res`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'hp-09',
    slug: 'kth-smallest-in-sorted-matrix-heap',
    title: 'Kth Smallest in Sorted Matrix',
    pattern: 'heap',
    difficulty: 'Hard',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/',
    extra: [],
    summary:
      'Same matrix as the binary-search variant — here solve it with a heap: n×n matrix sorted in rows and columns, find the kth smallest element.',
    asked: 'The kth smallest value (1-indexed) using k-way merge thinking.',
    why:
      'Each ROW is sorted → treat the n rows as n sorted streams. Start the heap with each row\'s first element; pop k times, pushing the row\'s successor each time.',
    clues: ['row-sorted matrix', 'k-way merge of rows', 'kth smallest'],
    brute: {
      idea: 'Flatten + sort.',
      time: 'O(n² log n)',
      space: 'O(n²)'
    },
    optimal: {
      idea:
        'Min-heap of (value, row, col) seeded with (matrix[i][0], i, 0) for every row. Pop k times; each pop of (v, r, c) pushes (matrix[r][c+1], r, c+1) if it exists.',
      steps: [
        'Push (matrix[i][0], i, 0) for all rows i.',
        'Repeat k times: pop the min (v, r, c); remember v.',
        'If c + 1 < n: push (matrix[r][c+1], r, c+1).',
        'The kth popped value is the answer.'
      ],
      time: 'O(k log n)',
      space: 'O(n)'
    },
    dry: [
      'matrix = [[1, 5, 9], [10, 11, 13], [12, 13, 15]], k = 8',
      'heap seeds: (1,r0),(10,r1),(12,r2)',
      'pop 1 → push 5; pop 5 → push 9; pop 9 → push (nothing, end of row 0)',
      'pop 10 → push 11; pop 11 → push 13(r1); pop 12 → push 13(r2)',
      'pop 13(r1) → push 15',
      '8th pop: 13 (from row 2) → Answer: 13',
      'Sorted values: 1,5,9,10,11,12,13,13,15 → 8th = 13 ✓'
    ],
    hints: [
      'Rows are sorted streams — this is k-way merge with k = n.',
      'Only the NEXT element of a row becomes eligible after its predecessor is popped.',
      'Compare with the binary-search-on-value solution: which is better for large k?'
    ],
    code: {
      javascript: `function kthSmallest(matrix, k) {
  const n = matrix.length;
  const heap = [];
  const push = (e) => {
    heap.push(e);
    let i = heap.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (heap[p][0] <= heap[i][0]) break;
      [heap[p], heap[i]] = [heap[i], heap[p]];
      i = p;
    }
  };
  const pop = () => {
    const top = heap[0];
    heap[0] = heap[heap.length - 1];
    heap.pop();
    for (let i = 0; ; ) {
      const l = 2 * i + 1, r = l + 1;
      let s = i;
      if (l < heap.length && heap[l][0] < heap[s][0]) s = l;
      if (r < heap.length && heap[r][0] < heap[s][0]) s = r;
      if (s === i) break;
      [heap[s], heap[i]] = [heap[i], heap[s]];
      i = s;
    }
    return top;
  };
  for (let r = 0; r < n; r++) push([matrix[r][0], r, 0]);
  let ans;
  for (let t = 0; t < k; t++) {
    const [v, r, c] = pop();
    ans = v;
    if (c + 1 < n) push([matrix[r][c + 1], r, c + 1]);
  }
  return ans;
}`,
      python: `import heapq
def kthSmallest(matrix, k):
    n = len(matrix)
    heap = [(matrix[r][0], r, 0) for r in range(n)]
    heapq.heapify(heap)
    ans = None
    for _ in range(k):
        v, r, c = heapq.heappop(heap)
        ans = v
        if c + 1 < n:
            heapq.heappush(heap, (matrix[r][c + 1], r, c + 1))
    return ans`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'hp-10',
    slug: 'last-stone-weight',
    title: 'Last Stone Weight',
    pattern: 'heap',
    difficulty: 'Easy',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/last-stone-weight/',
    extra: [],
    summary:
      'Repeatedly smash the TWO heaviest stones: the smaller is destroyed, the heavier becomes (larger - smaller). Return the last remaining weight (0 if none).',
    asked: 'The final stone weight after the greedy smashing process.',
    why:
      '"Always pick the two largest" is exactly what a max-heap serves: extract-max twice, push back the difference.',
    clues: ['always take the two largest', 'repeated combine', 'heap loop'],
    brute: {
      idea: 'Sort the array every step, take the last two.',
      time: 'O(n² log n)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'Max-heap of all stones. While more than one stone: pop the two largest a ≥ b; if a ≠ b push a - b. Return the last stone or 0.',
      steps: [
        'Build a max-heap from the stones.',
        'While heap.size > 1:',
        'a = pop(); b = pop();',
        'If a !== b: push(a - b).',
        'Return heap.size ? heap.top : 0.'
      ],
      time: 'O(n log n)',
      space: 'O(n)'
    },
    dry: [
      'stones = [2, 7, 4, 1]',
      'heap top two: 7, 4 → push 3 → [3, 2, 1]',
      'top two: 3, 2 → push 1 → [1, 1]',
      'top two: 1, 1 → equal → both destroyed → []',
      'Answer: 0'
    ],
    hints: [
      'Which operation do you need from the collection, and how often? (repeated "give me the max")',
      'Push the difference back ONLY when it is non-zero.',
      'The loop ends when 0 or 1 stones remain.'
    ],
    code: {
      javascript: `function lastStoneWeight(stones) {
  const heap = [];
  const push = (x) => {
    heap.push(x);
    let i = heap.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (heap[p] >= heap[i]) break;
      [heap[p], heap[i]] = [heap[i], heap[p]];
      i = p;
    }
  };
  const pop = () => {
    const top = heap[0];
    heap[0] = heap[heap.length - 1];
    heap.pop();
    for (let i = 0; ; ) {
      const l = 2 * i + 1, r = l + 1;
      let s = i;
      if (l < heap.length && heap[l] > heap[s]) s = l;
      if (r < heap.length && heap[r] > heap[s]) s = r;
      if (s === i) break;
      [heap[s], heap[i]] = [heap[i], heap[s]];
      i = s;
    }
    return top;
  };
  for (const s of stones) push(s);
  while (heap.length > 1) {
    const a = pop();
    const b = pop();
    if (a !== b) push(a - b);
  }
  return heap.length ? heap[0] : 0;
}`,
      python: `import heapq
def lastStoneWeight(stones):
    heap = [-s for s in stones]
    heapq.heapify(heap)
    while len(heap) > 1:
        a = -heapq.heappop(heap)
        b = -heapq.heappop(heap)
        if a != b:
            heapq.heappush(heap, -(a - b))
    return -heap[0] if heap else 0`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'hp-11',
    slug: 'cpu-task-scheduler',
    title: 'CPU Task Scheduler',
    pattern: 'heap',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/task-scheduler/',
    extra: [],
    summary:
      'A CPU executes unit-time tasks with a cooldown: the same task needs n idle intervals between executions. Find the minimum total time to finish all tasks.',
    asked: 'The shortest schedule length respecting the cooldown constraint.',
    why:
      'At each unit of time, run the most-frequent task not in cooldown (or idle). A max-heap of remaining counts + a cooldown release list implements exactly that greedy.',
    clues: ['cooldown between same task', 'minimize total time', 'schedule with constraints'],
    brute: {
      idea: 'Try permutations / simulation with exhaustive choices.',
      time: 'exponential',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'Count frequencies. Each tick: take the max-heap top (if any), decrement, put it in cooldown until tick + n. Release any cooldown entries that have come due back into the heap. Count the ticks.',
      steps: [
        'freq map → max-heap of counts.',
        'time = 0; cooldown = [] of [count, readyTime].',
        'While heap or cooldown non-empty:',
        'time++ (a unit passes).',
        'If heap non-empty: c = pop() - 1; if c > 0, cooldown.push([c, time + n]).',
        'If cooldown head is ready (readyTime <= time): push it back into the heap.',
        'Return time.'
      ],
      time: 'O(n + T) ≈ O(26·time) with fixed alphabet',
      space: 'O(n)'
    },
    dry: [
      'tasks = [A, A, A, B, B, B], n = 2',
      'freq: A:3, B:3',
      't1: A (A left 2, ready t3); t2: B (B left 2, ready t4); t3: release A, A (A left 1, ready t5); t4: release B, B (B left 1, ready t6); t5: A; t6: B',
      'Answer: 6 (schedule A B A B A B — no idle needed)',
      'tasks = [A, A, A], n = 2 → A _ _ A _ _ A → 7'
    ],
    hints: [
      'Which task should you run NOW to keep options open? (the one with the most remaining copies)',
      'A task goes on cooldown for n units AFTER it runs — model the release time.',
      'Idle time only happens when nothing is eligible — the loop naturally produces it.'
    ],
    code: {
      javascript: `function leastInterval(tasks, n) {
  const freq = {};
  for (const t of tasks) freq[t] = (freq[t] || 0) + 1;
  const heap = Object.values(freq);
  // max-heap (array-based)
  const push = (c) => {
    heap.push(c);
    let i = heap.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (heap[p] >= heap[i]) break;
      [heap[p], heap[i]] = [heap[i], heap[p]];
      i = p;
    }
  };
  const pop = () => {
    const top = heap[0];
    heap[0] = heap[heap.length - 1];
    heap.pop();
    for (let i = 0; ; ) {
      const l = 2 * i + 1, r = l + 1;
      let s = i;
      if (l < heap.length && heap[l] > heap[s]) s = l;
      if (r < heap.length && heap[r] > heap[s]) s = r;
      if (s === i) break;
      [heap[s], heap[i]] = [heap[i], heap[s]];
      i = s;
    }
    return top;
  };
  let time = 0;
  const cooldown = []; // [count, readyTime], appended in increasing time
  while (heap.length || cooldown.length) {
    time++;
    if (heap.length) {
      const c = pop() - 1;
      if (c > 0) cooldown.push([c, time + n]);
    }
    if (cooldown.length && cooldown[0][1] <= time) {
      const [c] = cooldown.shift();
      push(c);
    }
  }
  return time;
}`,
      python: `import heapq
def leastInterval(tasks, n):
    from collections import Counter
    freq = Counter(tasks)
    heap = [-c for c in freq.values()]
    heapq.heapify(heap)
    time = 0
    cooldown = []  # [remaining, ready_time]
    while heap or cooldown:
        time += 1
        if heap:
            c = -heapq.heappop(heap) - 1
            if c > 0:
                cooldown.append([-c, time + n])
        if cooldown and cooldown[0][1] <= time:
            c, _ = cooldown.pop(0)
            heapq.heappush(heap, c)
    return time`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'hp-12',
    slug: 'reorganize-string',
    title: 'Reorganize String',
    pattern: 'heap',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/reorganize-string/',
    extra: [],
    summary:
      'Reorder a string so that no two adjacent characters are equal. Return any valid arrangement, or "" if impossible.',
    asked: 'A permutation of s with no equal adjacent letters, or the empty string.',
    why:
      'Greedy with a max-heap: always place the most frequent character not used immediately before. A feasibility pre-check (max count ≤ (n+1)/2) is required.',
    clues: ['no adjacent equal', 'rearrange', 'frequencies matter'],
    brute: {
      idea: 'Backtracking over characters — exponential.',
      time: 'O(n!)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'If any character count exceeds (n+1)/2 → impossible (it must occupy both ends plus alternation — pigeonhole). Otherwise: max-heap of [count, char]; each step, pop the best, place it, and re-insert the character placed one step earlier (delay by one).',
      steps: [
        'Count characters; if maxCount > (n + 1) / 2, return "". ',
        'Max-heap of [count, char].',
        'prev = null; res = "". ',
        'While heap non-empty: cur = pop(); res += cur.char; if prev exists, push prev back; prev = cur with count-1 (or null if 0).',
        'Return res.'
      ],
      time: 'O(n log alphabet)',
      space: 'O(n)'
    },
    dry: [
      's = "aaab"',
      'maxCount 3 ≤ (4+1)/2 = 2.5? NO → 3 > 2.5 → impossible',
      'Answer: ""',
      's = "aabb": counts a2 b2, max 2 ≤ 2.5 ✓',
      'pop a (2) → res "a", prev=a(1); pop b(2) → res "ab", push a(1), prev=b(1)',
      'pop b? heap has a(1),... wait after step 2 heap = [b? no. trace: heap start [a2,b2]. Step1: pop a2 → res a; prev=a1; heap [b2]. Step2: pop b2 → res ab; push prev a1 → heap [b1? no: prev b1]. heap [a1]; prev = b1. Step3: pop a1 → res aba; push prev b1 → heap [b1]; prev=a0=null. Step4: pop b1 → res abab ✓',
      'Answer: "abab"'
    ],
    hints: [
      'When is it IMPOSSIBLE? (one character must sit in more "slots" than the gaps allow)',
      'The pigeonhole bound: maxCount ≤ (n + 1) / 2.',
      'Placing the global max next to itself is forbidden — so re-insert the previous pick one step later.'
    ],
    code: {
      javascript: `function reorganizeString(s) {
  const freq = {};
  for (const c of s) freq[c] = (freq[c] || 0) + 1;
  const entries = Object.entries(freq);
  if (Math.max(...entries.map((e) => e[1])) > (s.length + 1) / 2) return '';
  const heap = entries;
  const push = (e) => {
    heap.push(e);
    let i = heap.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (heap[p][1] >= heap[i][1]) break;
      [heap[p], heap[i]] = [heap[i], heap[p]];
      i = p;
    }
  };
  const pop = () => {
    const top = heap[0];
    heap[0] = heap[heap.length - 1];
    heap.pop();
    for (let i = 0; ; ) {
      const l = 2 * i + 1, r = l + 1;
      let s2 = i;
      if (l < heap.length && heap[l][1] > heap[s2][1]) s2 = l;
      if (r < heap.length && heap[r][1] > heap[s2][1]) s2 = r;
      if (s2 === i) break;
      [heap[s2], heap[i]] = [heap[i], heap[s2]];
      i = s2;
    }
    return top;
  };
  let res = '';
  let prev = null;
  while (heap.length) {
    const [c, n] = pop();
    res += c;
    if (prev) push(prev);
    prev = n > 1 ? [c, n - 1] : null;
  }
  return res;
}`,
      python: `import heapq
from collections import Counter
def reorganizeString(s):
    freq = Counter(s)
    if max(freq.values()) > (len(s) + 1) // 2 + (len(s) % 2 == 0) * 0 and max(freq.values()) * 2 > len(s) + 1:
        return ''
    heap = [(-c, ch) for ch, c in freq.items()]
    heapq.heapify(heap)
    if -heap[0][0] > (len(s) + 1) / 2:
        return ''
    res = []
    prev = None
    while heap:
        neg, ch = heapq.heappop(heap)
        res.append(ch)
        if prev:
            heapq.heappush(heap, prev)
        prev = (neg + 1, ch) if neg + 1 < 0 else None
    return ''.join(res)`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'hp-13',
    slug: 'min-number-of-refueling-stops',
    title: 'Min Number of Refueling Stops',
    pattern: 'heap',
    difficulty: 'Hard',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/minimum-number-of-refueling-stops/',
    extra: [],
    summary:
      'A car starts with startFuel and must reach a target distance; gas stations lie along the way with fixed fuel amounts. Find the minimum number of refuels needed, or -1.',
    asked: 'Minimum station stops to reach the target (or -1 if impossible).',
    why:
      'The greedy: drive as far as current fuel allows, keeping ALL passed stations in a max-heap; whenever stuck, refuel from the LARGEST station you have passed. Each refuel is provably optimal (exchange argument).',
    clues: ['refuel min stops', 'stations along the way', 'greedy with max-heap'],
    brute: {
      idea: 'Try subsets of stations (2ⁿ) and check reachability.',
      time: 'O(2ⁿ · n)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'fuel = startFuel; scan stations by position, pushing every station reached (position ≤ fuel) into a max-heap of fuel. While fuel < target: pop the biggest (refuel) and count it; if the heap is empty → -1.',
      steps: [
        'max-heap of fuel amounts; i = 0.',
        'While fuel < target:',
        'Push all stations with position ≤ fuel (advancing i).',
        'If heap empty → return -1.',
        'fuel += heap.pop(); refuels++.',
        'Return refuels.'
      ],
      time: 'O(n log n)',
      space: 'O(n)'
    },
    dry: [
      'target = 1, startFuel = 1, stations = []',
      'fuel 1 ≥ target 1 → 0 refuels',
      'Answer: 0',
      'target = 100, startFuel = 1, stations = [[50,2],[80,100]]',
      'fuel=1: no station reachable → heap empty → Answer: -1',
      'target = 100, start = 10, stations = [[50,20],[80,80]]: reach 10 → none ≤ 10? station 50 not reachable → -1? wait start 10 < 50 → -1. Use start = 60: reach 60 → push 20 (pos 50); fuel 60 < 100 → refuel 20 → 80 → push 80 (pos 80) → fuel 80 < 100 → refuel 80 → 160 ≥ 100 → 2 refuels ✓'
    ],
    hints: [
      'Which station should you refuel from when stuck? (the biggest one you ALREADY passed)',
      'You can "delay" the refueling decision — stations only become available once passed.',
      'Each refuel from the max passed station is safe: any other choice is swappable (exchange argument).'
    ],
    code: {
      javascript: `function minRefuelStops(target, startFuel, stations) {
  const heap = [];
  const push = (x) => {
    heap.push(x);
    let i = heap.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (heap[p] >= heap[i]) break;
      [heap[p], heap[i]] = [heap[i], heap[p]];
      i = p;
    }
  };
  const pop = () => {
    const top = heap[0];
    heap[0] = heap[heap.length - 1];
    heap.pop();
    for (let i = 0; ; ) {
      const l = 2 * i + 1, r = l + 1;
      let s = i;
      if (l < heap.length && heap[l] > heap[s]) s = l;
      if (r < heap.length && heap[r] > heap[s]) s = r;
      if (s === i) break;
      [heap[s], heap[i]] = [heap[i], heap[s]];
      i = s;
    }
    return top;
  };
  let fuel = startFuel, i = 0, refuels = 0;
  while (fuel < target) {
    while (i < stations.length && stations[i][0] <= fuel) {
      push(stations[i][1]);
      i++;
    }
    if (!heap.length) return -1;
    fuel += pop();
    refuels++;
  }
  return refuels;
}`,
      python: `import heapq
def minRefuelStops(target, startFuel, stations):
    heap = []
    fuel = startFuel
    i = refuels = 0
    while fuel < target:
        while i < len(stations) and stations[i][0] <= fuel:
            heapq.heappush(heap, -stations[i][1])
            i += 1
        if not heap:
            return -1
        fuel += -heapq.heappop(heap)
        refuels += 1
    return refuels`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'hp-14',
    slug: 'ipo',
    title: 'IPO',
    pattern: 'heap',
    difficulty: 'Hard',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/ipo/',
    extra: [],
    summary:
      'You may complete at most k projects. Each needs capital ≥ its threshold to start and returns profit. Maximize the final capital starting from w.',
    asked: 'The maximum capital after up to k projects.',
    why:
      'Two-heap greedy: a min-heap of thresholds tracks which projects are AFFORDABLE; among affordable ones, a max-heap of profits always takes the BEST available.',
    clues: ['k projects max', 'capital threshold + profit', 'maximize final capital'],
    brute: {
      idea: 'Try orderings / subsets of projects.',
      time: 'O(2ⁿ)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'Sort projects by capital. For up to k rounds: move every project with capital ≤ current cash into the profit max-heap; if none affordable, stop; else take the max profit and add it to cash.',
      steps: [
        'Sort projects by threshold (capital).',
        'cash = w; i = 0.',
        'For round in 0..k-1:',
        'While i < n and capital[i] <= cash: push profit[i] into max-heap; i++.',
        'If max-heap empty: break.',
        'cash += max-heap.pop().',
        'Return cash.'
      ],
      time: 'O(n log n)',
      space: 'O(n)'
    },
    dry: [
      'k = 2, w = 0, profits = [1,2,3], capital = [0,1,1]',
      'Round 1: affordable: profit 1 (cap 0) → max-heap [1]; take 1 → cash 1',
      'Round 2: affordable now: profits 2, 3 (cap 1) → max-heap [3,2]; take 3 → cash 4',
      'Answer: 4'
    ],
    hints: [
      'At each round you have a CHOICE only among affordable projects — which one to take?',
      'The threshold heap (min-heap) gates availability; the profit heap (max-heap) makes the choice.',
      'Cash only grows, so projects become affordable permanently — the scan pointer i never moves back.'
    ],
    code: {
      javascript: `function findMaximizedCapital(k, w, profits, capital) {
  const n = profits.length;
  const order = Array.from({ length: n }, (_, i) => i).sort(
    (a, b) => capital[a] - capital[b]
  );
  const heap = [];
  const push = (x) => {
    heap.push(x);
    let i = heap.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (heap[p] >= heap[i]) break;
      [heap[p], heap[i]] = [heap[i], heap[p]];
      i = p;
    }
  };
  const pop = () => {
    const top = heap[0];
    heap[0] = heap[heap.length - 1];
    heap.pop();
    for (let i = 0; ; ) {
      const l = 2 * i + 1, r = l + 1;
      let s = i;
      if (l < heap.length && heap[l] > heap[s]) s = l;
      if (r < heap.length && heap[r] > heap[s]) s = r;
      if (s === i) break;
      [heap[s], heap[i]] = [heap[i], heap[s]];
      i = s;
    }
    return top;
  };
  let cash = w, i = 0;
  for (let round = 0; round < k; round++) {
    while (i < n && capital[order[i]] <= cash) {
      push(profits[order[i]]);
      i++;
    }
    if (!heap.length) break;
    cash += pop();
  }
  return cash;
}`,
      python: `import heapq
def findMaximizedCapital(k, w, profits, capital):
    n = len(profits)
    projects = sorted(zip(capital, profits))
    max_profit = []
    cash = w
    i = 0
    for _ in range(k):
        while i < n and projects[i][0] <= cash:
            heapq.heappush(max_profit, -projects[i][1])
            i += 1
        if not max_profit:
            break
        cash += -heapq.heappop(max_profit)
    return cash`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'hp-15',
    slug: 'course-schedule-iii',
    title: 'Course Schedule III',
    pattern: 'heap',
    difficulty: 'Hard',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/course-schedule-iii/',
    extra: [],
    summary:
      'Courses have a duration and a lastDay. They must be finished by lastDay, one at a time. Find the maximum number of courses you can finish.',
    asked: 'The largest subset of courses schedulable within their deadlines.',
    why:
      'Sort by deadline; take every course; when the total duration exceeds the current deadline, DROP the longest course you have taken (max-heap). The dropped course is the worst use of time.',
    clues: ['duration + deadline', 'max courses finished', 'swap out the longest'],
    brute: {
      idea: 'Check all subsets of courses.',
      time: 'O(2ⁿ · n)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'Sort courses by lastDay. Greedily add each course (track total duration in a max-heap of durations). If total > current lastDay, remove the LONGEST duration taken (it blocks the most). The heap size at the end is the answer.',
      steps: [
        'Sort by lastDay ascending.',
        'total = 0; max-heap of durations.',
        'For each [d, last]: push d; total += d.',
        'If total > last: total -= pop(); (drop the longest).',
        'Return the heap size.'
      ],
      time: 'O(n log n)',
      space: 'O(n)'
    },
    dry: [
      'courses = [ [100, 200], [200, 130], [300, 300] ] → sorted by deadline: [200,130],[100,200],[300,300]',
      'take [200,130]: total 200 > 130 → drop 200 → total 0, heap []',
      'take [100,200]: total 100 ≤ 200 ✓',
      'take [300,300]: total 400 > 300 → drop 300 → total 100, heap [100]',
      'Answer: 1 course',
      'Example 1: [[1,2],[2,3],[3,4]] → take 1 (t=1), take 2 (t=3 ≤ 3), take 3 (t=6 > 4 → drop 3) → 2 courses'
    ],
    hints: [
      'Why sort by deadline? (earlier deadlines are the tighter constraints)',
      'When you exceed a deadline, WHICH course to drop costs you the least? (the longest one)',
      'The heap size is the answer — every course in it fits the schedule.'
    ],
    code: {
      javascript: `function scheduleCourse(courses) {
  courses.sort((a, b) => a[1] - b[1]);
  const heap = [];
  const push = (x) => {
    heap.push(x);
    let i = heap.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (heap[p] >= heap[i]) break;
      [heap[p], heap[i]] = [heap[i], heap[p]];
      i = p;
    }
  };
  const pop = () => {
    const top = heap[0];
    heap[0] = heap[heap.length - 1];
    heap.pop();
    for (let i = 0; ; ) {
      const l = 2 * i + 1, r = l + 1;
      let s = i;
      if (l < heap.length && heap[l] > heap[s]) s = l;
      if (r < heap.length && heap[r] > heap[s]) s = r;
      if (s === i) break;
      [heap[s], heap[i]] = [heap[i], heap[s]];
      i = s;
    }
    return top;
  };
  let total = 0;
  for (const [d, last] of courses) {
    push(d);
    total += d;
    if (total > last) total -= pop();
  }
  return heap.length;
}`,
      python: `import heapq
def scheduleCourse(courses):
    courses.sort(key=lambda c: c[1])
    heap = []
    total = 0
    for d, last in courses:
        heapq.heappush(heap, -d)
        total += d
        if total > last:
            total += heapq.heappop(heap)  # pop negative → subtract duration
    return len(heap)`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'hp-16',
    slug: 'find-median-from-data-stream',
    title: 'Find Median from Data Stream',
    pattern: 'heap',
    difficulty: 'Hard',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/find-median-from-data-stream/',
    extra: [],
    summary:
      'A stream of numbers arrives one by one. Support addNum(num) and findMedian() both in amortized O(log n) / O(1).',
    asked: 'Design a class maintaining the running median of all numbers seen so far.',
    why:
      'Split the data into two halves: a max-heap of the LOWER half and a min-heap of the UPPER half, kept balanced. The median reads directly from the tops.',
    clues: ['running median', 'stream / data stream', 'two heaps'],
    brute: {
      idea: 'Store everything in a list; sort on each median query.',
      time: 'O(n log n) per query',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'lo = max-heap (lower half), hi = min-heap (upper half). Insert into lo, move lo\'s top to hi; if hi becomes larger than lo, move hi\'s top back. Invariant: sizes equal or lo one bigger. Median = lo.top (odd) or average of both tops (even).',
      steps: [
        'addNum(x): pushMax(lo, x); pushMin(hi, popMax(lo)).',
        'If hi.size > lo.size: pushMax(lo, popMin(hi)).',
        'findMedian(): if lo bigger → lo.top; else (lo.top + hi.top) / 2.',
        'Both heaps stay balanced after every insert.'
      ],
      time: 'O(log n) insert, O(1) median',
      space: 'O(n)'
    },
    dry: [
      'add 1 → lo [1], hi [] → median 1.0',
      'add 2 → lo [2]? insert 2 into lo → lo top 2 → move to hi: lo [1], hi [2] → median (1+2)/2 = 1.5',
      'add 3 → lo: insert 3 → top 3 → hi: lo [1], hi [3,2] → hi bigger → move 2 to lo: lo [2,1], hi [3] → median lo.top = 2 ✓',
      'Sorted so far: 1,2,3 → median 2 ✓'
    ],
    hints: [
      'The median only ever comes from the boundary between the lower and upper halves.',
      'Which heap type for the lower half? (you need its MAXIMUM fast)',
      'The balance rule (sizes differ by at most 1, lo ≥ hi) makes both median cases trivial.'
    ],
    code: {
      javascript: `class MedianFinder {
  constructor() {
    this.lo = []; // max-heap (lower half)
    this.hi = []; // min-heap (upper half)
  }
  _pushMax(h, x) {
    h.push(x);
    let i = h.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (h[p] >= h[i]) break;
      [h[p], h[i]] = [h[i], h[p]];
      i = p;
    }
  }
  _popMax(h) {
    const top = h[0];
    h[0] = h[h.length - 1];
    h.pop();
    for (let i = 0; ; ) {
      const l = 2 * i + 1, r = l + 1;
      let s = i;
      if (l < h.length && h[l] > h[s]) s = l;
      if (r < h.length && h[r] > h[s]) s = r;
      if (s === i) break;
      [h[s], h[i]] = [h[i], h[s]];
      i = s;
    }
    return top;
  }
  _pushMin(h, x) {
    h.push(x);
    let i = h.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (h[p] <= h[i]) break;
      [h[p], h[i]] = [h[i], h[p]];
      i = p;
    }
  }
  _popMin(h) {
    const top = h[0];
    h[0] = h[h.length - 1];
    h.pop();
    for (let i = 0; ; ) {
      const l = 2 * i + 1, r = l + 1;
      let s = i;
      if (l < h.length && h[l] < h[s]) s = l;
      if (r < h.length && h[r] < h[s]) s = r;
      if (s === i) break;
      [h[s], h[i]] = [h[i], h[s]];
      i = s;
    }
    return top;
  }
  addNum(num) {
    this._pushMax(this.lo, num);
    this._pushMin(this.hi, this._popMax(this.lo));
    if (this.hi.length > this.lo.length) {
      this._pushMax(this.lo, this._popMin(this.hi));
    }
  }
  findMedian() {
    if (this.lo.length > this.hi.length) return this.lo[0];
    return (this.lo[0] + this.hi[0]) / 2;
  }
}`,
      python: `import heapq
class MedianFinder:
    def __init__(self):
        self.lo = []  # max-heap via negatives
        self.hi = []  # min-heap

    def addNum(self, num):
        heapq.heappush(self.lo, -num)
        heapq.heappush(self.hi, -heapq.heappop(self.lo))
        if len(self.hi) > len(self.lo):
            heapq.heappush(self.lo, -heapq.heappop(self.hi))

    def findMedian(self):
        if len(self.lo) > len(self.hi):
            return -self.lo[0]
        return (-self.lo[0] + self.hi[0]) / 2`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'hp-17',
    slug: 'sliding-window-median',
    title: 'Sliding Window Median',
    pattern: 'heap',
    difficulty: 'Hard',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/sliding-window-median/',
    extra: [],
    summary:
      'Given an array and window size k, compute the median of every sliding window of length k.',
    asked: 'An array of (n - k + 1) medians, one per window position.',
    why:
      'The two-heaps median structure, extended with LAZY DELETION: a window leaves an old element behind, so mark it "removed" and clean stale tops before reading the median.',
    clues: ['median per sliding window', 'k-sized windows', 'two heaps + lazy delete'],
    brute: {
      idea: 'For each window, sort the k elements and read the middle.',
      time: 'O(n·k log k)',
      space: 'O(k)'
    },
    optimal: {
      idea:
        'maxHeap = lower half (top = its max), minHeap = upper half (top = its min), holding [value, index]. On each slide: insert (balance sizes), mark the outgoing element as removed, clean heap tops, read the median. Removed entries are purged only when they reach a top.',
      steps: [
        'Insert: if value ≤ maxHeap.top → maxHeap else minHeap; then balance sizes (moving tops).',
        'Outgoing: add (value, index) to a removed set (key = value#index).',
        'Clean: while a heap top is in removed, pop it.',
        'Median: k odd → maxHeap.top; even → (maxHeap.top + minHeap.top) / 2.',
        'Repeat for every window position.'
      ],
      time: 'O(n log k)',
      space: 'O(k)'
    },
    dry: [
      'nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3',
      'W1 [1,3,-1] → sorted [-1,1,3] → 1',
      'W2 [3,-1,-3] → -1',
      'W3 [-1,-3,5] → -1',
      'W4 [-3,5,3] → 3',
      'W5 [5,3,6] → 5',
      'W6 [3,6,7] → 6',
      'Answer: [1, -1, -1, 3, 5, 6]'
    ],
    hints: [
      'Rebuild-from-scratch per window is too slow — what changes between windows? (one out, one in)',
      'Lazy deletion: you do NOT remove an element immediately — you mark it and ignore it at the top.',
      'Why key the removed set by (value, INDEX) instead of value alone?'
    ],
    code: {
      javascript: `function medianSlidingWindow(nums, k) {
  class Heap {
    constructor(cmp) { this.a = []; this.cmp = cmp; }
    get size() { return this.a.length; }
    peek() { return this.a[0]; }
    push(x) {
      this.a.push(x);
      let i = this.a.length - 1;
      while (i > 0) {
        const p = (i - 1) >> 1;
        if (this.cmp(this.a[i], this.a[p]) >= 0) break;
        [this.a[p], this.a[i]] = [this.a[i], this.a[p]];
        i = p;
      }
    }
    pop() {
      const top = this.a[0];
      this.a[0] = this.a[this.a.length - 1];
      this.a.pop();
      for (let i = 0; ; ) {
        const l = 2 * i + 1, r = l + 1;
        let s = i;
        if (l < this.a.length && this.cmp(this.a[l], this.a[s]) < 0) s = l;
        if (r < this.a.length && this.cmp(this.a[r], this.a[s]) < 0) s = r;
        if (s === i) break;
        [this.a[s], this.a[i]] = [this.a[i], this.a[s]];
        i = s;
      }
      return top;
    }
  }
  const maxHeap = new Heap((x, y) => y[0] - x[0]); // lower half
  const minHeap = new Heap((x, y) => x[0] - y[0]); // upper half
  const removed = new Set();
  const alive = (v) => !removed.has(v[0] + '#' + v[1]);
  const clean = (h) => { while (h.size && !alive(h.peek())) h.pop(); };
  const balance = () => {
    clean(maxHeap);
    clean(minHeap);
    while (maxHeap.size > minHeap.size + 1) minHeap.push(maxHeap.pop());
    while (minHeap.size > maxHeap.size) maxHeap.push(minHeap.pop());
  };
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];
    if (maxHeap.size && val <= maxHeap.peek()[0]) maxHeap.push([val, i]);
    else minHeap.push([val, i]);
    if (i >= k) removed.add(nums[i - k] + '#' + (i - k));
    balance();
    if (i >= k - 1) {
      clean(maxHeap);
      clean(minHeap);
      res.push(
        k % 2 ? maxHeap.peek()[0] : (maxHeap.peek()[0] + minHeap.peek()[0]) / 2
      );
    }
  }
  return res;
}`,
      python: `import heapq
def medianSlidingWindow(nums, k):
    max_heap = []  # negative values, lower half
    min_heap = []  # upper half
    removed = set()
    def alive(v, i):
        return (v, i) not in removed
    def clean(h, negate):
        while h and not alive(-h[0][0] if negate else h[0][0], h[0][1]):
            heapq.heappop(h)
    res = []
    for i, x in enumerate(nums):
        if max_heap and -max_heap[0][0] >= x:
            heapq.heappush(max_heap, (-x, i))
        else:
            heapq.heappush(min_heap, (x, i))
        if len(max_heap) > len(min_heap) + 1:
            v, idx = heapq.heappop(max_heap)
            heapq.heappush(min_heap, (-v, idx))
        elif len(min_heap) > len(max_heap):
            v, idx = heapq.heappop(min_heap)
            heapq.heappush(max_heap, (-v, idx))
        if i >= k:
            removed.add((nums[i - k], i - k))
        clean(max_heap, True)
        clean(min_heap, False)
        if i >= k - 1:
            if k % 2:
                res.append(-max_heap[0][0])
            else:
                res.append((-max_heap[0][0] + min_heap[0][0]) / 2)
    return res`,
      java: '',
      cpp: ''
    }
  }
];
