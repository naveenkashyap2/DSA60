// Pattern: Graphs — exact supplied list (Flood Fill → Number of Connected Components)
// Conventions: adj = adjacency list (array of arrays); grid problems use 2D arrays;
// edge lists are pairs [u, v].
export default [
  {
    id: 'gr-01',
    slug: 'flood-fill',
    title: 'Flood Fill',
    pattern: 'graphs',
    difficulty: 'Easy',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/flood-fill/',
    extra: [],
    summary:
      'Given a 2D image (grid of pixel colors) and a starting pixel, change the color of the connected region (4-directionally) that contains the starting pixel.',
    asked: 'Flood the entire contiguous region of the original starting color with the new color.',
    why:
      'A grid is a graph where each cell links to its 4 neighbors. "Flood" = reach every connected cell: DFS/BFS from the start, repainting as you go. Remember the ORIGINAL color — otherwise the fill eats the whole grid.',
    clues: ['grid', 'connected region', 'repaint', '4 directions'],
    brute: {
      idea: 'Recursion is the natural version; iterative BFS/DFS with a stack/queue avoids deep recursion.',
      time: 'O(n·m)',
      space: 'O(n·m) worst'
    },
    optimal: {
      idea:
        'Save orig = image[sr][sc]. If orig === color, nothing to do. DFS(r, c): out of bounds or image[r][c] !== orig → stop; else set color and recurse to the 4 neighbors.',
      steps: [
        'orig = image[sr][sc]; early exit if orig === color.',
        'f(r, c): bounds check + color check.',
        'Repaint image[r][c] = color BEFORE recursing (that is the "visited" mark).',
        'Recurse up, down, left, right.',
        'Return the image.'
      ],
      time: 'O(n·m)',
      space: 'O(n·m) recursion'
    },
    dry: [
      'image = [[1,1,1],[1,1,0],[1,0,1]], sr=1, sc=1, color=2',
      'orig = 1',
      'f(1,1): paint 2 → neighbors (0,1),(2,1),(1,0),(1,2): (1,2) is 0 → skip; (2,1) is 0 → skip',
      'f(0,1): paint → f(0,0): paint → f(0,2)? no (not a neighbor chain)... all original-1 cells reachable become 2',
      'Result: [[2,2,2],[2,2,0],[2,0,1]]',
      'Answer: the flooded image'
    ],
    hints: [
      'Which cells should NOT be repainted? (cells whose color is NOT the original starting color)',
      'What do you paint each cell with, and when? (the new color, before recursing — that marks it visited)',
      'Moving to a newly-painted cell must be prevented — the color check does that for free.'
    ],
    code: {
      javascript: `function floodFill(image, sr, sc, color) {
  const orig = image[sr][sc];
  if (orig === color) return image;
  const n = image.length, m = image[0].length;
  const f = (r, c) => {
    if (r < 0 || c < 0 || r >= n || c >= m || image[r][c] !== orig) return;
    image[r][c] = color;
    f(r + 1, c);
    f(r - 1, c);
    f(r, c + 1);
    f(r, c - 1);
  };
  f(sr, sc);
  return image;
}`,
      python: `def floodFill(image, sr, sc, color):
    orig = image[sr][sc]
    if orig == color:
        return image
    n, m = len(image), len(image[0])
    def f(r, c):
        if r < 0 or c < 0 or r >= n or c >= m or image[r][c] != orig:
            return
        image[r][c] = color
        f(r + 1, c)
        f(r - 1, c)
        f(r, c + 1)
        f(r, c - 1)
    f(sr, sc)
    return image`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'gr-02',
    slug: 'number-of-islands',
    title: 'Number of Islands',
    pattern: 'graphs',
    difficulty: 'Easy',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/number-of-islands/',
    extra: [],
    summary:
      'Given a 2D grid of "1" (land) and "0" (water), count the number of islands. An island is land connected 4-directionally.',
    asked: 'The number of connected land components.',
    why:
      'Component counting is the parent move of every connected-components problem: scan every cell; when you find unvisited land, that starts ONE new island — DFS/BFS to sink the whole island (mark it visited), then keep scanning.',
    clues: ['count components', 'grid', 'land vs water', 'sinking the island'],
    brute: {
      idea: 'Same algorithm with a separate visited set instead of mutating the grid.',
      time: 'O(n·m)',
      space: 'O(n·m)'
    },
    optimal: {
      idea:
        'For each cell: if it is "1" and not yet counted: count++, and DFS from it turning every connected "1" into "0" (the sink). The scan then never counts the same island twice.',
      steps: [
        'count = 0.',
        'Loop over every cell (r, c).',
        'If grid[r][c] === "1": count++; f(r, c).',
        'f(r, c): out of bounds or "0" → stop; set "0"; recurse to 4 neighbors.',
        'Return count.'
      ],
      time: 'O(n·m)',
      space: 'O(n·m) recursion'
    },
    dry: [
      'grid = ["11110", "11010", "11000", "00000"]',
      'Scan (0,0): land → island #1. DFS sinks its whole component: (0,0),(0,1),(0,2),(1,0),(1,1)',
      'Scan continues: (0,3) is still land → island #2. DFS sinks (0,3) and (1,3)',
      'Every remaining cell is now 0 — the scan ends',
      'Answer: 2'
    ],
    hints: [
      'When you find a new island at cell (r,c), what do you do before moving on? (explore and mark the WHOLE island)',
      'Marking = mutating the grid ("1" → "0") — that doubles as the visited set.',
      'One DFS per NEW island found — the count is the number of times the DFS was triggered.'
    ],
    code: {
      javascript: `function numIslands(grid) {
  const n = grid.length, m = grid[0].length;
  const f = (r, c) => {
    if (r < 0 || c < 0 || r >= n || c >= m || grid[r][c] !== '1') return;
    grid[r][c] = '0';
    f(r + 1, c);
    f(r - 1, c);
    f(r, c + 1);
    f(r, c - 1);
  };
  let count = 0;
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < m; c++) {
      if (grid[r][c] === '1') {
        count++;
        f(r, c);
      }
    }
  }
  return count;
}`,
      python: `def numIslands(grid):
    n, m = len(grid), len(grid[0])
    def f(r, c):
        if r < 0 or c < 0 or r >= n or c >= m or grid[r][c] != '1':
            return
        grid[r][c] = '0'
        f(r + 1, c)
        f(r - 1, c)
        f(r, c + 1)
        f(r, c - 1)
    count = 0
    for r in range(n):
        for c in range(m):
            if grid[r][c] == '1':
                count += 1
                f(r, c)
    return count`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'gr-03',
    slug: 'rotting-oranges',
    title: 'Rotting Oranges',
    pattern: 'graphs',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/rotting-oranges/',
    extra: [],
    summary:
      'A grid has fresh oranges (1), rotten (2), and empty cells (0). Each minute, every fresh orange adjacent (4-directional) to a rotten one rots. Return the minutes until no fresh orange remains, or -1 if impossible.',
    asked: 'Time for rot to spread to every fresh orange (multi-source spread).',
    why:
      'All rotten oranges rot SIMULTANEOUSLY — that is BFS from MULTIPLE sources (seed the queue with every rotten orange at time 0). The number of levels the BFS expands = the minutes. If fresh oranges remain at the end → -1.',
    clues: ['simultaneous spread', 'multi-source BFS', 'minutes = levels', '-1 case'],
    brute: {
      idea: 'Simulate minute by minute scanning the whole grid.',
      time: 'O(n·m·min(n,m))',
      space: 'O(n·m)'
    },
    optimal: {
      idea:
        'Seed the queue with ALL rotten oranges (time 0). Count fresh oranges. BFS in batches (one batch = one minute): each batch rots all adjacent fresh neighbors. When the queue empties: fresh === 0 → minutes, else -1.',
      steps: [
        'queue = all (r, c) with grid[r][c] === 2; fresh = count of 1s.',
        'If fresh === 0: return 0 (no fresh to rot).',
        'minutes = 0.',
        'While queue non-empty and fresh > 0: minutes++; for each node in the current batch: rot up to 4 fresh neighbors (set 2, fresh--, enqueue).',
        'Return fresh === 0 ? minutes : -1.'
      ],
      time: 'O(n·m)',
      space: 'O(n·m)'
    },
    dry: [
      'grid = [[2,1,1],[1,1,0],[0,1,1]]',
      't=0: queue [(0,0)], fresh = 5',
      'minute 1: rot (0,1) and (1,0) → fresh 3',
      'minute 2: rot (0,2) and (1,1) → fresh 1',
      'minute 3: rot (1,2)? no — (2,1) is adjacent to (1,1) → rot (2,1) → fresh 0; (2,2) adjacent to (2,1) → minute 4: rot (2,2)',
      'Recheck: (2,2) neighbors: (1,2)=1 (not rotten until...), (2,1) rots at minute 3 → (2,2) at minute 4',
      'Answer: 4'
    ],
    hints: [
      'Every rotten orange is a SOURCE — seed the queue with all of them at once.',
      'One BATCH of the queue = one minute of real time (process exactly queue.length nodes per minute).',
      'Track the fresh count: if any remain when the BFS is done, the answer is -1.'
    ],
    code: {
      javascript: `function orangesRotting(grid) {
  const queue = [];
  let fresh = 0;
  const n = grid.length, m = grid[0].length;
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < m; c++) {
      if (grid[r][c] === 2) queue.push([r, c]);
      else if (grid[r][c] === 1) fresh++;
    }
  }
  let minutes = 0;
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  while (queue.length && fresh > 0) {
    minutes++;
    for (let i = queue.length; i > 0; i--) {
      const [r, c] = queue.shift();
      for (const [dr, dc] of dirs) {
        const nr = r + dr, nc = c + dc;
        if (nr >= 0 && nc >= 0 && nr < n && nc < m && grid[nr][nc] === 1) {
          grid[nr][nc] = 2;
          fresh--;
          queue.push([nr, nc]);
        }
      }
    }
  }
  return fresh === 0 ? minutes : -1;
}`,
      python: `from collections import deque
def orangesRotting(grid):
    queue = deque()
    fresh = 0
    n, m = len(grid), len(grid[0])
    for r in range(n):
        for c in range(m):
            if grid[r][c] == 2:
                queue.append((r, c))
            elif grid[r][c] == 1:
                fresh += 1
    minutes = 0
    dirs = [(1, 0), (-1, 0), (0, 1), (0, -1)]
    while queue and fresh > 0:
        minutes += 1
        for _ in range(len(queue)):
            r, c = queue.popleft()
            for dr, dc in dirs:
                nr, nc = r + dr, c + dc
                if 0 <= nr < n and 0 <= nc < m and grid[nr][nc] == 1:
                    grid[nr][nc] = 2
                    fresh -= 1
                    queue.append((nr, nc))
    return minutes if fresh == 0 else -1`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'gr-04',
    slug: 'course-schedule',
    title: 'Course Schedule',
    pattern: 'graphs',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/course-schedule/',
    extra: [],
    summary:
      'There are n courses (0..n-1) and prerequisites [a, b] meaning you must take b before a. Decide if you can finish all courses (i.e. the dependency graph is acyclic).',
    asked: 'True iff the prerequisite graph has NO cycle (topologically sortable).',
    why:
      'A cycle of prerequisites is impossible to satisfy. "Can finish all?" = "does a topological order exist?" = "is the directed graph acyclic?" Kahn\'s algorithm (BFS on zero-indegree nodes) answers it: if it processes ALL nodes, there is no cycle.',
    clues: ['prerequisites', 'cycle = impossible', 'indegree', 'Kahn\'s algorithm'],
    brute: {
      idea: 'DFS with a visited+recursion-stack per node (cycle detection).',
      time: 'O(V + E)',
      space: 'O(V)'
    },
    optimal: {
      idea:
        'Kahn\'s: build adj and indegree; queue all indegree-0 courses; repeatedly take a course, decrement its dependents\' indegree (enqueue at 0). If processed count === n → true, else a cycle remains → false.',
      steps: [
        'For each [a, b]: adj[b].push(a); indeg[a]++.',
        'queue = all i with indeg[i] === 0.',
        'count = 0; while queue: u = pop; count++; for v in adj[u]: if --indeg[v] === 0 enqueue v.',
        'Answer: count === n.'
      ],
      time: 'O(V + E)',
      space: 'O(V + E)'
    },
    dry: [
      'n = 4, prerequisites = [1,0,2,0,3,1,3,2] → edges 0→1, 0→2, 1→3, 2→3',
      'indeg: [0, 1, 1, 2]; queue = [0]',
      'take 0: indeg[1]→0 enqueue; indeg[2]→0 enqueue; count=1',
      'take 1: indeg[3]→1; count=2',
      'take 2: indeg[3]→0 enqueue; count=3',
      'take 3: count=4 → all processed',
      'Answer: true',
      'Counter: [1,0],[0,1]: indeg [1,1] → queue empty, count=0 → false'
    ],
    hints: [
      'A course with NO prerequisites can always be taken first — what do you call such nodes? (indegree 0)',
      'After "taking" a course, what changes for its dependents? (their indegree drops)',
      'If the process stops before all courses are taken, what does the leftover subgraph contain? (a cycle)'
    ],
    code: {
      javascript: `function canFinish(numCourses, prerequisites) {
  const adj = Array.from({ length: numCourses }, () => []);
  const indeg = new Array(numCourses).fill(0);
  for (const [a, b] of prerequisites) {
    adj[b].push(a);
    indeg[a]++;
  }
  const queue = [];
  for (let i = 0; i < numCourses; i++) if (indeg[i] === 0) queue.push(i);
  let count = 0;
  while (queue.length) {
    const u = queue.shift();
    count++;
    for (const v of adj[u]) if (--indeg[v] === 0) queue.push(v);
  }
  return count === numCourses;
}`,
      python: `from collections import deque
def canFinish(numCourses, prerequisites):
    adj = [[] for _ in range(numCourses)]
    indeg = [0] * numCourses
    for a, b in prerequisites:
        adj[b].append(a)
        indeg[a] += 1
    queue = deque(i for i in range(numCourses) if indeg[i] == 0)
    count = 0
    while queue:
        u = queue.popleft()
        count += 1
        for v in adj[u]:
            indeg[v] -= 1
            if indeg[v] == 0:
                queue.append(v)
    return count == numCourses`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'gr-05',
    slug: 'find-the-order',
    title: 'Find the Order (Topological Sort)',
    pattern: 'graphs',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/course-schedule-ii/',
    extra: [],
    summary:
      'Return the order in which you must take the courses (a topological ordering), or an empty array if some courses cannot be finished. (This is Course Schedule II — the topological sort.)',
    asked: 'ANY valid topological order (all prerequisites before dependents), or [].',
    why:
      'Topological sort IS Kahn\'s algorithm with the queue visit order recorded. Every node you dequeue is "done" — that dequeuing order is a valid topological ordering.',
    clues: ['produce an order', 'topological sort', 'Kahn\'s algorithm'],
    brute: {
      idea: 'DFS finishing-order (reverse postorder) also yields a topological order.',
      time: 'O(V + E)',
      space: 'O(V)'
    },
    optimal: {
      idea:
        'Same as Course Schedule, but record each node as it is dequeued. If all n nodes appear → that order; else [].',
      steps: [
        'Build adj + indegree; queue zero-indegree nodes.',
        'order = [].',
        'While queue: u = pop; order.push(u); relax dependents (indeg--, enqueue at 0).',
        'Return order.length === n ? order : [].'
      ],
      time: 'O(V + E)',
      space: 'O(V + E)'
    },
    dry: [
      'n = 3, prereqs = [1,0],[2,1] → 0→1→2',
      'indeg [0,1,1]; queue [0]',
      'order: 0 → (indeg1→0) → 1 → (indeg2→0) → 2',
      'Answer: [0, 1, 2]',
      'Another valid example: n=4, [1,0],[2,0] → [0,1,2,3] or [0,2,1,3]'
    ],
    hints: [
      'Which node, when dequeued, is GUARANTEED to have all its prerequisites already taken?',
      'Record the dequeue order — that IS the topological ordering.',
      'Multiple valid orders can exist — any one is accepted.'
    ],
    code: {
      javascript: `function findOrder(numCourses, prerequisites) {
  const adj = Array.from({ length: numCourses }, () => []);
  const indeg = new Array(numCourses).fill(0);
  for (const [a, b] of prerequisites) {
    adj[b].push(a);
    indeg[a]++;
  }
  const queue = [];
  for (let i = 0; i < numCourses; i++) if (indeg[i] === 0) queue.push(i);
  const order = [];
  while (queue.length) {
    const u = queue.shift();
    order.push(u);
    for (const v of adj[u]) if (--indeg[v] === 0) queue.push(v);
  }
  return order.length === numCourses ? order : [];
}`,
      python: `from collections import deque
def findOrder(numCourses, prerequisites):
    adj = [[] for _ in range(numCourses)]
    indeg = [0] * numCourses
    for a, b in prerequisites:
        adj[b].append(a)
        indeg[a] += 1
    queue = deque(i for i in range(numCourses) if indeg[i] == 0)
    order = []
    while queue:
        u = queue.popleft()
        order.append(u)
        for v in adj[u]:
            indeg[v] -= 1
            if indeg[v] == 0:
                queue.append(v)
    return order if len(order) == numCourses else []`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'gr-06',
    slug: 'course-schedule-ii',
    title: 'Course Schedule II',
    pattern: 'graphs',
    difficulty: 'Medium',
    platform: 'GeeksforGeeks',
    url: 'https://www.geeksforgeeks.org/problems/prerequisite-tasks-2/1',
    extra: [],
    summary:
      'GFG version: given V tasks and prerequisite pairs, return the order in which tasks can be completed, or -1 if it is not possible (cycle). (Same topic as LeetCode Course Schedule II.)',
    asked: 'A valid task order array, or -1 when a cycle blocks completion.',
    why:
      'Same topological sort, GFG interface: prerequisites[i] = [a, b] means b before a. Return the order list; if any task is left behind, the answer is -1.',
    clues: ['topological order', 'return -1 on cycle', 'GFG interface'],
    brute: {
      idea: 'DFS-based topological sort (postorder, then reverse).',
      time: 'O(V + E)',
      space: 'O(V)'
    },
    optimal: {
      idea:
        'Kahn\'s algorithm; collect the dequeue order; return it if complete, else [-1].',
      steps: [
        'adj[b].push(a); indeg[a]++ for each [a, b].',
        'Queue all indeg-0 tasks; process, recording order and relaxing dependents.',
        'If order.length === V → order, else [-1].'
      ],
      time: 'O(V + E)',
      space: 'O(V + E)'
    },
    dry: [
      'V = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]',
      'indeg [0,1,1,2]; queue [0]',
      '0 → order [0]; indeg[1]=0, indeg[2]=0 → queue [1,2]',
      '1 → order [0,1]; indeg[3]=1',
      '2 → order [0,1,2]; indeg[3]=0 → queue [3]',
      '3 → order [0,1,2,3] → complete',
      'Answer: [0, 1, 2, 3] (or [0, 2, 1, 3])'
    ],
    hints: [
      'The order in which zero-indegree nodes get processed is a valid schedule.',
      'When is the schedule IMPOSSIBLE? (cycle → some indegrees never reach 0)',
      'GFG wants -1 (not an empty list) when impossible.'
    ],
    code: {
      javascript: `function findOrder(V, prerequisites) {
  const adj = Array.from({ length: V }, () => []);
  const indeg = new Array(V).fill(0);
  for (const [a, b] of prerequisites) {
    adj[b].push(a);
    indeg[a]++;
  }
  const queue = [];
  for (let i = 0; i < V; i++) if (indeg[i] === 0) queue.push(i);
  const order = [];
  while (queue.length) {
    const u = queue.shift();
    order.push(u);
    for (const v of adj[u]) if (--indeg[v] === 0) queue.push(v);
  }
  return order.length === V ? order : [-1];
}`,
      python: `from collections import deque
def findOrder(V, prerequisites):
    adj = [[] for _ in range(V)]
    indeg = [0] * V
    for a, b in prerequisites:
        adj[b].append(a)
        indeg[a] += 1
    queue = deque(i for i in range(V) if indeg[i] == 0)
    order = []
    while queue:
        u = queue.popleft()
        order.append(u)
        for v in adj[u]:
            indeg[v] -= 1
            if indeg[v] == 0:
                queue.append(v)
    return order if len(order) == V else [-1]`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'gr-07',
    slug: 'dijkstra',
    title: 'Dijkstra',
    pattern: 'graphs',
    difficulty: 'Hard',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/network-delay-time/',
    extra: [],
    summary:
      'Learn and apply Dijkstra\'s algorithm: shortest paths from a single source in a graph with NON-NEGATIVE edge weights. (Applied here on LeetCode 743: maximum delay until every node receives a signal.)',
    asked: 'Shortest distance from source k to every node; return the largest (or -1 if some node is unreachable).',
    why:
      'Dijkstra greedily settles the nearest unvisited node: its distance is FINAL because all remaining paths would only add non-negative weight. A min-priority queue keeps picking the closest frontier node. Negative edges would break this invariant (that is Bellman-Ford territory).',
    clues: ['shortest path', 'non-negative weights', 'priority queue', 'greedy settlement'],
    brute: {
      idea: 'Bellman-Ford (relax all edges V-1 times) or BFS-like relaxation without a heap.',
      time: 'O(V·E)',
      space: 'O(V)'
    },
    optimal: {
      idea:
        'dist[source] = 0, others ∞. Min-PQ of (dist, node). Pop the smallest d,u; if d > dist[u] skip (stale). For each edge u→v with weight w: if dist[u] + w < dist[v]: update and push. After the PQ drains: if any dist is ∞ → -1, else the max dist.',
      steps: [
        'Build the adjacency list of weighted edges.',
        'dist[k-1] = 0; pq = [(0, k-1)].',
        'Pop (d, u); skip if d > dist[u].',
        'Relax each neighbor: newDist = dist[u] + w; if better → update + push.',
        'Answer: max(dist) if all finite, else -1.'
      ],
      time: 'O(E log V)',
      space: 'O(V + E)'
    },
    dry: [
      'n = 4, times = [[0,1,1],[2,1,1],[0,2,1],[1,2,1],[2,3,1]], k = 1 (source node 0)',
      'dist = [0, ∞, ∞, ∞]',
      'pop (0,0): relax 0→1 (dist1=1), 0→2 (dist2=1)',
      'pop (1,1): relax 1→2 (1+1=2 > 1, no update)',
      'pop (1,2): relax 2→3 (dist3=2)',
      'pop (2,3): no edges',
      'dist = [0,1,1,2], all finite → answer = max = 2',
      'Answer: 2'
    ],
    hints: [
      'Why can Dijkstra "settle" a node permanently? (all weights ≥ 0 — no cheaper path can appear later)',
      'Why skip popped entries with d > dist[u]? (stale queue entries from earlier, better updates)',
      'The answer is the MAX over all dist — the last node to receive the signal.'
    ],
    code: {
      javascript: `function networkDelayTime(times, n, k) {
  const adj = Array.from({ length: n }, () => []);
  for (const [u, v, w] of times) adj[u].push([v, w]);
  const dist = new Array(n).fill(Infinity);
  dist[k - 1] = 0;
  const pq = [[0, k - 1]];
  while (pq.length) {
    pq.sort((a, b) => a[0] - b[0]);
    const [d, u] = pq.shift();
    if (d > dist[u]) continue; // stale entry
    for (const [v, w] of adj[u]) {
      if (dist[u] + w < dist[v]) {
        dist[v] = dist[u] + w;
        pq.push([dist[v], v]);
      }
    }
  }
  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (dist[i] === Infinity) return -1;
    ans = Math.max(ans, dist[i]);
  }
  return ans;
}`,
      python: `import heapq
def networkDelayTime(times, n, k):
    adj = [[] for _ in range(n)]
    for u, v, w in times:
        adj[u].append((v, w))
    dist = [float('inf')] * n
    dist[k - 1] = 0
    pq = [(0, k - 1)]
    while pq:
        d, u = heapq.heappop(pq)
        if d > dist[u]:
            continue
        for v, w in adj[u]:
            if dist[u] + w < dist[v]:
                dist[v] = dist[u] + w
                heapq.heappush(pq, (dist[v], v))
    if any(x == float('inf') for x in dist):
        return -1
    return max(dist)`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'gr-08',
    slug: 'zero-one-bfs',
    title: '0-1 BFS',
    pattern: 'graphs',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/path-with-minimum-effort/',
    extra: [],
    summary:
      'Learn 0-1 BFS: shortest paths when edge weights are only 0 or 1, using a DEQUE (push 0-weight edges to the front, 1-weight to the back) instead of a heap. Applied here on LeetCode 1514 (Path with Minimum Effort), where the effort of moving is the absolute height difference.',
    asked: 'Minimum possible maximum step effort from top-left to bottom-right of the grid.',
    why:
      '0-1 BFS is Dijkstra specialized to weights {0, 1}: a deque keeps the frontier in distance order without a heap (0-edges = same distance = front; 1-edges = next distance = back) → O(V+E). The effort problem is the same engine (shortest path where edge cost = |height diff|; when diffs are only 0/1 it becomes literal 0-1 BFS, otherwise the identical Dijkstra loop with a heap).',
    clues: ['weights 0 or 1', 'deque front/back', 'minimum effort', 'path cost = max edge'],
    brute: {
      idea: 'Full Dijkstra with a priority queue (always correct for non-negative weights).',
      time: 'O(E log V)',
      space: 'O(V)'
    },
    optimal: {
      idea:
        'dist[r][c] = minimum "effort" (max step cost along the path). Relax neighbor with newEffort = max(dist, |diff|)... for 1514 the path cost is the MAX edge, so the Dijkstra variant: candidate = max(dist[u], w) < dist[v] → update. (For pure 0-1 weights the recurrence becomes dist[u] + w with a deque.)',
      steps: [
        'dist grid = ∞; dist[0][0] = 0; priority queue (or deque for true 0/1 weights).',
        'Pop the smallest; relax 4 neighbors with edge cost |grid[u] - grid[v]|.',
        'New candidate = max(current, cost) — the path cost is the largest step.',
        'Stop when the bottom-right is settled (or drain the queue).',
        'For true 0-1 weights: replace the heap with a deque — push front on 0-cost, back on 1-cost.'
      ],
      time: 'O(E log V) heap / O(V+E) true 0-1 BFS',
      space: 'O(V)'
    },
    dry: [
      'grid = [[0,1],[1,0]] → start (0,0) effort 0 → (0,1) cost 1 (max=1) → (1,1) cost 1 (max=1)',
      'Alt: (1,0) cost 1 → (1,1) cost 1 (max=1)',
      'Answer: 1',
      'grid = [[1,2,3],[3,2,1],[2,1,1]] → path 1→2→3→2→1? no: 1→2 (1), 2→1? best: 1,2,3,2,1 costs 1,1,1,1 → effort 1? cells: (0,0)=1,(0,1)=2,(0,2)=3,(1,2)=2,(1,1)... known answer: 2',
      'Answer: 2 (the minimum over paths of the maximum step difference)'
    ],
    hints: [
      'The cost of a path is the MAXIMUM step effort, not the sum — how does the relaxation change? (new = max(old, edge))',
      'When weights are only 0 or 1, why does a deque replace the heap? (front = same distance, back = one more — distance order is preserved)',
      'Settling order still matters: always expand the frontier cell with the smallest current effort.'
    ],
    code: {
      javascript: `function minEffort(grid) {
  const n = grid.length, m = grid[0].length;
  const dist = Array.from({ length: n }, () => new Array(m).fill(Infinity));
  dist[0][0] = 0;
  const pq = [[0, 0, 0]]; // [effort, r, c]
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  while (pq.length) {
    pq.sort((a, b) => a[0] - b[0]);
    const [d, r, c] = pq.shift();
    if (d > dist[r][c]) continue;
    if (r === n - 1 && c === m - 1) return d;
    for (const [dr, dc] of dirs) {
      const nr = r + dr, nc = c + dc;
      if (nr < 0 || nc < 0 || nr >= n || nc >= m) continue;
      const nd = Math.max(d, Math.abs(grid[r][c] - grid[nr][nc]));
      if (nd < dist[nr][nc]) {
        dist[nr][nc] = nd;
        pq.push([nd, nr, nc]);
      }
    }
  }
  return dist[n - 1][m - 1];
}

// TRUE 0-1 BFS variant (edge weights 0 or 1):
//   dist init, deque = [[start]];
//   while deque: pop FRONT; for each neighbor with weight w:
//     if dist + w < dist[neighbor]: update;
//     if w === 0 push to FRONT (unshift), else push to BACK.`,
      python: `import heapq
def minEffort(grid):
    n, m = len(grid), len(grid[0])
    dist = [[float('inf')] * m for _ in range(n)]
    dist[0][0] = 0
    pq = [(0, 0, 0)]
    dirs = [(1, 0), (-1, 0), (0, 1), (0, -1)]
    while pq:
        d, r, c = heapq.heappop(pq)
        if d > dist[r][c]:
            continue
        if r == n - 1 and c == m - 1:
            return d
        for dr, dc in dirs:
            nr, nc = r + dr, c + dc
            if not (0 <= nr < n and 0 <= nc < m):
                continue
            nd = max(d, abs(grid[r][c] - grid[nr][nc]))
            if nd < dist[nr][nc]:
                dist[nr][nc] = nd
                heapq.heappush(pq, (nd, nr, nc))
    return dist[n - 1][m - 1]

# True 0-1 BFS (weights 0/1): deque; 0-cost edges to the FRONT, 1-cost to the BACK.`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'gr-09',
    slug: 'bfs-and-dfs-in-graphs',
    title: 'BFS and DFS in Graphs',
    pattern: 'graphs',
    difficulty: 'Easy',
    platform: 'GeeksforGeeks',
    url: 'https://www.geeksforgeeks.org/problems/bfs-and-dfs-traversal-of-graph/1',
    extra: [],
    summary:
      'Given a directed graph (V vertices, adjacency list), print its BFS and DFS traversal starting from vertex 0. (GFG interface; adjacency lists are already sorted.)',
    asked: 'Two arrays: the BFS order and the DFS order from vertex 0.',
    why:
      'The two fundamental graph traversals, side by side: BFS uses a queue (level-by-level, shortest-hop order); DFS uses a stack/recursion (depth-first, follow one path as far as it goes). Both need a visited set — the ONLY thing that prevents infinite loops.',
    clues: ['graph', 'traversal order', 'queue vs stack', 'visited set'],
    brute: {
      idea: 'These ARE the base algorithms — nothing to optimize; iterative versions avoid recursion depth.',
      time: 'O(V + E)',
      space: 'O(V)'
    },
    optimal: {
      idea:
        'BFS: queue = [0], visited[0]; dequeue, record, enqueue unvisited neighbors. DFS: recurse (or stack) from 0, mark visited BEFORE descending, record on entry.',
      steps: [
        'BFS: mark start, queue it; while queue: pop front, record, push unvisited neighbors (mark on enqueue).',
        'DFS: f(u): mark u, record u; for each unvisited neighbor: f(neighbor).',
        'Return both orders (from vertex 0 for the connected part).',
        'Disconnected graphs: loop over all starts (GFG test cases may be disconnected — standard approach is from 0 only; note it).'
      ],
      time: 'O(V + E)',
      space: 'O(V)'
    },
    dry: [
      'V = 4, adj = {0:[1,3], 1:[2], 2:[], 3:[1]}',
      'BFS from 0: [0] → neighbors 1,3 → [0,1,3] → 1\'s neighbor 2 → [0,1,3,2]',
      'DFS from 0: 0 → 1 → 2 → (back) → 3 → (3→1 visited) → [0,1,2,3]',
      'Answer: BFS [0,1,3,2], DFS [0,1,2,3]'
    ],
    hints: [
      'Which data structure is the heart of BFS? And of DFS? (queue / stack-recursion)',
      'When do you mark a node visited in BFS? (on ENQUEUE — otherwise it gets enqueued twice)',
      'The same edge can be seen from both endpoints in undirected graphs — the visited set handles it.'
    ],
    code: {
      javascript: `function dfsOfGraph(V, adj) {
  const visited = new Array(V).fill(false);
  const res = [];
  const f = (u) => {
    visited[u] = true;
    res.push(u);
    for (const v of adj[u]) if (!visited[v]) f(v);
  };
  f(0);
  return res;
}

function bfsOfGraph(V, adj) {
  const visited = new Array(V).fill(false);
  const res = [];
  const queue = [0];
  visited[0] = true;
  while (queue.length) {
    const u = queue.shift();
    res.push(u);
    for (const v of adj[u]) {
      if (!visited[v]) {
        visited[v] = true;
        queue.push(v);
      }
    }
  }
  return res;
}`,
      python: `def dfsOfGraph(V, adj):
    visited = [False] * V
    res = []
    def f(u):
        visited[u] = True
        res.append(u)
        for v in adj[u]:
            if not visited[v]:
                f(v)
    f(0)
    return res

from collections import deque
def bfsOfGraph(V, adj):
    visited = [False] * V
    res = []
    queue = deque([0])
    visited[0] = True
    while queue:
        u = queue.popleft()
        res.append(u)
        for v in adj[u]:
            if not visited[v]:
                visited[v] = True
                queue.append(v)
    return res`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'gr-10',
    slug: 'cycle-detection-in-directed-graph',
    title: 'Cycle Detection in Directed Graph',
    pattern: 'graphs',
    difficulty: 'Medium',
    platform: 'GeeksforGeeks',
    url: 'https://www.geeksforgeeks.org/problems/detect-cycle-in-a-directed-graph/1',
    extra: [],
    summary:
      'Detect whether a directed graph contains a cycle. (GFG interface: V vertices, adjacency list.)',
    asked: 'True if any directed cycle exists.',
    why:
      'A directed DFS has three states: unvisited, ON THE CURRENT PATH (grey), and DONE (black). Reaching a GREY node means you came back to the current path → cycle. Reaching a BLACK node is fine (it finished earlier).',
    clues: ['directed', 'cycle', 'three states', 'back edge'],
    brute: {
      idea: 'Kahn\'s algorithm: if the processed count < V → a cycle remains.',
      time: 'O(V + E)',
      space: 'O(V)'
    },
    optimal: {
      idea:
        'DFS with state[u] ∈ {0: unvisited, 1: in current recursion path, 2: finished}. f(u): mark 1; for each neighbor: state 1 → cycle (true); state 0 → recurse; mark 2 before returning. Loop all vertices (disconnected graphs).',
      steps: [
        'state array of 0s.',
        'f(u): state[u] = 1.',
        'For v in adj[u]: if state[v] === 1 → return true; if state[v] === 0 && f(v) → true.',
        'state[u] = 2; return false.',
        'Answer: any f(u) over unvisited u is true.'
      ],
      time: 'O(V + E)',
      space: 'O(V)'
    },
    dry: [
      'Graph: 0→1→2→0 (cycle) plus 3 isolated',
      'f(0): state[0]=1 → f(1): state[1]=1 → f(2): state[2]=1 → neighbor 0 is state 1 → CYCLE',
      'Answer: true',
      'Acyclic: 0→1, 0→2: f(0) → f(1) done(2) → f(2) done(2) → 0 done → no grey revisit → false'
    ],
    hints: [
      'An edge to a node that is ALREADY ANCESTOR of the current node closes a cycle — how do you know it is an ancestor? (it is still on the recursion path)',
      'Why does an edge to a FINISHED (black) node NOT mean a cycle? (that node was explored in a different branch)',
      'The three states collapse to two if you remove from the path set on exit (path set + visited set).'
    ],
    code: {
      javascript: `function isCyclic(V, adj) {
  const state = new Array(V).fill(0); // 0 unvisited, 1 in path, 2 done
  const f = (u) => {
    state[u] = 1;
    for (const v of adj[u]) {
      if (state[v] === 1) return true;
      if (state[v] === 0 && f(v)) return true;
    }
    state[u] = 2;
    return false;
  };
  for (let u = 0; u < V; u++) {
    if (state[u] === 0 && f(u)) return true;
  }
  return false;
}`,
      python: `def isCyclic(V, adj):
    state = [0] * V
    def f(u):
        state[u] = 1
        for v in adj[u]:
            if state[v] == 1:
                return True
            if state[v] == 0 and f(v):
                return True
        state[u] = 2
        return False
    for u in range(V):
        if state[u] == 0 and f(u):
            return True
    return False`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'gr-11',
    slug: 'detect-cycle-in-undirected-graph',
    title: 'Detect Cycle in Undirected Graph',
    pattern: 'graphs',
    difficulty: 'Medium',
    platform: 'GeeksforGeeks',
    url: 'https://www.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1',
    extra: [],
    summary:
      'Detect whether an undirected graph contains a cycle. (GFG interface: V vertices, adjacency list.)',
    asked: 'True iff some cycle exists (undirected: going back to the parent is NOT a cycle).',
    why:
      'Same DFS machinery as directed, with one twist: in undirected graphs every edge appears twice, so you will always see your PARENT — the cycle test is "visited neighbor that is NOT my parent".',
    clues: ['undirected', 'parent exclusion', 'visited revisit'],
    brute: {
      idea: 'BFS with parent tracking (works identically).',
      time: 'O(V + E)',
      space: 'O(V)'
    },
    optimal: {
      idea:
        'f(u, parent): mark visited; for each neighbor v: if !visited[v] → f(v, u); else if v !== parent → CYCLE. Loop all vertices.',
      steps: [
        'visited array.',
        'f(u, parent): visited[u] = true.',
        'For v in adj[u]: if !visited[v] && f(v, u) → true.',
        'Else if v !== parent → true (a back edge that is not the one we came in on).',
        'Loop over all u (disconnected graphs).'
      ],
      time: 'O(V + E)',
      space: 'O(V)'
    },
    dry: [
      'Graph: 0-1, 1-2, 2-0 (triangle)',
      'f(0,-1): visit 1 → f(1,0): visit 2 → f(2,1): neighbor 0 is visited and 0 !== 1 (parent) → CYCLE',
      'Answer: true',
      'Tree: 0-1, 0-2: f(0): f(1,0): neighbor 0 is the parent → skip; f(2,0): same → no cycle → false'
    ],
    hints: [
      'Why does the directed version not need a parent argument? (a single edge 0→1 is not also 1→0)',
      'The only "legal" revisit in undirected DFS is the edge you arrived by — exclude exactly that.',
      'Any other visited neighbor you bump into means there are TWO paths to it → a cycle.'
    ],
    code: {
      javascript: `function isCycle(V, adj) {
  const visited = new Array(V).fill(false);
  const f = (u, parent) => {
    visited[u] = true;
    for (const v of adj[u]) {
      if (!visited[v]) {
        if (f(v, u)) return true;
      } else if (v !== parent) {
        return true;
      }
    }
    return false;
  };
  for (let u = 0; u < V; u++) {
    if (!visited[u] && f(u, -1)) return true;
  }
  return false;
}`,
      python: `def isCycle(V, adj):
    visited = [False] * V
    def f(u, parent):
        visited[u] = True
        for v in adj[u]:
            if not visited[v]:
                if f(v, u):
                    return True
            elif v != parent:
                return True
        return False
    for u in range(V):
        if not visited[u] and f(u, -1):
            return True
    return False`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'gr-12',
    slug: 'number-of-provinces',
    title: 'Number of Provinces',
    pattern: 'graphs',
    difficulty: 'Easy',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/number-of-provinces/',
    extra: [],
    summary:
      'An n×n matrix isConnected where isConnected[i][j] = 1 means city i and city j are directly connected. A province is a group of directly or indirectly connected cities. Count the provinces.',
    asked: 'The number of connected components in the graph defined by the adjacency matrix.',
    why:
      'An adjacency MATRIX is just an adjacency list you scan in O(n) per node. "Count the provinces" is the same scan-sink-scan loop as Number of Islands — only the representation changes.',
    clues: ['adjacency matrix', 'connected components', 'count them'],
    brute: {
      idea: 'Convert the matrix to an adjacency list, then component-count (same asymptotics).',
      time: 'O(n³) naive scan',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'For each unvisited city i: provinces++; DFS from i — a node j is a neighbor iff isConnected[i][j] === 1 and j not visited.',
      steps: [
        'visited array of n.',
        'count = 0.',
        'For i in 0..n-1: if !visited[i]: count++; f(i).',
        'f(i): visited[i] = true; for j in 0..n-1: if isConnected[i][j] && !visited[j]: f(j).',
        'Return count.'
      ],
      time: 'O(n²)',
      space: 'O(n)'
    },
    dry: [
      'isConnected = [[1,1,0],[1,1,0],[0,0,1]]',
      'city 0 unvisited → province 1: f(0) visits 1 (connected); city 1 now visited',
      'city 2 unvisited → province 2',
      'Answer: 2'
    ],
    hints: [
      'The matrix row IS the adjacency list — what do you check to find i\'s neighbors? (isConnected[i][j] === 1)',
      'Same loop as islands: find unvisited → count → sink the component.',
      'isConnected[i][i] = 1 (a city is connected to itself) — visited marking makes it harmless.'
    ],
    code: {
      javascript: `function findCircleNum(isConnected) {
  const n = isConnected.length;
  const visited = new Array(n).fill(false);
  let count = 0;
  const f = (u) => {
    visited[u] = true;
    for (let v = 0; v < n; v++) {
      if (isConnected[u][v] === 1 && !visited[v]) f(v);
    }
  };
  for (let u = 0; u < n; u++) {
    if (!visited[u]) {
      count++;
      f(u);
    }
  }
  return count;
}`,
      python: `def findCircleNum(isConnected):
    n = len(isConnected)
    visited = [False] * n
    count = 0
    def f(u):
        visited[u] = True
        for v in range(n):
            if isConnected[u][v] == 1 and not visited[v]:
                f(v)
    for u in range(n):
        if not visited[u]:
            count += 1
            f(u)
    return count`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'gr-13',
    slug: 'minimum-height-trees',
    title: 'Minimum Height Trees',
    pattern: 'graphs',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/minimum-height-trees/',
    extra: [],
    summary:
      'Given a tree (n nodes, n-1 edges) and a root choice, the "height" is the number of nodes on the longest root-to-leaf path. Return ALL roots that give the minimum possible height (the centroid(s) — 1 or 2 of them).',
    asked: 'Every node that minimizes the tree height when chosen as root.',
    why:
      'The answer is the CENTER of the tree. Repeatedly strip the leaves (degree-1 nodes) layer by layer — the last 1 or 2 nodes standing are the centroids, exactly like peeling an onion from the outside in.',
    clues: ['center of a tree', 'strip leaves', 'degree 1', '1 or 2 answers'],
    brute: {
      idea: 'For each node, BFS its farthest leaf → take the min over all nodes.',
      time: 'O(n²)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'Compute degrees; leaves = degree-1 nodes. While more than 2 nodes remain: remove all current leaves (decrement their neighbors\' degrees; neighbors that hit degree 1 become the next leaves). The final set (size 1 or 2) is the answer.',
      steps: [
        'adj from edges; degree[i] = adj[i].length.',
        'leaves = [i : degree[i] === 1].',
        'remaining = n.',
        'While remaining > 2: for each leaf u: remaining--; for each neighbor v: degree[v]--; if degree[v] === 1 → next-leaves. leaves = next-leaves.',
        'Return leaves (the last layer).'
      ],
      time: 'O(n)',
      space: 'O(n)'
    },
    dry: [
      'n = 6, edges = [3,0],[3,1],[3,2],[3,4],[5,4] → line 0-3-4-5 plus 1,2 on 3',
      'degrees: 0:1, 1:1, 2:1, 3:4, 4:2, 5:1; leaves [0,1,2,5]',
      'peel: 0,1,2,5 removed → deg3 4→1, deg4 2→1 → leaves [3,4]; remaining = 2 → stop',
      'Answer: [3, 4]',
      'Chain 0-1-2-3: peel 0,3 → peel 1,2 → remaining 2 → answer [1, 2]'
    ],
    hints: [
      'What happens to the "center" when you remove the outermost ring of leaves? (it stays the center of the smaller tree)',
      'A leaf has exactly one neighbor — degree 1.',
      'Why do we stop at 2 nodes instead of 1? (an even-length path has TWO central nodes, both optimal)'
    ],
    code: {
      javascript: `function findMinHeightTrees(n, edges) {
  if (n === 1) return [0];
  const adj = Array.from({ length: n }, () => []);
  const deg = new Array(n).fill(0);
  for (const [a, b] of edges) {
    adj[a].push(b);
    adj[b].push(a);
    deg[a]++;
    deg[b]++;
  }
  let leaves = [];
  for (let i = 0; i < n; i++) if (deg[i] === 1) leaves.push(i);
  let remaining = n;
  while (remaining > 2) {
    const next = [];
    for (const u of leaves) {
      remaining--;
      for (const v of adj[u]) {
        deg[v]--;
        if (deg[v] === 1) next.push(v);
      }
    }
    leaves = next;
  }
  return leaves;
}`,
      python: `def findMinHeightTrees(n, edges):
    if n == 1:
        return [0]
    adj = [[] for _ in range(n)]
    deg = [0] * n
    for a, b in edges:
        adj[a].append(b)
        adj[b].append(a)
        deg[a] += 1
        deg[b] += 1
    leaves = [i for i in range(n) if deg[i] == 1]
    remaining = n
    while remaining > 2:
        nxt = []
        for u in leaves:
            remaining -= 1
            for v in adj[u]:
                deg[v] -= 1
                if deg[v] == 1:
                    nxt.append(v)
        leaves = nxt
    return leaves`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'gr-14',
    slug: 'shortest-path-in-unweighted-graph',
    title: 'Shortest Path in Unweighted Graph',
    pattern: 'graphs',
    difficulty: 'Easy',
    platform: 'GeeksforGeeks',
    url: 'https://www.geeksforgeeks.org/problems/shortest-path-in-unweighted-graph/1',
    extra: [],
    summary:
      'Given an unweighted undirected graph (edge list, V vertices) and a source and target, return the minimum number of edges in a path from source to target, or -1 if no path exists. (GFG interface.)',
    asked: 'The shortest distance in EDGES, or -1.',
    why:
      'In an unweighted graph every edge costs 1, so "fewest edges" = "fewest hops" = BFS layers. The first time BFS reaches the target, that layer number IS the shortest distance — no other algorithm can beat this here.',
    clues: ['unweighted', 'fewest edges', 'BFS layers', '-1 if unreachable'],
    brute: {
      idea: 'DFS from source trying all paths (exponential without visited tricks; visited turns it into "some path", not shortest).',
      time: 'O(2^V) worst',
      space: 'O(V)'
    },
    optimal: {
      idea:
        'dist array = -1; dist[src] = 0. BFS from src: dist[neighbor] = dist[u] + 1 (first visit only). Answer: dist[target].',
      steps: [
        'Build adj from the edge list (both directions).',
        'dist = [-1] * V; dist[src] = 0; queue = [src].',
        'While queue: u = pop; for v in adj[u]: if dist[v] === -1: dist[v] = dist[u] + 1; enqueue v.',
        'Return dist[target] (stays -1 if unreachable).'
      ],
      time: 'O(V + E)',
      space: 'O(V)'
    },
    dry: [
      'V = 5, edges = [0-1, 1-2, 2-3, 3-4, 0-4], src = 0, target = 3',
      'dist[0]=0; level1: 1 (d1), 4 (d1); level2: 2 (d2); level3: 3 (d3) via 2 — but 3 is also... 4→3: d2! level2 from 4: neighbor 3 → d2',
      'dist[3] = 2 (path 0-4-3)',
      'Answer: 2'
    ],
    hints: [
      'In an unweighted graph, what traversal explores all nodes at distance 1, then 2, then 3? (BFS)',
      'The FIRST visit to a node is always by a shortest path — why? (BFS expands in distance order)',
      'dist[v] = dist[u] + 1 exactly once (on first visit) — that is the whole algorithm.'
    ],
    code: {
      javascript: `function shortestPath(edgeList, V, src, target) {
  const adj = Array.from({ length: V }, () => []);
  for (const [a, b] of edgeList) {
    adj[a].push(b);
    adj[b].push(a);
  }
  const dist = new Array(V).fill(-1);
  dist[src] = 0;
  const queue = [src];
  while (queue.length) {
    const u = queue.shift();
    for (const v of adj[u]) {
      if (dist[v] === -1) {
        dist[v] = dist[u] + 1;
        queue.push(v);
      }
    }
  }
  return dist[target];
}`,
      python: `from collections import deque
def shortestPath(edgeList, V, src, target):
    adj = [[] for _ in range(V)]
    for a, b in edgeList:
        adj[a].append(b)
        adj[b].append(a)
    dist = [-1] * V
    dist[src] = 0
    queue = deque([src])
    while queue:
        u = queue.popleft()
        for v in adj[u]:
            if dist[v] == -1:
                dist[v] = dist[u] + 1
                queue.append(v)
    return dist[target]`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'gr-15',
    slug: 'minimum-moves-to-reach-target',
    title: 'Minimum Moves to Reach Target',
    pattern: 'graphs',
    difficulty: 'Medium',
    platform: 'GeeksforGeeks',
    url: 'https://www.geeksforgeeks.org/problems/minimum-moves-to-reach-target/1',
    extra: [],
    summary:
      'Starting from 1, you may move from i to i+1 or from i to 2*i (one move each). Find the minimum moves to reach n. (GFG interface.)',
    asked: 'The fewest moves from 1 to n using +1 and ×2.',
    why:
      'Model the numbers as a graph (edges i→i+1, i→2i) and BFS — but there is a sharper lens: work BACKWARDS from n. From x you came from x-1 or x/2. Halving is always at least as good as decrementing, so a simple greedy backward walk is optimal: if even → halve; if odd → decrement.',
    clues: ['moves +1 and ×2', 'backward thinking', 'halve when even', 'BFS alternative'],
    brute: {
      idea: 'BFS over 1..n with edges +1 and ×2 (visits states in order).',
      time: 'O(n)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'x = n, count = 0. While x > 1: if x is even → x /= 2; else x -= 1; count++. The reverse operation is a "undo move" — undoing a ×2 (halving) removes a whole doubling, which no chain of -1 undos can match, so the greedy is optimal.',
      steps: [
        'x = n; count = 0.',
        'If x is even: x /= 2 (undo a doubling — the "big" move).',
        'If x is odd: x -= 1 (undo an increment).',
        'Stop at 1; return count.',
        'Equivalently: count = (bit-length of n) + (popcount of n) - 2 — the bits are the doublings, the 1-bits the increments.'
      ],
      time: 'O(log n)',
      space: 'O(1)'
    },
    dry: [
      'n = 7: 7 (odd) → 6 (1 move); 6 (even) → 3 (2); 3 (odd) → 2 (3); 2 (even) → 1 (4)',
      'Answer: 4',
      'Forward check: 1 → 2 (×2) → 3 (+1) → 6 (×2) → 7 (+1): 4 moves ✓',
      'n = 8: 8 → 4 → 2 → 1 = 3 moves (1→2→4→8 ✓)'
    ],
    hints: [
      'What are the REVERSE moves of (+1) and (×2)? (-1 and ÷2)',
      'From an even number, which reverse move is always at least as good? (halving — one undo vs many)',
      'An odd number has NO halving option — it must decrement first.'
    ],
    code: {
      javascript: `function minMove(n) {
  let x = n, count = 0;
  while (x > 1) {
    if (x % 2 === 0) x /= 2;
    else x -= 1;
    count++;
  }
  return count;
}`,
      python: `def minMove(n):
    x = n
    count = 0
    while x > 1:
        if x % 2 == 0:
            x //= 2
        else:
            x -= 1
        count += 1
    return count`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'gr-16',
    slug: 'cheapest-flights-within-k-stops',
    title: 'Cheapest Flights Within K Stops',
    pattern: 'graphs',
    difficulty: 'Hard',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/cheapest-flights-within-k-stops/',
    extra: [],
    summary:
      'n cities, flights [from, to, price]. Find the cheapest path from src to dst with AT MOST k stops (i.e. at most k+1 edges), or -1 if none.',
    asked: 'Minimum cost under a constraint on the number of edges — not the unconstrained shortest path.',
    why:
      'Dijkstra optimizes COST but ignores the stop count; a cheap path may use too many stops. Bellman-Ford naturally constrains EDGE COUNT: after i rounds of relaxing every edge, dist[v] is the best price using AT MOST i edges. Run k+1 rounds and stop.',
    clues: ['k stops limit', 'edge-count constraint', 'Bellman-Ford rounds', 'price vs hops'],
    brute: {
      idea: 'Enumerate all paths up to k+1 edges (exponential in the worst case).',
      time: 'O(E^(k+1))',
      space: 'O(V)'
    },
    optimal: {
      idea:
        'dist = [∞]·n; dist[src] = 0. For round in 0..k: snapshot = copy of dist; for every flight (u,v,w): if snapshot[u] + w < dist[v] → dist[v] = snapshot[u] + w. The snapshot prevents using MORE than the allowed edges in one round. Answer: dist[dst] (∞ → -1).',
      steps: [
        'k stops = k+1 edges → run k+1 relaxation rounds.',
        'Each round relaxes ALL edges against the PREVIOUS round\'s distances.',
        'This is Bellman-Ford cut short at k+1 passes.',
        'Return dist[dst] or -1.'
      ],
      time: 'O(k · E)',
      space: 'O(V + E)'
    },
    dry: [
      'n = 4, flights = [0→1(100), 1→2(100), 0→2(500), 0→1(1000), 3→0(200)], src 0, dst 2, k = 1',
      'round 0: snapshot [0,∞,∞,∞] → 0→1: 100, 1000 (min 100); 0→2: 500 → dist [0,100,500,∞]',
      'round 1: snapshot [0,100,500,∞] → 1→2: 100+100=200 < 500 → dist[2]=200',
      'Answer: 200 (0→1→2, exactly 1 stop)',
      'k = 0 would give 500 (direct only)'
    ],
    hints: [
      'Why can\'t plain Dijkstra be trusted here? (its cheapest path might exceed k stops)',
      'What does "i rounds of Bellman-Ford" guarantee about dist? (best price with at most i edges)',
      'Why copy dist before each round? (to forbid chaining updates within the same round = more edges than allowed)'
    ],
    code: {
      javascript: `function findCheapestPrice(n, flights, src, dst, k) {
  const dist = new Array(n).fill(Infinity);
  dist[src] = 0;
  for (let round = 0; round <= k; round++) {
    const prev = [...dist];
    for (const [u, v, w] of flights) {
      if (prev[u] + w < dist[v]) dist[v] = prev[u] + w;
    }
  }
  return dist[dst] === Infinity ? -1 : dist[dst];
}`,
      python: `def findCheapestPrice(n, flights, src, dst, k):
    dist = [float('inf')] * n
    dist[src] = 0
    for _ in range(k + 1):
        prev = dist[:]
        for u, v, w in flights:
            if prev[u] + w < dist[v]:
                dist[v] = prev[u] + w
    return -1 if dist[dst] == float('inf') else dist[dst]`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'gr-17',
    slug: 'network-delay-time',
    title: 'Network Delay Time',
    pattern: 'graphs',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/network-delay-time/',
    extra: [],
    summary:
      'A signal is sent from node k through a network of n nodes and directed, weighted links [u, v, w]. How long until EVERY node has received it? Return -1 if any node can never be reached. (Same engine as the Dijkstra entry — here framed as a network problem.)',
    asked: 'The maximum shortest-path distance from k (or -1 if the graph is not fully reachable from k).',
    why:
      'It is Dijkstra\'s algorithm wearing a network costume: the moment the last node is "settled", the delay is complete. If the PQ drains with a node still at ∞, that node is unreachable → -1.',
    clues: ['signal to all nodes', 'Dijkstra', 'max of distances', '-1 if unreachable'],
    brute: {
      idea: 'BFS-like relaxation without a heap (fine for small graphs, O(VE) worst).',
      time: 'O(V·E)',
      space: 'O(V)'
    },
    optimal: {
      idea:
        'Standard single-source Dijkstra from k-1; after draining, scan dist: any ∞ → -1; else return max(dist).',
      steps: [
        'Weighted adjacency list.',
        'dist[k-1] = 0; min-PQ loop with stale-skip.',
        'Relax edges on pop.',
        'Answer: all finite ? max(dist) : -1.'
      ],
      time: 'O(E log V)',
      space: 'O(V + E)'
    },
    dry: [
      'n = 2, times = [[1,2,1]], k = 2 (source node 1, 0-indexed 1)',
      'dist = [∞, 0] → relax 1→0: dist[0] = 1 → drain',
      'max = 1, all finite',
      'Answer: 1',
      'n = 2, times = [[1,2,1]], k = 1: dist[1] stays ∞ → Answer: -1'
    ],
    hints: [
      'Which node determines the FINAL delay? (the one with the largest shortest distance)',
      'A node still at ∞ after Dijkstra means... (no path from k exists → -1)',
      'The signal propagates in "shortest-path order" — exactly Dijkstra\'s settlement order.'
    ],
    code: {
      javascript: `function networkDelayTime(times, n, k) {
  const adj = Array.from({ length: n }, () => []);
  for (const [u, v, w] of times) adj[u].push([v, w]);
  const dist = new Array(n).fill(Infinity);
  dist[k - 1] = 0;
  const pq = [[0, k - 1]];
  while (pq.length) {
    pq.sort((a, b) => a[0] - b[0]);
    const [d, u] = pq.shift();
    if (d > dist[u]) continue;
    for (const [v, w] of adj[u]) {
      if (dist[u] + w < dist[v]) {
        dist[v] = dist[u] + w;
        pq.push([dist[v], v]);
      }
    }
  }
  let delay = 0;
  for (let i = 0; i < n; i++) {
    if (dist[i] === Infinity) return -1;
    delay = Math.max(delay, dist[i]);
  }
  return delay;
}`,
      python: `import heapq
def networkDelayTime(times, n, k):
    adj = [[] for _ in range(n)]
    for u, v, w in times:
        adj[u].append((v, w))
    dist = [float('inf')] * n
    dist[k - 1] = 0
    pq = [(0, k - 1)]
    while pq:
        d, u = heapq.heappop(pq)
        if d > dist[u]:
            continue
        for v, w in adj[u]:
            if dist[u] + w < dist[v]:
                dist[v] = dist[u] + w
                heapq.heappush(pq, (dist[v], v))
    delay = 0
    for i in range(n):
        if dist[i] == float('inf'):
            return -1
        delay = max(delay, dist[i])
    return delay`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'gr-18',
    slug: 'number-of-connected-components-in-an-undirected-graph',
    title: 'Number of Connected Components in an Undirected Graph',
    pattern: 'graphs',
    difficulty: 'Medium',
    platform: 'GeeksforGeeks',
    url: 'https://www.geeksforgeeks.org/problems/number-of-connected-components-in-an-undirected-graph/1',
    extra: [],
    summary:
      'Given n nodes and an edge list, count how many connected components the undirected graph has. (GFG interface.)',
    asked: 'The number of disconnected pieces of the graph.',
    why:
      'The master loop of component counting: for each unvisited node, start a new component and DFS/BFS its whole piece. Islands (grid), provinces (matrix), and this (edge list) are the same algorithm in three costumes.',
    clues: ['connected components', 'undirected', 'count them', 'scan-sink-scan'],
    brute: {
      idea: 'DFS from every node without memoization (repeats work).',
      time: 'O(V·E)',
      space: 'O(V)'
    },
    optimal: {
      idea:
        'Build adj from edges. visited array. For u in 0..n-1: if !visited[u]: components++; DFS(u) marking everything reachable. Return components.',
      steps: [
        'adj[u].push(v) and adj[v].push(u) for each edge.',
        'components = 0.',
        'Loop over all u: new unvisited u → components++; f(u).',
        'f(u): mark visited; recurse to all unvisited neighbors.',
        'Return components.'
      ],
      time: 'O(V + E)',
      space: 'O(V + E)'
    },
    dry: [
      'n = 5, edges = [0-1, 2-3] (4 is isolated)',
      'u=0: new component → sink {0,1}; u=1 visited; u=2: new → sink {2,3}; u=4: new → {4}',
      'Answer: 3'
    ],
    hints: [
      'An unvisited node you bump into during the outer scan ALWAYS starts a new component — why?',
      'The DFS from it is guaranteed to cover its ENTIRE component — that is what makes one count per trigger correct.',
      'Same loop as Number of Islands — only the adjacency representation differs.'
    ],
    code: {
      javascript: `function countComponents(n, edges) {
  const adj = Array.from({ length: n }, () => []);
  for (const [a, b] of edges) {
    adj[a].push(b);
    adj[b].push(a);
  }
  const visited = new Array(n).fill(false);
  let count = 0;
  const f = (u) => {
    visited[u] = true;
    for (const v of adj[u]) if (!visited[v]) f(v);
  };
  for (let u = 0; u < n; u++) {
    if (!visited[u]) {
      count++;
      f(u);
    }
  }
  return count;
}`,
      python: `def countComponents(n, edges):
    adj = [[] for _ in range(n)]
    for a, b in edges:
        adj[a].append(b)
        adj[b].append(a)
    visited = [False] * n
    count = 0
    def f(u):
        visited[u] = True
        for v in adj[u]:
            if not visited[v]:
                f(v)
    for u in range(n):
        if not visited[u]:
            count += 1
            f(u)
    return count`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'gr-19',
    slug: 'bfs-and-dfs-traversals-of-a-graph',
    title: 'BFS and DFS Traversals of a Graph',
    pattern: 'graphs',
    difficulty: 'Easy',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/binary-tree-level-order-traversal/',
    extra: [],
    summary:
      'Graph traversal applied to a binary tree: return the level order (BFS) — values grouped layer by layer, left to right. (Tree is a special graph: every node has ≤ 2 outgoing edges.)',
    asked: 'The BFS layers of the tree as an array of arrays.',
    why:
      'A tree is the friendliest graph: no cycles, at most 2 children. BFS on it (the batch-by-queue-size trick) IS level order — the bridge between "graph BFS" and "tree level order" you have been building toward.',
    clues: ['tree as a graph', 'level order', 'BFS batches', 'left to right'],
    brute: {
      idea: 'Recursion with a depth argument appending to per-depth arrays.',
      time: 'O(n)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'queue = [root]. While queue non-empty: level = []; for i in 0..queue.length-1: pop node, record value, enqueue children; push level. The batch size is captured at the START of each level — that is what keeps layers separated.',
      steps: [
        'If root null: [].',
        'queue = [root].',
        'Loop: batch = current queue length; process exactly batch nodes; collect their values; enqueue their children.',
        'Push each batch as one level.',
        'Return the levels.'
      ],
      time: 'O(n)',
      space: 'O(n)'
    },
    dry: [
      'Tree: 3 → 9, 20(15, 7)',
      'batch 1: [3] → children 9, 20 enqueued',
      'batch 2: [9, 20] → children 15, 7 enqueued',
      'batch 3: [15, 7]',
      'Answer: [[3], [9, 20], [15, 7]]'
    ],
    hints: [
      'How do you know where one level ends and the next begins in a queue? (snapshot the queue size before processing a level)',
      'Children enqueued during level d are exactly level d+1 — that is why the batch trick works.',
      'The same BFS on a general graph (with a visited set) gives the same layered structure.'
    ],
    code: {
      javascript: `function levelOrder(root) {
  if (!root) return [];
  const res = [];
  const queue = [root];
  while (queue.length) {
    const level = [];
    for (let i = queue.length; i > 0; i--) {
      const node = queue.shift();
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    res.push(level);
  }
  return res;
}`,
      python: `from collections import deque
def levelOrder(root):
    if not root:
        return []
    res = []
    queue = deque([root])
    while queue:
        level = []
        for _ in range(len(queue)):
            node = queue.popleft()
            level.append(node.val)
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        res.append(level)
    return res`,
      java: '',
      cpp: ''
    }
  }
];
