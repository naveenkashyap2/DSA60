// Pattern: Stack — 9 questions (exact supplied list)
export default [
  {
    id: 'st-01',
    slug: 'remove-adjacent-duplicates',
    title: 'Remove Adjacent Duplicates',
    pattern: 'stack',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/',
    extra: [],
    summary:
      'Remove all adjacent duplicate characters from a string repeatedly until no more removals are possible, then return the final string.',
    asked:
      'Cascade removal: "abbaca" → "aca" (bb removed, then aa removed). Return the final string.',
    why:
      'Each new character only interacts with the MOST RECENT remaining one — exactly the stack top. Push, or cancel the top when equal.',
    clues: ['adjacent duplicates', 'repeatedly remove', 'final string'],
    brute: {
      idea: 'Loop the string, remove adjacent equal pairs, repeat until stable.',
      time: 'O(n²) worst',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'Use an array as a stack. For each char c: if the stack is non-empty and the top equals c, pop (cancellation); otherwise push c. The remaining stack is the answer.',
      steps: [
        'stack = [].',
        'For each char c in s:',
        'If stack.length && stack[top] === c → pop (they cancel).',
        'Else push c.',
        'Return stack.join("").'
      ],
      time: 'O(n)',
      space: 'O(n)'
    },
    dry: [
      's = "abbaca"',
      'a → [a]',
      'b → [a,b]',
      'b → top b matches → pop → [a]',
      'a → top a matches → pop → []',
      'c → [c]',
      'Answer: "c"'
    ],
    hints: [
      'A character can only cancel with the character just before it in the REMAINING string.',
      'Which data structure gives you "the most recent remaining item" in O(1)?',
      'Each char is pushed and popped at most once — that is the O(n) argument.'
    ],
    code: {
      javascript: `function removeDuplicates(s) {
  const stack = [];
  for (const c of s) {
    if (stack.length && stack[stack.length - 1] === c) stack.pop();
    else stack.push(c);
  }
  return stack.join('');
}`,
      python: `def removeDuplicates(s):
    stack = []
    for c in s:
        if stack and stack[-1] == c:
            stack.pop()
        else:
            stack.append(c)
    return ''.join(stack)`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'st-02',
    slug: 'balanced-parentheses',
    title: 'Balanced Parentheses',
    pattern: 'stack',
    difficulty: 'Easy',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/valid-parentheses/',
    extra: [],
    summary:
      'Given a string of brackets ( ) [ ] { }, decide whether it is valid: every opener closes with the matching type in the correct order.',
    asked: 'Return true if the bracket string is well-formed.',
    why:
      'The closer must match the MOST RECENT unclosed opener — LIFO. Push openers, pop and compare on closers, and the stack must be empty at the end.',
    clues: ['matching brackets', 'nested structure', 'valid or not'],
    brute: {
      idea: 'Repeatedly remove innermost matched pairs until none remain.',
      time: 'O(n²)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'Stack of openers. For each char: push if opener. If closer: pop; if stack empty or the popped opener does not match → invalid. At the end: valid iff the stack is empty.',
      steps: [
        'map: ) → (, ] → [, } → {.',
        'For each c:',
        'If c is an opener: push it.',
        'If c is a closer: if stack empty or stack.pop() !== map[c] → return false.',
        'Return stack.length === 0.'
      ],
      time: 'O(n)',
      space: 'O(n)'
    },
    dry: [
      's = "{[]}"',
      'Open { → push → stack: [ { ]',
      'Open [ → push → stack: [ {, [ ]',
      'Closer ] → pop [ → matches ✓ → stack: [ { ]',
      'Closer } → pop { → matches ✓ → stack: []',
      'Empty stack → Answer: true',
      'Counter: "([)]": at ) the top is [ → mismatch → false'
    ],
    hints: [
      'Which opener must a closer match? (the most recent unclosed one)',
      'What two failures at a closer mean invalid? (no opener / wrong type)',
      'What does a NON-empty stack at the end mean?'
    ],
    code: {
      javascript: `function isValid(s) {
  const pair = { ')': '(', ']': '[', '}': '{' };
  const openers = new Set(['(', '[', '{']);
  const stack = [];
  for (const c of s) {
    if (openers.has(c)) stack.push(c);
    else {
      if (!stack.length || stack.pop() !== pair[c]) return false;
    }
  }
  return stack.length === 0;
}`,
      python: `def isValid(s):
    pair = {')': '(', ']': '[', '}': '{'}
    openers = set('([{')
    stack = []
    for c in s:
        if c in openers:
            stack.append(c)
        else:
            if not stack or stack.pop() != pair[c]:
                return False
    return not stack`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'st-03',
    slug: 'reverse-a-string',
    title: 'Reverse a String',
    pattern: 'stack',
    difficulty: 'Easy',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/reverse-string/',
    extra: [],
    summary:
      'Reverse a string in place (modify the character array / list).',
    asked:
      'Return the string with characters in reverse order — classically done with two pointers or a stack.',
    why:
      'A stack reads the string front-to-back and pops it back out back-to-front — a minimal illustration of LIFO reversal.',
    clues: ['reverse order', 'in place', 'character array'],
    brute: {
      idea: 'Push all chars onto a stack, pop into the result (O(n) space).',
      time: 'O(n)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'Two pointers from both ends, swapping as they meet. (The stack version works too — push all, pop all — but two pointers use O(1) space.)',
      steps: [
        'left = 0, right = n - 1.',
        'While left < right: swap s[left] and s[right]; left++; right--.',
        'Return s.'
      ],
      time: 'O(n)',
      space: 'O(1)'
    },
    dry: [
      's = ["h", "e", "l", "l", "o"]',
      'swap o↔h → [o,e,l,l,h]',
      'swap l↔e → [o,l,l,e,h]',
      'pointers meet at l → stop',
      'Answer: "olleh"'
    ],
    hints: [
      'The first character becomes the last — which pairs up with what?',
      'Two pointers moving inward swap a matching pair each step.',
      'Stop when the pointers meet (middle char of an odd-length string swaps with itself).'
    ],
    code: {
      javascript: `function reverseString(s) {
  let l = 0, r = s.length - 1;
  while (l < r) {
    [s[l], s[r]] = [s[r], s[l]];
    l++;
    r--;
  }
}`,
      python: `def reverseString(s):
    l, r = 0, len(s) - 1
    while l < r:
        s[l], s[r] = s[r], s[l]
        l += 1
        r -= 1`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'st-04',
    slug: 'next-greater-element',
    title: 'Next Greater Element',
    pattern: 'stack',
    difficulty: 'Easy',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/next-greater-element-ii/',
    extra: [],
    summary:
      'For each element in a circular array, find the next greater element (searching forward, wrapping around). Return -1 when none is greater.',
    asked:
      'An array of the same size: result[i] = first element strictly greater than nums[i] encountered by moving forward with wrap-around, else -1.',
    why:
      'Monotonic stack: each element waits on the stack until a bigger element arrives — that arrival is its "next greater". For the circular case, walk 2n positions (or a second pass).',
    clues: ['next greater', 'circular / wrap around', 'for each element'],
    brute: {
      idea: 'For each i, scan forward up to n steps looking for a bigger value.',
      time: 'O(n²)',
      space: 'O(1)'
    },
    optimal: {
      idea:
        'Stack of indices with decreasing values. For position i (0..2n-1, value nums[i % n]): while the stack top\'s value < current, answer[top] = current and pop. Push i only for i < n (first lap). Leftover stack entries get -1.',
      steps: [
        'ans = array of -1; stack = [].',
        'For i from 0 to 2n - 1: x = nums[i % n].',
        'While stack non-empty and nums[stack.top] < x: ans[stack.pop()] = x.',
        'If i < n: stack.push(i).',
        'Return ans.'
      ],
      time: 'O(n)',
      space: 'O(n)'
    },
    dry: [
      'nums = [1, 2, 1]',
      'i=0 (1): stack [0]',
      'i=1 (2): 1 < 2 → ans[0] = 2, pop; push 1 → [1]',
      'i=2 (1): 2 > 1 no pop; push 2 → [1,2]',
      'i=3 (1): no pop (lap 2, no push)',
      'i=4 (2): nums[2]=1 < 2 → ans[2]=2 pop; nums[1]=2 < 2? no',
      'ans = [2, -1, 2] ✓ (the 2 has no greater element)'
    ],
    hints: [
      'An element "resolves" the moment a strictly greater value appears after it.',
      'Keep the stack of UNRESOLVED elements — always decreasing.',
      'For the circular case, a second lap gives wrapped-around answers for what the first lap couldn\'t resolve.'
    ],
    code: {
      javascript: `function nextGreaterElements(nums) {
  const n = nums.length;
  const ans = new Array(n).fill(-1);
  const stack = [];
  for (let i = 0; i < 2 * n; i++) {
    const x = nums[i % n];
    while (stack.length && nums[stack[stack.length - 1]] < x) {
      ans[stack.pop()] = x;
    }
    if (i < n) stack.push(i);
  }
  return ans;
}`,
      python: `def nextGreaterElements(nums):
    n = len(nums)
    ans = [-1] * n
    stack = []
    for i in range(2 * n):
        x = nums[i % n]
        while stack and nums[stack[-1]] < x:
            ans[stack.pop()] = x
        if i < n:
            stack.append(i)
    return ans`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'st-05',
    slug: 'daily-temperatures',
    title: 'Daily Temperatures',
    pattern: 'stack',
    difficulty: 'Easy',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/daily-temperatures/',
    extra: [],
    summary:
      'Given daily temperatures, for each day find how many days until a STRICTLY warmer day. Return 0 if no warmer day comes.',
    asked:
      'result[i] = (j - i) where j is the first index after i with temperatures[j] > temperatures[i], else 0.',
    why:
      'Textbook monotonic stack: each day waits on the stack until a warmer day arrives; the day the warmer temperature comes, all cooler waiting days get their answer.',
    clues: ['days until warmer', 'next greater (distance)', 'per-element answer'],
    brute: {
      idea: 'For each day, scan forward until a warmer day is found.',
      time: 'O(n²)',
      space: 'O(1)'
    },
    optimal: {
      idea:
        'Stack of indices with non-increasing temperatures. For day i: while the stack top is colder than temps[i], answer[top] = i - top and pop. Push i.',
      steps: [
        'ans = zeros(n); stack = [].',
        'For i, t in temps:',
        'While stack non-empty and temps[stack.top] < t: ans[stack.top] = i - stack.top; pop.',
        'Push i.',
        'Return ans (unresolved days stay 0).'
      ],
      time: 'O(n)',
      space: 'O(n)'
    },
    dry: [
      'temps = [73, 74, 75, 71, 69, 72, 76, 73]',
      'i=0 (73): push → [0]',
      'i=1 (74): 73 < 74 → ans[0]=1; push 1 → [1]',
      'i=2 (75): 74 < 75 → ans[1]=1; push 2 → [2]',
      'i=3 (71): push → [2,3]',
      'i=4 (69): push → [2,3,4]',
      'i=5 (72): 69<72 → ans[4]=1; 71<72 → ans[3]=2; push 5 → [2,5]',
      'i=6 (76): 72<76 → ans[5]=1; 75<76 → ans[2]=4; push 6 → [6]',
      'i=7 (73): push → [6,7]',
      'Answer: [1,1,4,2,1,1,0,0]'
    ],
    hints: [
      'A day\'s answer is decided by the NEXT day that is warmer.',
      'Keep only days that are still "waiting" — why must their temperatures be non-increasing?',
      'The distance is simply (current index - waited index).'
    ],
    code: {
      javascript: `function dailyTemperatures(temps) {
  const n = temps.length;
  const ans = new Array(n).fill(0);
  const stack = [];
  for (let i = 0; i < n; i++) {
    while (stack.length && temps[stack[stack.length - 1]] < temps[i]) {
      const j = stack.pop();
      ans[j] = i - j;
    }
    stack.push(i);
  }
  return ans;
}`,
      python: `def dailyTemperatures(temps):
    n = len(temps)
    ans = [0] * n
    stack = []
    for i, t in enumerate(temps):
        while stack and temps[stack[-1]] < t:
            j = stack.pop()
            ans[j] = i - j
        stack.append(i)
    return ans`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'st-06',
    slug: 'remove-nodes-from-linked-list',
    title: 'Remove Nodes From Linked List',
    pattern: 'stack',
    difficulty: 'Easy',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/remove-nodes-from-linked-list/',
    extra: [],
    summary:
      'Remove every node that has a STRICTLY greater node somewhere to its right. Return the head of the filtered list.',
    asked:
      'Keep only the nodes that are the maximum of their suffix (strictly: a node is removed if ANY later node is bigger).',
    why:
      'Read the list into a stack of nodes: when a bigger node arrives, pop every smaller node on top (it is doomed). What remains, in order, is the answer.',
    clues: ['remove if a greater node to the right', 'keep suffix maxima', 'linked list'],
    brute: {
      idea: 'For each node, scan its suffix for a greater value; unlink if found.',
      time: 'O(n²)',
      space: 'O(1)'
    },
    optimal: {
      idea:
        'Stack of nodes (or values). For each node: while the stack top\'s value < current value, pop (removed). Push current. Finally, stitch the surviving nodes in stack order.',
      steps: [
        'stack = [].',
        'For each node in the list:',
        'While stack non-empty and stack.top.val < node.val: pop.',
        'Push node.',
        'Set .next along the remaining stack nodes; terminate with null.',
        'Return the bottom of the stack.'
      ],
      time: 'O(n)',
      space: 'O(n)'
    },
    dry: [
      'List: 5 → 2 → 13 → 3 → 8',
      '5 → stack [5]',
      '2 → [5,2]',
      '13 → 2 < 13 pop; 5 < 13 pop; push → [13]',
      '3 → [13,3]',
      '8 → 3 < 8 pop; push → [13,8]',
      'Survivors: 13 → 8 → null ✓'
    ],
    hints: [
      'A node is removed exactly when a later node is bigger — who "announces" that removal?',
      'Process left to right, keeping a stack of nodes that are still safe so far.',
      'The final stack order (bottom to top) IS the answer list.'
    ],
    code: {
      javascript: `function removeNodes(head) {
  const stack = [];
  let cur = head;
  while (cur) {
    while (stack.length && stack[stack.length - 1].val < cur.val) stack.pop();
    stack.push(cur);
    cur = cur.next;
  }
  for (let i = 0; i < stack.length - 1; i++) stack[i].next = stack[i + 1];
  stack[stack.length - 1].next = null;
  return stack[0];
}`,
      python: `def removeNodes(head):
    stack = []
    cur = head
    while cur:
        while stack and stack[-1].val < cur.val:
            stack.pop()
        stack.append(cur)
        cur = cur.next
    for i in range(len(stack) - 1):
        stack[i].next = stack[i + 1]
    stack[-1].next = None
    return stack[0]`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'st-07',
    slug: 'remove-all-adjacent-duplicates-in-string-ii',
    title: 'Remove All Adjacent Duplicates in String II',
    pattern: 'stack',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/',
    extra: [],
    summary:
      'K adjacent identical characters delete each other, repeatedly. Return the final string.',
    asked:
      'Whenever a run of exactly k equal adjacent characters appears, erase it; cascade until stable.',
    why:
      'Stack of (char, count): each char increments the top run, or starts a new one. When a run reaches k, the whole entry pops — and the cascade is automatic because the previous entry becomes the top again.',
    clues: ['k adjacent duplicates', 'cascade removal', 'string'],
    brute: {
      idea: 'Repeatedly scan and remove runs of k until no change.',
      time: 'O(n²)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'Stack entries [char, count]. For c: if top is c, increment; else push [c,1]. If top count === k, pop. Join the survivors.',
      steps: [
        'stack = [].',
        'For each c:',
        'If top && top[0] === c: top[1]++.',
        'Else push [c, 1].',
        'If top[1] === k: pop.',
        'Return the concatenation of remaining [char × count].'
      ],
      time: 'O(n)',
      space: 'O(n)'
    },
    dry: [
      's = "deeedbbcccbdaa", k = 3',
      'd[1], e[1], e[2], e[3]→pop → [d[1]]',
      'd[2], b[1], b[2], c[1], c[2], c[3]→pop → [d[2], b[2]]',
      'b[3]→pop → [d[2]]',
      'd[3]→pop → []',
      'a[1], a[2]',
      'Answer: "aa"'
    ],
    hints: [
      'Track RUNS, not single characters — why?',
      'A run that hits k vanishes, and the run BEFORE it becomes the active top again.',
      'That second point is why cascades happen for free with a stack.'
    ],
    code: {
      javascript: `function removeDuplicates(s, k) {
  const stack = [];
  for (const c of s) {
    const top = stack[stack.length - 1];
    if (top && top[0] === c) top[1]++;
    else stack.push([c, 1]);
    if (top && top[1] === k) stack.pop();
  }
  return stack.map(([c, n]) => c.repeat(n)).join('');
}`,
      python: `def removeDuplicates(s, k):
    stack = []
    for c in s:
        if stack and stack[-1][0] == c:
            stack[-1][1] += 1
        else:
            stack.append([c, 1])
        if stack[-1][1] == k:
            stack.pop()
    return ''.join(c * n for c, n in stack)`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'st-08',
    slug: 'simplify-path',
    title: 'Simplify Path',
    pattern: 'stack',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/simplify-path/',
    extra: [],
    summary:
      'Convert an absolute Unix path (with ., .., multiple slashes) into its canonical form.',
    asked:
      'Rules: "/" is root, "." is stay, ".." goes up one level (root stays root), extra slashes collapse. Return the canonical path.',
    why:
      'A stack of directory names: a component pushes, ".." pops (when possible), "." and empty tokens do nothing. The join of the stack is the answer.',
    clues: ['absolute path', '.. goes up', 'canonical form'],
    brute: {
      idea: 'Parse components, simulate on an array with splice operations.',
      time: 'O(n)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'Split on "/", iterate tokens: skip "" and "."; pop on ".." if the stack is non-empty; push other tokens. Return "/" + stack.join("/").',
      steps: [
        'parts = path.split("/"); stack = [].',
        'For each part:',
        'If part is "" or ".": continue.',
        'If part === "..": pop if stack non-empty.',
        'Else: push part.',
        'Return "/" + stack.join("/") (just "/" if empty).'
      ],
      time: 'O(n)',
      space: 'O(n)'
    },
    dry: [
      'path = "/a/./b/../../c"',
      'parts: ["", "a", ".", "b", "..", "..", "c"]',
      '"" skip; "a" push → [a]; "." skip; "b" push → [a,b]',
      '".." pop → [a]; ".." pop → []; "c" push → [c]',
      'Answer: "/c"'
    ],
    hints: [
      'Which tokens change the current directory, and which are no-ops?',
      '".." at the root is a no-op — guard the pop.',
      'The stack contents at the end are exactly the canonical components.'
    ],
    code: {
      javascript: `function simplifyPath(path) {
  const stack = [];
  for (const part of path.split('/')) {
    if (part === '' || part === '.') continue;
    if (part === '..') {
      if (stack.length) stack.pop();
    } else {
      stack.push(part);
    }
  }
  return '/' + stack.join('/');
}`,
      python: `def simplifyPath(path):
    stack = []
    for part in path.split('/'):
        if part == '' or part == '.':
            continue
        if part == '..':
            if stack:
                stack.pop()
        else:
            stack.append(part)
    return '/' + '/'.join(stack)`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'st-09',
    slug: 'remove-k-digits',
    title: 'Remove K Digits',
    pattern: 'stack',
    difficulty: 'Hard',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/remove-k-digits/',
    extra: [],
    summary:
      'Given a number as a string and an integer k, remove exactly k digits to get the SMALLEST possible number (no leading zeros, empty → "0").',
    asked:
      'Return the lexicographically/numerically smallest string after deleting exactly k digits.',
    why:
      'Greedy with a monotonic (increasing) stack: to minimize, delete a digit whenever a SMALLER digit follows it. Pop while num < top and k > 0. Leftover k are removed from the tail (largest place-value positions among what remains).',
    clues: ['smallest number', 'remove exactly k digits', 'string arithmetic'],
    brute: {
      idea: 'Try combinations of k deletions and compare.',
      time: 'O(C(n,k) · n)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'Walk the digits; push onto an increasing stack, but first pop while (k > 0 && top > current) — removing a bigger earlier digit in favor of a smaller one lowers the number. After the walk, drop any remaining k from the END. Strip leading zeros; empty → "0".',
      steps: [
        'stack = []; k remaining = K.',
        'For each digit d:',
        'While k > 0 and stack non-empty and stack.top > d: pop; k--.',
        'Push d.',
        'If k > 0: truncate the last k digits from the stack.',
        'Result = stack.join("") with leading zeros stripped, or "0".'
      ],
      time: 'O(n)',
      space: 'O(n)'
    },
    dry: [
      'num = "1432219", k = 3',
      '1 → [1]',
      '4 → 1<4 keep → [1,4]',
      '3 → 4>3 pop (k=2); 1<3 keep → [1,3]',
      '2 → 3>2 pop (k=1); 1<2 keep → [1,2]',
      '2 → equal, keep → [1,2,2]',
      '1 → 2>1 pop (k=0); keep → [1,2,1]',
      '9 → [1,2,1,9]',
      'Answer: "1219"'
    ],
    hints: [
      'Which digit deletion lowers the number the MOST? (the first place where a decrease happens)',
      'A digit should be removed if a smaller digit comes right after it — use a stack to find those places.',
      'If deletions remain after the pass, they must come from the END (the number is non-decreasing there).'
    ],
    code: {
      javascript: `function removeKDigits(num, k) {
  const stack = [];
  for (const d of num) {
    while (k > 0 && stack.length && stack[stack.length - 1] > d) {
      stack.pop();
      k--;
    }
    stack.push(d);
  }
  if (k > 0) stack.length -= k;
  const res = stack.join('').replace(/^0+/, '');
  return res === '' ? '0' : res;
}`,
      python: `def removeKDigits(num, k):
    stack = []
    for d in num:
        while k > 0 and stack and stack[-1] > d:
            stack.pop()
            k -= 1
        stack.append(d)
    if k > 0:
        stack = stack[:-k] if k < len(stack) else []
    res = ''.join(stack).lstrip('0')
    return res if res else '0'`,
      java: '',
      cpp: ''
    }
  }
];
