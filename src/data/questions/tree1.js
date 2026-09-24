// Pattern: Tree — questions 1-16 of 31 (exact supplied list)
// Node shape (LeetCode-style): { val, left, right }
export default [
  {
    id: 'tr-01',
    slug: 'inorder-traversal',
    title: 'Inorder Traversal',
    pattern: 'tree',
    difficulty: 'Easy',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/binary-tree-inorder-traversal/',
    extra: [],
    summary:
      'Given the root of a binary tree, return the inorder traversal of its node values (left, node, right).',
    asked: 'The values visited in L-N-R order, left to right.',
    why:
      'Inorder is the recursive workhorse of trees: visit the left subtree, then the node, then the right. For a BST this yields SORTED order.',
    clues: ['binary tree', 'inorder / L-N-R', 'traversal order'],
    brute: {
      idea: 'Recursion (the natural solution) — an explicit stack gives O(1) extra space (Morris).',
      time: 'O(n)',
      space: 'O(h)'
    },
    optimal: {
      idea:
        'f(node): if null return. f(left); record node.val; f(right).',
      steps: [
        'res = [].',
        'f(node): base null → return.',
        'Recurse left, push val, recurse right.',
        'Return res.'
      ],
      time: 'O(n)',
      space: 'O(h) recursion stack'
    },
    dry: [
      'Tree: [1, null, 2, null, 3] (1 → right 2 → right 3)',
      'f(1): f(left=null); push 1; f(2): f(null); push 2; f(3): push 3',
      'Answer: [1, 2, 3]'
    ],
    hints: [
      'In which order do you visit the node itself? (between its subtrees)',
      'The base case is a null child.',
      'For a BST, inorder traversal is a sorted list — a useful sanity check.'
    ],
    code: {
      javascript: `function inorderTraversal(root) {
  const res = [];
  const f = (node) => {
    if (!node) return;
    f(node.left);
    res.push(node.val);
    f(node.right);
  };
  f(root);
  return res;
}`,
      python: `def inorderTraversal(root):
    res = []
    def f(node):
        if not node:
            return
        f(node.left)
        res.append(node.val)
        f(node.right)
    f(root)
    return res`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'tr-02',
    slug: 'preorder-traversal',
    title: 'Preorder Traversal',
    pattern: 'tree',
    difficulty: 'Easy',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/binary-tree-preorder-traversal/',
    extra: [],
    summary:
      'Return the preorder traversal of a binary tree (node, left, right).',
    asked: 'The values visited in N-L-R order.',
    why:
      'Preorder visits the node BEFORE its subtrees — it is how you serialize a tree (root first), and the skeleton for many "process then descend" problems.',
    clues: ['node first', 'N-L-R order', 'serialization order'],
    brute: {
      idea: 'Recursion (or an explicit stack).',
      time: 'O(n)',
      space: 'O(h)'
    },
    optimal: {
      idea:
        'f(node): if null return. Record node.val; f(left); f(right).',
      steps: [
        'res = [].',
        'f(node): base null.',
        'Push val, recurse left, recurse right.',
        'Return res.'
      ],
      time: 'O(n)',
      space: 'O(h)'
    },
    dry: [
      'Tree: 1 → left 2, right 3; 2 → left 4, right 5',
      'f(1): 1; f(2): 2; f(4): 4; f(5): 5; f(3): 3',
      'Answer: [1, 2, 4, 5, 3]'
    ],
    hints: [
      'Which of the three visits happens first?',
      'The skeleton is identical to inorder — only the position of "push val" changes.',
      'Preorder of a BST is NOT sorted — unlike inorder.'
    ],
    code: {
      javascript: `function preorderTraversal(root) {
  const res = [];
  const f = (node) => {
    if (!node) return;
    res.push(node.val);
    f(node.left);
    f(node.right);
  };
  f(root);
  return res;
}`,
      python: `def preorderTraversal(root):
    res = []
    def f(node):
        if not node:
            return
        res.append(node.val)
        f(node.left)
        f(node.right)
    f(root)
    return res`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'tr-03',
    slug: 'postorder-traversal',
    title: 'Postorder Traversal',
    pattern: 'tree',
    difficulty: 'Easy',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/binary-tree-postorder-traversal/',
    extra: [],
    summary:
      'Return the postorder traversal of a binary tree (left, right, node).',
    asked: 'The values visited in L-R-N order. (Homework-style: derive it from what you already know.)',
    why:
      'Postorder processes children BEFORE the parent — ideal when a node\'s answer depends on both subtrees (sizes, sums, validity).',
    clues: ['children first', 'L-R-N order', 'depends on subtrees'],
    brute: {
      idea: 'Recursion (or an explicit stack with a "visited" marker).',
      time: 'O(n)',
      space: 'O(h)'
    },
    optimal: {
      idea:
        'f(node): if null return. f(left); f(right); record node.val.',
      steps: [
        'res = [].',
        'f(node): base null.',
        'Recurse left, recurse right, then push val.',
        'Return res.'
      ],
      time: 'O(n)',
      space: 'O(h)'
    },
    dry: [
      'Tree: 1 → left 2, right 3; 2 → left 4, right 5',
      'f(1): f(2): f(4): 4; f(5): 5; then 2; f(3): 3; then 1',
      'Answer: [4, 5, 2, 3, 1]'
    ],
    hints: [
      'When is "process after children" the right order? (when you need the children\'s answers first)',
      'Same skeleton as the other two traversals — move "push val" to the end.',
      'Postorder is how you would DELETE a tree: delete subtrees, then the node.'
    ],
    code: {
      javascript: `function postorderTraversal(root) {
  const res = [];
  const f = (node) => {
    if (!node) return;
    f(node.left);
    f(node.right);
    res.push(node.val);
  };
  f(root);
  return res;
}`,
      python: `def postorderTraversal(root):
    res = []
    def f(node):
        if not node:
            return
        f(node.left)
        f(node.right)
        res.append(node.val)
    f(root)
    return res`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'tr-04',
    slug: 'level-order-traversal',
    title: 'Level Order',
    pattern: 'tree',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/binary-tree-level-order-traversal/',
    extra: [],
    summary:
      'Return the level order traversal of a binary tree: values grouped by depth, left to right.',
    asked: 'An array of arrays: [level 0, level 1, level 2, ...].',
    why:
      'BFS with a queue: process the queue in "batches" of its current size — each batch is exactly one level.',
    clues: ['level by level', 'BFS / queue', 'group by depth'],
    brute: {
      idea: 'Recursively collect with a depth parameter, appending to the right bucket.',
      time: 'O(n)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'queue = [root]. While queue non-empty: take a batch of size queue.length; for each node in the batch, record its value and enqueue its children. Push the batch as a level.',
      steps: [
        'If root is null: return [].',
        'queue = [root].',
        'While queue.length: level = []; for i in 0..queue.length-1: node = queue.shift(); level.push(node.val); enqueue children.',
        'Push level into the result.',
        'Return the result.'
      ],
      time: 'O(n)',
      space: 'O(n) queue'
    },
    dry: [
      'Tree: 3 → left 9, right 20; 20 → left 15, right 7',
      'batch [3] → level [3]; queue [9, 20]',
      'batch [9, 20] → level [9, 20]; queue [15, 7]',
      'batch [15, 7] → level [15, 7]',
      'Answer: [[3], [9, 20], [15, 7]]'
    ],
    hints: [
      'Why does batching by the queue\'s CURRENT size give exactly one level?',
      'Children of level d are enqueued while processing level d — so they form the next batch.',
      'An array used as a queue (shift) works; for large trees track a head index for O(1) dequeue.'
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
  },
  {
    id: 'tr-05',
    slug: 'zigzag-order',
    title: 'ZigZag Order',
    pattern: 'tree',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/',
    extra: [],
    summary:
      'Level order traversal, but alternate the direction each level: left-to-right, then right-to-left, and so on.',
    asked: 'Zigzag level values as an array of arrays.',
    why:
      'Level order is a BFS — the zigzag is just a direction flag: collect the batch, and reverse it on odd levels.',
    clues: ['alternate direction', 'level order variant', 'zigzag'],
    brute: {
      idea: 'Level order, then reverse every other level.',
      time: 'O(n)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'Same BFS batch loop with a leftToRight flag: if false, reverse the level before recording. Flip the flag each level.',
      steps: [
        'queue = [root]; leftToRight = true.',
        'Batch loop: collect node values and enqueue children.',
        'If !leftToRight: level.reverse().',
        'Push level; leftToRight = !leftToRight.',
        'Return the result.'
      ],
      time: 'O(n)',
      space: 'O(n)'
    },
    dry: [
      'Tree: 3 → 9, 20; 20 → 15, 7',
      'level 0 (L→R): [3]',
      'level 1 (R→L): [20, 9]',
      'level 2 (L→R): [15, 7]',
      'Answer: [[3], [20, 9], [15, 7]]'
    ],
    hints: [
      'The queue still fills left-to-right — only the READING of each level flips.',
      'A single boolean flag toggles each level.',
      'You could also enqueue children in reversed order on flipped levels (avoiding the reverse call).'
    ],
    code: {
      javascript: `function zigzagLevelOrder(root) {
  if (!root) return [];
  const res = [];
  const queue = [root];
  let leftToRight = true;
  while (queue.length) {
    const level = [];
    for (let i = queue.length; i > 0; i--) {
      const node = queue.shift();
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    if (!leftToRight) level.reverse();
    res.push(level);
    leftToRight = !leftToRight;
  }
  return res;
}`,
      python: `from collections import deque
def zigzagLevelOrder(root):
    if not root:
        return []
    res = []
    queue = deque([root])
    left_to_right = True
    while queue:
        level = []
        for _ in range(len(queue)):
            node = queue.popleft()
            level.append(node.val)
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        if not left_to_right:
            level.reverse()
        res.append(level)
        left_to_right = not left_to_right
    return res`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'tr-06',
    slug: 'level-order-ii',
    title: 'Level Order II',
    pattern: 'tree',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/binary-tree-level-order-traversal-ii/',
    extra: [],
    summary:
      'Bottom-up level order: return levels from the LEAF level up to the root. (Homework-style: one change from level order.)',
    asked: 'Levels in reverse depth order.',
    why:
      'Level order produces top-to-bottom; bottom-up is the same result with the levels reversed (or unshifted as they are produced).',
    clues: ['bottom up', 'reverse levels', 'leaf level first'],
    brute: {
      idea: 'Level order + reverse the outer array.',
      time: 'O(n)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'Run the standard BFS batch loop and unshift each level to the FRONT of the result (or reverse at the end).',
      steps: [
        'Standard level order loop.',
        'Instead of res.push(level), use res.unshift(level) — or reverse res at the end.',
        'Return res.'
      ],
      time: 'O(n)',
      space: 'O(n)'
    },
    dry: [
      'Tree: 3 → 9, 20; 20 → 15, 7',
      'Levels: [3] / [9,20] / [15,7]',
      'Reversed: [[15, 7], [9, 20], [3]]',
      'Answer: [[15, 7], [9, 20], [3]]'
    ],
    hints: [
      'What is the ONLY difference from plain level order?',
      'Unshift per level, or reverse once at the end — both are fine.',
      'The BFS logic itself is untouched.'
    ],
    code: {
      javascript: `function levelOrderBottom(root) {
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
    res.unshift(level);
  }
  return res;
}`,
      python: `from collections import deque
def levelOrderBottom(root):
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
        res.insert(0, level)
    return res`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'tr-07',
    slug: 'invert-tree',
    title: 'Invert Tree',
    pattern: 'tree',
    difficulty: 'Easy',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/invert-binary-tree/',
    extra: [],
    summary:
      'Mirror the binary tree: swap the left and right children of every node.',
    asked: 'Return the root of the mirrored tree.',
    why:
      'Recursion over structure: swap the children, then mirror each subtree independently. A textbook "compute = combine children\'s answers" DFS.',
    clues: ['mirror', 'swap children', 'every node'],
    brute: {
      idea: 'Iterate with an explicit stack, swapping as you go.',
      time: 'O(n)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'f(node): if null return null. Save left; node.left = f(right); node.right = f(saved left); return node.',
      steps: [
        'If node is null: return null.',
        'tmp = node.left.',
        'node.left = f(node.right).',
        'node.right = f(tmp).',
        'Return node.'
      ],
      time: 'O(n)',
      space: 'O(h)'
    },
    dry: [
      'Tree: 4 → left 2 (1,3), right 3 (null, 7)',
      'f(4): swap → left=f(3), right=f(2)',
      'f(2): swap → (3, 1); f(3): swap → (7, null)',
      'Result: 4 → left (7, null), right (3, 1) → [4, 3, 2, 7, null, null, 1]',
      'Answer: root of mirrored tree'
    ],
    hints: [
      'After swapping a node\'s children, what remains to be done? (mirror both subtrees)',
      'Save one pointer BEFORE you overwrite it.',
      'The swap + recursion order: pre or post doesn\'t matter — both subtrees are processed anyway.'
    ],
    code: {
      javascript: `function invertTree(root) {
  if (!root) return null;
  const tmp = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(tmp);
  return root;
}`,
      python: `def invertTree(root):
    if not root:
        return None
    root.left, root.right = root.right, root.left
    invertTree(root.left)
    invertTree(root.right)
    return root`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'tr-08',
    slug: 'symmetric-tree',
    title: 'Symmetric Tree',
    pattern: 'tree',
    difficulty: 'Easy',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/symmetric-tree/',
    extra: [],
    summary:
      'Check whether a binary tree is a mirror of itself (symmetric about its center).',
    asked: 'True if the left subtree is the mirror image of the right subtree.',
    why:
      'Symmetry is a TWO-CURSOR question: walk the left and right subtrees in mirror positions (left.left vs right.right, left.right vs right.left) and compare.',
    clues: ['mirror of itself', 'left vs right', 'two-node recursion'],
    brute: {
      idea: 'Serialize left and right subtrees and compare strings.',
      time: 'O(n²) worst',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'f(a, b): both null → true; one null → false; else a.val === b.val && f(a.left, b.right) && f(a.right, b.left). Start with f(root.left, root.right).',
      steps: [
        'If root null: true.',
        'f(a, b) as above (mirror pair comparison).',
        'Answer = f(root.left, root.right).',
        'Note the cross comparison — that is what makes it a MIRROR.'
      ],
      time: 'O(n)',
      space: 'O(h)'
    },
    dry: [
      'Tree: 1 → left 2 (3, 4), right 2 (4, 3)',
      'f(2L, 2R): vals equal',
      '→ f(3L, 3R-mirror): f(2L.left=3, 2R.right=3) → both leaves 3 → true',
      '→ f(2L.right=4, 2R.left=4) → true',
      'Answer: true',
      'Counter: 1 → left 2 (3, null), right 2 (null, 3) → f(3, null) → false'
    ],
    hints: [
      'Which two children should be compared at each step? (the CROSS pair)',
      'Base cases: both empty (true), exactly one empty (false).',
      'This is a two-argument recursion — the "cursor" pair moves in tandem.'
    ],
    code: {
      javascript: `function isSymmetric(root) {
  if (!root) return true;
  const f = (a, b) => {
    if (!a && !b) return true;
    if (!a || !b) return false;
    return a.val === b.val && f(a.left, b.right) && f(a.right, b.left);
  };
  return f(root.left, root.right);
}`,
      python: `def isSymmetric(root):
    if not root:
        return True
    def f(a, b):
        if not a and not b:
            return True
        if not a or not b:
            return False
        return a.val == b.val and f(a.left, b.right) and f(a.right, b.left)
    return f(root.left, root.right)`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'tr-09',
    slug: 'same-tree',
    title: 'Same Tree',
    pattern: 'tree',
    difficulty: 'Easy',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/same-tree/',
    extra: [],
    summary:
      'Given two binary trees, check if they are structurally identical with the same node values. (Homework-style: the simplest two-tree recursion.)',
    asked: 'True iff both trees match exactly, node for node.',
    why:
      'The canonical two-tree walk: compare the node pair, then recurse on the left pair and the right pair — straight down, no crossing.',
    clues: ['two trees equal', 'structure + values', 'pair recursion'],
    brute: {
      idea: 'Serialize both trees and compare.',
      time: 'O(n²) worst',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'f(p, q): both null → true; one null → false; else p.val === q.val && f(p.left, q.left) && f(p.right, q.right).',
      steps: [
        'f(p, q) with the three cases above.',
        'Start f(root1, root2).',
        'Compare values BEFORE recursing (short-circuit).'
      ],
      time: 'O(n)',
      space: 'O(h)'
    },
    dry: [
      'p = [1,2,3], q = [1,2,3]',
      'f(1,1): equal → f(2,2) && f(3,3) → f(null,null)=true both ways',
      'Answer: true',
      'p = [1,2], q = [1,null,2]: f(2, null) → false'
    ],
    hints: [
      'Compare the two base cases first: what if one tree is shorter?',
      'Value check first, then structure — or the other way; both are O(n).',
      'This is the exact engine inside "is symmetric" (with crossed arguments).'
    ],
    code: {
      javascript: `function isSameTree(p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}`,
      python: `def isSameTree(p, q):
    if not p and not q:
        return True
    if not p or not q:
        return False
    return p.val == q.val and isSameTree(p.left, q.left) and isSameTree(p.right, q.right)`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'tr-10',
    slug: 'subtree-of-another-tree',
    title: 'Subtree of Another Tree',
    pattern: 'tree',
    difficulty: 'Easy',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/subtree-of-another-tree/',
    extra: [],
    summary:
      'Check whether tree s contains tree t as a subtree (same structure and node values).',
    asked: 'True if t appears as a contiguous sub-structure of s.',
    why:
      'At every node of s, ASK: does t match starting here? That "match here" is the same-tree recursion. So: sameTree(s, t) || recurse into s\'s children.',
    clues: ['subtree containment', 'check at every node', 'same-tree helper'],
    brute: {
      idea: 'Same — the naive version is already the structure; the "same tree" helper does the work.',
      time: 'O(m·n) worst',
      space: 'O(h)'
    },
    optimal: {
      idea:
        'isSubtree(s, t): if !s return false; if sameTree(s, t) return true; else isSubtree(s.left, t) || isSubtree(s.right, t).',
      steps: [
        'sameTree(a, b): the standard pair comparison.',
        'At each s node: if sameTree(s, t) → true.',
        'Otherwise try s.left and s.right.',
        'Base: s null → false.'
      ],
      time: 'O(m·n) worst (O(m + n) with hashing — advanced)',
      space: 'O(h)'
    },
    dry: [
      's = [3, 4, 5], t = [4, 1, 2]',
      'sameTree(3, 4)? no → try s.left=4: sameTree(4, 4) → children 1,2 vs 1,2 → true',
      'Answer: true',
      's = [3, 4, 5, 1, null, 2], t = [4, 1, 2] → sameTree fails at the 4 (extra 2 on right) → false'
    ],
    hints: [
      'A subtree match can start at ANY node of s — how do you try all of them?',
      'Reuse the "same tree" two-node recursion as a helper.',
      'The outer recursion is just a DFS over candidate roots.'
    ],
    code: {
      javascript: `function isSubtree(root, subRoot) {
  if (!root) return false;
  const same = (a, b) => {
    if (!a && !b) return true;
    if (!a || !b) return false;
    return a.val === b.val && same(a.left, b.left) && same(a.right, b.right);
  };
  return same(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}`,
      python: `def isSubtree(root, subRoot):
    if not root:
        return False
    def same(a, b):
        if not a and not b:
            return True
        if not a or not b:
            return False
        return a.val == b.val and same(a.left, b.left) and same(a.right, b.right)
    return same(root, subRoot) or isSubtree(root.left, subRoot) or isSubtree(root.right, subRoot)`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'tr-11',
    slug: 'flip-equivalent-trees',
    title: 'Flip Equivalent Trees',
    pattern: 'tree',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/flip-equivalent-binary-trees/',
    extra: [],
    summary:
      'Two trees are flip-equivalent if one can become the other by flipping (swapping) any number of nodes. Check whether root1 and root2 are flip-equivalent.',
    asked: 'True if a sequence of child-swaps transforms one tree into the other.',
    why:
      'At each node the children may or may not be swapped — so two candidates: match without flip (left↔left, right↔right) OR with flip (left↔right, right↔left). Either path must succeed everywhere.',
    clues: ['flipping children allowed', 'two match orientations', 'binary choice per node'],
    brute: {
      idea: 'Try all 2^(number of nodes) flip combinations.',
      time: 'O(2ⁿ)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'f(a, b): both null → true; one null → false; values differ → false. Otherwise: (f(a.left, b.left) && f(a.right, b.right)) || (f(a.left, b.right) && f(a.right, b.left)).',
      steps: [
        'Base cases as above.',
        'noFlip = same-orientation recursion.',
        'flip = crossed-orientation recursion.',
        'Return noFlip || flip.'
      ],
      time: 'O(n) with memo on node pairs / O(n²) naive',
      space: 'O(h)'
    },
    dry: [
      'root1 = [1, 2, 3, 4, 5], root2 = [1, 3, 2, 5, 4]',
      'root: 1 == 1; noFlip: f(2,3)? values differ → false',
      'flip: f(2, 3 crossed)... f(root1.left=2, root2.right=2) → children f(4,4)&&f(5,5) → true; f(root1.right=3, root2.left=3) → f(5,5)&&f(4,4) → true',
      'Answer: true'
    ],
    hints: [
      'At each node, which orientations must you consider? (straight and crossed)',
      'If values differ at a pair, no flips below can save it.',
      'This is "same tree" with a choice at every level — OR of two recursive matches.'
    ],
    code: {
      javascript: `function flipEquiv(root1, root2) {
  if (!root1 && !root2) return true;
  if (!root1 || !root2) return false;
  if (root1.val !== root2.val) return false;
  const noFlip =
    flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right);
  if (noFlip) return true;
  return (
    flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left)
  );
}`,
      python: `def flipEquiv(root1, root2):
    if not root1 and not root2:
        return True
    if not root1 or not root2:
        return False
    if root1.val != root2.val:
        return False
    return (
        (flipEquiv(root1.left, root2.left) and flipEquiv(root1.right, root2.right))
        or (flipEquiv(root1.left, root2.right) and flipEquiv(root1.right, root2.left))
    )`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'tr-12',
    slug: 'lca-of-binary-tree',
    title: 'LCA of Binary Tree',
    pattern: 'tree',
    difficulty: 'Hard',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/',
    extra: [],
    summary:
      'Find the lowest common ancestor of two given nodes p and q in a binary tree (not necessarily a BST).',
    asked: 'The deepest node that is an ancestor of both p and q (a node can be its own ancestor).',
    why:
      'DFS returns "where did I find p or q?": if both subtrees report a find, the current node is the LCA; if one does, pass it up. A single post-order pass decides everything.',
    clues: ['common ancestor', 'two targets', 'binary tree (no ordering)'],
    brute: {
      idea: 'For each node, check if both p and q are in its subtree (O(n²)).',
      time: 'O(n²)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'f(node): if node is null, or node === p, or node === q → return node (a "find"). left = f(left); right = f(right). If both non-null → node is the LCA. Else return whichever is non-null (or null).',
      steps: [
        'f(node): base: null / p / q → node.',
        'left = f(node.left); right = f(node.right).',
        'If left && right: return node (the LCA).',
        'Else return left || right.',
        'Call f(root).'
      ],
      time: 'O(n)',
      space: 'O(h)'
    },
    dry: [
      'Tree: 3 → left 5 (6, 2(0,1)), right 1 (4); p = 5, q = 4',
      'f(5): node IS p → returns 5 (a "find" bubbles up from the left side)',
      'f(1): f(4) — node IS q → returns 4 (a "find" bubbles up from the right side)',
      'f(3): left reported 5 AND right reported 4 → both non-null → 3 is the LCA',
      'Answer: 3',
      'Rule: the LCA is the lowest node where the two "finds" first meet going up.'
    ],
    hints: [
      'What should a subtree "report" back to its parent? (whether it contains p or q — and which node)',
      'If both children report a find, what does that say about the current node?',
      'If only one child reports a find, that find must bubble up unchanged.'
    ],
    code: {
      javascript: `function lowestCommonAncestor(root, p, q) {
  if (!root || root === p || root === q) return root;
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (left && right) return root;
  return left || right;
}`,
      python: `def lowestCommonAncestor(root, p, q):
    if not root or root is p or root is q:
        return root
    left = lowestCommonAncestor(root.left, p, q)
    right = lowestCommonAncestor(root.right, p, q)
    if left and right:
        return root
    return left or right`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'tr-13',
    slug: 'search-in-binary-search-tree',
    title: 'Search in Binary Search Tree',
    pattern: 'tree',
    difficulty: 'Easy',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/search-in-a-binary-search-tree/',
    extra: [],
    summary:
      'Given the root of a BST and a value, return the node with that value, or null if absent.',
    asked: 'The node (if it exists) whose value equals the target.',
    why:
      'The BST invariant (left < node < right) means each comparison ELIMINATES a whole subtree — search follows one path down, never both.',
    clues: ['BST', 'search value', 'one path down'],
    brute: {
      idea: 'Full traversal of both subtrees (ignoring the ordering).',
      time: 'O(n)',
      space: 'O(h)'
    },
    optimal: {
      idea:
        'f(node): if node null or node.val === target → node. If target < node.val → f(left), else f(right).',
      steps: [
        'Base: null → null; found → node.',
        'target < node.val: go left.',
        'target > node.val: go right.',
        'Each step discards half the tree (structurally).'
      ],
      time: 'O(h) — O(log n) balanced, O(n) skewed',
      space: 'O(h)'
    },
    dry: [
      'BST: 4 → left 2 (1, 3), right 5; search 5',
      '4: 5 > 4 → right → 5: found',
      'Answer: node 5',
      'search 6: 4 → 5 → right is null → null'
    ],
    hints: [
      'Which subtree can DEFINITELY not contain a value smaller than the node?',
      'Only ONE recursive call per level — that is the whole win over a plain binary tree.',
      'The worst case is a degenerate (skewed) BST — shape matters for complexity.'
    ],
    code: {
      javascript: `function searchBST(root, val) {
  if (!root || root.val === val) return root;
  if (val < root.val) return searchBST(root.left, val);
  return searchBST(root.right, val);
}`,
      python: `def searchBST(root, val):
    if not root or root.val == val:
        return root
    if val < root.val:
        return searchBST(root.left, val)
    return searchBST(root.right, val)`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'tr-14',
    slug: 'lca-of-bst',
    title: 'LCA of BST',
    pattern: 'tree',
    difficulty: 'Easy',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/',
    extra: [],
    summary:
      'Find the lowest common ancestor of two nodes in a BINARY SEARCH TREE.',
    asked: 'The deepest common ancestor, exploiting BST ordering for O(h) time.',
    why:
      'BST ordering decides the LCA without backtracking: if both targets are smaller, it is left; both bigger, it is right; split, the current node IS the LCA.',
    clues: ['BST + two targets', 'split decides', 'no backtracking'],
    brute: {
      idea: 'Generic binary-tree LCA (search both subtrees at every node).',
      time: 'O(n)',
      space: 'O(h)'
    },
    optimal: {
      idea:
        'Walk from the root: if both p and q are < node.val → go left; both > → go right; else node is the LCA (the first node where the path splits, or equals one target).',
      steps: [
        'At node: if p.val < node.val && q.val < node.val → f(left).',
        'If p.val > node.val && q.val > node.val → f(right).',
        'Else return node.',
        'One path, no recursion into both sides.'
      ],
      time: 'O(h)',
      space: 'O(1) iterative / O(h) recursive'
    },
    dry: [
      'BST: 6 → 2 (0,4(3,5)) and 8 (7,9); p = 2, q = 8',
      '6: 2 < 6 and 8 > 6 → split → LCA = 6',
      'p = 7, q = 9: 6 → both > 6 → 8: 7 < 8, 9 > 8 → split → LCA = 8',
      'Answer: 6 / 8 respectively'
    ],
    hints: [
      'If both targets are on the same side, where must the LCA be?',
      'The first node that SPLITs the two targets is the answer — why?',
      'A target equal to the current node is an ancestor of the other (if deeper) — the split rule still works.'
    ],
    code: {
      javascript: `function lowestCommonAncestor(root, p, q) {
  if (!root) return null;
  if (p.val < root.val && q.val < root.val)
    return lowestCommonAncestor(root.left, p, q);
  if (p.val > root.val && q.val > root.val)
    return lowestCommonAncestor(root.right, p, q);
  return root;
}`,
      python: `def lowestCommonAncestor(root, p, q):
    while root:
        if p.val < root.val and q.val < root.val:
            root = root.left
        elif p.val > root.val and q.val > root.val:
            root = root.right
        else:
            return root`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'tr-15',
    slug: 'lca-of-deepest-leaves',
    title: 'LCA of Deepest Leaves',
    pattern: 'tree',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/',
    extra: [],
    summary:
      'Given a binary tree, return the LCA of the deepest leaves (the leaves with maximum depth; there may be several).',
    asked: 'The lowest node that is an ancestor of ALL deepest leaves.',
    why:
      'Each subtree reports (height, candidate): if both children have EQUAL height, all deepest leaves live in BOTH subtrees → the current node is the candidate; otherwise only the taller side can hold them.',
    clues: ['deepest leaves', 'height comparison', 'LCA of a set'],
    brute: {
      idea: 'Find max depth, collect all leaves at that depth, run the generic LCA over the list.',
      time: 'O(n²) worst',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'f(node) returns [height, candidate]: leaves → [0, node]. If left.height === right.height → [h+1, node] (the split point). Else pass up the taller side\'s candidate with height+1.',
      steps: [
        'f(null) → [-1, null].',
        '[lh, lc] = f(left); [rh, rc] = f(right).',
        'If lh === rh: return [lh + 1, node].',
        'Else return [max(lh, rh) + 1, taller side\'s candidate].',
        'Answer = f(root)[1].'
      ],
      time: 'O(n)',
      space: 'O(h)'
    },
    dry: [
      'Tree A: 3 → 5 (6, 2) and 1 (0, 8) — leaves 6, 2, 0, 8 all sit at depth 2',
      'f(6)=[0,6]; f(2)=[0,2] → equal heights → f(5)=[1,5]',
      'f(0)=[0,0]; f(8)=[0,8] → equal heights → f(1)=[1,1]',
      'f(3): both children at height 1 → [2, 3]',
      'Answer: node 3 (deepest leaves live in BOTH subtrees → the root is their LCA)',
      'Tree B: 1 → 2 (3, null) and 4 — the only deepest leaf is 3 (depth 2)',
      'f(3)=[0,3]; f(2)=[1,3]; f(4)=[0,4]; f(1): heights 1 vs 0 → pass up the taller side → [2, 3] → Answer: node 3'
    ],
    hints: [
      'What does it mean if both subtrees have the SAME height? (deepest leaves exist in both)',
      'When heights differ, can the shorter subtree contain the deepest leaves?',
      'The answer node is the FIRST (lowest) node whose two sides both reach the maximum depth.'
    ],
    code: {
      javascript: `function lcaDeepestLeaves(root) {
  const f = (node) => {
    if (!node) return [-1, null];
    const [lh, lc] = f(node.left);
    const [rh, rc] = f(node.right);
    if (lh === rh) return [lh + 1, node];
    return [Math.max(lh, rh) + 1, lh > rh ? lc : rc];
  };
  return f(root)[1];
}`,
      python: `def lcaDeepestLeaves(root):
    def f(node):
        if not node:
            return -1, None
        lh, lc = f(node.left)
        rh, rc = f(node.right)
        if lh == rh:
            return lh + 1, node
        return max(lh, rh) + 1, (lc if lh > rh else rc)
    return f(root)[1]`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'tr-16',
    slug: 'two-sum-iv',
    title: 'Two Sum IV',
    pattern: 'tree',
    difficulty: 'Easy',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/two-sum-iv-input-is-a-bst/',
    extra: [],
    summary:
      'Given a BST and a target k, determine if there exist two distinct nodes whose values sum to k.',
    asked: 'True if any two distinct node values add up to k.',
    why:
      'Inorder traversal of a BST yields SORTED values — then the classic two-pointer pair-sum works. (Or: search for the complement in a set during one traversal.)',
    clues: ['BST + pair sum', 'sorted via inorder', 'two distinct nodes'],
    brute: {
      idea: 'Collect all values, check every pair.',
      time: 'O(n²)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'Walk the tree once with a set: for each node value v, if (k - v) is already in the set → true; else insert v. (Alternative: inorder into a sorted array + two pointers, O(1) extra space beyond the array.)',
      steps: [
        'set = {}.',
        'DFS: at each node: if set has k - v → return true.',
        'Insert v into the set.',
        'Recurse left and right; propagate the true upward.',
        'Distinctness is automatic (complement must have been seen earlier as a DIFFERENT node).'
      ],
      time: 'O(n)',
      space: 'O(n)'
    },
    dry: [
      'BST: 5 → 3(2,4), 6; k = 7',
      'visit 5: set{5}; visit 3: 7-3=4 not in set → set{5,3}; visit 2: 5 not in set → set{5,3,2}; visit 4: 7-4=3 IN set ✓',
      'Answer: true (3 + 4 = 7)'
    ],
    hints: [
      'What special order does a BST give you "for free"? (inorder = sorted)',
      'For each value, what companion would complete the pair? (k - v)',
      'The set must contain values seen BEFORE the current node — that guarantees two distinct nodes.'
    ],
    code: {
      javascript: `function findTarget(root, k) {
  const set = new Set();
  const f = (node) => {
    if (!node) return false;
    if (set.has(k - node.val)) return true;
    set.add(node.val);
    return f(node.left) || f(node.right);
  };
  return f(root);
}`,
      python: `def findTarget(root, k):
    seen = set()
    def f(node):
        if not node:
            return False
        if k - node.val in seen:
            return True
        seen.add(node.val)
        return f(node.left) or f(node.right)
    return f(root)`,
      java: '',
      cpp: ''
    }
  }
];
