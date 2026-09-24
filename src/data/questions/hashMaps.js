// Pattern: Hash Maps — 4 questions (exact supplied list)
export default [
  {
    id: 'hm-01',
    slug: 'first-non-repeating-character',
    title: 'First Non-repeating Character',
    pattern: 'hash-maps',
    difficulty: 'Easy',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/first-unique-character-in-a-string/',
    extra: [],
    summary:
      'Find the first character in a string that appears exactly once. Return its index, or -1 if none exists.',
    asked: 'The earliest index whose character has total frequency 1.',
    why:
      'One frequency pass (hash map), then one scan in original order — order matters, so you cannot just return the first key with count 1 from the map.',
    clues: ['first unique', 'frequency exactly 1', 'index'],
    brute: {
      idea: 'For each character, count its occurrences across the whole string.',
      time: 'O(n²)',
      space: 'O(1)'
    },
    optimal: {
      idea:
        'Count all frequencies with a map in pass 1. In pass 2 (left to right), return the first index whose count is 1.',
      steps: [
        'freq = {}; for each c: freq[c]++.',
        'For i, c in s (in order): if freq[c] === 1, return i.',
        'Return -1.'
      ],
      time: 'O(n)',
      space: 'O(1)'
    },
    dry: [
      's = "loveleetcode"',
      'freq: l:2, o:1, v:1, e:4, t:1, c:1, d:1',
      'Scan: l(2) skip, o(1) → index 1',
      'Answer: 1'
    ],
    hints: [
      'Two separate concerns: FREQUENCY (any order) and FIRST (left to right).',
      'Count everything first, then scan in original order.',
      'Maps do not guarantee insertion-safe "first" logic here — the second scan does.'
    ],
    code: {
      javascript: `function firstUniqChar(s) {
  const freq = {};
  for (const c of s) freq[c] = (freq[c] || 0) + 1;
  for (let i = 0; i < s.length; i++) {
    if (freq[s[i]] === 1) return i;
  }
  return -1;
}`,
      python: `def firstUniqChar(s):
    from collections import Counter
    freq = Counter(s)
    for i, c in enumerate(s):
        if freq[c] == 1:
            return i
    return -1`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'hm-02',
    slug: 'maximum-number-of-balloons',
    title: 'Maximum Number of Balloons',
    pattern: 'hash-maps',
    difficulty: 'Easy',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/maximum-number-of-balloons/',
    extra: [],
    summary:
      'Given a text string, find how many times the word "balloon" can be formed using its characters (each used once).',
    asked:
      'Return the maximum number of complete "balloon" words from the letter multiset of the text.',
    why:
      'Count available letters (hash map), then the answer is the minimum over required letters of floor(available / needed) — note l and o are needed TWICE each.',
    clues: ['form a word from letters', 'count-based limit', 'how many times'],
    brute: {
      idea: 'Simulate forming one balloon at a time, removing used letters.',
      time: 'O(n · answer)',
      space: 'O(n)'
    },
    optimal: {
      idea:
        'freq = letter counts of text. needed = {b:1, a:1, l:2, o:2, n:1}. answer = min over each letter of floor(freq[letter] / needed).',
      steps: [
        'Count every character of text into freq.',
        'For each required letter and count: ans = min(ans, floor(freq[letter] / count)).',
        'Return ans (missing letters count as 0).'
      ],
      time: 'O(n)',
      space: 'O(1)'
    },
    dry: [
      'text = "nlaebolko"',
      'freq: n:2, l:2, a:1, e:1, b:1, o:2',
      'b: floor(1/1)=1; a: floor(1/1)=1; l: floor(2/2)=1; o: floor(2/2)=1; n: floor(2/1)=2',
      'Answer: min = 1'
    ],
    hints: [
      'Which letters does "balloon" actually need? (count each letter in it)',
      'The scarcest required letter (per copy) sets the upper bound.',
      'Divide available by needed-per-word, not by 1.'
    ],
    code: {
      javascript: `function maxNumberOfBalloons(text) {
  const freq = {};
  for (const c of text) freq[c] = (freq[c] || 0) + 1;
  const need = { b: 1, a: 1, l: 2, o: 2, n: 1 };
  let ans = Infinity;
  for (const [ch, count] of Object.entries(need)) {
    ans = Math.min(ans, Math.floor((freq[ch] || 0) / count));
  }
  return ans;
}`,
      python: `def maxNumberOfBalloons(text):
    from collections import Counter
    freq = Counter(text)
    need = {'b': 1, 'a': 1, 'l': 2, 'o': 2, 'n': 1}
    return min(freq.get(ch, 0) // count for ch, count in need.items())`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'hm-03',
    slug: 'longest-palindrome',
    title: 'Longest Palindrome',
    pattern: 'hash-maps',
    difficulty: 'Easy',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/longest-palindrome/',
    extra: [],
    summary:
      'Given a string, find the length of the longest palindrome that can be built using its characters (arrangement free).',
    asked:
      'Rearrange any subset of the letters into the longest possible palindrome; return its length.',
    why:
      'Frequency parity decides everything: pairs (2k) can always be placed symmetrically; at most ONE odd-count letter may sit in the center.',
    clues: ['longest palindrome from letters', 'rearrange', 'frequency parity'],
    brute: {
      idea: 'Try subsets / construct greedily and verify — messy.',
      time: 'O(n·alphabet)',
      space: 'O(1)'
    },
    optimal: {
      idea:
        'Count frequencies. Sum floor(freq/2)*2 for every letter. If any letter has an odd count, add 1 for the center.',
      steps: [
        'freq = letter counts.',
        'length = Σ floor(freq[c] / 2) * 2.',
        'If any freq[c] is odd: length += 1.',
        'Return length.'
      ],
      time: 'O(n)',
      space: 'O(1)'
    },
    dry: [
      's = "abccccdd"',
      'freq: a:1, b:1, c:4, d:2',
      'pairs: a→0, b→0, c→4, d→2 → 6',
      'Odd counts exist (a, b) → +1 center',
      'Answer: 7 (e.g. "dccaccd")'
    ],
    hints: [
      'How many letters of the same kind can a palindrome hold on one side?',
      'The center slot is the only place an odd count can survive.',
      'Even if many letters have odd counts, only ONE gets the center.'
    ],
    code: {
      javascript: `function longestPalindrome(s) {
  const freq = {};
  for (const c of s) freq[c] = (freq[c] || 0) + 1;
  let length = 0, hasOdd = false;
  for (const count of Object.values(freq)) {
    length += Math.floor(count / 2) * 2;
    if (count % 2 === 1) hasOdd = true;
  }
  if (hasOdd) length += 1;
  return length;
}`,
      python: `def longestPalindrome(s):
    from collections import Counter
    freq = Counter(s)
    length = sum(c // 2 * 2 for c in freq.values())
    if any(c % 2 == 1 for c in freq.values()):
        length += 1
    return length`,
      java: '',
      cpp: ''
    }
  },
  {
    id: 'hm-04',
    slug: 'ransom-note',
    title: 'Ransom Note',
    pattern: 'hash-maps',
    difficulty: 'Easy',
    platform: 'LeetCode',
    url: 'https://leetcode.com/problems/ransom-note/',
    extra: [],
    summary:
      'Decide whether the ransom note can be constructed by cutting letters from the magazine string (each magazine letter used once).',
    asked: 'Return true if every character of the note has enough copies available in the magazine.',
    why:
      'Classic frequency comparison: count the magazine, then "spend" one copy per note character — fail the moment a letter runs out.',
    clues: ['can we build from letters', 'each letter once', 'two strings'],
    brute: {
      idea: 'For each note char, find and remove it from the magazine string.',
      time: 'O(n·m)',
      space: 'O(m)'
    },
    optimal: {
      idea:
        'Count the magazine into a map. For each note character: if the map count is 0 → false; else decrement. True at the end.',
      steps: [
        'avail = character counts of magazine.',
        'For each c in note:',
        'If !avail[c] → return false.',
        'avail[c]--.',
        'Return true.'
      ],
      time: 'O(n + m)',
      space: 'O(1)'
    },
    dry: [
      'note = "aa", magazine = "aab"',
      'avail: a:2, b:1',
      'note a: avail[a]=2 → 1',
      'note a: avail[a]=1 → 0',
      'Answer: true',
      'Counter: note="baa", magazine="b" → at second a, avail[a]=0 → false'
    ],
    hints: [
      'Model it as spending from a limited supply.',
      'One pass over the magazine, one pass over the note.',
      'The first shortage is enough to return false early.'
    ],
    code: {
      javascript: `function canConstruct(note, magazine) {
  const avail = {};
  for (const c of magazine) avail[c] = (avail[c] || 0) + 1;
  for (const c of note) {
    if (!avail[c]) return false;
    avail[c]--;
  }
  return true;
}`,
      python: `def canConstruct(note, magazine):
    from collections import Counter
    avail = Counter(magazine)
    for c in note:
        if avail[c] <= 0:
            return False
        avail[c] -= 1
    return True`,
      java: '',
      cpp: ''
    }
  }
];
