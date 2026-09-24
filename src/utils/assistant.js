// ---------------------------------------------------------------
// DSA Assistant — local, UI-only response engine.
//
// Architecture note:
//   `getAssistantReply(prompt, context)` is the single place where a
//   future Gemini / OpenAI backend call can be swapped in. Keep the
//   signature and the plain-text return value, and replace the body
//   with an async API call when a backend becomes available.
// ---------------------------------------------------------------

import { getPattern, questionsByPattern } from './helpers.js';

const SUGGESTIONS = [
  'Explain in simple Hinglish',
  'Give me a hint',
  'Explain this pattern',
  'Explain brute force',
  'Explain optimal approach',
  'Dry run this',
  'Explain my code'
];

function matchPrompt(prompt) {
  const p = (prompt || '').toLowerCase();
  if (p.includes('hinglish') || p.includes('simple')) return 'hinglish';
  if (p.includes('hint')) return 'hint';
  if (p.includes('pattern')) return 'pattern';
  if (p.includes('brute')) return 'brute';
  if (p.includes('optimal') || p.includes('approach')) return 'optimal';
  if (p.includes('dry')) return 'dryrun';
  if (p.includes('code') || p.includes('explain my')) return 'mycode';
  return 'generic';
}

export function getAssistantSuggestions() {
  return SUGGESTIONS;
}

export function getAssistantReply(prompt, context = {}) {
  const kind = matchPrompt(prompt);
  const { question, pattern, difficulty, summary } = context;

  if (!question) {
    if (kind === 'pattern' && pattern) {
      const pat = getPattern(pattern);
      return pat
        ? `${pat.name}: ${pat.definition}\n\nWhen to use:\n${pat.whenToUse.map((x) => '• ' + x).join('\n')}`
        : 'Open a question page and I can explain its pattern.';
    }
    return [
      "I'm the DSA-60 Assistant. I can help with the problem you're viewing.",
      'Open any question page and try one of the suggested prompts, e.g. "Explain in simple Hinglish" or "Give me a hint".'
    ].join('\n\n');
  }

  const pat = getPattern(question.pattern) || {};

  switch (kind) {
    case 'hinglish': {
      const clueLine = question.clues?.length
        ? `\n\nYeh problem pehle se "sorted/target/pair" jaisi cheezein deke pehchana jata hai — clues: ${question.clues.slice(0, 3).join(', ')}.`
        : '';
      return (
        `Acha samjho: isme tumhe ${summary || question.title} karna hai.` +
        `\n\nSimple bhasha mein — pehle brute force socho (har cheez check karo), phir dekho kya bottleneck hai. Yahan pattern hai ${pat.name || question.pattern}, matlab ${question.why || 'problem structure is pattern ke liye perfect hai'}.` +
        ` Optimal idea: ${question.optimal?.idea || 'see the Optimal Approach section'}.` +
        clueLine
      );
    }
    case 'hint':
      return question.hints?.[0]
        ? `Hint 1: ${question.hints[0]}\n\n(If this helps, keep going — Hint 2 and 3 are in the question page.)`
        : 'Try to state the input, output, and a brute force before looking at the approach.';
    case 'pattern': {
      const same = questionsByPattern(question.pattern).slice(0, 4).map((q) => q.title);
      return (
        `${pat.name || question.pattern} — ${pat.definition || ''}\n\n` +
        `Why it fits here: ${question.why || ''}\n\n` +
        `Keywords to spot it: ${(question.clues || []).join(', ') || pat.clues?.slice(0, 4).join(', ') || 'see question'}.\n\n` +
        `More problems with this pattern on DSA-60: ${same.join(' • ')}`
      );
    }
    case 'brute':
      return question.brute
        ? `Brute force idea: ${question.brute.idea}\nTime: ${question.brute.time} | Space: ${question.brute.space}\n\nUsually the brute force is the right first step — write it, then ask "where is it wasting time?"`
        : 'Open the Approach section and expand Brute Force.';
    case 'optimal':
      return question.optimal
        ? `Optimal idea: ${question.optimal.idea}\n\nSteps:\n${question.optimal.steps.map((s, i) => `${i + 1}. ${s}`).join('\n')}\n\nTime: ${question.optimal.time} | Space: ${question.optimal.space}`
        : 'Open the Approach section and expand Optimal Approach.';
    case 'dryrun':
      return question.dry?.length
        ? `Let's walk through it step by step:\n\n${question.dry.map((s, i) => `Step ${i + 1}: ${s}`).join('\n')}\n\nUse the Dry Run section on the page to navigate with arrows.`
        : 'The Dry Run section on this page walks through the steps.';
    case 'mycode':
      return (
        "I can't see your code in this UI-only version (that will connect later), but here's how I'd check it:\n" +
        '1. Does it match the optimal idea above?\n' +
        '2. Did you test an edge case (empty input, all same values, n=1)?\n' +
        '3. Walk one sample input on paper and compare with the Dry Run.\n' +
        'Paste your code here in a future version and I will explain line by line.'
      );
    default:
      return (
        `About "${question.title}" (${difficulty || question.difficulty}): ${summary || question.summary}\n\n` +
        'Ask me: "Explain in simple Hinglish", "Give me a hint", "Explain this pattern", "Explain brute force", "Explain optimal approach", or "Dry run this".'
      );
  }
}
