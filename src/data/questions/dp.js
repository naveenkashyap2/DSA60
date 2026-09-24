// Pattern: Dynamic Programming — 16 episodes → 19 questions (exact supplied list)
// Ep06 (Tabulation Intro), Ep11 (LIS Tabulation), Ep16 (Revision) and Ep01 (Fundamentals)
// carry no external link in the supplied list → url: null (no fake URLs).
export default [
  {
    id: 'dp-01',
    slug: 'dp-fundamentals',
    title: 'DP Fundamentals',
    pattern: 'dp',
    difficulty: 'Easy',
    platform: null,
    url: null,
    extra: [],
    summary:
      'Episode 01: what makes a problem "dynamic programming" — overlapping subproblems + optimal substructure — and the two ways to build a DP: memoization (top-down) and tabulation (bottom-up).',
    asked: 'The mental model: break the problem into smaller SUBPROBLEMS, cache answers, combine.',
    why:
      'Before any DP table, you need the two signs: (1) the same subproblem is asked many times (overlap) and (2) the optimal answer is built from optimal answers of smaller subproblems (optimal substructure). Memoization writes the recursion and caches it; tabulation inverts the recursion into a filled table. Same recurrence, two directions.',
    clues: ['repeated subproblems', 'optimal substructure', 'memoize or tabulate', 'base cases + transition'],
    brute: {
      idea: 'Pure recursion — exponential because it recomputes subproblems.',
      time: 'O(2ⁿ) typical',
      space: 'O(n) stack'
    },
    optimal: {
      idea:
        'Step 1: define dp[i] = answer for the subproblem of size i. Step 2: write the transition (how dp[i] uses smaller dp[·]). Step 3: fix base cases. Step 4a top-down: recursion + cache. Step 4b bottom-up: fill the table iteratively.',
      steps: [
        'Define the STATE: what does dp[i] mean? (often "best answer for the first i items / at position i")',
        'Write the TRANSITION: dp[i] = best of (options, each using smaller dp values).',
        'Fix BASE CASES: the dp values you already know.',
        'Top-down: function f(i): return cache[i] if present; compute with smaller f calls; store.',
        'Bottom-up: loop i from base to n; compute dp[i] from already-filled cells.',
        'The example below: both flavors of the same recurrence.'
      ],
      time: 'O(n) for the example (vs O(2ⁿ) naive)',
      space: 'O(n)'
    },
    dry: [
      'fib(5): naive tree repeats fib(3) twice, fib(2) three times — overlap',
      'Top-down: f(5) → f(4)+f(3); f(4) → f(3)+f(2); f(3) cached after first compute',
      'Each subproblem computed ONCE: f(0)=0, f(1)=1, f(2)=1, f(3)=2, f(4)=3, f(5)=5',
      'Bottom-up: table [0,1,1,2,3,5] filled left to right — same numbers, no recursion',
      'Answer: both give 5; the lesson is the STATE + TRANSITION habit'
    ],
    hints: [
      'Ask: "if I knew the answers for smaller inputs, could I write the answer for this input?" — that question IS the recurrence.',
      'Memoization = recursion + a map; tabulation = the same table filled in a loop. Choose by comfort: top-down for sparse states, bottom-up for tight code.',
      'A state that only needs O(1) previous values can be reduced to rolling variables (you will see this constantly).'
    ],
    code: {
      javascript: `// TOP-DOWN (memoization)
function fibMemo(n) {
  const cache = new Array(n + 1).fill(-1);
  const f = (k) => {
    if (k <= 1) return k;
    if (cache[k] !== -1) return cache[k];
    return (cache[k] = f(k - 1) + f(k - 2));
  };
  return f(n);
}

// BOTTOM-UP (tabulation)
function fibTab(n) {
  if (n <= 1) return n;
  const dp = new Array(n + 1).fill(0);
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) dp[i] = dp[i - 1] + dp[i - 2];
  return dp[n];
}

// The habit: 1) state, 2) transition, 3) base cases, 4) direction.`,
      python: `# TOP-DOWN (memoization)
from functools import lru_cache

@lru_cache(None)
def fibMemo(n):
    if n <= 1:
        return n
    return fibMemo(n - 1) + fibMemo(n - 2)

# BOTTOM-UP (tabulation)
def fibTab(n):
    if n <= 1:
        return n
    dp = [0] * (n + 1)
    dp[1] = 1
    for i in range(2, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]
    return dp[n]

# Habit: state → transition → base cases → direction.`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'dp-02',
    slug: 'climbing-stairs',
    title: 'Climbing Stairs',
    pattern: 'dp',
    difficulty: 'Easy',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/climbing-stairs/',
    extra: [],
    summary:
      'You can climb 1 or 2 stairs at a time. How many distinct ways can you reach the top of n stairs? (The classic "first DP" — Fibonacci in disguise.)',
    asked: 'Count the distinct 1/2-step sequences that sum to n.',
    why:
      'To reach stair n you came from n-1 (then a 1-step) or n-2 (then a 2-step). So ways(n) = ways(n-1) + ways(n-2) — a Fibonacci recurrence with base ways(1) = 1, ways(2) = 2. Tabulate it in O(n).',
    clues: ['choices at each step', 'count ways', 'last move decides', 'Fibonacci recurrence'],
    brute: {
      idea: 'Recursion without memo — exponential tree of paths.',
      time: 'O(2ⁿ)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'dp[i] = dp[i-1] + dp[i-2]; dp[1] = 1, dp[2] = 2. Fill to n. Two rolling variables give O(1) space.',
      steps: [
        'State: dp[i] = ways to reach stair i.',
        'Transition: the LAST move was 1-step (from i-1) or 2-step (from i-2) — sum them.',
        'Base: dp[1] = 1, dp[2] = 2.',
        'Fill i = 3..n.',
        'Rolling: a = 1, b = 2; iterate: c = a + b; a = b; b = c.'
      ],
      time: 'O(n)',
      space: 'O(1) rolling'
    },
    dry: [
      'n = 4: dp[1]=1, dp[2]=2, dp[3]=dp[2]+dp[1]=3, dp[4]=dp[3]+dp[2]=5',
      'Paths: 1111, 112, 121, 211, 22 → 5 ✓',
      'n = 5: dp[5] = 5 + 3 = 8',
      'Answer: 5 (for n = 4)'
    ],
    hints: [
      'Look only at the LAST move into stair n — what are the possibilities? (1 from n-1, or 2 from n-2)',
      'The subproblems "ways to n-1" and "ways to n-2" are INDEPENDENT — just add.',
      'This is Fibonacci: F(n) with different base values. If it looks like fib, it probably is.'
    ],
    code: {
      javascript: `function climbStairs(n) {
  if (n <= 2) return n;
  let a = 1, b = 2;
  for (let i = 3; i <= n; i++) {
    const c = a + b;
    a = b;
    b = c;
  }
  return b;
}

// Full table version:
function climbStairsTab(n) {
  const dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) dp[i] = dp[i - 1] + dp[i - 2];
  return dp[n];
}`,
      python: `def climbStairs(n):
    if n <= 2:
        return n
    a, b = 1, 2
    for _ in range(3, n + 1):
        a, b = b, a + b
    return b`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'dp-03',
    slug: 'min-cost-climbing-stairs',
    title: 'Min Cost Climbing Stairs',
    pattern: 'dp',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/min-cost-climbing-stairs/',
    extra: [],
    summary:
      'Each stair i has a cost cost[i]. Paying cost[i] lets you climb i+1 or i+2 stairs. You may start at stair 0 OR 1. Find the minimum cost to reach the top (one past the last stair).',
    asked: 'Cheapest sequence of 1/2-steps to step beyond the last stair.',
    why:
      'Same Fibonacci-shaped transition, now with WEIGHTS: the cost to land on stair i is cost[i] + min(cost to reach i-1, cost to reach i-2). The "top" is a virtual stair n — you may land exactly on it (that is why the table runs to n+1).',
    clues: ['pay per stair', 'min cost', 'start at 0 or 1 free', 'virtual top'],
    brute: {
      idea: 'Recursion over all 1/2-step paths with memo (exponential without).',
      time: 'O(2ⁿ) naive',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'dp[i] = minimum cost to STAND on stair i (dp[0] = 0, dp[1] = 0 — starting is free). dp[i] = cost[i] + min(dp[i-1], dp[i-2]). Answer: min(dp[n-1], dp[n-2]) — either of the last two stairs can jump to the top. (Or add a virtual dp[n] with cost 0.)',
      steps: [
        'State: dp[i] = min cost to stand on stair i.',
        'Base: dp[0] = 0, dp[1] = 0 (you can start at either for free).',
        'Transition: dp[i] = cost[i] + min(dp[i-1], dp[i-2]).',
        'Answer: min(dp[n-1], dp[n-2]) — both can reach the top with one final jump.'
      ],
      time: 'O(n)',
      space: 'O(1) rolling / O(n)'
    },
    dry: [
      'cost = [10, 15, 20]',
      'dp[0]=0, dp[1]=0',
      'dp[2] = 20 + min(0, 0) = 20',
      'Answer: min(dp[2], dp[1]) = min(20, 0) = 0 → start at stair 1, jump 2 to the top',
      'cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1] → dp fills: best = 6 (hopping over the 100s)',
      'Answer: 6'
    ],
    hints: [
      'Standing on a stair costs its cost — but STANDING is where you pay, and the start is free. Set the base cases accordingly.',
      'The "top" is not a stair you stand on — it is a landing zone one past the end. How do you express that? (take the min of the last two)',
      'The transition is min, not sum — at each stair you CHOOSE the cheaper previous stair.'
    ],
    code: {
      javascript: `function minCostClimbingStairs(cost) {
  const n = cost.length;
  let prev2 = 0, prev1 = 0; // dp[i-2], dp[i-1]; dp[0] = dp[1] = 0
  for (let i = 2; i < n; i++) {
    const cur = cost[i] + Math.min(prev1, prev2);
    prev2 = prev1;
    prev1 = cur;
  }
  return Math.min(prev1, prev2);
}`,
      python: `def minCostClimbingStairs(cost):
    n = len(cost)
    prev2 = prev1 = 0
    for i in range(2, n):
        cur = cost[i] + min(prev1, prev2)
        prev2, prev1 = prev1, cur
    return min(prev1, prev2)`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'dp-04',
    slug: 'fibonacci-number',
    title: 'Fibonacci Number',
    pattern: 'dp',
    difficulty: 'Easy',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/fibonacci-number/',
    extra: [],
    summary:
      'F(0) = 0, F(1) = 1, F(n) = F(n-1) + F(n-2). Return F(n). (The DP view of Fibonacci: the same recurrence now solved with a table.)',
    asked: 'The nth Fibonacci number in O(n) time, O(1) space.',
    why:
      'You already met this as recursion — now as DP: the recurrence IS the transition. Top-down memoization and bottom-up tabulation are both O(n); the two-variable version is the cleanest.',
    clues: ['F(n) = F(n-1) + F(n-2)', 'base cases 0 and 1', 'table or rolling'],
    brute: {
      idea: 'Naive recursion (exponential — the reason DP exists).',
      time: 'O(2ⁿ)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'dp[0] = 0, dp[1] = 1; dp[i] = dp[i-1] + dp[i-2]; return dp[n]. Rolling variables: keep only the last two.',
      steps: [
        'Base: a = 0 (F0), b = 1 (F1).',
        'If n <= 1 return the matching base.',
        'Loop i = 2..n: c = a + b; a = b; b = c.',
        'Return b.'
      ],
      time: 'O(n)',
      space: 'O(1)'
    },
    dry: [
      'n = 4: (a,b) = (0,1) → (1,1) → (1,2) → (2,3)',
      'Answer: 3 (0, 1, 1, 2, 3)',
      'n = 5 → 5'
    ],
    hints: [
      'What are F(0) and F(1)? (the only values you don\'t compute)',
      'Each new value needs only the previous two — why does that permit O(1) space?',
      'Top-down and bottom-up compute the exact same numbers; the table just changes who drives.'
    ],
    code: {
      javascript: `function fib(n) {
  if (n <= 1) return n;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    const c = a + b;
    a = b;
    b = c;
  }
  return b;
}

// Memoized (top-down):
function fibMemo(n) {
  const cache = new Array(n + 1).fill(-1);
  const f = (k) => {
    if (k <= 1) return k;
    if (cache[k] !== -1) return cache[k];
    return (cache[k] = f(k - 1) + f(k - 2));
  };
  return f(n);
}`,
      python: `def fib(n):
    a, b = 0, 1
    for _ in range(n):
        a, b = b, a + b
    return a`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'dp-05',
    slug: 'knapsack-01',
    title: '0/1 Knapsack',
    pattern: 'dp',
    difficulty: 'Medium',
    platform: 'GeeksforGeeks',
    url: 'https://www.geeksforgeeks.org/problems/0-1-knapsack-problem-158711/1',
    extra: [],
    summary:
      'Given n items with weights wt[i] and values val[i], and a knapsack of capacity W, choose a subset (each item at most once) maximizing total value within the weight limit.',
    asked: 'The maximum value achievable with total weight ≤ W.',
    why:
      'The canonical 0/1 DP: at each item you face a binary choice — skip it, or take it (losing its weight, gaining its value). dp[i][w] = best value using the first i items with capacity w: max(dp[i-1][w], val[i] + dp[i-1][w - wt[i]]).',
    clues: ['subset, each item once', 'capacity constraint', 'maximize value', 'take or skip'],
    brute: {
      idea: 'Enumerate all 2ⁿ subsets, check weight, track best value.',
      time: 'O(2ⁿ · n)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        '2D table dp[i][w] (i items considered, capacity w). Skip: dp[i-1][w]. Take (if wt[i-1] ≤ w): val[i-1] + dp[i-1][w - wt[i-1]]. dp[i][w] = max of the two. Answer dp[n][W].',
      steps: [
        'State: dp[i][w] = max value from items 1..i with capacity w.',
        'Base: dp[0][w] = 0 for all w (no items → no value).',
        'Transition: dp[i][w] = dp[i-1][w]; if wt[i-1] ≤ w: dp[i][w] = max(dp[i][w], val[i-1] + dp[i-1][w - wt[i-1]]).',
        'Fill i = 1..n, w = 0..W.',
        'Answer: dp[n][W].'
      ],
      time: 'O(n·W)',
      space: 'O(n·W) → O(W) with a 1D row (see the next Knapsack entry)'
    },
    dry: [
      'wt = [1, 2, 3], val = [6, 10, 12], W = 4 (n = 3)',
      'Table (rows = items 1..3, cols = capacity 0..4):',
      'i=1 (w1=1,v6): [0, 6, 6, 6, 6]',
      'i=2 (w2=2,v10): [0, 6, 10, 10, 16]',
      'i=3 (w3=3,v12): [0, 6, 10, 18, 22]  ← capacity 4: take item3 (12) + best of capacity 1 from items 1-2 (6) = 18; or item1+item2 (16) → max = 18? recheck: w=4: skip → 16; take 3 → 12 + dp[2][1] = 12 + 6 = 18 → 18',
      'Answer: 18 (items 1+3: weight 4, value 18)'
    ],
    hints: [
      'For item i, what are your two choices? (skip it / take it — "0/1" means each item appears at most once)',
      'If you TAKE item i, what capacity remains for the previous items? (w - wt[i])',
      'The "i-1" in both dp[i-1][·] is crucial — using dp[i][·] would allow taking item i twice (that becomes unbounded knapsack).'
    ],
    code: {
      javascript: `function knapSack(W, wt, val, n) {
  const dp = Array.from({ length: n + 1 }, () => new Array(W + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    for (let w = 0; w <= W; w++) {
      dp[i][w] = dp[i - 1][w]; // skip item i
      if (wt[i - 1] <= w) {
        dp[i][w] = Math.max(dp[i][w], val[i - 1] + dp[i - 1][w - wt[i - 1]]);
      }
    }
  }
  return dp[n][W];
}`,
      python: `def knapSack(W, wt, val, n):
    dp = [[0] * (W + 1) for _ in range(n + 1)]
    for i in range(1, n + 1):
        for w in range(W + 1):
            dp[i][w] = dp[i - 1][w]
            if wt[i - 1] <= w:
                dp[i][w] = max(dp[i][w], val[i - 1] + dp[i - 1][w - wt[i - 1]])
    return dp[n][W]`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'dp-06',
    slug: 'tabulation-intro',
    title: 'Introduction to Tabulation',
    pattern: 'dp',
    difficulty: 'Easy',
    platform: null,
    url: null,
    extra: [],
    summary:
      'Episode 06: from recursion + memo (top-down) to filling a table by hand (bottom-up). When to use which, and how to spot the table\'s base cases, fill order, and answer cell.',
    asked: 'The skill of converting any memoized recurrence into a bottom-up table.',
    why:
      'Tabulation is memoization run in reverse: instead of the recursion chasing subproblems (and the cache filling as a side effect), YOU fill the table in an order where every cell only reads already-computed cells. Same recurrence — but no recursion stack, easier to optimize space, and no "what is the fill order?" guessing if you follow the dependency direction.',
    clues: ['bottom-up', 'fill order', 'base row/column', 'no recursion stack'],
    brute: {
      idea: 'Top-down memoization (perfectly fine — tabulation is an optimization, not a different algorithm).',
      time: 'same',
      space: 'O(n) stack overhead'
    },
    optimal: {
      idea:
        'Convert in 4 moves: (1) keep the same dp state and recurrence. (2) Base cases become the first row/column (or first cell) — fill them by hand. (3) Fill order = the recurrence\'s dependency direction (if dp[i] reads dp[i-1], fill i increasing). (4) The answer is the cell the original call asks for.',
      steps: [
        'Write the memoized version first (it IS the spec).',
        'Identify which cells never recurse: the base cases → initialize those table slots.',
        'Determine the fill order from the recurrence (small → big for "reads i-1, i-2"; left → right / top → bottom for grid DPs).',
        'Replace every f(k) with table[k]; replace the outer call with a loop over k.',
        'Example below: coin change top-down → bottom-up, cell by cell.'
      ],
      time: 'same asymptotics, lower constant, O(1) stack',
      space: 'table size (often reducible)'
    },
    dry: [
      'coins = [1, 2, 5], amount = 11 (min coins)',
      'Top-down: f(a) = 1 + min(f(a - c) for each coin); base f(0) = 0',
      'Bottom-up: dp[0] = 0; fill a = 1..11: dp[a] = 1 + min of dp[a - c] over valid coins',
      'Table: dp = [0, 1, 1, 2, 2, 1, 2, 2, 3, 3, 2, 3]',
      'Check dp[11] = 1 + min(dp[10], dp[9], dp[6]) = 1 + min(2, 3, 2) = 3',
      'Answer: dp[11] = 3 (5 + 5 + 1)'
    ],
    hints: [
      'The memoized function\'s CACHE after one run is exactly the tabulated table — tabulation just builds it deterministically.',
      'The fill order is the recurrence\'s arrow direction: if dp reads smaller indices, fill increasing; a grid cell reading up/left fills top-left to bottom-right.',
      'Ask yourself: "which cell is the final answer?" — usually the one matching the original inputs (dp[n], dp[amount], dp[N][M]).'
    ],
    code: {
      javascript: `// TOP-DOWN
function coinChangeTopDown(coins, amount) {
  const memo = new Array(amount + 1).fill(-1);
  const f = (a) => {
    if (a === 0) return 0;
    if (a < 0) return Infinity;
    if (memo[a] !== -1) return memo[a];
    let best = Infinity;
    for (const c of coins) best = Math.min(best, 1 + f(a - c));
    return (memo[a] = best);
  };
  const ans = f(amount);
  return ans === Infinity ? -1 : ans;
}

// BOTTOM-UP (tabulation) — same recurrence, no stack
function coinChangeTab(coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0; // base case: row initialization
  for (let a = 1; a <= amount; a++) { // fill order: increasing
    for (const c of coins) {
      if (c <= a && dp[a - c] + 1 < dp[a]) dp[a] = dp[a - c] + 1;
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount]; // answer cell
}`,
      python: `# TOP-DOWN
def coinChangeTopDown(coins, amount):
    memo = {}
    def f(a):
        if a == 0:
            return 0
        if a < 0:
            return float('inf')
        if a in memo:
            return memo[a]
        best = min(1 + f(a - c) for c in coins)
        memo[a] = best
        return best
    ans = f(amount)
    return -1 if ans == float('inf') else ans

# BOTTOM-UP (tabulation)
def coinChangeTab(coins, amount):
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    for a in range(1, amount + 1):
        for c in coins:
            if c <= a and dp[a - c] + 1 < dp[a]:
                dp[a] = dp[a - c] + 1
    return -1 if dp[amount] == float('inf') else dp[amount]`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'dp-07',
    slug: 'knapsack-02',
    title: '0/1 Knapsack (Space Optimized)',
    pattern: 'dp',
    difficulty: 'Medium',
    platform: 'GeeksforGeeks',
    url: 'https://www.geeksforgeeks.org/problems/0-1-knapsack-problem-158711/1',
    extra: [],
    summary:
      '0/1 Knapsack again (same GFG problem) — this time as the space-optimized 1D version: one row instead of n+1, filled right-to-left so each item is still usable at most once.',
    asked: 'The same maximum value, with O(W) memory instead of O(n·W).',
    why:
      'Row i of the table only ever reads row i-1. So one array can roll: dp[w] = max(dp[w], val[i] + dp[w - wt[i]]) — but iterate w from HIGH to LOW. Why? With a low-to-high loop, dp[w - wt[i]] would already include item i from this same pass (item taken twice). Right-to-left keeps dp[w - wt[i]] in its "before item i" state.',
    clues: ['one row', 'right to left', '0/1 = use once', 'rolling'],
    brute: {
      idea: 'The full 2D table (correct but O(n·W) memory).',
      time: 'O(n·W)',
      space: 'O(n·W)'
    },
    optimal: {
      idea:
        'dp[w] = best value with capacity w using the items processed so far. For each item i: for w from W down to wt[i]: dp[w] = max(dp[w], val[i] + dp[w - wt[i]]). Answer dp[W].',
      steps: [
        'dp = [0] * (W + 1).',
        'For each item (wt_i, val_i):',
        'For w from W DOWN TO wt_i: dp[w] = max(dp[w], val_i + dp[w - wt_i]).',
        'The descending loop is the whole trick — it enforces "at most once".',
        'Answer: dp[W].'
      ],
      time: 'O(n·W)',
      space: 'O(W)'
    },
    dry: [
      'wt = [1, 2, 3], val = [6, 10, 12], W = 4',
      'item 1 (1, 6): w=4..1: dp = [0, 6, 6, 6, 6]',
      'item 2 (2, 10): w=4..2: dp[4] = max(6, 10 + dp[2]=6) = 16; dp[3] = max(6, 10 + dp[1]=6) = 16; dp[2] = max(6, 10 + 0) = 10 → [0, 6, 10, 16, 16]',
      'item 3 (3, 12): w=4: max(16, 12 + dp[1]=6) = 18; w=3: max(16, 12 + dp[0]) = 16 → [0, 6, 10, 16, 18]',
      'Answer: dp[4] = 18 (same as the 2D version ✓)'
    ],
    hints: [
      'Why is one row enough? (row i reads only row i-1 — the older rows are never needed again)',
      'If you loop w low-to-high, which dp[w - wt[i]] cell would you accidentally read that already used item i? (the one you just updated this pass)',
      'Descending w guarantees dp[w - wt[i]] is still from the PREVIOUS item set.'
    ],
    code: {
      javascript: `function knapSack(W, wt, val, n) {
  const dp = new Array(W + 1).fill(0);
  for (let i = 0; i < n; i++) {
    for (let w = W; w >= wt[i]; w--) {
      dp[w] = Math.max(dp[w], val[i] + dp[w - wt[i]]);
    }
  }
  return dp[W];
}`,
      python: `def knapSack(W, wt, val, n):
    dp = [0] * (W + 1)
    for i in range(n):
        for w in range(W, wt[i] - 1, -1):
            dp[w] = max(dp[w], val[i] + dp[w - wt[i]])
    return dp[W]`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'dp-08',
    slug: 'egg-dropping',
    title: 'Egg Dropping',
    pattern: 'dp',
    difficulty: 'Hard',
    platform: 'GeeksforGeeks',
    url: 'https://www.geeksforgeeks.org/problems/egg-puzzle-158711/1',
    extra: [],
    summary:
      'You have e identical eggs and a building of f floors. There is a critical floor F: eggs break when dropped above F, survive at or below F. Find the minimum number of drops (worst case) that GUARANTEES finding F.',
    asked: 'min drops in the worst case, optimal strategy.',
    why:
      'The classic min-max DP: at floor x with e eggs, one drop has two outcomes — the egg BREAKS (e-1 eggs, floors below x) or SURVIVES (e eggs, floors above x). You must be ready for the WORSE outcome, so the cost is 1 + max(the two subproblems); then you CHOOSE the floor that minimizes that worst case.',
    clues: ['worst case guarantee', 'min over floor, max over outcomes', 'eggs and floors', 'break or survive'],
    brute: {
      idea: 'Binary search drops — fails when eggs are scarce (a break mid-way loses too many floors to recover).',
      time: 'O(f log f) strategy but not optimal',
      space: 'O(1)'
    },
    optimal: {
      idea:
        'dp[e][f] = min worst-case drops with e eggs and f floors. dp[e][f] = 1 + min over x in 1..f of max(dp[e-1][x-1], dp[e][f-x]). Base: dp[1][f] = f (linear scan), dp[e][1] = 1.',
      steps: [
        'State: dp[e][f].',
        'Base: 1 egg → f drops (linear); 1 floor → 1 drop.',
        'Transition: try dropping at floor x: worst(x) = max(break: dp[e-1][x-1], survive: dp[e][f-x]).',
        'dp[e][f] = 1 + min over x of worst(x).',
        'Answer: dp[e][f]. (A binary-search over x optimizes each row to O(log f) — optional.)'
      ],
      time: 'O(e·f²) naive',
      space: 'O(e·f)'
    },
    dry: [
      'e = 2, f = 10',
      'dp[1][f] = f for all f',
      'dp[2][1]=1, dp[2][2]=2, dp[2][3]=2 (drop at 2: break→dp[1][1]=1, survive→dp[2][1]=1 → 1+max=2)',
      'dp[2][4]: best x=2: max(dp[1][1], dp[2][2]) = max(1,2)=2 → 3; x=3: max(dp[1][2], dp[2][1]) = max(2,1)=2 → 3 → dp[2][4] = 3',
      'Continuing: dp[2][10] = 4 (strategy: 4, 7, 9, 10)',
      'Answer: 4'
    ],
    hints: [
      'After a drop at floor x, what are the TWO worlds? (egg broke → go down with one fewer egg; egg survived → go up with all eggs)',
      'You must survive the WORST world — so max of the two outcomes; but you CHOOSE x — so min over x.',
      'With 1 egg you cannot risk any break — that is why dp[1][f] = f (the base case that anchors everything).'
    ],
    code: {
      javascript: `function eggDrop(eggs, floors) {
  const dp = Array.from({ length: eggs + 1 }, () => new Array(floors + 1).fill(0));
  for (let e = 1; e <= eggs; e++) dp[e][1] = 1;
  for (let f = 1; f <= floors; f++) dp[1][f] = f;
  for (let e = 2; e <= eggs; e++) {
    for (let f = 2; f <= floors; f++) {
      dp[e][f] = Infinity;
      for (let x = 1; x <= f; x++) {
        const worst = Math.max(dp[e - 1][x - 1], dp[e][f - x]);
        dp[e][f] = Math.min(dp[e][f], 1 + worst);
      }
    }
  }
  return dp[eggs][floors];
}`,
      python: `def eggDrop(eggs, floors):
    dp = [[0] * (floors + 1) for _ in range(eggs + 1)]
    for e in range(1, eggs + 1):
        dp[e][1] = 1
    for f in range(1, floors + 1):
        dp[1][f] = f
    for e in range(2, eggs + 1):
        for f in range(2, floors + 1):
            dp[e][f] = float('inf')
            for x in range(1, f + 1):
                worst = max(dp[e - 1][x - 1], dp[e][f - x])
                dp[e][f] = min(dp[e][f], 1 + worst)
    return dp[eggs][floors]`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'dp-09',
    slug: 'matrix-chain-multiplication',
    title: 'Matrix Chain Multiplication',
    pattern: 'dp',
    difficulty: 'Hard',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/minimum-cost-to-cut-a-stick/',
    extra: [],
    summary:
      'Multiply a chain of matrices (i × j) in the order that minimizes scalar multiplications. (The linked problem — Minimum Cost to Cut a Stick — is the identical DP in a cutting costume: choose the first/any split, pay the interval cost, recurse on the two halves.)',
    asked: 'The minimum total scalar multiplications (or minimum cut cost — same recurrence).',
    why:
      'Matrix multiplication is associative but NOT commutative in cost: ((A·B)·C) can be wildly cheaper than (A·(B·C)). A parenthesization is a tree of splits: pick a split point k, pay the interval cost, and multiply the two halves. dp[i][j] = min over k of (dp[i][k] + dp[k+1][j] + cost of the resulting multiplication). Interval DP: fill by increasing interval length.',
    clues: ['parenthesization', 'split point k', 'interval DP', 'length-ordered fill'],
    brute: {
      idea: 'Try all (2n-3)!! parenthesizations.',
      time: 'exponential',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'dp[i][j] = min cost to compute the product of matrices i..j. dp[i][i] = 0. For length L = 2..n: for i, j = i+L-1: dp[i][j] = min over k in i..j-1 of dp[i][k] + dp[k+1][j] + dims[i-1]·dims[k]·dims[j]. The stick-cutting twin: dp[i][j] = min over cut k of dp[i][k] + dp[k][j] + (arr[j] - arr[i]).',
      steps: [
        'State: dp over INTERVALS [i, j].',
        'Base: dp[i][i] = 0 (single matrix / no cut).',
        'Transition: choose the split k; cost = left + right + the cost of merging the two results.',
        'Fill order: by interval LENGTH (2, 3, ..., n) — shorter intervals are always ready first.',
        'Answer: dp[1][n] (or dp[0][n-1] for the stick).'
      ],
      time: 'O(n³)',
      space: 'O(n²)'
    },
    dry: [
      'dims = [3, 1, 10, 2, 2] → A(3×1), B(1×10), C(10×2), D(2×2)',
      'Length 2: dp[1][2] = 3·1·10 = 30; dp[2][3] = 1·10·2 = 20; dp[3][4] = 10·2·2 = 40',
      'Length 3: dp[1][3]: k=1: 20 + 3·1·2 = 26; k=2: 30 + 3·10·2 = 90 → 26',
      'Length 3: dp[2][4]: k=2: 40 + 1·10·2 = 60; k=3: 20 + 1·2·2 = 24 → 24',
      'Length 4: dp[1][4]: k=1: 24 + 3·1·2 = 30; k=2: 26 + 3·10·2 = 86; k=3: 30 + 3·2·2 = 42 → 30',
      'Answer: 30 — best order: (A(BC))D'
    ],
    hints: [
      'The choice is always "where to split" — after the split, the two halves are INDEPENDENT subproblems (that is what makes it DP).',
      'Why fill by interval length? (dp[i][j] needs dp[i][k] and dp[k+1][j] — strictly shorter intervals — so length-ordered fill guarantees they exist).',
      'The merge cost: multiplying (a×b)·(b×c) costs a·b·c — track the dimension array so you can price any split.'
    ],
    code: {
      javascript: `// MCM: dims[i-1] x dims[i] is the i-th matrix
function matrixChain(dims) {
  const n = dims.length - 1;
  const dp = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));
  for (let len = 2; len <= n; len++) {
    for (let i = 1; i + len - 1 <= n; i++) {
      const j = i + len - 1;
      dp[i][j] = Infinity;
      for (let k = i; k < j; k++) {
        const cost = dp[i][k] + dp[k + 1][j] + dims[i - 1] * dims[k] * dims[j];
        dp[i][j] = Math.min(dp[i][j], cost);
      }
    }
  }
  return dp[1][n];
}

// The linked problem — Minimum Cost to Cut a Stick (same interval DP):
function minCostCut(cost, cuts) {
  const arr = [0, ...cuts.sort((a, b) => a - b), cost];
  const n = arr.length;
  const dp = Array.from({ length: n }, () => new Array(n).fill(0));
  for (let len = 2; len < n; len++) {
    for (let i = 0; i + len < n; i++) {
      const j = i + len;
      dp[i][j] = Infinity;
      for (let k = i + 1; k < j; k++) {
        dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k][j] + arr[j] - arr[i]);
      }
    }
  }
  return dp[0][n - 1];
}`,
      python: `# MCM: dims[i-1] x dims[i] is the i-th matrix
def matrixChain(dims):
    n = len(dims) - 1
    dp = [[0] * (n + 1) for _ in range(n + 1)]
    for length in range(2, n + 1):
        for i in range(1, n - length + 2):
            j = i + length - 1
            dp[i][j] = float('inf')
            for k in range(i, j):
                cost = dp[i][k] + dp[k + 1][j] + dims[i - 1] * dims[k] * dims[j]
                dp[i][j] = min(dp[i][j], cost)
    return dp[1][n]

# Minimum Cost to Cut a Stick (same interval DP)
def minCostCut(cost, cuts):
    arr = [0] + sorted(cuts) + [cost]
    n = len(arr)
    dp = [[0] * n for _ in range(n)]
    for length in range(2, n):
        for i in range(n - length):
            j = i + length
            dp[i][j] = float('inf')
            for k in range(i + 1, j):
                dp[i][j] = min(dp[i][j], dp[i][k] + dp[k][j] + arr[j] - arr[i])
    return dp[0][n - 1]`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'dp-10',
    slug: 'longest-common-subsequence',
    title: 'Longest Common Subsequence',
    pattern: 'dp',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/longest-common-subsequence/',
    extra: [],
    summary:
      'Given two strings, return the length of their longest common subsequence (a subsequence keeps order, not necessarily contiguous).',
    asked: 'The max length of a sequence appearing in both strings in order.',
    why:
      'The classic 2D string DP: compare the ENDS. If text1[i-1] === text2[j-1], the characters match and join a common subsequence: dp[i][j] = dp[i-1][j-1] + 1. If not, the best skips one of them: dp[i][j] = max(dp[i-1][j], dp[i][j-1]).',
    clues: ['two sequences', 'order not contiguity', 'compare the ends', '2D table'],
    brute: {
      idea: 'Enumerate all subsequences of the shorter string (2ⁿ) and test membership in the other.',
      time: 'O(2ⁿ · m)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'dp[i][j] = LCS length of text1[0..i) and text2[0..j). If chars match: dp[i-1][j-1] + 1. Else max(dp[i-1][j], dp[i][j-1]). Base: any dp[0][j] / dp[i][0] = 0. Answer dp[n][m].',
      steps: [
        'State: dp[i][j] over prefixes of both strings.',
        'Base: empty prefix → 0.',
        'Match: diagonal + 1.',
        'Mismatch: best of skip-in-text1 (up) or skip-in-text2 (left).',
        'Answer: bottom-right cell.'
      ],
      time: 'O(n·m)',
      space: 'O(n·m) → O(min(n,m)) with two rows'
    },
    dry: [
      'text1 = "abcde", text2 = "ace"',
      'Table (rows a..e, cols a,c,e):',
      'row a: [0,1,1,1]; row b: [0,1,1,1]; row c: [0,1,2,2]; row d: [0,1,2,2]; row e: [0,1,2,3]',
      'Answer: 3 ("ace")'
    ],
    hints: [
      'Focus on the LAST characters of the two prefixes — what are the cases? (match / no match)',
      'A match "earns" a diagonal step + 1; a mismatch throws away one character (up or left — take the better).',
      'The answer cell is always the full-prefix corner dp[n][m].'
    ],
    code: {
      javascript: `function longestCommonSubsequence(text1, text2) {
  const n = text1.length, m = text2.length;
  const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[n][m];
}`,
      python: `def longestCommonSubsequence(text1, text2):
    n, m = len(text1), len(text2)
    dp = [[0] * (m + 1) for _ in range(n + 1)]
    for i in range(1, n + 1):
        for j in range(1, m + 1):
            if text1[i - 1] == text2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
    return dp[n][m]`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'dp-11',
    slug: 'lis-tabulation',
    title: 'LIS — Tabulation',
    pattern: 'dp',
    difficulty: 'Medium',
    platform: null,
    url: null,
    extra: [],
    summary:
      'Episode 11: Longest Increasing Subsequence with the tabulation lens — dp[i] = length of the longest increasing subsequence ENDING at index i, filled left to right; plus the O(n log n) patience-sorted optimization.',
    asked: 'The length of the longest strictly increasing subsequence, table-first.',
    why:
      'Two flavors of LIS state: "LIS ending at i" (dp[i] = 1 + max of dp[j] for j < i with nums[j] < nums[i]) — tabulates in O(n²) — and the clever O(n log n) version that maintains the smallest possible tail for each length (patience sorting: binary search the first tail ≥ x, replace or append). This episode is the tabulation of the first, with the second as the follow-up.',
    clues: ['increasing subsequence', 'ending at i', 'O(n²) table', 'tails + binary search'],
    brute: {
      idea: 'Recursion over subsequences (exponential).',
      time: 'O(2ⁿ)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'dp[i] = 1 + max(dp[j]) over all j < i with nums[j] < nums[i] (else 1). Answer = max over all dp[i]. O(n²). Optimization: tails[L] = smallest tail value of any increasing subsequence of length L+1; for each x, binary-search the first tails[k] >= x: replace it (or append if x is the largest) → O(n log n).',
      steps: [
        'State: dp[i] = LIS length ending at i.',
        'Base: dp[i] = 1 for all i (a single element).',
        'Transition: for each j < i: if nums[j] < nums[i]: dp[i] = max(dp[i], dp[j] + 1).',
        'Answer: max(dp).',
        'O(n log n): keep tails[]; for x in nums: pos = lower_bound(tails, x); tails[pos] = x (extend if pos === tails.length).'
      ],
      time: 'O(n²) tabulation / O(n log n) optimized',
      space: 'O(n)'
    },
    dry: [
      'nums = [10, 9, 2, 5, 3, 7, 101, 18]',
      'dp: i0(10)=1; i1(9)=1; i2(2)=1; i3(5)=2 (after 2); i4(3)=2 (after 2); i5(7)=3 (2,5? → 2,3,7 or 2,5,7); i6(101)=4; i7(18)=4',
      'max = 4 → [2, 3, 7, 101] or [2, 3, 7, 18]',
      'Answer: 4',
      'tails walk: 10 → [10]; 9 → [9]; 2 → [2]; 5 → [2,5]; 3 → [2,3]; 7 → [2,3,7]; 101 → [2,3,7,101]; 18 → [2,3,7,18] → length 4 ✓'
    ],
    hints: [
      '"Ending at i" makes the transition local: to extend a subsequence to i, its previous element must be some earlier j with a smaller value.',
      'The answer is NOT dp[n-1] — it is the MAX over all dp[i] (the LIS can end anywhere).',
      'In the tails array, replacing the first tail ≥ x never DESTROYS a valid subsequence — it just makes future extensions easier (smaller tail = easier to beat).'
    ],
    code: {
      javascript: `// O(n^2) tabulation
function lengthOfLIS(nums) {
  const n = nums.length;
  if (n === 0) return 0;
  const dp = new Array(n).fill(1);
  let best = 1;
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) dp[i] = Math.max(dp[i], dp[j] + 1);
    }
    best = Math.max(best, dp[i]);
  }
  return best;
}

// O(n log n): patience sorting (tails)
function lengthOfLISFast(nums) {
  const tails = [];
  for (const x of nums) {
    let lo = 0, hi = tails.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (tails[mid] < x) lo = mid + 1;
      else hi = mid;
    }
    tails[lo] = x;
  }
  return tails.length;
}`,
      python: `from bisect import bisect_left

# O(n^2) tabulation
def lengthOfLIS(nums):
    n = len(nums)
    if n == 0:
        return 0
    dp = [1] * n
    best = 1
    for i in range(1, n):
        for j in range(i):
            if nums[j] < nums[i]:
                dp[i] = max(dp[i], dp[j] + 1)
        best = max(best, dp[i])
    return best

# O(n log n): patience sorting (tails)
def lengthOfLISFast(nums):
    tails = []
    for x in nums:
        lo, hi = 0, len(tails)
        while lo < hi:
            mid = (lo + hi) // 2
            if tails[mid] < x:
                lo = mid + 1
            else:
                hi = mid
        tails[lo] = x
    return len(tails)`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'dp-12',
    slug: 'rod-cutting',
    title: 'Rod Cutting',
    pattern: 'dp',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/tiling-a-rectangle-with-the-fewest-squares/',
    extra: [],
    summary:
      'A rod of length n and a price list: price[i] for a piece of length i+1. Cut the rod (or not) to maximize the selling price. (The linked tiling problem is the same "split the length, recurse on the parts" structure.)',
    asked: 'The maximum total price from any cut pattern.',
    why:
      'Consider the FIRST piece you cut off: if it has length i, you earn price[i] and face the same problem on the remaining length n - i. dp[len] = max over i in 1..len of (price[i-1] + dp[len - i]). It is unbounded knapsack in disguise (pieces of each length are unlimited).',
    clues: ['cut a length', 'price per length', 'first-piece choice', 'unbounded pieces'],
    brute: {
      idea: 'Recursion over all cut patterns (exponential without memo).',
      time: 'O(2ⁿ)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'dp[0] = 0; for len = 1..n: dp[len] = max over i in 1..len of (price[i-1] + dp[len - i]). Answer dp[n].',
      steps: [
        'State: dp[len] = best price for a rod of length len.',
        'Base: dp[0] = 0.',
        'Transition: choose the first piece length i (1..len): earn price[i-1], add the best for the rest.',
        'Fill len increasing; answer dp[n].',
        'Equivalently: unbounded knapsack over item types (length, price).'
      ],
      time: 'O(n²)',
      space: 'O(n)'
    },
    dry: [
      'price = [1, 5, 8, 9, 10, 17, 17, 20], n = 8',
      'dp[1] = 1; dp[2] = 5; dp[3] = 8',
      'dp[4]: max(9, 1+8, 5+5, 8+1) = 10 (5 + 5)',
      'dp[5]: max(10, 1+10, 5+8, 8+5, 9+1) = 13 (5 + 8)',
      'dp[6]: max(17, 8+8, 5+10, ...) = 17 (17, or 8+9, or 10+5+...)',
      'dp[7]: max(17, 5+13, 8+10, ...) = 18 (5 + 13 or 8 + 10 or 17 + 1)',
      'dp[8]: max(20, 5+17, 8+13, 9+10, ...) = 22 (5 + 17 → pieces of length 2 and 6)',
      'Answer: 22'
    ],
    hints: [
      'Look at just the FIRST cut: it splits the problem into "price of this piece" + "the same problem on the rest".',
      'Pieces are UNLIMITED (any number of length i) — that is why dp[len - i] may itself use length i again.',
      'This is unbounded knapsack: "item types" = lengths, "value" = price, "weight" = length, "capacity" = n.'
    ],
    code: {
      javascript: `function cutRod(prices, n) {
  const dp = new Array(n + 1).fill(0);
  for (let len = 1; len <= n; len++) {
    for (let i = 1; i <= len; i++) {
      dp[len] = Math.max(dp[len], prices[i - 1] + dp[len - i]);
    }
  }
  return dp[n];
}

// Unbounded-knapsack framing (same answer):
function cutRodKnapsack(prices, n) {
  const dp = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {        // item type = length i+1
    for (let cap = i + 1; cap <= n; cap++) { // low-to-high: reuse allowed
      dp[cap] = Math.max(dp[cap], dp[cap - (i + 1)] + prices[i]);
    }
  }
  return dp[n];
}`,
      python: `def cutRod(prices, n):
    dp = [0] * (n + 1)
    for length in range(1, n + 1):
        for i in range(1, length + 1):
            dp[length] = max(dp[length], prices[i - 1] + dp[length - i])
    return dp[n]`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'dp-13',
    slug: 'coin-change',
    title: 'Coin Change 2',
    pattern: 'dp',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/coin-change/',
    extra: [],
    summary:
      'Given coin denominations and an amount, find the fewest number of coins that make up the amount (or -1 if impossible). The "2" in the title refers to the counting variant (number of combinations) — both share the same DP skeleton; the main solution below matches the linked problem (minimum coins).',
    asked: 'Minimum coin count for the exact amount.',
    why:
      'With a last coin c, the amount becomes amount - c: minCoins[a] = 1 + min over coins c ≤ a of minCoins[a - c]. Base minCoins[0] = 0. Fill the table increasing. (Counting variant: count[a] = sum of count[a - c] — same loop, sum instead of min, coins on the outside to avoid order-duplicates.)',
    clues: ['exact amount', 'min coins', 'last coin choice', 'counting twin'],
    brute: {
      idea: 'Recursion trying every first coin (exponential without memo).',
      time: 'O(k^amount) naive',
      space: 'O(amount)'
    },
    optimal: {
      idea:
        'dp[a] = min coins for amount a; dp[0] = 0; dp[a] = min over c ≤ a of (dp[a - c] + 1). If dp[amount] is still ∞ → -1. Counting variant: for each coin c (outer loop): for a = c..amount: count[a] += count[a - c].',
      steps: [
        'State: dp[a] over amounts 0..amount.',
        'Base: dp[0] = 0 (zero coins make zero).',
        'Transition: last coin c → dp[a] = min(dp[a], dp[a - c] + 1).',
        'Fill a = 1..amount.',
        'Answer: dp[amount] (∞ → -1).',
        'Counting: coins outer, amounts inner; count[a] += count[a - c].'
      ],
      time: 'O(amount · #coins)',
      space: 'O(amount)'
    },
    dry: [
      'coins = [1, 2, 5], amount = 11',
      'dp[0]=0; dp[1]=1; dp[2]=1; dp[3]=2; dp[4]=2; dp[5]=1; dp[6]=2; dp[7]=2; dp[8]=3; dp[9]=3; dp[10]=2; dp[11]=3',
      'Answer: 3 (5 + 5 + 1)',
      'coins = [2], amount = 3 → dp[3] stays ∞ → Answer: -1',
      'Counting variant check: [1,2,5], amount = 5 → combinations {5},{2,2,1},{2,1,1,1},{1×5} → 4 ✓'
    ],
    hints: [
      'Think in terms of the LAST coin used — removing it leaves a smaller, identical subproblem.',
      'dp[0] = 0 is what makes "exactly" work; without it, every sum is off by one.',
      'In the counting variant, why iterate COINS on the outside? (fixing the coin set before the amount makes each combination count once, in coin-type order — order matters for counting, not for min.)'
    ],
    code: {
      javascript: `// Minimum coins (linked problem)
function coinChange(coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let a = 1; a <= amount; a++) {
    for (const c of coins) {
      if (c <= a && dp[a - c] + 1 < dp[a]) dp[a] = dp[a - c] + 1;
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
}

// Counting variant (number of combinations — the "Coin Change 2" idea)
function change(coins, amount) {
  const count = new Array(amount + 1).fill(0);
  count[0] = 1;
  for (const c of coins) {
    for (let a = c; a <= amount; a++) count[a] += count[a - c];
  }
  return count[amount];
}`,
      python: `# Minimum coins (linked problem)
def coinChange(coins, amount):
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    for a in range(1, amount + 1):
        for c in coins:
            if c <= a and dp[a - c] + 1 < dp[a]:
                dp[a] = dp[a - c] + 1
    return -1 if dp[amount] == float('inf') else dp[amount]

# Counting variant (number of combinations)
def change(coins, amount):
    count = [0] * (amount + 1)
    count[0] = 1
    for c in coins:
        for a in range(c, amount + 1):
            count[a] += count[a - c]
    return count[amount]`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'dp-14',
    slug: 'stock-i',
    title: 'Best Time to Buy and Sell Stock I',
    pattern: 'dp',
    difficulty: 'Easy',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/',
    extra: [],
    summary:
      'One transaction only (buy then sell, at most one pair). Find the maximum profit from a single buy/sell pair, or 0 if no profit is possible.',
    asked: 'Max (sell price - buy price) with sell after buy; 0 if the best is to do nothing.',
    why:
      'At day i, if you SELL today, your profit is prices[i] minus the cheapest buy BEFORE today. So one pass: track minSoFar and best = max(best, prices[i] - minSoFar). DP view: hold[i] = best value while holding a stock after day i; cash[i] = best value holding nothing — two states, one transition each.',
    clues: ['one buy, one sell', 'sell after buy', 'min so far', 'hold/cash states'],
    brute: {
      idea: 'Check every buy/sell pair (i < j).',
      time: 'O(n²)',
      space: 'O(1)'
    },
    optimal: {
      idea:
        'One pass: minSoFar = min(minSoFar, p); best = max(best, p - minSoFar). DP form: hold = max(hold, -p) [buy today or keep holding]; cash = max(cash, hold_prev + p) [sell today or wait]; answer cash.',
      steps: [
        'minSoFar = ∞, best = 0.',
        'For each price p: minSoFar = min(minSoFar, p); best = max(best, p - minSoFar).',
        'Return best (0 = do nothing).',
        'DP twin: two states (hold/cash) updated left to right — the seed of the whole stock series.'
      ],
      time: 'O(n)',
      space: 'O(1)'
    },
    dry: [
      'prices = [7, 1, 5, 3, 6, 4]',
      'p=7: min 7, best 0; p=1: min 1, best 0; p=5: min 1, best 4; p=3: best 4; p=6: best 5; p=4: best 5',
      'Answer: 5 (buy 1, sell 6)',
      'prices = [7, 6, 4, 3, 1] → best stays 0 → Answer: 0'
    ],
    hints: [
      'If you sell on day i, what matters about all earlier days? (the cheapest one)',
      'You cannot sell before you buy — that is why the min is tracked BEFORE evaluating today\'s sell.',
      'The two-state DP (hold/cash) generalizes to "at most k transactions" — remember it.'
    ],
    code: {
      javascript: `function maxProfit(prices) {
  let minSoFar = Infinity, best = 0;
  for (const p of prices) {
    minSoFar = Math.min(minSoFar, p);
    best = Math.max(best, p - minSoFar);
  }
  return best;
}

// Two-state DP (hold / cash):
function maxProfitDP(prices) {
  let hold = -Infinity, cash = 0;
  for (const p of prices) {
    const prevHold = hold;
    hold = Math.max(hold, -p);       // buy today (or keep holding)
    cash = Math.max(cash, prevHold + p); // sell today (or wait)
  }
  return cash;
}`,
      python: `def maxProfit(prices):
    min_so_far = float('inf')
    best = 0
    for p in prices:
        min_so_far = min(min_so_far, p)
        best = max(best, p - min_so_far)
    return best`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'dp-15',
    slug: 'stock-ii',
    title: 'Best Time to Buy and Sell Stock II',
    pattern: 'dp',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/',
    extra: [],
    summary:
      'Unlimited transactions (but you must sell before buying again — no overlapping). Maximize total profit.',
    asked: 'The sum of profits over any number of buy/sell pairs.',
    why:
      'With unlimited pairs, you should NEVER skip an upward move: capture every rise. That is the greedy insight — sum all positive day-to-day differences. The DP says the same thing: hold/cash states, but now cash can feed the NEXT buy (unlimited rounds), so hold = max(hold, cash - p).',
    clues: ['unlimited transactions', 'capture every rise', 'sum positive diffs', 'cash → next hold'],
    brute: {
      idea: 'Enumerate transaction subsets (exponential).',
      time: 'O(2ⁿ)',
      space: 'O(1)'
    },
    optimal: {
      idea:
        'Greedy: profit = sum over i of max(0, prices[i] - prices[i-1]). DP: hold = max(hold, cash - p); cash = max(cash, hold_prev + p) — the only change from Stock I is that the buy step reads CASH (a completed transaction), not just "nothing".',
      steps: [
        'Each rise p[i] - p[i-1] > 0 can be captured as its own buy/sell pair.',
        'Sum the positive differences.',
        'DP twin: hold/cash with unlimited transitions between them.',
        'Answer: total captured (greedy) or cash (DP).'
      ],
      time: 'O(n)',
      space: 'O(1)'
    },
    dry: [
      'prices = [7, 1, 5, 3, 6, 4]',
      'diffs: -6, +4, -2, +3, -2 → positives 4 + 3 = 7',
      'Pairs: buy 1 sell 5 (4), buy 3 sell 6 (3)',
      'Answer: 7',
      'prices = [1, 2, 3, 4, 5] → 1+1+1+1 = 4 (buy 1, sell 5 — same result, different framing)'
    ],
    hints: [
      'Any rise A→B can be decomposed into daily rises — does summing the daily positives ever OVERCOUNT? (no: buying at each dip and selling at each peak is exactly the decomposition)',
      'In the DP, which state does a NEW buy come from? (cash — you are only allowed to buy after selling).',
      'Stock I + "unlimited rounds" = Stock II: change one input to the transition.'
    ],
    code: {
      javascript: `function maxProfit(prices) {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) profit += prices[i] - prices[i - 1];
  }
  return profit;
}

// Two-state DP, unlimited rounds:
function maxProfitDP(prices) {
  let hold = -Infinity, cash = 0;
  for (const p of prices) {
    const prevHold = hold;
    hold = Math.max(hold, cash - p);  // buy using cash from any finished transaction
    cash = Math.max(cash, prevHold + p);
  }
  return cash;
}`,
      python: `def maxProfit(prices):
    profit = 0
    for i in range(1, len(prices)):
        if prices[i] > prices[i - 1]:
            profit += prices[i] - prices[i - 1]
    return profit`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'dp-16',
    slug: 'stock-iii',
    title: 'Best Time to Buy and Sell Stock III',
    pattern: 'dp',
    difficulty: 'Hard',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/',
    extra: [],
    summary:
      'At most TWO transactions (four actions: buy1, sell1, buy2, sell2 in order). Maximize profit.',
    asked: 'Best profit with ≤ 2 buy/sell pairs.',
    why:
      'The state machine gets a counter: track the best value after each of the four actions. buy1 = max(buy1, -p); sell1 = max(sell1, buy1_prev + p); buy2 = max(buy2, sell1_prev - p); sell2 = max(sell2, buy2_prev + p). Each day, update all four (using the PREVIOUS day\'s values). The answer is sell2 — "at most 2" is automatic, since states can stay at -∞/0 (do nothing).',
    clues: ['two transactions', 'state machine', 'four actions', 'sequential constraints'],
    brute: {
      idea: 'Brute-force all pairs of transactions: O(n²) (buy1, sell1, buy2, sell2 positions).',
      time: 'O(n²)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'Four scalar states updated per day (buy1 ≤ sell1 ≤ buy2 ≤ sell2 enforced by the transition order). Answer: sell2.',
      steps: [
        'buy1 = -∞, sell1 = 0, buy2 = -∞, sell2 = 0.',
        'For each price p (using previous values):',
        'buy1 = max(buy1, -p).',
        'sell1 = max(sell1, buy1 + p) [with buy1 from BEFORE this day].',
        'buy2 = max(buy2, sell1 - p) [sell1 from before].',
        'sell2 = max(sell2, buy2 + p) [buy2 from before].',
        'Answer: sell2.'
      ],
      time: 'O(n)',
      space: 'O(1)'
    },
    dry: [
      'prices = [3, 3, 5, 0, 0, 3, 1, 4]',
      'Day 1 (3): buy1 = -3; sell1 = 0; buy2 = -∞; sell2 = 0',
      'Day 2 (3): buy1 = -3; sell1 = 0; buy2 = 0 - 3 = -3; sell2 = 0',
      'Day 3 (5): sell1 = -3 + 5 = 2; buy2 = max(-3, 0 - 5) = -3; sell2 = -3 + 5 = 2',
      'Day 4 (0): sell1 = 2; buy2 = max(-3, 2 - 0) = 2; sell2 = max(2, -3 + 0) = 2',
      'Day 5 (0): no change (buy2 = 2, sell2 = 2)',
      'Day 6 (3): sell2 = max(2, 2 + 3) = 5',
      'Day 7 (1): sell2 stays 5',
      'Day 8 (4): sell2 = max(5, 2 + 4) = 6',
      'Answer: 6 — two transactions: buy 0 sell 3 (+3), buy 1 sell 4 (+3)'
    ],
    hints: [
      'Each transaction is two states (holding / not-holding) — two transactions = four states in a line: buy1 → sell1 → buy2 → sell2.',
      'Why must updates use the PREVIOUS day\'s values? (buy1 and sell1 on the same day with the new buy1 would be double-counting the same price).',
      'sell1 seeds buy2 — the "at most 2" ordering is enforced by the CHAIN, not by extra logic.'
    ],
    code: {
      javascript: `function maxProfit(prices) {
  let buy1 = -Infinity, sell1 = 0, buy2 = -Infinity, sell2 = 0;
  for (const p of prices) {
    const prevBuy1 = buy1, prevSell1 = sell1, prevBuy2 = buy2;
    buy1 = Math.max(buy1, -p);
    sell1 = Math.max(sell1, prevBuy1 + p);
    buy2 = Math.max(buy2, prevSell1 - p);
    sell2 = Math.max(sell2, prevBuy2 + p);
  }
  return sell2;
}`,
      python: `def maxProfit(prices):
    buy1 = sell1 = buy2 = sell2 = None
    buy1 = float('-inf')
    buy2 = float('-inf')
    sell1 = 0
    sell2 = 0
    for p in prices:
        prev_buy1, prev_sell1, prev_buy2 = buy1, sell1, buy2
        buy1 = max(buy1, -p)
        sell1 = max(sell1, prev_buy1 + p)
        buy2 = max(buy2, prev_sell1 - p)
        sell2 = max(sell2, prev_buy2 + p)
    return sell2`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'dp-17',
    slug: 'stock-iv',
    title: 'Best Time to Buy and Sell Stock IV',
    pattern: 'dp',
    difficulty: 'Hard',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/',
    extra: [],
    summary:
      'At most k transactions. Maximize profit. (Generalizes I/II/III; collapses to the unlimited case when k is large enough.)',
    asked: 'Best profit with at most k buy/sell pairs.',
    why:
      'The state machine scales: 2k states (buy_t, sell_t for t = 1..k), each chain into the next: buy_t = max(buy_t, sell_{t-1} - p); sell_t = max(sell_t, buy_t - 1 + p). If k ≥ n/2, unlimited transactions are possible → fall back to Stock II (sum positive diffs) and save the O(kn) loop.',
    clues: ['k transactions', '2k-state chain', 'collapse when k is big', 'general pattern'],
    brute: {
      idea: 'DP over (day, transactions) with explicit action choices — O(k·n) is already near-optimal.',
      time: 'O(k·n)',
      space: 'O(k·n)'
    },
    optimal: {
      idea:
        'If k >= n/2: Stock II greedy. Else: arrays buy[t], sell[t] (t = 1..k), updated per day with previous-day values; answer sell[k]. O(k·n) time, O(k) space.',
      steps: [
        'If 2k >= n: return sum of positive diffs (unlimited case).',
        'buy[t] = -∞, sell[t] = 0 for all t.',
        'For each price p: for t = 1..k (using previous values):',
        'buy[t] = max(buy[t], (t === 1 ? 0 : sell[t-1]) - p).',
        'sell[t] = max(sell[t], buy[t] + p) [previous buy[t]].',
        'Answer: sell[k].'
      ],
      time: 'O(k·n)',
      space: 'O(k)'
    },
    dry: [
      'prices = [2, 4, 1], k = 1 → best pair: buy 2 sell 4 → Answer: 2',
      'prices = [3, 2, 6, 5, 0, 3], k = 2 → pairs: (2→6 = 4) + (0→3 = 3) → Answer: 7',
      'prices = [1, 2, 3, 4, 5], k = 2 → n/2 = 2 → k >= n/2 → unlimited: 4 → Answer: 4',
      'k = 2 covers Stock III exactly; k = 1 covers Stock I — one algorithm, three problems.'
    ],
    hints: [
      'The t-th buy can only be funded by the t-th-1 sell — the chain is the ordering constraint, no extra logic needed.',
      'When k ≥ n/2, even alternating every day is feasible — the problem IS Stock II. Detect it and avoid the k loop.',
      't loops on the OUTSIDE per day (or inside — the key is using previous-day values so the same price is not both a sell and a buy).'
    ],
    code: {
      javascript: `function maxProfit(k, prices) {
  const n = prices.length;
  if (n === 0) return 0;
  if (k >= n / 2) {
    let profit = 0;
    for (let i = 1; i < n; i++) {
      if (prices[i] > prices[i - 1]) profit += prices[i] - prices[i - 1];
    }
    return profit;
  }
  const buy = new Array(k + 1).fill(-Infinity);
  const sell = new Array(k + 1).fill(0);
  for (const p of prices) {
    const prevBuy = [...buy], prevSell = [...sell];
    for (let t = 1; t <= k; t++) {
      buy[t] = Math.max(buy[t], (t === 1 ? 0 : prevSell[t - 1]) - p);
      sell[t] = Math.max(sell[t], prevBuy[t] + p);
    }
  }
  return sell[k];
}`,
      python: `def maxProfit(k, prices):
    n = len(prices)
    if n == 0:
        return 0
    if k >= n // 2:
        return sum(prices[i] - prices[i - 1] for i in range(1, n) if prices[i] > prices[i - 1])
    buy = [float('-inf')] * (k + 1)
    sell = [0] * (k + 1)
    for p in prices:
        prev_buy, prev_sell = buy[:], sell[:]
        for t in range(1, k + 1):
            buy[t] = max(buy[t], (0 if t == 1 else prev_sell[t - 1]) - p)
            sell[t] = max(sell[t], prev_buy[t] + p)
    return sell[k]`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'dp-18',
    slug: 'longest-increasing-subsequence',
    title: 'Longest Increasing Subsequence',
    pattern: 'dp',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/longest-increasing-subsequence/',
    extra: [],
    summary:
      'Given an integer array, return the length of the longest strictly increasing subsequence.',
    asked: 'The LIS length — the DP workhorse of "sequence with an ordering constraint".',
    why:
      'dp[i] = LIS length ending at i: extend any earlier smaller element (dp[j] + 1 for j < i, nums[j] < nums[i]). O(n²). The famous O(n log n) upgrade maintains tails[length] = smallest possible tail, using binary search per element. (You met its tabulation in the Ep11 entry — this is the standard problem page.)',
    clues: ['strictly increasing', 'subsequence', 'O(n²) DP', 'O(n log n) tails'],
    brute: {
      idea: 'Recursion over subsets (exponential).',
      time: 'O(2ⁿ)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'O(n²): dp[i] = 1 + max(dp[j]) over j < i, nums[j] < nums[i]; answer max(dp). O(n log n): tails[] via lower_bound replacement.',
      steps: [
        'dp[i] = 1 initially; for j < i: if nums[j] < nums[i]: dp[i] = max(dp[i], dp[j] + 1).',
        'Answer: max over dp.',
        'Fast: tails = []; for x: pos = first index with tails[pos] >= x; tails[pos] = x (append if none).',
        'Answer: tails.length.'
      ],
      time: 'O(n²) / O(n log n)',
      space: 'O(n)'
    },
    dry: [
      'nums = [10, 9, 2, 5, 3, 7, 101, 18] → dp = [1,1,1,2,2,3,4,4] → max 4',
      'Example LIS: [2, 3, 7, 101] or [2, 3, 7, 18]',
      'nums = [0, 1, 0, 3, 2, 3] → dp = [1,2,1,3,3,4] → Answer: 4 ([0,1,2,3])',
      'tails: 0→[0], 1→[0,1], 0→[0,1], 3→[0,1,3], 2→[0,1,2], 3→[0,1,2,3] → 4 ✓'
    ],
    hints: [
      '"Ending at i" makes each dp[i] depend only on EARLIER, SMALLER elements — the ordering constraint lives in the j-loop condition.',
      'The answer is the max over all dp[i], not the last cell.',
      'tails[] is not a subsequence — it tracks the BEST (smallest) tail for each length, which is what lets future elements extend.'
    ],
    code: {
      javascript: `function lengthOfLIS(nums) {
  const n = nums.length;
  if (n === 0) return 0;
  const dp = new Array(n).fill(1);
  let best = 1;
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) dp[i] = Math.max(dp[i], dp[j] + 1);
    }
    best = Math.max(best, dp[i]);
  }
  return best;
}

// O(n log n)
function lengthOfLISFast(nums) {
  const tails = [];
  for (const x of nums) {
    let lo = 0, hi = tails.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (tails[mid] < x) lo = mid + 1;
      else hi = mid;
    }
    tails[lo] = x;
  }
  return tails.length;
}`,
      python: `def lengthOfLIS(nums):
    n = len(nums)
    if n == 0:
        return 0
    dp = [1] * n
    best = 1
    for i in range(1, n):
        for j in range(i):
            if nums[j] < nums[i]:
                dp[i] = max(dp[i], dp[j] + 1)
        best = max(best, dp[i])
    return best

from bisect import bisect_left
def lengthOfLISFast(nums):
    tails = []
    for x in nums:
        pos = bisect_left(tails, x)
        tails[pos] = x
    return len(tails)`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'dp-19',
    slug: 'dp-revision',
    title: 'Revision (DP)',
    pattern: 'dp',
    difficulty: 'Medium',
    platform: null,
    url: null,
    extra: [],
    summary:
      'Episode 16: DP revision — the checklist that turns any new problem into state + transition + base + direction, a map of where each DP problem you have done lives, and the standard upgrades (rolling arrays, O(n log n) tails, binary search over x).',
    asked: 'A revision pass: recognize the DP family in 30 seconds and write the table without fear.',
    why:
      'Revision is pattern recognition under time pressure. The whole unit compresses to a decision tree: is the state a COUNT (ways) or an EXTREMUM (min/max)? Is the choice a SPLIT (interval), a SEQUENCE (prefix), a SET (subset/knapsack), or a SEQUENTIAL DECISION (state machine/stocks)? Each family has a signature transition — the list below is your map.',
    clues: ['checklist', 'family map', 'upgrades', '30-second recognition'],
    brute: {
      idea: 'Re-derive each problem from scratch (the pre-revision state).',
      time: 'varies',
      space: 'varies'
    },
    optimal: {
      idea:
        'The 5-line checklist: (1) State — what is dp[·] the answer for? (2) Transition — the last decision, written over smaller dp. (3) Base — the cells you know. (4) Direction — fill order / recursion. (5) Answer — which cell. Then the family map and upgrades.',
      steps: [
        'COUNT vs EXTREMUM: ways (sum) vs best (min/max) — the operator in the transition tells you the family.',
        'Prefix DPs: climb stairs, min cost stairs, fib, coin change, rod cutting — dp[i] over the first i / amount i.',
        '2D prefix/string DPs: LCS (match → diagonal + 1, mismatch → up/left), grid DPs (up/left).',
        'Set/knapsack DPs: 0/1 knapsack (skip/take, i-1 row), unbounded (same row, low-to-high), egg dropping (min-max split).',
        'Interval DPs: MCM / stick cutting (split k, fill by length).',
        'State-machine DPs: stocks I/II/III/IV (hold/cash chains), counting variants (coins on the outside).',
        'Sequence-structure DPs: LIS (ending-at-i; tails + binary search), egg-drop row (binary search over x).',
        'Upgrades to name-drop: rolling arrays (one row), O(n log n) tails, binary search over the split, k-collapse (k ≥ n/2 → unlimited).'
      ],
      time: 'recognition: O(1) ; any problem: its family cost',
      space: '—'
    },
    dry: [
      'Quick-sort the unit: [7,1,5,3,6,4] stock I → one min-soFar pass (5)',
      'climb 5 → fib rolling (8)',
      'knapsack W=4 items (1,6)(2,10)(3,12) → 1D row right-to-left (18)',
      'LIS [10,9,2,5,3,7,101,18] → dp ending-at-i (4) or tails (4)',
      'MCM dims [3,1,10,2,2] → interval length fill (30)',
      'egg 2/10 → min-max over x (4)',
      'coins [1,2,5] 11 → min coins (3) / combinations (4)'
    ],
    hints: [
      'If you cannot name the STATE, do not write code — the state is 80% of the problem.',
      'The transition is a sentence: "the last decision was ___ , and the rest is dp[·]" — write that sentence first.',
      'When stuck on a new problem, ask: "which family\'s signature does the last decision have?" — prefix, 2D, set, interval, or state machine.'
    ],
    code: {
      javascript: `// The unit in 60 lines — the five DPs you must be able to write from memory:

// 1. Prefix (counting): climb stairs
function climbStairs(n) {
  if (n <= 2) return n;
  let a = 1, b = 2;
  for (let i = 3; i <= n; i++) [a, b] = [b, a + b];
  return b;
}

// 2. Set/knapsack (0/1, 1D):
function knapsack(W, wt, val) {
  const dp = new Array(W + 1).fill(0);
  for (let i = 0; i < wt.length; i++)
    for (let w = W; w >= wt[i]; w--)
      dp[w] = Math.max(dp[w], val[i] + dp[w - wt[i]]);
  return dp[W];
}

// 3. 2D strings (LCS):
function lcs(a, b) {
  const dp = Array.from({ length: a.length + 1 }, () => new Array(b.length + 1).fill(0));
  for (let i = 1; i <= a.length; i++)
    for (let j = 1; j <= b.length; j++)
      dp[i][j] = a[i - 1] === b[j - 1] ? dp[i - 1][j - 1] + 1 : Math.max(dp[i - 1][j], dp[i][j - 1]);
  return dp[a.length][b.length];
}

// 4. Interval (MCM):
function mcm(dims) {
  const n = dims.length - 1;
  const dp = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));
  for (let len = 2; len <= n; len++)
    for (let i = 1; i + len - 1 <= n; i++) {
      const j = i + len - 1;
      dp[i][j] = Infinity;
      for (let k = i; k < j; k++)
        dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k + 1][j] + dims[i - 1] * dims[k] * dims[j]);
    }
  return dp[1][n];
}

// 5. State machine (stocks, k transactions):
function stocks(k, prices) {
  if (k >= prices.length / 2)
    return prices.reduce((s, p, i, arr) => s + (i ? Math.max(0, p - arr[i - 1]) : 0), 0);
  const buy = new Array(k + 1).fill(-Infinity), sell = new Array(k + 1).fill(0);
  for (const p of prices) {
    const pb = [...buy], ps = [...sell];
    for (let t = 1; t <= k; t++) {
      buy[t] = Math.max(buy[t], (t === 1 ? 0 : ps[t - 1]) - p);
      sell[t] = Math.max(sell[t], pb[t] + p);
    }
  }
  return sell[k];
}`,
      python: `# The unit in ~50 lines — five DPs from memory:

# 1. Prefix: climb stairs
def climbStairs(n):
    a, b = 1, 2
    for _ in range(3, n + 1):
        a, b = b, a + b
    return a if n > 2 else max(1, n)

# 2. Set/knapsack (0/1, 1D)
def knapsack(W, wt, val):
    dp = [0] * (W + 1)
    for i in range(len(wt)):
        for w in range(W, wt[i] - 1, -1):
            dp[w] = max(dp[w], val[i] + dp[w - wt[i]])
    return dp[W]

# 3. 2D strings (LCS)
def lcs(a, b):
    dp = [[0] * (len(b) + 1) for _ in range(len(a) + 1)]
    for i in range(1, len(a) + 1):
        for j in range(1, len(b) + 1):
            dp[i][j] = dp[i - 1][j - 1] + 1 if a[i - 1] == b[j - 1] else max(dp[i - 1][j], dp[i][j - 1])
    return dp[len(a)][len(b)]

# 4. Interval (MCM)
def mcm(dims):
    n = len(dims) - 1
    dp = [[0] * (n + 1) for _ in range(n + 1)]
    for length in range(2, n + 1):
        for i in range(1, n - length + 2):
            j = i + length - 1
            dp[i][j] = min(
                dp[i][k] + dp[k + 1][j] + dims[i - 1] * dims[k] * dims[j]
                for k in range(i, j)
            )
    return dp[1][n]

# 5. State machine (stocks, k transactions)
def stocks(k, prices):
    if k >= len(prices) // 2:
        return sum(max(0, prices[i] - prices[i - 1]) for i in range(1, len(prices)))
    buy = [float('-inf')] * (k + 1)
    sell = [0] * (k + 1)
    for p in prices:
        pb, ps = buy[:], sell[:]
        for t in range(1, k + 1):
            buy[t] = max(buy[t], (0 if t == 1 else ps[t - 1]) - p)
            sell[t] = max(sell[t], pb[t] + p)
    return sell[k]`,
      java: '',
      cpp: ''
    }
  }
];
