// DSA-60 Days — the 16 patterns (source of truth for pattern education)
const patterns = [
  {
    id: 'two-pointers',
    slug: 'two-pointers',
    name: 'Two Pointers',
    emoji: '👉',
    short:
      'Two indices move through a sorted array (or string) from both ends or the same direction, replacing O(n²) pair checks with O(n).',
    definition:
      'Two Pointers is a technique where you keep two indices ("pointers") in the data and move them based on a condition. When the data is sorted, you can decide from both ends whether the answer is to the left or right — so each element is visited a constant number of times.',
    whenToUse: [
      'The input array is sorted (or you can sort it first).',
      'You need a pair, triplet, or window whose sum/product must match a target.',
      'You must remove or compress elements in place in a sorted array.',
      'You compare elements from opposite ends of the structure.'
    ],
    clues: [
      'sorted array + target sum',
      'find a pair / triplet',
      'return indices of two numbers',
      'modify array in place',
      '3Sum / 4Sum family'
    ],
    approach:
      'Pick the two pointer positions (usually ends, or start+start). Compute the current combination. If it is too small, move the "increasing" pointer; if too big, move the "decreasing" pointer. Stop when pointers meet.',
    mistakes: [
      'Moving both pointers in the same direction and missing combinations.',
      'Forgetting the pointer meeting condition (left < right vs left <= right).',
      'Using two pointers on unsorted data when order matters.',
      'Off-by-one in index answers (1-indexed vs 0-indexed platforms differ).'
    ],
    template: `left = 0, right = n - 1
while left < right:
    sum = arr[left] + arr[right]
    if sum == target:
        record(left, right); break
    elif sum < target:
        left++
    else:
        right--`
  },
  {
    id: 'fast-slow-pointers',
    slug: 'fast-slow-pointers',
    name: 'Fast & Slow Pointers',
    emoji: '🐢',
    short:
      'One pointer moves 1 step, another moves 2 steps. Used to detect cycles, find midpoints, and detect the cycle entry in linked lists.',
    definition:
      'Also called the Floyd\'s Tortoise and Hare algorithm. A slow pointer advances one node while a fast pointer advances two. If they meet, a cycle exists; by the relationship of distances travelled you can also find where the cycle starts or the middle node.',
    whenToUse: [
      'Detecting a cycle in a linked list (or any functional graph).',
      'Finding the middle of a linked list.',
      'Finding the start of a cycle.',
      'Reordering a linked list (find middle first, reverse second half).',
      'Detecting a cycle in number jumps / array as graph.'
    ],
    clues: [
      'linked list + cycle / loop',
      'find the middle node',
      'does it loop back?',
      'palindrome linked list (middle + reverse)',
      'reorder list (l1/2 vs l2/1 interleaved)'
    ],
    approach:
      'slow = head, fast = head. Each step: slow = slow.next, fast = fast.next.next. Meeting (fast === slow) means a cycle; fast === null means no cycle. For cycle start: reset one pointer to head and move both one step until they meet.',
    mistakes: [
      'Not checking fast === null before fast.next.next (null pointer crash).',
      'Moving both pointers the same speed — no cycle detection.',
      'Forgetting that the middle of an even-length list is the second middle node.',
      'Losing track of the node before the reversed segment after reversal.'
    ],
    template: `slow = head, fast = head
while fast and fast.next:
    slow = slow.next
    fast = fast.next.next
if fast === fast.next and fast !== null: cycle exists`
  },
  {
    id: 'sliding-window',
    slug: 'sliding-window',
    name: 'Sliding Window',
    emoji: '🪟',
    short:
      'A growing/shrinking window [left, right] over a subarray or substring keeps the "best window" so every element is touched only a few times.',
    definition:
      'Sliding Window solves "subarray / substring with a property" problems in O(n) instead of O(n²). The right end keeps expanding to include new elements; when the window violates the constraint, the left end shrinks. You maintain a running state (sum, count map, etc.) and update it as the window moves.',
    whenToUse: [
      'Find the longest / shortest (or any) contiguous subarray or substring with a property.',
      'The property can be maintained incrementally (sum, frequency, distinct count).',
      'Fixed or variable window over contiguous elements.',
      'Anagrams, k-distinct, windowed counts.'
    ],
    clues: [
      'contiguous subarray / substring',
      'longest / smallest / minimum window',
      'at most / at least K of something',
      'anagram window of length n',
      'fruit / basket / distinct character limits'
    ],
    approach:
      'right expands one step at a time and updates the window state. While the window is invalid (or, for max-size, always), shrink from the left and update state. After each valid window, record the best answer (max or min size).',
    mistakes: [
      'Updating the answer before the window is valid.',
      'Forgetting to remove the outgoing element when shrinking.',
      'Confusing "at most K" with "exactly K" logic.',
      'Off-by-one in window size (right - left + 1).',
      'Not shrinking in fixed-size problems until the window exceeds K.'
    ],
    template: `left = 0, best = 0
for right in 0..n-1:
    add(arr[right])
    while window invalid:
        remove(arr[left]); left++
    best = max(best, right - left + 1)   // for longest`
  },
  {
    id: 'kadane',
    slug: 'kadane',
    name: 'Kadane',
    emoji: '📈',
    short:
      'Track the best subarray sum ending at the current index; either extend the previous best or restart here. O(n) for maximum subarray style problems.',
    definition:
      'Kadane\'s algorithm finds the maximum sum of a contiguous subarray in one pass. The key state is: the best sum of a subarray that MUST end at the current index. At each step: endHere = max(arr[i], endHere + arr[i]), best = max(best, endHere).',
    whenToUse: [
      'Maximum (or minimum) sum of a contiguous subarray.',
      'Variations: with one deletion, circular array, absolute sum, product.',
      'Any DP over subarrays where the transition depends on the previous end.',
      'Maximum sum with a constraint expressible per position.'
    ],
    clues: [
      'contiguous subarray + maximum / minimum sum',
      'can delete / must delete one element',
      'circular array max sum',
      'maximum product subarray',
      'absolute sum of any subarray'
    ],
    approach:
      'Maintain the best subarray sum ending at i. If the previous ending sum is negative (for max), starting fresh at i is better. Keep the global max. Variations swap the state (product needs min too; circular needs total - minSubarray).',
    mistakes: [
      'Forgetting to restart when the running sum becomes negative.',
      'Handling all-negative arrays (answer is the largest single element).',
      'For the circular case, forgetting the "all negative" edge case (answer = max element, not total - min).',
      'For product: not tracking both max and min because of sign flips.'
    ],
    template: `endHere = arr[0], best = arr[0]
for i = 1..n-1:
    endHere = max(arr[i], endHere + arr[i])
    best = max(best, endHere)
return best`
  },
  {
    id: 'prefix-sum',
    slug: 'prefix-sum',
    name: 'Prefix Sum',
    emoji: '🧮',
    short:
      'Precompute running sums so any range sum is O(1). Combine with hash maps (or a deque) to count subarrays with a target sum in O(n).',
    definition:
      'A prefix sum P[i] is the sum of elements from the start up to index i. Then the sum of any range [l..r] is P[r] - P[l-1] in O(1). The deeper trick: a subarray from l+1..r has sum K exactly when P[r] - P[l] == K, so we look for a previous prefix value P[l] = P[r] - K using a hash map.',
    whenToUse: [
      'Many range-sum queries over the same array.',
      'Count subarrays whose sum equals / is divisible by K.',
      'Subarrays with sum at least K (hard: monotonic deque).',
      'Pivot / balance point problems.',
      'Contiguous 0/1 balance (map 0 to -1 and find equal prefix sums).'
    ],
    clues: [
      'subarray sum equals K / divisible by K',
      'count number of subarrays',
      'range sum queries',
      'left sum equals right sum (pivot)',
      'sum of 0s equals sum of 1s'
    ],
    approach:
      'Walk left to right keeping a running prefix sum and a map of prefix-sum value → count of times seen. For each position, the number of subarrays ending here with sum K is the count of previous prefix sums equal to (current - K). Update the map after counting.',
    mistakes: [
      'Updating the map before counting (counts the empty prefix twice / self-matches).',
      'Forgetting to initialize the map with prefix sum 0 → 1.',
      'Confusing index-based range sum (P[r]-P[l-1]) with value-based counting.',
      'For "at least K" with negatives, still using the hash-map trick (it only works for equals / non-negative monotone cases).'
    ],
    template: `map = { 0: 1 }
prefix = 0, count = 0
for x in arr:
    prefix += x
    count += map[prefix - K]
    map[prefix] += 1
return count`
  },
  {
    id: 'merge-intervals',
    slug: 'merge-intervals',
    name: 'Merge Intervals',
    emoji: '🧩',
    short:
      'Sort intervals by start (or end) then sweep once, merging overlaps. The same sweep powers meeting rooms, CPU load, and free-time problems.',
    definition:
      'Interval problems become linear after sorting. Sort by start time; then if the current interval starts before or at the end of the last kept interval, they overlap — merge (extend the end). Otherwise, keep it as a new interval. Related sweeps: max overlap = meeting rooms / CPU load; gaps = free time.',
    whenToUse: [
      'Merging overlapping intervals.',
      'Inserting an interval into a sorted list.',
      'Intersecting two interval lists.',
      'Maximum number of overlapping intervals (rooms, load).',
      'Finding gaps between intervals (free time).'
    ],
    clues: [
      'intervals [start, end]',
      'overlap / merge / intersect',
      'minimum rooms / maximum load',
      'free time slots',
      'insert / schedule'
    ],
    approach:
      'Sort by start. Sweep with a result list: compare current start with the last kept end. Merge when overlapping, push when not. For max overlap, use a sweep-line on (time, +1/-1) events or a min-heap of ends. For gaps, record the space between merged intervals.',
    mistakes: [
      'Not sorting before sweeping (the whole technique depends on it).',
      'Treating [1,5] and [5,9] as non-overlapping when touching counts as overlap.',
      'For meeting rooms: counting total intervals instead of maximum simultaneous.',
      'For intersections: two-pointer requires both lists sorted; don\'t skip backwards in the wrong list.'
    ],
    template: `sort(intervals by start)
res = []
for iv in intervals:
    if res and iv.start <= last(res).end:
        last(res).end = max(last(res).end, iv.end)
    else:
        res.push(iv)
return res`
  },
  {
    id: 'linked-list-reversal',
    slug: 'linked-list-reversal',
    name: 'In-place Reversal of a LinkedList',
    emoji: '🔁',
    short:
      'Rewire next pointers from left to right (or recursively) to reverse a list, a sublist, pairs, k-groups, or rotate it.',
    definition:
      'Reversing a linked list in place means changing the .next pointers without extra nodes. The core move: keep prev, and for each node, save its next, point it back to prev, then advance. Once you can reverse the whole list, every variant (sublist, k-group, pairs, rotation) is just "reverse this slice and stitch it back".',
    whenToUse: [
      'Reverse the entire list.',
      'Reverse a slice between positions m and n.',
      'Swap/reverse nodes in pairs or in groups of K.',
      'Rotate the list to the right by k.',
      'Any problem that says "reverse part of a linked list".'
    ],
    clues: [
      'reverse linked list',
      'reverse between positions / k group',
      'swap in pairs',
      'rotate list',
      'even-length groups'
    ],
    approach:
      'Master the three-pointer reversal (prev, curr, next). For slices: walk to the start of the slice, reverse length L, then reconnect the left and right ends (keep a dummy node before the start to avoid head edge cases). For k-groups: count nodes ahead; only reverse when a full group exists.',
    mistakes: [
      'Losing the rest of the list — always save curr.next before rewiring.',
      'Forgetting the head can change after a full-list reversal.',
      'Off-by-one when walking to position m (1-indexed problems!).',
      'For k-groups: reversing a partial group at the end (must NOT reverse it).',
      'Not using a dummy head for sublist reversal — edge cases explode.'
    ],
    template: `prev = null, curr = head
while curr:
    next = curr.next
    curr.next = prev
    prev = curr
    curr = next
head = prev`
  },
  {
    id: 'stack',
    slug: 'stack',
    name: 'Stack',
    emoji: '📚',
    short:
      'LIFO memory: the most recent unmatched item decides the next one. Used for matching, next-greater queries, and "pop the previous" cancellations.',
    definition:
      'A stack keeps the most recent element on top. When processing left to right and an element "completes" or "cancels" a previous one, the previous one is the most recent unmatched — exactly what a stack top holds. Classic uses: balanced brackets, next greater element, monotonic stacks, path simplification, and removing adjacent duplicates.',
    whenToUse: [
      'Matching / nesting: parentheses, tags, brackets.',
      'Next greater / smaller element (monotonic stack).',
      'Removal of the most recent item (adjacent duplicates, k digits).',
      'Undo behaviour, path simplification (../).',
      'Evaluating expressions.'
    ],
    clues: [
      'valid / balanced parentheses',
      'next greater element',
      'days until warmer',
      'remove adjacent duplicates',
      'simplify path / remove k digits',
      'nested structure'
    ],
    approach:
      'For next-greater: push indices; while the new element beats the stack top, the top\'s answer is the new element. For matching: push openers, pop on a matching closer (mismatch → invalid). For cancellations: push each item; if it cancels the top, pop instead of push.',
    mistakes: [
      'Pushing the value when you need the index (answers must reference positions).',
      'Forgetting that elements left in a monotonic stack have no greater element (-1).',
      'Mismatched bracket handling: pop only on a matching closer, else invalid.',
      'Off-by-one when the stack stores indices vs values.'
    ],
    template: `stack = []
for i, x in enumerate(arr):
    while stack and beats(x, arr[stack.top]):
        answer[stack.top] = i
        stack.pop()
    stack.push(i)`
  },
  {
    id: 'hash-maps',
    slug: 'hash-maps',
    name: 'Hash Maps',
    emoji: '🗺️',
    short:
      'O(1) lookup by key: count frequencies, remember seen values, or pair up complement values instead of scanning twice.',
    definition:
      'A hash map stores key → value with O(1) average lookup. In DSA it turns "have I seen this before?" and "how many times?" from O(n) scans into constant-time checks. Core uses: frequency counting, two-sum style complement lookup, and grouping.',
    whenToUse: [
      'You need frequency / count of items.',
      'Looking for a complement (target - x, pair, duplicate).',
      'First/last occurrence, uniqueness checks.',
      'Grouping or filtering by a property.',
      'Anagram / character-count comparisons.'
    ],
    clues: [
      'count / frequency / occurrences',
      'first non-repeating',
      'can we form / build (char counts)',
      'unique / duplicate',
      'pair with target (unsorted two-sum)'
    ],
    approach:
      'Decide the key and the value (usually char/number → count or index). One pass: update the map and query the complement. For uniqueness, record first index and check count == 1. For "can form", compare required vs available counts.',
    mistakes: [
      'Counting twice (two passes) when one pass with a running map works.',
      'Key collision surprises — strings vs numbers as keys behave differently in JS/Java.',
      'Forgetting negative modulo / normalizing keys (divisible-by-K prefix sums).',
      'Iterating a map while mutating it.'
    ],
    template: `map = {}
for x in arr:
    if needed(x, map): answer...
    map[x] = (map[x] || 0) + 1`
  },
  {
    id: 'binary-search',
    slug: 'binary-search',
    name: 'Binary Search',
    emoji: '🔍',
    short:
      'Halve the search space each step: O(log n) on sorted data, and O(log answer) for "minimize the maximum / maximize the minimum" problems on a monotonic check.',
    definition:
      'Binary search works whenever the search space is ordered and "is x enough?" is monotonic. Classic: sorted array, keep a mid, discard half. Power move: binary search on the answer (search the value range), where a predicate check(mid) is monotonic — e.g. capacity, minimum days, maximum distance.',
    whenToUse: [
      'Sorted array: find index, first/last, rotation, peak, matrix.',
      'Answer space is numeric and check(mid) is monotonic.',
      'Minimize the maximum / maximize the minimum style.',
      'Finding a boundary (upper/lower, first true).',
      'Kth smallest in a structured matrix (count ≤ mid trick).'
    ],
    clues: [
      'sorted array + find / position',
      'minimum days / minimum capacity / minimum effort',
      'maximize the minimum distance',
      'koko / cows / allocation / bouquets',
      'peak / rotated / mountain'
    ],
    approach:
      'Define the range [lo, hi] and the predicate P(x) that is false...false true...true (or the reverse). Move hi to mid when P(mid) is true, else lo to mid+1. Answer = first true. For arrays, keep the invariant (lo, hi) and choose < vs <= deliberately.',
    mistakes: [
      'off-by-one: mixing lo < hi with hi = hi-1, or lo <= hi with lo = lo+1 — pick one invariant and stick to it.',
      'Infinite loop when mid === lo and you set lo = mid (must be mid+1).',
      'Searching values without thinking about the monotonic predicate.',
      'For rotated arrays: deciding which half is sorted before choosing where target can be.',
      'For 2D matrices II: staircase search is NOT two binary searches.'
    ],
    template: `lo = 0, hi = n - 1
while lo <= hi:
    mid = (lo + hi) >> 1
    if arr[mid] == target: return mid
    elif arr[mid] < target: lo = mid + 1
    else: hi = mid - 1
return -1

// search on answer:
lo, hi = bounds
while lo < hi:
    mid = (lo + hi) >> 1
    if feasible(mid): hi = mid
    else: lo = mid + 1
answer = lo`
  },
  {
    id: 'heap',
    slug: 'heap',
    name: 'Heap',
    emoji: '⛰️',
    short:
      'A priority queue gives the min/max in O(1) and insert/remove in O(log n). K-th problems, merging k streams, top-K, medians — all heap territory.',
    definition:
      'A heap is a complete binary tree where the parent is always greater (max-heap) or smaller (min-heap) than children. You don\'t traverse — you always get the extreme element in O(1) and maintain the structure in O(log n) per update. It is the go-to tool for "top K", "k-th smallest", "merge k sorted", and scheduling.',
    whenToUse: [
      'Top K / K-th smallest or largest (without full sort).',
      'K closest elements / points.',
      'Merging K sorted lists / arrays.',
      'Streaming median (two heaps).',
      'Greedy scheduling (stone weights, refueling, IPO, course schedule III).',
      'Sliding window median (two heaps / two multisets).'
    ],
    clues: [
      'kth smallest / largest / top k frequent',
      'merge k sorted',
      'closest to origin / to target',
      'median from a stream / window',
      'always pick the largest / smallest available'
    ],
    approach:
      'Choose the heap size strategy: keep a heap of size K (min-heap of the K best seen so far → top is the K-th), or use a heap of stream heads for k-way merge. For streaming median: max-heap of the lower half + min-heap of the upper half, rebalance to keep sizes equal (or differ by 1).',
    mistakes: [
      'Using a max-heap when you need the K smallest kept (need a min-heap of size K).',
      'K-way merge: pushing all elements instead of one head per list.',
      'Forgetting heap operation cost is O(log n) — total is O(n log K), not O(n).',
      'Rebalance logic in two heaps: after every insert/delete, fix the size difference.',
      'JS: there is no built-in heap — implement or use a sorted array for small inputs (know the complexity difference).'
    ],
    template: `// kth smallest
minHeap = []
for x in arr:
    push(x)
    if size > K: pop()
return top()   // K-th smallest

// k-way merge
heap of (value, listIndex, pos) for each head
repeat: pop min, output, push next from that list`
  },
  {
    id: 'recursion-backtracking',
    slug: 'recursion-backtracking',
    name: 'Recursion and Backtracking',
    emoji: '🌀',
    short:
      'Define the choice at each step, recurse on the remaining choices, and undo (backtrack) when the choice fails. Builds all combinations and explores trees of decisions.',
    definition:
      'Recursion solves a problem in terms of smaller instances of itself (base case + recursive case). Backtracking is recursion with state: you make a choice, recurse, then undo the choice so the next branch starts clean. This enumerates combinations, permutations, subsets, and constraint solutions without duplicating work you didn\'t do.',
    whenToUse: [
      'Generate all permutations / combinations / subsets.',
      'The problem is "try every possibility, prune bad ones".',
      'State grows by one decision at a time (parentheses, phone keypad, partitioning).',
      'Simple divide steps: Fibonacci, palindrome, sorted check.',
      'Search with undo (N-Queens, Sudoku).',
      'Tree/graph traversal is recursion over structure.'
    ],
    clues: [
      'all / every / generate all',
      'combinations / permutations / partitions',
      'choose K from N',
      'valid parentheses / phone digits',
      'can you reach / does it exist'
    ],
    approach:
      'Write: function(state) { if done: save; for each choice: make choice; recurse; unmake choice }. The "state" is what changes (current path, start index, remaining target). Keep choices deterministic and deduplicate sorted inputs by skipping duplicates at the same level.',
    mistakes: [
      'No base case → infinite recursion / stack overflow.',
      'Forgetting to unmake the choice (backtrack) → corrupted next branch.',
      'Duplicates in combinations: skip same value at the same recursion level.',
      'Mutating shared state across branches instead of passing copies (or properly restoring).',
      'Off-by-one in the "start index" that prevents reusing earlier elements.'
    ],
    template: `function backtrack(path, start):
    if valid/path complete: results.push(copy(path)); return
    for i in start..n-1:
        if duplicate at this level: continue
        path.push(choice i)
        backtrack(path, i + 1)
        path.pop()   // undo`
  },
  {
    id: 'tree',
    slug: 'tree',
    name: 'Tree',
    emoji: '🌳',
    short:
      'Binary trees: traverse (pre/in/post, level-order), reason about paths and depths with recursion, and exploit BST ordering for search and validation.',
    definition:
      'A binary tree node has a value, a left child, and a right child. Almost every tree problem is one of: (1) traverse — visit nodes in a defined order (DFS: pre/in/post; BFS: level order), or (2) compute — recursively ask children for information (depth, sum, validity) and combine. BSTs add the invariant left < node < right, which makes search O(height).',
    whenToUse: [
      'Node traversals in a specific order.',
      'Depth / height / diameter / balance of a tree.',
      'Paths: root-to-leaf sums, all paths, max path through nodes.',
      'Validation: is it a BST / complete / symmetric.',
      'BST search, k-th smallest, two-sum in BST, LCA.',
      'Constructing a tree from traversals.'
    ],
    clues: [
      'root of a binary tree',
      'level order / zigzag',
      'depth / height / diameter / balanced',
      'root to leaf / path sum',
      'validate / is it a (BST, complete, symmetric)',
      'lowest common ancestor'
    ],
    approach:
      'Pick the traversal (DFS is the default). Define what the recursive call returns (e.g. {height, bestPath}). Combine children\'s answers at the node, checking the base case (null → neutral value). For level order: BFS queue, process per level. For BST: use ordering instead of scanning.',
    mistakes: [
      'Base case returning the wrong neutral (0 for max is fine, null checks for min).',
      'Depth vs height confusion, and min-depth: a node with one child still has that child\'s depth.',
      'Diameter: updating a global best with left.height + right.height at every node.',
      'Validate BST: checking only parent-child is not enough — need range (min, max) from ancestors.',
      'Symmetric: mirror comparison is left.left vs right.right AND left.right vs right.left.'
    ],
    template: `function dfs(node):
    if not node: return neutral
    left = dfs(node.left)
    right = dfs(node.right)
    return combine(left, node, right)

// level order:
queue = [root]
while queue:
    level = []
    for _ in queue.size:
        node = queue.shift(); level.push(node.val)
        enqueue children
    levels.push(level)`
  },
  {
    id: 'graphs',
    slug: 'graphs',
    name: 'Graphs',
    emoji: '🕸️',
    short:
      'Nodes + edges explored with BFS/DFS (and visited sets). Shortest paths, cycles, components, topological order, and weighted shortest paths (Dijkstra, Bellman-Ford).',
    definition:
      'A graph is a set of nodes connected by edges. The engine behind almost every graph problem: traversal (BFS for shortest in unweighted, DFS for order/connectivity) with a visited set. On top: components (islands, provinces), cycle detection (undirected: visited parent; directed: 3-color), topological sort (in-degrees), and weighted shortest paths (Dijkstra for non-negative, Bellman-Ford generally).',
    whenToUse: [
      'Grid as graph (islands, rotten oranges, surrounded regions).',
      'Connectivity / components / provinces.',
      'Cycle detection, bipartiteness, coloring.',
      'Shortest path: unweighted (BFS), weighted non-negative (Dijkstra), general (Bellman-Ford).',
      'Ordering with dependencies (courses, topological sort).',
      'State-space search (word ladder).'
    ],
    clues: [
      'grid + islands / regions / paths',
      'prvinces / connected components',
      'cycle / bipartite / colorable',
      'shortest path / minimum time / effort',
      'prerequisites / ordering',
      'one character change (word ladder)'
    ],
    approach:
      'Model it: nodes (cells, cities, words), edges (moves, flights, neighbors). Pick the traversal: BFS for levels/shortest-unweighted, DFS for everything else. Track visited. For weighted: Dijkstra with a priority queue; Bellman-Ford relaxes all edges V-1 times. Topological: Kahn\'s in-degree or DFS post-order reverse.',
    mistakes: [
      'Not marking visited before enqueueing (duplicate processing / infinite loops on cycles).',
      'Undirected cycle: the edge back to parent is NOT a cycle — check neighbor !== parent.',
      'Dijkstra with negative weights (invalid) — need Bellman-Ford.',
      'BFS on a weighted graph for "shortest" (edge count ≠ distance).',
      'Forgetting 0-index vs 1-index in adjacency lists (GFG usually 1-indexed).'
    ],
    template: `// BFS
queue = [start]; visited = {start}
while queue:
    node = queue.shift()
    for nb in neighbors(node):
        if nb in visited: continue
        visited.add(nb); queue.push(nb)

// Dijkstra
dist = {start: 0}
pq = [(0, start)]
while pq:
    (d, u) = popMin(pq)
    if d > dist[u]: continue
    for (v, w) in edges(u):
        if d + w < dist[v]: dist[v] = d + w; push(pq, (dist[v], v))`
  },
  {
    id: 'dp',
    slug: 'dp',
    name: 'DP (Dynamic Programming)',
    emoji: '🧠',
    short:
      'Break the problem into overlapping subproblems, memoize (top-down) or tabulate (bottom-up), and combine states: one table, one answer.',
    definition:
      'Dynamic Programming solves problems with two properties: overlapping subproblems (the same small problem is asked many times) and optimal substructure (the best answer is built from best answers of smaller parts). You define a state (what a subproblem is), a transition (how smaller states build it), and a base case — then compute it once and reuse (memoization) or fill a table (tabulation).',
    whenToUse: [
      'Counting / optimizing over sequences (subarrays, subsequences, strings).',
      'Choices at each step with a cost (knapsack, stocks, robbers, stairs).',
      'Grid paths (unique paths, min cost).',
      'String comparison (LCS, edit distance).',
      'Any "max/min over all ways" where naive recursion explodes.',
      'Optimization over cuts / intervals (min cost to cut).'
    ],
    clues: [
      'max / min / count ways',
      'robbing / stocks / knapsack',
      'longest ... subsequence / increasing',
      'unique paths / min cost path',
      'common subsequence of two strings',
      'one deletion / with constraint variations'
    ],
    approach:
      '1) Define dp[i] (or dp[i][j]) = answer for the subproblem at i. 2) Write the transition from smaller states. 3) Set base cases. 4) Compute bottom-up (or top-down with memo). 5) The answer lives at a specific state (often dp[n]). Reduce space when the transition only looks at the previous row/column.',
    mistakes: [
      'State definition too vague → transition doesn\'t exist.',
      'Wrong base cases (off-by-one, dp[0] vs dp[1]).',
      'Counting order/duplicates (combination sum vs permutation sum).',
      'For stocks III/IV: the state must track number of transactions used, not just bought/sold.',
      'Ignoring the "0/1" (each item once) vs "unbounded" (reusable) difference in knapsack — loop direction matters.'
    ],
    template: `// top-down
memo = {}
function solve(i):
    if i == n: return base
    if i in memo: return memo[i]
    memo[i] = max/min over choices solve(next(i))
    return memo[i]

// bottom-up
dp[0] = base
for i in 1..n:
    dp[i] = combine(dp[i-1], ... )
answer = dp[n]`
  },
  {
    id: 'greedy',
    slug: 'greedy',
    name: 'Greedy',
    emoji: '🎯',
    short:
      'Make the locally best choice now and never look back — works when the local choice can be proven safe and leads to the global optimum.',
    definition:
      'A greedy algorithm builds the answer step by step, each time taking the option that looks best right now. It is correct only when the problem has the greedy-choice property (a locally optimal choice is part of some global optimum) — classic examples: interval scheduling, jump game reachability, assign-to-need matching, fractional knapsack (take by value/weight ratio).',
    whenToUse: [
      'Interval scheduling (earliest end first).',
      'Reachability / jumps (track farthest reachable).',
      'Matching two sorted lists (smallest that satisfies).',
      'Fractional selection (best ratio first).',
      'Coin change for canonical systems (exact currency).',
      'Any problem where "sort by one key, then sweep" proves optimal.'
    ],
    clues: [
      'can you reach / is it possible',
      'maximum jumps / minimum jumps',
      'assign / distribute / satisfy',
      'fractional / partial allowed',
      'always pick the earliest / smallest that works',
      'coins / change with standard denominations'
    ],
    approach:
      'Identify what "locally best" means (usually: earliest end, farthest reach, best ratio, smallest sufficient). Prove to yourself with an exchange argument: swapping a non-greedy choice for the greedy one never hurts. Then implement the sweep, tracking the running state (farthest, smallest unmet need, remaining capacity).',
    mistakes: [
      'Applying greedy where DP is needed (coin change with arbitrary coins is NOT greedy).',
      'Wrong sort key (jump game II: sort by "reachable range" via current interval end, not by value).',
      'Not handling the impossibility case (a gap beyond reach → -1 / false).',
      'For fractional knapsack: taking whole items by ratio but forgetting the fractional last item.',
      'Confusing "is it possible" (boolean greedy) with "minimum number of steps" (interval counting greedy).'
    ],
    template: `sort(items by the greedy key)
state = initial
for item in items:
    if locallyBest(item, state):
        take(item); update(state)
return state.final`
  }
];

export default patterns;

export { patterns };
