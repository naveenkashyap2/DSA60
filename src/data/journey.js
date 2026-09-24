// 60-Day Journey — data-driven, deterministic chunking.
// One pattern per day stretch; each day's questionIds come from the ACTUAL
// question list in order (never invented). Chunk sizes per pattern below were
// locked so that every pattern's questions fit exactly across 60 days.
import QUESTIONS from './questions.js';

export const PATTERN_ORDER = [
  'two-pointers',
  'fast-slow-pointers',
  'sliding-window',
  'kadane',
  'prefix-sum',
  'merge-intervals',
  'linked-list-reversal',
  'stack',
  'hash-maps',
  'binary-search',
  'heap',
  'recursion-backtracking',
  'tree',
  'graphs',
  'dp',
  'greedy'
];

// Days spent on each pattern: the array is the per-day question count.
export const DAY_CHUNKS = {
  'two-pointers': [4, 3, 3, 2],
  'fast-slow-pointers': [3, 3, 2],
  'sliding-window': [4, 3, 3, 2],
  kadane: [3, 3],
  'prefix-sum': [3, 3],
  'merge-intervals': [4, 3],
  'linked-list-reversal': [3, 3],
  stack: [3, 3, 3],
  'hash-maps': [4],
  'binary-search': [4, 4, 4, 3, 3, 3, 2],
  heap: [3, 3, 3, 3, 3, 2],
  'recursion-backtracking': [3, 3, 2, 2],
  tree: [4, 4, 4, 4, 4, 3, 3, 3, 2],
  graphs: [4, 4, 4, 4, 3],
  dp: [4, 4, 4, 4, 3],
  greedy: [4]
};

const PATTERN_FOCUS = {
  'two-pointers': 'Two Pointers',
  'fast-slow-pointers': 'Fast & Slow Pointers',
  'sliding-window': 'Sliding Window',
  kadane: "Kadane's Algorithm",
  'prefix-sum': 'Prefix Sum',
  'merge-intervals': 'Merge Intervals',
  'linked-list-reversal': 'Linked List Reversal',
  stack: 'Stack',
  'hash-maps': 'Hash Maps',
  'binary-search': 'Binary Search',
  heap: 'Heap / Priority Queue',
  'recursion-backtracking': 'Recursion & Backtracking',
  tree: 'Trees',
  graphs: 'Graphs',
  dp: 'Dynamic Programming',
  greedy: 'Greedy'
};

function buildJourney() {
  const days = [];
  let day = 1;

  for (const pattern of PATTERN_ORDER) {
    const patternQuestions = QUESTIONS.filter((q) => q.pattern === pattern);
    const chunks = DAY_CHUNKS[pattern] || [];
    const chunkTotal = chunks.reduce((s, c) => s + c, 0);
    if (chunkTotal !== patternQuestions.length) {
      throw new Error(
        `Journey mismatch for "${pattern}": chunks sum to ${chunkTotal} but there are ${patternQuestions.length} questions.`
      );
    }
    let idx = 0;
    for (const size of chunks) {
      const slice = patternQuestions.slice(idx, idx + size);
      days.push({
        day: day,
        pattern,
        focus: PATTERN_FOCUS[pattern] || pattern,
        count: slice.length,
        questionIds: slice.map((q) => q.id),
        questionSlugs: slice.map((q) => q.slug)
      });
      idx += size;
      day += 1;
    }
  }

  if (days.length !== 60) {
    throw new Error(`Journey must have exactly 60 days, got ${days.length}.`);
  }
  // Every id must exist exactly once across the journey.
  const seen = new Set();
  for (const d of days) {
    for (const id of d.questionIds) {
      if (seen.has(id)) throw new Error(`Journey duplicate id: ${id}`);
      seen.add(id);
    }
  }
  if (seen.size !== QUESTIONS.length) {
    throw new Error(
      `Journey covers ${seen.size} of ${QUESTIONS.length} questions — every question must appear exactly once.`
    );
  }

  return days;
}

export const DAYS = buildJourney();

export const dayByNumber = (n) => DAYS.find((d) => d.day === n) || null;

// How many days each pattern spans (for compact displays).
export const patternDaySpans = () => {
  const spans = {};
  for (const d of DAYS) {
    if (!spans[d.pattern]) spans[d.pattern] = { from: d.day, to: d.day };
    spans[d.pattern].to = d.day;
  }
  return spans;
};

export const TOTAL_DAYS = 60;
