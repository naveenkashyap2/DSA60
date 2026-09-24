// Pattern: In-place Reversal of a LinkedList — 6 questions (exact supplied list)
export default [
  {
    id: 'lr-01',
    slug: 'reverse-a-linked-list',
    title: 'Reverse a LinkedList',
    pattern: 'linked-list-reversal',
    difficulty: 'Easy',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/reverse-linked-list/',
    extra: [],
    summary:
      'Given the head of a singly linked list, reverse the list and return the new head.',
    asked:
      'Rewire the next pointers in place so the list runs backwards. Return the (new) head.',
    why:
      'This is THE core skill of the pattern: three pointers (prev, cur, next) rewiring one node at a time, left to right.',
    clues: ['reverse the list', 'singly linked list', 'in place'],
    brute: {
      idea: 'Push all values onto a stack / array, rebuild the list backwards.',
      time: 'O(n)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'Iterative: prev = null, cur = head. For each node: save next, point cur.next back to prev, advance prev and cur. When cur is null, prev is the new head.',
      steps: [
        'prev = null, cur = head.',
        'While cur !== null:',
        'next = cur.next (save the rest).',
        'cur.next = prev (reverse the arrow).',
        'prev = cur; cur = next.',
        'Return prev.'
      ],
      time: 'O(n)',
      space: 'O(1)'
    },
    dry: [
      'List: 1 → 2 → 3 → null',
      'prev=null, cur=1: next=2; 1.next=null; prev=1, cur=2',
      'prev=1, cur=2: next=3; 2.next=1; prev=2, cur=3',
      'prev=2, cur=3: next=null; 3.next=2; prev=3, cur=null',
      'Stop → new head = 3',
      'Result: 3 → 2 → 1 → null ✓'
    ],
    hints: [
      'What three things must you remember per node? (prev, cur, next)',
      'Why save cur.next BEFORE overwriting it?',
      'Which pointer is the answer when the loop ends?'
    ],
    code: {
      javascript: `function reverseList(head) {
  let prev = null, cur = head;
  while (cur) {
    const next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
}`,
      python: `def reverseList(head):
    prev = None
    cur = head
    while cur:
        nxt = cur.next
        cur.next = prev
        prev = cur
        cur = nxt
    return prev`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'lr-02',
    slug: 'reverse-a-sub-list',
    title: 'Reverse a Sub-list',
    pattern: 'linked-list-reversal',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/reverse-linked-list-ii/',
    extra: [],
    summary:
      'Reverse the nodes of a singly linked list from position m to position n (1-indexed), in one pass.',
    asked:
      'Reverse only the slice [m..n], keeping the rest of the list intact. Return the head.',
    why:
      'Master move of the pattern: reverse a SLICE and stitch it back. A dummy head removes the "head might change" edge case; walk to m-1, then perform (n-m) rotations.',
    clues: ['reverse between positions', '1-indexed m and n', 'one pass'],
    brute: {
      idea: 'Collect values of the slice, reverse the array, write back.',
      time: 'O(n)',
      space: 'O(n-m)'
    },
    optimal: {
      idea:
        'prev points to the node before the slice (use a dummy before head). headOfSlice = prev.next. Repeat (n - m) times: pull the node after headOfSlice to right after prev. This reverses the slice in place.',
      steps: [
        'dummy → head; walk prev to node m-1.',
        'cur = prev.next (first node of the slice).',
        'For i in 0..n-m-1:',
        'next = cur.next; cur.next = next.next; next.next = prev.next; prev.next = next.',
        'Return dummy.next.'
      ],
      time: 'O(n)',
      space: 'O(1)'
    },
    dry: [
      'List: 1 → 2 → 3 → 4 → 5, m = 2, n = 4',
      'prev = node 1; cur = node 2',
      'Step 1: pull node 3 after prev → 1 → 3 → 2 → 4 → 5',
      'Step 2: pull node 4 after prev → 1 → 4 → 3 → 2 → 5',
      'Result: 1 → 4 → 3 → 2 → 5 ✓ (slice [2..4] reversed)'
    ],
    hints: [
      'Which node must NEVER be lost? (the node before the slice — use a dummy)',
      'Instead of reversing pointers one by one, can you ROTATE nodes to the front of the slice?',
      'How many rotations does a slice of length L need? (L - 1)'
    ],
    code: {
      javascript: `function reverseBetween(head, left, right) {
  const dummy = { next: head };
  let prev = dummy;
  for (let i = 0; i < left - 1; i++) prev = prev.next;
  const cur = prev.next;
  for (let i = 0; i < right - left; i++) {
    const next = cur.next;
    cur.next = next.next;
    next.next = prev.next;
    prev.next = next;
  }
  return dummy.next;
}`,
      python: `def reverseBetween(head, left, right):
    dummy = ListNode(0)
    dummy.next = head
    prev = dummy
    for _ in range(left - 1):
        prev = prev.next
    cur = prev.next
    for _ in range(right - left):
        nxt = cur.next
        cur.next = nxt.next
        nxt.next = prev.next
        prev.next = nxt
    return dummy.next`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'lr-03',
    slug: 'reverse-list-in-pairs',
    title: 'Reverse List in Pairs',
    pattern: 'linked-list-reversal',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/swap-nodes-in-pairs/',
    extra: [],
    summary:
      'Swap every two adjacent nodes of a linked list and return the modified list.',
    asked:
      'Rewire (not revalue): 1↔2, 3↔4, ... A trailing single node stays at the end. One pass, O(1) space.',
    why:
      'Reversal of a fixed slice of length 2, repeated. A prev pointer before each pair keeps the links to the previous pair intact.',
    clues: ['swap in pairs', 'adjacent nodes', 'linked list'],
    brute: {
      idea: 'Extract values into an array, swap pairs, rebuild.',
      time: 'O(n)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'dummy → head. prev points before the current pair. While two nodes remain: first = prev.next, second = first.next. Rewire: first.next = second.next; second.next = first; prev.next = second. Then prev = first (the pair\'s new tail).',
      steps: [
        'dummy.next = head; prev = dummy.',
        'While prev.next && prev.next.next:',
        'first = prev.next; second = first.next.',
        'first.next = second.next.',
        'second.next = first.',
        'prev.next = second.',
        'prev = first.',
        'Return dummy.next.'
      ],
      time: 'O(n)',
      space: 'O(1)'
    },
    dry: [
      'List: 1 → 2 → 3 → 4',
      'prev=dummy: pair (1,2) → dummy → 2 → 1; prev = 1',
      'pair (3,4) → 1 → 4 → 3',
      'Result: 2 → 1 → 4 → 3 ✓'
    ],
    hints: [
      'Keep a pointer to the node BEFORE each pair — that is what gets re-linked.',
      'After swapping, where does "prev" go for the next iteration?',
      'What happens to a leftover single node? (it is just never touched)'
    ],
    code: {
      javascript: `function swapPairs(head) {
  const dummy = { next: head };
  let prev = dummy;
  while (prev.next && prev.next.next) {
    const first = prev.next;
    const second = first.next;
    first.next = second.next;
    second.next = first;
    prev.next = second;
    prev = first;
  }
  return dummy.next;
}`,
      python: `def swapPairs(head):
    dummy = ListNode(0)
    dummy.next = head
    prev = dummy
    while prev.next and prev.next.next:
        first = prev.next
        second = first.next
        first.next = second.next
        second.next = first
        prev.next = second
        prev = first
    return dummy.next`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'lr-04',
    slug: 'reverse-every-k-element-sub-list',
    title: 'Reverse every K-element Sub-list',
    pattern: 'linked-list-reversal',
    difficulty: 'Hard',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/reverse-nodes-in-k-group/',
    extra: [],
    summary:
      'Reverse the nodes of a linked list k at a time and return the modified list. Groups of less than k at the tail must NOT be reversed.',
    asked:
      'Chunk the list into groups of k, reverse each full group, leave a short tail untouched.',
    why:
      'Composition of: count nodes ahead (is there a full group?), reverse a slice of length k (the base skill), reconnect head/tail, and recurse for the rest.',
    clues: ['reverse in k groups', 'tail shorter than k untouched', 'linked list'],
    brute: {
      idea: 'Values into an array; reverse each full k-block; rebuild.',
      time: 'O(n)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'First check that k nodes remain; if not, stop (tail stays). Reverse exactly k nodes with the 3-pointer technique; the old head becomes the tail and must point to the next group (recurse on it); the new head is the old k-th node.',
      steps: [
        'Count forward k nodes from head; if fewer than k exist, return head unchanged.',
        'Reverse the first k nodes (prev/cur loop, k iterations).',
        'head.next = reverseKGroup(nextAfterK, k).',
        'Return prev (new head of this group).'
      ],
      time: 'O(n)',
      space: 'O(n/k) recursion stack (O(1) iteratively with a tail pointer)'
    },
    dry: [
      'List: 1 → 2 → 3 → 4 → 5, k = 2',
      'Group 1: 2 nodes exist → reverse → 2 → 1; tail (1) must link to the rest',
      'Recurse on 3 → 4 → 5: reverse 3,4 → 4 → 3',
      'Recurse on 5: fewer than 2 nodes → return 5',
      'Stitch: 2 → 1 → 4 → 3 → 5 ✓'
    ],
    hints: [
      'How do you know there is a FULL group of k before reversing?',
      'After reversing k nodes, which node is the new head and which is the new tail?',
      'The new tail must connect to the (recursively processed) rest of the list.'
    ],
    code: {
      javascript: `function reverseKGroup(head, k) {
  let count = 0;
  for (let cur = head; cur; cur = cur.next) count++;
  if (count < k) return head;

  let prev = null, cur = head;
  for (let i = 0; i < k; i++) {
    const next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  head.next = reverseKGroup(cur, k);
  return prev;
}`,
      python: `def reverseKGroup(head, k):
    count = 0
    cur = head
    while cur:
        count += 1
        cur = cur.next
    if count < k:
        return head
    prev = None
    cur = head
    for _ in range(k):
        nxt = cur.next
        cur.next = prev
        prev = cur
        cur = nxt
    head.next = reverseKGroup(cur, k)
    return prev`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'lr-05',
    slug: 'reverse-nodes-in-even-length-groups',
    title: 'Reverse Nodes in Even Length Groups',
    pattern: 'linked-list-reversal',
    difficulty: 'Hard',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/reverse-nodes-in-even-length-groups/',
    extra: [],
    summary:
      'Split the list into groups of lengths 1, 2, 4, 8, ... (doubling; the last group may be shorter). Reverse every group whose length is EVEN.',
    asked:
      'Apply the group rule, reverse only even-sized groups in place, and return the head.',
    why:
      'Grouping + slice reversal. The doubling rule decides each group\'s size; for each group you measure its real size (it may be cut short by the end of the list), then reverse if even.',
    clues: ['groups 1, 2, 4, 8...', 'reverse even-length groups', 'doubling'],
    brute: {
      idea: 'Values into an array; slice per the rule; reverse even slices; rebuild.',
      time: 'O(n)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'Walk the list with len = 1, 2, 4, ...: measure up to len nodes (the real count may be smaller at the end). If count is even, reverse that slice (3-pointer) and re-stitch; otherwise just advance to the slice tail.',
      steps: [
        'len = 1; prevTail = null; cur = head.',
        'While cur: measure count = min(len, remaining).',
        'If count % 2 === 0: reverse the slice; if prevTail, prevTail.next = newHead else head = newHead; oldHead.next = tailAfterGroup; prevTail = oldHead.',
        'Else: walk count-1 steps to the tail; prevTail = tail.',
        'cur = node after the group; len *= 2.',
        'Return head.'
      ],
      time: 'O(n)',
      space: 'O(1)'
    },
    dry: [
      'List: 9 → 6 → 4 → 8 → 5 → 8 → 4 → 4 → 7',
      'Group len 1: [9] odd → keep',
      'Group len 2: [6,4] even → reverse → 4,6',
      'Group len 4: [8,5,8,4] even → reverse → 4,8,5,8',
      'Group len 8: remaining [4,7] (cut short, count 2, even) → reverse → 7,4',
      'Result: 9 → 4 → 6 → 4 → 8 → 5 → 8 → 7 → 4 ✓'
    ],
    hints: [
      'Group sizes double: 1, 2, 4, 8 — and the LAST group may be shorter than planned.',
      'Measure the real group size before deciding to reverse.',
      'After reversing, remember to re-stitch: new head (from prevTail) and old head → next group.'
    ],
    code: {
      javascript: `function reverseEvenLengthGroups(head) {
  let len = 1;
  let prevTail = null;
  let cur = head;
  while (cur) {
    let count = 0;
    let tail = cur;
    while (tail && count < len) {
      tail = tail.next;
      count++;
    }
    const groupStart = cur;
    if (count % 2 === 0) {
      let prev = null, node = groupStart;
      for (let i = 0; i < count; i++) {
        const next = node.next;
        node.next = prev;
        prev = node;
        node = next;
      }
      if (prevTail) prevTail.next = prev;
      else head = prev;
      groupStart.next = tail;
      prevTail = groupStart;
    } else {
      let node = cur;
      for (let i = 0; i < count - 1; i++) node = node.next;
      prevTail = node;
    }
    cur = tail;
    len *= 2;
  }
  return head;
}`,
      python: `def reverseEvenLengthGroups(head):
    length = 1
    prev_tail = None
    cur = head
    while cur:
        count = 0
        tail = cur
        while tail and count < length:
            tail = tail.next
            count += 1
        group_start = cur
        if count % 2 == 0:
            prev, node = None, group_start
            for _ in range(count):
                nxt = node.next
                node.next = prev
                prev = node
                node = nxt
            if prev_tail:
                prev_tail.next = prev
            else:
                head = prev
            group_start.next = tail
            prev_tail = group_start
        else:
            node = cur
            for _ in range(count - 1):
                node = node.next
            prev_tail = node
        cur = tail
        length *= 2
    return head`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'lr-06',
    slug: 'rotate-a-linked-list',
    title: 'Rotate a LinkedList',
    pattern: 'linked-list-reversal',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/rotate-list/',
    extra: [],
    summary:
      'Rotate a linked list to the right by k places (the last k nodes come to the front).',
    asked:
      'Return the list after rotating right by k positions. k may be larger than the list length.',
    why:
      'Make the list circular, then cut it at the right spot: the (n - k % n)-th node becomes the last, and its next becomes the new head.',
    clues: ['rotate right by k', 'k can exceed n', 'linked list'],
    brute: {
      idea: 'Physically move the last node to the front, k % n times.',
      time: 'O(n · (k % n))',
      space: 'O(1)'
    },
    optimal: {
      idea:
        'Find n and the tail (one pass). k %= n. Connect tail → head (circle). Walk n - k - 1 steps from head; that node becomes the new tail (cut it); the next node is the new head.',
      steps: [
        'Find the length n and the tail node.',
        'k = k % n; if k === 0, return head.',
        'tail.next = head (make it circular).',
        'Walk to node number n - k; set newHead = cur.next; cur.next = null.',
        'Return newHead.'
      ],
      time: 'O(n)',
      space: 'O(1)'
    },
    dry: [
      'List: 1 → 2 → 3 → 4 → 5, k = 2 (n = 5)',
      'tail = 5; make circular: 5 → 1',
      'cut position = 5 - 2 = 3 → node 3',
      '3.next = null; new head = 4',
      'Result: 4 → 5 → 1 → 2 → 3 ✓'
    ],
    hints: [
      'Rotating n times does nothing — reduce k first.',
      'A rotation is a single cut in a circular list: why make it circular?',
      'The node that becomes the LAST one is at position n - k.'
    ],
    code: {
      javascript: `function rotateRight(head, k) {
  if (!head || !head.next || k === 0) return head;
  let n = 1, tail = head;
  while (tail.next) {
    tail = tail.next;
    n++;
  }
  k = k % n;
  if (k === 0) return head;
  tail.next = head;
  let cur = head;
  for (let i = 0; i < n - k - 1; i++) cur = cur.next;
  const newHead = cur.next;
  cur.next = null;
  return newHead;
}`,
      python: `def rotateRight(head, k):
    if not head or not head.next or k == 0:
        return head
    n, tail = 1, head
    while tail.next:
        tail = tail.next
        n += 1
    k %= n
    if k == 0:
        return head
    tail.next = head
    cur = head
    for _ in range(n - k - 1):
        cur = cur.next
    new_head = cur.next
    cur.next = None
    return new_head`,
      java: '',
      cpp: ''
    }
  }
];
