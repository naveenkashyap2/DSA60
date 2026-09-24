// Pattern: Tree — questions 17-31 of 31 (exact supplied list)
// Node shape (LeetCode-style): { val, left, right }
export default [
  {
    id: 'tr-17',
    slug: 'kth-smallest-element-in-bst',
    title: 'Kth Smallest Element in BST',
    pattern: 'tree',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/kth-smallest-element-in-a-bst/',
    extra: [],
    summary:
      'Given the root of a BST and an integer k, return the kth smallest value in the tree (1-indexed).',
    asked: 'The kth value in inorder (sorted) order.',
    why:
      'Inorder traversal visits BST values in ascending order — so the kth node visited IS the kth smallest. Stop early as soon as you have counted k nodes.',
    clues: ['kth smallest', 'BST sorted via inorder', 'early stop'],
    brute: {
      idea: 'Full inorder into an array, return index k-1.',
      time: 'O(n)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'Inorder DFS with a counter: visit left, then if this is the kth node → record and stop; else visit right.',
      steps: [
        'ans = null; counter = k.',
        'f(node): if node null or ans set → return.',
        'f(left).',
        'If ans null: counter--; if counter === 0 → ans = node.val.',
        'If ans still null: f(right).',
        'Return ans.'
      ],
      time: 'O(h + k)',
      space: 'O(h)'
    },
    dry: [
      'BST: 3 → 1(null,2) and 5; k = 1',
      'inorder walk: 1 (counter 1→0 → ans = 1) → stop',
      'Answer: 1',
      'k = 3: visit 1, 2, 3 → ans = 3'
    ],
    hints: [
      'In what order does inorder visit a BST?',
      'You only need the kth node — can you stop the traversal there?',
      'The counter decrements exactly at the "visit node" moment of inorder.'
    ],
    code: {
      javascript: `function kthSmallest(root, k) {
  let ans = null;
  const f = (node) => {
    if (!node || ans !== null) return;
    f(node.left);
    if (ans === null) {
      k--;
      if (k === 0) {
        ans = node.val;
        return;
      }
    }
    f(node.right);
  };
  f(root);
  return ans;
}`,
      python: `def kthSmallest(root, k):
    ans = None
    def f(node):
        nonlocal ans, k
        if not node or ans is not None:
            return
        f(node.left)
        if ans is None:
            k -= 1
            if k == 0:
                ans = node.val
                return
        f(node.right)
    f(root)
    return ans`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'tr-18',
    slug: 'minimum-depth-of-binary-tree',
    title: 'Minimum Depth of Binary Tree',
    pattern: 'tree',
    difficulty: 'Easy',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/minimum-depth-of-binary-tree/',
    extra: [],
    summary:
      'Return the minimum depth: number of nodes along the shortest path from root to a LEAF.',
    asked: 'Shortest root→leaf path length (in nodes).',
    why:
      'Recursion like max-depth, but with a trap: a node with only ONE child — that child IS the only leaf direction, so you cannot treat the missing side as depth 0.',
    clues: ['shortest to a leaf', 'one-sided nodes', 'depth in nodes'],
    brute: {
      idea: 'BFS — the first leaf dequeued gives the minimum depth.',
      time: 'O(n)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'f(node): null → 0. If no left child → 1 + f(right). If no right child → 1 + f(left). Else 1 + min(f(left), f(right)). The one-sided cases prevent min(·, 0) from short-circuiting.',
      steps: [
        'null → 0.',
        'Only right child: 1 + f(right).',
        'Only left child: 1 + f(left).',
        'Both: 1 + min(f(left), f(right)).'
      ],
      time: 'O(n)',
      space: 'O(h)'
    },
    dry: [
      'Tree: 4 → left 2(1,3), right null',
      'f(4): no right child → 1 + f(2)',
      'f(2): both children → 1 + min(f(1), f(3)) = 1 + min(1, 1) = 2',
      'Answer: 1 + 2 = 3',
      'Tree [1, null, 2]: f(1): no left → 1 + f(2) = 2 ✓ (leaf must be the 2)'
    ],
    hints: [
      'Why is min(f(left), f(right)) + 1 WRONG for a one-sided node? (the null side is not a leaf)',
      'A leaf is a node with NO children — paths must END at one.',
      'BFS finds it too: first leaf reached is the answer.'
    ],
    code: {
      javascript: `function minDepth(root) {
  if (!root) return 0;
  if (!root.left) return minDepth(root.right) + 1;
  if (!root.right) return minDepth(root.left) + 1;
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
}`,
      python: `def minDepth(root):
    if not root:
        return 0
    if not root.left:
        return minDepth(root.right) + 1
    if not root.right:
        return minDepth(root.left) + 1
    return min(minDepth(root.left), minDepth(root.right)) + 1`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'tr-19',
    slug: 'maximum-depth-of-binary-tree',
    title: 'Maximum Depth of Binary Tree',
    pattern: 'tree',
    difficulty: 'Easy',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/',
    extra: [],
    summary:
      'Return the height of a binary tree: number of nodes along the longest path from root to leaf.',
    asked: 'The longest root→leaf path length (in nodes).',
    why:
      'The canonical divide-and-conquer: depth(node) = 1 + max(depth(left), depth(right)); null → 0. One clean post-order pass.',
    clues: ['longest path', 'height', 'max of children'],
    brute: {
      idea: 'BFS counting levels (same asymptotics).',
      time: 'O(n)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'f(node): if null return 0; else 1 + max(f(left), f(right)).',
      steps: [
        'null → 0.',
        'Recursively compute both subtree depths.',
        'Return 1 + max of the two.',
        'Answer = f(root).'
      ],
      time: 'O(n)',
      space: 'O(h)'
    },
    dry: [
      'Tree: 3 → 9 and 20(15, 7)',
      'f(9)=1, f(15)=1, f(7)=1, f(20)=1+max(1,1)=2, f(3)=1+max(1,2)=3',
      'Answer: 3'
    ],
    hints: [
      'Depth of a node in terms of its children\'s depths?',
      'Base case: what is the depth of "nothing" (null)?',
      'This exact recurrence powers diameter and balanced-check too.'
    ],
    code: {
      javascript: `function maxDepth(root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}`,
      python: `def maxDepth(root):
    if not root:
        return 0
    return 1 + max(maxDepth(root.left), maxDepth(root.right))`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'tr-20',
    slug: 'balanced-binary-tree',
    title: 'Balanced Binary Tree',
    pattern: 'tree',
    difficulty: 'Easy',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/balanced-binary-tree/',
    extra: [],
    summary:
      'A binary tree is height-balanced if every node\'s two subtrees have heights differing by at most 1. Check whether a tree is balanced.',
    asked: 'True iff the balance property holds at EVERY node.',
    why:
      'Naive check recomputes heights → O(n²). The efficient version computes height AND balance in ONE bottom-up pass: a node is balanced iff both children are AND the height difference is ≤ 1.',
    clues: ['height difference ≤ 1', 'at every node', 'avoid recomputing heights'],
    brute: {
      idea: 'At each node, compute height of both subtrees separately, then recurse — heights recomputed many times.',
      time: 'O(n²)',
      space: 'O(h)'
    },
    optimal: {
      idea:
        'f(node) returns [height, balanced]: null → [0, true]. If either child unbalanced → unbalanced. Return [1 + max(lh, rh), |lh - rh| <= 1].',
      steps: [
        'f(null) → [0, true].',
        '[lh, lb] = f(left); [rh, rb] = f(right).',
        'If !lb or !rb → [height, false] (propagate failure).',
        'Else [1 + max(lh, rh), Math.abs(lh - rh) <= 1].'
      ],
      time: 'O(n)',
      space: 'O(h)'
    },
    dry: [
      'Tree: 3 → 4(5(6,7), null) and null; depths: left side depth 3, right 0',
      'f(6)=[1,true], f(7)=[1,true] → f(5)=[2,true]; f(4): left [2], right [0] → diff 2 → [3,false]',
      'f(3): child unbalanced → false',
      'Answer: false',
      'Balanced: 3 → 9, 20(15,7): f(20)=[2,true], f(9)=[1,true] → f(3)=[3,true] ✓'
    ],
    hints: [
      'Where does the O(n²) version waste time? (recomputing heights at every ancestor)',
      'Have each subtree return its height AND its balance status together.',
      'One child unbalanced → the whole tree is unbalanced (fail-fast propagation).'
    ],
    code: {
      javascript: `function isBalanced(root) {
  const f = (node) => {
    if (!node) return [0, true];
    const [lh, lb] = f(node.left);
    const [rh, rb] = f(node.right);
    if (!lb || !rb) return [Math.max(lh, rh) + 1, false];
    return [Math.max(lh, rh) + 1, Math.abs(lh - rh) <= 1];
  };
  return f(root)[1];
}`,
      python: `def isBalanced(root):
    def f(node):
        if not node:
            return 0, True
        lh, lb = f(node.left)
        rh, rb = f(node.right)
        if not lb or not rb:
            return max(lh, rh) + 1, False
        return max(lh, rh) + 1, abs(lh - rh) <= 1
    return f(root)[1]`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'tr-21',
    slug: 'diameter-of-binary-tree',
    title: 'Diameter of Binary Tree',
    pattern: 'tree',
    difficulty: 'Easy',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/diameter-of-binary-tree/',
    extra: [],
    summary:
      'The diameter is the number of nodes on the longest path between ANY two nodes in the tree (the path may or may not pass through the root).',
    asked: 'Longest path between any two nodes, counted in nodes (equivalently edges + 1).',
    why:
      'The longest path passes through SOME node as its "top": at each node the best through-it path is left.height + right.height. Track the global max while computing heights bottom-up.',
    clues: ['longest path anywhere', 'path through a node', 'height + global max'],
    brute: {
      idea: 'For every node compute left+right depth and take the max — with height recomputation O(n²).',
      time: 'O(n²)',
      space: 'O(h)'
    },
    optimal: {
      idea:
        'f(node) returns height. On the way up: diameter candidate = left.height + right.height (paths through this node). Keep global max; return 1 + max(l, r).',
      steps: [
        'diam = 0.',
        'f(null) → 0.',
        'l = f(left); r = f(right).',
        'diam = max(diam, l + r).',
        'Return 1 + max(l, r).',
        'Answer: diam (edges) → nodes = diam + 1 in edge-count convention; here with height counted in nodes, l + r - 1... use: candidate = l + r (edges) then final answer in nodes = best + 1. (LeetCode counts edges: answer is l + r directly.)'
      ],
      time: 'O(n)',
      space: 'O(h)'
    },
    dry: [
      'Tree: 1 → 2(4, 5) and 3',
      'f(4)=1, f(5)=1 → at 2: candidate = 2 (path 4-2-5); height 2',
      'f(3)=1; at 1: candidate = 2 + 1 = 3 (path 4-2-1-3); height 3',
      'Answer: 3 (edges) — LeetCode convention'
    ],
    hints: [
      'Any path has a HIGHEST node — at that node, the path is left-depth + right-depth.',
      'Compute heights once, bottom-up; evaluate the "through me" candidate at every node.',
      'A leaf-leaf path through the root can beat any root-leaf path.'
    ],
    code: {
      javascript: `function diameterOfBinaryTree(root) {
  let diam = 0;
  const f = (node) => {
    if (!node) return 0;
    const l = f(node.left);
    const r = f(node.right);
    diam = Math.max(diam, l + r);
    return 1 + Math.max(l, r);
  };
  f(root);
  return diam; // edges (LeetCode convention)
}`,
      python: `def diameterOfBinaryTree(root):
    diam = 0
    def f(node):
        nonlocal diam
        if not node:
            return 0
        l = f(node.left)
        r = f(node.right)
        diam = max(diam, l + r)
        return 1 + max(l, r)
    f(root)
    return diam`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'tr-22',
    slug: 'check-completeness-of-a-binary-tree',
    title: 'Check Completeness of a Binary Tree',
    pattern: 'tree',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/check-completeness-of-a-binary-tree/',
    extra: [],
    summary:
      'A binary tree is COMPLETE if every level is fully filled, and all nodes are as far left as possible. Check completeness.',
    asked: 'True iff the level-order node sequence has no "gap" (null before a real node).',
    why:
      'Level order (BFS) of a complete tree produces all nodes first, then nulls. So: enqueue children (even nulls); if you see a null and then later a real node → not complete.',
    clues: ['fully filled levels', 'left-packed', 'BFS gap detection'],
    brute: {
      idea: 'Compute level sizes and shapes manually (error-prone).',
      time: 'O(n)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'queue = [root]; nullSeen = false. Dequeue: if null → nullSeen = true. If non-null: if nullSeen → false (gap); enqueue left and right (including nulls). Finish → true.',
      steps: [
        'Start BFS with the root.',
        'Track whether a null child has been seen.',
        'A non-null node AFTER a null breaks completeness.',
        'Always enqueue both children (nulls included) — that is what makes the gap visible.'
      ],
      time: 'O(n)',
      space: 'O(n)'
    },
    dry: [
      'Complete: 1 → 2(4,5), 3(6,null): BFS order 1,2,3,null,4,5,6,null... nulls only after all nodes → true',
      'Not complete: 1 → 2(null,5), 3: BFS: 1,2,3,null,null,5 → node 5 after nulls → false',
      'Answer: true / false'
    ],
    hints: [
      'What does the BFS (level order) node sequence look like for a complete tree? (all nodes, then nulls)',
      'A single "gap" — a null followed by a real node — disproves completeness.',
      'You MUST enqueue null children to expose the gap.'
    ],
    code: {
      javascript: `function isCompleteTree(root) {
  if (!root) return true;
  const queue = [root];
  let nullSeen = false;
  while (queue.length) {
    const node = queue.shift();
    if (!node) {
      nullSeen = true;
      continue;
    }
    if (nullSeen) return false;
    queue.push(node.left);
    queue.push(node.right);
  }
  return true;
}`,
      python: `from collections import deque
def isCompleteTree(root):
    if not root:
        return True
    queue = deque([root])
    null_seen = False
    while queue:
        node = queue.popleft()
        if not node:
            null_seen = True
            continue
        if null_seen:
            return False
        queue.append(node.left)
        queue.append(node.right)
    return True`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'tr-23',
    slug: 'validate-bst',
    title: 'Validate BST',
    pattern: 'tree',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/validate-binary-search-tree/',
    extra: [],
    summary:
      'Check whether a binary tree is a valid BST: every node\'s left subtree holds only smaller values and right subtree only larger values (strict).',
    asked: 'True iff the BST invariant holds globally — not just parent vs child.',
    why:
      'The trap is local checks only (child < parent): a grandchild can violate the rule against a distant ancestor. The fix: pass allowed bounds (lo, hi) down — every node must stay strictly inside its window.',
    clues: ['global ordering', 'bounds window', 'not just parent-child'],
    brute: {
      idea: 'Inorder traversal must be strictly increasing (valid but O(n) extra space).',
      time: 'O(n)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'f(node, lo, hi): null → true. If node.val <= lo or >= hi → false. Else f(left, lo, node.val) && f(right, node.val, hi). Start f(root, -∞, +∞).',
      steps: [
        'Each node carries the open interval of legal values.',
        'Left child inherits (lo, node.val); right inherits (node.val, hi).',
        'Out-of-interval → false; null → true.',
        'Strict inequalities (duplicates are illegal).'
      ],
      time: 'O(n)',
      space: 'O(h)'
    },
    dry: [
      'Tree: 2(1, 3(3, null)) → invalid: the 3 in the right-right position must be > 2 AND > 3? It is in the right subtree of the right child: bounds (3, ∞) → 3 <= 3 → false ✓',
      'Tree: 2(1, 4(3,5)) → all inside windows → true',
      'Answer: false / true'
    ],
    hints: [
      'Why is "every node > its left child and < its right child" NOT enough? (grandchildren vs ancestors)',
      'What information does a node need to check its children? (the allowed value RANGE, not just the parent)',
      'The range narrows as you descend: left turns the upper bound, right turns the lower.'
    ],
    code: {
      javascript: `function isValidBST(root) {
  const f = (node, lo, hi) => {
    if (!node) return true;
    if (node.val <= lo || node.val >= hi) return false;
    return f(node.left, lo, node.val) && f(node.right, node.val, hi);
  };
  return f(root, -Infinity, Infinity);
}`,
      python: `def isValidBST(root):
    def f(node, lo, hi):
        if not node:
            return True
        if not (lo < node.val < hi):
            return False
        return f(node.left, lo, node.val) and f(node.right, node.val, hi)
    return f(root, float('-inf'), float('inf'))`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'tr-24',
    slug: 'recover-bst',
    title: 'Recover BST',
    pattern: 'tree',
    difficulty: 'Hard',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/recover-binary-search-tree/',
    extra: [],
    summary:
      'Two nodes in a BST were accidentally swapped. Recover the tree (swap them back) in-place.',
    asked: 'Identify and swap the two corrupted nodes. (Follow-up: O(1) space.)',
    why:
      'Inorder traversal of a valid BST is strictly increasing. Two swapped nodes create exactly ONE or TWO "descents" (prev > curr): the first descent\'s prev and the second descent\'s curr are the swapped pair.',
    clues: ['two nodes swapped', 'inorder should increase', 'one or two violations'],
    brute: {
      idea: 'Collect inorder values, find the two out-of-place values by sorting comparison, swap.',
      time: 'O(n log n)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'Inorder walk with prev pointer: whenever prev.val > node.val, record first = first || prev, second = node. At the end, swap first.val and second.val. (One violation → neighbors; two violations → first\'s prev and second\'s curr.)',
      steps: [
        'first = second = null; prev = null.',
        'Inorder: at each node: if prev && prev.val > node.val: if !first: first = prev; second = node.',
        'prev = node.',
        'After the walk: swap first.val ↔ second.val.'
      ],
      time: 'O(n)',
      space: 'O(h) recursion (Morris → O(1))'
    },
    dry: [
      'BST [1, 3, null, null, 2] → inorder: 1, 3, 2 → descents: (3,2) only once → first = 3, second = 2',
      'swap → inorder 1, 2, 3 ✓',
      'Two-violation example: 5(3,4) with 3 and 5 swapped: inorder 4, 5, 3 → descents (5,4)? values 4,5,3: descent at (5,3): first=5, second=3 → swap → 3,4,5 ✓',
      'Answer: tree repaired in-place'
    ],
    hints: [
      'What order makes a BST "visible" as sorted? (inorder)',
      'A single swap breaks monotonicity in at most TWO adjacent pairs.',
      'Which end of each broken pair is the misplaced node? (first pair: the LEFT end; second pair: the RIGHT end)'
    ],
    code: {
      javascript: `function recoverTree(root) {
  let first = null, second = null, prev = null;
  const f = (node) => {
    if (!node) return;
    f(node.left);
    if (prev && prev.val > node.val) {
      if (!first) first = prev;
      second = node;
    }
    prev = node;
    f(node.right);
  };
  f(root);
  const t = first.val;
  first.val = second.val;
  second.val = t;
}`,
      python: `def recoverTree(root):
    first = second = prev = None
    def f(node):
        nonlocal first, second, prev
        if not node:
            return
        f(node.left)
        if prev is not None and prev.val > node.val:
            if first is None:
                first = prev
            second = node
        prev = node
        f(node.right)
    f(root)
    first.val, second.val = second.val, first.val`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'tr-25',
    slug: 'path-sum',
    title: 'Path Sum',
    pattern: 'tree',
    difficulty: 'Easy',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/path-sum/',
    extra: [],
    summary:
      'Given a binary tree and a target sum, determine if there is a root-to-leaf path where the node values sum to the target.',
    asked: 'True iff some root→leaf path sums exactly to targetSum.',
    why:
      'Carry the running requirement DOWN: at a node, the subtrees must achieve (target - node.val). A leaf matches exactly when its value equals the remaining target. (A leaf is mandatory — an internal prefix does NOT count.)',
    clues: ['root to leaf', 'remaining target', 'leaf check'],
    brute: {
      idea: 'Enumerate all root-leaf paths and sum each.',
      time: 'O(n²) worst',
      space: 'O(h)'
    },
    optimal: {
      idea:
        'f(node, remaining): null → false. Leaf → node.val === remaining. Else f(left, remaining - node.val) || f(right, remaining - node.val).',
      steps: [
        'null → false.',
        'If leaf: return node.val === remaining.',
        'Recurse into children with remaining - node.val.',
        'OR the two sides.'
      ],
      time: 'O(n)',
      space: 'O(h)'
    },
    dry: [
      'Tree: 5 → left 4 (11(2(1,4), 5)), right 3 (null, 8(13,4)); target 22',
      'f(5, 22): not a leaf → f(4, 17) or f(3, 17)',
      'f(4, 17): not a leaf → f(11, 13)',
      'f(11, 13): not a leaf → f(2, 2)',
      'f(2, 2): leaf and 2 === remaining → true',
      'Answer: true (path 5 → 4 → 11 → 2 sums to 22)'
    ],
    hints: [
      'What does each subtree have to "achieve"? (the remaining target after the current node)',
      'Why must the path END at a leaf? (a node with value = remaining but children still existing is not a valid stop)',
      'Carry "remaining" down instead of "sum so far" up — same thing, cleaner base case.'
    ],
    code: {
      javascript: `function hasPathSum(root, targetSum) {
  if (!root) return false;
  if (!root.left && !root.right) return root.val === targetSum;
  return hasPathSum(root.left, targetSum - root.val) ||
         hasPathSum(root.right, targetSum - root.val);
}`,
      python: `def hasPathSum(root, targetSum):
    if not root:
        return False
    if not root.left and not root.right:
        return root.val == targetSum
    return hasPathSum(root.left, targetSum - root.val) or hasPathSum(root.right, targetSum - root.val)`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'tr-26',
    slug: 'path-sum-ii',
    title: 'Path Sum II',
    pattern: 'tree',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/path-sum-ii/',
    extra: [],
    summary:
      'Return ALL root-to-leaf paths where the node values sum to the target sum.',
    asked: 'Every valid root→leaf path as a list of values.',
    why:
      'Backtracking on a tree: keep the current path, push as you go, pop as you retreat; record a copy of the path when a leaf matches. Same "remaining target" idea as Path Sum, plus the trail.',
    clues: ['all paths', 'root to leaf', 'backtrack the path'],
    brute: {
      idea: 'Recursion that copies the path array each step (same asymptotics, more allocation).',
      time: 'O(n · h)',
      space: 'O(h)'
    },
    optimal: {
      idea:
        'f(node, remaining, path): null → return. Push node.val. If leaf and remaining === node.val → save a copy. Recurse both sides with remaining - node.val. Pop node.val.',
      steps: [
        'path = [] (shared, mutated).',
        'Enter node: path.push(node.val).',
        'Leaf check: remaining === node.val → res.push([...path]).',
        'Recurse left/right with remaining - node.val.',
        'Exit node: path.pop().',
        'Start f(root, target, []).'
      ],
      time: 'O(n · h)',
      space: 'O(h) + output'
    },
    dry: [
      'Tree: 5 → left 4 (11(2(1,4), 5)), right 3 (null, 8(13,4)); target 22',
      'Path 5→4→11→2: 5+4+11+2 = 22, and 2 is a leaf → save [5, 4, 11, 2]',
      'Other leaves: 5→4→11→5 = 25 ✗; 5→3→8→13 = 29 ✗; 5→3→8→4 = 20 ✗',
      'Answer: [[5, 4, 11, 2]]'
    ],
    hints: [
      'What do you need to remember between "entering" and "exiting" a node? (the current path)',
      'Why push/pop instead of copying at every node? (the shared path is mutated; only record a COPY on a match)',
      'A match is only valid at a LEAF — an internal node with the right prefix sum does not stop the search.'
    ],
    code: {
      javascript: `function pathSum(root, targetSum) {
  const res = [];
  const f = (node, remaining, path) => {
    if (!node) return;
    path.push(node.val);
    if (!node.left && !node.right && remaining === node.val) {
      res.push([...path]);
    }
    f(node.left, remaining - node.val, path);
    f(node.right, remaining - node.val, path);
    path.pop();
  };
  f(root, targetSum, []);
  return res;
}`,
      python: `def pathSum(root, targetSum):
    res = []
    def f(node, remaining, path):
        if not node:
            return
        path.append(node.val)
        if not node.left and not node.right and remaining == node.val:
            res.append(list(path))
        f(node.left, remaining - node.val, path)
        f(node.right, remaining - node.val, path)
        path.pop()
    f(root, targetSum, [])
    return res`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'tr-27',
    slug: 'sum-root-to-leaf-numbers',
    title: 'Sum Root to Leaf Numbers',
    pattern: 'tree',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/sum-root-to-leaf-numbers/',
    extra: [],
    summary:
      'Each root-to-leaf path forms a number (e.g. 1→2→3 → 123). Return the total sum of all such numbers.',
    asked: 'Sum of the numbers encoded by every root-to-leaf path.',
    why:
      'Carry the running number DOWN: cur = cur * 10 + node.val. At a leaf, the number is complete — return cur; otherwise sum both subtrees\' contributions.',
    clues: ['path forms a number', 'shift and add', 'leaf completes'],
    brute: {
      idea: 'Collect each path as a string, parse to a number, sum.',
      time: 'O(n · h)',
      space: 'O(h)'
    },
    optimal: {
      idea:
        'f(node, cur): null → 0. cur = cur * 10 + node.val. If leaf → cur. Else f(left, cur) + f(right, cur).',
      steps: [
        'At each node, append its digit: cur * 10 + val.',
        'Leaf: the number is done → return cur.',
        'Internal: return the sum of both children\'s subtrees.',
        'Start f(root, 0).'
      ],
      time: 'O(n)',
      space: 'O(h)'
    },
    dry: [
      'Tree: 1 → 2 and 3; numbers: 12 and 13',
      'f(1,0) → cur 1; f(2,1) → cur 12 (leaf) → 12; f(3,1) → cur 13 → 13',
      'Answer: 25'
    ],
    hints: [
      'How do you "append a digit" to a number arithmetically? (multiply by 10, add)',
      'Where is a number COMPLETE? (at a leaf)',
      'Internal nodes contribute nothing directly — they only relay the running number.'
    ],
    code: {
      javascript: `function sumNumbers(root) {
  const f = (node, cur) => {
    if (!node) return 0;
    cur = cur * 10 + node.val;
    if (!node.left && !node.right) return cur;
    return f(node.left, cur) + f(node.right, cur);
  };
  return f(root, 0);
}`,
      python: `def sumNumbers(root):
    def f(node, cur):
        if not node:
            return 0
        cur = cur * 10 + node.val
        if not node.left and not node.right:
            return cur
        return f(node.left, cur) + f(node.right, cur)
    return f(root, 0)`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'tr-28',
    slug: 'binary-tree-maximum-path-sum',
    title: 'Binary Tree Maximum Path Sum',
    pattern: 'tree',
    difficulty: 'Hard',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/binary-tree-maximum-path-sum/',
    extra: [],
    summary:
      'A path in a tree starts and ends at any node (does not need root/leaves, visits each node at most once). Return the maximum path sum.',
    asked: 'Max over all paths of the sum of node values along it (values may be negative).',
    why:
      'At each node, the best path THROUGH it is node.val + best(left side) + best(right side) — but a side is only worth taking if it is positive. The function must also return the best "one-sided" gain (for the parent to extend), which is a different quantity than the through-me answer.',
    clues: ['path anywhere', 'two possible exits', 'negative nodes hurt'],
    brute: {
      idea: 'Try every pair of nodes with LCA-based path sums.',
      time: 'O(n²)',
      space: 'O(h)'
    },
    optimal: {
      idea:
        'f(node) returns the max gain of a path that STARTS at node and goes DOWN one side. Through-me candidate = node.val + max(0, f(left)) + max(0, f(right)) → update global best. Return node.val + max(0, max(f(left), f(right))). max(0, ·) means "take the side only if it helps" — a single negative node can be the best path.',
      steps: [
        'best = -∞.',
        'f(null) → 0.',
        'l = max(0, f(left)); r = max(0, f(right)).',
        'best = max(best, node.val + l + r).',
        'Return node.val + max(l, r).',
        'Answer = best.'
      ],
      time: 'O(n)',
      space: 'O(h)'
    },
    dry: [
      'Tree: -10 → 9 and 20(15, 7); best path 15 + 20 + 7 = 42',
      'f(9)=9; f(15)=15; f(7)=7; f(20): l=15,r=7 → best = 20+15+7 = 42; return 20+15=35',
      'f(-10): l=max(0,9)=9? left child 9 → l=9, r=35 → best = max(42, -10+9+35=34) = 42',
      'Answer: 42'
    ],
    hints: [
      'A path through a node can use AT MOST two of its branches (one per side) — why not more?',
      'If a subtree\'s best downward gain is negative, should the parent use it? (no — max with 0)',
      'The answer a node RETURNS (one-sided) is not the same as the answer it REPORTS (through-me) — keep both distinct.'
    ],
    code: {
      javascript: `function maxPathSum(root) {
  let best = -Infinity;
  const f = (node) => {
    if (!node) return 0;
    const l = Math.max(0, f(node.left));
    const r = Math.max(0, f(node.right));
    best = Math.max(best, node.val + l + r);
    return node.val + Math.max(l, r);
  };
  f(root);
  return best;
}`,
      python: `def maxPathSum(root):
    best = float('-inf')
    def f(node):
        nonlocal best
        if not node:
            return 0
        l = max(0, f(node.left))
        r = max(0, f(node.right))
        best = max(best, node.val + l + r)
        return node.val + max(l, r)
    f(root)
    return best`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'tr-29',
    slug: 'construct-tree-preorder-inorder',
    title: 'Construct Tree from Preorder and Inorder',
    pattern: 'tree',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/',
    extra: [],
    summary:
      'Given the preorder and inorder traversals of a binary tree (distinct values), reconstruct the tree.',
    asked: 'The tree (as root node) that produces both traversals.',
    why:
      'Preorder\'s first element is the ROOT. Inorder splits around that root: everything left of it is the left subtree, everything right is the right subtree. Recurse on the two halves with advancing preorder windows.',
    clues: ['preorder + inorder', 'root splits inorder', 'reconstruction'],
    brute: {
      idea: 'Search for the root in inorder at every recursion step (linear scans).',
      time: 'O(n²)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'Map value → inorder index. preI = 0. f(lo, hi): if lo > hi → null. root = preorder[preI++]; node = new TreeNode(root); mid = index[root]; node.left = f(lo, mid-1); node.right = f(mid+1, hi); return node.',
      steps: [
        'Build the value→index map for O(1) splits.',
        'A shared preorder pointer advances as roots are consumed (preorder: root, left, right).',
        'Left subtree first (it comes next in preorder), then right.',
        'Base: lo > hi → null.'
      ],
      time: 'O(n)',
      space: 'O(n) map + O(h) stack'
    },
    dry: [
      'preorder = [3, 9, 20, 15, 7], inorder = [9, 3, 15, 20, 7]',
      'root 3: left part [9] → f(0,0) → node 9; right part [15,20,7] → f(2,4)',
      'f(2,4): root 20: left [15] → 15; right [7] → 7',
      'Tree: 3(9, 20(15,7)) ✓',
      'Answer: root of reconstructed tree'
    ],
    hints: [
      'Which element of preorder is always the root of the current subtree?',
      'What does the root\'s position in inorder tell you? (the size of each side)',
      'Process the LEFT subtree before the RIGHT — that is exactly the order roots appear in preorder.'
    ],
    code: {
      javascript: `function buildTree(preorder, inorder) {
  const idx = new Map();
  inorder.forEach((v, i) => idx.set(v, i));
  let preI = 0;
  const f = (lo, hi) => {
    if (lo > hi) return null;
    const val = preorder[preI++];
    const node = { val, left: null, right: null };
    const mid = idx.get(val);
    node.left = f(lo, mid - 1);
    node.right = f(mid + 1, hi);
    return node;
  };
  return f(0, inorder.length - 1);
}`,
      python: `def buildTree(preorder, inorder):
    idx = {v: i for i, v in enumerate(inorder)}
    pre_i = [0]
    def f(lo, hi):
        if lo > hi:
            return None
        val = preorder[pre_i[0]]
        pre_i[0] += 1
        node = TreeNode(val)
        mid = idx[val]
        node.left = f(lo, mid - 1)
        node.right = f(mid + 1, hi)
        return node
    return f(0, len(inorder) - 1)

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'tr-30',
    slug: 'construct-tree-inorder-postorder',
    title: 'Construct Tree from Inorder and Postorder',
    pattern: 'tree',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/',
    extra: [],
    summary:
      'Given the inorder and postorder traversals (distinct values), reconstruct the tree.',
    asked: 'The tree that produces both traversals.',
    why:
      'Postorder\'s LAST element is the root. Same inorder-split as before — but now the right subtree must be built BEFORE the left (postorder: left, right, root — read from the end, roots come right-first).',
    clues: ['postorder + inorder', 'root = last of postorder', 'right subtree first'],
    brute: {
      idea: 'Linear scans for the root in inorder each step.',
      time: 'O(n²)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'postI = postorder.length - 1. f(lo, hi): if lo > hi → null. root = postorder[postI--]; node = new TreeNode(root); mid = index[root]; node.right = f(mid+1, hi); node.left = f(lo, mid-1); return node. (Right first — postorder was consumed from the end.)',
      steps: [
        'Value → inorder-index map.',
        'Consume postorder from the END (postI starts at the last index).',
        'Build the RIGHT subtree, then the LEFT.',
        'Base lo > hi → null.'
      ],
      time: 'O(n)',
      space: 'O(n) + O(h)'
    },
    dry: [
      'inorder = [9, 3, 15, 20, 7], postorder = [9, 15, 7, 20, 3]',
      'root = postorder[last] = 3; split inorder at 3: left [9], right [15, 20, 7]',
      'Build right first: postI=3 → root 20; split at 20: left [15], right [7]; right: postI=2 → 7; left: postI=1 → 15',
      'Build left: postI=0 → 9',
      'Tree: 3(9, 20(15, 7)) ✓',
      'Answer: root of reconstructed tree'
    ],
    hints: [
      'Which postorder element is the root of the whole tree? (the LAST one)',
      'In what order should you build the subtrees now? (right, then left — why?)',
      'It is the mirror image of the preorder version: same split, opposite consumption.'
    ],
    code: {
      javascript: `function buildTree(inorder, postorder) {
  const idx = new Map();
  inorder.forEach((v, i) => idx.set(v, i));
  let postI = postorder.length - 1;
  const f = (lo, hi) => {
    if (lo > hi) return null;
    const val = postorder[postI--];
    const node = { val, left: null, right: null };
    const mid = idx.get(val);
    node.right = f(mid + 1, hi);
    node.left = f(lo, mid - 1);
    return node;
  };
  return f(0, inorder.length - 1);
}`,
      python: `def buildTree(inorder, postorder):
    idx = {v: i for i, v in enumerate(inorder)}
    post_i = [len(postorder) - 1]
    def f(lo, hi):
        if lo > hi:
            return None
        val = postorder[post_i[0]]
        post_i[0] -= 1
        node = TreeNode(val)
        mid = idx[val]
        node.right = f(mid + 1, hi)
        node.left = f(lo, mid - 1)
        return node
    return f(0, len(inorder) - 1)

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'tr-31',
    slug: 'sorted-array-to-bst',
    title: 'Sorted Array to BST',
    pattern: 'tree',
    difficulty: 'Easy',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/',
    extra: [],
    summary:
      'Given a sorted (ascending) array of distinct integers, build a height-balanced binary search tree.',
    asked: 'Any balanced BST containing the values (one valid construction is enough).',
    why:
      'Pick the middle element as the root — it splits the array into two equal halves that become the left and right subtrees. Recurse on each half. The middle choice is what keeps the height balanced.',
    clues: ['sorted array', 'middle as root', 'height balanced'],
    brute: {
      idea: 'Make the first element the root of a skewed chain (not balanced).',
      time: 'O(n²) construction',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'f(lo, hi): if lo > hi → null. mid = (lo + hi) / 2; node = new TreeNode(nums[mid]); node.left = f(lo, mid-1); node.right = f(mid+1, hi); return node.',
      steps: [
        'Middle element = current root.',
        'Left half → left subtree; right half → right subtree.',
        'Each recursion halves the interval → height ⌈log₂ n⌉.',
        'Answer: f(0, n-1).'
      ],
      time: 'O(n)',
      space: 'O(log n) recursion'
    },
    dry: [
      'nums = [1, 2, 3, 4, 5]',
      'root = nums[2] = 3',
      'left: [1,2] → root 2, left 1',
      'right: [4,5] → root 5, left 4',
      'Tree: 3(2(1,null), 5(4,null)) — balanced, and its inorder is [1,2,3,4,5] ✓',
      'Answer: root (node 3)'
    ],
    hints: [
      'Which array element should be the root to keep both sides equal-sized?',
      'What property makes the array "BST-ready"? (sorted = inorder order)',
      'The recursion interval [lo, hi] always exactly matches the subtree\'s node set.'
    ],
    code: {
      javascript: `function sortedArrayToBST(nums) {
  const f = (lo, hi) => {
    if (lo > hi) return null;
    const mid = (lo + hi) >> 1;
    const node = { val: nums[mid], left: null, right: null };
    node.left = f(lo, mid - 1);
    node.right = f(mid + 1, hi);
    return node;
  };
  return f(0, nums.length - 1);
}`,
      python: `def sortedArrayToBST(nums):
    def f(lo, hi):
        if lo > hi:
            return None
        mid = (lo + hi) // 2
        node = TreeNode(nums[mid])
        node.left = f(lo, mid - 1)
        node.right = f(mid + 1, hi)
        return node
    return f(0, len(nums) - 1)

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right`,
      java: '',
      cpp: ''
    }
  }
];
