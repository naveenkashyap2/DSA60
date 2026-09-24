// Aggregator — every question of the DSA-60 Days course, in pattern order.
import twoPointers from './questions/twoPointers.js';
import fastSlowPointers from './questions/fastSlowPointers.js';
import slidingWindow from './questions/slidingWindow.js';
import kadane from './questions/kadane.js';
import prefixSum from './questions/prefixSum.js';
import mergeIntervals from './questions/mergeIntervals.js';
import linkedListReversal from './questions/linkedListReversal.js';
import stack from './questions/stack.js';
import hashMaps from './questions/hashMaps.js';
import binarySearch1 from './questions/binarySearch1.js';
import binarySearch2 from './questions/binarySearch2.js';
import heap from './questions/heap.js';
import recursion from './questions/recursion.js';
import tree1 from './questions/tree1.js';
import tree2 from './questions/tree2.js';
import graphs from './questions/graphs.js';
import dp from './questions/dp.js';
import greedy from './questions/greedy.js';

const ALL = [
  ...twoPointers,
  ...fastSlowPointers,
  ...slidingWindow,
  ...kadane,
  ...prefixSum,
  ...mergeIntervals,
  ...linkedListReversal,
  ...stack,
  ...hashMaps,
  ...binarySearch1,
  ...binarySearch2,
  ...heap,
  ...recursion,
  ...tree1,
  ...tree2,
  ...graphs,
  ...dp,
  ...greedy
];

export const QUESTIONS = ALL;

const BY_SLUG = new Map(ALL.map((q) => [q.slug, q]));
const BY_ID = new Map(ALL.map((q) => [q.id, q]));

export const questionBySlug = (slug) => BY_SLUG.get(slug) || null;
export const questionById = (id) => BY_ID.get(id) || null;

export const PLATFORMS = ['LeetCode', 'GeeksforGeeks', 'CoderTrain'];
export const DIFFICULTIES = ['Easy', 'Medium', 'Hard'];

// Related questions: same pattern, different slug, sorted by difficulty then title.
const DIFF_RANK = { Easy: 0, Medium: 1, Hard: 2 };
export const relatedQuestions = (q, limit = 4) =>
  ALL.filter((other) => other.pattern === q.pattern && other.slug !== q.slug)
    .sort(
      (a, b) =>
        DIFF_RANK[a.difficulty] - DIFF_RANK[b.difficulty] || a.title.localeCompare(b.title)
    )
    .slice(0, limit);

export default ALL;
