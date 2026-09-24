// Pattern: Recursion and Backtracking — 10 questions (exact supplied list)
export default [
  {
    id: 'rc-01',
    slug: 'fibonacci',
    title: 'Fibonacci',
    pattern: 'recursion-backtracking',
    difficulty: 'Easy',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/fibonacci-number/',
    extra: [
      { label: 'Watch Video ↗', url: 'https://www.youtube.com/watch?v=j4wjZqzhMqc' }
    ],
    summary:
      'Given n, return the nth Fibonacci number: F(0) = 0, F(1) = 1, F(n) = F(n-1) + F(n-2).',
    asked: 'Compute F(n) — the canonical first recursion problem.',
    why:
      'The definition IS recursive: the answer is the sum of two smaller answers. This problem teaches base case + recursive case — and why naive recursion is exponential without memoization.',
    clues: ['defined in terms of smaller n', 'base cases', 'recursive sequence'],
    brute: {
      idea: 'Naive recursion exactly following the definition — recomputes the same values exponentially.',
      time: 'O(2ⁿ)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'Either memoize (top-down: cache each F(k) once) or tabulate bottom-up (two running variables). Both give O(n).',
      steps: [
        'Base: F(0) = 0, F(1) = 1.',
        'Memoized: f(k) = cached value if seen, else f(k-1) + f(k-2) stored in the cache.',
        'Tabulation: a = 0, b = 1; iterate to n: c = a + b; a = b; b = c.',
        'Return b (or the memo).',
        'Space can drop to O(1) with two variables.'
      ],
      time: 'O(n)',
      space: 'O(1) tabulation / O(n) memo stack'
    },
    dry: [
      'n = 5',
      'F(0)=0, F(1)=1, F(2)=1, F(3)=2, F(4)=3, F(5)=5',
      'Tabulation: (a,b) = (0,1) → (1,1) → (1,2) → (2,3) → (3,5)',
      'Answer: 5'
    ],
    hints: [
      'What are the base cases? (the values that do NOT recurse)',
      'The recursive case: F(n) = F(n-1) + F(n-2).',
      'Naive recursion draws a tree with repeated subproblems — memoization flattens it.'
    ],
    code: {
      javascript: `// Memoized (top-down)
function fib(n) {
  const memo = new Array(n + 1).fill(-1);
  const f = (k) => {
    if (k <= 1) return k;
    if (memo[k] !== -1) return memo[k];
    return (memo[k] = f(k - 1) + f(k - 2));
  };
  return f(n);
}

// Tabulation (bottom-up), O(1) space
function fibTab(n) {
  if (n <= 1) return n;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    const c = a + b;
    a = b;
    b = c;
  }
  return b;
}`,
      python: `# Memoized
from functools import lru_cache

@lru_cache(None)
def fib(n):
    if n <= 1:
        return n
    return fib(n - 1) + fib(n - 2)

# Tabulation
def fibTab(n):
    a, b = 0, 1
    for _ in range(n):
        a, b = b, a + b
    return a`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'rc-02',
    slug: 'check-if-string-is-palindrome',
    title: 'Check if String is Palindrome',
    pattern: 'recursion-backtracking',
    difficulty: 'Easy',
    platform: 'GeeksforGeeks',
    url: 'https://www.geeksforgeeks.org/problems/palindrome-string0817/1',
    extra: [
      { label: 'Watch Video ↗', url: 'https://www.youtube.com/watch?v=j4wjZqzhMqc' }
    ],
    summary:
      'Check whether a string reads the same forwards and backwards (lowercase input per GFG).',
    asked: 'Return true if the string is a palindrome.',
    why:
      'Compare the outer pair, then the problem SHRINKS to the inside — a clean two-pointer recursion.',
    clues: ['reads same both ways', 'compare from both ends', 'shrink to inside'],
    brute: {
      idea: 'Reverse the string and compare.',
      time: 'O(n)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'Recursion on the two ends: f(l, r) = (s[l] === s[r]) && f(l+1, r-1). Base: l >= r → true.',
      steps: [
        'Optionally normalize (lowercase, strip non-alphanumerics).',
        'f(l, r): if l >= r return true.',
        'If s[l] !== s[r] return false.',
        'Else return f(l + 1, r - 1).',
        'Start with f(0, n - 1).'
      ],
      time: 'O(n)',
      space: 'O(n) recursion stack'
    },
    dry: [
      's = "madam"',
      'f(0,4): m === m → f(1,3)',
      'f(1,3): a === a → f(2,2)',
      'f(2,2): l >= r → true',
      'Answer: true',
      's = "hello": f(0,4): h !== o → false'
    ],
    hints: [
      'If the first and last characters differ, can it still be a palindrome?',
      'If they match, the question becomes smaller — how much smaller?',
      'The base case is when the two pointers meet or cross.'
    ],
    code: {
      javascript: `function isPalindrome(s) {
  const t = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  const f = (l, r) => {
    if (l >= r) return true;
    if (t[l] !== t[r]) return false;
    return f(l + 1, r - 1);
  };
  return f(0, t.length - 1);
}`,
      python: `def isPalindrome(s):
    t = ''.join(c for c in s.lower() if c.isalnum())
    def f(l, r):
        if l >= r:
            return True
        if t[l] != t[r]:
            return False
        return f(l + 1, r - 1)
    return f(0, len(t) - 1)`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'rc-03',
    slug: 'check-if-array-is-sorted',
    title: 'Check if Array is Sorted',
    pattern: 'recursion-backtracking',
    difficulty: 'Easy',
    platform: 'GeeksforGeeks',
    url: 'https://www.geeksforgeeks.org/problems/check-if-an-array-is-sorted0701/1',
    extra: [
      { label: 'Watch Video ↗', url: 'https://www.youtube.com/watch?v=-gC-QEdpvO4' }
    ],
    summary:
      'Check whether an array is sorted in non-decreasing order using recursion.',
    asked: 'Return true if every element is ≤ the next one.',
    why:
      'Check the current adjacent pair, then recurse on the rest of the array — the problem shrinks by one position each call.',
    clues: ['sorted or not', 'adjacent pairs', 'shrink the array'],
    brute: {
      idea: 'Iterative single-pass comparison (recursion adds the stack but the logic is the same).',
      time: 'O(n)',
      space: 'O(n) stack'
    },
    optimal: {
      idea:
        'f(i): if i is at the last index → true. If arr[i] > arr[i+1] → false. Else f(i+1).',
      steps: [
        'f(i) with i starting at 0.',
        'Base: i >= n - 1 → true (nothing left to compare).',
        'If arr[i] > arr[i+1] → false.',
        'Else return f(i + 1).'
      ],
      time: 'O(n)',
      space: 'O(n)'
    },
    dry: [
      'arr = [1, 2, 3, 4]',
      'f(0): 1 ≤ 2 → f(1); f(1): 2 ≤ 3 → f(2); f(2): 3 ≤ 4 → f(3); f(3): base → true',
      'Answer: true',
      'arr = [1, 3, 2]: f(0) ok → f(1): 3 > 2 → false'
    ],
    hints: [
      'One comparison per recursive call — which pair?',
      'The base case: when there is no "next" element.',
      'The answer is the AND of all adjacent comparisons.'
    ],
    code: {
      javascript: `function isSorted(arr, i = 0) {
  if (i >= arr.length - 1) return true;
  if (arr[i] > arr[i + 1]) return false;
  return isSorted(arr, i + 1);
}`,
      python: `def isSorted(arr, i = 0):
    if i >= len(arr) - 1:
        return True
    if arr[i] > arr[i + 1]:
        return False
    return isSorted(arr, i + 1)`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'rc-04',
    slug: 'sum-of-digits-of-a-number',
    title: 'Sum of Digits of a Number',
    pattern: 'recursion-backtracking',
    difficulty: 'Easy',
    platform: 'GeeksforGeeks',
    url: 'https://www.geeksforgeeks.org/problems/sum-of-digits1742/1',
    extra: [
      { label: 'Watch Video ↗', url: 'https://www.youtube.com/watch?v=-gC-QEdpvO4' }
    ],
    summary:
      'Compute the sum of the digits of a number using recursion.',
    asked: 'Return the digit sum (e.g. 1234 → 10).',
    why:
      'A number splits into its last digit plus the rest: sumDigits(n) = (n % 10) + sumDigits(n / 10). Base case: single digit.',
    clues: ['peel off one digit', 'base case single digit', 'number decomposition'],
    brute: {
      idea: 'Stringify and sum the characters (recursion shows the arithmetic version).',
      time: 'O(digits)',
      space: 'O(digits)'
    },
    optimal: {
      idea:
        'f(n): if n < 10 return n; else return (n % 10) + f(floor(n / 10)).',
      steps: [
        'Take absolute value (negative inputs).',
        'Base: n < 10 → n.',
        'Recurse: last digit + sum of the rest.',
        'n % 10 gives the last digit; floor(n / 10) removes it.'
      ],
      time: 'O(log₁₀ n)',
      space: 'O(log₁₀ n)'
    },
    dry: [
      'n = 1234',
      'f(1234) = 4 + f(123)',
      'f(123) = 3 + f(12)',
      'f(12) = 2 + f(1)',
      'f(1) = 1 (base)',
      'Answer: 4 + 3 + 2 + 1 = 10'
    ],
    hints: [
      'How do you extract the last digit of a number?',
      'How do you remove it? (integer division)',
      'When does the recursion stop? (single digit)'
    ],
    code: {
      javascript: `function sumOfDigits(n) {
  n = Math.abs(n);
  if (n < 10) return n;
  return (n % 10) + sumOfDigits(Math.floor(n / 10));
}`,
      python: `def sumOfDigits(n):
    n = abs(n)
    if n < 10:
        return n
    return n % 10 + sumOfDigits(n // 10)`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'rc-05',
    slug: 'remove-occurrences-of-a-character',
    title: 'Remove Occurrences of a Character in String',
    pattern: 'recursion-backtracking',
    difficulty: 'Easy',
    platform: 'GeeksforGeeks',
    url: 'https://www.geeksforgeeks.org/problems/remove-all-occurrences-of-a-character-in-a-string/1',
    extra: [
      { label: 'Watch Video ↗', url: 'https://www.youtube.com/watch?v=-gC-QEdpvO4' }
    ],
    summary:
      'Remove all occurrences of a given character from a string (case-insensitive per GFG), using recursion.',
    asked: 'Return the string with every instance of the character deleted.',
    why:
      'Process one character at a time: either keep it (it is not the target) or skip it — then recurse on the rest of the string.',
    clues: ['remove all of one character', 'one char per step', 'case-insensitive'],
    brute: {
      idea: 'Iterative filter / replace (recursion mirrors it step by step).',
      time: 'O(n)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'f(i): if i is past the end → return "". If s[i] (lowercased) equals the target → return f(i+1) (skip). Else return s[i] + f(i+1).',
      steps: [
        'f(i) with i starting at 0.',
        'Base: i >= s.length → "".',
        'If lowercased s[i] === target: return f(i + 1).',
        'Else: return s[i] + f(i + 1).'
      ],
      time: 'O(n)',
      space: 'O(n)'
    },
    dry: [
      's = "aBaBa", target = "b" (case-insensitive)',
      'f(0): keep "a" → "a" + f(1)',
      'f(1): "b" matches → skip → f(2)',
      'f(2): keep "a" → f(3)',
      'f(3): "B" matches (case-insensitive) → f(4)',
      'f(4): keep "a" → f(5) → ""',
      'Answer: "aaa"'
    ],
    hints: [
      'At each index you have exactly two choices: keep or skip.',
      'Case-insensitivity: compare in lowercase.',
      'The base case is the empty suffix — return the empty string.'
    ],
    code: {
      javascript: `function removeAllOccurrences(s, c) {
  const target = c.toLowerCase();
  let i = 0;
  const f = () => {
    if (i >= s.length) return '';
    if (s[i].toLowerCase() === target) return f();
    return s[i] + f();
  };
  return f();
}`,
      python: `def removeAllOccurrences(s, c):
    target = c.lower()
    def f(i=0):
        if i >= len(s):
            return ''
        if s[i].lower() == target:
            return f(i + 1)
        return s[i] + f(i + 1)
    return f()`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'rc-06',
    slug: 'generate-parentheses',
    title: 'Generate Parentheses',
    pattern: 'recursion-backtracking',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/generate-parentheses/',
    extra: [],
    summary:
      'Given n pairs of parentheses, generate all combinations of well-formed (balanced) parentheses.',
    asked: 'All strings of n opening and n closing parens that are valid.',
    why:
      'Textbook backtracking over a choice tree: at each step you may add "(" if you still have opens, or ")" only if it would stay balanced (closes < opens).',
    clues: ['generate all valid', 'choices at each step', 'balance constraint'],
    brute: {
      idea: 'Generate all 2^(2n) strings of parens and filter the valid ones.',
      time: 'O(2^(2n) · n)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'Backtrack(state, opens, closes): stop when length = 2n (save). Choice 1: if opens < n add "(". Choice 2: if closes < opens add ")". The constraint prunes every invalid branch immediately.',
      steps: [
        'f(cur, openCount, closeCount).',
        'If cur.length === 2n: push a copy; return.',
        'If openCount < n: f(cur + "(", openCount + 1, closeCount).',
        'If closeCount < openCount: f(cur + ")", openCount, closeCount + 1).',
        'Start f("", 0, 0).'
      ],
      time: 'O(4ⁿ / √n) — Catalan-many outputs',
      space: 'O(n)'
    },
    dry: [
      'n = 2: start at ("", opens=0, closes=0)',
      'Add "(" → ("(", 1, 0); add "(" → ("((", 2, 0)',
      'Opens used up — only ")" is legal → ("(()", 2, 1) → ("(())", 2, 2) → save "(())"',
      'Backtrack to ("(", 1, 0): now ")" is legal (closes < opens) → ("()", 1, 1)',
      'Add "(" → ("()(", 2, 1); add ")" → ("()()", 2, 2) → save "()()"',
      'Answer: ["(())", "()()"]'
    ],
    hints: [
      'When is it ILLEGAL to add a closing parenthesis?',
      'Track two counters: opens used, closes used — and the rule closes ≤ opens.',
      'A solution is complete exactly when both counters equal n.'
    ],
    code: {
      javascript: `function generateParenthesis(n) {
  const res = [];
  const f = (cur, open, close) => {
    if (cur.length === 2 * n) {
      res.push(cur);
      return;
    }
    if (open < n) f(cur + '(', open + 1, close);
    if (close < open) f(cur + ')', open, close + 1);
  };
  f('', 0, 0);
  return res;
}`,
      python: `def generateParenthesis(n):
    res = []
    def f(cur, open_, close):
        if len(cur) == 2 * n:
            res.append(cur)
            return
        if open_ < n:
            f(cur + '(', open_ + 1, close)
        if close < open_:
            f(cur + ')', open_, close + 1)
    f('', 0, 0)
    return res`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'rc-07',
    slug: 'letter-combinations-of-a-phone-number',
    title: 'Letter Combinations of a Phone Number',
    pattern: 'recursion-backtracking',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/letter-combinations-of-a-phone-number/',
    extra: [
      { label: 'Watch Video ↗', url: 'https://www.youtube.com/watch?v=IKfIT6uFOcs' }
    ],
    summary:
      'Given a string of digits 2-9, return all letter combinations it could represent on a telephone keypad.',
    asked: 'Every product of the per-digit letter sets, in order.',
    why:
      'Each digit contributes a CHOICE (its letters) — a depth-first traversal of the choice tree: pick a letter for digit i, recurse on digit i+1.',
    clues: ['all combinations', 'per-position choices', 'keypad mapping'],
    brute: {
      idea: 'Iteratively grow a list of partial strings (same complexity, less structure).',
      time: 'O(4ⁿ · n)',
      space: 'O(4ⁿ · n)'
    },
    optimal: {
      idea:
        'Backtrack over digit positions: f(i, path): if i === digits.length save path; else for each letter of digits[i]: f(i+1, path + letter).',
      steps: [
        'map: 2→abc, 3→def, 4→ghi, 5→jkl, 6→mno, 7→pqrs, 8→tuv, 9→wxyz.',
        'If digits is empty: return [].',
        'f(i, path): base at i === length.',
        'For each letter in map[digits[i]]: f(i + 1, path + letter).',
        'Start f(0, "").'
      ],
      time: 'O(4ⁿ · n)',
      space: 'O(n) depth + output'
    },
    dry: [
      'digits = "23"',
      'f(0,""): digit 2 → letters a,b,c',
      '  f(1,"a"): digit 3 → d,e,f → "ad","ae","af"',
      '  f(1,"b") → "bd","be","bf"',
      '  f(1,"c") → "cd","ce","cf"',
      'Answer: ["ad","ae","af","bd","be","bf","cd","ce","cf"]'
    ],
    hints: [
      'What is the "state" at recursion depth i? (the partial string)',
      'Each digit multiplies the number of branches by 3 or 4.',
      'A complete combination happens exactly when every digit has been assigned a letter.'
    ],
    code: {
      javascript: `function letterCombinations(digits) {
  if (!digits) return [];
  const map = {
    2: 'abc', 3: 'def', 4: 'ghi', 5: 'jkl',
    6: 'mno', 7: 'pqrs', 8: 'tuv', 9: 'wxyz'
  };
  const res = [];
  const f = (i, path) => {
    if (i === digits.length) {
      res.push(path);
      return;
    }
    for (const ch of map[digits[i]]) f(i + 1, path + ch);
  };
  f(0, '');
  return res;
}`,
      python: `def letterCombinations(digits):
    if not digits:
        return []
    mapping = {
        '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',
        '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
    }
    res = []
    def f(i, path):
        if i == len(digits):
            res.append(path)
            return
        for ch in mapping[digits[i]]:
            f(i + 1, path + ch)
    f(0, '')
    return res`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'rc-08',
    slug: 'permutations',
    title: 'Permutations',
    pattern: 'recursion-backtracking',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/permutations/',
    extra: [],
    summary:
      'Given an array of distinct integers, return all possible permutations.',
    asked: 'Every ordering of the n elements (n! of them).',
    why:
      'Build a permutation one position at a time: at each depth, choose which UNUSED element goes next, recurse, then undo the choice (classic backtrack state).',
    clues: ['all orderings', 'each element used once', 'n! outputs'],
    brute: {
      idea: 'Recursion that copies the used set — same tree, more allocation.',
      time: 'O(n · n!)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'Backtrack(path, remaining): if remaining is empty, save path; else for each index i: take remaining[i], recurse on the rest WITHOUT that element, then the loop naturally "undoes" it (remaining is immutable here / or pop from a shared list).',
      steps: [
        'f(path, remaining).',
        'If remaining.length === 0: push a copy of path; return.',
        'For i in 0..remaining.length-1:',
        'next = remaining without index i.',
        'f(path + [remaining[i]], next).',
        'Start f([], nums).'
      ],
      time: 'O(n · n!)',
      space: 'O(n) + output'
    },
    dry: [
      'nums = [1, 2, 3]',
      'f([], [1,2,3]): pick 1 → f([1], [2,3]) → pick 2 → f([1,2], [3]) → [1,2,3]; pick 3 → [1,3,2]',
      'pick 2 → [2,1,3], [2,3,1]',
      'pick 3 → [3,1,2], [3,2,1]',
      'Answer: 6 permutations ✓'
    ],
    hints: [
      'At each position, what are your choices? (every element not yet placed)',
      'How do you express "not yet placed"? (a remaining list, or a used set)',
      'A complete permutation is built when nothing remains to place.'
    ],
    code: {
      javascript: `function permute(nums) {
  const res = [];
  const f = (path, remaining) => {
    if (remaining.length === 0) {
      res.push(path);
      return;
    }
    for (let i = 0; i < remaining.length; i++) {
      const next = remaining.slice(0, i).concat(remaining.slice(i + 1));
      f([...path, remaining[i]], next);
    }
  };
  f([], nums);
  return res;
}`,
      python: `def permute(nums):
    res = []
    def f(path, remaining):
        if not remaining:
            res.append(path)
            return
        for i in range(len(remaining)):
            f(path + [remaining[i]], remaining[:i] + remaining[i + 1:])
    f([], nums)
    return res`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'rc-09',
    slug: 'combination-sum',
    title: 'Combination Sum',
    pattern: 'recursion-backtracking',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/combination-sum/',
    extra: [],
    summary:
      'Given distinct candidate numbers and a target, find all unique combinations where the numbers sum to the target. A candidate may be reused unlimited times.',
    asked: 'All combinations (order-independent, no duplicate combos) summing exactly to the target.',
    why:
      'Backtracking with a running sum: choose a candidate (allowed to repeat → recurse from the SAME index), recurse with the reduced target, undo. Starting index only increases — that kills duplicates.',
    clues: ['sum to target', 'reuse allowed', 'unique combinations'],
    brute: {
      idea: 'Unordered search over all multisets — without the start-index rule you generate duplicates.',
      time: 'exponential (with duplicates)',
      space: 'O(target)'
    },
    optimal: {
      idea:
        'f(start, path, remaining): if remaining === 0 save a copy; if start out of range return. For i from start to end: skip candidates larger than remaining; take it, recurse with the SAME i (reuse), then pop.',
      steps: [
        'f(start, path, remaining).',
        'If remaining === 0: push a copy of path; return.',
        'For i from start to candidates.length - 1:',
        'If candidates[i] > remaining: continue.',
        'path.push(candidates[i]); f(i, path, remaining - candidates[i]); path.pop().',
        'Start f(0, [], target).'
      ],
      time: 'O(n^(target/min))',
      space: 'O(target/min)'
    },
    dry: [
      'candidates = [2, 3, 5], target = 8',
      'start with 2: 2 → 2,2 → 2,2,2 → 2,2,2,2 (sum 8 ✓); 2,2,2,3 (7→ no 8? 2+2+2+3=9 > 8, stop); back 2,2 → 2,2,5 (9 > 8 skip)',
      '2,3: 2+3=5 → +2 (7) → +2 (9>8); +3 (8 ✓ → [2,3,3]); +5 (10>8)',
      '3: 3 → +3 (6) → +2 (8 ✓ → [3,3,2]? no — start index prevents 2 after 3; so [3,3,3]=9 no; 3,5=8 ✓ → [3,5]',
      '5: 5 → +2 no (start≥index of 5) → [5] + rest none (5+5=10)',
      'Answer: [[2,2,2,2], [2,3,3], [3,5]]'
    ],
    hints: [
      'Why does the loop start at "start" instead of 0? (that prevents duplicate combinations)',
      'Reuse is allowed, so after taking candidates[i] you recurse from i — not i+1.',
      'Prune: if a candidate exceeds the remaining sum, skip it.'
    ],
    code: {
      javascript: `function combinationSum(candidates, target) {
  const res = [];
  const f = (start, path, remaining) => {
    if (remaining === 0) {
      res.push([...path]);
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      if (candidates[i] > remaining) continue;
      path.push(candidates[i]);
      f(i, path, remaining - candidates[i]);
      path.pop();
    }
  };
  f(0, [], target);
  return res;
}`,
      python: `def combinationSum(candidates, target):
    res = []
    def f(start, path, remaining):
        if remaining == 0:
            res.append(list(path))
            return
        for i in range(start, len(candidates)):
            if candidates[i] > remaining:
                continue
            path.append(candidates[i])
            f(i, path, remaining - candidates[i])
            path.pop()
    f(0, [], target)
    return res`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'rc-10',
    slug: 'palindrome-partitioning',
    title: 'Palindrome Partitioning',
    pattern: 'recursion-backtracking',
    difficulty: 'Medium',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/palindrome-partitioning/',
    extra: [],
    summary:
      'Given a string, return all possible partitions of the string such that every substring in the partition is a palindrome.',
    asked: 'Every way to cut the string into palindromic pieces.',
    why:
      'Choose the length of the NEXT piece: it must be a palindrome; if so, take it and recurse on the suffix. Backtrack the cut when a branch ends.',
    clues: ['partition into palindromes', 'all ways', 'prefix must be valid'],
    brute: {
      idea: 'Try all 2^(n-1) cut patterns and validate each piece.',
      time: 'O(2ⁿ · n)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'f(i, path): if i === n save a copy. For j from i+1 to n: piece = s[i..j); if isPalindrome(piece): push, f(j, path), pop.',
      steps: [
        'isPalindrome helper (two pointers).',
        'f(i, path): base at i === s.length.',
        'For j in i+1..n: if s.slice(i, j) is a palindrome:',
        'path.push(piece); f(j, path); path.pop().',
        'Start f(0, []).'
      ],
      time: 'O(2ⁿ · n)',
      space: 'O(n) + output'
    },
    dry: [
      's = "aab"',
      'f(0,[]): piece "a" (pal) → f(1,["a"]): piece "a" (pal) → f(2,["a","a"]): piece "b" (pal) → f(3,["a","a","b"]) → save',
      'back: at f(1), piece "ab" not a palindrome',
      'at f(0), piece "aa" (pal) → f(2,["aa"]): piece "b" → save ["aa","b"]',
      'Answer: [["a","a","b"], ["aa","b"]]'
    ],
    hints: [
      'A partition is a sequence of cuts — which cut do you choose first?',
      'Only palindromic prefixes can start a valid partition.',
      'The recursion index is simply "where in the string am I now?"'
    ],
    code: {
      javascript: `function partition(s) {
  const res = [];
  const isPal = (str) => {
    let l = 0, r = str.length - 1;
    while (l < r) if (str[l++] !== str[r--]) return false;
    return true;
  };
  const f = (i, path) => {
    if (i === s.length) {
      res.push([...path]);
      return;
    }
    for (let j = i + 1; j <= s.length; j++) {
      const piece = s.slice(i, j);
      if (isPal(piece)) {
        path.push(piece);
        f(j, path);
        path.pop();
      }
    }
  };
  f(0, []);
  return res;
}`,
      python: `def partition(s):
    res = []
    def is_pal(x):
        return x == x[::-1]
    def f(i, path):
        if i == len(s):
            res.append(list(path))
            return
        for j in range(i + 1, len(s) + 1):
            piece = s[i:j]
            if is_pal(piece):
                path.append(piece)
                f(j, path)
                path.pop()
    f(0, [])
    return res`,
      java: '',
      cpp: ''
    }
  }
];
