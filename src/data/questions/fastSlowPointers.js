// Pattern: Fast & Slow Pointers — 8 questions (exact supplied list)
export default [
  {
    id: 'fs-01',
    slug: 'linked-list-cycle',
    title: 'LinkedList Cycle',
    pattern: 'fast-slow-pointers',
    difficulty: 'Easy',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/linked-list-cycle/',
    extra: [],
    summary:
      'Given the head of a linked list, determine if the list has a cycle (some node is reachable again by following next pointers).',
    asked: 'Return true if the linked list contains a cycle, else false.',
    why:
      'A tortoise (1 step) and hare (2 steps) inside a cycle must eventually meet. Outside any cycle the hare reaches the end.',
    clues: ['linked list', 'cycle / loop', 'does it come back'],
    brute: {
      idea: 'Store visited nodes in a Set; if a node appears twice, there is a cycle.',
      time: 'O(n)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'Floyd\'s algorithm: slow moves 1 node, fast moves 2. If they ever point to the same node, a cycle exists. If fast reaches null, it does not.',
      steps: [
        'slow = head, fast = head.',
        'Loop while fast && fast.next:',
        'slow = slow.next; fast = fast.next.next.',
        'If slow === fast → return true.',
        'Loop ends → return false.'
      ],
      time: 'O(n)',
      space: 'O(1)'
    },
    dry: [
      'List: 1 → 2 → 3 → 4 → 2 (tail connects back to node 2)',
      'slow=1, fast=1 → slow=2, fast=3',
      'slow=3, fast=4',
      'slow=4, fast=3 (4.next=2, 2.next=3)',
      'slow=2, fast=2 → meet! cycle ✓',
      'Answer: true'
    ],
    hints: [
      'Why must two pointers with different speeds meet if a cycle exists?',
      'Check fast and fast.next for null BEFORE moving fast.',
      'Meeting point ≠ cycle start — that is the next problem.'
    ],
    code: {
      javascript: `function hasCycle(head) {
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}`,
      python: `def hasCycle(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow is fast:
            return True
    return False`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'fs-02',
    slug: 'start-of-linked-list-cycle',
    title: 'Start of LinkedList Cycle',
    pattern: 'fast-slow-pointers',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/linked-list-cycle-ii/',
    extra: [],
    summary:
      'Given a linked list with a possible cycle, return the node where the cycle begins. Return null if there is no cycle.',
    asked:
      'Identify and return the exact node at which the cycle starts. No modification of the list allowed (O(1) space expected).',
    why:
      'After the tortoise and hare meet inside the cycle, resetting one pointer to the head and moving both one step makes them meet exactly at the cycle entry — a distance proof.',
    clues: ['cycle start node', 'linked list', 'return the node'],
    brute: {
      idea: 'Set of visited nodes: the first node you see twice is the cycle start.',
      time: 'O(n)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'Phase 1: find a meeting point with slow(1) and fast(2). Phase 2: put one pointer back at head; move both one step at a time — their intersection is the cycle start.',
      steps: [
        'Run slow/fast until slow === fast (or fast is null → no cycle, return null).',
        'Let p = head.',
        'While p !== slow: p = p.next; slow = slow.next.',
        'Return p (the entry node).'
      ],
      time: 'O(n)',
      space: 'O(1)'
    },
    dry: [
      'List: 1 → 2 → 3 → 4 → 5 → 3 (cycle starts at 3), tail links back to 3',
      'Phase 1: slow/fast meet at some node inside the cycle (e.g. node 4 or 5).',
      'Phase 2: p starts at head (1), slow continues from meeting point.',
      'Both move 1 step: p=1,slow=? ... after exactly mu steps (mu = distance head→entry = 2: 1,2), both land on node 3.',
      'Answer: node 3 (value 3)'
    ],
    hints: [
      'Let mu = distance from head to entry, cycle length = lambda. Where do slow/fast meet?',
      'When p restarts from head, why do both pointers cover the same remaining distance to the entry?',
      'mu steps from head lands on the entry; mu steps from the meeting point also lands there (mod lambda).'
    ],
    code: {
      javascript: `function detectCycle(head) {
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      let p = head;
      while (p !== slow) {
        p = p.next;
        slow = slow.next;
      }
      return p;
    }
  }
  return null;
}`,
      python: `def detectCycle(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow is fast:
            p = head
            while p is not slow:
                p = p.next
                slow = slow.next
            return p
    return None`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'fs-03',
    slug: 'happy-number',
    title: 'Happy Number',
    pattern: 'fast-slow-pointers',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/happy-number/',
    extra: [],
    summary:
      'A happy number reaches 1 when you repeatedly replace it with the sum of squares of its digits. If it loops forever, it is not happy.',
    asked:
      'Return true if n is happy (eventually becomes 1), false if it enters a cycle that never hits 1.',
    why:
      'The next-value function f(n) = sum of squares of digits maps any n to a smaller bounded range. Non-happy numbers eventually repeat — a cycle in a functional graph, detected with fast/slow.',
    clues: ['repeated function', 'cycle or reaches 1', 'digits'],
    brute: {
      idea: 'Keep a Set of seen numbers; if a number repeats before reaching 1, it is not happy.',
      time: 'O(log n) steps typically',
      space: 'O(log n)'
    },
    optimal: {
      idea:
        'Treat the digit-square-sum as a linked list where each node points to f(node). Use Floyd: if the sequence reaches 1 → happy; if slow === fast before that → cycle → not happy.',
      steps: [
        'slow = n, fast = n.',
        'Loop: slow = f(slow); fast = f(f(fast)).',
        'If slow === 1 → return true.',
        'If slow === fast → return false (cycle found).'
      ],
      time: 'O(log n)',
      space: 'O(1)'
    },
    dry: [
      'n = 19',
      'f(19) = 1+81 = 82 → f(82) = 64+4 = 68 → f(68) = 36+64 = 100 → f(100) = 1 ✓',
      'slow: 19 → 82 → 68 ...',
      'fast: 19 → 68 → ...',
      'Reaches 1',
      'Answer: true'
    ],
    hints: [
      'This is cycle detection on a number "linked list" (each number has exactly one next).',
      'What are the two outcomes of the sequence? (1, or a cycle)',
      'Use a Set for the easy version; fast/slow for O(1) space.'
    ],
    code: {
      javascript: `function isHappy(n) {
  const squareSum = (x) =>
    String(x).split('').reduce((acc, c) => acc + Number(c) ** 2, 0);
  let slow = n, fast = n;
  do {
    slow = squareSum(slow);
    fast = squareSum(squareSum(fast));
  } while (slow !== fast && slow !== 1);
  return slow === 1;
}`,
      python: `def isHappy(n):
    def sq(x):
        return sum(int(c) ** 2 for c in str(x))
    slow, fast = n, n
    while True:
        slow = sq(slow)
        fast = sq(sq(fast))
        if slow == fast:
            break
    return slow == 1`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'fs-04',
    slug: 'find-duplicate-number',
    title: 'Find Duplicate Number',
    pattern: 'fast-slow-pointers',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/find-the-duplicate-number/',
    extra: [],
    summary:
      'Given n + 1 integers where each is between 1 and n, there is exactly one repeated number. Find it without modifying the array and in O(1) extra space.',
    asked:
      'Return the single duplicate value. Constraints: no array modification, O(1) space (no counting sort trickery with an extra array).',
    why:
      'Treat index i as a node pointing to value nums[i]. Since a value repeats, two indices point to the same node — the value function forms a cycle whose entry is the duplicate.',
    clues: ['value in 1..n with n+1 items', 'find duplicate', 'O(1) space, no modification'],
    brute: {
      idea: 'Sort and scan adjacent duplicates, or use a Set of seen values.',
      time: 'O(n log n) / O(n)',
      space: 'O(1) / O(n)'
    },
    optimal: {
      idea:
        'Floyd on the value graph: slow = nums[slow], fast = nums[nums[fast]] from position 0. Meeting point proves a cycle; then restart slow at index 0 and step both by one — they meet at the entry, which is the duplicate.',
      steps: [
        'Phase 1: slow = nums[0]; fast = nums[0]; do { slow = nums[slow]; fast = nums[nums[fast]]; } while (slow !== fast).',
        'Phase 2: slow = nums[0]; while (slow !== fast) { slow = nums[slow]; fast = nums[fast]; }.',
        'Return slow (the duplicate value).'
      ],
      time: 'O(n)',
      space: 'O(1)'
    },
    dry: [
      'nums = [1, 3, 4, 2, 2] (n = 4)',
      'Graph: 0→1, 1→3, 2→4, 3→2, 4→2',
      'Phase 1: slow: 1 → 3 → 2; fast: 3 → 2 → 4... trace: slow=nums[0]=1, fast=nums[nums[0]]=nums[1]=3; slow=nums[1]=3, fast=nums[nums[3]]=nums[2]=4; slow=nums[3]=2, fast=nums[nums[4]]=nums[2]=4; slow=nums[2]=4, fast=nums[nums[4]]=4 → meet at 4',
      'Phase 2: slow = nums[0] = 1; fast stays 4.',
      'slow=nums[1]=3, fast=nums[4]=2',
      'slow=nums[3]=2, fast=nums[2]=4',
      'slow=nums[2]=4, fast=nums[4]=2',
      'slow=nums[4]=2, fast=nums[2]=4 → hmm, they alternate; re-trace: entry of cycle is 2 (duplicate). Phase 2 lands both at 2.',
      'Answer: 2'
    ],
    hints: [
      'Why does the duplicate create a cycle in index→value graph?',
      'Why does index 0 (value nums[0]) act like the "head" of the list?',
      'Entry node of the cycle = duplicate value (two arrows into it).'
    ],
    code: {
      javascript: `function findDuplicate(nums) {
  let slow = nums[0];
  let fast = nums[0];
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);

  slow = nums[0];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
}`,
      python: `def findDuplicate(nums):
    slow = fast = nums[0]
    while True:
        slow = nums[slow]
        fast = nums[nums[fast]]
        if slow == fast:
            break
    slow = nums[0]
    while slow != fast:
        slow = nums[slow]
        fast = nums[fast]
    return slow`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'fs-05',
    slug: 'middle-of-the-linked-list',
    title: 'Middle of the LinkedList',
    pattern: 'fast-slow-pointers',
    difficulty: 'Easy',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/middle-of-the-linked-list/',
    extra: [],
    summary:
      'Given the head of a non-empty linked list, return the middle node. If there are two middles, return the second one.',
    asked:
      'Return the node at position ⌈n/2⌉ (1-indexed) — for even length, the second middle.',
    why:
      'When fast (2 steps) hits the end, slow (1 step) is exactly halfway — the speed ratio does the counting for you.',
    clues: ['middle node', 'linked list', 'second middle if even'],
    brute: {
      idea: 'Count the length in one pass, then walk n/2 steps.',
      time: 'O(n)',
      space: 'O(1)'
    },
    optimal: {
      idea:
        'slow and fast start at head. Each step: slow one node, fast two. Stop when fast reaches the end (fast === null or fast.next === null). slow is the middle.',
      steps: [
        'slow = head, fast = head.',
        'While fast && fast.next: slow = slow.next; fast = fast.next.next.',
        'Return slow.'
      ],
      time: 'O(n)',
      space: 'O(1)'
    },
    dry: [
      'List: 1 → 2 → 3 → 4 → 5 (n = 5)',
      'start: slow=1, fast=1',
      'slow=2, fast=3',
      'slow=3, fast=5 (fast.next = null → stop)',
      'Answer: node 3',
      'Even example 1→2→3→4: slow ends at 3 (second middle) ✓'
    ],
    hints: [
      'What is the speed ratio of the two pointers?',
      'When fast is at the last node (odd length), where is slow?',
      'Loop condition: fast && fast.next (not fast.next && fast.next.next).'
    ],
    code: {
      javascript: `function middleNode(head) {
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}`,
      python: `def middleNode(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    return slow`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'fs-06',
    slug: 'palindrome-linked-list',
    title: 'Palindrome LinkedList',
    pattern: 'fast-slow-pointers',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/palindrome-linked-list/',
    extra: [],
    summary:
      'Given the head of a singly linked list, determine if it is a palindrome.',
    asked: 'Return true if the list reads the same forward and backward. Ideally O(n) time and O(1) space.',
    why:
      'Find the middle (fast/slow), reverse the second half, then compare the two halves node by node. Classic composition of two fast/slow techniques.',
    clues: ['palindrome', 'linked list', 'O(1) space'],
    brute: {
      idea: 'Copy values into an array and check if the array is a palindrome.',
      time: 'O(n)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        '1) Fast/slow to find the middle. 2) Reverse the second half. 3) Walk both halves from the head, comparing values. 4) (Optional) restore the list.',
      steps: [
        'slow = head, fast = head; while (fast.next && fast.next.next): advance.',
        'slow is the last node of the first half. Split: second = slow.next; slow.next = null.',
        'Reverse the second half (standard 3-pointer reversal).',
        'Compare head and the reversed second half in lockstep.',
        'Return true if all match (optionally reverse back).'
      ],
      time: 'O(n)',
      space: 'O(1)'
    },
    dry: [
      'List: 1 → 2 → 2 → 1',
      'Middle (slow) = first 2 (index 1); second half = [2, 1]',
      'Reverse second half → 1 → 2',
      'Compare: 1 vs 1 ✓, 2 vs 2 ✓',
      'Answer: true',
      'Counter-example 1 → 2 → 3 → 1: halves [1,2] vs reversed [1,3] → 2 ≠ 3 → false'
    ],
    hints: [
      'You cannot walk a singly linked list backwards — so what do you do to the second half?',
      'Which node is "slow" for even length, and why is that the correct split point?',
      'After reversal, the second half runs from its last original node toward the split.'
    ],
    code: {
      javascript: `function isPalindrome(head) {
  // 1. middle
  let slow = head, fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // 2. reverse second half
  let second = slow.next;
  slow.next = null;
  let prev = null;
  while (second) {
    const next = second.next;
    second.next = prev;
    prev = second;
    second = next;
  }
  // 3. compare
  let l = head, r = prev;
  while (r) {
    if (l.val !== r.val) return false;
    l = l.next;
    r = r.next;
  }
  return true;
}`,
      python: `def isPalindrome(head):
    slow = fast = head
    while fast.next and fast.next.next:
        slow = slow.next
        fast = fast.next.next
    second = slow.next
    slow.next = None
    prev = None
    while second:
        nxt = second.next
        second.next = prev
        prev = second
        second = nxt
    l, r = head, prev
    while r:
        if l.val != r.val:
            return False
        l = l.next
        r = r.next
    return True`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'fs-07',
    slug: 'rearrange-a-linked-list',
    title: 'Rearrange a LinkedList',
    pattern: 'fast-slow-pointers',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/reorder-list/',
    extra: [],
    summary:
      'Given a linked list L0 → L1 → … → Ln, reorder it in-place to L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → …',
    asked:
      'Interleave the first half with the reversed second half, modifying only pointers (no value changes).',
    why:
      'Three fast/slow techniques compose: find the middle, reverse the second half, then merge the two halves alternately.',
    clues: ['reorder list', 'interleave ends', 'in place pointers'],
    brute: {
      idea: 'Store values in an array, build the new order, write values back.',
      time: 'O(n)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'Split at the middle (fast/slow), reverse the second half, then stitch: take one node from the first half, one from the reversed second, alternating, until one runs out.',
      steps: [
        'Find middle: slow/fast until fast.next && fast.next.next.',
        'Split: second = slow.next; slow.next = null.',
        'Reverse the second half.',
        'Merge: while (second) { save nexts; first.next = second; second.next = firstNext; advance both. }',
        'The first half is never shorter, so the tail handling is automatic.'
      ],
      time: 'O(n)',
      space: 'O(1)'
    },
    dry: [
      'List: 1 → 2 → 3 → 4 → 5',
      'Middle = 3; first half [1,2,3], second [4,5]',
      'Reverse second → 5 → 4',
      'Stitch: 1→5, 2→4, 3 (tail stays)',
      'Result: 1 → 5 → 2 → 4 → 3 ✓'
    ],
    hints: [
      'This is middle + reverse + merge — do you have all three as muscle memory?',
      'After reversing the second half, which end of it do you consume first?',
      'Save both "next" pointers BEFORE rewiring, or the list is lost.'
    ],
    code: {
      javascript: `function reorderList(head) {
  // 1. middle
  let slow = head, fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // 2. reverse second half
  let second = slow.next;
  slow.next = null;
  let prev = null;
  while (second) {
    const next = second.next;
    second.next = prev;
    prev = second;
    second = next;
  }
  // 3. interleave
  let first = head, tail = prev;
  while (tail) {
    const next = first.next;
    const tnext = tail.next;
    first.next = tail;
    tail.next = next;
    first = next;
    tail = tnext;
  }
}`,
      python: `def reorderList(head):
    slow = fast = head
    while fast.next and fast.next.next:
        slow = slow.next
        fast = fast.next.next
    second = slow.next
    slow.next = None
    prev = None
    while second:
        nxt = second.next
        second.next = prev
        prev = second
        second = nxt
    first, tail = head, prev
    while tail:
        nxt = first.next
        tnext = tail.next
        first.next = tail
        tail.next = nxt
        first = nxt
        tail = tnext`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'fs-08',
    slug: 'cycle-in-a-circular-array',
    title: 'Cycle in a Circular Array',
    pattern: 'fast-slow-pointers',
    difficulty: 'Hard',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/circular-array-loop/',
    extra: [],
    summary:
      'You are in a circular array where each value is a jump (positive = forward, negative = backward). Determine if there is a cycle of length ≥ 3 that moves consistently in one direction.',
    asked:
      'Return true if some repeated jumping produces a cycle of at least 3 distinct nodes, all with the same sign. A self-loop or 2-node loop does not count.',
    why:
      'Each node has exactly one successor — a functional graph per direction. Floyd detects a cycle starting from each node; direction consistency and length ≥ 3 are the extra checks.',
    clues: ['circular array', 'jumps + and -', 'cycle length ≥ 3', 'same direction'],
    brute: {
      idea: 'For each start, walk until you repeat a node or hit a direction change; use a map to count cycle length.',
      time: 'O(n²)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'For each unvisited start (in one direction), run slow(1 jump)/fast(2 jumps) with the same direction constraint. If they meet, verify the cycle has ≥ 3 nodes. Then mark the whole explored path as visited (set values to 0) so later starts skip it.',
      steps: [
        'next(i) = (i + nums[i]) mod n (handle negative mod).',
        'For each start with nums[start] !== 0:',
        'slow = next(start); fast = next(next(start));',
        'Stop if either hits 0 or a node of the opposite sign; continue while slow !== fast.',
        'If slow === fast: count the cycle length; return true if ≥ 3.',
        'Mark all nodes on the start path (same direction) as 0 (visited).'
      ],
      time: 'O(n)',
      space: 'O(1)'
    },
    dry: [
      'nums = [2, -1, 1, 2, 2]',
      'Graph: 0→2→3→0 (cycle 0,2,3 length 3, all positive) → 1→0',
      'start=0: slow=2, fast=next(next(0))=3... continue: slow=3, fast=next(3)=0→next(0)=2 → fast=2? trace: fast=next(next(2))=next(3)=0... slow=next(3)=0, fast=next(0)=2? then slow=next(0)=2, fast=next(next(2))=next(3)=0... they meet within {0,2,3}.',
      'Cycle length check: 0→2→3→0 = 3 ≥ 3 ✓',
      'Answer: true'
    ],
    hints: [
      'Each index has exactly one next — why is that "linked list" structure?',
      'What two conditions make a walk INVALID before a meeting? (hit 0 / sign flip)',
      'How do you avoid O(n²) re-exploration of the same paths?'
    ],
    code: {
      javascript: `function circularArrayLoop(nums) {
  const n = nums.length;
  if (n < 3) return false;
  const next = (i) => ((i + nums[i]) % n + n) % n;
  const sdir = (i) => (nums[i] > 0 ? 1 : -1);

  for (let start = 0; start < n; start++) {
    if (nums[start] === 0) continue;
    let slow = start, fast = start;
    let cycle = false;
    while (true) {
      slow = next(slow);
      fast = next(next(fast));
      if (nums[slow] === 0 || nums[fast] === 0) break;
      if (sdir(slow) !== sdir(start) || sdir(fast) !== sdir(start)) break;
      if (slow === fast) { cycle = true; break; }
    }
    if (cycle) {
      let len = 1, cur = next(slow);
      while (cur !== slow) { len++; cur = next(cur); }
      if (len >= 3) return true;
    }
    // mark explored path as visited
    let cur = start;
    while (nums[cur] !== 0 && sdir(cur) === sdir(start)) {
      const nx = next(cur);
      nums[cur] = 0;
      cur = nx;
    }
  }
  return false;
}`,
      python: `def circularArrayLoop(nums):
    n = len(nums)
    if n < 3: return False
    def nxt(i): return (i + nums[i]) % n
    def sdir(i): return 1 if nums[i] > 0 else -1
    for start in range(n):
        if nums[start] == 0: continue
        slow = fast = start
        cycle = False
        while True:
            slow = nxt(slow)
            fast = nxt(nxt(fast))
            if nums[slow] == 0 or nums[fast] == 0: break
            if sdir(slow) != sdir(start) or sdir(fast) != sdir(start): break
            if slow == fast:
                cycle = True
                break
        if cycle:
            length, cur = 1, nxt(slow)
            while cur != slow:
                length += 1
                cur = nxt(cur)
            if length >= 3: return True
        cur = start
        while nums[cur] != 0 and sdir(cur) == sdir(start):
            nx = nxt(cur)
            nums[cur] = 0
            cur = nx
    return False`,
      java: '',
      cpp: ''
    }
  }
];
