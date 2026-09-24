const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-BPr_OWVI.js","assets/motion-B2jgOmmF.js","assets/react-cfBSwwek.js","assets/StatCard-lfRYB1Q-.js","assets/ProgressBar-BFnWe5oO.js","assets/JourneyStrip-D5c5LSZi.js","assets/journey-BknRsZRs.js","assets/QuestionCard-DdlSfN-S.js","assets/About-F5xk5G_u.js","assets/Patterns-oPNc0ydG.js","assets/PatternDetail-CDTptqhR.js","assets/NotFound-DN0OZJPC.js","assets/EmptyState-Bz_CS7DK.js","assets/Questions-6yqqE8q_.js","assets/QuestionDetail-_uyLiNSC.js","assets/DailyPractice-lIhbvuwn.js","assets/ProgressPage-CBKuC_ES.js","assets/Bookmarks-Dq_kb2Ci.js","assets/Revision-CMp1__yo.js","assets/Notes-B0PrqZho.js","assets/Profile-Dr8oQFJQ.js","assets/Settings-CsSHidzP.js","assets/Login-DqHT3nx4.js","assets/Signup-CPg74XE_.js"])))=>i.map(i=>d[i]);
import{j as e,A as N,m as A}from"./motion-B2jgOmmF.js";import{a as Ae,r as a,u as qe,b as K,L as M,N as I,O as H,R as Ce,c as v,d as Ee,B as Fe}from"./react-cfBSwwek.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerPolicy&&(s.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?s.credentials="include":l.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(l){if(l.ep)return;l.ep=!0;const s=n(l);fetch(l.href,s)}})();var z={},ae=Ae;z.createRoot=ae.createRoot,z.hydrateRoot=ae.hydrateRoot;const Ie="modulepreload",Re=function(t){return"/"+t},ne={},O=function(r,n,i){let l=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),p=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));l=Promise.allSettled(n.map(m=>{if(m=Re(m),m in ne)return;ne[m]=!0;const w=m.endsWith(".css"),u=w?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${u}`))return;const d=document.createElement("link");if(d.rel=w?"stylesheet":Ie,w||(d.as="script"),d.crossOrigin="",d.href=m,p&&d.setAttribute("nonce",p),document.head.appendChild(d),w)return new Promise((x,h)=>{d.addEventListener("load",x),d.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${m}`)))})}))}function s(o){const p=new Event("vite:preloadError",{cancelable:!0});if(p.payload=o,window.dispatchEvent(p),!p.defaultPrevented)throw o}return l.then(o=>{for(const p of o||[])p.status==="rejected"&&s(p.reason);return r().catch(s)})},b={progress:"dsa60_progress",bookmarks:"dsa60_bookmarks",notes:"dsa60_notes",theme:"dsa60_theme",activity:"dsa60_activity",user:"dsa60_user",users:"dsa60_users",settings:"dsa60_settings",recent:"dsa60_recent",lastQuestion:"dsa60_last_question"};function C(t,r){try{const n=localStorage.getItem(t);return n===null?r:JSON.parse(n)}catch{return r}}function E(t,r){try{return localStorage.setItem(t,JSON.stringify(r)),!0}catch{return!1}}const Le=()=>C(b.progress,{}),ie=t=>E(b.progress,t),Me=()=>C(b.bookmarks,[]),se=t=>E(b.bookmarks,t),De=()=>C(b.notes,{}),oe=t=>E(b.notes,t),Ne=()=>{try{return localStorage.getItem(b.theme)}catch{return null}},Pe=t=>{try{return localStorage.setItem(b.theme,t),!0}catch{return!1}},Be=()=>C(b.activity,{}),le=t=>E(b.activity,t),_e=()=>C(b.user,null),_=t=>E(b.user,t),de=()=>C(b.users,[]),We=t=>E(b.users,t),ze=()=>C(b.settings,{dailyGoal:3}),Ge=t=>E(b.settings,t),Ke=()=>C(b.recent,[]),he=t=>E(b.recent,t),He=()=>C(b.lastQuestion,null),W=t=>E(b.lastQuestion,t),we=a.createContext(null);function Ve(){const t=Ne();return t==="dark"||t==="light"?t:typeof window<"u"&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function Ue({children:t}){const[r,n]=a.useState(Ve);a.useEffect(()=>{const l=document.documentElement;r==="dark"?l.classList.add("dark"):l.classList.remove("dark"),Pe(r)},[r]);const i=a.useCallback(()=>{n(l=>l==="dark"?"light":"dark")},[]);return e.jsx(we.Provider,{value:{theme:r,toggleTheme:i,isDark:r==="dark"},children:t})}function Ye(){const t=a.useContext(we);if(!t)throw new Error("useTheme must be used inside ThemeProvider");return t}const ye=a.createContext(null);function $e({children:t}){const[r,n]=a.useState(()=>_e()),i=a.useCallback((o,p,m)=>{const w=de(),u=p.trim().toLowerCase();if(!o.trim())return{ok:!1,error:"Please enter your name."};if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(u))return{ok:!1,error:"Please enter a valid email."};if(m.length<4)return{ok:!1,error:"Password must be at least 4 characters."};if(w.some(h=>h.email===u))return{ok:!1,error:"An account with this email already exists. Please login."};const d={name:o.trim(),email:u,password:m,joined:new Date().toISOString()};We([...w,d]);const x={name:d.name,email:d.email,joined:d.joined};return _(x),n(x),{ok:!0,user:x}},[]),l=a.useCallback((o,p)=>{const m=de(),w=o.trim().toLowerCase(),u=m.find(x=>x.email===w);if(!u)return{ok:!1,error:"No account found with this email. Please sign up."};if(u.password!==p)return{ok:!1,error:"Incorrect password. Please try again."};const d={name:u.name,email:u.email,joined:u.joined};return _(d),n(d),{ok:!0,user:d}},[]),s=a.useCallback(()=>{_(null),n(null)},[]);return e.jsx(ye.Provider,{value:{user:r,isAuthed:!!r,login:l,signup:i,logout:s},children:t})}function be(){const t=a.useContext(ye);if(!t)throw new Error("useAuth must be used inside AuthProvider");return t}const Xe=[{id:"tp-01",slug:"pair-with-target-sum",title:"Pair with Target Sum",pattern:"two-pointers",difficulty:"Easy",platform:"LeetCode",url:"https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",extra:[],summary:"Given a sorted array of integers and a target, find two numbers that add up to the target and return their indices.",asked:"Return the 1-indexed positions of the two numbers whose sum equals the target. There is exactly one valid pair.",why:"The array is sorted, so the sum of the two ends tells you exactly which pointer to move — one pass is enough.",clues:["sorted array","pair with target","two numbers sum to target"],brute:{idea:"Nested loops: check every pair (i, j) and test nums[i] + nums[j] === target.",time:"O(n²)",space:"O(1)"},optimal:{idea:"Keep a left pointer at the start and a right pointer at the end. If the sum is too small, move left right; if too big, move right left. Stop when they meet.",steps:["Set left = 0, right = n - 1.","Compute sum = nums[left] + nums[right].","If sum === target, return the indices.","If sum < target, increment left (need a bigger sum).","If sum > target, decrement right (need a smaller sum).","Repeat until left < right."],time:"O(n)",space:"O(1)"},dry:["Input: nums = [2, 7, 11, 15], target = 9","left=0, right=3 → 2 + 15 = 17 > 9 → right = 2","left=0, right=2 → 2 + 11 = 13 > 9 → right = 1","left=0, right=1 → 2 + 7 = 9 ✓","Answer: [1, 2] (1-indexed)"],hints:["The array is sorted. What does that let you conclude about moving a pointer?","Compare the current two-end sum with the target — that decides the move.","Sum too small → only moving left right can help. Sum too big → only moving right left can help."],code:{javascript:`function twoSum(numbers, target) {
  let l = 0, r = numbers.length - 1;
  while (l < r) {
    const sum = numbers[l] + numbers[r];
    if (sum === target) return [l + 1, r + 1]; // 1-indexed
    if (sum < target) l++;
    else r--;
  }
  return [];
}`,python:`def twoSum(numbers, target):
    l, r = 0, len(numbers) - 1
    while l < r:
        s = numbers[l] + numbers[r]
        if s == target:
            return [l + 1, r + 1]  # 1-indexed
        if s < target:
            l += 1
        else:
            r -= 1
    return []`,java:`class Solution {
    public int[] twoSum(int[] numbers, int target) {
        int l = 0, r = numbers.length - 1;
        while (l < r) {
            int sum = numbers[l] + numbers[r];
            if (sum == target) return new int[]{l + 1, r + 1};
            if (sum < target) l++;
            else r--;
        }
        return new int[]{};
    }
}`,cpp:`vector<int> twoSum(vector<int>& numbers, int target) {
    int l = 0, r = (int)numbers.size() - 1;
    while (l < r) {
        int sum = numbers[l] + numbers[r];
        if (sum == target) return {l + 1, r + 1};
        if (sum < target) l++;
        else r--;
    }
    return {};
}`}},{id:"tp-02",slug:"rearrange-0-and-1",title:"Rearrange 0 and 1",pattern:"two-pointers",difficulty:"Easy",platform:"GeeksforGeeks",url:"https://www.geeksforgeeks.org/problems/segregate-0s-and-1s5106/1",extra:[],summary:"Given an array of only 0s and 1s, rearrange it in place so that all 0s come before all 1s.",asked:"Modify the array (in place, ideally in one pass) so every 0 precedes every 1. Return the modified array.",why:'This is the two-pointer "segregation" form: one pointer tracks where the next 0 belongs, and you swap each 0 forward.',clues:["only 0s and 1s","segregate","arrange in place"],brute:{idea:"Count the zeros, then rewrite the whole array: write count zeros then the rest as ones.",time:"O(n)",space:"O(1)"},optimal:{idea:"Keep a pointer (lastZero) at the last position known to hold 0. Scan left to right; whenever you see a 0, swap it into position lastZero + 1 and advance that pointer.",steps:["lastZero = -1 (no zero placed yet).","For each index i: if arr[i] === 0, swap arr[i] with arr[lastZero + 1] and lastZero++.","At the end, positions 0..lastZero are all 0s and the rest are 1s.","Return the array."],time:"O(n)",space:"O(1)"},dry:["Input: [0, 1, 0, 1, 1, 0]","i=0: 0 → swap with self, lastZero = 0 → [0,1,0,1,1,0]","i=1: 1 → skip","i=2: 0 → swap with index 1, lastZero = 1 → [0,0,1,1,1,0]","i=3,4: 1 → skip","i=5: 0 → swap with index 2, lastZero = 2 → [0,0,0,1,1,1] ✓"],hints:['Where does the "next" zero need to be placed?',"One pointer scanning, one pointer marking the boundary between 0-zone and 1-zone.","Swap the found zero into the first slot of the 1-zone."],code:{javascript:`function segregate0s1s(arr) {
  let lastZero = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      lastZero++;
      [arr[i], arr[lastZero]] = [arr[lastZero], arr[i]];
    }
  }
  return arr;
}`,python:`def segregate0s1s(arr):
    last_zero = -1
    for i in range(len(arr)):
        if arr[i] == 0:
            last_zero += 1
            arr[i], arr[last_zero] = arr[last_zero], arr[i]
    return arr`,java:"",cpp:""}},{id:"tp-03",slug:"remove-duplicates",title:"Remove Duplicates",pattern:"two-pointers",difficulty:"Easy",platform:"LeetCode",url:"https://leetcode.com/problems/remove-duplicates-from-sorted-list/",extra:[{label:"LeetCode — Remove Duplicates from Sorted Array",url:"https://leetcode.com/problems/remove-duplicates-from-sorted-array/"},{label:"LeetCode — Remove Duplicates from Sorted Array II",url:"https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/"}],summary:"Given a sorted array (or sorted linked list), remove duplicate elements so each value appears only once, using two pointers / in-place writes.",asked:"Return the array with duplicates removed (in place where applicable) or the deduplicated sorted linked list. Sorted order means duplicates are adjacent.",why:"In a sorted structure, duplicates are next to each other — one pointer reads ahead, the other writes the compacted result.",clues:["sorted","duplicates adjacent","remove in place"],brute:{idea:"Insert everything into a Set / map and rebuild — loses the in-place, O(n) space.",time:"O(n)",space:"O(n)"},optimal:{idea:'Write pointer k starts at 0. Read each value; write it to position k only if it differs from the last written value (nums[k-1]). The write pointer "compacts" the array in one pass.',steps:["k = 0 (next write position).","For each x in the array: if k === 0 or nums[k-1] !== x, write nums[k] = x and k++.","Return k (the new length) — or in the linked-list version, unlink repeated next nodes.","Every element is read once and written at most once."],time:"O(n)",space:"O(1)"},dry:["Input (array version): [1, 1, 2, 3, 3, 3, 4]","k=0: write 1 → [1,_,...], k=1","x=1: nums[0]=1, skip","x=2: nums[0]=1 ≠ 2 → write at k=1, k=2","x=3: write at k=2, k=3","x=3, x=3: skip (same as nums[k-1]=3)","x=4: write at k=3, k=4 → [1,2,3,4] ✓"],hints:["Sort order guarantees duplicates are adjacent. Use that.",'Keep a "write" pointer separate from the "read" pointer.',"Only write a value if it differs from the last one you wrote."],code:{javascript:`// Sorted array version (in place), returns new length
function removeDuplicates(nums) {
  let k = 0;
  for (const x of nums) {
    if (k === 0 || nums[k - 1] !== x) nums[k++] = x;
  }
  return k; // first k elements are the deduplicated array
}

// Sorted linked list version
function deleteDuplicates(head) {
  let cur = head;
  while (cur && cur.next) {
    if (cur.val === cur.next.val) cur.next = cur.next.next;
    else cur = cur.next;
  }
  return head;
}`,python:`# Sorted array version (in place), returns new length
def removeDuplicates(nums):
    k = 0
    for x in nums:
        if k == 0 or nums[k - 1] != x:
            nums[k] = x
            k += 1
    return k  # first k elements are the deduplicated array`,java:"",cpp:""}},{id:"tp-04",slug:"squaring-a-sorted-array",title:"Squaring a Sorted Array",pattern:"two-pointers",difficulty:"Easy",platform:"LeetCode",url:"https://leetcode.com/problems/squares-of-a-sorted-array/",extra:[],summary:"Given an integer array sorted in non-decreasing order (may contain negatives), return the array of squares sorted in non-decreasing order.",asked:"Return a new array where each element is squared and the result is still sorted. Do it in O(n).",why:"After squaring, the largest values live at either end of the original array. Two pointers from both ends fill the answer from the back.",clues:["sorted with negatives","square every element","result must stay sorted"],brute:{idea:"Square every element, then sort the result.",time:"O(n log n)",space:"O(n)"},optimal:{idea:"The max square is at one of the two ends. Keep left/right pointers and repeatedly place the larger square at the back of the answer, moving that pointer inward.",steps:["left = 0, right = n - 1, k = n - 1 (fill from the back).","Compare nums[left]² and nums[right]².","Put the larger at res[k], decrement k, move the pointer that produced it.","Stop when left > right."],time:"O(n)",space:"O(n)"},dry:["Input: [-4, -1, 0, 3, 10]","ends: 16 vs 100 → place 100 at back, right--","ends: 16 vs 9 → place 16, left++","ends: 1 vs 9 → place 9, right--","ends: 1 vs 0 → place 1, left++","place 0 → [0, 1, 9, 16, 100] ✓"],hints:["Where can the largest square be in the original array?","Fill the answer from the end (largest) to the start.","At each step only one pointer moves — the side with the bigger absolute value."],code:{javascript:`function sortedSquares(nums) {
  const n = nums.length;
  const res = new Array(n);
  let l = 0, r = n - 1, k = n - 1;
  while (l <= r) {
    if (nums[l] * nums[l] >= nums[r] * nums[r]) {
      res[k--] = nums[l] * nums[l];
      l++;
    } else {
      res[k--] = nums[r] * nums[r];
      r--;
    }
  }
  return res;
}`,python:`def sortedSquares(nums):
    n = len(nums)
    res = [0] * n
    l, r, k = 0, n - 1, n - 1
    while l <= r:
        if nums[l] ** 2 >= nums[r] ** 2:
            res[k] = nums[l] ** 2
            l += 1
        else:
            res[k] = nums[r] ** 2
            r -= 1
        k -= 1
    return res`,java:"",cpp:""}},{id:"tp-05",slug:"triplet-sum-to-zero",title:"Triplet Sum to Zero",pattern:"two-pointers",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/3sum/",extra:[],summary:"Given an integer array, find all unique triplets (a, b, c) that sum to zero, without duplicate triplets.",asked:"Return a list of all unique triplets [a, b, c] with a + b + c = 0. Order within a triplet and order of triplets can vary, but no duplicates.",why:'Sort first. Fix one number, then the "other two sum to -x" part is a classic two-pointer problem on the sorted remainder.',clues:["all triplets","sum to zero","unique (no duplicates)","sorted helps"],brute:{idea:"Three nested loops over all triplets, plus a set to filter duplicates.",time:"O(n³)",space:"O(1) + output"},optimal:{idea:"Sort the array. For each index i (skipping duplicates), use two pointers on (i+1, n-1) to find pairs summing to -nums[i]. Skip duplicates at both pointers.",steps:["Sort the array.","For i from 0 to n-3: if nums[i] === nums[i-1], skip (duplicate triplet).","l = i+1, r = n-1. While l < r: s = nums[i]+nums[l]+nums[r].","If s === 0: record, then advance l past duplicates and r past duplicates.","If s < 0: l++. Else: r--.","Early exit: if nums[i] > 0, stop (no zero-sum possible from here)."],time:"O(n²)",space:"O(1) + output"},dry:["Input: [-1, 0, 1, 2, -1, -4] → sorted: [-4, -1, -1, 0, 1, 2]","i=0 (-4): pair sum needs 4 → l,r sweep finds nothing","i=1 (-1): need 1 → l=3(0), r=5(2): 0+2=2>1 r--; 0+1=1 ✓ → [-1,0,1]; l=4, r=4 stop","i=2 (-1): duplicate of i=1 → skip","i=3 (0): need 0 → l=4(1), r=5(2): 3>0 r--; stop","Answer: [[-1,-1,2] was found? re-check: at i=1 with l=2? — duplicates handled; final: [[-1,0,1], [-1,-1,2]]"],hints:['Sort first, then reduce "triplet" to "pair with target".',"When you find a match, skip all equal values on both sides to avoid duplicate triplets.","Also skip the outer i when it equals the previous i."],code:{javascript:`function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const res = [];
  const n = nums.length;
  for (let i = 0; i < n - 2; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let l = i + 1, r = n - 1;
    while (l < r) {
      const s = nums[i] + nums[l] + nums[r];
      if (s === 0) {
        res.push([nums[i], nums[l], nums[r]]);
        while (l < r && nums[l] === nums[l + 1]) l++;
        while (l < r && nums[r] === nums[r - 1]) r--;
        l++;
        r--;
      } else if (s < 0) l++;
      else r--;
    }
  }
  return res;
}`,python:`def threeSum(nums):
    nums.sort()
    res, n = [], len(nums)
    for i in range(n - 2):
        if nums[i] > 0: break
        if i > 0 and nums[i] == nums[i - 1]: continue
        l, r = i + 1, n - 1
        while l < r:
            s = nums[i] + nums[l] + nums[r]
            if s == 0:
                res.append([nums[i], nums[l], nums[r]])
                while l < r and nums[l] == nums[l + 1]: l += 1
                while l < r and nums[r] == nums[r - 1]: r -= 1
                l += 1; r -= 1
            elif s < 0: l += 1
            else: r -= 1
    return res`,java:"",cpp:""}},{id:"tp-06",slug:"triplet-sum-closest-to-target",title:"Triplet Sum Closest to Target",pattern:"two-pointers",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/3sum-closest/",extra:[],summary:"Given an array of numbers and a target, find one triplet whose sum is closest to the target and return that sum.",asked:"Return the sum of any triplet (a, b, c) from the array that minimizes |sum - target|.",why:"Same skeleton as 3Sum: sort, fix one element, two-pointer the rest — but instead of requiring an exact zero, track the sum with the smallest distance.",clues:["closest to target","triplet","return the sum"],brute:{idea:"Check every triplet, keep the best by |sum - target|.",time:"O(n³)",space:"O(1)"},optimal:{idea:"Sort, fix i, two-pointer (l, r). At each sum update the best answer; move the pointers the same way as 3Sum (toward the target). Early-exit if an exact match appears.",steps:["Sort the array; best = first triplet sum.","For each i (no need to skip duplicates for correctness here):","l = i+1, r = n-1; while l < r: s = nums[i]+nums[l]+nums[r].","If |s - target| < |best - target|, best = s. If s === target, return it.","Move l++ when s < target, else r--."],time:"O(n²)",space:"O(1)"},dry:["Input: [-1, 2, 1, -4], target = 1","sorted: [-4, -1, 1, 2]","i=0: l=1,r=3 → -4-1+2=-3 (dist 4, best=-3); s<1 → l=2 → -4+1+2=-1 (dist 2, best=-1); r--","i=1: l=2,r=3 → -1+1+2=2 (dist 1, best=2); s>1 → r--; stop","Answer: 2 (closest to 1)"],hints:['This is 3Sum where "equal" becomes "closest".',"Keep a best variable and compare absolute differences.","Pointer moves are identical to 3Sum — always move toward the target."],code:{javascript:`function threeSumClosest(nums, target) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let best = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < n - 2; i++) {
    let l = i + 1, r = n - 1;
    while (l < r) {
      const s = nums[i] + nums[l] + nums[r];
      if (Math.abs(s - target) < Math.abs(best - target)) best = s;
      if (s === target) return s;
      if (s < target) l++;
      else r--;
    }
  }
  return best;
}`,python:`def threeSumClosest(nums, target):
    nums.sort()
    n = len(nums)
    best = nums[0] + nums[1] + nums[2]
    for i in range(n - 2):
        l, r = i + 1, n - 1
        while l < r:
            s = nums[i] + nums[l] + nums[r]
            if abs(s - target) < abs(best - target):
                best = s
            if s == target: return s
            if s < target: l += 1
            else: r -= 1
    return best`,java:"",cpp:""}},{id:"tp-07",slug:"triplets-with-smaller-sum",title:"Triplets with Smaller Sum",pattern:"two-pointers",difficulty:"Medium",platform:"GeeksforGeeks",url:"https://www.geeksforgeeks.org/problems/count-triplets-with-sum-smaller-than-x5549/1",extra:[],summary:"Count the number of triplets (i, j, k) with i < j < k such that arr[i] + arr[j] + arr[k] < X.",asked:"Return the count of index triplets whose three values sum to strictly less than X.",why:"After sorting, for a fixed i and a valid (l, r) pair, every index between l+1 and r also works — two pointers count ranges in bulk instead of one by one.",clues:["count triplets","sum less than X","i < j < k"],brute:{idea:"Triple nested loop checking each triplet sum.",time:"O(n³)",space:"O(1)"},optimal:{idea:"Sort. Fix i; with two pointers l = i+1, r = n-1: if arr[i]+arr[l]+arr[r] < X, then all pairs (l, l+1..r-1) also qualify (sorted!), so add (r - l) and move l++; otherwise r--.",steps:["Sort the array.","For each i from 0 to n-3:","l = i+1, r = n-1.","If arr[i] + arr[l] + arr[r] < X → count += (r - l); l++.","Else r--.","Return count."],time:"O(n²)",space:"O(1)"},dry:["Input: arr = [1, 2, 3, 4], X = 7","i=0 (1): l=1(2), r=3(4) → 1+2+4=7 not <7 → r=2","l=1(2), r=2(3) → 1+2+3=6 <7 → count += (2-1)=1 → [1,2,3]; l=2 stop","i=1 (2): l=2(3), r=3(4) → 2+3+4=9 → r=2 stop","Answer: 1"],hints:['Sort first — then "all between" works for you.',"When the sum is already too big, only moving r left can help.","When arr[i]+arr[l]+arr[r] < X, the (r - l) middle pairs are all valid at once."],code:{javascript:`function countTriplets(arr, X) {
  arr.sort((a, b) => a - b);
  const n = arr.length;
  let count = 0;
  for (let i = 0; i < n - 2; i++) {
    let l = i + 1, r = n - 1;
    while (l < r) {
      if (arr[i] + arr[l] + arr[r] < X) {
        count += r - l; // (l, l+1..r) all qualify
        l++;
      } else {
        r--;
      }
    }
  }
  return count;
}`,python:`def countTriplets(arr, X):
    arr.sort()
    n = len(arr)
    count = 0
    for i in range(n - 2):
        l, r = i + 1, n - 1
        while l < r:
            if arr[i] + arr[l] + arr[r] < X:
                count += r - l
                l += 1
            else:
                r -= 1
    return count`,java:"",cpp:""}},{id:"tp-08",slug:"subarrays-with-product-less-than-k",title:"Subarrays with Product Less than a Target",pattern:"two-pointers",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/subarray-product-less-than-k/",extra:[],summary:"Given an array of positive integers and a target k, count the number of contiguous subarrays whose product is strictly less than k.",asked:"Return the total count of contiguous subarrays with product < k. All numbers are positive (so the product is monotone with window size).",why:"With positive numbers, extending the window only increases the product. A sliding two-pointer window keeps product < k and counts every valid subarray ending at r in one step.",clues:["product","contiguous subarrays","less than k","positive numbers"],brute:{idea:"For every start, extend end and multiply until product ≥ k. Count along the way.",time:"O(n²)",space:"O(1)"},optimal:{idea:"Sliding window: right expands, product grows; while product ≥ k, shrink from the left (divide). Every window [l..r] that satisfies the constraint means exactly (r - l + 1) valid subarrays ending at r.",steps:["If k <= 1, return 0 (single elements already fail).","prod = 1, l = 0, count = 0.","For r from 0..n-1: prod *= nums[r].","While prod >= k: prod /= nums[l]; l++.","Now every subarray ending at r and starting at l..r is valid: count += r - l + 1."],time:"O(n)",space:"O(1)"},dry:["Input: nums = [10, 5, 2, 6], k = 100","r=0: prod=10 <100 → count += 1 → 1","r=1: prod=50 → count += 2 → 3 ([10,5],[5])","r=2: prod=100 → not <100 → divide left: prod=20, l=1 → count += 2 → 5 ([5,2],[2])","r=3: prod=120 → divide: prod=120/5=... l=2? prod=20*6=120≥100 → /5 → prod=12? trace: l=2 prod=2*6=12 → count += 2 → 7","Answer: 7"],hints:['Why does sliding window work here but not for "sum equals k" with negatives? (All positive.)',"If [l..r] is valid, how many valid subarrays end exactly at r?","Use division to shrink the product when the window is too big."],code:{javascript:`function numSubarrayProductLessThanK(nums, k) {
  if (k <= 1) return 0;
  let count = 0, prod = 1, l = 0;
  for (let r = 0; r < nums.length; r++) {
    prod *= nums[r];
    while (prod >= k) prod /= nums[l++];
    count += r - l + 1;
  }
  return count;
}`,python:`def numSubarrayProductLessThanK(nums, k):
    if k <= 1: return 0
    count = prod = l = 0
    for r, x in enumerate(nums):
        prod *= x
        while prod >= k:
            prod //= nums[l]
            l += 1
        count += r - l + 1
    return count`,java:"",cpp:""}},{id:"tp-09",slug:"dutch-national-flag-problem",title:"Dutch National Flag Problem",pattern:"two-pointers",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/sort-colors/",extra:[],summary:"Given an array of 0s, 1s and 2s (red, white, blue), sort it in place so all 0s come first, then 1s, then 2s — without using the library sort.",asked:"Modify the array in place with O(1) extra space and a single pass (three-pointer) so values are grouped in the order 0, 1, 2.",why:"Three values → three zones. Keep three pointers (0-zone, current, 2-zone) and swap each element into its correct zone as you scan.",clues:["0, 1, 2 only","sort in place","no library sort","single pass"],brute:{idea:"Count 0s, 1s and 2s, then overwrite the array from the counts (two passes).",time:"O(n)",space:"O(1)"},optimal:{idea:"Dutch National Flag: lo = first position of the 1-zone, hi = last position of the 2-zone, i = current. Swap arr[i] with arr[lo] if it is 0 (advance both), with arr[hi] if it is 2 (only advance hi — the swapped-in value still needs inspection).",steps:["lo = 0, hi = n - 1, i = 0.","While i <= hi:","If arr[i] === 0: swap with arr[lo]; lo++; i++;","If arr[i] === 2: swap with arr[hi]; hi--; (do not i++ — the swapped value is unprocessed).","If arr[i] === 1: i++;"],time:"O(n)",space:"O(1)"},dry:["Input: [2, 0, 1, 2, 0]","i=0: 2 → swap with hi(4): [0,0,1,2,2], hi=3","i=0: 0 → swap with self, lo=1, i=1","i=1: 0 → swap with arr[1] (lo=1), lo=2, i=2","i=2: 1 → i=3","i=3: 2 → swap with hi(3), hi=2 → stop (i>hi)","Result: [0, 0, 1, 2, 2] ✓"],hints:["Three pointers: where does the next 0 go, where does the next 2 go?","When you swap in from the right for a 2, why must you not advance i?","The element at i is always one of {0, 1, 2} — decide its zone and move."],code:{javascript:`function sortColors(nums) {
  let lo = 0, hi = nums.length - 1, i = 0;
  while (i <= hi) {
    if (nums[i] === 0) {
      [nums[lo], nums[i]] = [nums[i], nums[lo]];
      lo++;
      i++;
    } else if (nums[i] === 2) {
      [nums[hi], nums[i]] = [nums[i], nums[hi]];
      hi--;
    } else {
      i++;
    }
  }
}`,python:`def sortColors(nums):
    lo, hi, i = 0, len(nums) - 1, 0
    while i <= hi:
        if nums[i] == 0:
            nums[lo], nums[i] = nums[i], nums[lo]
            lo += 1
            i += 1
        elif nums[i] == 2:
            nums[hi], nums[i] = nums[i], nums[hi]
            hi -= 1
        else:
            i += 1`,java:"",cpp:""}},{id:"tp-10",slug:"quadruple-sum-to-target",title:"Quadruple Sum to Target",pattern:"two-pointers",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/4sum/",extra:[],summary:"Given an array of integers and a target, find all unique quadruplets (a, b, c, d) that sum exactly to the target, with no duplicate quadruplets.",asked:"Return all unique 4-element combinations whose sum equals the target, each in sorted order, without duplicates.",why:"It is 3Sum with one more fixed element: sort, fix two elements (with duplicate skipping), then two-pointer the remaining pair for target - a - b.",clues:["all quadruplets","sum to target","unique only","4sum"],brute:{idea:"Four nested loops + a set of joined quadruplets to dedupe.",time:"O(n⁴)",space:"O(1) + output"},optimal:{idea:"Sort. Double loop over a and b (skipping duplicate values at each level); for the rest, two pointers find pairs summing to target - a - b, skipping duplicates on match.",steps:["Sort the array.","for a in 0..n-4: skip if same as previous a.","for b in a+1..n-3: skip if same as previous b.","l = b+1, r = n-1; while l < r: s = a+b+nums[l]+nums[r].","If s === target: record; skip duplicates on both sides; l++, r--.","If s < target: l++. Else: r--."],time:"O(n³)",space:"O(1) + output"},dry:["Input: [1, 0, -1, 0, -2, 2], target = 0 → sorted: [-2,-1,0,0,1,2]","a=-2, b=-1: need 3 → l=2,r=5: 0+2=2<3 l++; 0+2 l++; 1+2=3 ✓ → [-2,-1,1,2]","a=-2, b=0: need 2 → l=3(0),r=5(2): 0+2 ✓ → [-2,0,0,2]; dup skip l→4; stop","a=-1, b=0: need 1 → l=3(0),r=5(2): 2>1 r-- ... l=4(1),r=4 stop","a=-1, b=0 (second 0): duplicate b → skip; a=0: duplicate a → skip ...","Answer: [[-2,-1,1,2], [-2,0,0,2]]"],hints:["Reduce 4Sum to 3Sum, then 3Sum to 2Sum (two pointers).","Duplicate skipping is needed at BOTH fixed loops and on the pointer matches.",'Sort makes all the "skip equal previous" checks trivial.'],code:{javascript:`function fourSum(nums, target) {
  nums.sort((a, b) => a - b);
  const res = [];
  const n = nums.length;
  for (let a = 0; a < n - 3; a++) {
    if (a > 0 && nums[a] === nums[a - 1]) continue;
    for (let b = a + 1; b < n - 2; b++) {
      if (b > a + 1 && nums[b] === nums[b - 1]) continue;
      let l = b + 1, r = n - 1;
      while (l < r) {
        const s = nums[a] + nums[b] + nums[l] + nums[r];
        if (s === target) {
          res.push([nums[a], nums[b], nums[l], nums[r]]);
          while (l < r && nums[l] === nums[l + 1]) l++;
          while (l < r && nums[r] === nums[r - 1]) r--;
          l++;
          r--;
        } else if (s < target) l++;
        else r--;
      }
    }
  }
  return res;
}`,python:`def fourSum(nums, target):
    nums.sort()
    res, n = [], len(nums)
    for a in range(n - 3):
        if a > 0 and nums[a] == nums[a - 1]: continue
        for b in range(a + 1, n - 2):
            if b > a + 1 and nums[b] == nums[b - 1]: continue
            l, r = b + 1, n - 1
            while l < r:
                s = nums[a] + nums[b] + nums[l] + nums[r]
                if s == target:
                    res.append([nums[a], nums[b], nums[l], nums[r]])
                    while l < r and nums[l] == nums[l + 1]: l += 1
                    while l < r and nums[r] == nums[r - 1]: r -= 1
                    l += 1; r -= 1
                elif s < target: l += 1
                else: r -= 1
    return res`,java:"",cpp:""}},{id:"tp-11",slug:"comparing-strings-containing-backspaces",title:"Comparing Strings containing Backspaces",pattern:"two-pointers",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/backspace-string-compare/",extra:[],summary:'Given two strings where "#" is a backspace (delete the previous character), decide whether the two final strings are equal.',asked:"Simulate the backspaces and return true if both strings reduce to the same value. Aim for O(n) time / O(1) space.",why:"Process both strings from the end with two pointers: the next valid (non-deleted) character in each string can be found by skipping backspaces — compare them one by one.",clues:["backspace #","compare final strings","O(1) extra space"],brute:{idea:"Build both final strings with a stack (or array) and compare them.",time:"O(n)",space:"O(n)"},optimal:{idea:"Two pointers from the end. A helper finds the index of the next valid character by counting backspaces to skip. Compare the valid characters; if they differ or one string ends first, return false.",steps:["i = len(s)-1, j = len(t)-1.","next(str, idx): while idx >= 0, if char is # count skip, if skip>0 consume one, else stop. Return idx.","Loop: i = next(s, i), j = next(t, j).","Both -1 → true. Only one -1 → false.","If s[i] !== t[j] → false. Else i--, j-- and continue."],time:"O(n)",space:"O(1)"},dry:['Input: s = "ab#c", t = "ad#c"','Walk s from the end: "c" has no # to its right → valid (1st compare char)','Walk t from the end: "c" → valid → "c" === "c", continue','Next valid in s: hit "#", which skips "b" → land on "a"','Next valid in t: hit "#", which skips "d" → land on "a" → "a" === "a", continue','Both pointers exhausted → true (both strings reduce to "ac")'],hints:["From the right, a character is valid if the count of # symbols to its right equals the count of non-# characters to its right.","Compare next-valid characters from both strings, not the whole strings.",'A "#" skips one previous character — count skips while walking left.'],code:{javascript:`function backspaceEquals(s, t) {
  let i = s.length - 1;
  let j = t.length - 1;
  const nextValid = (str, idx) => {
    let skips = 0;
    while (idx >= 0) {
      if (str[idx] === '#') skips++;
      else if (skips > 0) skips--;
      else break;
      idx--;
    }
    return idx;
  };
  while (true) {
    i = nextValid(s, i);
    j = nextValid(t, j);
    if (i === -1 && j === -1) return true;
    if (i === -1 || j === -1) return false;
    if (s[i] !== t[j]) return false;
    i--;
    j--;
  }
}`,python:`def backspaceEquals(s, t):
    i, j = len(s) - 1, len(t) - 1
    def next_valid(str_, idx):
        skips = 0
        while idx >= 0:
            if str_[idx] == '#':
                skips += 1
            elif skips > 0:
                skips -= 1
            else:
                break
            idx -= 1
        return idx
    while True:
        i = next_valid(s, i)
        j = next_valid(t, j)
        if i == -1 and j == -1: return True
        if i == -1 or j == -1: return False
        if s[i] != t[j]: return False
        i -= 1
        j -= 1`,java:"",cpp:""}},{id:"tp-12",slug:"minimum-window-sort",title:"Minimum Window Sort",pattern:"two-pointers",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/shortest-unsorted-continuous-subarray/",extra:[{label:"Ideaserve — Minimum Length Subarray Sorting",url:"https://www.ideserve.co.in/learn/minimum-length-subarray-sorting-which-results-in-sorted-array"}],summary:"Find the length of the shortest continuous subarray that, if sorted, makes the whole array sorted.",asked:"Return the minimum length of a contiguous subarray such that sorting only that subarray sorts the entire array. Return 0 if already sorted.",why:"The unsorted window is bounded by the rightmost element smaller than the max of its prefix and the leftmost element bigger than the min of its suffix — two one-pass sweeps from both ends.",clues:["shortest subarray","sorting it sorts all","window"],brute:{idea:"For every subarray, copy, sort it in place, and check if the whole array becomes sorted.",time:"O(n³)",space:"O(n)"},optimal:{idea:"Sweep right to left tracking the min seen: the leftmost index where arr[i] > suffix-min is the window start. Sweep left to right tracking max seen: the rightmost index where arr[i] < prefix-max is the window end. Length = end - start + 1.",steps:["If no descents exist, return 0.","Right→left: minFromRight; first i with arr[i] > minFromRight → start = i.","Left→right: maxFromLeft; last i with arr[i] < maxFromLeft → end = i.","Return end - start + 1."],time:"O(n)",space:"O(1)"},dry:["Input: [2, 6, 4, 8, 10, 3, 16, 5]","Right→left min-sweep: min runs 5→3→3→3→3→3→3; arr[1]=6 > 3 → start = 1","Left→right max-sweep: max runs 2,6,6,8,10,10,16; arr[5]=3 < 16 → end = 5","Window = indices 1..5 → [6,4,8,10,3]","Sorting it → [2,3,4,6,8,10,16,5]... and arr[7]=5 < 16 too → end = 7","Answer: 7 (indices 1..7: [6,4,8,10,3,16,5])"],hints:['Which elements "belong" left of the window and right of it?',"An element is misplaced if it is greater than some later minimum (start side) or less than some earlier maximum (end side).","Two passes: one from each end, tracking running min / running max."],code:{javascript:`function findUnsortedSubarray(nums) {
  const n = nums.length;
  let start = -1, end = -1;
  let minFromRight = nums[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] > minFromRight) start = i;
    minFromRight = Math.min(minFromRight, nums[i]);
  }
  if (start === -1) return 0; // already sorted
  let maxFromLeft = nums[0];
  for (let i = 1; i < n; i++) {
    if (nums[i] < maxFromLeft) end = i;
    maxFromLeft = Math.max(maxFromLeft, nums[i]);
  }
  return end - start + 1;
}`,python:`def findUnsortedSubarray(nums):
    n = len(nums)
    start = -1
    min_right = nums[-1]
    for i in range(n - 2, -1, -1):
        if nums[i] > min_right:
            start = i
        min_right = min(min_right, nums[i])
    if start == -1:
        return 0
    end = -1
    max_left = nums[0]
    for i in range(1, n):
        if nums[i] < max_left:
            end = i
        max_left = max(max_left, nums[i])
    return end - start + 1`,java:"",cpp:""}}],Qe=[{id:"fs-01",slug:"linked-list-cycle",title:"LinkedList Cycle",pattern:"fast-slow-pointers",difficulty:"Easy",platform:"LeetCode",url:"https://leetcode.com/problems/linked-list-cycle/",extra:[],summary:"Given the head of a linked list, determine if the list has a cycle (some node is reachable again by following next pointers).",asked:"Return true if the linked list contains a cycle, else false.",why:"A tortoise (1 step) and hare (2 steps) inside a cycle must eventually meet. Outside any cycle the hare reaches the end.",clues:["linked list","cycle / loop","does it come back"],brute:{idea:"Store visited nodes in a Set; if a node appears twice, there is a cycle.",time:"O(n)",space:"O(n)"},optimal:{idea:"Floyd's algorithm: slow moves 1 node, fast moves 2. If they ever point to the same node, a cycle exists. If fast reaches null, it does not.",steps:["slow = head, fast = head.","Loop while fast && fast.next:","slow = slow.next; fast = fast.next.next.","If slow === fast → return true.","Loop ends → return false."],time:"O(n)",space:"O(1)"},dry:["List: 1 → 2 → 3 → 4 → 2 (tail connects back to node 2)","slow=1, fast=1 → slow=2, fast=3","slow=3, fast=4","slow=4, fast=3 (4.next=2, 2.next=3)","slow=2, fast=2 → meet! cycle ✓","Answer: true"],hints:["Why must two pointers with different speeds meet if a cycle exists?","Check fast and fast.next for null BEFORE moving fast.","Meeting point ≠ cycle start — that is the next problem."],code:{javascript:`function hasCycle(head) {
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}`,python:`def hasCycle(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow is fast:
            return True
    return False`,java:"",cpp:""}},{id:"fs-02",slug:"start-of-linked-list-cycle",title:"Start of LinkedList Cycle",pattern:"fast-slow-pointers",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/linked-list-cycle-ii/",extra:[],summary:"Given a linked list with a possible cycle, return the node where the cycle begins. Return null if there is no cycle.",asked:"Identify and return the exact node at which the cycle starts. No modification of the list allowed (O(1) space expected).",why:"After the tortoise and hare meet inside the cycle, resetting one pointer to the head and moving both one step makes them meet exactly at the cycle entry — a distance proof.",clues:["cycle start node","linked list","return the node"],brute:{idea:"Set of visited nodes: the first node you see twice is the cycle start.",time:"O(n)",space:"O(n)"},optimal:{idea:"Phase 1: find a meeting point with slow(1) and fast(2). Phase 2: put one pointer back at head; move both one step at a time — their intersection is the cycle start.",steps:["Run slow/fast until slow === fast (or fast is null → no cycle, return null).","Let p = head.","While p !== slow: p = p.next; slow = slow.next.","Return p (the entry node)."],time:"O(n)",space:"O(1)"},dry:["List: 1 → 2 → 3 → 4 → 5 → 3 (cycle starts at 3), tail links back to 3","Phase 1: slow/fast meet at some node inside the cycle (e.g. node 4 or 5).","Phase 2: p starts at head (1), slow continues from meeting point.","Both move 1 step: p=1,slow=? ... after exactly mu steps (mu = distance head→entry = 2: 1,2), both land on node 3.","Answer: node 3 (value 3)"],hints:["Let mu = distance from head to entry, cycle length = lambda. Where do slow/fast meet?","When p restarts from head, why do both pointers cover the same remaining distance to the entry?","mu steps from head lands on the entry; mu steps from the meeting point also lands there (mod lambda)."],code:{javascript:`function detectCycle(head) {
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
}`,python:`def detectCycle(head):
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
    return None`,java:"",cpp:""}},{id:"fs-03",slug:"happy-number",title:"Happy Number",pattern:"fast-slow-pointers",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/happy-number/",extra:[],summary:"A happy number reaches 1 when you repeatedly replace it with the sum of squares of its digits. If it loops forever, it is not happy.",asked:"Return true if n is happy (eventually becomes 1), false if it enters a cycle that never hits 1.",why:"The next-value function f(n) = sum of squares of digits maps any n to a smaller bounded range. Non-happy numbers eventually repeat — a cycle in a functional graph, detected with fast/slow.",clues:["repeated function","cycle or reaches 1","digits"],brute:{idea:"Keep a Set of seen numbers; if a number repeats before reaching 1, it is not happy.",time:"O(log n) steps typically",space:"O(log n)"},optimal:{idea:"Treat the digit-square-sum as a linked list where each node points to f(node). Use Floyd: if the sequence reaches 1 → happy; if slow === fast before that → cycle → not happy.",steps:["slow = n, fast = n.","Loop: slow = f(slow); fast = f(f(fast)).","If slow === 1 → return true.","If slow === fast → return false (cycle found)."],time:"O(log n)",space:"O(1)"},dry:["n = 19","f(19) = 1+81 = 82 → f(82) = 64+4 = 68 → f(68) = 36+64 = 100 → f(100) = 1 ✓","slow: 19 → 82 → 68 ...","fast: 19 → 68 → ...","Reaches 1","Answer: true"],hints:['This is cycle detection on a number "linked list" (each number has exactly one next).',"What are the two outcomes of the sequence? (1, or a cycle)","Use a Set for the easy version; fast/slow for O(1) space."],code:{javascript:`function isHappy(n) {
  const squareSum = (x) =>
    String(x).split('').reduce((acc, c) => acc + Number(c) ** 2, 0);
  let slow = n, fast = n;
  do {
    slow = squareSum(slow);
    fast = squareSum(squareSum(fast));
  } while (slow !== fast && slow !== 1);
  return slow === 1;
}`,python:`def isHappy(n):
    def sq(x):
        return sum(int(c) ** 2 for c in str(x))
    slow, fast = n, n
    while True:
        slow = sq(slow)
        fast = sq(sq(fast))
        if slow == fast:
            break
    return slow == 1`,java:"",cpp:""}},{id:"fs-04",slug:"find-duplicate-number",title:"Find Duplicate Number",pattern:"fast-slow-pointers",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/find-the-duplicate-number/",extra:[],summary:"Given n + 1 integers where each is between 1 and n, there is exactly one repeated number. Find it without modifying the array and in O(1) extra space.",asked:"Return the single duplicate value. Constraints: no array modification, O(1) space (no counting sort trickery with an extra array).",why:"Treat index i as a node pointing to value nums[i]. Since a value repeats, two indices point to the same node — the value function forms a cycle whose entry is the duplicate.",clues:["value in 1..n with n+1 items","find duplicate","O(1) space, no modification"],brute:{idea:"Sort and scan adjacent duplicates, or use a Set of seen values.",time:"O(n log n) / O(n)",space:"O(1) / O(n)"},optimal:{idea:"Floyd on the value graph: slow = nums[slow], fast = nums[nums[fast]] from position 0. Meeting point proves a cycle; then restart slow at index 0 and step both by one — they meet at the entry, which is the duplicate.",steps:["Phase 1: slow = nums[0]; fast = nums[0]; do { slow = nums[slow]; fast = nums[nums[fast]]; } while (slow !== fast).","Phase 2: slow = nums[0]; while (slow !== fast) { slow = nums[slow]; fast = nums[fast]; }.","Return slow (the duplicate value)."],time:"O(n)",space:"O(1)"},dry:["nums = [1, 3, 4, 2, 2] (n = 4)","Graph: 0→1, 1→3, 2→4, 3→2, 4→2","Phase 1: slow: 1 → 3 → 2; fast: 3 → 2 → 4... trace: slow=nums[0]=1, fast=nums[nums[0]]=nums[1]=3; slow=nums[1]=3, fast=nums[nums[3]]=nums[2]=4; slow=nums[3]=2, fast=nums[nums[4]]=nums[2]=4; slow=nums[2]=4, fast=nums[nums[4]]=4 → meet at 4","Phase 2: slow = nums[0] = 1; fast stays 4.","slow=nums[1]=3, fast=nums[4]=2","slow=nums[3]=2, fast=nums[2]=4","slow=nums[2]=4, fast=nums[4]=2","slow=nums[4]=2, fast=nums[2]=4 → hmm, they alternate; re-trace: entry of cycle is 2 (duplicate). Phase 2 lands both at 2.","Answer: 2"],hints:["Why does the duplicate create a cycle in index→value graph?",'Why does index 0 (value nums[0]) act like the "head" of the list?',"Entry node of the cycle = duplicate value (two arrows into it)."],code:{javascript:`function findDuplicate(nums) {
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
}`,python:`def findDuplicate(nums):
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
    return slow`,java:"",cpp:""}},{id:"fs-05",slug:"middle-of-the-linked-list",title:"Middle of the LinkedList",pattern:"fast-slow-pointers",difficulty:"Easy",platform:"LeetCode",url:"https://leetcode.com/problems/middle-of-the-linked-list/",extra:[],summary:"Given the head of a non-empty linked list, return the middle node. If there are two middles, return the second one.",asked:"Return the node at position ⌈n/2⌉ (1-indexed) — for even length, the second middle.",why:"When fast (2 steps) hits the end, slow (1 step) is exactly halfway — the speed ratio does the counting for you.",clues:["middle node","linked list","second middle if even"],brute:{idea:"Count the length in one pass, then walk n/2 steps.",time:"O(n)",space:"O(1)"},optimal:{idea:"slow and fast start at head. Each step: slow one node, fast two. Stop when fast reaches the end (fast === null or fast.next === null). slow is the middle.",steps:["slow = head, fast = head.","While fast && fast.next: slow = slow.next; fast = fast.next.next.","Return slow."],time:"O(n)",space:"O(1)"},dry:["List: 1 → 2 → 3 → 4 → 5 (n = 5)","start: slow=1, fast=1","slow=2, fast=3","slow=3, fast=5 (fast.next = null → stop)","Answer: node 3","Even example 1→2→3→4: slow ends at 3 (second middle) ✓"],hints:["What is the speed ratio of the two pointers?","When fast is at the last node (odd length), where is slow?","Loop condition: fast && fast.next (not fast.next && fast.next.next)."],code:{javascript:`function middleNode(head) {
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}`,python:`def middleNode(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    return slow`,java:"",cpp:""}},{id:"fs-06",slug:"palindrome-linked-list",title:"Palindrome LinkedList",pattern:"fast-slow-pointers",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/palindrome-linked-list/",extra:[],summary:"Given the head of a singly linked list, determine if it is a palindrome.",asked:"Return true if the list reads the same forward and backward. Ideally O(n) time and O(1) space.",why:"Find the middle (fast/slow), reverse the second half, then compare the two halves node by node. Classic composition of two fast/slow techniques.",clues:["palindrome","linked list","O(1) space"],brute:{idea:"Copy values into an array and check if the array is a palindrome.",time:"O(n)",space:"O(n)"},optimal:{idea:"1) Fast/slow to find the middle. 2) Reverse the second half. 3) Walk both halves from the head, comparing values. 4) (Optional) restore the list.",steps:["slow = head, fast = head; while (fast.next && fast.next.next): advance.","slow is the last node of the first half. Split: second = slow.next; slow.next = null.","Reverse the second half (standard 3-pointer reversal).","Compare head and the reversed second half in lockstep.","Return true if all match (optionally reverse back)."],time:"O(n)",space:"O(1)"},dry:["List: 1 → 2 → 2 → 1","Middle (slow) = first 2 (index 1); second half = [2, 1]","Reverse second half → 1 → 2","Compare: 1 vs 1 ✓, 2 vs 2 ✓","Answer: true","Counter-example 1 → 2 → 3 → 1: halves [1,2] vs reversed [1,3] → 2 ≠ 3 → false"],hints:["You cannot walk a singly linked list backwards — so what do you do to the second half?",'Which node is "slow" for even length, and why is that the correct split point?',"After reversal, the second half runs from its last original node toward the split."],code:{javascript:`function isPalindrome(head) {
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
}`,python:`def isPalindrome(head):
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
    return True`,java:"",cpp:""}},{id:"fs-07",slug:"rearrange-a-linked-list",title:"Rearrange a LinkedList",pattern:"fast-slow-pointers",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/reorder-list/",extra:[],summary:"Given a linked list L0 → L1 → … → Ln, reorder it in-place to L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → …",asked:"Interleave the first half with the reversed second half, modifying only pointers (no value changes).",why:"Three fast/slow techniques compose: find the middle, reverse the second half, then merge the two halves alternately.",clues:["reorder list","interleave ends","in place pointers"],brute:{idea:"Store values in an array, build the new order, write values back.",time:"O(n)",space:"O(n)"},optimal:{idea:"Split at the middle (fast/slow), reverse the second half, then stitch: take one node from the first half, one from the reversed second, alternating, until one runs out.",steps:["Find middle: slow/fast until fast.next && fast.next.next.","Split: second = slow.next; slow.next = null.","Reverse the second half.","Merge: while (second) { save nexts; first.next = second; second.next = firstNext; advance both. }","The first half is never shorter, so the tail handling is automatic."],time:"O(n)",space:"O(1)"},dry:["List: 1 → 2 → 3 → 4 → 5","Middle = 3; first half [1,2,3], second [4,5]","Reverse second → 5 → 4","Stitch: 1→5, 2→4, 3 (tail stays)","Result: 1 → 5 → 2 → 4 → 3 ✓"],hints:["This is middle + reverse + merge — do you have all three as muscle memory?","After reversing the second half, which end of it do you consume first?",'Save both "next" pointers BEFORE rewiring, or the list is lost.'],code:{javascript:`function reorderList(head) {
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
}`,python:`def reorderList(head):
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
        tail = tnext`,java:"",cpp:""}},{id:"fs-08",slug:"cycle-in-a-circular-array",title:"Cycle in a Circular Array",pattern:"fast-slow-pointers",difficulty:"Hard",platform:"LeetCode",url:"https://leetcode.com/problems/circular-array-loop/",extra:[],summary:"You are in a circular array where each value is a jump (positive = forward, negative = backward). Determine if there is a cycle of length ≥ 3 that moves consistently in one direction.",asked:"Return true if some repeated jumping produces a cycle of at least 3 distinct nodes, all with the same sign. A self-loop or 2-node loop does not count.",why:"Each node has exactly one successor — a functional graph per direction. Floyd detects a cycle starting from each node; direction consistency and length ≥ 3 are the extra checks.",clues:["circular array","jumps + and -","cycle length ≥ 3","same direction"],brute:{idea:"For each start, walk until you repeat a node or hit a direction change; use a map to count cycle length.",time:"O(n²)",space:"O(n)"},optimal:{idea:"For each unvisited start (in one direction), run slow(1 jump)/fast(2 jumps) with the same direction constraint. If they meet, verify the cycle has ≥ 3 nodes. Then mark the whole explored path as visited (set values to 0) so later starts skip it.",steps:["next(i) = (i + nums[i]) mod n (handle negative mod).","For each start with nums[start] !== 0:","slow = next(start); fast = next(next(start));","Stop if either hits 0 or a node of the opposite sign; continue while slow !== fast.","If slow === fast: count the cycle length; return true if ≥ 3.","Mark all nodes on the start path (same direction) as 0 (visited)."],time:"O(n)",space:"O(1)"},dry:["nums = [2, -1, 1, 2, 2]","Graph: 0→2→3→0 (cycle 0,2,3 length 3, all positive) → 1→0","start=0: slow=2, fast=next(next(0))=3... continue: slow=3, fast=next(3)=0→next(0)=2 → fast=2? trace: fast=next(next(2))=next(3)=0... slow=next(3)=0, fast=next(0)=2? then slow=next(0)=2, fast=next(next(2))=next(3)=0... they meet within {0,2,3}.","Cycle length check: 0→2→3→0 = 3 ≥ 3 ✓","Answer: true"],hints:['Each index has exactly one next — why is that "linked list" structure?',"What two conditions make a walk INVALID before a meeting? (hit 0 / sign flip)","How do you avoid O(n²) re-exploration of the same paths?"],code:{javascript:`function circularArrayLoop(nums) {
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
}`,python:`def circularArrayLoop(nums):
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
    return False`,java:"",cpp:""}}],Ze=[{id:"sw-01",slug:"maximum-sum-subarray-of-size-k",title:"Maximum Sum Subarray of Size K",pattern:"sliding-window",difficulty:"Easy",platform:"GeeksforGeeks",url:"https://www.geeksforgeeks.org/problems/max-sum-subarray-of-size-k5313/1",extra:[],summary:"Given an array and an integer K, find the maximum sum of a contiguous subarray of exactly size K.",asked:"Return the largest sum among all K-length windows of the array.",why:"A fixed-size window slides one step at a time: add the new element, remove the one that fell out. O(n) instead of re-summing each window.",clues:["fixed size K","maximum sum","contiguous"],brute:{idea:"For every starting index, sum the next K elements in a loop.",time:"O(n·K)",space:"O(1)"},optimal:{idea:"Compute the sum of the first K elements, then slide: windowSum += arr[i] - arr[i-K]. Track the maximum once the window is full.",steps:["Sum the first K elements into windowSum.","max = windowSum.","For i from K to n-1: windowSum += arr[i]; windowSum -= arr[i - K].","max = max(max, windowSum).","Return max."],time:"O(n)",space:"O(1)"},dry:["arr = [1, 4, 2, 10, 2, 1, 0, 20], K = 4","Window [1,4,2,10] sum = 17 → max = 17","Slide: +2 -1 → 18","Slide: +1 -4 → 15","Slide: +0 -2 → 13","Slide: +20 -10 → 23 → max = 23","Answer: 23"],hints:["Instead of re-summing K elements, what two elements change between two adjacent windows?","new sum = old sum + entering element - leaving element.","Only update the answer once the window has K elements."],code:{javascript:`function maxSum(arr, k) {
  let windowSum = 0;
  for (let i = 0; i < k; i++) windowSum += arr[i];
  let max = windowSum;
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    max = Math.max(max, windowSum);
  }
  return max;
}`,python:`def maxSum(arr, k):
    window_sum = sum(arr[:k])
    best = window_sum
    for i in range(k, len(arr)):
        window_sum += arr[i] - arr[i - k]
        best = max(best, window_sum)
    return best`,java:"",cpp:""}},{id:"sw-02",slug:"smallest-subarray-with-a-given-sum",title:"Smallest Subarray with a Given Sum",pattern:"sliding-window",difficulty:"Easy",platform:"LeetCode",url:"https://leetcode.com/problems/minimum-size-subarray-sum/",extra:[],summary:"Given an array of positive integers and a target sum S, find the length of the shortest contiguous subarray whose sum is at least S.",asked:"Return the minimum window length with sum ≥ S, or 0 if none exists.",why:"All numbers are positive → extending the window only increases the sum. Grow with the right pointer; once the sum is enough, shrink from the left to find the smallest window.",clues:["positive integers","shortest / smallest subarray","sum at least S"],brute:{idea:"For each start, extend the end until the sum reaches S; track the minimum length.",time:"O(n²)",space:"O(1)"},optimal:{idea:"Two-pointer sliding window: right expands and adds; while the window sum ≥ S, record the size and shrink from the left (subtract). Every valid window is measured exactly when it is tight.",steps:["sum = 0, left = 0, ans = ∞.","For right in 0..n-1: sum += arr[right].","While sum >= S: ans = min(ans, right - left + 1); sum -= arr[left]; left++.","Return ans (or 0 if unchanged)."],time:"O(n)",space:"O(1)"},dry:["arr = [2, 3, 1, 2, 4, 3], S = 7","right=0..2: sum=6 <7","right=3: sum=8 ≥7 → ans=4; shrink: sum=6, left=1","right=4: sum=10 ≥7 → ans=4; shrink: sum=7, left=2; ans=3; shrink: sum=6, left=3","right=5: sum=9 ≥7 → ans=2 (window [4,3]); shrink: sum=6, left=4","Answer: 2"],hints:["Why does the window never need to shrink again after the sum drops below S?",'The answer is updated inside the "while sum >= S" loop, not after.',"Each element enters and leaves the window at most once — that is why it is O(n)."],code:{javascript:`function minSubArrayLen(s, arr) {
  let sum = 0, left = 0;
  let ans = arr.length + 1;
  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];
    while (sum >= s) {
      ans = Math.min(ans, right - left + 1);
      sum -= arr[left++];
    }
  }
  return ans === arr.length + 1 ? 0 : ans;
}`,python:`def minSubArrayLen(s, arr):
    total = left = 0
    ans = len(arr) + 1
    for right, x in enumerate(arr):
        total += x
        while total >= s:
            ans = min(ans, right - left + 1)
            total -= arr[left]
            left += 1
    return 0 if ans == len(arr) + 1 else ans`,java:"",cpp:""}},{id:"sw-03",slug:"longest-substring-with-k-distinct-characters",title:"Longest Substring with K Distinct Characters",pattern:"sliding-window",difficulty:"Medium",platform:"GeeksforGeeks",url:"https://www.geeksforgeeks.org/problems/longest-k-unique-characters-substring0853/1",extra:[],summary:"Find the length of the longest substring of a string that contains at most K distinct characters.",asked:"Return the maximum length of a substring with no more than K distinct characters.",why:'"At most K distinct" is a maintainable property: a frequency map tells you the distinct count as the window grows and shrinks.',clues:["at most K distinct","substring","longest"],brute:{idea:"Check every substring with a Set of its characters.",time:"O(n²) / O(n³)",space:"O(n)"},optimal:{idea:"Expand right, updating the frequency map and distinct count. While distinct > K, shrink from the left. After each valid window, update the best length.",steps:["freq = {}, left = 0, distinct = 0, ans = 0.","For right in 0..n-1: freq[ch]++; if freq[ch] === 1, distinct++.","While distinct > K: decrement freq[s[left]]; if it hits 0, distinct--; left++.","ans = max(ans, right - left + 1)."],time:"O(n)",space:"O(K)"},dry:['s = "eceba", K = 2',"r=0 e: distinct{e}, len 1","r=1 c: {e,c}, len 2","r=2 e: {e,c}, len 3","r=3 b: {e,c,b} = 3 > 2 → shrink: remove e (still 1 e) → still 3 → remove c → distinct 2, left=2",'window "eb" len 2; r=4 a: {e,b,a}=3 → shrink → left moves, "ba" len 2','Answer: 3 ("ece")'],hints:["What state do you need to know the number of distinct characters?","A character stops counting when its frequency drops from 1 to 0.","Update the answer AFTER the while loop (when the window is valid)."],code:{javascript:`function longestKUnique(s, k) {
  if (k === 0) return 0;
  const freq = {};
  let left = 0, distinct = 0, ans = 0;
  for (let right = 0; right < s.length; right++) {
    freq[s[right]] = (freq[s[right]] || 0) + 1;
    if (freq[s[right]] === 1) distinct++;
    while (distinct > k) {
      freq[s[left]]--;
      if (freq[s[left]] === 0) { delete freq[s[left]]; distinct--; }
      left++;
    }
    ans = Math.max(ans, right - left + 1);
  }
  return ans;
}`,python:`def longestKUnique(s, k):
    if k == 0: return 0
    freq = {}
    left = distinct = ans = 0
    for right, ch in enumerate(s):
        freq[ch] = freq.get(ch, 0) + 1
        if freq[ch] == 1: distinct += 1
        while distinct > k:
            freq[s[left]] -= 1
            if freq[s[left]] == 0:
                del freq[s[left]]
                distinct -= 1
            left += 1
        ans = max(ans, right - left + 1)
    return ans`,java:"",cpp:""}},{id:"sw-04",slug:"fruits-into-baskets",title:"Fruits into Baskets",pattern:"sliding-window",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/fruit-into-baskets/",extra:[],summary:"A row of trees gives fruits in order. You have two baskets, each holding a single type. Find the maximum number of fruits you can collect with two consecutive picks per fruit, without breaking consecutiveness.",asked:"Return the length of the longest contiguous segment containing at most 2 distinct fruit types.",why:'Two baskets = at most 2 distinct types in a window. Exactly the "at most K distinct" sliding window with K = 2.',clues:["two baskets","two types only","consecutive segment","longest"],brute:{idea:"Every segment, count distinct types, keep the best valid length.",time:"O(n²)",space:"O(1)"},optimal:{idea:"Frequency map over the window. Expand right; while distinct types > 2, shrink from the left. Track the maximum window size.",steps:["basket = {}, left = 0, types = 0, ans = 0.","Add fruits[right]; if new type, types++.","While types > 2: remove fruits[left]; if count 0, types--; left++.","ans = max(ans, right - left + 1)."],time:"O(n)",space:"O(1)"},dry:["fruits = [1, 2, 1]","r=0: {1:1} len 1; r=1: {1,2} len 2; r=2: {1:2,2:1} len 3","Answer: 3","fruits = [3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]: window grows [3,3,3,1] (2 types) → add 2 → 3 types → shrink to [1,2,1,1,2] (len 5) → 3 arrives → [1,2,1,1,2,3] len 6 → 4 breaks → shrink...","Answer: 6"],hints:['Rephrase the story: "longest subarray with at most 2 distinct values".',"The moment a third type enters, only shrinking can fix the window.",'Count "types", not total fruits, in the condition.'],code:{javascript:`function totalFruits(fruits) {
  const basket = {};
  let left = 0, types = 0, ans = 0;
  for (let right = 0; right < fruits.length; right++) {
    if (!basket[fruits[right]]) types++;
    basket[fruits[right]] = (basket[fruits[right]] || 0) + 1;
    while (types > 2) {
      basket[fruits[left]]--;
      if (basket[fruits[left]] === 0) { delete basket[fruits[left]]; types--; }
      left++;
    }
    ans = Math.max(ans, right - left + 1);
  }
  return ans;
}`,python:`def totalFruits(fruits):
    basket = {}
    left = types = ans = 0
    for right, f in enumerate(fruits):
        if f not in basket: types += 1
        basket[f] = basket.get(f, 0) + 1
        while types > 2:
            basket[fruits[left]] -= 1
            if basket[fruits[left]] == 0:
                del basket[fruits[left]]
                types -= 1
            left += 1
        ans = max(ans, right - left + 1)
    return ans`,java:"",cpp:""}},{id:"sw-05",slug:"no-repeat-substring",title:"No-repeat Substring",pattern:"sliding-window",difficulty:"Hard",platform:"LeetCode",url:"https://leetcode.com/problems/longest-substring-without-repeating-characters/",extra:[],summary:"Given a string, find the length of the longest substring that contains no repeating characters.",asked:"Return the maximum length of a substring with all distinct characters.",why:"The window must hold only unique characters. When a repeat appears, jump the left pointer to just after the previous occurrence of that character (a position map makes the jump O(1)).",clues:["no repeating characters","longest substring","unique chars"],brute:{idea:"For each start, extend while characters stay unique.",time:"O(n²)",space:"O(n)"},optimal:{idea:"Track the last index of each character. Expand right; if s[right] was seen at index ≥ left, set left = lastIndex + 1. Update the best length.",steps:["last = map of char → last seen index; left = 0; ans = 0.","For right in 0..n-1:","If last has s[right] and last[s[right]] >= left: left = last[s[right]] + 1.","last[s[right]] = right.","ans = max(ans, right - left + 1)."],time:"O(n)",space:"O(min(n, charset))"},dry:['s = "abba"',"r=0 a: window [a] len 1; last{a:0}","r=1 b: [ab] len 2; last{a:0,b:1}","r=2 b: b seen at 1 ≥ left → left=2; window [b] len 1; last{b:2}","r=3 a: a seen at 0 < left(2) → no jump; window [ba] len 2","Answer: 2"],hints:["When a duplicate enters, how far must the left edge move?","The map stores the LAST seen position — but only jump if it is inside the current window.",'Why is "last >= left" the correct guard (not just "last exists")?'],code:{javascript:`function lengthOfLongestSubstring(s) {
  const last = new Map();
  let left = 0, ans = 0;
  for (let right = 0; right < s.length; right++) {
    const c = s[right];
    if (last.has(c) && last.get(c) >= left) left = last.get(c) + 1;
    last.set(c, right);
    ans = Math.max(ans, right - left + 1);
  }
  return ans;
}`,python:`def lengthOfLongestSubstring(s):
    last = {}
    left = ans = 0
    for right, c in enumerate(s):
        if c in last and last[c] >= left:
            left = last[c] + 1
        last[c] = right
        ans = max(ans, right - left + 1)
    return ans`,java:"",cpp:""}},{id:"sw-06",slug:"longest-substring-with-same-letters-after-replacement",title:"Longest Substring with Same Letters after Replacement",pattern:"sliding-window",difficulty:"Hard",platform:"LeetCode",url:"https://leetcode.com/problems/longest-repeating-character-replacement/",extra:[],summary:"You may replace at most k characters to make any of them the same. Find the length of the longest substring that becomes uniform after at most k replacements.",asked:"Return the longest window where (window length - max frequency of a single char in it) ≤ k.",why:'A window can be made uniform iff the number of "non-majority" characters ≤ k. That is a maintainable window property — classic sliding window with a frequency map.',clues:["replace at most k","all same character","longest window"],brute:{idea:"For each start, try extending and counting replacements needed.",time:"O(n²)",space:"O(1)"},optimal:{idea:"Expand right, tracking frequencies and maxCount (max frequency seen so far). If windowSize - maxCount > k, shrink from the left. Note: maxCount is intentionally NOT decremented — the answer never decreases, so this stays correct.",steps:["freq = {}, left = 0, maxCount = 0, ans = 0.","Add s[right]; maxCount = max(maxCount, freq[s[right]]).","If (right - left + 1 - maxCount) > k: freq[s[left]]--; left++.","ans = max(ans, right - left + 1)."],time:"O(n)",space:"O(1)"},dry:['s = "ABAB", k = 2',"r=0 A: {A:1}, size1-1=0 ≤2 → ans 1","r=1 B: {A:1,B:1}, max=1, 2-1=1 ≤2 → ans 2","r=2 A: {A:2,B:1}, max=2, 3-2=1 ≤2 → ans 3","r=3 B: {A:2,B:2}, max=2, 4-2=2 ≤2 → ans 4","Answer: 4"],hints:["How many replacements does a window need to become all one character?","The best target character is the one already most frequent in the window.","Why is it safe to keep maxCount only growing even when we shrink?"],code:{javascript:`function characterReplacement(s, k) {
  const freq = {};
  let left = 0, maxCount = 0, ans = 0;
  for (let right = 0; right < s.length; right++) {
    freq[s[right]] = (freq[s[right]] || 0) + 1;
    maxCount = Math.max(maxCount, freq[s[right]]);
    if (right - left + 1 - maxCount > k) {
      freq[s[left]]--;
      left++;
    }
    ans = Math.max(ans, right - left + 1);
  }
  return ans;
}`,python:`def characterReplacement(s, k):
    freq = {}
    left = max_count = ans = 0
    for right, c in enumerate(s):
        freq[c] = freq.get(c, 0) + 1
        max_count = max(max_count, freq[c])
        if right - left + 1 - max_count > k:
            freq[s[left]] -= 1
            left += 1
        ans = max(ans, right - left + 1)
    return ans`,java:"",cpp:""}},{id:"sw-07",slug:"longest-subarray-with-ones-after-replacement",title:"Longest Subarray with Ones after Replacement",pattern:"sliding-window",difficulty:"Hard",platform:"LeetCode",url:"https://leetcode.com/problems/max-consecutive-ones-iii/",extra:[],summary:"Given a binary array, you can flip at most k zeros to ones. Return the length of the longest contiguous subarray of all ones after flips.",asked:"Maximum window size containing at most k zeros (flippable).",why:'"At most k zeros in the window" is exactly a sliding-window constraint: zeros are the "violations" budget.',clues:["binary array","flip at most k zeros","longest all-ones window"],brute:{idea:"Every subarray, count zeros, keep the best with ≤ k.",time:"O(n²)",space:"O(1)"},optimal:{idea:"Count zeros inside the window. Expand right; while zeros > k, shrink from the left (decrementing the count when a zero leaves). Track the best size.",steps:["zeros = 0, left = 0, ans = 0.","For right: if nums[right] === 0, zeros++.","While zeros > k: if nums[left] === 0, zeros--; left++.","ans = max(ans, right - left + 1)."],time:"O(n)",space:"O(1)"},dry:["nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1], k = 2","r=0..2: zeros=0, len 3","r=3,4: zeros=2, len 5","r=5: zeros=3 >2 → shrink: nums[0]=1, left=1; still 3 → left=2; still 3 → left=3 (zero removed) → zeros=2","len = 3 (window [0,0,1]); r=6..9: zeros=2, len grows to 6? window [0,0,1,1,1,1] len 6? retrace: left=3, r=9 → size 7-... = 9-3+1 = 7? window [0,0,1,1,1,1,1] = 7? no: left=3 means window from index 3: [0,0,1,1,1,1,1]? indices 3..9 = 7 elements, zeros=2 ✓","Answer: 6 (indices 4..9: [0,0,1,1,1,1]) — both traces agree max is 6"],hints:['Treat zeros as your limited "flip budget".',"Shrink only while the budget is exceeded.","The window size formula is right - left + 1."],code:{javascript:`function longestOnes(nums, k) {
  let left = 0, zeros = 0, ans = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) zeros++;
    while (zeros > k) {
      if (nums[left] === 0) zeros--;
      left++;
    }
    ans = Math.max(ans, right - left + 1);
  }
  return ans;
}`,python:`def longestOnes(nums, k):
    left = zeros = ans = 0
    for right, x in enumerate(nums):
        if x == 0: zeros += 1
        while zeros > k:
            if nums[left] == 0: zeros -= 1
            left += 1
        ans = max(ans, right - left + 1)
    return ans`,java:"",cpp:""}},{id:"sw-08",slug:"minimum-size-subarray-sum",title:"Minimum Size Subarray Sum",pattern:"sliding-window",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/minimum-size-subarray-sum/",extra:[],summary:"Find the minimal length of a contiguous subarray whose sum is at least target, in an array of positive integers.",asked:"Return the shortest window with sum ≥ target, or 0 if impossible.",why:"Same engine as the smallest-subarray-with-given-sum problem: positive numbers make the sum monotone with window size, so grow/shrink works.",clues:["positive integers","minimal length","sum at least target"],brute:{idea:"Two loops: every start, extend end, test the sum.",time:"O(n²)",space:"O(1)"},optimal:{idea:"Right pointer adds; while the window sum ≥ target, record the length and remove the left element. Answer is the minimum recorded length.",steps:["total = 0, left = 0, best = n + 1.","For right: total += arr[right].","While total >= target: best = min(best, right - left + 1); total -= arr[left]; left++.","Return best (0 if untouched)."],time:"O(n)",space:"O(1)"},dry:["arr = [2, 3, 1, 2, 4, 3], target = 7","grow to right=3: sum 8 → size 4, shrink → sum 6","right=4: sum 10 → size 4 → shrink sum 7 → size 3 → shrink sum 6","right=5: sum 9 → size 2 [4,3] → shrink sum 6","Answer: 2"],hints:['This is the same template as "Smallest Subarray with a Given Sum".',"Only update the answer while the window is valid.","Shrinking happens in a while loop — a window can be valid in many sizes."],code:{javascript:`function minSubArrayLen(target, arr) {
  let total = 0, left = 0, best = arr.length + 1;
  for (let right = 0; right < arr.length; right++) {
    total += arr[right];
    while (total >= target) {
      best = Math.min(best, right - left + 1);
      total -= arr[left++];
    }
  }
  return best === arr.length + 1 ? 0 : best;
}`,python:`def minSubArrayLen(target, arr):
    total = left = 0
    best = len(arr) + 1
    for right, x in enumerate(arr):
        total += x
        while total >= target:
            best = min(best, right - left + 1)
            total -= arr[left]
            left += 1
    return 0 if best == len(arr) + 1 else best`,java:"",cpp:""}},{id:"sw-09",slug:"minimum-window-substring",title:"Minimum Window Substring",pattern:"sliding-window",difficulty:"Hard",platform:"LeetCode",url:"https://leetcode.com/problems/minimum-window-substring/",extra:[],summary:"Given strings s and t, find the minimum-window substring of s that contains every character of t (including duplicates).",asked:'Return the smallest substring of s covering all of t, or "" if none exists.',why:'A "need" frequency map of t + a window map of s: the window is valid when every required character has enough count. Grow until valid, then shrink to the minimum.',clues:["contains all characters of t","minimum window","substring"],brute:{idea:"Every substring, check coverage against t.",time:"O(n²·m)",space:"O(n)"},optimal:{idea:"need = freq of t; have = number of distinct required chars fully satisfied. Expand right (consume from need); while have == requiredDistinct, record the window and shrink from the left (giving characters back).",steps:["need = counts of t; required = number of distinct chars in t; have = 0.","For right: if s[right] is in need: need[c]--; if need[c] === 0, have++.","While have === required: record (left, right); consume s[left] leftwards: if need[lc] === 0, have--; need[lc]++; left++.",'Return the smallest recorded slice (or "").'],time:"O(n + m)",space:"O(1)"},dry:['s = "ADOBECODEBANC", t = "ABC"',"need {A:1,B:1,C:1}, required = 3","right advances: A(1) D O B(2) E C(3) → have = 3 at right = 5",'Shrink: window [0..5] "ADOBEC" len 6; drop A → have 2; left = 1 stop','Continue: D E B(2) A(3) C(3) at right = 12 → shrink: "BANC" len 4 (left 9); drop B → have 2','Answer: "BANC" (length 4)'],hints:['Track "how many distinct required characters are fully covered", not just a boolean.',"Decrementing need[c] to 0 means that character requirement is met; going below 0 is extra (and reversible when shrinking).","Shrink while the window is STILL valid — that is where the minimum is found."],code:{javascript:`function minWindow(s, t) {
  const need = {};
  for (const c of t) need[c] = (need[c] || 0) + 1;
  const required = Object.keys(need).length;
  let have = 0, left = 0;
  let best = [0, Infinity];
  for (let right = 0; right < s.length; right++) {
    const c = s[right];
    if (need[c] !== undefined) {
      need[c]--;
      if (need[c] === 0) have++;
    }
    while (have === required) {
      if (right - left + 1 < best[1] - best[0]) best = [left, right + 1];
      const lc = s[left++];
      if (need[lc] !== undefined) {
        if (need[lc] === 0) have--;
        need[lc]++;
      }
    }
  }
  return best[1] === Infinity ? '' : s.slice(best[0], best[1]);
}`,python:`def minWindow(s, t):
    need = {}
    for c in t:
        need[c] = need.get(c, 0) + 1
    required = len(need)
    have = left = 0
    best = (0, float('inf'))
    for right, c in enumerate(s):
        if c in need:
            need[c] -= 1
            if need[c] == 0: have += 1
        while have == required:
            if right - left + 1 < best[1] - best[0]:
                best = (left, right + 1)
            lc = s[left]
            left += 1
            if lc in need:
                if need[lc] == 0: have -= 1
                need[lc] += 1
    return '' if best[1] == float('inf') else s[best[0]:best[1]]`,java:"",cpp:""}},{id:"sw-10",slug:"permutation-in-a-string",title:"Permutation in a String",pattern:"sliding-window",difficulty:"Hard",platform:"LeetCode",url:"https://leetcode.com/problems/permutation-in-string/",extra:[],summary:"Given strings s1 and s2, determine if s2 contains a permutation of s1 as a substring.",asked:"Return true if any window of s2 with the same length as s1 has exactly the same character counts as s1.",why:"A permutation is defined by its frequency signature. A fixed-size window (|s1|) with a rolling frequency comparison decides it in one pass.",clues:["permutation of s1 in s2","fixed window length","same letters same counts"],brute:{idea:"Sort s1; for every window of s2 of length |s1|, sort it and compare.",time:"O(n·m log m)",space:"O(m)"},optimal:{idea:"Keep frequency arrays for s1 (need) and the current window (win). Compare them each step; slide the window by adding the entering char and removing the leaving char.",steps:["If |s1| > |s2| → false.","need[26] from s1; win[26] from the first |s1| chars of s2.","If arrays equal → true.","Slide: r from |s1| to |s2|-1: win[s2[r]]++; win[s2[r - |s1|]]--; compare.","Return false if no match."],time:"O(n)",space:"O(1)"},dry:['s1 = "ab", s2 = "eidbaooo"','need {a:1,b:1}; first window "ei" win {e:1,i:1} → no match','slide "id" → no; "idb"→ wait window size 2: "id", "db", "ba", "ao", "oo", "o"','"db": win {d:1,b:1} no; "ba": win {b:1,a:1} ✓ match',"Answer: true"],hints:["What is invariant under permutation? (the multiset of characters)","Window size is FIXED at |s1| — slide, don't grow/shrink.",'Use a 26-length count array for O(1) comparison (or keep a "matches" counter).'],code:{javascript:`function checkInclusion(s1, s2) {
  const n = s1.length, m = s2.length;
  if (n > m) return false;
  const need = new Array(26).fill(0);
  const win = new Array(26).fill(0);
  for (let i = 0; i < n; i++) {
    need[s1.charCodeAt(i) - 97]++;
    win[s2.charCodeAt(i) - 97]++;
  }
  const same = () => need.every((v, i) => v === win[i]);
  if (same()) return true;
  for (let r = n; r < m; r++) {
    win[s2.charCodeAt(r) - 97]++;
    win[s2.charCodeAt(r - n) - 97]--;
    if (same()) return true;
  }
  return false;
}`,python:`def checkInclusion(s1, s2):
    n, m = len(s1), len(s2)
    if n > m: return False
    need = [0] * 26
    win = [0] * 26
    for i in range(n):
        need[ord(s1[i]) - 97] += 1
        win[ord(s2[i]) - 97] += 1
    if need == win: return True
    for r in range(n, m):
        win[ord(s2[r]) - 97] += 1
        win[ord(s2[r - n]) - 97] -= 1
        if need == win: return True
    return False`,java:"",cpp:""}},{id:"sw-11",slug:"string-anagrams",title:"String Anagrams",pattern:"sliding-window",difficulty:"Hard",platform:"LeetCode",url:"https://leetcode.com/problems/find-all-anagrams-in-a-string/",extra:[],summary:"Given strings s and p, find the start indices of all anagrams of p in s.",asked:"Return every index i such that s[i .. i + |p| - 1] is a permutation of p.",why:'Same fixed-window frequency engine as "Permutation in a String", but collect every matching index instead of stopping at the first.',clues:["all anagrams of p in s","start indices","fixed window"],brute:{idea:"Every window of length |p|: sort and compare with sorted p.",time:"O(n·m log m)",space:"O(m)"},optimal:{idea:"Roll a frequency window of size |p| over s; whenever the window counts equal p's counts, record the start index.",steps:["If |p| > |s| → return [].","need from p; win from the first |p| chars of s.","If equal → push 0.","Slide r from |p| to |s|-1: add s[r], remove s[r - |p|]; if equal → push r - |p| + 1.","Return the list."],time:"O(n)",space:"O(1)"},dry:['s = "cbaebabacd", p = "abc"',"need {a:1,b:1,c:1}",'window "cba" ✓ → 0','"bca" ✓ → 1','"bab" ✗, "aba" ✗, "bac" ✓ → 5','"acd" ✗',"Answer: [0, 1, 5]"],hints:["This is checkInclusion that never stops early.","The window size never changes — only its content rolls.","Record r - |p| + 1 when the window ending at r matches."],code:{javascript:`function findAnagrams(s, p) {
  const res = [];
  const n = p.length, m = s.length;
  if (n > m) return res;
  const need = new Array(26).fill(0);
  const win = new Array(26).fill(0);
  for (let i = 0; i < n; i++) {
    need[p.charCodeAt(i) - 97]++;
    win[s.charCodeAt(i) - 97]++;
  }
  const same = () => need.every((v, i) => v === win[i]);
  if (same()) res.push(0);
  for (let r = n; r < m; r++) {
    win[s.charCodeAt(r) - 97]++;
    win[s.charCodeAt(r - n) - 97]--;
    if (same()) res.push(r - n + 1);
  }
  return res;
}`,python:`def findAnagrams(s, p):
    res = []
    n, m = len(p), len(s)
    if n > m: return res
    need = [0] * 26
    win = [0] * 26
    for i in range(n):
        need[ord(p[i]) - 97] += 1
        win[ord(s[i]) - 97] += 1
    if need == win: res.append(0)
    for r in range(n, m):
        win[ord(s[r]) - 97] += 1
        win[ord(s[r - n]) - 97] -= 1
        if need == win: res.append(r - n + 1)
    return res`,java:"",cpp:""}},{id:"sw-12",slug:"words-concatenation",title:"Words Concatenation",pattern:"sliding-window",difficulty:"Hard",platform:"LeetCode",url:"https://leetcode.com/problems/substring-with-concatenation-of-all-words/",extra:[],summary:"Given a string s and an array of words of equal length, find all start indices of substrings that are a concatenation of every word exactly once, in any order, with no extra characters.",asked:"Return indices i where s[i .. i + L·W - 1] (L = word length, W = word count) is a permutation of all words joined together.",why:"A fixed-size window (L·W) again — but inside, the window must split into valid word-sized chunks. Slide in word-size steps from each of the first L offsets, maintaining word counts.",clues:["concatenation of all words","equal word lengths","start indices"],brute:{idea:"For each index, extract the big window, split into words, compare with a multiset of all words.",time:"O(n · W · L)",space:"O(W)"},optimal:{idea:'For each offset 0..L-1, sweep the string in L-steps treating it as a stream of words, keeping a "have" multiset and count of words included. When a word exceeds its need, shrink from the left; when all W words fit, record the start.',steps:["If W·L > |s| → return [].","need = multiset of words.","For offset in 0..L-1: have = {}, count = 0, left = offset.","For r = offset; r + L <= |s|; r += L: word = s.slice(r, r+L).","If word in need: add; if have[word] > need[word], shrink left until it fits; if count === W, record left, then remove the leftmost word and continue.","Else: reset have, count = 0, left = r + L."],time:"O(n · L)",space:"O(W)"},dry:['s = "barfoothefoobarman", words = ["foo", "bar"] (L=3, W=2)','offset 0: words stream: bar, foo → both fit → record 0; then "the" resets; foo, bar → record 9',"offset 1: arf, oth, hef, oob, arm... no full pair","offset 2: rfo, oth, efo, oba... no full pair","Answer: [0, 9]"],hints:["Why do you need L separate sweeps (one per offset)?","A window is valid only if it breaks into exact word chunks — so slide in L-steps.",'When a word is "too many", shrink until the first excess copy of that word leaves the window.'],code:{javascript:`function findSubstring(s, words) {
  const res = [];
  if (!words.length) return res;
  const L = words[0].length, W = words.length, total = L * W, m = s.length;
  if (total > m) return res;
  const need = {};
  for (const w of words) need[w] = (need[w] || 0) + 1;

  for (let offset = 0; offset < L && offset + total <= m; offset++) {
    const have = {};
    let count = 0, left = offset;
    for (let r = offset; r + L <= m; r += L) {
      const word = s.slice(r, r + L);
      if (need[word] !== undefined) {
        have[word] = (have[word] || 0) + 1;
        count++;
        if (have[word] > need[word]) {
          while (left < r) {
            const w2 = s.slice(left, left + L);
            have[w2]--;
            if (have[w2] < need[w2]) break;
            left += L;
          }
        }
        if (count === W) {
          res.push(left);
          const w3 = s.slice(left, left + L);
          have[w3]--;
          count--;
          left += L;
        }
      } else {
        have = {};
        count = 0;
        left = r + L;
      }
    }
  }
  return res;
}`,python:`def findSubstring(s, words):
    res = []
    if not words: return res
    L = len(words[0])
    W = len(words)
    total = L * W
    m = len(s)
    if total > m: return res
    need = {}
    for w in words:
        need[w] = need.get(w, 0) + 1
    for offset in range(min(L, m - total + 1)):
        have = {}
        count = 0
        left = offset
        r = offset
        while r + L <= m:
            word = s[r:r + L]
            if word in need:
                have[word] = have.get(word, 0) + 1
                count += 1
                if have[word] > need[word]:
                    while left < r:
                        w2 = s[left:left + L]
                        have[w2] -= 1
                        if have[w2] < need[w2]: break
                        left += L
                if count == W:
                    res.append(left)
                    w3 = s[left:left + L]
                    have[w3] -= 1
                    count -= 1
                    left += L
            else:
                have = {}
                count = 0
                left = r + L
            r += L
    return res`,java:"",cpp:""}}],Je=[{id:"kd-01",slug:"maximum-subarray-sum",title:"Maximum Subarray Sum",pattern:"kadane",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/maximum-subarray/",extra:[],summary:"Given an integer array (with at least one number), find the contiguous subarray with the largest sum and return that sum.",asked:"Return the maximum sum of any non-empty contiguous subarray.",why:"This is the classic Kadane problem: the best subarray ending at i either extends the best ending at i-1 or restarts at i.",clues:["contiguous subarray","maximum sum","one pass"],brute:{idea:"Check every (start, end) pair and sum the slice.",time:"O(n²)",space:"O(1)"},optimal:{idea:"endHere = best subarray sum that must end at the current index. endHere = max(x, endHere + x). Keep the global best across all positions.",steps:["endHere = nums[0], best = nums[0].","For i from 1 to n-1:","endHere = max(nums[i], endHere + nums[i]) — restart if extending hurts.","best = max(best, endHere).","Return best."],time:"O(n)",space:"O(1)"},dry:["nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]","endHere=-2, best=-2","x=1: endHere=max(1,-1)=1, best=1","x=-3: endHere=-2, best=1","x=4: endHere=4, best=4","x=-1: endHere=3; x=2: endHere=5, best=5; x=1: endHere=6, best=6","x=-5: endHere=1; x=4: endHere=5","Answer: 6 (subarray [4,-1,2,1])"],hints:['Think of "best sum of a subarray ending HERE" — what are the two options?',"If endHere + x < x, the previous part is a liability — drop it.","An all-negative array must return the largest single element — does your formula handle that?"],code:{javascript:`function maxSubArray(nums) {
  let endHere = nums[0], best = nums[0];
  for (let i = 1; i < nums.length; i++) {
    endHere = Math.max(nums[i], endHere + nums[i]);
    best = Math.max(best, endHere);
  }
  return best;
}`,python:`def maxSubArray(nums):
    end_here = best = nums[0]
    for x in nums[1:]:
        end_here = max(x, end_here + x)
        best = max(best, end_here)
    return best`,java:`class Solution {
    public int maxSubArray(int[] nums) {
        int endHere = nums[0], best = nums[0];
        for (int i = 1; i < nums.length; i++) {
            endHere = Math.max(nums[i], endHere + nums[i]);
            best = Math.max(best, endHere);
        }
        return best;
    }
}`,cpp:`int maxSubArray(vector<int>& nums) {
    int endHere = nums[0], best = nums[0];
    for (int i = 1; i < (int)nums.size(); i++) {
        endHere = max(nums[i], endHere + nums[i]);
        best = max(best, endHere);
    }
    return best;
}`}},{id:"kd-02",slug:"minimum-subarray-sum",title:"Minimum Subarray Sum",pattern:"kadane",difficulty:"Medium",platform:"GeeksforGeeks",url:"https://www.geeksforgeeks.org/problems/smallest-sum-contiguous-subarray/1",extra:[],summary:"Given an array of positive and negative integers, find the smallest (most negative) sum of a contiguous subarray.",asked:"Return the minimum sum over all non-empty contiguous subarrays.",why:"Kadane runs in reverse: now we track the minimum ending here, restarting when extending makes things better.",clues:["contiguous subarray","minimum sum","negative numbers"],brute:{idea:"All (start, end) pairs with running sums.",time:"O(n²)",space:"O(1)"},optimal:{idea:"Mirror of max Kadane: endHere = min(x, endHere + x), keep the global minimum.",steps:["endHere = arr[0], best = arr[0].","For each next x: endHere = min(x, endHere + x).","best = min(best, endHere).","Return best."],time:"O(n)",space:"O(1)"},dry:["arr = [3, -4, 2, -3, -1, 7, -5]","endHere=3, best=3","x=-4: endHere=-4, best=-4","x=2: endHere=-2","x=-3: endHere=-5, best=-5","x=-1: endHere=-6, best=-6","x=7: endHere=1; x=-5: endHere=-4","Answer: -6 (subarray [-4, 2, -3, -1])"],hints:["Same two choices, flipped: extend or restart.","Now you restart when endHere + x > x (the previous part helps).","Track the minimum of endHere across positions."],code:{javascript:`function minSubArraySum(arr) {
  let endHere = arr[0], best = arr[0];
  for (let i = 1; i < arr.length; i++) {
    endHere = Math.min(arr[i], endHere + arr[i]);
    best = Math.min(best, endHere);
  }
  return best;
}`,python:`def minSubArraySum(arr):
    end_here = best = arr[0]
    for x in arr[1:]:
        end_here = min(x, end_here + x)
        best = min(best, end_here)
    return best`,java:"",cpp:""}},{id:"kd-03",slug:"maximum-product-subarray",title:"Maximum Product Subarray",pattern:"kadane",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/maximum-product-subarray/",extra:[],summary:"Find the contiguous subarray whose product is the largest, and return that product.",asked:"Return the maximum product of any non-empty contiguous subarray.",why:"Kadane for product: because negatives flip signs, a currently small (negative) product can become the best when multiplied by another negative. Track both the max and min ending here.",clues:["product instead of sum","negatives flip signs","contiguous subarray"],brute:{idea:"All (start, end) pairs with running products.",time:"O(n²)",space:"O(1)"},optimal:{idea:"Keep maxSoFar and minSoFar (best/worst product ending at i). At each x: newMax = max(x, x*maxSoFar, x*minSoFar); newMin = min(x, x*maxSoFar, x*minSoFar). Answer is the global maxSoFar.",steps:["maxSoFar = minSoFar = best = nums[0].","For each next x:","candidates = { x, x * maxSoFar, x * minSoFar }.","maxSoFar = max(candidates); minSoFar = min(candidates).","best = max(best, maxSoFar)."],time:"O(n)",space:"O(1)"},dry:["nums = [2, 3, -2, 4]","start: max=2, min=2, best=2","x=3: max=max(3,6,6)=6, min=min(3,6,6)=3, best=6","x=-2: max=max(-2,-12,-6)=-2, min=min(-2,-12,-6)=-12, best=6","x=4: max=max(4,-8,-48)=4, min=min(4,-8,-48)=-48, best=6","Answer: 6 ([2,3])"],hints:["Why is one running value not enough here? (sign flips)","A very negative product times a negative becomes very positive.","Always consider three candidates: start fresh, extend max, extend min."],code:{javascript:`function maxProduct(nums) {
  let maxSoFar = nums[0], minSoFar = nums[0], best = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const x = nums[i];
    const c1 = x, c2 = x * maxSoFar, c3 = x * minSoFar;
    maxSoFar = Math.max(c1, c2, c3);
    minSoFar = Math.min(c1, c2, c3);
    best = Math.max(best, maxSoFar);
  }
  return best;
}`,python:`def maxProduct(nums):
    max_so_far = min_so_far = best = nums[0]
    for x in nums[1:]:
        c1, c2, c3 = x, x * max_so_far, x * min_so_far
        max_so_far = max(c1, c2, c3)
        min_so_far = min(c1, c2, c3)
        best = max(best, max_so_far)
    return best`,java:"",cpp:""}},{id:"kd-04",slug:"maximum-subarray-sum-with-one-deletion",title:"Maximum Subarray Sum with One Deletion",pattern:"kadane",difficulty:"Hard",platform:"LeetCode",url:"https://leetcode.com/problems/maximum-subarray-sum-with-one-deletion/",extra:[],summary:"Return the maximum sum of a non-empty subarray where you may delete at most one element (the subarray must be non-empty after deletion).",asked:"Best Kadane answer where one element inside the chosen subarray may be dropped.",why:"Two Kadane tracks: one where no deletion has been used yet (endKeep) and one where the deletion already happened (endDel). Each step decides delete or keep.",clues:["delete at most one element","subarray sum","Kadane variant"],brute:{idea:"Try every deletion position and run max-subarray on the two sides + crossing cases.",time:"O(n²)",space:"O(1)"},optimal:{idea:"DP with two states per index: endKeep = best ending at i without deletion; endDel = best ending at i with deletion used. Transition: endDel_new = max(endKeep (delete i), endDel + x (keep i)); endKeep_new = max(x, endKeep + x).",steps:["endKeep = nums[0]; endDel = -∞; best = nums[0].","For i from 1 to n-1:","newEndDel = max(endKeep, endDel + nums[i]) — delete nums[i] or keep it after an earlier deletion.","endKeep = max(nums[i], endKeep + nums[i]).","endDel = newEndDel; best = max(best, endKeep, endDel).","Return best."],time:"O(n)",space:"O(1)"},dry:["nums = [1, -2, 3, 5]","endKeep=1, endDel=-∞, best=1","i=1 (-2): endDel=max(1, -∞)=1 (delete -2); endKeep=max(-2,-1)=-1; best=1","i=2 (3): endDel=max(-1, 1+3)=4; endKeep=3; best=4","i=3 (5): endDel=max(3, 4+5)=9; endKeep=8; best=9","Answer: 9 ([1,-2,3,5] with -2 deleted → 1+3+5)"],hints:["Model it as DP: state = has deletion been used yet?","When processing x, the two choices are: delete x, or keep x (if you already deleted).","endDel can only start from endKeep — deletion happens at some element."],code:{javascript:`function maximumSum(nums) {
  const n = nums.length;
  let endKeep = nums[0]; // best ending here, no deletion used
  let endDel = -Infinity; // best ending here, deletion used
  let best = nums[0];
  for (let i = 1; i < n; i++) {
    const x = nums[i];
    const newEndDel = Math.max(endKeep, endDel + x);
    endKeep = Math.max(x, endKeep + x);
    endDel = newEndDel;
    best = Math.max(best, endKeep, endDel);
  }
  return best;
}`,python:`def maximumSum(nums):
    n = len(nums)
    end_keep = nums[0]
    end_del = float('-inf')
    best = nums[0]
    for i in range(1, n):
        x = nums[i]
        new_end_del = max(end_keep, end_del + x)
        end_keep = max(x, end_keep + x)
        end_del = new_end_del
        best = max(best, end_keep, end_del)
    return best`,java:"",cpp:""}},{id:"kd-05",slug:"maximum-absolute-sum-of-any-subarray",title:"Maximum Absolute Sum of Any Subarray",pattern:"kadane",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/",extra:[],summary:"Return the maximum absolute sum of any (possibly empty) subarray. Absolute sum = |sum of elements|.",asked:"Maximize |sum(subarray)| over all subarrays — so the answer is the larger of the max subarray sum and the absolute value of the min subarray sum.",why:"|x| is large when x is very positive OR very negative. Run Kadane twice: once for the maximum, once for the minimum subarray sum.",clues:["absolute sum","empty subarray allowed","max of + and -"],brute:{idea:"All subarray sums, take the max of absolute values.",time:"O(n²)",space:"O(1)"},optimal:{idea:"answer = max(maxKadane(nums), -minKadane(nums)). One pass maintaining both the max-ending and min-ending states.",steps:["Track endMax and endMin simultaneously.","endMax = max(x, endMax + x); bestMax = max(bestMax, endMax).","endMin = min(x, endMin + x); bestMin = min(bestMin, endMin).","Return max(bestMax, -bestMin)."],time:"O(n)",space:"O(1)"},dry:["nums = [2, 3, -3, -2, 4]","Max Kadane: [2,3] or [4] or [2,3,-3,-2,4]=4 → bestMax = 5","Min Kadane: [-3,-2] = -5 → -bestMin = 5","Answer: max(5, 5) = 5"],hints:["A huge absolute value comes from either a huge sum or a huge negative sum.","Run max-Kadane and min-Kadane in a single pass.","The empty subarray (sum 0) is allowed — it never hurts the maximum."],code:{javascript:`function maxAbsoluteSum(nums) {
  let endMax = nums[0], bestMax = nums[0];
  let endMin = nums[0], bestMin = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const x = nums[i];
    endMax = Math.max(x, endMax + x);
    bestMax = Math.max(bestMax, endMax);
    endMin = Math.min(x, endMin + x);
    bestMin = Math.min(bestMin, endMin);
  }
  return Math.max(bestMax, -bestMin);
}`,python:`def maxAbsoluteSum(nums):
    end_max = best_max = nums[0]
    end_min = best_min = nums[0]
    for x in nums[1:]:
        end_max = max(x, end_max + x)
        best_max = max(best_max, end_max)
        end_min = min(x, end_min + x)
        best_min = min(best_min, end_min)
    return max(best_max, -best_min)`,java:"",cpp:""}},{id:"kd-06",slug:"maximum-sum-circular-subarray",title:"Maximum Sum Circular Subarray",pattern:"kadane",difficulty:"Hard",platform:"LeetCode",url:"https://leetcode.com/problems/maximum-sum-circular-subarray/",extra:[],summary:"The array is circular (index i connects to (i+1) mod n). Find the maximum possible sum of a non-empty subarray.",asked:"A subarray may wrap around the end. Return the best sum (non-empty subarray required).",why:"A circular max subarray either does not wrap (ordinary Kadane) or wraps, which equals total - (minimum middle subarray). So: max(maxKadane, total - minKadane), with an all-negative guard.",clues:["circular array","wrap around allowed","max subarray"],brute:{idea:"Duplicate the array and restrict window length to n; check all windows.",time:"O(n²)",space:"O(n)"},optimal:{idea:"Best = max(normal Kadane max, totalSum - Kadane min). If the array is all negative, total - min equals 0 (empty), but subarray must be non-empty → answer is the max element (the normal Kadane result).",steps:["Compute total, maxKadane, and minKadane in one pass.","If maxKadane < 0: return maxKadane (all negative case).","Otherwise return max(maxKadane, total - minKadane)."],time:"O(n)",space:"O(1)"},dry:["nums = [5, -3, 5]","total = 7","maxKadane = 5 (or 5-3+5=7 → actually 7!)","maxKadane: 5 → 5; 2; 7 → best = 7","minKadane = -3","wrap candidate: total - min = 7 - (-3) = 10 → [5 (tail)] + [5 (head)] wrapping? that is 5+5 = 10? subarray [5, 5] wrapping = 10 ✓","Answer: 10"],hints:["A wrapping subarray = the whole array minus a middle (non-wrapping) subarray.","To maximize the wrap, minimize the middle — that is min-Kadane.","What goes wrong with total - minKadane when every element is negative?"],code:{javascript:`function maxSubarraySumCircular(nums) {
  const total = nums.reduce((a, b) => a + b, 0);
  let endMax = nums[0], bestMax = nums[0];
  let endMin = nums[0], bestMin = nums[0];
  for (let i = 1; i < nums.length; i++) {
    endMax = Math.max(nums[i], endMax + nums[i]);
    bestMax = Math.max(bestMax, endMax);
    endMin = Math.min(nums[i], endMin + nums[i]);
    bestMin = Math.min(bestMin, endMin);
  }
  if (bestMax < 0) return bestMax; // all negative
  return Math.max(bestMax, total - bestMin);
}`,python:`def maxSubarraySumCircular(nums):
    total = sum(nums)
    end_max = best_max = nums[0]
    end_min = best_min = nums[0]
    for x in nums[1:]:
        end_max = max(x, end_max + x)
        best_max = max(best_max, end_max)
        end_min = min(x, end_min + x)
        best_min = min(best_min, end_min)
    if best_max < 0:
        return best_max
    return max(best_max, total - best_min)`,java:"",cpp:""}}],et=[{id:"ps-01",slug:"subarray-sum-equals-k",title:"Subarray Sum Equals K",pattern:"prefix-sum",difficulty:"Easy",platform:"LeetCode",url:"https://leetcode.com/problems/subarray-sum-equals-k/",extra:[],summary:"Given an array of integers (positive, negative, zero) and an integer k, count the number of subarrays whose sum equals k.",asked:"Return the count of contiguous subarrays with sum exactly k.",why:"Subarray sum [l..r] = prefix[r] - prefix[l-1]. It equals k when a previous prefix equals prefix[r] - k — a hash map of prefix sums answers that in O(1).",clues:["count subarrays","sum equals k","negatives allowed"],brute:{idea:"For each end, walk backwards summing until the prefix check fails / completes.",time:"O(n²)",space:"O(1)"},optimal:{idea:"Walk left to right keeping the running prefix and a map of prefix value → how many times seen. At each position, add map[prefix - k] to the answer, then record the current prefix. Initialize the map with {0: 1} (empty prefix).",steps:["map = {0: 1}; prefix = 0; count = 0.","For each x: prefix += x.","count += map[prefix - k] (how many starts give sum k ending here).","map[prefix]++.","Return count."],time:"O(n)",space:"O(n)"},dry:["nums = [1, 1, 1], k = 2","map{0:1}, prefix=0","x=1: prefix=1; count += map[-1]=0; map{0:1,1:1}","x=1: prefix=2; count += map[0]=1 → 1 ([1,1] at 0..1); map{0:1,1:1,2:1}","x=1: prefix=3; count += map[1]=1 → 2 ([1,1] at 1..2)","Answer: 2"],hints:["Why can't sliding window be used here? (negatives break monotonicity)",'The question becomes: "how many earlier prefixes equal prefix - k?"',"The empty prefix (sum 0, before index 0) must be in the map from the start."],code:{javascript:`function subarraySum(nums, k) {
  const map = new Map([[0, 1]]);
  let prefix = 0, count = 0;
  for (const x of nums) {
    prefix += x;
    count += map.get(prefix - k) || 0;
    map.set(prefix, (map.get(prefix) || 0) + 1);
  }
  return count;
}`,python:`def subarraySum(nums, k):
    from collections import defaultdict
    cnt = defaultdict(int)
    cnt[0] = 1
    prefix = count = 0
    for x in nums:
        prefix += x
        count += cnt[prefix - k]
        cnt[prefix] += 1
    return count`,java:"",cpp:""}},{id:"ps-02",slug:"find-pivot-index",title:"Find Pivot Index",pattern:"prefix-sum",difficulty:"Easy",platform:"LeetCode",url:"https://leetcode.com/problems/find-pivot-index/",extra:[],summary:"Find the index where the sum of all elements strictly to the left equals the sum of all elements strictly to the right.",asked:"Return the pivot index, or -1 if none exists. If several, return the leftmost.",why:"With the total sum known, leftSum and rightSum = total - leftSum - nums[i] — each index is checked in O(1) as you walk, maintaining a running leftSum.",clues:["left sum equals right sum","balance point","pivot"],brute:{idea:"For each index, sum the left side and the right side separately.",time:"O(n²)",space:"O(1)"},optimal:{idea:"total = sum(arr). Walk left to right with leftSum. At index i: rightSum = total - leftSum - nums[i]. If leftSum === rightSum → pivot. Then leftSum += nums[i].",steps:["total = sum of the array.","leftSum = 0.","For i from 0 to n-1:","If leftSum === total - leftSum - nums[i]: return i.","leftSum += nums[i].","Return -1."],time:"O(n)",space:"O(1)"},dry:["nums = [1, 7, 3, 6, 5, 6]","total = 28","i=0: left=0, right=28-0-1=27 → no; left=1","i=1: left=1, right=28-1-7=20 → no; left=8","i=2: left=8, right=28-8-3=17 → no; left=11","i=3: left=11, right=28-11-6=11 ✓","Answer: 3"],hints:["You only need the TOTAL once — every side sum derives from it.","rightSum = total - leftSum - current element.","Check BEFORE adding the current element to leftSum (it is neither left nor right)."],code:{javascript:`function pivotIndex(nums) {
  const total = nums.reduce((a, b) => a + b, 0);
  let left = 0;
  for (let i = 0; i < nums.length; i++) {
    if (left === total - left - nums[i]) return i;
    left += nums[i];
  }
  return -1;
}`,python:`def pivotIndex(nums):
    total = sum(nums)
    left = 0
    for i, x in enumerate(nums):
        if left == total - left - x:
            return i
        left += x
    return -1`,java:"",cpp:""}},{id:"ps-03",slug:"subarray-sums-divisible-by-k",title:"Subarray Sums Divisible By K",pattern:"prefix-sum",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/subarray-sums-divisible-by-k/",extra:[],summary:"Count the number of non-empty subarrays whose sum is divisible by k.",asked:"Return the count of contiguous subarrays with sum % k === 0.",why:"Subarray [l..r] sum ≡ 0 (mod k) exactly when prefix[r] and prefix[l-1] have the same remainder mod k. So count pairs of equal remainders — a frequency map over remainders.",clues:["divisible by k","count subarrays","remainders"],brute:{idea:"Every subarray, check sum % k.",time:"O(n²)",space:"O(1)"},optimal:{idea:"Track the running prefix remainder. For each position, the answer increases by how many earlier prefixes share that remainder. Keep a count array of size k. Handle negative remainders with ((x % k) + k) % k.",steps:["cnt = array of k zeros; cnt[0] = 1 (empty prefix).","prefix = 0.","For each x: prefix += x; mod = ((prefix % k) + k) % k.","ans += cnt[mod]; cnt[mod]++.","Return ans."],time:"O(n)",space:"O(k)"},dry:["nums = [4, 5, 0, -9], k = 5","cnt[0]=1","x=4: prefix=4, mod=4 → ans+=0; cnt[4]=1","x=5: prefix=9, mod=4 → ans+=1 ([4,5]=9? no — [5] and [4,5]? count pairs: prefixes 4 and 9 share mod 4 → subarray [5] sum 5 ✓) → ans=1; cnt[4]=2","x=0: prefix=9, mod=4 → ans+=2 → 3; cnt[4]=3","x=-9: prefix=0, mod=0 → ans+=1 → 4 (the whole array); cnt[0]=2","Answer: 4"],hints:["Two prefixes with the same remainder give a divisible subarray between them.","Why must cnt[0] start at 1? (subarrays starting at index 0)","Negative prefixes need a normalized remainder (0..k-1)."],code:{javascript:`function subarrayDivByK(nums, k) {
  const cnt = new Array(k).fill(0);
  cnt[0] = 1;
  let prefix = 0, ans = 0;
  for (const x of nums) {
    prefix += x;
    const mod = ((prefix % k) + k) % k;
    ans += cnt[mod];
    cnt[mod]++;
  }
  return ans;
}`,python:`def subarrayDivByK(nums, k):
    cnt = [0] * k
    cnt[0] = 1
    prefix = ans = 0
    for x in nums:
        prefix += x
        mod = prefix % k
        ans += cnt[mod]
        cnt[mod] += 1
    return ans`,java:"",cpp:""}},{id:"ps-04",slug:"contiguous-array",title:"Contiguous Array",pattern:"prefix-sum",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/contiguous-array/",extra:[],summary:"Given a binary array, find the length of the longest contiguous subarray with an equal number of 0s and 1s.",asked:"Return the maximum length of a subarray containing equal counts of 0 and 1.",why:"Map 0 → -1. Equal counts means the running sum returns to a value it has seen before. The longest such gap between two equal prefix balances is the answer — first-occurrence map.",clues:["equal number of 0s and 1s","longest subarray","binary array"],brute:{idea:"Every subarray, count zeros and ones.",time:"O(n²)",space:"O(1)"},optimal:{idea:"balance += (x === 1 ? 1 : -1). Keep a map of balance → first index seen. If the balance was seen at index j, the subarray (j+1..i) is balanced; length = i - j. Keep the FIRST occurrence to maximize length.",steps:["map = {0: -1} (balance 0 before the array starts).","balance = 0, ans = 0.","For i, x: balance += x === 1 ? 1 : -1.","If map has balance: ans = max(ans, i - map[balance]).","Else: map[balance] = i.","Return ans."],time:"O(n)",space:"O(n)"},dry:["nums = [0, 1]","map{0:-1}, balance=0","i=0 x=0: balance=-1 (new) → map{-1:0}","i=1 x=1: balance=0 (seen at -1) → ans = 1 - (-1) = 2","Answer: 2"],hints:['Convert the "equal counts" condition into a "return to a previous value" condition.',"What do you do with 0s so that equal counts means balance returns to an old value?","Store the FIRST index of each balance, not the latest — longest gap wins."],code:{javascript:`function findMaxLength(nums) {
  const first = new Map([[0, -1]]);
  let balance = 0, ans = 0;
  for (let i = 0; i < nums.length; i++) {
    balance += nums[i] === 1 ? 1 : -1;
    if (first.has(balance)) {
      ans = Math.max(ans, i - first.get(balance));
    } else {
      first.set(balance, i);
    }
  }
  return ans;
}`,python:`def findMaxLength(nums):
    first = {0: -1}
    balance = ans = 0
    for i, x in enumerate(nums):
        balance += 1 if x == 1 else -1
        if balance in first:
            ans = max(ans, i - first[balance])
        else:
            first[balance] = i
    return ans`,java:"",cpp:""}},{id:"ps-05",slug:"shortest-subarray-with-sum-at-least-k",title:"Shortest Subarray With Sum at Least K",pattern:"prefix-sum",difficulty:"Hard",platform:"LeetCode",url:"https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/",extra:[],summary:"Given an array of integers (positives AND negatives) and a target K, return the length of the shortest non-empty subarray with sum at least K, or -1.",asked:"Shortest contiguous subarray whose sum ≥ K, in O(n) or better.",why:"Prefix sums with a monotonic deque: for each end j, we want the farthest-back i with P[j] - P[i] ≥ K. A deque of candidate i's with strictly increasing P values gives the answer in one pass.",clues:["at least K with negatives","shortest subarray","O(n) required"],brute:{idea:"Every start, extend end (or two pointers — broken by negatives).",time:"O(n²)",space:"O(1)"},optimal:{idea:"P = prefix sums. Maintain a deque of indices with strictly increasing P. For each j: while P[j] - P[front] ≥ K, record j - front and pop the front (an earlier i is always at least as good for future j... actually we want the FARthest i, and front is the oldest). Then pop back while P[back] ≥ P[j] (those can never be optimal), and push j.",steps:["Build prefix array P[0..n].","dq = [0] (indices into P; P values kept increasing).","For j from 1 to n:","While dq non-empty and P[j] - P[dq.front] ≥ K: ans = min(ans, j - dq.front); pop front.","While dq non-empty and P[j] ≤ P[dq.back]: pop back.","Push j.","Return ans or -1."],time:"O(n)",space:"O(n)"},dry:["nums = [2, -1, 2], k = 3","P = [0, 2, 1, 3]","j=1 (P=2): 2-0 <3; push → dq=[0,1]","j=2 (P=1): 1-0<3; P[2]=1 ≤ P[1]=2 → pop 1; push → dq=[0,2]","j=3 (P=3): 3-0 ≥3 → ans=3, pop 0 → 3-1? P[2]=1: 3-1=2 <3 stop. P[3]=3 > P[2]=1 → push → dq=[2,3]","Answer: 3? but [2,-1,2] sum 3 length 3; is there shorter? [2, -1, 2]... subarrays: [2] (2), [2,-1] (1), [-1,2] (1), [2,-1,2] (3) → 3 ✓"],hints:['Negatives kill two-pointer. What structure remembers "promising starting prefixes"?',"A candidate i with a LARGER prefix is never better than one with a smaller prefix at an earlier-or-equal position... keep P strictly increasing in the deque.","Popping the front after a match is safe: the same front can never yield a shorter answer for a later j."],code:{javascript:`function shortestSubarray(nums, k) {
  const n = nums.length;
  const P = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) P[i + 1] = P[i] + nums[i];
  const dq = [0];
  let ans = Infinity;
  for (let j = 1; j <= n; j++) {
    while (dq.length && P[j] - P[dq[0]] >= k) {
      ans = Math.min(ans, j - dq[0]);
      dq.shift();
    }
    while (dq.length && P[j] <= P[dq[dq.length - 1]]) dq.pop();
    dq.push(j);
  }
  return ans === Infinity ? -1 : ans;
}`,python:`from collections import deque
def shortestSubarray(nums, k):
    n = len(nums)
    P = [0] * (n + 1)
    for i in range(n):
        P[i + 1] = P[i] + nums[i]
    dq = deque([0])
    ans = float('inf')
    for j in range(1, n + 1):
        while dq and P[j] - P[dq[0]] >= k:
            ans = min(ans, j - dq.popleft())
        while dq and P[j] <= P[dq[-1]]:
            dq.pop()
        dq.append(j)
    return -1 if ans == float('inf') else ans`,java:"",cpp:""}},{id:"ps-06",slug:"count-of-range-sum",title:"Count of Range Sum",pattern:"prefix-sum",difficulty:"Hard",platform:"LeetCode",url:"https://leetcode.com/problems/count-of-range-sum/",extra:[],summary:"Given an array and two integers lower and upper, count the number of (i, j) pairs with i ≤ j and lower ≤ sum(i..j) ≤ upper.",asked:"Count subarrays whose sum lies in [lower, upper] — in O(n log n).",why:'Again prefix pairs: lower ≤ P[j] - P[i] ≤ upper with i < j. This is "count pairs with difference in a range" — the classic merge-sort counting (or Fenwick tree) problem.',clues:["sum in [lower, upper]","count pairs","O(n log n)"],brute:{idea:"All (i, j) with running sums.",time:"O(n²)",space:"O(1)"},optimal:{idea:"Merge sort on the prefix array. At each merge step, both halves are sorted; count cross pairs (i in left, j in right) with P[i] + lower ≤ P[j] ≤ P[i] + upper using two sliding pointers over the sorted right half. Then merge as usual. Total O(n log n).",steps:["Build P[0..n] (prefix sums).","sortCount(l, r): if r - l < 2 return 0; m = mid.","count = sortCount(l, m) + sortCount(m, r).","Cross: for each i in the sorted left half, advance two pointers over the sorted right half to count P[j] in [P[i]+lower, P[i]+upper].","Merge the two sorted halves.","Answer = sortCount(0, n+1)."],time:"O(n log n)",space:"O(n)"},dry:["nums = [-2, 5, -1], lower = -2, upper = 2","P = [0, -2, 3, 2]","Pairs (i<j) with -2 ≤ P[j]-P[i] ≤ 2: (0,1): -2 ✓; (0,3): 2 ✓; (2,3): -1 ✓; others out of range","Merge-sort counting accumulates: left half [0,-2] gives 1 cross; right half [3,2] gives 1; top cross (left [-2,0] vs right [2,3]) gives 1 for P[i]=0 → P[j]=2 in [−2,2] ✓","Answer: 3"],hints:["Reduce to: count pairs of prefix sums whose difference is in [lower, upper].","In merge sort, when do you have two sorted halves? (after the recursive calls, before merging)","Two pointers over the sorted right half move only forward as P[i] increases in the sorted left half."],code:{javascript:`function countRangeSum(nums, lower, upper) {
  const P = [0];
  for (const x of nums) P.push(P[P.length - 1] + x);

  function sortCount(l, r) {
    if (r - l < 2) return 0;
    const m = (l + r) >> 1;
    let count = sortCount(l, m) + sortCount(m, r);
    // P[l..m) and P[m..r) are sorted here
    let j = m, k = m;
    for (let i = l; i < m; i++) {
      while (j < r && P[j] < P[i] + lower) j++;
      if (k < j) k = j;
      while (k < r && P[k] <= P[i] + upper) k++;
      count += k - j;
    }
    const temp = P.slice(l, r);
    let a = l, b = m, t = l;
    while (a < m && b < r) P[t++] = temp[a] <= temp[b] ? temp[a++] : temp[b++];
    while (a < m) P[t++] = temp[a++];
    while (b < r) P[t++] = temp[b++];
    return count;
  }
  return sortCount(0, P.length);
}`,python:`def countRangeSum(nums, lower, upper):
    P = [0]
    for x in nums:
        P.append(P[-1] + x)

    def sort_count(l, r):
        if r - l < 2:
            return 0
        m = (l + r) // 2
        count = sort_count(l, m) + sort_count(m, r)
        j = k = m
        for i in range(l, m):
            while j < r and P[j] < P[i] + lower:
                j += 1
            if k < j:
                k = j
            while k < r and P[k] <= P[i] + upper:
                k += 1
            count += k - j
        temp = P[l:r]
        a, b, t = l, m, l
        while a < m and b < r:
            P[t] = temp[a - l] if temp[a - l] <= temp[b - m] else temp[b - m]
            if temp[a - l] <= temp[b - m]:
                a += 1
            else:
                b += 1
            t += 1
        while a < m:
            P[t] = temp[a - l]; a += 1; t += 1
        while b < r:
            P[t] = temp[b - m]; b += 1; t += 1
        return count

    return sort_count(0, len(P))`,java:"",cpp:""}}],tt=[{id:"mi-01",slug:"merge-intervals",title:"Merge Intervals",pattern:"merge-intervals",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/merge-intervals/",extra:[],summary:"Given an array of intervals, merge all overlapping intervals and return the non-overlapping result.",asked:"Return a list of intervals where any overlapping (or touching) intervals are merged into one [min start, max end].",why:"After sorting by start, an interval can only overlap with the LAST interval kept — a single sweep with a result list does the job.",clues:["intervals","overlapping merge","non-overlapping result"],brute:{idea:"For every pair, check overlap and merge repeatedly until stable.",time:"O(n² · n) worst",space:"O(n)"},optimal:{idea:"Sort by start. Walk: if the current start ≤ last kept end, extend that end to max(end, current end); otherwise push a new interval.",steps:["Sort intervals by start (then by end).","res = [first interval].","For each next interval iv:","If iv.start <= last(res).end: last(res).end = max(last(res).end, iv.end).","Else push iv.","Return res."],time:"O(n log n)",space:"O(1) extra (+ output)"},dry:["Input: [ [1,3], [2,6], [8,10], [15,18] ]","Sorted (already): start with [1,3]","[2,6]: 2 ≤ 3 → merge → [1,6]","[8,10]: 8 > 6 → push","[15,18]: 15 > 10 → push","Answer: [[1,6], [8,10], [15,18]]"],hints:['What ordering makes "only the last interval matters" true?',"Overlap test: current.start <= last.end (touching counts).","When merging, only the END can grow — the start is already minimal."],code:{javascript:`function merge(intervals) {
  intervals.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const res = [intervals[0].slice()];
  for (let i = 1; i < intervals.length; i++) {
    const last = res[res.length - 1];
    if (intervals[i][0] <= last[1]) {
      last[1] = Math.max(last[1], intervals[i][1]);
    } else {
      res.push(intervals[i].slice());
    }
  }
  return res;
}`,python:`def merge(intervals):
    intervals.sort(key=lambda iv: (iv[0], iv[1]))
    res = [intervals[0][:]]
    for s, e in intervals[1:]:
        last = res[-1]
        if s <= last[1]:
            last[1] = max(last[1], e)
        else:
            res.append([s, e])
    return res`,java:"",cpp:""}},{id:"mi-02",slug:"insert-interval",title:"Insert Interval",pattern:"merge-intervals",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/insert-interval/",extra:[],summary:"Insert a new interval into a list of sorted, non-overlapping intervals, merging overlaps, and return the result.",asked:"Return the sorted non-overlapping list after inserting (and merging around) the new interval.",why:"The sorted structure splits into three zones: before the new interval, the overlapping middle (merge into one), and after. One pass, three phases.",clues:["insert into sorted intervals","merge overlaps","non-overlapping input"],brute:{idea:"Push the new interval and run the full merge algorithm.",time:"O(n log n)",space:"O(n)"},optimal:{idea:"Phase 1: copy all intervals ending before the new one starts. Phase 2: absorb every interval overlapping the new one (expand its start/end). Phase 3: copy the rest.",steps:["res = [].","Copy intervals with end < new.start into res.","While intervals have start <= new.end: new = [min(starts), max(ends)]; advance.","Push the merged new interval.","Copy the remaining intervals.","Return res."],time:"O(n)",space:"O(1) extra (+ output)"},dry:["Input: [[1,3],[6,9]], new = [2,5]","Phase 1: none end before 2","Phase 2: [1,3] overlaps (1 ≤ 5) → new=[1,5]; [6,9]: 6 > 5 stop","Push [1,5]; Phase 3: copy [6,9]","Answer: [[1,5], [6,9]]"],hints:["Which intervals can NEVER overlap the new one? (those ending before it starts)","The merge zone keeps absorbing while interval.start <= new.end.","Two pointers / one index walks the input exactly once."],code:{javascript:`function insert(intervals, newInterval) {
  const res = [];
  let i = 0, n = intervals.length;
  while (i < n && intervals[i][1] < newInterval[0]) res.push(intervals[i++]);
  while (i < n && intervals[i][0] <= newInterval[1]) {
    newInterval = [
      Math.min(newInterval[0], intervals[i][0]),
      Math.max(newInterval[1], intervals[i][1])
    ];
    i++;
  }
  res.push(newInterval);
  while (i < n) res.push(intervals[i++]);
  return res;
}`,python:`def insert(intervals, newInterval):
    res = []
    i, n = 0, len(intervals)
    while i < n and intervals[i][1] < newInterval[0]:
        res.append(intervals[i]); i += 1
    while i < n and intervals[i][0] <= newInterval[1]:
        newInterval = [min(newInterval[0], intervals[i][0]),
                       max(newInterval[1], intervals[i][1])]
        i += 1
    res.append(newInterval)
    while i < n:
        res.append(intervals[i]); i += 1
    return res`,java:"",cpp:""}},{id:"mi-03",slug:"intervals-intersection",title:"Intervals Intersection",pattern:"merge-intervals",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/interval-list-intersections/",extra:[],summary:"Given two lists of sorted, non-overlapping intervals, return the intersection of the two lists.",asked:"Return all intervals where the two lists overlap (intersection in the set sense), sorted and non-overlapping.",why:"Both lists sorted → classic two-pointer sweep: advance the pointer whose interval ends first; the intersection is [max starts, min ends] when non-empty.",clues:["two sorted interval lists","intersection","common overlap"],brute:{idea:"For each interval in list A, scan list B for overlaps.",time:"O(n·m)",space:"O(1)"},optimal:{idea:"i, j walk both lists. Intersection of A[i] and B[j] is [max(a.s, b.s), min(a.e, b.e)] — record it if start ≤ end. Then advance the list whose interval ends earlier.",steps:["i = 0, j = 0.","While both lists have intervals:","lo = max(a[i].s, b[j].s); hi = min(a[i].e, b[j].e).","If lo <= hi, push [lo, hi].","If a[i].e < b[j].e → i++, else j++.","Return the result."],time:"O(n + m)",space:"O(1) extra"},dry:["A = [[1,3],[5,9]], B = [[0,5],[6,10],[11,15]]","A[0]=[1,3], B[0]=[0,5] → [max(1,0), min(3,5)] = [1,3] ✓; A[0] ends first → i++","A[1]=[5,9], B[0]=[0,5] → [5,5] ✓; A[1].e=9 > 5 → j++","A[1]=[5,9], B[1]=[6,10] → [6,9] ✓; A[1] ends first → i++","Answer: [[1,3], [5,5], [6,9]]"],hints:["Two sorted lists → think two pointers, not nested loops.","Intersection start = max of starts; intersection end = min of ends.","Whose pointer advances? The one whose interval ends FIRST."],code:{javascript:`function intervalIntersection(firstList, secondList) {
  const res = [];
  let i = 0, j = 0;
  while (i < firstList.length && j < secondList.length) {
    const a = firstList[i], b = secondList[j];
    const lo = Math.max(a[0], b[0]);
    const hi = Math.min(a[1], b[1]);
    if (lo <= hi) res.push([lo, hi]);
    if (a[1] < b[1]) i++;
    else j++;
  }
  return res;
}`,python:`def intervalIntersection(firstList, secondList):
    res = []
    i = j = 0
    while i < len(firstList) and j < len(secondList):
        a, b = firstList[i], secondList[j]
        lo, hi = max(a[0], b[0]), min(a[1], b[1])
        if lo <= hi:
            res.append([lo, hi])
        if a[1] < b[1]:
            i += 1
        else:
            j += 1
    return res`,java:"",cpp:""}},{id:"mi-04",slug:"overlapping-intervals",title:"Overlapping Intervals",pattern:"merge-intervals",difficulty:"Easy",platform:"GeeksforGeeks",url:"https://www.geeksforgeeks.org/check-if-any-two-intervals-overlap-among-a-given-set-of-intervals/",extra:[],summary:"Given a set of intervals, check if any two intervals overlap.",asked:"Return true if at least one pair of intervals overlaps, else false.",why:"Sorting by start reduces the check to adjacent pairs: if ANY overlap exists, some adjacent sorted pair overlaps.",clues:["any two overlap","check existence","intervals"],brute:{idea:"Every pair, check the overlap condition.",time:"O(n²)",space:"O(1)"},optimal:{idea:"Sort by start. If for any adjacent pair the next start ≤ previous end, they overlap.",steps:["Sort intervals by start.","For i from 1 to n-1:","If intervals[i].start <= intervals[i-1].end: return true.","Return false."],time:"O(n log n)",space:"O(1) extra"},dry:["Input: [[5,7], [1,4], [9,11], [2,6]]","Sorted: [[1,4], [2,6], [5,7], [9,11]]","[2,6]: 2 ≤ 4 → overlap!","Answer: true","Counter: [[1,2], [3,4], [5,6]] → no adjacent start ≤ prev end → false"],hints:["Why are non-adjacent overlaps impossible if no adjacent pair overlaps?","Overlap condition: a.start <= b.end (with a before b).","One sort + one scan."],code:{javascript:`function doIntervalsOverlap(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= intervals[i - 1][1]) return true;
  }
  return false;
}`,python:`def doIntervalsOverlap(intervals):
    intervals.sort(key=lambda iv: iv[0])
    for i in range(1, len(intervals)):
        if intervals[i][0] <= intervals[i - 1][1]:
            return True
    return False`,java:"",cpp:""}},{id:"mi-05",slug:"minimum-meeting-rooms",title:"Minimum Meeting Rooms",pattern:"merge-intervals",difficulty:"Hard",platform:"GeeksforGeeks",url:"https://www.geeksforgeeks.org/problems/attend-all-meetings-ii/1",extra:[],summary:"Given meeting start and end times, find the minimum number of rooms (platforms) so that no two meetings share a room.",asked:"Return the maximum number of meetings happening simultaneously.",why:"The answer is the maximum overlap. A sweep line over (time, +1/-1) events computes the running overlap in one sorted pass — or a min-heap of end times works too.",clues:["minimum rooms / platforms","simultaneous meetings","max overlap"],brute:{idea:"For every point in time, count active meetings; take the max. Or sort by start and check all previous ends.",time:"O(n²)",space:"O(n)"},optimal:{idea:"Create events: (start, +1) and (end, -1). Sort by time, with END before START at the same time (a room frees up exactly when the next starts). Sweep and track the maximum running count.",steps:["events = all (time, delta), delta +1 for start, -1 for end.","Sort by time; on ties, -1 before +1.","cur = 0, ans = 0.","For each event: cur += delta; ans = max(ans, cur).","Return ans."],time:"O(n log n)",space:"O(n)"},dry:["Meetings: [[1,10], [2,7], [3,19], [5,6]]","Events: 1:+1, 2:+1, 3:+1, 5:+1, 6:-1, 7:-1, 10:-1, 19:-1","Sweep: 1 → 2 → 3 → 4 (peak 4 at time 5-6) → 3 → 2 → 1 → 0","Answer: 4? retrace: at t=5 cur = 4; at t=6 (end) cur = 3 → peak = 4? meetings 1-10, 2-7, 3-19, 5-6 all active at t=5.5 → yes 4","Answer: 4"],hints:["Rooms needed = maximum simultaneous meetings — a max-overlap question.","Turn each meeting into two time events: one arrival, one departure.","At equal times, process departures first (the room is reusable at the exact end time)."],code:{javascript:`function minPlatforms(intervals) {
  const events = [];
  for (const [s, e] of intervals) {
    events.push([s, 1]);
    events.push([e, -1]);
  }
  events.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  let cur = 0, ans = 0;
  for (const [, d] of events) {
    cur += d;
    ans = Math.max(ans, cur);
  }
  return ans;
}`,python:`def minPlatforms(intervals):
    events = []
    for s, e in intervals:
        events.append((s, 1))
        events.append((e, -1))
    events.sort(key=lambda ev: (ev[0], ev[1]))
    cur = ans = 0
    for _, d in events:
        cur += d
        ans = max(ans, cur)
    return ans`,java:"",cpp:""}},{id:"mi-06",slug:"maximum-cpu-load",title:"Maximum CPU Load",pattern:"merge-intervals",difficulty:"Hard",platform:"GeeksforGeeks",url:"https://www.geeksforgeeks.org/maximum-cpu-load-from-the-given-list-of-jobs/",extra:[],summary:"Given jobs with start, end and weight (load units), find the maximum total CPU load at any instant.",asked:"Return the peak of the sum of weights of all jobs active at the same time.",why:"Generalized max-overlap: each job contributes its weight at its start and removes it at its end. Same sweep-line events, with signed weights.",clues:["maximum load","start/end/weight jobs","peak concurrency"],brute:{idea:"For every job, sum weights of all jobs overlapping it.",time:"O(n²)",space:"O(1)"},optimal:{idea:"Events (start, +w) and (end, -w), sorted by time (ends before starts on ties). Sweep; the peak running sum is the answer.",steps:["Build events: (start, +weight), (end, -weight).","Sort by time; on ties, negative delta first.","cur = 0, ans = 0.","For each event: cur += delta; ans = max(ans, cur).","Return ans."],time:"O(n log n)",space:"O(n)"},dry:["Jobs: [[1,4,3], [2,5,4], [5,6,4]]","Events: 1:+3, 2:+4, 4:-3, 5:-4, 5:+4, 6:-4","Sort tie at 5: -4 before +4 → sweep: 3 → 7 → 4 → 0 → 4 → 0","Answer: 7 (between t=2 and t=4, both first jobs active: 3+4)"],hints:["Same engine as meeting rooms — but events carry weights, not just 1.","Ends before starts at the same timestamp (a job finishing at t frees capacity at t).","Track the running sum, not the count."],code:{javascript:`function findMaxLoad(jobs) {
  const events = [];
  for (const [s, e, w] of jobs) {
    events.push([s, w]);
    events.push([e, -w]);
  }
  events.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  let cur = 0, ans = 0;
  for (const [, d] of events) {
    cur += d;
    ans = Math.max(ans, cur);
  }
  return ans;
}`,python:`def findMaxLoad(jobs):
    events = []
    for s, e, w in jobs:
        events.append((s, w))
        events.append((e, -w))
    events.sort(key=lambda ev: (ev[0], ev[1]))
    cur = ans = 0
    for _, d in events:
        cur += d
        ans = max(ans, cur)
    return ans`,java:"",cpp:""}},{id:"mi-07",slug:"employee-free-time",title:"Employee Free Time",pattern:"merge-intervals",difficulty:"Hard",platform:"CoderTrain",url:"https://www.codertrain.co/employee-free-time",extra:[],summary:"Given the busy intervals of a group of employees (as a list of lists), return the common free time slots when everyone is free.",asked:"Return the list of [start, end] intervals where NO employee is busy. Input is sorted per employee but not globally.",why:"Flatten everyone's busy intervals, merge them into one global busy schedule, and the gaps between merged intervals are exactly the common free slots.",clues:["common free time","group of employees","gaps in busy schedule"],brute:{idea:"For every candidate time, check all employees (timeline discretization).",time:"O(n·m)",space:"O(n)"},optimal:{idea:"Collect all busy intervals from all employees, sort by start, merge overlaps into a single merged list, then output the gaps between consecutive merged intervals.",steps:["all = concat of every employee's intervals.","Sort all by start.","Merge: extend the last kept interval on overlap, else start a new one.","For each adjacent merged pair, if next.start > last.end, the gap [last.end, next.start] is free.","Return the gaps."],time:"O(N log N)",space:"O(N)"},dry:["Emp1: [[9,10]], Emp2: [[10,12]], Emp3: [[11,13]]","All busy: [9,10], [10,12], [11,13] → sorted & merged: [9,13]","No gaps inside → only gaps before 9 and after 13 (unbounded, ignored)","Answer: [] (no finite free slot where all three are free together)","Example 2: Emp1 [[2,7]], Emp2 [[9,12]] → merged [[2,7],[9,12]] → free [7,9] ✓"],hints:["Global busy schedule = merge of ALL intervals (regardless of employee).","Free slots are the gaps BETWEEN merged busy intervals.","Per-employee sortedness does not help — flatten and sort globally."],code:{javascript:`function employeeFreeTime(schedule) {
  const all = schedule.flat().sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const merged = [];
  for (const [s, e] of all) {
    const last = merged[merged.length - 1];
    if (last && s <= last[1]) last[1] = Math.max(last[1], e);
    else merged.push([s, e]);
  }
  const free = [];
  for (let i = 1; i < merged.length; i++) {
    if (merged[i][0] > merged[i - 1][1]) {
      free.push([merged[i - 1][1], merged[i][0]]);
    }
  }
  return free;
}`,python:`def employeeFreeTime(schedule):
    all_ = sorted((s, e) for emp in schedule for s, e in emp)
    merged = []
    for s, e in all_:
        if merged and s <= merged[-1][1]:
            merged[-1][1] = max(merged[-1][1], e)
        else:
            merged.append([s, e])
    free = []
    for i in range(1, len(merged)):
        if merged[i][0] > merged[i - 1][1]:
            free.append([merged[i - 1][1], merged[i][0]])
    return free`,java:"",cpp:""}}],rt=[{id:"lr-01",slug:"reverse-a-linked-list",title:"Reverse a LinkedList",pattern:"linked-list-reversal",difficulty:"Easy",platform:"LeetCode",url:"https://leetcode.com/problems/reverse-linked-list/",extra:[],summary:"Given the head of a singly linked list, reverse the list and return the new head.",asked:"Rewire the next pointers in place so the list runs backwards. Return the (new) head.",why:"This is THE core skill of the pattern: three pointers (prev, cur, next) rewiring one node at a time, left to right.",clues:["reverse the list","singly linked list","in place"],brute:{idea:"Push all values onto a stack / array, rebuild the list backwards.",time:"O(n)",space:"O(n)"},optimal:{idea:"Iterative: prev = null, cur = head. For each node: save next, point cur.next back to prev, advance prev and cur. When cur is null, prev is the new head.",steps:["prev = null, cur = head.","While cur !== null:","next = cur.next (save the rest).","cur.next = prev (reverse the arrow).","prev = cur; cur = next.","Return prev."],time:"O(n)",space:"O(1)"},dry:["List: 1 → 2 → 3 → null","prev=null, cur=1: next=2; 1.next=null; prev=1, cur=2","prev=1, cur=2: next=3; 2.next=1; prev=2, cur=3","prev=2, cur=3: next=null; 3.next=2; prev=3, cur=null","Stop → new head = 3","Result: 3 → 2 → 1 → null ✓"],hints:["What three things must you remember per node? (prev, cur, next)","Why save cur.next BEFORE overwriting it?","Which pointer is the answer when the loop ends?"],code:{javascript:`function reverseList(head) {
  let prev = null, cur = head;
  while (cur) {
    const next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
}`,python:`def reverseList(head):
    prev = None
    cur = head
    while cur:
        nxt = cur.next
        cur.next = prev
        prev = cur
        cur = nxt
    return prev`,java:"",cpp:""}},{id:"lr-02",slug:"reverse-a-sub-list",title:"Reverse a Sub-list",pattern:"linked-list-reversal",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/reverse-linked-list-ii/",extra:[],summary:"Reverse the nodes of a singly linked list from position m to position n (1-indexed), in one pass.",asked:"Reverse only the slice [m..n], keeping the rest of the list intact. Return the head.",why:'Master move of the pattern: reverse a SLICE and stitch it back. A dummy head removes the "head might change" edge case; walk to m-1, then perform (n-m) rotations.',clues:["reverse between positions","1-indexed m and n","one pass"],brute:{idea:"Collect values of the slice, reverse the array, write back.",time:"O(n)",space:"O(n-m)"},optimal:{idea:"prev points to the node before the slice (use a dummy before head). headOfSlice = prev.next. Repeat (n - m) times: pull the node after headOfSlice to right after prev. This reverses the slice in place.",steps:["dummy → head; walk prev to node m-1.","cur = prev.next (first node of the slice).","For i in 0..n-m-1:","next = cur.next; cur.next = next.next; next.next = prev.next; prev.next = next.","Return dummy.next."],time:"O(n)",space:"O(1)"},dry:["List: 1 → 2 → 3 → 4 → 5, m = 2, n = 4","prev = node 1; cur = node 2","Step 1: pull node 3 after prev → 1 → 3 → 2 → 4 → 5","Step 2: pull node 4 after prev → 1 → 4 → 3 → 2 → 5","Result: 1 → 4 → 3 → 2 → 5 ✓ (slice [2..4] reversed)"],hints:["Which node must NEVER be lost? (the node before the slice — use a dummy)","Instead of reversing pointers one by one, can you ROTATE nodes to the front of the slice?","How many rotations does a slice of length L need? (L - 1)"],code:{javascript:`function reverseBetween(head, left, right) {
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
}`,python:`def reverseBetween(head, left, right):
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
    return dummy.next`,java:"",cpp:""}},{id:"lr-03",slug:"reverse-list-in-pairs",title:"Reverse List in Pairs",pattern:"linked-list-reversal",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/swap-nodes-in-pairs/",extra:[],summary:"Swap every two adjacent nodes of a linked list and return the modified list.",asked:"Rewire (not revalue): 1↔2, 3↔4, ... A trailing single node stays at the end. One pass, O(1) space.",why:"Reversal of a fixed slice of length 2, repeated. A prev pointer before each pair keeps the links to the previous pair intact.",clues:["swap in pairs","adjacent nodes","linked list"],brute:{idea:"Extract values into an array, swap pairs, rebuild.",time:"O(n)",space:"O(n)"},optimal:{idea:"dummy → head. prev points before the current pair. While two nodes remain: first = prev.next, second = first.next. Rewire: first.next = second.next; second.next = first; prev.next = second. Then prev = first (the pair's new tail).",steps:["dummy.next = head; prev = dummy.","While prev.next && prev.next.next:","first = prev.next; second = first.next.","first.next = second.next.","second.next = first.","prev.next = second.","prev = first.","Return dummy.next."],time:"O(n)",space:"O(1)"},dry:["List: 1 → 2 → 3 → 4","prev=dummy: pair (1,2) → dummy → 2 → 1; prev = 1","pair (3,4) → 1 → 4 → 3","Result: 2 → 1 → 4 → 3 ✓"],hints:["Keep a pointer to the node BEFORE each pair — that is what gets re-linked.",'After swapping, where does "prev" go for the next iteration?',"What happens to a leftover single node? (it is just never touched)"],code:{javascript:`function swapPairs(head) {
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
}`,python:`def swapPairs(head):
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
    return dummy.next`,java:"",cpp:""}},{id:"lr-04",slug:"reverse-every-k-element-sub-list",title:"Reverse every K-element Sub-list",pattern:"linked-list-reversal",difficulty:"Hard",platform:"LeetCode",url:"https://leetcode.com/problems/reverse-nodes-in-k-group/",extra:[],summary:"Reverse the nodes of a linked list k at a time and return the modified list. Groups of less than k at the tail must NOT be reversed.",asked:"Chunk the list into groups of k, reverse each full group, leave a short tail untouched.",why:"Composition of: count nodes ahead (is there a full group?), reverse a slice of length k (the base skill), reconnect head/tail, and recurse for the rest.",clues:["reverse in k groups","tail shorter than k untouched","linked list"],brute:{idea:"Values into an array; reverse each full k-block; rebuild.",time:"O(n)",space:"O(n)"},optimal:{idea:"First check that k nodes remain; if not, stop (tail stays). Reverse exactly k nodes with the 3-pointer technique; the old head becomes the tail and must point to the next group (recurse on it); the new head is the old k-th node.",steps:["Count forward k nodes from head; if fewer than k exist, return head unchanged.","Reverse the first k nodes (prev/cur loop, k iterations).","head.next = reverseKGroup(nextAfterK, k).","Return prev (new head of this group)."],time:"O(n)",space:"O(n/k) recursion stack (O(1) iteratively with a tail pointer)"},dry:["List: 1 → 2 → 3 → 4 → 5, k = 2","Group 1: 2 nodes exist → reverse → 2 → 1; tail (1) must link to the rest","Recurse on 3 → 4 → 5: reverse 3,4 → 4 → 3","Recurse on 5: fewer than 2 nodes → return 5","Stitch: 2 → 1 → 4 → 3 → 5 ✓"],hints:["How do you know there is a FULL group of k before reversing?","After reversing k nodes, which node is the new head and which is the new tail?","The new tail must connect to the (recursively processed) rest of the list."],code:{javascript:`function reverseKGroup(head, k) {
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
}`,python:`def reverseKGroup(head, k):
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
    return prev`,java:"",cpp:""}},{id:"lr-05",slug:"reverse-nodes-in-even-length-groups",title:"Reverse Nodes in Even Length Groups",pattern:"linked-list-reversal",difficulty:"Hard",platform:"LeetCode",url:"https://leetcode.com/problems/reverse-nodes-in-even-length-groups/",extra:[],summary:"Split the list into groups of lengths 1, 2, 4, 8, ... (doubling; the last group may be shorter). Reverse every group whose length is EVEN.",asked:"Apply the group rule, reverse only even-sized groups in place, and return the head.",why:"Grouping + slice reversal. The doubling rule decides each group's size; for each group you measure its real size (it may be cut short by the end of the list), then reverse if even.",clues:["groups 1, 2, 4, 8...","reverse even-length groups","doubling"],brute:{idea:"Values into an array; slice per the rule; reverse even slices; rebuild.",time:"O(n)",space:"O(n)"},optimal:{idea:"Walk the list with len = 1, 2, 4, ...: measure up to len nodes (the real count may be smaller at the end). If count is even, reverse that slice (3-pointer) and re-stitch; otherwise just advance to the slice tail.",steps:["len = 1; prevTail = null; cur = head.","While cur: measure count = min(len, remaining).","If count % 2 === 0: reverse the slice; if prevTail, prevTail.next = newHead else head = newHead; oldHead.next = tailAfterGroup; prevTail = oldHead.","Else: walk count-1 steps to the tail; prevTail = tail.","cur = node after the group; len *= 2.","Return head."],time:"O(n)",space:"O(1)"},dry:["List: 9 → 6 → 4 → 8 → 5 → 8 → 4 → 4 → 7","Group len 1: [9] odd → keep","Group len 2: [6,4] even → reverse → 4,6","Group len 4: [8,5,8,4] even → reverse → 4,8,5,8","Group len 8: remaining [4,7] (cut short, count 2, even) → reverse → 7,4","Result: 9 → 4 → 6 → 4 → 8 → 5 → 8 → 7 → 4 ✓"],hints:["Group sizes double: 1, 2, 4, 8 — and the LAST group may be shorter than planned.","Measure the real group size before deciding to reverse.","After reversing, remember to re-stitch: new head (from prevTail) and old head → next group."],code:{javascript:`function reverseEvenLengthGroups(head) {
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
}`,python:`def reverseEvenLengthGroups(head):
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
    return head`,java:"",cpp:""}},{id:"lr-06",slug:"rotate-a-linked-list",title:"Rotate a LinkedList",pattern:"linked-list-reversal",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/rotate-list/",extra:[],summary:"Rotate a linked list to the right by k places (the last k nodes come to the front).",asked:"Return the list after rotating right by k positions. k may be larger than the list length.",why:"Make the list circular, then cut it at the right spot: the (n - k % n)-th node becomes the last, and its next becomes the new head.",clues:["rotate right by k","k can exceed n","linked list"],brute:{idea:"Physically move the last node to the front, k % n times.",time:"O(n · (k % n))",space:"O(1)"},optimal:{idea:"Find n and the tail (one pass). k %= n. Connect tail → head (circle). Walk n - k - 1 steps from head; that node becomes the new tail (cut it); the next node is the new head.",steps:["Find the length n and the tail node.","k = k % n; if k === 0, return head.","tail.next = head (make it circular).","Walk to node number n - k; set newHead = cur.next; cur.next = null.","Return newHead."],time:"O(n)",space:"O(1)"},dry:["List: 1 → 2 → 3 → 4 → 5, k = 2 (n = 5)","tail = 5; make circular: 5 → 1","cut position = 5 - 2 = 3 → node 3","3.next = null; new head = 4","Result: 4 → 5 → 1 → 2 → 3 ✓"],hints:["Rotating n times does nothing — reduce k first.","A rotation is a single cut in a circular list: why make it circular?","The node that becomes the LAST one is at position n - k."],code:{javascript:`function rotateRight(head, k) {
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
}`,python:`def rotateRight(head, k):
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
    return new_head`,java:"",cpp:""}}],at=[{id:"st-01",slug:"remove-adjacent-duplicates",title:"Remove Adjacent Duplicates",pattern:"stack",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/",extra:[],summary:"Remove all adjacent duplicate characters from a string repeatedly until no more removals are possible, then return the final string.",asked:'Cascade removal: "abbaca" → "aca" (bb removed, then aa removed). Return the final string.',why:"Each new character only interacts with the MOST RECENT remaining one — exactly the stack top. Push, or cancel the top when equal.",clues:["adjacent duplicates","repeatedly remove","final string"],brute:{idea:"Loop the string, remove adjacent equal pairs, repeat until stable.",time:"O(n²) worst",space:"O(n)"},optimal:{idea:"Use an array as a stack. For each char c: if the stack is non-empty and the top equals c, pop (cancellation); otherwise push c. The remaining stack is the answer.",steps:["stack = [].","For each char c in s:","If stack.length && stack[top] === c → pop (they cancel).","Else push c.",'Return stack.join("").'],time:"O(n)",space:"O(n)"},dry:['s = "abbaca"',"a → [a]","b → [a,b]","b → top b matches → pop → [a]","a → top a matches → pop → []","c → [c]",'Answer: "c"'],hints:["A character can only cancel with the character just before it in the REMAINING string.",'Which data structure gives you "the most recent remaining item" in O(1)?',"Each char is pushed and popped at most once — that is the O(n) argument."],code:{javascript:`function removeDuplicates(s) {
  const stack = [];
  for (const c of s) {
    if (stack.length && stack[stack.length - 1] === c) stack.pop();
    else stack.push(c);
  }
  return stack.join('');
}`,python:`def removeDuplicates(s):
    stack = []
    for c in s:
        if stack and stack[-1] == c:
            stack.pop()
        else:
            stack.append(c)
    return ''.join(stack)`,java:"",cpp:""}},{id:"st-02",slug:"balanced-parentheses",title:"Balanced Parentheses",pattern:"stack",difficulty:"Easy",platform:"LeetCode",url:"https://leetcode.com/problems/valid-parentheses/",extra:[],summary:"Given a string of brackets ( ) [ ] { }, decide whether it is valid: every opener closes with the matching type in the correct order.",asked:"Return true if the bracket string is well-formed.",why:"The closer must match the MOST RECENT unclosed opener — LIFO. Push openers, pop and compare on closers, and the stack must be empty at the end.",clues:["matching brackets","nested structure","valid or not"],brute:{idea:"Repeatedly remove innermost matched pairs until none remain.",time:"O(n²)",space:"O(n)"},optimal:{idea:"Stack of openers. For each char: push if opener. If closer: pop; if stack empty or the popped opener does not match → invalid. At the end: valid iff the stack is empty.",steps:["map: ) → (, ] → [, } → {.","For each c:","If c is an opener: push it.","If c is a closer: if stack empty or stack.pop() !== map[c] → return false.","Return stack.length === 0."],time:"O(n)",space:"O(n)"},dry:['s = "{[]}"',"Open { → push → stack: [ { ]","Open [ → push → stack: [ {, [ ]","Closer ] → pop [ → matches ✓ → stack: [ { ]","Closer } → pop { → matches ✓ → stack: []","Empty stack → Answer: true",'Counter: "([)]": at ) the top is [ → mismatch → false'],hints:["Which opener must a closer match? (the most recent unclosed one)","What two failures at a closer mean invalid? (no opener / wrong type)","What does a NON-empty stack at the end mean?"],code:{javascript:`function isValid(s) {
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
}`,python:`def isValid(s):
    pair = {')': '(', ']': '[', '}': '{'}
    openers = set('([{')
    stack = []
    for c in s:
        if c in openers:
            stack.append(c)
        else:
            if not stack or stack.pop() != pair[c]:
                return False
    return not stack`,java:"",cpp:""}},{id:"st-03",slug:"reverse-a-string",title:"Reverse a String",pattern:"stack",difficulty:"Easy",platform:"LeetCode",url:"https://leetcode.com/problems/reverse-string/",extra:[],summary:"Reverse a string in place (modify the character array / list).",asked:"Return the string with characters in reverse order — classically done with two pointers or a stack.",why:"A stack reads the string front-to-back and pops it back out back-to-front — a minimal illustration of LIFO reversal.",clues:["reverse order","in place","character array"],brute:{idea:"Push all chars onto a stack, pop into the result (O(n) space).",time:"O(n)",space:"O(n)"},optimal:{idea:"Two pointers from both ends, swapping as they meet. (The stack version works too — push all, pop all — but two pointers use O(1) space.)",steps:["left = 0, right = n - 1.","While left < right: swap s[left] and s[right]; left++; right--.","Return s."],time:"O(n)",space:"O(1)"},dry:['s = ["h", "e", "l", "l", "o"]',"swap o↔h → [o,e,l,l,h]","swap l↔e → [o,l,l,e,h]","pointers meet at l → stop",'Answer: "olleh"'],hints:["The first character becomes the last — which pairs up with what?","Two pointers moving inward swap a matching pair each step.","Stop when the pointers meet (middle char of an odd-length string swaps with itself)."],code:{javascript:`function reverseString(s) {
  let l = 0, r = s.length - 1;
  while (l < r) {
    [s[l], s[r]] = [s[r], s[l]];
    l++;
    r--;
  }
}`,python:`def reverseString(s):
    l, r = 0, len(s) - 1
    while l < r:
        s[l], s[r] = s[r], s[l]
        l += 1
        r -= 1`,java:"",cpp:""}},{id:"st-04",slug:"next-greater-element",title:"Next Greater Element",pattern:"stack",difficulty:"Easy",platform:"LeetCode",url:"https://leetcode.com/problems/next-greater-element-ii/",extra:[],summary:"For each element in a circular array, find the next greater element (searching forward, wrapping around). Return -1 when none is greater.",asked:"An array of the same size: result[i] = first element strictly greater than nums[i] encountered by moving forward with wrap-around, else -1.",why:'Monotonic stack: each element waits on the stack until a bigger element arrives — that arrival is its "next greater". For the circular case, walk 2n positions (or a second pass).',clues:["next greater","circular / wrap around","for each element"],brute:{idea:"For each i, scan forward up to n steps looking for a bigger value.",time:"O(n²)",space:"O(1)"},optimal:{idea:"Stack of indices with decreasing values. For position i (0..2n-1, value nums[i % n]): while the stack top's value < current, answer[top] = current and pop. Push i only for i < n (first lap). Leftover stack entries get -1.",steps:["ans = array of -1; stack = [].","For i from 0 to 2n - 1: x = nums[i % n].","While stack non-empty and nums[stack.top] < x: ans[stack.pop()] = x.","If i < n: stack.push(i).","Return ans."],time:"O(n)",space:"O(n)"},dry:["nums = [1, 2, 1]","i=0 (1): stack [0]","i=1 (2): 1 < 2 → ans[0] = 2, pop; push 1 → [1]","i=2 (1): 2 > 1 no pop; push 2 → [1,2]","i=3 (1): no pop (lap 2, no push)","i=4 (2): nums[2]=1 < 2 → ans[2]=2 pop; nums[1]=2 < 2? no","ans = [2, -1, 2] ✓ (the 2 has no greater element)"],hints:['An element "resolves" the moment a strictly greater value appears after it.',"Keep the stack of UNRESOLVED elements — always decreasing.","For the circular case, a second lap gives wrapped-around answers for what the first lap couldn't resolve."],code:{javascript:`function nextGreaterElements(nums) {
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
}`,python:`def nextGreaterElements(nums):
    n = len(nums)
    ans = [-1] * n
    stack = []
    for i in range(2 * n):
        x = nums[i % n]
        while stack and nums[stack[-1]] < x:
            ans[stack.pop()] = x
        if i < n:
            stack.append(i)
    return ans`,java:"",cpp:""}},{id:"st-05",slug:"daily-temperatures",title:"Daily Temperatures",pattern:"stack",difficulty:"Easy",platform:"LeetCode",url:"https://leetcode.com/problems/daily-temperatures/",extra:[],summary:"Given daily temperatures, for each day find how many days until a STRICTLY warmer day. Return 0 if no warmer day comes.",asked:"result[i] = (j - i) where j is the first index after i with temperatures[j] > temperatures[i], else 0.",why:"Textbook monotonic stack: each day waits on the stack until a warmer day arrives; the day the warmer temperature comes, all cooler waiting days get their answer.",clues:["days until warmer","next greater (distance)","per-element answer"],brute:{idea:"For each day, scan forward until a warmer day is found.",time:"O(n²)",space:"O(1)"},optimal:{idea:"Stack of indices with non-increasing temperatures. For day i: while the stack top is colder than temps[i], answer[top] = i - top and pop. Push i.",steps:["ans = zeros(n); stack = [].","For i, t in temps:","While stack non-empty and temps[stack.top] < t: ans[stack.top] = i - stack.top; pop.","Push i.","Return ans (unresolved days stay 0)."],time:"O(n)",space:"O(n)"},dry:["temps = [73, 74, 75, 71, 69, 72, 76, 73]","i=0 (73): push → [0]","i=1 (74): 73 < 74 → ans[0]=1; push 1 → [1]","i=2 (75): 74 < 75 → ans[1]=1; push 2 → [2]","i=3 (71): push → [2,3]","i=4 (69): push → [2,3,4]","i=5 (72): 69<72 → ans[4]=1; 71<72 → ans[3]=2; push 5 → [2,5]","i=6 (76): 72<76 → ans[5]=1; 75<76 → ans[2]=4; push 6 → [6]","i=7 (73): push → [6,7]","Answer: [1,1,4,2,1,1,0,0]"],hints:["A day's answer is decided by the NEXT day that is warmer.",'Keep only days that are still "waiting" — why must their temperatures be non-increasing?',"The distance is simply (current index - waited index)."],code:{javascript:`function dailyTemperatures(temps) {
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
}`,python:`def dailyTemperatures(temps):
    n = len(temps)
    ans = [0] * n
    stack = []
    for i, t in enumerate(temps):
        while stack and temps[stack[-1]] < t:
            j = stack.pop()
            ans[j] = i - j
        stack.append(i)
    return ans`,java:"",cpp:""}},{id:"st-06",slug:"remove-nodes-from-linked-list",title:"Remove Nodes From Linked List",pattern:"stack",difficulty:"Easy",platform:"LeetCode",url:"https://leetcode.com/problems/remove-nodes-from-linked-list/",extra:[],summary:"Remove every node that has a STRICTLY greater node somewhere to its right. Return the head of the filtered list.",asked:"Keep only the nodes that are the maximum of their suffix (strictly: a node is removed if ANY later node is bigger).",why:"Read the list into a stack of nodes: when a bigger node arrives, pop every smaller node on top (it is doomed). What remains, in order, is the answer.",clues:["remove if a greater node to the right","keep suffix maxima","linked list"],brute:{idea:"For each node, scan its suffix for a greater value; unlink if found.",time:"O(n²)",space:"O(1)"},optimal:{idea:"Stack of nodes (or values). For each node: while the stack top's value < current value, pop (removed). Push current. Finally, stitch the surviving nodes in stack order.",steps:["stack = [].","For each node in the list:","While stack non-empty and stack.top.val < node.val: pop.","Push node.","Set .next along the remaining stack nodes; terminate with null.","Return the bottom of the stack."],time:"O(n)",space:"O(n)"},dry:["List: 5 → 2 → 13 → 3 → 8","5 → stack [5]","2 → [5,2]","13 → 2 < 13 pop; 5 < 13 pop; push → [13]","3 → [13,3]","8 → 3 < 8 pop; push → [13,8]","Survivors: 13 → 8 → null ✓"],hints:['A node is removed exactly when a later node is bigger — who "announces" that removal?',"Process left to right, keeping a stack of nodes that are still safe so far.","The final stack order (bottom to top) IS the answer list."],code:{javascript:`function removeNodes(head) {
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
}`,python:`def removeNodes(head):
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
    return stack[0]`,java:"",cpp:""}},{id:"st-07",slug:"remove-all-adjacent-duplicates-in-string-ii",title:"Remove All Adjacent Duplicates in String II",pattern:"stack",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/",extra:[],summary:"K adjacent identical characters delete each other, repeatedly. Return the final string.",asked:"Whenever a run of exactly k equal adjacent characters appears, erase it; cascade until stable.",why:"Stack of (char, count): each char increments the top run, or starts a new one. When a run reaches k, the whole entry pops — and the cascade is automatic because the previous entry becomes the top again.",clues:["k adjacent duplicates","cascade removal","string"],brute:{idea:"Repeatedly scan and remove runs of k until no change.",time:"O(n²)",space:"O(n)"},optimal:{idea:"Stack entries [char, count]. For c: if top is c, increment; else push [c,1]. If top count === k, pop. Join the survivors.",steps:["stack = [].","For each c:","If top && top[0] === c: top[1]++.","Else push [c, 1].","If top[1] === k: pop.","Return the concatenation of remaining [char × count]."],time:"O(n)",space:"O(n)"},dry:['s = "deeedbbcccbdaa", k = 3',"d[1], e[1], e[2], e[3]→pop → [d[1]]","d[2], b[1], b[2], c[1], c[2], c[3]→pop → [d[2], b[2]]","b[3]→pop → [d[2]]","d[3]→pop → []","a[1], a[2]",'Answer: "aa"'],hints:["Track RUNS, not single characters — why?","A run that hits k vanishes, and the run BEFORE it becomes the active top again.","That second point is why cascades happen for free with a stack."],code:{javascript:`function removeDuplicates(s, k) {
  const stack = [];
  for (const c of s) {
    const top = stack[stack.length - 1];
    if (top && top[0] === c) top[1]++;
    else stack.push([c, 1]);
    if (top && top[1] === k) stack.pop();
  }
  return stack.map(([c, n]) => c.repeat(n)).join('');
}`,python:`def removeDuplicates(s, k):
    stack = []
    for c in s:
        if stack and stack[-1][0] == c:
            stack[-1][1] += 1
        else:
            stack.append([c, 1])
        if stack[-1][1] == k:
            stack.pop()
    return ''.join(c * n for c, n in stack)`,java:"",cpp:""}},{id:"st-08",slug:"simplify-path",title:"Simplify Path",pattern:"stack",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/simplify-path/",extra:[],summary:"Convert an absolute Unix path (with ., .., multiple slashes) into its canonical form.",asked:'Rules: "/" is root, "." is stay, ".." goes up one level (root stays root), extra slashes collapse. Return the canonical path.',why:'A stack of directory names: a component pushes, ".." pops (when possible), "." and empty tokens do nothing. The join of the stack is the answer.',clues:["absolute path",".. goes up","canonical form"],brute:{idea:"Parse components, simulate on an array with splice operations.",time:"O(n)",space:"O(n)"},optimal:{idea:'Split on "/", iterate tokens: skip "" and "."; pop on ".." if the stack is non-empty; push other tokens. Return "/" + stack.join("/").',steps:['parts = path.split("/"); stack = [].',"For each part:",'If part is "" or ".": continue.','If part === "..": pop if stack non-empty.',"Else: push part.",'Return "/" + stack.join("/") (just "/" if empty).'],time:"O(n)",space:"O(n)"},dry:['path = "/a/./b/../../c"','parts: ["", "a", ".", "b", "..", "..", "c"]','"" skip; "a" push → [a]; "." skip; "b" push → [a,b]','".." pop → [a]; ".." pop → []; "c" push → [c]','Answer: "/c"'],hints:["Which tokens change the current directory, and which are no-ops?",'".." at the root is a no-op — guard the pop.',"The stack contents at the end are exactly the canonical components."],code:{javascript:`function simplifyPath(path) {
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
}`,python:`def simplifyPath(path):
    stack = []
    for part in path.split('/'):
        if part == '' or part == '.':
            continue
        if part == '..':
            if stack:
                stack.pop()
        else:
            stack.append(part)
    return '/' + '/'.join(stack)`,java:"",cpp:""}},{id:"st-09",slug:"remove-k-digits",title:"Remove K Digits",pattern:"stack",difficulty:"Hard",platform:"LeetCode",url:"https://leetcode.com/problems/remove-k-digits/",extra:[],summary:'Given a number as a string and an integer k, remove exactly k digits to get the SMALLEST possible number (no leading zeros, empty → "0").',asked:"Return the lexicographically/numerically smallest string after deleting exactly k digits.",why:"Greedy with a monotonic (increasing) stack: to minimize, delete a digit whenever a SMALLER digit follows it. Pop while num < top and k > 0. Leftover k are removed from the tail (largest place-value positions among what remains).",clues:["smallest number","remove exactly k digits","string arithmetic"],brute:{idea:"Try combinations of k deletions and compare.",time:"O(C(n,k) · n)",space:"O(n)"},optimal:{idea:'Walk the digits; push onto an increasing stack, but first pop while (k > 0 && top > current) — removing a bigger earlier digit in favor of a smaller one lowers the number. After the walk, drop any remaining k from the END. Strip leading zeros; empty → "0".',steps:["stack = []; k remaining = K.","For each digit d:","While k > 0 and stack non-empty and stack.top > d: pop; k--.","Push d.","If k > 0: truncate the last k digits from the stack.",'Result = stack.join("") with leading zeros stripped, or "0".'],time:"O(n)",space:"O(n)"},dry:['num = "1432219", k = 3',"1 → [1]","4 → 1<4 keep → [1,4]","3 → 4>3 pop (k=2); 1<3 keep → [1,3]","2 → 3>2 pop (k=1); 1<2 keep → [1,2]","2 → equal, keep → [1,2,2]","1 → 2>1 pop (k=0); keep → [1,2,1]","9 → [1,2,1,9]",'Answer: "1219"'],hints:["Which digit deletion lowers the number the MOST? (the first place where a decrease happens)","A digit should be removed if a smaller digit comes right after it — use a stack to find those places.","If deletions remain after the pass, they must come from the END (the number is non-decreasing there)."],code:{javascript:`function removeKDigits(num, k) {
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
}`,python:`def removeKDigits(num, k):
    stack = []
    for d in num:
        while k > 0 and stack and stack[-1] > d:
            stack.pop()
            k -= 1
        stack.append(d)
    if k > 0:
        stack = stack[:-k] if k < len(stack) else []
    res = ''.join(stack).lstrip('0')
    return res if res else '0'`,java:"",cpp:""}}],nt=[{id:"hm-01",slug:"first-non-repeating-character",title:"First Non-repeating Character",pattern:"hash-maps",difficulty:"Easy",platform:"LeetCode",url:"https://leetcode.com/problems/first-unique-character-in-a-string/",extra:[],summary:"Find the first character in a string that appears exactly once. Return its index, or -1 if none exists.",asked:"The earliest index whose character has total frequency 1.",why:"One frequency pass (hash map), then one scan in original order — order matters, so you cannot just return the first key with count 1 from the map.",clues:["first unique","frequency exactly 1","index"],brute:{idea:"For each character, count its occurrences across the whole string.",time:"O(n²)",space:"O(1)"},optimal:{idea:"Count all frequencies with a map in pass 1. In pass 2 (left to right), return the first index whose count is 1.",steps:["freq = {}; for each c: freq[c]++.","For i, c in s (in order): if freq[c] === 1, return i.","Return -1."],time:"O(n)",space:"O(1)"},dry:['s = "loveleetcode"',"freq: l:2, o:1, v:1, e:4, t:1, c:1, d:1","Scan: l(2) skip, o(1) → index 1","Answer: 1"],hints:["Two separate concerns: FREQUENCY (any order) and FIRST (left to right).","Count everything first, then scan in original order.",'Maps do not guarantee insertion-safe "first" logic here — the second scan does.'],code:{javascript:`function firstUniqChar(s) {
  const freq = {};
  for (const c of s) freq[c] = (freq[c] || 0) + 1;
  for (let i = 0; i < s.length; i++) {
    if (freq[s[i]] === 1) return i;
  }
  return -1;
}`,python:`def firstUniqChar(s):
    from collections import Counter
    freq = Counter(s)
    for i, c in enumerate(s):
        if freq[c] == 1:
            return i
    return -1`,java:"",cpp:""}},{id:"hm-02",slug:"maximum-number-of-balloons",title:"Maximum Number of Balloons",pattern:"hash-maps",difficulty:"Easy",platform:"LeetCode",url:"https://leetcode.com/problems/maximum-number-of-balloons/",extra:[],summary:'Given a text string, find how many times the word "balloon" can be formed using its characters (each used once).',asked:'Return the maximum number of complete "balloon" words from the letter multiset of the text.',why:"Count available letters (hash map), then the answer is the minimum over required letters of floor(available / needed) — note l and o are needed TWICE each.",clues:["form a word from letters","count-based limit","how many times"],brute:{idea:"Simulate forming one balloon at a time, removing used letters.",time:"O(n · answer)",space:"O(n)"},optimal:{idea:"freq = letter counts of text. needed = {b:1, a:1, l:2, o:2, n:1}. answer = min over each letter of floor(freq[letter] / needed).",steps:["Count every character of text into freq.","For each required letter and count: ans = min(ans, floor(freq[letter] / count)).","Return ans (missing letters count as 0)."],time:"O(n)",space:"O(1)"},dry:['text = "nlaebolko"',"freq: n:2, l:2, a:1, e:1, b:1, o:2","b: floor(1/1)=1; a: floor(1/1)=1; l: floor(2/2)=1; o: floor(2/2)=1; n: floor(2/1)=2","Answer: min = 1"],hints:['Which letters does "balloon" actually need? (count each letter in it)',"The scarcest required letter (per copy) sets the upper bound.","Divide available by needed-per-word, not by 1."],code:{javascript:`function maxNumberOfBalloons(text) {
  const freq = {};
  for (const c of text) freq[c] = (freq[c] || 0) + 1;
  const need = { b: 1, a: 1, l: 2, o: 2, n: 1 };
  let ans = Infinity;
  for (const [ch, count] of Object.entries(need)) {
    ans = Math.min(ans, Math.floor((freq[ch] || 0) / count));
  }
  return ans;
}`,python:`def maxNumberOfBalloons(text):
    from collections import Counter
    freq = Counter(text)
    need = {'b': 1, 'a': 1, 'l': 2, 'o': 2, 'n': 1}
    return min(freq.get(ch, 0) // count for ch, count in need.items())`,java:"",cpp:""}},{id:"hm-03",slug:"longest-palindrome",title:"Longest Palindrome",pattern:"hash-maps",difficulty:"Easy",platform:"LeetCode",url:"https://leetcode.com/problems/longest-palindrome/",extra:[],summary:"Given a string, find the length of the longest palindrome that can be built using its characters (arrangement free).",asked:"Rearrange any subset of the letters into the longest possible palindrome; return its length.",why:"Frequency parity decides everything: pairs (2k) can always be placed symmetrically; at most ONE odd-count letter may sit in the center.",clues:["longest palindrome from letters","rearrange","frequency parity"],brute:{idea:"Try subsets / construct greedily and verify — messy.",time:"O(n·alphabet)",space:"O(1)"},optimal:{idea:"Count frequencies. Sum floor(freq/2)*2 for every letter. If any letter has an odd count, add 1 for the center.",steps:["freq = letter counts.","length = Σ floor(freq[c] / 2) * 2.","If any freq[c] is odd: length += 1.","Return length."],time:"O(n)",space:"O(1)"},dry:['s = "abccccdd"',"freq: a:1, b:1, c:4, d:2","pairs: a→0, b→0, c→4, d→2 → 6","Odd counts exist (a, b) → +1 center",'Answer: 7 (e.g. "dccaccd")'],hints:["How many letters of the same kind can a palindrome hold on one side?","The center slot is the only place an odd count can survive.","Even if many letters have odd counts, only ONE gets the center."],code:{javascript:`function longestPalindrome(s) {
  const freq = {};
  for (const c of s) freq[c] = (freq[c] || 0) + 1;
  let length = 0, hasOdd = false;
  for (const count of Object.values(freq)) {
    length += Math.floor(count / 2) * 2;
    if (count % 2 === 1) hasOdd = true;
  }
  if (hasOdd) length += 1;
  return length;
}`,python:`def longestPalindrome(s):
    from collections import Counter
    freq = Counter(s)
    length = sum(c // 2 * 2 for c in freq.values())
    if any(c % 2 == 1 for c in freq.values()):
        length += 1
    return length`,java:"",cpp:""}},{id:"hm-04",slug:"ransom-note",title:"Ransom Note",pattern:"hash-maps",difficulty:"Easy",platform:"LeetCode",url:"https://leetcode.com/problems/ransom-note/",extra:[],summary:"Decide whether the ransom note can be constructed by cutting letters from the magazine string (each magazine letter used once).",asked:"Return true if every character of the note has enough copies available in the magazine.",why:'Classic frequency comparison: count the magazine, then "spend" one copy per note character — fail the moment a letter runs out.',clues:["can we build from letters","each letter once","two strings"],brute:{idea:"For each note char, find and remove it from the magazine string.",time:"O(n·m)",space:"O(m)"},optimal:{idea:"Count the magazine into a map. For each note character: if the map count is 0 → false; else decrement. True at the end.",steps:["avail = character counts of magazine.","For each c in note:","If !avail[c] → return false.","avail[c]--.","Return true."],time:"O(n + m)",space:"O(1)"},dry:['note = "aa", magazine = "aab"',"avail: a:2, b:1","note a: avail[a]=2 → 1","note a: avail[a]=1 → 0","Answer: true",'Counter: note="baa", magazine="b" → at second a, avail[a]=0 → false'],hints:["Model it as spending from a limited supply.","One pass over the magazine, one pass over the note.","The first shortage is enough to return false early."],code:{javascript:`function canConstruct(note, magazine) {
  const avail = {};
  for (const c of magazine) avail[c] = (avail[c] || 0) + 1;
  for (const c of note) {
    if (!avail[c]) return false;
    avail[c]--;
  }
  return true;
}`,python:`def canConstruct(note, magazine):
    from collections import Counter
    avail = Counter(magazine)
    for c in note:
        if avail[c] <= 0:
            return False
        avail[c] -= 1
    return True`,java:"",cpp:""}}],it=[{id:"bs-01",slug:"binary-search-basic",title:"Binary Search Basic",pattern:"binary-search",difficulty:"Easy",platform:"LeetCode",url:"https://leetcode.com/problems/binary-search/",extra:[],summary:"Given a sorted (ascending, unique) array and a target, return the index of the target or -1 if not present.",asked:"O(log n) search: find the target's position in the sorted array.",why:"This IS the pattern: compare the middle, then the answer must lie in one half or the other — discard half each step.",clues:["sorted array","find target","O(log n)"],brute:{idea:"Linear scan from the start.",time:"O(n)",space:"O(1)"},optimal:{idea:"lo, hi bound the search range. mid = floor((lo+hi)/2). If arr[mid] === target, done; if smaller, the target (if anywhere) is right of mid; else left of mid. Repeat.",steps:["lo = 0, hi = n - 1.","While lo <= hi:","mid = (lo + hi) >> 1.","If arr[mid] === target: return mid.","If arr[mid] < target: lo = mid + 1. Else: hi = mid - 1.","Return -1."],time:"O(log n)",space:"O(1)"},dry:["arr = [-1, 0, 3, 5, 9, 12], target = 9","lo=0, hi=5 → mid=2, arr[2]=3 < 9 → lo=3","lo=3, hi=5 → mid=4, arr[4]=9 ✓","Answer: 4","target = 2: mid=2 (3) → hi=1; mid=0 (-1) → lo=1; mid=1 (0) → lo=2; lo>hi → -1"],hints:["Why does arr[mid] < target guarantee the target is NOT at mid or left of mid?","The invariant: the answer (if it exists) is always inside [lo, hi].","lo = mid + 1, hi = mid - 1 — why not just mid?"],code:{javascript:`function search(nums, target) {
  let lo = 0, hi = nums.length - 1;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) lo = mid + 1;
    else hi = mid - 1;
  }
  return -1;
}`,python:`def search(nums, target):
    lo, hi = 0, len(nums) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if nums[mid] == target:
            return mid
        if nums[mid] < target:
            lo = mid + 1
        else:
            hi = mid - 1
    return -1`,java:`class Solution {
    public int search(int[] nums, int target) {
        int lo = 0, hi = nums.length - 1;
        while (lo <= hi) {
            int mid = (lo + hi) >>> 1;
            if (nums[mid] == target) return mid;
            if (nums[mid] < target) lo = mid + 1;
            else hi = mid - 1;
        }
        return -1;
    }
}`,cpp:`int search(vector<int>& nums, int target) {
    int lo = 0, hi = (int)nums.size() - 1;
    while (lo <= hi) {
        int mid = lo + (hi - lo) / 2;
        if (nums[mid] == target) return mid;
        if (nums[mid] < target) lo = mid + 1;
        else hi = mid - 1;
    }
    return -1;
}`}},{id:"bs-02",slug:"upper-bound-ceiling",title:"Upper Bound / Ceiling",pattern:"binary-search",difficulty:"Easy",platform:"GeeksforGeeks",url:"https://www.geeksforgeeks.org/problems/ceil-in-a-sorted-array/1",extra:[],summary:"In a sorted array, find the ceiling of a number: the smallest element that is greater than or equal to the target. Return -1 if none.",asked:"Return the smallest arr[i] such that arr[i] >= target, else -1.",why:'Binary search for a BOUNDARY: find the first position where the predicate "arr[i] >= target" becomes true.',clues:["smallest element ≥ target","ceiling","boundary search"],brute:{idea:"Linear scan for the first element ≥ target.",time:"O(n)",space:"O(1)"},optimal:{idea:"Search the first index where arr[mid] >= target: when arr[mid] >= target, hi = mid (mid itself could be the answer); else lo = mid + 1. At the end, lo is the ceiling index.",steps:["lo = 0, hi = n - 1, ans = -1.","While lo <= hi:","mid = (lo + hi) >> 1.","If arr[mid] >= target: ans = mid; hi = mid - 1 (look for an earlier one).","Else lo = mid + 1.","Return ans === -1 ? -1 : arr[ans]."],time:"O(log n)",space:"O(1)"},dry:["arr = [1, 2, 8, 10, 10, 12, 70], target = 6","lo=0, hi=6 → mid=3, 10 >= 6 → ans=3, hi=2","mid=1, 2 >= 6? no → lo=2","mid=2, 8 >= 6 → ans=2, hi=1 → stop","Answer: 8","target = 100: all fail → ans stays -1 → return -1"],hints:['Reframe: find the FIRST index where "arr[i] >= target" is true.',"When the predicate is true at mid, the answer could still be LEFT of mid — move hi, not lo.","Track the best candidate seen so far (ans)."],code:{javascript:`function ceilInSorted(arr, target) {
  let lo = 0, hi = arr.length - 1, ans = -1;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    if (arr[mid] >= target) {
      ans = mid;
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  return ans === -1 ? -1 : arr[ans];
}`,python:`def ceilInSorted(arr, target):
    lo, hi, ans = 0, len(arr) - 1, -1
    while lo <= hi:
        mid = (lo + hi) // 2
        if arr[mid] >= target:
            ans = mid
            hi = mid - 1
        else:
            lo = mid + 1
    return -1 if ans == -1 else arr[ans]`,java:"",cpp:""}},{id:"bs-03",slug:"first-and-last-position",title:"First and Last Position",pattern:"binary-search",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",extra:[],summary:"Given a sorted array with duplicates, find the first and last position of the target in O(log n). Return [-1, -1] if absent.",asked:"Both boundary indices of the target, or [-1, -1].",why:"Two boundary searches: the first index where arr[i] >= target (left boundary) and the first index where arr[i] > target (right boundary + 1).",clues:["first and last occurrence","duplicates","O(log n)"],brute:{idea:"Find one occurrence, then expand left and right.",time:"O(n) worst",space:"O(1)"},optimal:{idea:"lowerBound(t) = first i with arr[i] >= t; upperBound(t) = first i with arr[i] > t. Answer = [lowerBound(t), upperBound(t) - 1], if arr[lower] === t.",steps:["Write a helper bound(t, isUpper): first index with arr[i] > t (upper) or >= t (lower).","lo = bound(t, false); hi = bound(t, true) - 1.","If lo > hi or arr[lo] !== t: return [-1, -1].","Return [lo, hi]."],time:"O(log n)",space:"O(1)"},dry:["arr = [5, 7, 7, 8, 8, 10], target = 8","lowerBound(8): first ≥ 8 → index 3","upperBound(8): first > 8 → index 5","Answer: [3, 4]","target = 6: lowerBound → 3 but arr[3]=8 ≠ 6 → [-1, -1]"],hints:["Do NOT find-the-target then scan — that is O(n) in the worst case.","Two classic boundary functions answer everything: first ≥ t, first > t.","The target exists iff arr[lowerBound(t)] === t."],code:{javascript:`function searchRange(nums, target) {
  const firstGreaterOrEqual = (t) => {
    let lo = 0, hi = nums.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (nums[mid] < t) lo = mid + 1;
      else hi = mid;
    }
    return lo;
  };
  const firstGreater = (t) => {
    let lo = 0, hi = nums.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (nums[mid] <= t) lo = mid + 1;
      else hi = mid;
    }
    return lo;
  };
  const lo = firstGreaterOrEqual(target);
  const hi = firstGreater(target) - 1;
  return lo <= hi && nums[lo] === target ? [lo, hi] : [-1, -1];
}`,python:`def searchRange(nums, target):
    def first_ge(t):
        lo, hi = 0, len(nums)
        while lo < hi:
            mid = (lo + hi) // 2
            if nums[mid] < t:
                lo = mid + 1
            else:
                hi = mid
        return lo
    def first_gt(t):
        lo, hi = 0, len(nums)
        while lo < hi:
            mid = (lo + hi) // 2
            if nums[mid] <= t:
                lo = mid + 1
            else:
                hi = mid
        return lo
    lo = first_ge(target)
    hi = first_gt(target) - 1
    return [lo, hi] if lo <= hi and nums[lo] == target else [-1, -1]`,java:"",cpp:""}},{id:"bs-04",slug:"count-number-of-occurrences",title:"Count Number of Occurrences",pattern:"binary-search",difficulty:"Easy",platform:"GeeksforGeeks",url:"https://www.geeksforgeeks.org/problems/number-of-occurrence2259/1",extra:[],summary:"Given a sorted array and a key, count how many times the key appears in O(log n).",asked:"Frequency of the key in the sorted array (return -1 style per GFG if not present: return 0 or per platform).",why:"Count = (first index > key) - (first index ≥ key). Two boundary binary searches, no scanning.",clues:["count occurrences","sorted array","O(log n)"],brute:{idea:"Linear scan counting matches.",time:"O(n)",space:"O(1)"},optimal:{idea:"upperBound(key) - lowerBound(key) is exactly the number of keys in the array.",steps:["lower = first index with arr[i] >= key.","upper = first index with arr[i] > key.","Return upper - lower (0 if key absent)."],time:"O(log n)",space:"O(1)"},dry:["arr = [1, 1, 2, 2, 3, 4, 4, 5], key = 2","lowerBound(2) = 2","upperBound(2) = 4","Answer: 4 - 2 = 2","key = 6: lower = 8, upper = 8 → 0"],hints:["You already know how to find the first ≥ and first > of a value.","The gap between those two positions is the count.","No loops over the run of keys — that would be O(count)."],code:{javascript:`function countOccurences(arr, key) {
  const n = arr.length;
  const firstGE = () => {
    let lo = 0, hi = n;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (arr[mid] < key) lo = mid + 1;
      else hi = mid;
    }
    return lo;
  };
  const firstGT = () => {
    let lo = 0, hi = n;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (arr[mid] <= key) lo = mid + 1;
      else hi = mid;
    }
    return lo;
  };
  return firstGT() - firstGE();
}`,python:`def countOccurences(arr, key):
    n = len(arr)
    def first_ge():
        lo, hi = 0, n
        while lo < hi:
            mid = (lo + hi) // 2
            if arr[mid] < key: lo = mid + 1
            else: hi = mid
        return lo
    def first_gt():
        lo, hi = 0, n
        while lo < hi:
            mid = (lo + hi) // 2
            if arr[mid] <= key: lo = mid + 1
            else: hi = mid
        return lo
    return first_gt() - first_ge()`,java:"",cpp:""}},{id:"bs-05",slug:"search-in-infinite-sorted-array",title:"Search in Infinite Sorted Array",pattern:"binary-search",difficulty:"Medium",platform:"GeeksforGeeks",url:"https://www.geeksforgeeks.org/find-position-element-sorted-array-infinite-numbers/",extra:[],summary:"An unbounded (infinite) sorted array is accessible by index. Find the position of a target value.",asked:"Return the index of the target in an array with no known size, or -1.",why:"First find a finite window that CONTAINS the target by exponentially expanding a right bound (1, 2, 4, 8...), then binary search inside [0, right].",clues:["infinite / unbounded array","index access only","find target"],brute:{idea:"Linear scan from index 0 until the target is found.",time:"O(index)",space:"O(1)"},optimal:{idea:"right = 1; while arr[right] < target: right *= 2. Now the target (if present) is in [0, right]. Binary search that window.",steps:["If arr[0] > target: return -1.","right = 1; while arr[right] < target: right <<= 1.","Binary search in [0, right] for the target.","Return the index or -1."],time:"O(log index)",space:"O(1)"},dry:["Array: [3, 5, 7, 9, 11, 13, ...], target = 11","arr[1]=5 < 11 → right=2; arr[2]=7 < 11 → right=4; arr[4]=11 → stop (window [0,4])","Binary search [0,4]: mid=2 (7) → lo=3; mid=3 (9) → lo=4; arr[4]=11 ✓","Answer: 4"],hints:["You cannot binary search without an upper bound — how do you find one fast?","Doubling the bound costs O(log index) steps total, not O(index).","The window [0, right] is guaranteed to contain the target once arr[right] >= target."],code:{javascript:`function searchInfinite(arr, target) {
  if (arr[0] > target) return -1;
  let right = 1;
  while (arr[right] < target) right <<= 1;
  let lo = 0, hi = right;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) lo = mid + 1;
    else hi = mid - 1;
  }
  return -1;
}`,python:`def searchInfinite(arr, target):
    if arr[0] > target:
        return -1
    right = 1
    while arr[right] < target:
        right <<= 1
    lo, hi = 0, right
    while lo <= hi:
        mid = (lo + hi) // 2
        if arr[mid] == target:
            return mid
        if arr[mid] < target:
            lo = mid + 1
        else:
            hi = mid - 1
    return -1`,java:"",cpp:""}},{id:"bs-06",slug:"peak-index-in-mountain-array",title:"Peak Index in Mountain Array",pattern:"binary-search",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/peak-index-in-a-mountain-array/",extra:[],summary:"A mountain array strictly increases then strictly decreases. Find the index of the peak in O(log n).",asked:"The index of the unique maximum element.",why:"Compare mid with its right neighbor: if arr[mid] < arr[mid+1] we are on the ascending side (peak is right); otherwise the peak is at mid or left.",clues:["mountain / peak","strictly up then down","O(log n)"],brute:{idea:"Linear scan for the local maximum.",time:"O(n)",space:"O(1)"},optimal:{idea:"lo = 0, hi = n - 1. mid: if arr[mid] < arr[mid + 1] the slope is up → lo = mid + 1; else hi = mid. They converge on the peak.",steps:["lo = 0, hi = n - 1.","While lo < hi:","mid = (lo + hi) >> 1.","If arr[mid] < arr[mid + 1]: lo = mid + 1 (climb).","Else: hi = mid (peak at or left of mid).","Return lo."],time:"O(log n)",space:"O(1)"},dry:["arr = [0, 1, 0] → mid=1, arr[1]=1 > arr[2]=0 → hi=1 → lo=hi=1 → Answer: 1","arr = [3, 5, 10, 20, 2]: lo=0,hi=4 mid=2 (10) < 20 → lo=3; mid=3 (20) > 2 → hi=3 → Answer: 3","arr = [0, 3, 1]: mid=1 (3) > 1 → hi=1; mid=0 (0) < 3 → lo=1 → Answer: 1"],hints:["On which side of mid does the peak lie — and what tells you that?","Compare with the RIGHT neighbor to avoid reading arr[mid-1] at the edge.","When arr[mid] > arr[mid+1], the peak is at mid or somewhere left — set hi = mid (not mid-1)."],code:{javascript:`function peakIndexInMountainArray(arr) {
  let lo = 0, hi = arr.length - 1;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (arr[mid] < arr[mid + 1]) lo = mid + 1;
    else hi = mid;
  }
  return lo;
}`,python:`def peakIndexInMountainArray(arr):
    lo, hi = 0, len(arr) - 1
    while lo < hi:
        mid = (lo + hi) // 2
        if arr[mid] < arr[mid + 1]:
            lo = mid + 1
        else:
            hi = mid
    return lo`,java:"",cpp:""}},{id:"bs-07",slug:"find-peak-element",title:"Find Peak Element",pattern:"binary-search",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/find-peak-element/",extra:[],summary:"Given an array where adjacent elements differ, find ANY peak element (greater than its neighbors) in O(log n). Assume nums[-1] = nums[n] = -∞.",asked:"Return the index of any local maximum.",why:"Same slope logic as the mountain array, but with no guarantee of a single mountain — following the uphill direction always terminates at SOME peak.",clues:["any peak","adjacent differ","virtual -infinity borders"],brute:{idea:"Linear scan comparing each element with neighbors.",time:"O(n)",space:"O(1)"},optimal:{idea:"lo = 0, hi = n - 1; mid: if arr[mid] < arr[mid+1] climb right (lo = mid + 1), else the peak is at mid or left (hi = mid). The virtual -∞ borders guarantee a peak exists.",steps:["lo = 0, hi = n - 1.","While lo < hi:","mid = (lo + hi) >> 1.","If arr[mid] < arr[mid + 1]: lo = mid + 1. Else: hi = mid.","Return lo (a peak index)."],time:"O(log n)",space:"O(1)"},dry:["nums = [1, 2, 1, 3, 5, 6, 4]","lo=0,hi=6 mid=3 (3) < 5 → lo=4","mid=5 (6) > 4 → hi=5","mid=4 (5) < 6 → lo=5 → Answer: 5 (value 6)",'Note: index 1 (value 2) is also a peak — "any peak" is accepted.'],hints:["Why can you always just follow the uphill neighbor?","The edges behave like -∞, so an uphill direction can never run off the array.","This is the same code as the mountain peak — the difference is only in the guarantee."],code:{javascript:`function findPeakElement(nums) {
  let lo = 0, hi = nums.length - 1;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (nums[mid] < nums[mid + 1]) lo = mid + 1;
    else hi = mid;
  }
  return lo;
}`,python:`def findPeakElement(nums):
    lo, hi = 0, len(nums) - 1
    while lo < hi:
        mid = (lo + hi) // 2
        if nums[mid] < nums[mid + 1]:
            lo = mid + 1
        else:
            hi = mid
    return lo`,java:"",cpp:""}},{id:"bs-08",slug:"find-minimum-in-rotated-sorted-array",title:"Find Minimum in Rotated Sorted Array",pattern:"binary-search",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",extra:[],summary:"A sorted array of unique elements was rotated at an unknown pivot. Find the minimum element in O(log n).",asked:"The smallest value in the rotated (still strictly increasing in parts) array.",why:"Compare mid with the RIGHT end: if arr[mid] > arr[hi], the minimum is right of mid (the drop is there); otherwise the minimum is at mid or left.",clues:["rotated sorted array","find minimum","unique elements"],brute:{idea:"Linear scan for the minimum.",time:"O(n)",space:"O(1)"},optimal:{idea:"lo = 0, hi = n - 1. While lo < hi: mid. If arr[mid] > arr[hi]: lo = mid + 1 (min is right). Else hi = mid (min at mid or left). Converges on the minimum.",steps:["lo = 0, hi = n - 1.","While lo < hi:","mid = (lo + hi) >> 1.","If arr[mid] > arr[hi]: lo = mid + 1.","Else: hi = mid.","Return arr[lo]."],time:"O(log n)",space:"O(1)"},dry:["arr = [4, 5, 6, 7, 0, 1, 2]","lo=0, hi=6, mid=3 (7) > arr[6]=2 → lo=4","lo=4, hi=6, mid=5 (1) < 2 → hi=5","lo=4, hi=5, mid=4 (0) < 2 → hi=4","Answer: arr[4] = 0","Unrotated [0,1,2,4,5]: mid 2 < 5 → hi=2; mid 1 < 5 → hi=1; mid 0 < 5 → hi=0 → Answer: 0"],hints:['The minimum is at the "drop point" — where does the array go down?',"Compare with arr[hi] (not arr[lo]) — why does that always identify the unsorted half?","If arr[mid] < arr[hi], the right part is sorted, so the min is NOT right of mid."],code:{javascript:`function findMin(arr) {
  let lo = 0, hi = arr.length - 1;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (arr[mid] > arr[hi]) lo = mid + 1;
    else hi = mid;
  }
  return arr[lo];
}`,python:`def findMin(arr):
    lo, hi = 0, len(arr) - 1
    while lo < hi:
        mid = (lo + hi) // 2
        if arr[mid] > arr[hi]:
            lo = mid + 1
        else:
            hi = mid
    return arr[lo]`,java:"",cpp:""}},{id:"bs-09",slug:"find-number-of-rotations",title:"Find Number of Rotations in Sorted Array",pattern:"binary-search",difficulty:"Easy",platform:"GeeksforGeeks",url:"https://www.geeksforgeeks.org/problems/rotation4723/1",extra:[],summary:"Given a sorted array rotated k times, find k (the number of rotations) in O(log n).",asked:"The count of left rotations applied to the original sorted array (i.e., the index of the minimum element).",why:"The rotation count IS the index of the minimum element in a rotated unique-sorted array — same binary search as finding the minimum.",clues:["rotated k times","find k","index of minimum"],brute:{idea:"Find the minimum by scanning.",time:"O(n)",space:"O(1)"},optimal:{idea:"Identical to find-minimum: lo/hi with mid compared to arr[hi]. The converged index is the rotation count.",steps:["lo = 0, hi = n - 1.","While lo < hi: mid; if arr[mid] > arr[hi] → lo = mid + 1 else hi = mid.","Return lo (the number of rotations)."],time:"O(log n)",space:"O(1)"},dry:["arr = [5, 6, 8, 9, 1, 2, 3, 4] (rotated 4 times: [1,2,3,4,5,6,8,9] → [5,6,8,9,1,2,3,4])","lo=0, hi=7, mid=3 (9) > 4 → lo=4","mid=5 (2) < 4 → hi=5","mid=4 (1) < 4 → hi=4","Answer: 4 rotations"],hints:['Where is the "seam" of the rotation? (the index of the smallest element)',"Reuse the minimum-finding logic — the index is the rotation count.","A zero-rotation array returns 0 (minimum at index 0)."],code:{javascript:`function findRotations(arr) {
  let lo = 0, hi = arr.length - 1;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (arr[mid] > arr[hi]) lo = mid + 1;
    else hi = mid;
  }
  return lo;
}`,python:`def findRotations(arr):
    lo, hi = 0, len(arr) - 1
    while lo < hi:
        mid = (lo + hi) // 2
        if arr[mid] > arr[hi]:
            lo = mid + 1
        else:
            hi = mid
    return lo`,java:"",cpp:""}},{id:"bs-10",slug:"search-in-rotated-sorted-array",title:"Search in Rotated Sorted Array",pattern:"binary-search",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/search-in-rotated-sorted-array/",extra:[],summary:"A sorted array of unique elements was rotated at an unknown pivot. Search for a target and return its index, or -1, in O(log n).",asked:"Index of the target in the rotated array, or -1.",why:"At any mid, at least one half (lo..mid or mid..hi) is ALWAYS sorted. Decide which half is sorted, check whether the target lies inside it, and discard the other half.",clues:["rotated sorted array","search target","O(log n)"],brute:{idea:"Linear scan.",time:"O(n)",space:"O(1)"},optimal:{idea:"While lo <= hi: mid. If arr[mid] === target, return mid. Determine which side is sorted: if arr[lo] <= arr[mid], the LEFT is sorted — if target is in [arr[lo], arr[mid]) go left, else right. Symmetrically for the sorted right side.",steps:["lo = 0, hi = n - 1.","While lo <= hi:","mid = (lo + hi) >> 1; if equal, return mid.","If arr[lo] <= arr[mid] (left sorted): if arr[lo] <= target < arr[mid] → hi = mid - 1, else lo = mid + 1.","Else (right sorted): if arr[mid] < target <= arr[hi] → lo = mid + 1, else hi = mid - 1.","Return -1."],time:"O(log n)",space:"O(1)"},dry:["arr = [4, 5, 6, 7, 0, 1, 2], target = 0","lo=0, hi=6, mid=3 (7): left [4..7] sorted; 0 not in [4,7) → lo=4","lo=4, hi=6, mid=5 (1): left [0..1] sorted (arr[4]=0 <= 1); 0 in [0,1)? yes → hi=4","lo=4, hi=4, mid=4 (0) ✓","Answer: 4"],hints:["Why is at least one of [lo..mid] or [mid..hi] always sorted?","arr[lo] <= arr[mid] tells you the LEFT half is sorted (no seam inside it).","Test membership with a half-open interval: [arr[lo], arr[mid])."],code:{javascript:`function search(arr, target) {
  let lo = 0, hi = arr.length - 1;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    if (arr[mid] === target) return mid;
    if (arr[lo] <= arr[mid]) {
      if (arr[lo] <= target && target < arr[mid]) hi = mid - 1;
      else lo = mid + 1;
    } else {
      if (arr[mid] < target && target <= arr[hi]) lo = mid + 1;
      else hi = mid - 1;
    }
  }
  return -1;
}`,python:`def search(arr, target):
    lo, hi = 0, len(arr) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if arr[mid] == target:
            return mid
        if arr[lo] <= arr[mid]:
            if arr[lo] <= target < arr[mid]:
                hi = mid - 1
            else:
                lo = mid + 1
        else:
            if arr[mid] < target <= arr[hi]:
                lo = mid + 1
            else:
                hi = mid - 1
    return -1`,java:"",cpp:""}}],st=[{id:"bs-11",slug:"koko-eating-bananas",title:"Koko Eating Bananas",pattern:"binary-search",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/koko-eating-bananas/",extra:[],summary:"Koko eats bananas at speed K per hour; each hour she picks one pile and eats up to K. Find the minimum K so she finishes all piles within H hours.",asked:"Minimum integer speed K that lets her finish all piles in ≤ H hours.",why:'Classic "minimize the answer" binary search: the predicate "can she finish at speed K?" is MONOTONIC (faster is never worse). Search K in [1, max pile].',clues:["minimum speed to finish in time","monotonic feasibility","binary search on answer"],brute:{idea:"Try every speed from 1 upward until the time fits.",time:"O(n · maxPile)",space:"O(1)"},optimal:{idea:"Binary search K in [1, max(piles)]. Hours needed at speed K = Σ ceil(pile / K). If hours ≤ H, try a smaller K (hi = mid), else lo = mid + 1.",steps:["lo = 1, hi = max pile.","While lo < hi:","mid = (lo + hi) >> 1.","hours = Σ ceil(p / mid).","If hours <= H: hi = mid (K might be smaller). Else lo = mid + 1.","Return lo."],time:"O(n · log(maxPile))",space:"O(1)"},dry:["piles = [31, 11, 23], H = 6","lo=1, hi=31 → mid=16: hours = 2+1+2 = 5 ≤ 6 → hi=16","mid=8: 4+2+3 = 9 > 6 → lo=9","mid=12: 3+1+2 = 6 ≤ 6 → hi=12","mid=10: 4+2+3 = 9 > 6 → lo=11; mid=11: 3+1+3 = 7 > 6 → lo=12","Answer: 12? recheck: at 11 hours=7 >6; at 12 hours=6 ✓ → 12? actually ceil(31/12)=3, ceil(11/12)=1, ceil(23/12)=2 → 6 ✓ → 12","Answer: 12"],hints:["The answer space is a NUMBER (the speed), not an index — binary search the value range.",'Writing the feasibility check "hours(K) ≤ H" is the whole problem.',"Feasibility is monotonic: if K works, every K' > K works."],code:{javascript:`function minEatingSpeed(piles, h) {
  const canFinish = (speed) =>
    piles.reduce((acc, p) => acc + Math.ceil(p / speed), 0) <= h;
  let lo = 1, hi = Math.max(...piles);
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (canFinish(mid)) hi = mid;
    else lo = mid + 1;
  }
  return lo;
}`,python:`def minEatingSpeed(piles, h):
    def can_finish(speed):
        return sum((p + speed - 1) // speed for p in piles) <= h
    lo, hi = 1, max(piles)
    while lo < hi:
        mid = (lo + hi) // 2
        if can_finish(mid):
            hi = mid
        else:
            lo = mid + 1
    return lo`,java:"",cpp:""}},{id:"bs-12",slug:"min-number-of-days-to-make-m-bouquets",title:"Min Number of Days to Make M Bouquets",pattern:"binary-search",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/",extra:[],summary:"Flowers bloom on given days; each bouquet needs k ADJACENT bloomed flowers. Find the minimum day by which M bouquets can be made.",asked:"Smallest day D such that the bloom pattern up to D contains M disjoint adjacent runs of length ≥ k.",why:'"Can we make M bouquets by day D?" is monotonic in D — binary search D in [min bloom, max bloom] and count adjacent bloomed runs per day.',clues:["minimum days","adjacent k flowers per bouquet","monotonic check"],brute:{idea:"Simulate day by day, counting bouquets each day.",time:"O(maxDay · n)",space:"O(1)"},optimal:{idea:"Binary search D. Feasibility: scan the row, tracking a run of consecutive flowers with bloomDay ≤ D; every time the run reaches k, make a bouquet and reset the run. Success if bouquets ≥ M. Early-out if M·K > n.",steps:["If m * k > n: return -1.","lo = min(bloomDay), hi = max(bloomDay).","canMake(D): walk the array; count consecutive d ≤ D; at k, bouquets++, reset.","If canMake(mid): hi = mid else lo = mid + 1.","Return lo."],time:"O(n · log(maxDay))",space:"O(1)"},dry:["bloomDay = [1, 10, 3, 10, 2], m = 3, k = 1","Each flower is its own bouquet → need 3 flowers bloomed → day 3 (flowers at 1,3,2 bloom)","lo=1, hi=10: mid=5 → flowers ≤5: 1,3,2 → 3 bouquets ✓ → hi=5","mid=3 → 3 bouquets ✓ → hi=3; mid=2 → only 2 flowers → lo=3","Answer: 3"],hints:['Search the DAY, not the flowers — the predicate is "bouquets by day D ≥ M".',"A bouquet needs a CONTIGUOUS run — reset your counter when a flower hasn't bloomed.","M*K > n makes it impossible no matter the day."],code:{javascript:`function minDays(bloomDay, m, k) {
  const n = bloomDay.length;
  if (m * k > n) return -1;
  const canMake = (day) => {
    let bouquets = 0, run = 0;
    for (const d of bloomDay) {
      if (d <= day) {
        run++;
        if (run === k) { bouquets++; run = 0; }
      } else run = 0;
    }
    return bouquets >= m;
  };
  let lo = Math.min(...bloomDay), hi = Math.max(...bloomDay);
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (canMake(mid)) hi = mid;
    else lo = mid + 1;
  }
  return lo;
}`,python:`def minDays(bloomDay, m, k):
    n = len(bloomDay)
    if m * k > n:
        return -1
    def can_make(day):
        bouquets = run = 0
        for d in bloomDay:
            if d <= day:
                run += 1
                if run == k:
                    bouquets += 1
                    run = 0
            else:
                run = 0
        return bouquets >= m
    lo, hi = min(bloomDay), max(bloomDay)
    while lo < hi:
        mid = (lo + hi) // 2
        if can_make(mid):
            hi = mid
        else:
            lo = mid + 1
    return lo`,java:"",cpp:""}},{id:"bs-13",slug:"aggressive-cows",title:"Aggressive Cows",pattern:"binary-search",difficulty:"Hard",platform:"GeeksforGeeks",url:"https://www.geeksforgeeks.org/problems/aggressive-cows/1",extra:[],summary:"Place C cows into N stalls (given positions) so that the minimum distance between any two cows is MAXIMIZED. Return that largest minimum distance.",asked:'The maximum possible value of the closest-pair distance (the "maximin" distance).',why:'"Can we place C cows with mutual distance ≥ D?" is monotonic in D — binary search D and greedily place cows at the farthest possible stalls.',clues:["maximize the minimum distance","place items with gap","maximin"],brute:{idea:"Try every pair configuration / every distance D linearly with binary search still needed for the check.",time:"O(n² · C)",space:"O(1)"},optimal:{idea:"Sort stall positions. Binary search D in [1, last - first]. Greedy check: place the first cow at stall 0; then place each next cow at the first stall ≥ last + D. Success if C cows fit.",steps:["Sort positions.","canPlace(D): count = 1, last = pos[0]; for each next stall: if stall - last >= D → place (count++, last = stall); stop early at C.","Binary search: if canPlace(mid) → D = mid, lo = mid + 1 (try bigger); else hi = mid - 1.","Return the best D."],time:"O(n log n + n log(maxDist))",space:"O(1)"},dry:["stalls = [1, 2, 8, 4, 9], C = 3 → sorted [1, 2, 4, 8, 9]","lo=1, hi=8 → mid=4: place 1, then 8 (8-1≥4), then? 9-8<4 → only 2 cows → fail; hi=3","mid=2: 1, 4 (4-1≥2), 8 (8-4≥2) → 3 cows ✓ → D=2, lo=3","mid=3: 1, 4, 8 ✓ → D=3, lo=4; mid=4 fail (shown) → hi=3","Answer: 3"],hints:['"Maximize the MINIMUM" is the signature phrase for binary search on the answer.',"The feasibility check is GREEDY: always place the next cow as early as allowed.","If D works, any smaller D also works — that monotonicity is what you search over."],code:{javascript:`function aggressiveCows(stalls, k) {
  stalls.sort((a, b) => a - b);
  const n = stalls.length;
  const canPlace = (dist) => {
    let count = 1, last = stalls[0];
    for (let i = 1; i < n; i++) {
      if (stalls[i] - last >= dist) {
        count++;
        last = stalls[i];
        if (count === k) return true;
      }
    }
    return false;
  };
  let lo = 1, hi = stalls[n - 1] - stalls[0], ans = 1;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    if (canPlace(mid)) { ans = mid; lo = mid + 1; }
    else hi = mid - 1;
  }
  return ans;
}`,python:`def aggressiveCows(stalls, k):
    stalls.sort()
    n = len(stalls)
    def can_place(dist):
        count, last = 1, stalls[0]
        for i in range(1, n):
            if stalls[i] - last >= dist:
                count += 1
                last = stalls[i]
                if count == k:
                    return True
        return False
    lo, hi, ans = 1, stalls[-1] - stalls[0], 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if can_place(mid):
            ans = mid
            lo = mid + 1
        else:
            hi = mid - 1
    return ans`,java:"",cpp:""}},{id:"bs-14",slug:"h-index-ii",title:"H-Index II",pattern:"binary-search",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/h-index-ii/",extra:[],summary:"Given citation counts SORTED in ascending order (citations[i] = number of citations of paper i), compute the h-index in O(log n).",asked:"The largest h such that at least h papers have ≥ h citations each.",why:"h-index condition in a sorted array: at index i, papers from i to n-1 have ≥ citations[i] citations. We want the first i where citations[i] ≥ n - i — a boundary search.",clues:["sorted citations","h-index","boundary search"],brute:{idea:"Count from the largest citations downward.",time:"O(n)",space:"O(1)"},optimal:{idea:"Find the first index i with citations[i] >= n - i (i.e., from i onward there are n-i papers each with ≥ n-i ≥ citations[i]... condition). The h-index is n - i at that boundary.",steps:["lo = 0, hi = n.","While lo < hi: mid = (lo + hi) >> 1.","If citations[mid] >= n - mid: hi = mid (boundary at mid or earlier).","Else lo = mid + 1.","Return n - lo."],time:"O(log n)",space:"O(1)"},dry:["citations = [0, 1, 3, 5, 6]","n = 5. Check: i=2: citations[2]=3 >= 5-2=3 ✓ → boundary candidate","i=1: 1 >= 4? no → boundary is at i=2","h-index = 5 - 2 = 3 ✓ (3 papers with ≥ 3 citations)","Binary search: lo=0,hi=5 mid=2 (3>=3) hi=2; mid=1 (1>=4? no) lo=2 → answer 5-2=3"],hints:["At index i, the papers i..n-1 all have at least citations[i] citations.",'The condition "citations[i] >= n - i" means h = n - i is achievable.',"You are searching the FIRST index where the condition turns true."],code:{javascript:`function hIndex(citations) {
  const n = citations.length;
  let lo = 0, hi = n;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (citations[mid] >= n - mid) hi = mid;
    else lo = mid + 1;
  }
  return n - lo;
}`,python:`def hIndex(citations):
    n = len(citations)
    lo, hi = 0, n
    while lo < hi:
        mid = (lo + hi) // 2
        if citations[mid] >= n - mid:
            hi = mid
        else:
            lo = mid + 1
    return n - lo`,java:"",cpp:""}},{id:"bs-15",slug:"max-candies-allocated-to-k-children",title:"Max Candies Allocated to K Children",pattern:"binary-search",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/maximum-candies-allocated-to-k-children/",extra:[],summary:"Given piles of candies, allocate to k children the SAME number of candies each, from a single pile per child. Maximize that number.",asked:"The maximum X such that at least k children can each receive X candies (one pile per child).",why:'"Can every child get X?" is monotonic in X — binary search X in [0, total/k] and count piles that can each produce floor(pile / X) portions.',clues:["equal allocation to k","one pile per child","maximize per child"],brute:{idea:"Try X from total/k downward.",time:"O(n · total/k)",space:"O(1)"},optimal:{idea:"Binary search X. Feasibility: Σ floor(pile / X) ≥ k (each pile of size p yields floor(p/X) portions). If feasible, try larger (lo = mid); else hi = mid - 1. Start lo = 0 (always feasible) with the upper-mid variant to avoid infinite loops.",steps:["lo = 0, hi = floor(total / k).","While lo < hi:","mid = (lo + hi + 1) >> 1 (guard against X = 0 division).","portions = Σ floor(p / mid).","If portions >= k: lo = mid. Else hi = mid - 1.","Return lo."],time:"O(n · log(total/k))",space:"O(1)"},dry:["candies = [5, 8, 6], k = 3","total = 19, hi = 6","mid = 3: floor(5/3)+floor(8/3)+floor(6/3) = 1+2+2 = 5 ≥ 3 → lo = 3","mid = 5: 1+1+1 = 3 ≥ 3 → lo = 5","mid = 6: 0+1+1 = 2 < 3 → hi = 5","Answer: 5? check: 5/5=1, 8/5=1, 6/5=1 → 3 children get 5 each ✓"],hints:["Each pile independently produces floor(pile / X) portions — sum them.","Why can one child only come from ONE pile? (the problem constraint)","Use mid = (lo + hi + 1) >> 1 with lo = 0 to avoid division by zero and infinite loops."],code:{javascript:`function maximumCandies(candies, k) {
  const total = candies.reduce((a, b) => a + b, 0);
  let lo = 0, hi = Math.floor(total / k);
  while (lo < hi) {
    const mid = (lo + hi + 1) >> 1;
    const portions = candies.reduce((acc, p) => acc + Math.floor(p / mid), 0);
    if (portions >= k) lo = mid;
    else hi = mid - 1;
  }
  return lo;
}`,python:`def maximumCandies(candies, k):
    total = sum(candies)
    lo, hi = 0, total // k
    while lo < hi:
        mid = (lo + hi + 1) // 2
        portions = sum(p // mid for p in candies)
        if portions >= k:
            lo = mid
        else:
            hi = mid - 1
    return lo`,java:"",cpp:""}},{id:"bs-16",slug:"capacity-to-ship-packages-within-d-days",title:"Capacity to Ship Packages Within D Days",pattern:"binary-search",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/",extra:[],summary:"Packages must be shipped in order, up to capacity C per day. Find the minimum C that ships everything within D days.",asked:"The minimal daily capacity finishing in ≤ D days.",why:'The canonical "minimize the maximum" search: C in [max package, total weight]; feasibility = simulate the days with that capacity.',clues:["minimum capacity in D days","order preserved","minimize the max"],brute:{idea:"Try capacities from max weight upward.",time:"O(n · total)",space:"O(1)"},optimal:{idea:"Binary search C. Simulate: load the current day until adding the next package would exceed C, then start a new day. Success if days used ≤ D. Monotonic: bigger C never uses more days.",steps:["lo = max(weights) (single package must fit), hi = sum(weights).","canShip(C): days = 1, load = 0; for each w: if load + w > C → days++, load = 0; load += w.","If days <= D: hi = mid else lo = mid + 1.","Return lo."],time:"O(n · log(total))",space:"O(1)"},dry:["weights = [1, 2, 3, 4, 5], D = 3","lo = 5, hi = 15","mid = 10: day1 [1,2,3,4] load 10 → day2 [5] → 2 days ≤ 3 ✓ → hi = 10","mid = 7: [1,2,3] then [4] then [5] → 3 days ✓ → hi = 7","mid = 6: [1,2,3] (6), [4], [5] → 3 ✓ → hi = 6","mid = 5: [1,2] [3] [4] [5] → 4 > 3 ✗ → lo = 6","Answer: 6"],hints:["Lower bound: the heaviest single package. Upper bound: everything in one day.","The simulation is a linear scan that RESPECTS ORDER (no reordering allowed).","Feasibility is monotonic — bigger capacity can only reduce the days needed."],code:{javascript:`function shipWithinDays(weights, days) {
  const canShip = (cap) => {
    let used = 1, load = 0;
    for (const w of weights) {
      if (load + w > cap) { used++; load = 0; }
      load += w;
    }
    return used <= days;
  };
  let lo = Math.max(...weights), hi = weights.reduce((a, b) => a + b, 0);
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (canShip(mid)) hi = mid;
    else lo = mid + 1;
  }
  return lo;
}`,python:`def shipWithinDays(weights, days):
    def can_ship(cap):
        used, load = 1, 0
        for w in weights:
            if load + w > cap:
                used += 1
                load = 0
            load += w
        return used <= days
    lo, hi = max(weights), sum(weights)
    while lo < hi:
        mid = (lo + hi) // 2
        if can_ship(mid):
            hi = mid
        else:
            lo = mid + 1
    return lo`,java:"",cpp:""}},{id:"bs-17",slug:"book-allocation-problem",title:"Book Allocation Problem",pattern:"binary-search",difficulty:"Hard",platform:"GeeksforGeeks",url:"https://www.geeksforgeeks.org/problems/allocate-minimum-number-of-pages0937/1",extra:[],summary:"Allocate N books (with page counts, in order) to K students so each gets a contiguous block. Minimize the maximum pages any student receives.",asked:"The smallest possible value of the largest allocation (contiguity preserved).",why:'Identical engine to "capacity to ship": binary search the per-student page cap, simulate the contiguous allocation, count students used.',clues:["contiguous allocation","minimize the maximum","K students"],brute:{idea:"Recursively partition and take the best (exponential).",time:"O(2ⁿ)",space:"O(n)"},optimal:{idea:"Cap P in [max pages, total pages]. Simulation: walk books in order; start a new student when the next book would exceed P. Feasible if students used ≤ K. Binary search the smallest feasible P.",steps:["If K > N: return -1 (per platform convention).","lo = max(pages), hi = sum(pages).","canAllocate(P): students = 1, cur = 0; for each p: if cur + p > P → students++, cur = 0; cur += p.","If students <= K: hi = mid else lo = mid + 1.","Return lo."],time:"O(n · log(total))",space:"O(1)"},dry:["arr = [12, 34, 67, 90], K = 2","lo = 90, hi = 203 → mid = 146: student1 [12,34,67] (113), student2 [90] → 2 ≤ 2 ✓ → hi = 146","mid = 118: [12,34,67] 113, [90] → 2 ✓ → hi = 118","mid = 104: [12,34,67]? 113 > 104 → [12,34] then [67,90]? 157>104 → [67],[90] → 3 > 2 ✗ → lo = 105","... converges to 113 (student1 gets 113 pages)","Answer: 113"],hints:['This is "ship packages" with books as packages and students as days.',"Contiguity means the simulation is a simple left-to-right greedy packing.","Lower bound is the single largest book — no student can take less than that."],code:{javascript:`function findPages(arr, n, k) {
  if (k > n) return -1;
  const canAllocate = (cap) => {
    let students = 1, pages = 0;
    for (const p of arr) {
      if (pages + p > cap) { students++; pages = 0; }
      pages += p;
    }
    return students <= k;
  };
  let lo = Math.max(...arr), hi = arr.reduce((a, b) => a + b, 0);
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (canAllocate(mid)) hi = mid;
    else lo = mid + 1;
  }
  return lo;
}`,python:`def findPages(arr, n, k):
    if k > n:
        return -1
    def can_allocate(cap):
        students, pages = 1, 0
        for p in arr:
            if pages + p > cap:
                students += 1
                pages = 0
            pages += p
        return students <= k
    lo, hi = max(arr), sum(arr)
    while lo < hi:
        mid = (lo + hi) // 2
        if can_allocate(mid):
            hi = mid
        else:
            lo = mid + 1
    return lo`,java:"",cpp:""}},{id:"bs-18",slug:"split-array-largest-sum",title:"Split Array Largest Sum",pattern:"binary-search",difficulty:"Hard",platform:"LeetCode",url:"https://leetcode.com/problems/split-array-largest-sum/",extra:[],summary:"Split a positive integer array into m CONTIGUOUS non-empty subarrays so that the largest subarray sum is minimized. Return that minimized largest sum.",asked:"The minimum possible value of max(subarray sum) over all m-way contiguous splits.",why:'Same "minimize the maximum" family: binary search the allowed subarray sum S; feasibility = can we cut into ≤ m contiguous pieces each summing to ≤ S.',clues:["m contiguous splits","minimize the largest sum","positive numbers"],brute:{idea:"DP over split points (O(n·m²)) — possible but far slower.",time:"O(n² · m)",space:"O(n)"},optimal:{idea:"S in [max element, total]. Simulate cutting: accumulate until adding the next element would exceed S, then start a new piece. Feasible if pieces ≤ m. Binary search the smallest feasible S.",steps:["lo = max(nums), hi = sum(nums).","canSplit(S): pieces = 1, sum = 0; for each x: if sum + x > S → pieces++, sum = 0; sum += x.","If pieces <= m: hi = mid else lo = mid + 1.","Return lo."],time:"O(n · log(total))",space:"O(1)"},dry:["nums = [7, 2, 5, 10, 8], m = 2","lo = 10, hi = 32 → mid = 21: [7,2,5] (14), [10,8] (18) → 2 pieces ✓ → hi = 21","mid = 15: [7,2] (9), [5] (5→ wait 9+5=14 ≤15 → [7,2,5]=14), [10] (10), [8] → 3 pieces ✗ → lo = 16","mid = 18: [7,2,5]=14, [10,8]=18 → 2 ✓ → hi = 18","mid = 17: [7,2,5]=14, [10,8]=18 >17 → [10],[8] → 3 ✗ → lo = 18","Answer: 18"],hints:['If you could choose the "daily capacity" of each piece, what is the smallest capacity that still lets m pieces cover everything?',"Feasibility only gets easier as S grows — binary search it.","Pieces ≤ m (not exactly m) — extra capacity can always be merged into a neighbor conceptually."],code:{javascript:`function splitArray(nums, m) {
  const canSplit = (S) => {
    let pieces = 1, sum = 0;
    for (const x of nums) {
      if (sum + x > S) { pieces++; sum = 0; }
      sum += x;
    }
    return pieces <= m;
  };
  let lo = Math.max(...nums), hi = nums.reduce((a, b) => a + b, 0);
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (canSplit(mid)) hi = mid;
    else lo = mid + 1;
  }
  return lo;
}`,python:`def splitArray(nums, m):
    def can_split(S):
        pieces, total = 1, 0
        for x in nums:
            if total + x > S:
                pieces += 1
                total = 0
            total += x
        return pieces <= m
    lo, hi = max(nums), sum(nums)
    while lo < hi:
        mid = (lo + hi) // 2
        if can_split(mid):
            hi = mid
        else:
            lo = mid + 1
    return lo`,java:"",cpp:""}},{id:"bs-19",slug:"search-a-2d-matrix",title:"Search a 2D Matrix",pattern:"binary-search",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/search-a-2d-matrix/",extra:[],summary:"A matrix where rows increase left-to-right and the first column value of each row is greater than the last value of the previous row. Search a target in O(log m·n).",asked:"Return true if the target is in the matrix.",why:"This matrix is a SORTED 1D array folded into a grid: index i maps to row i / cols, col i % cols — run ordinary binary search over the virtual 1D range.",clues:["row-major sorted matrix","O(log(mn))","virtual 1D array"],brute:{idea:"Scan every cell.",time:"O(m·n)",space:"O(1)"},optimal:{idea:"lo = 0, hi = m*n - 1 over the virtual flat index; mid maps to (row, col) = (mid / cols, mid % cols). Compare and halve as usual.",steps:["rows = m, cols = n; lo = 0, hi = m*n - 1.","While lo <= hi: mid = (lo + hi) >> 1.","val = matrix[floor(mid / cols)][mid % cols].","Standard binary search compare.","Return false if exhausted."],time:"O(log(m·n))",space:"O(1)"},dry:["matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target = 3","flat: lo=0, hi=11 → mid=5 → (1,1)=11 > 3 → hi=4","mid=2 → (0,2)=5 > 3 → hi=1","mid=0 → (0,0)=1 < 3 → lo=1","mid=1 → (0,1)=3 ✓","Answer: true"],hints:["The matrix reads as one long sorted list — can you index into it arithmetically?","row = mid / cols, col = mid % cols.","Nothing about the 2D shape changes the binary search logic — only the addressing."],code:{javascript:`function searchMatrix(matrix, target) {
  const m = matrix.length, n = matrix[0].length;
  let lo = 0, hi = m * n - 1;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    const val = matrix[Math.floor(mid / n)][mid % n];
    if (val === target) return true;
    if (val < target) lo = mid + 1;
    else hi = mid - 1;
  }
  return false;
}`,python:`def searchMatrix(matrix, target):
    m, n = len(matrix), len(matrix[0])
    lo, hi = 0, m * n - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        val = matrix[mid // n][mid % n]
        if val == target:
            return True
        if val < target:
            lo = mid + 1
        else:
            hi = mid - 1
    return False`,java:"",cpp:""}},{id:"bs-20",slug:"search-a-2d-matrix-ii",title:"Search a 2D Matrix II",pattern:"binary-search",difficulty:"Hard",platform:"LeetCode",url:"https://leetcode.com/problems/search-a-2d-matrix-ii/",extra:[],summary:"Rows increase left-to-right and columns increase top-to-bottom (but the first row's first element is not necessarily > the previous row's last). Search in O(m + n).",asked:"Return true if the target exists.",why:'Start at the top-RIGHT corner: the only position where "going down increases, going left decreases" both make sense — each step eliminates a full row or column.',clues:["row & column sorted","staircase search","O(m + n)"],brute:{idea:"Scan all cells.",time:"O(m·n)",space:"O(1)"},optimal:{idea:"row = 0, col = n - 1 (top right). If cell === target, done. If cell < target, the target must be BELOW (row++). If cell > target, the target must be LEFT (col--).",steps:["row = 0, col = last column.","While row < m and col >= 0:","val = matrix[row][col].","If val === target: return true.","If val < target: row++ (eliminate this row).","Else: col-- (eliminate this column).","Return false."],time:"O(m + n)",space:"O(1)"},dry:["matrix = [[1, 4, 7, 11], [2, 5, 8, 12], [3, 6, 9, 16], [10, 13, 14, 17]], target = 5","Start (0,3)=11 > 5 → col=2","(0,2)=7 > 5 → col=1","(0,1)=4 < 5 → row=1","(1,1)=5 ✓","Answer: true"],hints:["Which corner lets you eliminate a whole row OR column on every comparison?",'From top-right: down = bigger, left = smaller — both are "safe" directions.',"Each step moves strictly down or strictly left — at most m + n - 1 steps."],code:{javascript:`function searchMatrix(matrix, target) {
  const m = matrix.length, n = matrix[0].length;
  let row = 0, col = n - 1;
  while (row < m && col >= 0) {
    const val = matrix[row][col];
    if (val === target) return true;
    if (val < target) row++;
    else col--;
  }
  return false;
}`,python:`def searchMatrix(matrix, target):
    m, n = len(matrix), len(matrix[0])
    row, col = 0, n - 1
    while row < m and col >= 0:
        val = matrix[row][col]
        if val == target:
            return True
        if val < target:
            row += 1
        else:
            col -= 1
    return False`,java:"",cpp:""}},{id:"bs-21",slug:"kth-smallest-in-sorted-matrix",title:"Kth Smallest in Sorted Matrix",pattern:"binary-search",difficulty:"Hard",platform:"LeetCode",url:"https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/",extra:[],summary:"Given an n×n matrix sorted in rows and columns, find the kth smallest element.",asked:"The kth smallest value in the whole matrix (1-indexed k).",why:"Binary search on the VALUE: for a candidate x, count how many elements are ≤ x using the staircase walk (O(n)). If the count < k, the answer is bigger.",clues:["kth smallest","row & column sorted","count ≤ mid"],brute:{idea:"Flatten and sort, pick index k-1.",time:"O(n² log n)",space:"O(n²)"},optimal:{idea:"lo = matrix[0][0], hi = matrix[n-1][n-1]. countLE(x): start bottom-left, walk: if cell ≤ x, the whole column above counts (row+1 elements), move right; else move up. Binary search the smallest x with countLE(x) ≥ k.",steps:["lo = matrix[0][0], hi = matrix[n-1][n-1].","countLE(mid): row = n-1, col = 0, count = 0; while row >= 0 && col < n: if matrix[row][col] <= mid → count += row + 1; col++ else row--.","If countLE(mid) < k: lo = mid + 1 else hi = mid.","Return lo."],time:"O(n · log(max - min))",space:"O(1)"},dry:["matrix = [[1, 5, 9], [10, 11, 13], [12, 13, 15]], k = 8","Values sorted: 1,5,9,10,11,12,13,13,15 → 8th = 13","lo=1, hi=15: mid=8 → countLE: from (2,0)=12>8 up... count = 1 (just the 1) < 8 → lo=9","mid=12: count = 1 (col0: 1,10,12) + 1 (col1: 5) = ... walk: (2,0)=12≤12 → count+=3, col=1; (2,1)=13>12 → row=1; (1,1)=11≤12 → count+=2 (total 5), col=2; (1,2)=13>12 → row=0; (0,2)=9≤12 → count+=1 (6), col=3 stop → 6 < 8 → lo=13","mid=14: count = 3+... ≥ 8 → hi=14; mid=13: count ≥ 8 → hi=13","Answer: 13"],hints:["Searching an index in a 2D matrix is hopeless — search the VALUE instead.","The count of elements ≤ x can be done in O(n) with a bottom-left staircase.","The answer is the SMALLEST x whose count reaches k."],code:{javascript:`function kthSmallest(matrix, k) {
  const n = matrix.length;
  const countLE = (x) => {
    let count = 0, row = n - 1, col = 0;
    while (row >= 0 && col < n) {
      if (matrix[row][col] <= x) {
        count += row + 1;
        col++;
      } else {
        row--;
      }
    }
    return count;
  };
  let lo = matrix[0][0], hi = matrix[n - 1][n - 1];
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (countLE(mid) < k) lo = mid + 1;
    else hi = mid;
  }
  return lo;
}`,python:`def kthSmallest(matrix, k):
    n = len(matrix)
    def count_le(x):
        count = 0
        row, col = n - 1, 0
        while row >= 0 and col < n:
            if matrix[row][col] <= x:
                count += row + 1
                col += 1
            else:
                row -= 1
        return count
    lo, hi = matrix[0][0], matrix[n - 1][n - 1]
    while lo < hi:
        mid = (lo + hi) // 2
        if count_le(mid) < k:
            lo = mid + 1
        else:
            hi = mid
    return lo`,java:"",cpp:""}},{id:"bs-22",slug:"kth-smallest-in-multiplication-table",title:"Kth Smallest in Multiplication Table",pattern:"binary-search",difficulty:"Hard",platform:"LeetCode",url:"https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/",extra:[],summary:"The m×n multiplication table (cell (i,j) = i·j). Find the kth smallest number in it.",asked:"The kth smallest product among all i·j for 1 ≤ i ≤ m, 1 ≤ j ≤ n.",why:'No explicit matrix — but "count products ≤ x" is easy: row i contributes min(floor(x / i), n) products. Binary search x in [1, m·n].',clues:["multiplication table","kth smallest","implicit matrix"],brute:{idea:"Build the full table, sort, index k-1.",time:"O(mn log(mn))",space:"O(mn)"},optimal:{idea:"countLE(x) = Σ over rows i of min(floor(x / i), n). Binary search the smallest x with countLE(x) ≥ k.",steps:["lo = 1, hi = m * n.","countLE(mid): for i in 1..m: count += min(floor(mid / i), n).","If countLE(mid) < k: lo = mid + 1 else hi = mid.","Return lo."],time:"O(m · log(mn))",space:"O(1)"},dry:["m = 2, n = 3, table: [1,2,3 / 2,4,6], k = 6","Sorted values: 1,2,2,3,4,6 → kth = 6","lo=1, hi=6: mid=3 → countLE = row1: min(3,3)=3; row2: min(1,3)=1 → 4 < 6 → lo=4","mid=5: row1: 3, row2: min(2,3)=2 → 5 < 6 → lo=5","mid=5 same... lo=5, hi=6 → mid=5 (using floor) → 5<6 → lo=6","Answer: 6"],hints:["The table is never materialized — can you COUNT how many entries are ≤ x directly?","In row i, the values are i, 2i, 3i, ... — how many of them are ≤ x?","Again: the answer is the smallest x with count ≥ k."],code:{javascript:`function findKthNumber(m, n, k) {
  const countLE = (x) => {
    let count = 0;
    for (let i = 1; i <= m; i++) {
      count += Math.min(Math.floor(x / i), n);
    }
    return count;
  };
  let lo = 1, hi = m * n;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (countLE(mid) < k) lo = mid + 1;
    else hi = mid;
  }
  return lo;
}`,python:`def findKthNumber(m, n, k):
    def count_le(x):
        return sum(min(x // i, n) for i in range(1, m + 1))
    lo, hi = 1, m * n
    while lo < hi:
        mid = (lo + hi) // 2
        if count_le(mid) < k:
            lo = mid + 1
        else:
            hi = mid
    return lo`,java:"",cpp:""}},{id:"bs-23",slug:"median-of-2-sorted-arrays",title:"Median of 2 Sorted Arrays",pattern:"binary-search",difficulty:"Hard",platform:"LeetCode",url:"https://leetcode.com/problems/median-of-two-sorted-arrays/",extra:[],summary:"Given two sorted arrays, find the median of the combined set in O(log(min(m, n))).",asked:"The median (average of the two middle values for even total length) of the union, without merging.",why:"Binary search a PARTITION of the shorter array: choose cut1 in A and cut2 = half - cut1 in B such that everything left ≤ everything right. The four boundary values give the median.",clues:["median of two sorted arrays","O(log min)","partition cut"],brute:{idea:"Merge both arrays and read the middle.",time:"O(m + n)",space:"O(m + n)"},optimal:{idea:"Ensure A is the shorter. half = (m + n + 1) / 2 (left side size). Binary search cut1 in [0, m]; cut2 = half - cut1. Valid partition when A[cut1-1] ≤ B[cut2] and B[cut2-1] ≤ A[cut1]. Odd total: median = max(left maxes); even: (max left + min right) / 2.",steps:["If A longer than B, swap.","half = (m + n + 1) >> 1.","Binary search cut1 in [0, m]; cut2 = half - cut1.","l1 = A[cut1-1] (or -∞), r1 = A[cut1] (or +∞); l2, r2 likewise for B.","If l1 <= r2 && l2 <= r1: valid → compute median.","Else if l1 > r2: cut1 too big → hi = cut1 - 1. Else lo = cut1 + 1."],time:"O(log(min(m, n)))",space:"O(1)"},dry:["A = [1, 3], B = [2] (m=2, n=1, total 3, half = 2)","cut1 = 1 → cut2 = 1: l1 = A[0] = 1, r1 = A[1] = 3; l2 = B[0] = 2, r2 = +∞","Check: 1 ≤ ∞ ✓ and 2 ≤ 3 ✓ → valid","Odd total → median = max(l1, l2) = max(1, 2) = 2 ✓","Even example A = [1,2], B = [3,4]: half = 2; cut1 = 1 → l1=1, r1=2; l2=3, r2=4 → median = (max(1,3) + min(2,4))/2 = (3+2)/2 = 2.5 ✓"],hints:['The left half of the merged array is exactly "half" elements taken from the fronts of both arrays.',"Choosing cut1 determines cut2 — that is the ONE degree of freedom you binary search.","Invalid partition tells you which direction: left side too big → move cut left."],code:{javascript:`function findMedianSortedArrays(nums1, nums2) {
  let A = nums1, B = nums2;
  if (A.length > B.length) [A, B] = [B, A];
  const m = A.length, n = B.length;
  const half = (m + n + 1) >> 1;
  let lo = 0, hi = m;
  while (true) {
    const cut1 = (lo + hi) >> 1;
    const cut2 = half - cut1;
    const l1 = cut1 === 0 ? -Infinity : A[cut1 - 1];
    const r1 = cut1 === m ? Infinity : A[cut1];
    const l2 = cut2 === 0 ? -Infinity : B[cut2 - 1];
    const r2 = cut2 === n ? Infinity : B[cut2];
    if (l1 <= r2 && l2 <= r1) {
      if ((m + n) % 2 === 1) return Math.max(l1, l2);
      return (Math.max(l1, l2) + Math.min(r1, r2)) / 2;
    } else if (l1 > r2) hi = cut1 - 1;
    else lo = cut1 + 1;
  }
}`,python:`def findMedianSortedArrays(nums1, nums2):
    A, B = nums1, nums2
    if len(A) > len(B):
        A, B = B, A
    m, n = len(A), len(B)
    half = (m + n + 1) // 2
    lo, hi = 0, m
    while True:
        cut1 = (lo + hi) // 2
        cut2 = half - cut1
        l1 = A[cut1 - 1] if cut1 > 0 else float('-inf')
        r1 = A[cut1] if cut1 < m else float('inf')
        l2 = B[cut2 - 1] if cut2 > 0 else float('-inf')
        r2 = B[cut2] if cut2 < n else float('inf')
        if l1 <= r2 and l2 <= r1:
            if (m + n) % 2 == 1:
                return max(l1, l2)
            return (max(l1, l2) + min(r1, r2)) / 2
        elif l1 > r2:
            hi = cut1 - 1
        else:
            lo = cut1 + 1`,java:"",cpp:""}}],ot=[{id:"hp-01",slug:"kth-smallest",title:"Kth Smallest",pattern:"heap",difficulty:"Medium",platform:"GeeksforGeeks",url:"https://www.geeksforgeeks.org/problems/kth-smallest-element5635/1",extra:[],summary:"Find the kth smallest element in an unsorted array in O(n) average time (no full sort).",asked:"The element that would sit at index k-1 if the array were sorted.",why:"Keep a min-heap of size k over the whole array: everything smaller than the answer falls out, and the heap top is exactly the kth smallest.",clues:["kth smallest","unsorted array","O(n) without sorting"],brute:{idea:"Sort the array, return arr[k-1].",time:"O(n log n)",space:"O(n)"},optimal:{idea:"Min-heap capped at size k. Push each element; when the heap exceeds k, pop the smallest. At the end the top is the kth smallest.",steps:["Implement a min-heap (array-based, sift up/down).","For each x: push(x); if size > k, pop().","After the scan, the heap holds the k smallest elements.","Return the heap top (the smallest of those = kth smallest overall)."],time:"O(n log k)",space:"O(k)"},dry:["arr = [7, 10, 4, 3, 20, 15], k = 3","push 7 → [7]; push 10 → [7,10]; push 4 → [4,10,7]","push 3 → size 4 > 3 → pop 4 → [3,10,7]","push 20 → pop 3 → [7,10,20]","push 15 → pop 7 → [10,20,15]... wait heap [10,15,20] top 10","Answer: 10? sorted = [3,4,7,10,15,20], 3rd = 7. retrace: heap keeps 3 smallest seen so far: after all: {3,4,7} → top 3? no — pop removes the SMALLEST of the 4, keeping the 3 largest of the seen... hmm: keeping k in a MIN-heap and popping the min leaves the k LARGEST. For kth SMALLEST keep a MAX-heap of size k (pop the largest).","Corrected: use MAX-heap of size k: push 7,10,4 → pop 10; push 3 → [7,4,3]; push 20 → pop 20; push 15 → pop 15 → heap {7,4,3}, top 7","Answer: 7"],hints:["Which heap keeps the k SMALLEST elements? (pop the biggest intruder)","A max-heap of size k: the top is the largest among the k smallest = the kth smallest.","JS has no built-in heap — implement the array-based one (or note the sort fallback)."],code:{javascript:`function kthSmallest(arr, k) {
  // max-heap of size k (top = largest of the k smallest)
  const heap = [];
  const push = (x) => {
    heap.push(x);
    let i = heap.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (heap[p] >= heap[i]) break;
      [heap[p], heap[i]] = [heap[i], heap[p]];
      i = p;
    }
  };
  const pop = () => {
    const top = heap[0];
    heap[0] = heap[heap.length - 1];
    heap.pop();
    for (let i = 0; ; ) {
      const l = 2 * i + 1, r = l + 1;
      let s = i;
      if (l < heap.length && heap[l] > heap[s]) s = l;
      if (r < heap.length && heap[r] > heap[s]) s = r;
      if (s === i) break;
      [heap[s], heap[i]] = [heap[i], heap[s]];
      i = s;
    }
    return top;
  };
  for (const x of arr) {
    push(x);
    if (heap.length > k) pop();
  }
  return heap[0];
}`,python:`import heapq
def kthSmallest(arr, k):
    # max-heap of size k via negative values
    heap = []
    for x in arr:
        heapq.heappush(heap, -x)
        if len(heap) > k:
            heapq.heappop(heap)
    return -heap[0]`,java:"",cpp:""}},{id:"hp-02",slug:"kth-largest",title:"Kth Largest",pattern:"heap",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/kth-largest-element-in-an-array/",extra:[],summary:"Given an integer array, return the kth largest element (not the kth distinct).",asked:"The element at index n-k in the sorted array.",why:"Mirror of kth smallest: a min-heap of size k keeps the k LARGEST elements, and its top is the kth largest.",clues:["kth largest","unsorted","without full sort"],brute:{idea:"Sort descending, take index k-1.",time:"O(n log n)",space:"O(n)"},optimal:{idea:"Min-heap of size k over the array. Each new element larger than the heap top replaces it (push then pop the min). At the end, the top is the answer.",steps:["Min-heap (array-based).","For each x: push(x); if size > k pop().","The heap now holds the k largest elements.","Return the top (the smallest of the k largest = kth largest overall)."],time:"O(n log k)",space:"O(k)"},dry:["nums = [3, 2, 1, 5, 6, 4], k = 2","heap grows: 3 → 3,2 → 2,3 → push 5 → 2,3,5 → push 6 → pop 2 → 3,5,6 → push 4 → pop 3 → 4,5,6","Top = 4? wait k=2: heap size 2: trace: [3] → [3,2] → [2,3] → +5 → [2,3,5] pop 2 → [3,5] → +6 → [3,5,6] pop 3 → [5,6]","Answer: 5 (2nd largest) ✓"],hints:["kth largest = the smallest among the top-k largest.","A min-heap of size k discards exactly the elements that are NOT in the top k.",'Compare with "kth smallest" — only the heap type flips.'],code:{javascript:`function findKthLargest(nums, k) {
  const heap = [];
  const push = (x) => {
    heap.push(x);
    let i = heap.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (heap[p] <= heap[i]) break;
      [heap[p], heap[i]] = [heap[i], heap[p]];
      i = p;
    }
  };
  const pop = () => {
    const top = heap[0];
    heap[0] = heap[heap.length - 1];
    heap.pop();
    for (let i = 0; ; ) {
      const l = 2 * i + 1, r = l + 1;
      let s = i;
      if (l < heap.length && heap[l] < heap[s]) s = l;
      if (r < heap.length && heap[r] < heap[s]) s = r;
      if (s === i) break;
      [heap[s], heap[i]] = [heap[i], heap[s]];
      i = s;
    }
    return top;
  };
  for (const x of nums) {
    push(x);
    if (heap.length > k) pop();
  }
  return heap[0];
}`,python:`import heapq
def findKthLargest(nums, k):
    heap = []
    for x in nums:
        heapq.heappush(heap, x)
        if len(heap) > k:
            heapq.heappop(heap)
    return heap[0]`,java:"",cpp:""}},{id:"hp-03",slug:"top-k-frequent-elements",title:"Top K Frequent Elements",pattern:"heap",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/top-k-frequent-elements/",extra:[],summary:"Given an integer array, return the k most frequent elements (any order).",asked:"The k values with the highest occurrence counts.",why:"Frequency map + max-heap keyed by count: pop k times. (Bucket sort gives O(n) — but the heap is the canonical answer.)",clues:["most frequent","top k","frequency"],brute:{idea:"Count, then sort the distinct values by frequency, take k.",time:"O(n log n)",space:"O(n)"},optimal:{idea:"Count frequencies. Push each [value, count] into a max-heap (by count). Pop k times and collect the values.",steps:["freq = {}; for each x: freq[x]++.","Max-heap of [value, count] comparing count.","res = []; for i in 0..k-1: res.push(heap.pop().value).","Return res."],time:"O(n log k)",space:"O(n)"},dry:["nums = [1, 1, 1, 2, 2, 3], k = 2","freq: 1→3, 2→2, 3→1","Heap by count: [1,3] top","pop → 1; pop → 2","Answer: [1, 2]"],hints:["Two stages: count, then select.","The heap comparison key is the COUNT, not the value.","Only k pops are needed — that is what makes it O(n log k), not O(n log n)."],code:{javascript:`function topKFrequent(nums, k) {
  const freq = {};
  for (const x of nums) freq[x] = (freq[x] || 0) + 1;
  const heap = [];
  const push = (e) => {
    heap.push(e);
    let i = heap.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (heap[p][1] >= heap[i][1]) break;
      [heap[p], heap[i]] = [heap[i], heap[p]];
      i = p;
    }
  };
  const pop = () => {
    const top = heap[0];
    heap[0] = heap[heap.length - 1];
    heap.pop();
    for (let i = 0; ; ) {
      const l = 2 * i + 1, r = l + 1;
      let s = i;
      if (l < heap.length && heap[l][1] > heap[s][1]) s = l;
      if (r < heap.length && heap[r][1] > heap[s][1]) s = r;
      if (s === i) break;
      [heap[s], heap[i]] = [heap[i], heap[s]];
      i = s;
    }
    return top;
  };
  for (const [v, c] of Object.entries(freq)) push([v, c]);
  const res = [];
  for (let i = 0; i < k; i++) res.push(pop()[0]);
  return res;
}`,python:`import heapq
def topKFrequent(nums, k):
    from collections import Counter
    freq = Counter(nums)
    # max-heap by count
    heap = [(-c, v) for v, c in freq.items()]
    heapq.heapify(heap)
    return [heapq.heappop(heap)[1] for _ in range(k)]`,java:"",cpp:""}},{id:"hp-04",slug:"top-k-frequent-words",title:"Top K Frequent Words",pattern:"heap",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/top-k-frequent-words/",extra:[],summary:"Return the k most frequent words from a text, sorted by frequency descending; ties broken by lexicographic ascending order.",asked:"Top-k words with the (frequency, -lexicographic) ordering.",why:"Same frequency-map + heap skeleton as top-k elements, but the comparator has TWO keys: count first, then word order.",clues:["most frequent words","tie-break lexicographic","top k"],brute:{idea:"Count, sort all distinct words by (count desc, word asc), take k.",time:"O(n log n)",space:"O(n)"},optimal:{idea:'Max-heap where "greater" = higher count, or same count and lexicographically smaller word. Pop k times.',steps:["freq = word counts.","Heap comparator: (a, b) → a.count - b.count, then b.localeCompare(a) (smaller word = better).","Pop k words in order.","Return the list."],time:"O(n log k)",space:"O(n)"},dry:['text = "the day is sunny the the the sunny the", k = 2',"freq: the→5, sunny→2, day→1, is→1",'Order: the (5), sunny (2), day (1, "day" < "is"), is (1)','Answer: ["the", "sunny"]','Tie example k=4: ["the","sunny","day","is"] (day before is lexicographically)'],hints:["The comparator decides EVERYTHING: count first, then word.","For a tie, the lexicographically SMALLER word must win — invert the string compare in a max-heap.","Reuse the top-k elements code; only the comparison changes."],code:{javascript:`function topKFrequent(words, k) {
  const freq = {};
  for (const w of words) freq[w] = (freq[w] || 0) + 1;
  const entries = Object.entries(freq);
  // max-heap: higher count first; tie → lexicographically smaller first
  const better = (a, b) =>
    a[1] !== b[1] ? a[1] > b[1] : a[0] < b[0];
  const heap = [];
  const push = (e) => {
    heap.push(e);
    let i = heap.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (!better(heap[i], heap[p])) break;
      [heap[p], heap[i]] = [heap[i], heap[p]];
      i = p;
    }
  };
  const pop = () => {
    const top = heap[0];
    heap[0] = heap[heap.length - 1];
    heap.pop();
    for (let i = 0; ; ) {
      const l = 2 * i + 1, r = l + 1;
      let s = i;
      if (l < heap.length && better(heap[l], heap[s])) s = l;
      if (r < heap.length && better(heap[r], heap[s])) s = r;
      if (s === i) break;
      [heap[s], heap[i]] = [heap[i], heap[s]];
      i = s;
    }
    return top;
  };
  for (const e of entries) push(e);
  const res = [];
  for (let i = 0; i < k; i++) res.push(pop()[0]);
  return res;
}`,python:`import heapq
from collections import Counter
def topKFrequent(words, k):
    freq = Counter(words)
    # (-count, word) → min-heap gives count desc, word asc
    heap = [(-c, w) for w, c in freq.items()]
    heapq.heapify(heap)
    return [heapq.heappop(heap)[1] for _ in range(k)]`,java:"",cpp:""}},{id:"hp-05",slug:"k-closest-points-to-origin",title:"K Closest Points to Origin",pattern:"heap",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/k-closest-points-to-origin/",extra:[],summary:"Given an array of points on the X-Y plane, return the k closest to the origin (0, 0) by squared Euclidean distance.",asked:"Any ordering of the k nearest points is accepted.",why:"Distance is the heap key: either keep a max-heap of size k (top = farthest of the chosen) or a min-heap popping k times.",clues:["k closest to origin","distance as key","points"],brute:{idea:"Compute all distances, sort, take k.",time:"O(n log n)",space:"O(n)"},optimal:{idea:"Max-heap of size k keyed by squared distance. For each point: push; if size > k, pop the farthest. The remaining k are the answer.",steps:["d(p) = x² + y² (skip the sqrt — ordering is the same).","Max-heap of [d, point], size capped at k.","After the scan, return the points.","Order of the result does not matter."],time:"O(n log k)",space:"O(k)"},dry:["points = [[4,4], [1,3], [3,2]], k = 2","d: 32, 10, 13","heap(k=2): [4,4](32), [1,3](10) → push [3,2](13) → pop max(32) → keep [1,3], [3,2]","Answer: [[1,3],[3,2]]"],hints:["Squared distance preserves the ordering — avoid the square root.","A max-heap capped at k automatically evicts the farthest point chosen so far.",'This is "kth largest" applied to distances, keeping the whole heap instead of just the top.'],code:{javascript:`function kClosest(points, k) {
  const d = (p) => p[0] * p[0] + p[1] * p[1];
  // max-heap by distance
  const heap = [];
  const push = (e) => {
    heap.push(e);
    let i = heap.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (heap[p][0] >= heap[i][0]) break;
      [heap[p], heap[i]] = [heap[i], heap[p]];
      i = p;
    }
  };
  const pop = () => {
    const top = heap[0];
    heap[0] = heap[heap.length - 1];
    heap.pop();
    for (let i = 0; ; ) {
      const l = 2 * i + 1, r = l + 1;
      let s = i;
      if (l < heap.length && heap[l][0] > heap[s][0]) s = l;
      if (r < heap.length && heap[r][0] > heap[s][0]) s = r;
      if (s === i) break;
      [heap[s], heap[i]] = [heap[i], heap[s]];
      i = s;
    }
    return top;
  };
  for (const p of points) {
    push([d(p), p]);
    if (heap.length > k) pop();
  }
  return heap.map((e) => e[1]);
}`,python:`import heapq
def kClosest(points, k):
    # max-heap of size k via negative distances
    heap = []
    for x, y in points:
        dist = x * x + y * y
        heapq.heappush(heap, (-dist, (x, y)))
        if len(heap) > k:
            heapq.heappop(heap)
    return [p for _, p in heap]`,java:"",cpp:""}},{id:"hp-06",slug:"find-k-closest-elements",title:"Find K Closest Elements",pattern:"heap",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/find-k-closest-elements/",extra:[],summary:"Given a SORTED array, a target and k, return the k elements closest to the target (in any order).",asked:"The k values minimizing |x - target|.",why:"Heap keyed by |x - target|: push all, pop k. (Two pointers from the target position is even better — but the heap shows the general tool.)",clues:["sorted array","closest to target","k elements"],brute:{idea:"Sort all elements by |x - target|, take k.",time:"O(n log n)",space:"O(n)"},optimal:{idea:"Min-heap of [ |x - target|, x ]. Push every element, pop k times. (Alternative O(n): binary search the target position, then two pointers expanding to whichever side is closer.)",steps:["heap = min-heap of (abs(x - target), x).","Push all elements.","Pop k times, collect the values.","Return them (order irrelevant)."],time:"O(n log n) with the heap; O(n) with two pointers",space:"O(n)"},dry:["arr = [1, 2, 3, 4, 5], target = 3, k = 3","|x-3|: 2, 1, 0, 1, 2","Heap order: 3(0), 2(1), 4(1), 1(2), 5(2)","Pop 3 → [3, 2, 4]","Answer: [3, 2, 4] (any order)"],hints:["The key is the ABSOLUTE difference from the target.","Ties can go either way — the problem accepts any valid k-set.","Since the array is sorted, the k closest are always a CONTIGUOUS block — a bonus for the two-pointer version."],code:{javascript:`function findLeastAbsDiffElements(arr, target, k) {
  const heap = [];
  const push = (e) => {
    heap.push(e);
    let i = heap.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (heap[p][0] <= heap[i][0]) break;
      [heap[p], heap[i]] = [heap[i], heap[p]];
      i = p;
    }
  };
  const pop = () => {
    const top = heap[0];
    heap[0] = heap[heap.length - 1];
    heap.pop();
    for (let i = 0; ; ) {
      const l = 2 * i + 1, r = l + 1;
      let s = i;
      if (l < heap.length && heap[l][0] < heap[s][0]) s = l;
      if (r < heap.length && heap[r][0] < heap[s][0]) s = r;
      if (s === i) break;
      [heap[s], heap[i]] = [heap[i], heap[s]];
      i = s;
    }
    return top;
  };
  for (const x of arr) push([Math.abs(x - target), x]);
  const res = [];
  for (let i = 0; i < k; i++) res.push(pop()[1]);
  return res;
}`,python:`import heapq
def findLeastAbsDiffElements(arr, target, k):
    heap = [(abs(x - target), x) for x in arr]
    heapq.heapify(heap)
    return [heapq.heappop(heap)[1] for _ in range(k)]`,java:"",cpp:""}},{id:"hp-07",slug:"k-weakest-rows-in-a-matrix",title:"K Weakest Rows in a Matrix",pattern:"heap",difficulty:"Easy",platform:"LeetCode",url:"https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/",extra:[],summary:"A binary matrix (1 = soldier) with rows sorted (1s then 0s). Return the row indices of the k weakest rows (fewest soldiers; ties → lower index first).",asked:"The k smallest rows by (soldier count, index).",why:"Key = (count of 1s, row index): a min-heap pops exactly the weakest rows in the required order.",clues:["k weakest rows","row strength = sum","tie by index"],brute:{idea:"Compute row sums, sort indices by (sum, index), take k.",time:"O(m·n + m log m)",space:"O(m)"},optimal:{idea:"Min-heap of [soldiers, rowIndex]. Push every row, pop k times.",steps:["For each row i: soldiers = row.reduce((a, b) => a + b).","Min-heap keyed by soldiers, then index.","Pop k times, collect the indices.","Return them."],time:"O(m·n + m log k)",space:"O(m)"},dry:["mat = [[1,1,0,0,0], [1,1,1,1,0], [1,0,0,0,0], [1,1,0,0,0], [1,1,1,1,1]], k = 3","soldiers: 2, 4, 1, 2, 5","Order: row2(1), row0(2), row3(2), row1(4), row4(5)","Answer: [2, 0, 3]"],hints:["Row strength = sum of the row (or, since rows are sorted, the index of the first 0).","Tie-break is the row INDEX — include it as the second heap key.",'A min-heap of size "all rows" popping k is the simplest framing; a capped heap also works.'],code:{javascript:`function kWeakestRows(mat, k) {
  const heap = [];
  const push = (e) => {
    heap.push(e);
    let i = heap.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      const better =
        heap[i][0] < heap[p][0] ||
        (heap[i][0] === heap[p][0] && heap[i][1] < heap[p][1]);
      if (!better) break;
      [heap[p], heap[i]] = [heap[i], heap[p]];
      i = p;
    }
  };
  const pop = () => {
    const top = heap[0];
    heap[0] = heap[heap.length - 1];
    heap.pop();
    for (let i = 0; ; ) {
      const l = 2 * i + 1, r = l + 1;
      let s = i;
      const better = (a, b) =>
        heap[a][0] < heap[b][0] ||
        (heap[a][0] === heap[b][0] && heap[a][1] < heap[b][1]);
      if (l < heap.length && better(l, s)) s = l;
      if (r < heap.length && better(r, s)) s = r;
      if (s === i) break;
      [heap[s], heap[i]] = [heap[i], heap[s]];
      i = s;
    }
    return top;
  };
  mat.forEach((row, i) => push([row.reduce((a, b) => a + b, 0), i]));
  const res = [];
  for (let t = 0; t < k; t++) res.push(pop()[1]);
  return res;
}`,python:`import heapq
def kWeakestRows(mat, k):
    heap = [(sum(row), i) for i, row in enumerate(mat)]
    heapq.heapify(heap)
    return [heapq.heappop(heap)[1] for _ in range(k)]`,java:"",cpp:""}},{id:"hp-08",slug:"merge-k-sorted-arrays",title:"Merge K Sorted Arrays",pattern:"heap",difficulty:"Medium",platform:"GeeksforGeeks",url:"https://www.geeksforgeeks.org/problems/merge-k-sorted-arrays/1",extra:[],summary:"Given k sorted arrays, merge them into a single sorted array in O(N log k), where N = total elements.",asked:"One sorted array containing all elements of the k inputs.",why:"K sorted streams → the next smallest is always one of the k current HEADS. A min-heap over the heads yields the merged order, pushing each stream's successor after a pop.",clues:["k sorted streams","k-way merge","O(n log k)"],brute:{idea:"Concatenate everything and sort.",time:"O(N log N)",space:"O(N)"},optimal:{idea:"Heap of (value, arrayIndex, position) for each array's first element. Repeat N times: pop the minimum, append it, and push that array's next element if any.",steps:["Initialize the heap with (arr[i][0], i, 0) for each array.","While the heap is non-empty:","Pop (v, i, p); append v.","If p + 1 < arr[i].length: push (arr[i][p+1], i, p+1).","Return the merged list."],time:"O(N log k)",space:"O(k)"},dry:["arrays = [[2,5,7], [1,3,6]]","heap: (1,a2), (2,a1)","pop 1 → push 3 → heap (2,a1),(3,a2)","pop 2 → push 5 → heap (3,a2),(5,a1)","pop 3 → push 6 → heap (5,a1),(6,a2)","pop 5 → push 7 → heap (6,a2),(7,a1)","pop 6 → pop 7 → pop 5? (5 already popped) → result [1,2,3,5,6,7]","Answer: [1, 2, 3, 5, 6, 7]"],hints:["At any moment, only the HEAD of each array can be the next smallest.","One head per array in the heap — that is why the heap stays at size k.","After popping array i's head, its successor becomes eligible — push it."],code:{javascript:`function mergeKArrays(arrays) {
  const heap = [];
  const push = (e) => {
    heap.push(e);
    let i = heap.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (heap[p][0] <= heap[i][0]) break;
      [heap[p], heap[i]] = [heap[i], heap[p]];
      i = p;
    }
  };
  const pop = () => {
    const top = heap[0];
    heap[0] = heap[heap.length - 1];
    heap.pop();
    for (let i = 0; ; ) {
      const l = 2 * i + 1, r = l + 1;
      let s = i;
      if (l < heap.length && heap[l][0] < heap[s][0]) s = l;
      if (r < heap.length && heap[r][0] < heap[s][0]) s = r;
      if (s === i) break;
      [heap[s], heap[i]] = [heap[i], heap[s]];
      i = s;
    }
    return top;
  };
  const res = [];
  arrays.forEach((a, i) => a.length && push([a[0], i, 0]));
  while (heap.length) {
    const [v, ai, p] = pop();
    res.push(v);
    if (p + 1 < arrays[ai].length) push([arrays[ai][p + 1], ai, p + 1]);
  }
  return res;
}`,python:`import heapq
def mergeKArrays(arrays):
    heap = []
    for i, a in enumerate(arrays):
        if a:
            heapq.heappush(heap, (a[0], i, 0))
    res = []
    while heap:
        v, i, p = heapq.heappop(heap)
        res.append(v)
        if p + 1 < len(arrays[i]):
            heapq.heappush(heap, (arrays[i][p + 1], i, p + 1))
    return res`,java:"",cpp:""}},{id:"hp-09",slug:"kth-smallest-in-sorted-matrix-heap",title:"Kth Smallest in Sorted Matrix",pattern:"heap",difficulty:"Hard",platform:"LeetCode",url:"https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/",extra:[],summary:"Same matrix as the binary-search variant — here solve it with a heap: n×n matrix sorted in rows and columns, find the kth smallest element.",asked:"The kth smallest value (1-indexed) using k-way merge thinking.",why:"Each ROW is sorted → treat the n rows as n sorted streams. Start the heap with each row's first element; pop k times, pushing the row's successor each time.",clues:["row-sorted matrix","k-way merge of rows","kth smallest"],brute:{idea:"Flatten + sort.",time:"O(n² log n)",space:"O(n²)"},optimal:{idea:"Min-heap of (value, row, col) seeded with (matrix[i][0], i, 0) for every row. Pop k times; each pop of (v, r, c) pushes (matrix[r][c+1], r, c+1) if it exists.",steps:["Push (matrix[i][0], i, 0) for all rows i.","Repeat k times: pop the min (v, r, c); remember v.","If c + 1 < n: push (matrix[r][c+1], r, c+1).","The kth popped value is the answer."],time:"O(k log n)",space:"O(n)"},dry:["matrix = [[1, 5, 9], [10, 11, 13], [12, 13, 15]], k = 8","heap seeds: (1,r0),(10,r1),(12,r2)","pop 1 → push 5; pop 5 → push 9; pop 9 → push (nothing, end of row 0)","pop 10 → push 11; pop 11 → push 13(r1); pop 12 → push 13(r2)","pop 13(r1) → push 15","8th pop: 13 (from row 2) → Answer: 13","Sorted values: 1,5,9,10,11,12,13,13,15 → 8th = 13 ✓"],hints:["Rows are sorted streams — this is k-way merge with k = n.","Only the NEXT element of a row becomes eligible after its predecessor is popped.","Compare with the binary-search-on-value solution: which is better for large k?"],code:{javascript:`function kthSmallest(matrix, k) {
  const n = matrix.length;
  const heap = [];
  const push = (e) => {
    heap.push(e);
    let i = heap.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (heap[p][0] <= heap[i][0]) break;
      [heap[p], heap[i]] = [heap[i], heap[p]];
      i = p;
    }
  };
  const pop = () => {
    const top = heap[0];
    heap[0] = heap[heap.length - 1];
    heap.pop();
    for (let i = 0; ; ) {
      const l = 2 * i + 1, r = l + 1;
      let s = i;
      if (l < heap.length && heap[l][0] < heap[s][0]) s = l;
      if (r < heap.length && heap[r][0] < heap[s][0]) s = r;
      if (s === i) break;
      [heap[s], heap[i]] = [heap[i], heap[s]];
      i = s;
    }
    return top;
  };
  for (let r = 0; r < n; r++) push([matrix[r][0], r, 0]);
  let ans;
  for (let t = 0; t < k; t++) {
    const [v, r, c] = pop();
    ans = v;
    if (c + 1 < n) push([matrix[r][c + 1], r, c + 1]);
  }
  return ans;
}`,python:`import heapq
def kthSmallest(matrix, k):
    n = len(matrix)
    heap = [(matrix[r][0], r, 0) for r in range(n)]
    heapq.heapify(heap)
    ans = None
    for _ in range(k):
        v, r, c = heapq.heappop(heap)
        ans = v
        if c + 1 < n:
            heapq.heappush(heap, (matrix[r][c + 1], r, c + 1))
    return ans`,java:"",cpp:""}},{id:"hp-10",slug:"last-stone-weight",title:"Last Stone Weight",pattern:"heap",difficulty:"Easy",platform:"LeetCode",url:"https://leetcode.com/problems/last-stone-weight/",extra:[],summary:"Repeatedly smash the TWO heaviest stones: the smaller is destroyed, the heavier becomes (larger - smaller). Return the last remaining weight (0 if none).",asked:"The final stone weight after the greedy smashing process.",why:'"Always pick the two largest" is exactly what a max-heap serves: extract-max twice, push back the difference.',clues:["always take the two largest","repeated combine","heap loop"],brute:{idea:"Sort the array every step, take the last two.",time:"O(n² log n)",space:"O(n)"},optimal:{idea:"Max-heap of all stones. While more than one stone: pop the two largest a ≥ b; if a ≠ b push a - b. Return the last stone or 0.",steps:["Build a max-heap from the stones.","While heap.size > 1:","a = pop(); b = pop();","If a !== b: push(a - b).","Return heap.size ? heap.top : 0."],time:"O(n log n)",space:"O(n)"},dry:["stones = [2, 7, 4, 1]","heap top two: 7, 4 → push 3 → [3, 2, 1]","top two: 3, 2 → push 1 → [1, 1]","top two: 1, 1 → equal → both destroyed → []","Answer: 0"],hints:['Which operation do you need from the collection, and how often? (repeated "give me the max")',"Push the difference back ONLY when it is non-zero.","The loop ends when 0 or 1 stones remain."],code:{javascript:`function lastStoneWeight(stones) {
  const heap = [];
  const push = (x) => {
    heap.push(x);
    let i = heap.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (heap[p] >= heap[i]) break;
      [heap[p], heap[i]] = [heap[i], heap[p]];
      i = p;
    }
  };
  const pop = () => {
    const top = heap[0];
    heap[0] = heap[heap.length - 1];
    heap.pop();
    for (let i = 0; ; ) {
      const l = 2 * i + 1, r = l + 1;
      let s = i;
      if (l < heap.length && heap[l] > heap[s]) s = l;
      if (r < heap.length && heap[r] > heap[s]) s = r;
      if (s === i) break;
      [heap[s], heap[i]] = [heap[i], heap[s]];
      i = s;
    }
    return top;
  };
  for (const s of stones) push(s);
  while (heap.length > 1) {
    const a = pop();
    const b = pop();
    if (a !== b) push(a - b);
  }
  return heap.length ? heap[0] : 0;
}`,python:`import heapq
def lastStoneWeight(stones):
    heap = [-s for s in stones]
    heapq.heapify(heap)
    while len(heap) > 1:
        a = -heapq.heappop(heap)
        b = -heapq.heappop(heap)
        if a != b:
            heapq.heappush(heap, -(a - b))
    return -heap[0] if heap else 0`,java:"",cpp:""}},{id:"hp-11",slug:"cpu-task-scheduler",title:"CPU Task Scheduler",pattern:"heap",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/task-scheduler/",extra:[],summary:"A CPU executes unit-time tasks with a cooldown: the same task needs n idle intervals between executions. Find the minimum total time to finish all tasks.",asked:"The shortest schedule length respecting the cooldown constraint.",why:"At each unit of time, run the most-frequent task not in cooldown (or idle). A max-heap of remaining counts + a cooldown release list implements exactly that greedy.",clues:["cooldown between same task","minimize total time","schedule with constraints"],brute:{idea:"Try permutations / simulation with exhaustive choices.",time:"exponential",space:"O(n)"},optimal:{idea:"Count frequencies. Each tick: take the max-heap top (if any), decrement, put it in cooldown until tick + n. Release any cooldown entries that have come due back into the heap. Count the ticks.",steps:["freq map → max-heap of counts.","time = 0; cooldown = [] of [count, readyTime].","While heap or cooldown non-empty:","time++ (a unit passes).","If heap non-empty: c = pop() - 1; if c > 0, cooldown.push([c, time + n]).","If cooldown head is ready (readyTime <= time): push it back into the heap.","Return time."],time:"O(n + T) ≈ O(26·time) with fixed alphabet",space:"O(n)"},dry:["tasks = [A, A, A, B, B, B], n = 2","freq: A:3, B:3","t1: A (A left 2, ready t3); t2: B (B left 2, ready t4); t3: release A, A (A left 1, ready t5); t4: release B, B (B left 1, ready t6); t5: A; t6: B","Answer: 6 (schedule A B A B A B — no idle needed)","tasks = [A, A, A], n = 2 → A _ _ A _ _ A → 7"],hints:["Which task should you run NOW to keep options open? (the one with the most remaining copies)","A task goes on cooldown for n units AFTER it runs — model the release time.","Idle time only happens when nothing is eligible — the loop naturally produces it."],code:{javascript:`function leastInterval(tasks, n) {
  const freq = {};
  for (const t of tasks) freq[t] = (freq[t] || 0) + 1;
  const heap = Object.values(freq);
  // max-heap (array-based)
  const push = (c) => {
    heap.push(c);
    let i = heap.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (heap[p] >= heap[i]) break;
      [heap[p], heap[i]] = [heap[i], heap[p]];
      i = p;
    }
  };
  const pop = () => {
    const top = heap[0];
    heap[0] = heap[heap.length - 1];
    heap.pop();
    for (let i = 0; ; ) {
      const l = 2 * i + 1, r = l + 1;
      let s = i;
      if (l < heap.length && heap[l] > heap[s]) s = l;
      if (r < heap.length && heap[r] > heap[s]) s = r;
      if (s === i) break;
      [heap[s], heap[i]] = [heap[i], heap[s]];
      i = s;
    }
    return top;
  };
  let time = 0;
  const cooldown = []; // [count, readyTime], appended in increasing time
  while (heap.length || cooldown.length) {
    time++;
    if (heap.length) {
      const c = pop() - 1;
      if (c > 0) cooldown.push([c, time + n]);
    }
    if (cooldown.length && cooldown[0][1] <= time) {
      const [c] = cooldown.shift();
      push(c);
    }
  }
  return time;
}`,python:`import heapq
def leastInterval(tasks, n):
    from collections import Counter
    freq = Counter(tasks)
    heap = [-c for c in freq.values()]
    heapq.heapify(heap)
    time = 0
    cooldown = []  # [remaining, ready_time]
    while heap or cooldown:
        time += 1
        if heap:
            c = -heapq.heappop(heap) - 1
            if c > 0:
                cooldown.append([-c, time + n])
        if cooldown and cooldown[0][1] <= time:
            c, _ = cooldown.pop(0)
            heapq.heappush(heap, c)
    return time`,java:"",cpp:""}},{id:"hp-12",slug:"reorganize-string",title:"Reorganize String",pattern:"heap",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/reorganize-string/",extra:[],summary:'Reorder a string so that no two adjacent characters are equal. Return any valid arrangement, or "" if impossible.',asked:"A permutation of s with no equal adjacent letters, or the empty string.",why:"Greedy with a max-heap: always place the most frequent character not used immediately before. A feasibility pre-check (max count ≤ (n+1)/2) is required.",clues:["no adjacent equal","rearrange","frequencies matter"],brute:{idea:"Backtracking over characters — exponential.",time:"O(n!)",space:"O(n)"},optimal:{idea:"If any character count exceeds (n+1)/2 → impossible (it must occupy both ends plus alternation — pigeonhole). Otherwise: max-heap of [count, char]; each step, pop the best, place it, and re-insert the character placed one step earlier (delay by one).",steps:['Count characters; if maxCount > (n + 1) / 2, return "". ',"Max-heap of [count, char].",'prev = null; res = "". ',"While heap non-empty: cur = pop(); res += cur.char; if prev exists, push prev back; prev = cur with count-1 (or null if 0).","Return res."],time:"O(n log alphabet)",space:"O(n)"},dry:['s = "aaab"',"maxCount 3 ≤ (4+1)/2 = 2.5? NO → 3 > 2.5 → impossible",'Answer: ""','s = "aabb": counts a2 b2, max 2 ≤ 2.5 ✓','pop a (2) → res "a", prev=a(1); pop b(2) → res "ab", push a(1), prev=b(1)',"pop b? heap has a(1),... wait after step 2 heap = [b? no. trace: heap start [a2,b2]. Step1: pop a2 → res a; prev=a1; heap [b2]. Step2: pop b2 → res ab; push prev a1 → heap [b1? no: prev b1]. heap [a1]; prev = b1. Step3: pop a1 → res aba; push prev b1 → heap [b1]; prev=a0=null. Step4: pop b1 → res abab ✓",'Answer: "abab"'],hints:['When is it IMPOSSIBLE? (one character must sit in more "slots" than the gaps allow)',"The pigeonhole bound: maxCount ≤ (n + 1) / 2.","Placing the global max next to itself is forbidden — so re-insert the previous pick one step later."],code:{javascript:`function reorganizeString(s) {
  const freq = {};
  for (const c of s) freq[c] = (freq[c] || 0) + 1;
  const entries = Object.entries(freq);
  if (Math.max(...entries.map((e) => e[1])) > (s.length + 1) / 2) return '';
  const heap = entries;
  const push = (e) => {
    heap.push(e);
    let i = heap.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (heap[p][1] >= heap[i][1]) break;
      [heap[p], heap[i]] = [heap[i], heap[p]];
      i = p;
    }
  };
  const pop = () => {
    const top = heap[0];
    heap[0] = heap[heap.length - 1];
    heap.pop();
    for (let i = 0; ; ) {
      const l = 2 * i + 1, r = l + 1;
      let s2 = i;
      if (l < heap.length && heap[l][1] > heap[s2][1]) s2 = l;
      if (r < heap.length && heap[r][1] > heap[s2][1]) s2 = r;
      if (s2 === i) break;
      [heap[s2], heap[i]] = [heap[i], heap[s2]];
      i = s2;
    }
    return top;
  };
  let res = '';
  let prev = null;
  while (heap.length) {
    const [c, n] = pop();
    res += c;
    if (prev) push(prev);
    prev = n > 1 ? [c, n - 1] : null;
  }
  return res;
}`,python:`import heapq
from collections import Counter
def reorganizeString(s):
    freq = Counter(s)
    if max(freq.values()) > (len(s) + 1) // 2 + (len(s) % 2 == 0) * 0 and max(freq.values()) * 2 > len(s) + 1:
        return ''
    heap = [(-c, ch) for ch, c in freq.items()]
    heapq.heapify(heap)
    if -heap[0][0] > (len(s) + 1) / 2:
        return ''
    res = []
    prev = None
    while heap:
        neg, ch = heapq.heappop(heap)
        res.append(ch)
        if prev:
            heapq.heappush(heap, prev)
        prev = (neg + 1, ch) if neg + 1 < 0 else None
    return ''.join(res)`,java:"",cpp:""}},{id:"hp-13",slug:"min-number-of-refueling-stops",title:"Min Number of Refueling Stops",pattern:"heap",difficulty:"Hard",platform:"LeetCode",url:"https://leetcode.com/problems/minimum-number-of-refueling-stops/",extra:[],summary:"A car starts with startFuel and must reach a target distance; gas stations lie along the way with fixed fuel amounts. Find the minimum number of refuels needed, or -1.",asked:"Minimum station stops to reach the target (or -1 if impossible).",why:"The greedy: drive as far as current fuel allows, keeping ALL passed stations in a max-heap; whenever stuck, refuel from the LARGEST station you have passed. Each refuel is provably optimal (exchange argument).",clues:["refuel min stops","stations along the way","greedy with max-heap"],brute:{idea:"Try subsets of stations (2ⁿ) and check reachability.",time:"O(2ⁿ · n)",space:"O(n)"},optimal:{idea:"fuel = startFuel; scan stations by position, pushing every station reached (position ≤ fuel) into a max-heap of fuel. While fuel < target: pop the biggest (refuel) and count it; if the heap is empty → -1.",steps:["max-heap of fuel amounts; i = 0.","While fuel < target:","Push all stations with position ≤ fuel (advancing i).","If heap empty → return -1.","fuel += heap.pop(); refuels++.","Return refuels."],time:"O(n log n)",space:"O(n)"},dry:["target = 1, startFuel = 1, stations = []","fuel 1 ≥ target 1 → 0 refuels","Answer: 0","target = 100, startFuel = 1, stations = [[50,2],[80,100]]","fuel=1: no station reachable → heap empty → Answer: -1","target = 100, start = 10, stations = [[50,20],[80,80]]: reach 10 → none ≤ 10? station 50 not reachable → -1? wait start 10 < 50 → -1. Use start = 60: reach 60 → push 20 (pos 50); fuel 60 < 100 → refuel 20 → 80 → push 80 (pos 80) → fuel 80 < 100 → refuel 80 → 160 ≥ 100 → 2 refuels ✓"],hints:["Which station should you refuel from when stuck? (the biggest one you ALREADY passed)",'You can "delay" the refueling decision — stations only become available once passed.',"Each refuel from the max passed station is safe: any other choice is swappable (exchange argument)."],code:{javascript:`function minRefuelStops(target, startFuel, stations) {
  const heap = [];
  const push = (x) => {
    heap.push(x);
    let i = heap.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (heap[p] >= heap[i]) break;
      [heap[p], heap[i]] = [heap[i], heap[p]];
      i = p;
    }
  };
  const pop = () => {
    const top = heap[0];
    heap[0] = heap[heap.length - 1];
    heap.pop();
    for (let i = 0; ; ) {
      const l = 2 * i + 1, r = l + 1;
      let s = i;
      if (l < heap.length && heap[l] > heap[s]) s = l;
      if (r < heap.length && heap[r] > heap[s]) s = r;
      if (s === i) break;
      [heap[s], heap[i]] = [heap[i], heap[s]];
      i = s;
    }
    return top;
  };
  let fuel = startFuel, i = 0, refuels = 0;
  while (fuel < target) {
    while (i < stations.length && stations[i][0] <= fuel) {
      push(stations[i][1]);
      i++;
    }
    if (!heap.length) return -1;
    fuel += pop();
    refuels++;
  }
  return refuels;
}`,python:`import heapq
def minRefuelStops(target, startFuel, stations):
    heap = []
    fuel = startFuel
    i = refuels = 0
    while fuel < target:
        while i < len(stations) and stations[i][0] <= fuel:
            heapq.heappush(heap, -stations[i][1])
            i += 1
        if not heap:
            return -1
        fuel += -heapq.heappop(heap)
        refuels += 1
    return refuels`,java:"",cpp:""}},{id:"hp-14",slug:"ipo",title:"IPO",pattern:"heap",difficulty:"Hard",platform:"LeetCode",url:"https://leetcode.com/problems/ipo/",extra:[],summary:"You may complete at most k projects. Each needs capital ≥ its threshold to start and returns profit. Maximize the final capital starting from w.",asked:"The maximum capital after up to k projects.",why:"Two-heap greedy: a min-heap of thresholds tracks which projects are AFFORDABLE; among affordable ones, a max-heap of profits always takes the BEST available.",clues:["k projects max","capital threshold + profit","maximize final capital"],brute:{idea:"Try orderings / subsets of projects.",time:"O(2ⁿ)",space:"O(n)"},optimal:{idea:"Sort projects by capital. For up to k rounds: move every project with capital ≤ current cash into the profit max-heap; if none affordable, stop; else take the max profit and add it to cash.",steps:["Sort projects by threshold (capital).","cash = w; i = 0.","For round in 0..k-1:","While i < n and capital[i] <= cash: push profit[i] into max-heap; i++.","If max-heap empty: break.","cash += max-heap.pop().","Return cash."],time:"O(n log n)",space:"O(n)"},dry:["k = 2, w = 0, profits = [1,2,3], capital = [0,1,1]","Round 1: affordable: profit 1 (cap 0) → max-heap [1]; take 1 → cash 1","Round 2: affordable now: profits 2, 3 (cap 1) → max-heap [3,2]; take 3 → cash 4","Answer: 4"],hints:["At each round you have a CHOICE only among affordable projects — which one to take?","The threshold heap (min-heap) gates availability; the profit heap (max-heap) makes the choice.","Cash only grows, so projects become affordable permanently — the scan pointer i never moves back."],code:{javascript:`function findMaximizedCapital(k, w, profits, capital) {
  const n = profits.length;
  const order = Array.from({ length: n }, (_, i) => i).sort(
    (a, b) => capital[a] - capital[b]
  );
  const heap = [];
  const push = (x) => {
    heap.push(x);
    let i = heap.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (heap[p] >= heap[i]) break;
      [heap[p], heap[i]] = [heap[i], heap[p]];
      i = p;
    }
  };
  const pop = () => {
    const top = heap[0];
    heap[0] = heap[heap.length - 1];
    heap.pop();
    for (let i = 0; ; ) {
      const l = 2 * i + 1, r = l + 1;
      let s = i;
      if (l < heap.length && heap[l] > heap[s]) s = l;
      if (r < heap.length && heap[r] > heap[s]) s = r;
      if (s === i) break;
      [heap[s], heap[i]] = [heap[i], heap[s]];
      i = s;
    }
    return top;
  };
  let cash = w, i = 0;
  for (let round = 0; round < k; round++) {
    while (i < n && capital[order[i]] <= cash) {
      push(profits[order[i]]);
      i++;
    }
    if (!heap.length) break;
    cash += pop();
  }
  return cash;
}`,python:`import heapq
def findMaximizedCapital(k, w, profits, capital):
    n = len(profits)
    projects = sorted(zip(capital, profits))
    max_profit = []
    cash = w
    i = 0
    for _ in range(k):
        while i < n and projects[i][0] <= cash:
            heapq.heappush(max_profit, -projects[i][1])
            i += 1
        if not max_profit:
            break
        cash += -heapq.heappop(max_profit)
    return cash`,java:"",cpp:""}},{id:"hp-15",slug:"course-schedule-iii",title:"Course Schedule III",pattern:"heap",difficulty:"Hard",platform:"LeetCode",url:"https://leetcode.com/problems/course-schedule-iii/",extra:[],summary:"Courses have a duration and a lastDay. They must be finished by lastDay, one at a time. Find the maximum number of courses you can finish.",asked:"The largest subset of courses schedulable within their deadlines.",why:"Sort by deadline; take every course; when the total duration exceeds the current deadline, DROP the longest course you have taken (max-heap). The dropped course is the worst use of time.",clues:["duration + deadline","max courses finished","swap out the longest"],brute:{idea:"Check all subsets of courses.",time:"O(2ⁿ · n)",space:"O(n)"},optimal:{idea:"Sort courses by lastDay. Greedily add each course (track total duration in a max-heap of durations). If total > current lastDay, remove the LONGEST duration taken (it blocks the most). The heap size at the end is the answer.",steps:["Sort by lastDay ascending.","total = 0; max-heap of durations.","For each [d, last]: push d; total += d.","If total > last: total -= pop(); (drop the longest).","Return the heap size."],time:"O(n log n)",space:"O(n)"},dry:["courses = [ [100, 200], [200, 130], [300, 300] ] → sorted by deadline: [200,130],[100,200],[300,300]","take [200,130]: total 200 > 130 → drop 200 → total 0, heap []","take [100,200]: total 100 ≤ 200 ✓","take [300,300]: total 400 > 300 → drop 300 → total 100, heap [100]","Answer: 1 course","Example 1: [[1,2],[2,3],[3,4]] → take 1 (t=1), take 2 (t=3 ≤ 3), take 3 (t=6 > 4 → drop 3) → 2 courses"],hints:["Why sort by deadline? (earlier deadlines are the tighter constraints)","When you exceed a deadline, WHICH course to drop costs you the least? (the longest one)","The heap size is the answer — every course in it fits the schedule."],code:{javascript:`function scheduleCourse(courses) {
  courses.sort((a, b) => a[1] - b[1]);
  const heap = [];
  const push = (x) => {
    heap.push(x);
    let i = heap.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (heap[p] >= heap[i]) break;
      [heap[p], heap[i]] = [heap[i], heap[p]];
      i = p;
    }
  };
  const pop = () => {
    const top = heap[0];
    heap[0] = heap[heap.length - 1];
    heap.pop();
    for (let i = 0; ; ) {
      const l = 2 * i + 1, r = l + 1;
      let s = i;
      if (l < heap.length && heap[l] > heap[s]) s = l;
      if (r < heap.length && heap[r] > heap[s]) s = r;
      if (s === i) break;
      [heap[s], heap[i]] = [heap[i], heap[s]];
      i = s;
    }
    return top;
  };
  let total = 0;
  for (const [d, last] of courses) {
    push(d);
    total += d;
    if (total > last) total -= pop();
  }
  return heap.length;
}`,python:`import heapq
def scheduleCourse(courses):
    courses.sort(key=lambda c: c[1])
    heap = []
    total = 0
    for d, last in courses:
        heapq.heappush(heap, -d)
        total += d
        if total > last:
            total += heapq.heappop(heap)  # pop negative → subtract duration
    return len(heap)`,java:"",cpp:""}},{id:"hp-16",slug:"find-median-from-data-stream",title:"Find Median from Data Stream",pattern:"heap",difficulty:"Hard",platform:"LeetCode",url:"https://leetcode.com/problems/find-median-from-data-stream/",extra:[],summary:"A stream of numbers arrives one by one. Support addNum(num) and findMedian() both in amortized O(log n) / O(1).",asked:"Design a class maintaining the running median of all numbers seen so far.",why:"Split the data into two halves: a max-heap of the LOWER half and a min-heap of the UPPER half, kept balanced. The median reads directly from the tops.",clues:["running median","stream / data stream","two heaps"],brute:{idea:"Store everything in a list; sort on each median query.",time:"O(n log n) per query",space:"O(n)"},optimal:{idea:"lo = max-heap (lower half), hi = min-heap (upper half). Insert into lo, move lo's top to hi; if hi becomes larger than lo, move hi's top back. Invariant: sizes equal or lo one bigger. Median = lo.top (odd) or average of both tops (even).",steps:["addNum(x): pushMax(lo, x); pushMin(hi, popMax(lo)).","If hi.size > lo.size: pushMax(lo, popMin(hi)).","findMedian(): if lo bigger → lo.top; else (lo.top + hi.top) / 2.","Both heaps stay balanced after every insert."],time:"O(log n) insert, O(1) median",space:"O(n)"},dry:["add 1 → lo [1], hi [] → median 1.0","add 2 → lo [2]? insert 2 into lo → lo top 2 → move to hi: lo [1], hi [2] → median (1+2)/2 = 1.5","add 3 → lo: insert 3 → top 3 → hi: lo [1], hi [3,2] → hi bigger → move 2 to lo: lo [2,1], hi [3] → median lo.top = 2 ✓","Sorted so far: 1,2,3 → median 2 ✓"],hints:["The median only ever comes from the boundary between the lower and upper halves.","Which heap type for the lower half? (you need its MAXIMUM fast)","The balance rule (sizes differ by at most 1, lo ≥ hi) makes both median cases trivial."],code:{javascript:`class MedianFinder {
  constructor() {
    this.lo = []; // max-heap (lower half)
    this.hi = []; // min-heap (upper half)
  }
  _pushMax(h, x) {
    h.push(x);
    let i = h.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (h[p] >= h[i]) break;
      [h[p], h[i]] = [h[i], h[p]];
      i = p;
    }
  }
  _popMax(h) {
    const top = h[0];
    h[0] = h[h.length - 1];
    h.pop();
    for (let i = 0; ; ) {
      const l = 2 * i + 1, r = l + 1;
      let s = i;
      if (l < h.length && h[l] > h[s]) s = l;
      if (r < h.length && h[r] > h[s]) s = r;
      if (s === i) break;
      [h[s], h[i]] = [h[i], h[s]];
      i = s;
    }
    return top;
  }
  _pushMin(h, x) {
    h.push(x);
    let i = h.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (h[p] <= h[i]) break;
      [h[p], h[i]] = [h[i], h[p]];
      i = p;
    }
  }
  _popMin(h) {
    const top = h[0];
    h[0] = h[h.length - 1];
    h.pop();
    for (let i = 0; ; ) {
      const l = 2 * i + 1, r = l + 1;
      let s = i;
      if (l < h.length && h[l] < h[s]) s = l;
      if (r < h.length && h[r] < h[s]) s = r;
      if (s === i) break;
      [h[s], h[i]] = [h[i], h[s]];
      i = s;
    }
    return top;
  }
  addNum(num) {
    this._pushMax(this.lo, num);
    this._pushMin(this.hi, this._popMax(this.lo));
    if (this.hi.length > this.lo.length) {
      this._pushMax(this.lo, this._popMin(this.hi));
    }
  }
  findMedian() {
    if (this.lo.length > this.hi.length) return this.lo[0];
    return (this.lo[0] + this.hi[0]) / 2;
  }
}`,python:`import heapq
class MedianFinder:
    def __init__(self):
        self.lo = []  # max-heap via negatives
        self.hi = []  # min-heap

    def addNum(self, num):
        heapq.heappush(self.lo, -num)
        heapq.heappush(self.hi, -heapq.heappop(self.lo))
        if len(self.hi) > len(self.lo):
            heapq.heappush(self.lo, -heapq.heappop(self.hi))

    def findMedian(self):
        if len(self.lo) > len(self.hi):
            return -self.lo[0]
        return (-self.lo[0] + self.hi[0]) / 2`,java:"",cpp:""}},{id:"hp-17",slug:"sliding-window-median",title:"Sliding Window Median",pattern:"heap",difficulty:"Hard",platform:"LeetCode",url:"https://leetcode.com/problems/sliding-window-median/",extra:[],summary:"Given an array and window size k, compute the median of every sliding window of length k.",asked:"An array of (n - k + 1) medians, one per window position.",why:'The two-heaps median structure, extended with LAZY DELETION: a window leaves an old element behind, so mark it "removed" and clean stale tops before reading the median.',clues:["median per sliding window","k-sized windows","two heaps + lazy delete"],brute:{idea:"For each window, sort the k elements and read the middle.",time:"O(n·k log k)",space:"O(k)"},optimal:{idea:"maxHeap = lower half (top = its max), minHeap = upper half (top = its min), holding [value, index]. On each slide: insert (balance sizes), mark the outgoing element as removed, clean heap tops, read the median. Removed entries are purged only when they reach a top.",steps:["Insert: if value ≤ maxHeap.top → maxHeap else minHeap; then balance sizes (moving tops).","Outgoing: add (value, index) to a removed set (key = value#index).","Clean: while a heap top is in removed, pop it.","Median: k odd → maxHeap.top; even → (maxHeap.top + minHeap.top) / 2.","Repeat for every window position."],time:"O(n log k)",space:"O(k)"},dry:["nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3","W1 [1,3,-1] → sorted [-1,1,3] → 1","W2 [3,-1,-3] → -1","W3 [-1,-3,5] → -1","W4 [-3,5,3] → 3","W5 [5,3,6] → 5","W6 [3,6,7] → 6","Answer: [1, -1, -1, 3, 5, 6]"],hints:["Rebuild-from-scratch per window is too slow — what changes between windows? (one out, one in)","Lazy deletion: you do NOT remove an element immediately — you mark it and ignore it at the top.","Why key the removed set by (value, INDEX) instead of value alone?"],code:{javascript:`function medianSlidingWindow(nums, k) {
  class Heap {
    constructor(cmp) { this.a = []; this.cmp = cmp; }
    get size() { return this.a.length; }
    peek() { return this.a[0]; }
    push(x) {
      this.a.push(x);
      let i = this.a.length - 1;
      while (i > 0) {
        const p = (i - 1) >> 1;
        if (this.cmp(this.a[i], this.a[p]) >= 0) break;
        [this.a[p], this.a[i]] = [this.a[i], this.a[p]];
        i = p;
      }
    }
    pop() {
      const top = this.a[0];
      this.a[0] = this.a[this.a.length - 1];
      this.a.pop();
      for (let i = 0; ; ) {
        const l = 2 * i + 1, r = l + 1;
        let s = i;
        if (l < this.a.length && this.cmp(this.a[l], this.a[s]) < 0) s = l;
        if (r < this.a.length && this.cmp(this.a[r], this.a[s]) < 0) s = r;
        if (s === i) break;
        [this.a[s], this.a[i]] = [this.a[i], this.a[s]];
        i = s;
      }
      return top;
    }
  }
  const maxHeap = new Heap((x, y) => y[0] - x[0]); // lower half
  const minHeap = new Heap((x, y) => x[0] - y[0]); // upper half
  const removed = new Set();
  const alive = (v) => !removed.has(v[0] + '#' + v[1]);
  const clean = (h) => { while (h.size && !alive(h.peek())) h.pop(); };
  const balance = () => {
    clean(maxHeap);
    clean(minHeap);
    while (maxHeap.size > minHeap.size + 1) minHeap.push(maxHeap.pop());
    while (minHeap.size > maxHeap.size) maxHeap.push(minHeap.pop());
  };
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];
    if (maxHeap.size && val <= maxHeap.peek()[0]) maxHeap.push([val, i]);
    else minHeap.push([val, i]);
    if (i >= k) removed.add(nums[i - k] + '#' + (i - k));
    balance();
    if (i >= k - 1) {
      clean(maxHeap);
      clean(minHeap);
      res.push(
        k % 2 ? maxHeap.peek()[0] : (maxHeap.peek()[0] + minHeap.peek()[0]) / 2
      );
    }
  }
  return res;
}`,python:`import heapq
def medianSlidingWindow(nums, k):
    max_heap = []  # negative values, lower half
    min_heap = []  # upper half
    removed = set()
    def alive(v, i):
        return (v, i) not in removed
    def clean(h, negate):
        while h and not alive(-h[0][0] if negate else h[0][0], h[0][1]):
            heapq.heappop(h)
    res = []
    for i, x in enumerate(nums):
        if max_heap and -max_heap[0][0] >= x:
            heapq.heappush(max_heap, (-x, i))
        else:
            heapq.heappush(min_heap, (x, i))
        if len(max_heap) > len(min_heap) + 1:
            v, idx = heapq.heappop(max_heap)
            heapq.heappush(min_heap, (-v, idx))
        elif len(min_heap) > len(max_heap):
            v, idx = heapq.heappop(min_heap)
            heapq.heappush(max_heap, (-v, idx))
        if i >= k:
            removed.add((nums[i - k], i - k))
        clean(max_heap, True)
        clean(min_heap, False)
        if i >= k - 1:
            if k % 2:
                res.append(-max_heap[0][0])
            else:
                res.append((-max_heap[0][0] + min_heap[0][0]) / 2)
    return res`,java:"",cpp:""}}],lt=[{id:"rc-01",slug:"fibonacci",title:"Fibonacci",pattern:"recursion-backtracking",difficulty:"Easy",platform:"LeetCode",url:"https://leetcode.com/problems/fibonacci-number/",extra:[{label:"Watch Video ↗",url:"https://www.youtube.com/watch?v=j4wjZqzhMqc"}],summary:"Given n, return the nth Fibonacci number: F(0) = 0, F(1) = 1, F(n) = F(n-1) + F(n-2).",asked:"Compute F(n) — the canonical first recursion problem.",why:"The definition IS recursive: the answer is the sum of two smaller answers. This problem teaches base case + recursive case — and why naive recursion is exponential without memoization.",clues:["defined in terms of smaller n","base cases","recursive sequence"],brute:{idea:"Naive recursion exactly following the definition — recomputes the same values exponentially.",time:"O(2ⁿ)",space:"O(n)"},optimal:{idea:"Either memoize (top-down: cache each F(k) once) or tabulate bottom-up (two running variables). Both give O(n).",steps:["Base: F(0) = 0, F(1) = 1.","Memoized: f(k) = cached value if seen, else f(k-1) + f(k-2) stored in the cache.","Tabulation: a = 0, b = 1; iterate to n: c = a + b; a = b; b = c.","Return b (or the memo).","Space can drop to O(1) with two variables."],time:"O(n)",space:"O(1) tabulation / O(n) memo stack"},dry:["n = 5","F(0)=0, F(1)=1, F(2)=1, F(3)=2, F(4)=3, F(5)=5","Tabulation: (a,b) = (0,1) → (1,1) → (1,2) → (2,3) → (3,5)","Answer: 5"],hints:["What are the base cases? (the values that do NOT recurse)","The recursive case: F(n) = F(n-1) + F(n-2).","Naive recursion draws a tree with repeated subproblems — memoization flattens it."],code:{javascript:`// Memoized (top-down)
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
}`,python:`# Memoized
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
    return a`,java:"",cpp:""}},{id:"rc-02",slug:"check-if-string-is-palindrome",title:"Check if String is Palindrome",pattern:"recursion-backtracking",difficulty:"Easy",platform:"GeeksforGeeks",url:"https://www.geeksforgeeks.org/problems/palindrome-string0817/1",extra:[{label:"Watch Video ↗",url:"https://www.youtube.com/watch?v=j4wjZqzhMqc"}],summary:"Check whether a string reads the same forwards and backwards (lowercase input per GFG).",asked:"Return true if the string is a palindrome.",why:"Compare the outer pair, then the problem SHRINKS to the inside — a clean two-pointer recursion.",clues:["reads same both ways","compare from both ends","shrink to inside"],brute:{idea:"Reverse the string and compare.",time:"O(n)",space:"O(n)"},optimal:{idea:"Recursion on the two ends: f(l, r) = (s[l] === s[r]) && f(l+1, r-1). Base: l >= r → true.",steps:["Optionally normalize (lowercase, strip non-alphanumerics).","f(l, r): if l >= r return true.","If s[l] !== s[r] return false.","Else return f(l + 1, r - 1).","Start with f(0, n - 1)."],time:"O(n)",space:"O(n) recursion stack"},dry:['s = "madam"',"f(0,4): m === m → f(1,3)","f(1,3): a === a → f(2,2)","f(2,2): l >= r → true","Answer: true",'s = "hello": f(0,4): h !== o → false'],hints:["If the first and last characters differ, can it still be a palindrome?","If they match, the question becomes smaller — how much smaller?","The base case is when the two pointers meet or cross."],code:{javascript:`function isPalindrome(s) {
  const t = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  const f = (l, r) => {
    if (l >= r) return true;
    if (t[l] !== t[r]) return false;
    return f(l + 1, r - 1);
  };
  return f(0, t.length - 1);
}`,python:`def isPalindrome(s):
    t = ''.join(c for c in s.lower() if c.isalnum())
    def f(l, r):
        if l >= r:
            return True
        if t[l] != t[r]:
            return False
        return f(l + 1, r - 1)
    return f(0, len(t) - 1)`,java:"",cpp:""}},{id:"rc-03",slug:"check-if-array-is-sorted",title:"Check if Array is Sorted",pattern:"recursion-backtracking",difficulty:"Easy",platform:"GeeksforGeeks",url:"https://www.geeksforgeeks.org/problems/check-if-an-array-is-sorted0701/1",extra:[{label:"Watch Video ↗",url:"https://www.youtube.com/watch?v=-gC-QEdpvO4"}],summary:"Check whether an array is sorted in non-decreasing order using recursion.",asked:"Return true if every element is ≤ the next one.",why:"Check the current adjacent pair, then recurse on the rest of the array — the problem shrinks by one position each call.",clues:["sorted or not","adjacent pairs","shrink the array"],brute:{idea:"Iterative single-pass comparison (recursion adds the stack but the logic is the same).",time:"O(n)",space:"O(n) stack"},optimal:{idea:"f(i): if i is at the last index → true. If arr[i] > arr[i+1] → false. Else f(i+1).",steps:["f(i) with i starting at 0.","Base: i >= n - 1 → true (nothing left to compare).","If arr[i] > arr[i+1] → false.","Else return f(i + 1)."],time:"O(n)",space:"O(n)"},dry:["arr = [1, 2, 3, 4]","f(0): 1 ≤ 2 → f(1); f(1): 2 ≤ 3 → f(2); f(2): 3 ≤ 4 → f(3); f(3): base → true","Answer: true","arr = [1, 3, 2]: f(0) ok → f(1): 3 > 2 → false"],hints:["One comparison per recursive call — which pair?",'The base case: when there is no "next" element.',"The answer is the AND of all adjacent comparisons."],code:{javascript:`function isSorted(arr, i = 0) {
  if (i >= arr.length - 1) return true;
  if (arr[i] > arr[i + 1]) return false;
  return isSorted(arr, i + 1);
}`,python:`def isSorted(arr, i = 0):
    if i >= len(arr) - 1:
        return True
    if arr[i] > arr[i + 1]:
        return False
    return isSorted(arr, i + 1)`,java:"",cpp:""}},{id:"rc-04",slug:"sum-of-digits-of-a-number",title:"Sum of Digits of a Number",pattern:"recursion-backtracking",difficulty:"Easy",platform:"GeeksforGeeks",url:"https://www.geeksforgeeks.org/problems/sum-of-digits1742/1",extra:[{label:"Watch Video ↗",url:"https://www.youtube.com/watch?v=-gC-QEdpvO4"}],summary:"Compute the sum of the digits of a number using recursion.",asked:"Return the digit sum (e.g. 1234 → 10).",why:"A number splits into its last digit plus the rest: sumDigits(n) = (n % 10) + sumDigits(n / 10). Base case: single digit.",clues:["peel off one digit","base case single digit","number decomposition"],brute:{idea:"Stringify and sum the characters (recursion shows the arithmetic version).",time:"O(digits)",space:"O(digits)"},optimal:{idea:"f(n): if n < 10 return n; else return (n % 10) + f(floor(n / 10)).",steps:["Take absolute value (negative inputs).","Base: n < 10 → n.","Recurse: last digit + sum of the rest.","n % 10 gives the last digit; floor(n / 10) removes it."],time:"O(log₁₀ n)",space:"O(log₁₀ n)"},dry:["n = 1234","f(1234) = 4 + f(123)","f(123) = 3 + f(12)","f(12) = 2 + f(1)","f(1) = 1 (base)","Answer: 4 + 3 + 2 + 1 = 10"],hints:["How do you extract the last digit of a number?","How do you remove it? (integer division)","When does the recursion stop? (single digit)"],code:{javascript:`function sumOfDigits(n) {
  n = Math.abs(n);
  if (n < 10) return n;
  return (n % 10) + sumOfDigits(Math.floor(n / 10));
}`,python:`def sumOfDigits(n):
    n = abs(n)
    if n < 10:
        return n
    return n % 10 + sumOfDigits(n // 10)`,java:"",cpp:""}},{id:"rc-05",slug:"remove-occurrences-of-a-character",title:"Remove Occurrences of a Character in String",pattern:"recursion-backtracking",difficulty:"Easy",platform:"GeeksforGeeks",url:"https://www.geeksforgeeks.org/problems/remove-all-occurrences-of-a-character-in-a-string/1",extra:[{label:"Watch Video ↗",url:"https://www.youtube.com/watch?v=-gC-QEdpvO4"}],summary:"Remove all occurrences of a given character from a string (case-insensitive per GFG), using recursion.",asked:"Return the string with every instance of the character deleted.",why:"Process one character at a time: either keep it (it is not the target) or skip it — then recurse on the rest of the string.",clues:["remove all of one character","one char per step","case-insensitive"],brute:{idea:"Iterative filter / replace (recursion mirrors it step by step).",time:"O(n)",space:"O(n)"},optimal:{idea:'f(i): if i is past the end → return "". If s[i] (lowercased) equals the target → return f(i+1) (skip). Else return s[i] + f(i+1).',steps:["f(i) with i starting at 0.",'Base: i >= s.length → "".',"If lowercased s[i] === target: return f(i + 1).","Else: return s[i] + f(i + 1)."],time:"O(n)",space:"O(n)"},dry:['s = "aBaBa", target = "b" (case-insensitive)','f(0): keep "a" → "a" + f(1)','f(1): "b" matches → skip → f(2)','f(2): keep "a" → f(3)','f(3): "B" matches (case-insensitive) → f(4)','f(4): keep "a" → f(5) → ""','Answer: "aaa"'],hints:["At each index you have exactly two choices: keep or skip.","Case-insensitivity: compare in lowercase.","The base case is the empty suffix — return the empty string."],code:{javascript:`function removeAllOccurrences(s, c) {
  const target = c.toLowerCase();
  let i = 0;
  const f = () => {
    if (i >= s.length) return '';
    if (s[i].toLowerCase() === target) return f();
    return s[i] + f();
  };
  return f();
}`,python:`def removeAllOccurrences(s, c):
    target = c.lower()
    def f(i=0):
        if i >= len(s):
            return ''
        if s[i].lower() == target:
            return f(i + 1)
        return s[i] + f(i + 1)
    return f()`,java:"",cpp:""}},{id:"rc-06",slug:"generate-parentheses",title:"Generate Parentheses",pattern:"recursion-backtracking",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/generate-parentheses/",extra:[],summary:"Given n pairs of parentheses, generate all combinations of well-formed (balanced) parentheses.",asked:"All strings of n opening and n closing parens that are valid.",why:'Textbook backtracking over a choice tree: at each step you may add "(" if you still have opens, or ")" only if it would stay balanced (closes < opens).',clues:["generate all valid","choices at each step","balance constraint"],brute:{idea:"Generate all 2^(2n) strings of parens and filter the valid ones.",time:"O(2^(2n) · n)",space:"O(n)"},optimal:{idea:'Backtrack(state, opens, closes): stop when length = 2n (save). Choice 1: if opens < n add "(". Choice 2: if closes < opens add ")". The constraint prunes every invalid branch immediately.',steps:["f(cur, openCount, closeCount).","If cur.length === 2n: push a copy; return.",'If openCount < n: f(cur + "(", openCount + 1, closeCount).','If closeCount < openCount: f(cur + ")", openCount, closeCount + 1).','Start f("", 0, 0).'],time:"O(4ⁿ / √n) — Catalan-many outputs",space:"O(n)"},dry:['n = 2: start at ("", opens=0, closes=0)','Add "(" → ("(", 1, 0); add "(" → ("((", 2, 0)','Opens used up — only ")" is legal → ("(()", 2, 1) → ("(())", 2, 2) → save "(())"','Backtrack to ("(", 1, 0): now ")" is legal (closes < opens) → ("()", 1, 1)','Add "(" → ("()(", 2, 1); add ")" → ("()()", 2, 2) → save "()()"','Answer: ["(())", "()()"]'],hints:["When is it ILLEGAL to add a closing parenthesis?","Track two counters: opens used, closes used — and the rule closes ≤ opens.","A solution is complete exactly when both counters equal n."],code:{javascript:`function generateParenthesis(n) {
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
}`,python:`def generateParenthesis(n):
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
    return res`,java:"",cpp:""}},{id:"rc-07",slug:"letter-combinations-of-a-phone-number",title:"Letter Combinations of a Phone Number",pattern:"recursion-backtracking",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/letter-combinations-of-a-phone-number/",extra:[{label:"Watch Video ↗",url:"https://www.youtube.com/watch?v=IKfIT6uFOcs"}],summary:"Given a string of digits 2-9, return all letter combinations it could represent on a telephone keypad.",asked:"Every product of the per-digit letter sets, in order.",why:"Each digit contributes a CHOICE (its letters) — a depth-first traversal of the choice tree: pick a letter for digit i, recurse on digit i+1.",clues:["all combinations","per-position choices","keypad mapping"],brute:{idea:"Iteratively grow a list of partial strings (same complexity, less structure).",time:"O(4ⁿ · n)",space:"O(4ⁿ · n)"},optimal:{idea:"Backtrack over digit positions: f(i, path): if i === digits.length save path; else for each letter of digits[i]: f(i+1, path + letter).",steps:["map: 2→abc, 3→def, 4→ghi, 5→jkl, 6→mno, 7→pqrs, 8→tuv, 9→wxyz.","If digits is empty: return [].","f(i, path): base at i === length.","For each letter in map[digits[i]]: f(i + 1, path + letter).",'Start f(0, "").'],time:"O(4ⁿ · n)",space:"O(n) depth + output"},dry:['digits = "23"','f(0,""): digit 2 → letters a,b,c','  f(1,"a"): digit 3 → d,e,f → "ad","ae","af"','  f(1,"b") → "bd","be","bf"','  f(1,"c") → "cd","ce","cf"','Answer: ["ad","ae","af","bd","be","bf","cd","ce","cf"]'],hints:['What is the "state" at recursion depth i? (the partial string)',"Each digit multiplies the number of branches by 3 or 4.","A complete combination happens exactly when every digit has been assigned a letter."],code:{javascript:`function letterCombinations(digits) {
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
}`,python:`def letterCombinations(digits):
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
    return res`,java:"",cpp:""}},{id:"rc-08",slug:"permutations",title:"Permutations",pattern:"recursion-backtracking",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/permutations/",extra:[],summary:"Given an array of distinct integers, return all possible permutations.",asked:"Every ordering of the n elements (n! of them).",why:"Build a permutation one position at a time: at each depth, choose which UNUSED element goes next, recurse, then undo the choice (classic backtrack state).",clues:["all orderings","each element used once","n! outputs"],brute:{idea:"Recursion that copies the used set — same tree, more allocation.",time:"O(n · n!)",space:"O(n)"},optimal:{idea:'Backtrack(path, remaining): if remaining is empty, save path; else for each index i: take remaining[i], recurse on the rest WITHOUT that element, then the loop naturally "undoes" it (remaining is immutable here / or pop from a shared list).',steps:["f(path, remaining).","If remaining.length === 0: push a copy of path; return.","For i in 0..remaining.length-1:","next = remaining without index i.","f(path + [remaining[i]], next).","Start f([], nums)."],time:"O(n · n!)",space:"O(n) + output"},dry:["nums = [1, 2, 3]","f([], [1,2,3]): pick 1 → f([1], [2,3]) → pick 2 → f([1,2], [3]) → [1,2,3]; pick 3 → [1,3,2]","pick 2 → [2,1,3], [2,3,1]","pick 3 → [3,1,2], [3,2,1]","Answer: 6 permutations ✓"],hints:["At each position, what are your choices? (every element not yet placed)",'How do you express "not yet placed"? (a remaining list, or a used set)',"A complete permutation is built when nothing remains to place."],code:{javascript:`function permute(nums) {
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
}`,python:`def permute(nums):
    res = []
    def f(path, remaining):
        if not remaining:
            res.append(path)
            return
        for i in range(len(remaining)):
            f(path + [remaining[i]], remaining[:i] + remaining[i + 1:])
    f([], nums)
    return res`,java:"",cpp:""}},{id:"rc-09",slug:"combination-sum",title:"Combination Sum",pattern:"recursion-backtracking",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/combination-sum/",extra:[],summary:"Given distinct candidate numbers and a target, find all unique combinations where the numbers sum to the target. A candidate may be reused unlimited times.",asked:"All combinations (order-independent, no duplicate combos) summing exactly to the target.",why:"Backtracking with a running sum: choose a candidate (allowed to repeat → recurse from the SAME index), recurse with the reduced target, undo. Starting index only increases — that kills duplicates.",clues:["sum to target","reuse allowed","unique combinations"],brute:{idea:"Unordered search over all multisets — without the start-index rule you generate duplicates.",time:"exponential (with duplicates)",space:"O(target)"},optimal:{idea:"f(start, path, remaining): if remaining === 0 save a copy; if start out of range return. For i from start to end: skip candidates larger than remaining; take it, recurse with the SAME i (reuse), then pop.",steps:["f(start, path, remaining).","If remaining === 0: push a copy of path; return.","For i from start to candidates.length - 1:","If candidates[i] > remaining: continue.","path.push(candidates[i]); f(i, path, remaining - candidates[i]); path.pop().","Start f(0, [], target)."],time:"O(n^(target/min))",space:"O(target/min)"},dry:["candidates = [2, 3, 5], target = 8","start with 2: 2 → 2,2 → 2,2,2 → 2,2,2,2 (sum 8 ✓); 2,2,2,3 (7→ no 8? 2+2+2+3=9 > 8, stop); back 2,2 → 2,2,5 (9 > 8 skip)","2,3: 2+3=5 → +2 (7) → +2 (9>8); +3 (8 ✓ → [2,3,3]); +5 (10>8)","3: 3 → +3 (6) → +2 (8 ✓ → [3,3,2]? no — start index prevents 2 after 3; so [3,3,3]=9 no; 3,5=8 ✓ → [3,5]","5: 5 → +2 no (start≥index of 5) → [5] + rest none (5+5=10)","Answer: [[2,2,2,2], [2,3,3], [3,5]]"],hints:['Why does the loop start at "start" instead of 0? (that prevents duplicate combinations)',"Reuse is allowed, so after taking candidates[i] you recurse from i — not i+1.","Prune: if a candidate exceeds the remaining sum, skip it."],code:{javascript:`function combinationSum(candidates, target) {
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
}`,python:`def combinationSum(candidates, target):
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
    return res`,java:"",cpp:""}},{id:"rc-10",slug:"palindrome-partitioning",title:"Palindrome Partitioning",pattern:"recursion-backtracking",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/palindrome-partitioning/",extra:[],summary:"Given a string, return all possible partitions of the string such that every substring in the partition is a palindrome.",asked:"Every way to cut the string into palindromic pieces.",why:"Choose the length of the NEXT piece: it must be a palindrome; if so, take it and recurse on the suffix. Backtrack the cut when a branch ends.",clues:["partition into palindromes","all ways","prefix must be valid"],brute:{idea:"Try all 2^(n-1) cut patterns and validate each piece.",time:"O(2ⁿ · n)",space:"O(n)"},optimal:{idea:"f(i, path): if i === n save a copy. For j from i+1 to n: piece = s[i..j); if isPalindrome(piece): push, f(j, path), pop.",steps:["isPalindrome helper (two pointers).","f(i, path): base at i === s.length.","For j in i+1..n: if s.slice(i, j) is a palindrome:","path.push(piece); f(j, path); path.pop().","Start f(0, [])."],time:"O(2ⁿ · n)",space:"O(n) + output"},dry:['s = "aab"','f(0,[]): piece "a" (pal) → f(1,["a"]): piece "a" (pal) → f(2,["a","a"]): piece "b" (pal) → f(3,["a","a","b"]) → save','back: at f(1), piece "ab" not a palindrome','at f(0), piece "aa" (pal) → f(2,["aa"]): piece "b" → save ["aa","b"]','Answer: [["a","a","b"], ["aa","b"]]'],hints:["A partition is a sequence of cuts — which cut do you choose first?","Only palindromic prefixes can start a valid partition.",'The recursion index is simply "where in the string am I now?"'],code:{javascript:`function partition(s) {
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
}`,python:`def partition(s):
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
    return res`,java:"",cpp:""}}],dt=[{id:"tr-01",slug:"inorder-traversal",title:"Inorder Traversal",pattern:"tree",difficulty:"Easy",platform:"LeetCode",url:"https://leetcode.com/problems/binary-tree-inorder-traversal/",extra:[],summary:"Given the root of a binary tree, return the inorder traversal of its node values (left, node, right).",asked:"The values visited in L-N-R order, left to right.",why:"Inorder is the recursive workhorse of trees: visit the left subtree, then the node, then the right. For a BST this yields SORTED order.",clues:["binary tree","inorder / L-N-R","traversal order"],brute:{idea:"Recursion (the natural solution) — an explicit stack gives O(1) extra space (Morris).",time:"O(n)",space:"O(h)"},optimal:{idea:"f(node): if null return. f(left); record node.val; f(right).",steps:["res = [].","f(node): base null → return.","Recurse left, push val, recurse right.","Return res."],time:"O(n)",space:"O(h) recursion stack"},dry:["Tree: [1, null, 2, null, 3] (1 → right 2 → right 3)","f(1): f(left=null); push 1; f(2): f(null); push 2; f(3): push 3","Answer: [1, 2, 3]"],hints:["In which order do you visit the node itself? (between its subtrees)","The base case is a null child.","For a BST, inorder traversal is a sorted list — a useful sanity check."],code:{javascript:`function inorderTraversal(root) {
  const res = [];
  const f = (node) => {
    if (!node) return;
    f(node.left);
    res.push(node.val);
    f(node.right);
  };
  f(root);
  return res;
}`,python:`def inorderTraversal(root):
    res = []
    def f(node):
        if not node:
            return
        f(node.left)
        res.append(node.val)
        f(node.right)
    f(root)
    return res`,java:"",cpp:""}},{id:"tr-02",slug:"preorder-traversal",title:"Preorder Traversal",pattern:"tree",difficulty:"Easy",platform:"LeetCode",url:"https://leetcode.com/problems/binary-tree-preorder-traversal/",extra:[],summary:"Return the preorder traversal of a binary tree (node, left, right).",asked:"The values visited in N-L-R order.",why:'Preorder visits the node BEFORE its subtrees — it is how you serialize a tree (root first), and the skeleton for many "process then descend" problems.',clues:["node first","N-L-R order","serialization order"],brute:{idea:"Recursion (or an explicit stack).",time:"O(n)",space:"O(h)"},optimal:{idea:"f(node): if null return. Record node.val; f(left); f(right).",steps:["res = [].","f(node): base null.","Push val, recurse left, recurse right.","Return res."],time:"O(n)",space:"O(h)"},dry:["Tree: 1 → left 2, right 3; 2 → left 4, right 5","f(1): 1; f(2): 2; f(4): 4; f(5): 5; f(3): 3","Answer: [1, 2, 4, 5, 3]"],hints:["Which of the three visits happens first?",'The skeleton is identical to inorder — only the position of "push val" changes.',"Preorder of a BST is NOT sorted — unlike inorder."],code:{javascript:`function preorderTraversal(root) {
  const res = [];
  const f = (node) => {
    if (!node) return;
    res.push(node.val);
    f(node.left);
    f(node.right);
  };
  f(root);
  return res;
}`,python:`def preorderTraversal(root):
    res = []
    def f(node):
        if not node:
            return
        res.append(node.val)
        f(node.left)
        f(node.right)
    f(root)
    return res`,java:"",cpp:""}},{id:"tr-03",slug:"postorder-traversal",title:"Postorder Traversal",pattern:"tree",difficulty:"Easy",platform:"LeetCode",url:"https://leetcode.com/problems/binary-tree-postorder-traversal/",extra:[],summary:"Return the postorder traversal of a binary tree (left, right, node).",asked:"The values visited in L-R-N order. (Homework-style: derive it from what you already know.)",why:"Postorder processes children BEFORE the parent — ideal when a node's answer depends on both subtrees (sizes, sums, validity).",clues:["children first","L-R-N order","depends on subtrees"],brute:{idea:'Recursion (or an explicit stack with a "visited" marker).',time:"O(n)",space:"O(h)"},optimal:{idea:"f(node): if null return. f(left); f(right); record node.val.",steps:["res = [].","f(node): base null.","Recurse left, recurse right, then push val.","Return res."],time:"O(n)",space:"O(h)"},dry:["Tree: 1 → left 2, right 3; 2 → left 4, right 5","f(1): f(2): f(4): 4; f(5): 5; then 2; f(3): 3; then 1","Answer: [4, 5, 2, 3, 1]"],hints:[`When is "process after children" the right order? (when you need the children's answers first)`,'Same skeleton as the other two traversals — move "push val" to the end.',"Postorder is how you would DELETE a tree: delete subtrees, then the node."],code:{javascript:`function postorderTraversal(root) {
  const res = [];
  const f = (node) => {
    if (!node) return;
    f(node.left);
    f(node.right);
    res.push(node.val);
  };
  f(root);
  return res;
}`,python:`def postorderTraversal(root):
    res = []
    def f(node):
        if not node:
            return
        f(node.left)
        f(node.right)
        res.append(node.val)
    f(root)
    return res`,java:"",cpp:""}},{id:"tr-04",slug:"level-order-traversal",title:"Level Order",pattern:"tree",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/binary-tree-level-order-traversal/",extra:[],summary:"Return the level order traversal of a binary tree: values grouped by depth, left to right.",asked:"An array of arrays: [level 0, level 1, level 2, ...].",why:'BFS with a queue: process the queue in "batches" of its current size — each batch is exactly one level.',clues:["level by level","BFS / queue","group by depth"],brute:{idea:"Recursively collect with a depth parameter, appending to the right bucket.",time:"O(n)",space:"O(n)"},optimal:{idea:"queue = [root]. While queue non-empty: take a batch of size queue.length; for each node in the batch, record its value and enqueue its children. Push the batch as a level.",steps:["If root is null: return [].","queue = [root].","While queue.length: level = []; for i in 0..queue.length-1: node = queue.shift(); level.push(node.val); enqueue children.","Push level into the result.","Return the result."],time:"O(n)",space:"O(n) queue"},dry:["Tree: 3 → left 9, right 20; 20 → left 15, right 7","batch [3] → level [3]; queue [9, 20]","batch [9, 20] → level [9, 20]; queue [15, 7]","batch [15, 7] → level [15, 7]","Answer: [[3], [9, 20], [15, 7]]"],hints:["Why does batching by the queue's CURRENT size give exactly one level?","Children of level d are enqueued while processing level d — so they form the next batch.","An array used as a queue (shift) works; for large trees track a head index for O(1) dequeue."],code:{javascript:`function levelOrder(root) {
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
}`,python:`from collections import deque
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
    return res`,java:"",cpp:""}},{id:"tr-05",slug:"zigzag-order",title:"ZigZag Order",pattern:"tree",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",extra:[],summary:"Level order traversal, but alternate the direction each level: left-to-right, then right-to-left, and so on.",asked:"Zigzag level values as an array of arrays.",why:"Level order is a BFS — the zigzag is just a direction flag: collect the batch, and reverse it on odd levels.",clues:["alternate direction","level order variant","zigzag"],brute:{idea:"Level order, then reverse every other level.",time:"O(n)",space:"O(n)"},optimal:{idea:"Same BFS batch loop with a leftToRight flag: if false, reverse the level before recording. Flip the flag each level.",steps:["queue = [root]; leftToRight = true.","Batch loop: collect node values and enqueue children.","If !leftToRight: level.reverse().","Push level; leftToRight = !leftToRight.","Return the result."],time:"O(n)",space:"O(n)"},dry:["Tree: 3 → 9, 20; 20 → 15, 7","level 0 (L→R): [3]","level 1 (R→L): [20, 9]","level 2 (L→R): [15, 7]","Answer: [[3], [20, 9], [15, 7]]"],hints:["The queue still fills left-to-right — only the READING of each level flips.","A single boolean flag toggles each level.","You could also enqueue children in reversed order on flipped levels (avoiding the reverse call)."],code:{javascript:`function zigzagLevelOrder(root) {
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
}`,python:`from collections import deque
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
    return res`,java:"",cpp:""}},{id:"tr-06",slug:"level-order-ii",title:"Level Order II",pattern:"tree",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/binary-tree-level-order-traversal-ii/",extra:[],summary:"Bottom-up level order: return levels from the LEAF level up to the root. (Homework-style: one change from level order.)",asked:"Levels in reverse depth order.",why:"Level order produces top-to-bottom; bottom-up is the same result with the levels reversed (or unshifted as they are produced).",clues:["bottom up","reverse levels","leaf level first"],brute:{idea:"Level order + reverse the outer array.",time:"O(n)",space:"O(n)"},optimal:{idea:"Run the standard BFS batch loop and unshift each level to the FRONT of the result (or reverse at the end).",steps:["Standard level order loop.","Instead of res.push(level), use res.unshift(level) — or reverse res at the end.","Return res."],time:"O(n)",space:"O(n)"},dry:["Tree: 3 → 9, 20; 20 → 15, 7","Levels: [3] / [9,20] / [15,7]","Reversed: [[15, 7], [9, 20], [3]]","Answer: [[15, 7], [9, 20], [3]]"],hints:["What is the ONLY difference from plain level order?","Unshift per level, or reverse once at the end — both are fine.","The BFS logic itself is untouched."],code:{javascript:`function levelOrderBottom(root) {
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
}`,python:`from collections import deque
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
    return res`,java:"",cpp:""}},{id:"tr-07",slug:"invert-tree",title:"Invert Tree",pattern:"tree",difficulty:"Easy",platform:"LeetCode",url:"https://leetcode.com/problems/invert-binary-tree/",extra:[],summary:"Mirror the binary tree: swap the left and right children of every node.",asked:"Return the root of the mirrored tree.",why:`Recursion over structure: swap the children, then mirror each subtree independently. A textbook "compute = combine children's answers" DFS.`,clues:["mirror","swap children","every node"],brute:{idea:"Iterate with an explicit stack, swapping as you go.",time:"O(n)",space:"O(n)"},optimal:{idea:"f(node): if null return null. Save left; node.left = f(right); node.right = f(saved left); return node.",steps:["If node is null: return null.","tmp = node.left.","node.left = f(node.right).","node.right = f(tmp).","Return node."],time:"O(n)",space:"O(h)"},dry:["Tree: 4 → left 2 (1,3), right 3 (null, 7)","f(4): swap → left=f(3), right=f(2)","f(2): swap → (3, 1); f(3): swap → (7, null)","Result: 4 → left (7, null), right (3, 1) → [4, 3, 2, 7, null, null, 1]","Answer: root of mirrored tree"],hints:["After swapping a node's children, what remains to be done? (mirror both subtrees)","Save one pointer BEFORE you overwrite it.","The swap + recursion order: pre or post doesn't matter — both subtrees are processed anyway."],code:{javascript:`function invertTree(root) {
  if (!root) return null;
  const tmp = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(tmp);
  return root;
}`,python:`def invertTree(root):
    if not root:
        return None
    root.left, root.right = root.right, root.left
    invertTree(root.left)
    invertTree(root.right)
    return root`,java:"",cpp:""}},{id:"tr-08",slug:"symmetric-tree",title:"Symmetric Tree",pattern:"tree",difficulty:"Easy",platform:"LeetCode",url:"https://leetcode.com/problems/symmetric-tree/",extra:[],summary:"Check whether a binary tree is a mirror of itself (symmetric about its center).",asked:"True if the left subtree is the mirror image of the right subtree.",why:"Symmetry is a TWO-CURSOR question: walk the left and right subtrees in mirror positions (left.left vs right.right, left.right vs right.left) and compare.",clues:["mirror of itself","left vs right","two-node recursion"],brute:{idea:"Serialize left and right subtrees and compare strings.",time:"O(n²) worst",space:"O(n)"},optimal:{idea:"f(a, b): both null → true; one null → false; else a.val === b.val && f(a.left, b.right) && f(a.right, b.left). Start with f(root.left, root.right).",steps:["If root null: true.","f(a, b) as above (mirror pair comparison).","Answer = f(root.left, root.right).","Note the cross comparison — that is what makes it a MIRROR."],time:"O(n)",space:"O(h)"},dry:["Tree: 1 → left 2 (3, 4), right 2 (4, 3)","f(2L, 2R): vals equal","→ f(3L, 3R-mirror): f(2L.left=3, 2R.right=3) → both leaves 3 → true","→ f(2L.right=4, 2R.left=4) → true","Answer: true","Counter: 1 → left 2 (3, null), right 2 (null, 3) → f(3, null) → false"],hints:["Which two children should be compared at each step? (the CROSS pair)","Base cases: both empty (true), exactly one empty (false).",'This is a two-argument recursion — the "cursor" pair moves in tandem.'],code:{javascript:`function isSymmetric(root) {
  if (!root) return true;
  const f = (a, b) => {
    if (!a && !b) return true;
    if (!a || !b) return false;
    return a.val === b.val && f(a.left, b.right) && f(a.right, b.left);
  };
  return f(root.left, root.right);
}`,python:`def isSymmetric(root):
    if not root:
        return True
    def f(a, b):
        if not a and not b:
            return True
        if not a or not b:
            return False
        return a.val == b.val and f(a.left, b.right) and f(a.right, b.left)
    return f(root.left, root.right)`,java:"",cpp:""}},{id:"tr-09",slug:"same-tree",title:"Same Tree",pattern:"tree",difficulty:"Easy",platform:"LeetCode",url:"https://leetcode.com/problems/same-tree/",extra:[],summary:"Given two binary trees, check if they are structurally identical with the same node values. (Homework-style: the simplest two-tree recursion.)",asked:"True iff both trees match exactly, node for node.",why:"The canonical two-tree walk: compare the node pair, then recurse on the left pair and the right pair — straight down, no crossing.",clues:["two trees equal","structure + values","pair recursion"],brute:{idea:"Serialize both trees and compare.",time:"O(n²) worst",space:"O(n)"},optimal:{idea:"f(p, q): both null → true; one null → false; else p.val === q.val && f(p.left, q.left) && f(p.right, q.right).",steps:["f(p, q) with the three cases above.","Start f(root1, root2).","Compare values BEFORE recursing (short-circuit)."],time:"O(n)",space:"O(h)"},dry:["p = [1,2,3], q = [1,2,3]","f(1,1): equal → f(2,2) && f(3,3) → f(null,null)=true both ways","Answer: true","p = [1,2], q = [1,null,2]: f(2, null) → false"],hints:["Compare the two base cases first: what if one tree is shorter?","Value check first, then structure — or the other way; both are O(n).",'This is the exact engine inside "is symmetric" (with crossed arguments).'],code:{javascript:`function isSameTree(p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}`,python:`def isSameTree(p, q):
    if not p and not q:
        return True
    if not p or not q:
        return False
    return p.val == q.val and isSameTree(p.left, q.left) and isSameTree(p.right, q.right)`,java:"",cpp:""}},{id:"tr-10",slug:"subtree-of-another-tree",title:"Subtree of Another Tree",pattern:"tree",difficulty:"Easy",platform:"LeetCode",url:"https://leetcode.com/problems/subtree-of-another-tree/",extra:[],summary:"Check whether tree s contains tree t as a subtree (same structure and node values).",asked:"True if t appears as a contiguous sub-structure of s.",why:`At every node of s, ASK: does t match starting here? That "match here" is the same-tree recursion. So: sameTree(s, t) || recurse into s's children.`,clues:["subtree containment","check at every node","same-tree helper"],brute:{idea:'Same — the naive version is already the structure; the "same tree" helper does the work.',time:"O(m·n) worst",space:"O(h)"},optimal:{idea:"isSubtree(s, t): if !s return false; if sameTree(s, t) return true; else isSubtree(s.left, t) || isSubtree(s.right, t).",steps:["sameTree(a, b): the standard pair comparison.","At each s node: if sameTree(s, t) → true.","Otherwise try s.left and s.right.","Base: s null → false."],time:"O(m·n) worst (O(m + n) with hashing — advanced)",space:"O(h)"},dry:["s = [3, 4, 5], t = [4, 1, 2]","sameTree(3, 4)? no → try s.left=4: sameTree(4, 4) → children 1,2 vs 1,2 → true","Answer: true","s = [3, 4, 5, 1, null, 2], t = [4, 1, 2] → sameTree fails at the 4 (extra 2 on right) → false"],hints:["A subtree match can start at ANY node of s — how do you try all of them?",'Reuse the "same tree" two-node recursion as a helper.',"The outer recursion is just a DFS over candidate roots."],code:{javascript:`function isSubtree(root, subRoot) {
  if (!root) return false;
  const same = (a, b) => {
    if (!a && !b) return true;
    if (!a || !b) return false;
    return a.val === b.val && same(a.left, b.left) && same(a.right, b.right);
  };
  return same(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}`,python:`def isSubtree(root, subRoot):
    if not root:
        return False
    def same(a, b):
        if not a and not b:
            return True
        if not a or not b:
            return False
        return a.val == b.val and same(a.left, b.left) and same(a.right, b.right)
    return same(root, subRoot) or isSubtree(root.left, subRoot) or isSubtree(root.right, subRoot)`,java:"",cpp:""}},{id:"tr-11",slug:"flip-equivalent-trees",title:"Flip Equivalent Trees",pattern:"tree",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/flip-equivalent-binary-trees/",extra:[],summary:"Two trees are flip-equivalent if one can become the other by flipping (swapping) any number of nodes. Check whether root1 and root2 are flip-equivalent.",asked:"True if a sequence of child-swaps transforms one tree into the other.",why:"At each node the children may or may not be swapped — so two candidates: match without flip (left↔left, right↔right) OR with flip (left↔right, right↔left). Either path must succeed everywhere.",clues:["flipping children allowed","two match orientations","binary choice per node"],brute:{idea:"Try all 2^(number of nodes) flip combinations.",time:"O(2ⁿ)",space:"O(n)"},optimal:{idea:"f(a, b): both null → true; one null → false; values differ → false. Otherwise: (f(a.left, b.left) && f(a.right, b.right)) || (f(a.left, b.right) && f(a.right, b.left)).",steps:["Base cases as above.","noFlip = same-orientation recursion.","flip = crossed-orientation recursion.","Return noFlip || flip."],time:"O(n) with memo on node pairs / O(n²) naive",space:"O(h)"},dry:["root1 = [1, 2, 3, 4, 5], root2 = [1, 3, 2, 5, 4]","root: 1 == 1; noFlip: f(2,3)? values differ → false","flip: f(2, 3 crossed)... f(root1.left=2, root2.right=2) → children f(4,4)&&f(5,5) → true; f(root1.right=3, root2.left=3) → f(5,5)&&f(4,4) → true","Answer: true"],hints:["At each node, which orientations must you consider? (straight and crossed)","If values differ at a pair, no flips below can save it.",'This is "same tree" with a choice at every level — OR of two recursive matches.'],code:{javascript:`function flipEquiv(root1, root2) {
  if (!root1 && !root2) return true;
  if (!root1 || !root2) return false;
  if (root1.val !== root2.val) return false;
  const noFlip =
    flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right);
  if (noFlip) return true;
  return (
    flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left)
  );
}`,python:`def flipEquiv(root1, root2):
    if not root1 and not root2:
        return True
    if not root1 or not root2:
        return False
    if root1.val != root2.val:
        return False
    return (
        (flipEquiv(root1.left, root2.left) and flipEquiv(root1.right, root2.right))
        or (flipEquiv(root1.left, root2.right) and flipEquiv(root1.right, root2.left))
    )`,java:"",cpp:""}},{id:"tr-12",slug:"lca-of-binary-tree",title:"LCA of Binary Tree",pattern:"tree",difficulty:"Hard",platform:"LeetCode",url:"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",extra:[],summary:"Find the lowest common ancestor of two given nodes p and q in a binary tree (not necessarily a BST).",asked:"The deepest node that is an ancestor of both p and q (a node can be its own ancestor).",why:'DFS returns "where did I find p or q?": if both subtrees report a find, the current node is the LCA; if one does, pass it up. A single post-order pass decides everything.',clues:["common ancestor","two targets","binary tree (no ordering)"],brute:{idea:"For each node, check if both p and q are in its subtree (O(n²)).",time:"O(n²)",space:"O(n)"},optimal:{idea:'f(node): if node is null, or node === p, or node === q → return node (a "find"). left = f(left); right = f(right). If both non-null → node is the LCA. Else return whichever is non-null (or null).',steps:["f(node): base: null / p / q → node.","left = f(node.left); right = f(node.right).","If left && right: return node (the LCA).","Else return left || right.","Call f(root)."],time:"O(n)",space:"O(h)"},dry:["Tree: 3 → left 5 (6, 2(0,1)), right 1 (4); p = 5, q = 4",'f(5): node IS p → returns 5 (a "find" bubbles up from the left side)','f(1): f(4) — node IS q → returns 4 (a "find" bubbles up from the right side)',"f(3): left reported 5 AND right reported 4 → both non-null → 3 is the LCA","Answer: 3",'Rule: the LCA is the lowest node where the two "finds" first meet going up.'],hints:['What should a subtree "report" back to its parent? (whether it contains p or q — and which node)',"If both children report a find, what does that say about the current node?","If only one child reports a find, that find must bubble up unchanged."],code:{javascript:`function lowestCommonAncestor(root, p, q) {
  if (!root || root === p || root === q) return root;
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (left && right) return root;
  return left || right;
}`,python:`def lowestCommonAncestor(root, p, q):
    if not root or root is p or root is q:
        return root
    left = lowestCommonAncestor(root.left, p, q)
    right = lowestCommonAncestor(root.right, p, q)
    if left and right:
        return root
    return left or right`,java:"",cpp:""}},{id:"tr-13",slug:"search-in-binary-search-tree",title:"Search in Binary Search Tree",pattern:"tree",difficulty:"Easy",platform:"LeetCode",url:"https://leetcode.com/problems/search-in-a-binary-search-tree/",extra:[],summary:"Given the root of a BST and a value, return the node with that value, or null if absent.",asked:"The node (if it exists) whose value equals the target.",why:"The BST invariant (left < node < right) means each comparison ELIMINATES a whole subtree — search follows one path down, never both.",clues:["BST","search value","one path down"],brute:{idea:"Full traversal of both subtrees (ignoring the ordering).",time:"O(n)",space:"O(h)"},optimal:{idea:"f(node): if node null or node.val === target → node. If target < node.val → f(left), else f(right).",steps:["Base: null → null; found → node.","target < node.val: go left.","target > node.val: go right.","Each step discards half the tree (structurally)."],time:"O(h) — O(log n) balanced, O(n) skewed",space:"O(h)"},dry:["BST: 4 → left 2 (1, 3), right 5; search 5","4: 5 > 4 → right → 5: found","Answer: node 5","search 6: 4 → 5 → right is null → null"],hints:["Which subtree can DEFINITELY not contain a value smaller than the node?","Only ONE recursive call per level — that is the whole win over a plain binary tree.","The worst case is a degenerate (skewed) BST — shape matters for complexity."],code:{javascript:`function searchBST(root, val) {
  if (!root || root.val === val) return root;
  if (val < root.val) return searchBST(root.left, val);
  return searchBST(root.right, val);
}`,python:`def searchBST(root, val):
    if not root or root.val == val:
        return root
    if val < root.val:
        return searchBST(root.left, val)
    return searchBST(root.right, val)`,java:"",cpp:""}},{id:"tr-14",slug:"lca-of-bst",title:"LCA of BST",pattern:"tree",difficulty:"Easy",platform:"LeetCode",url:"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",extra:[],summary:"Find the lowest common ancestor of two nodes in a BINARY SEARCH TREE.",asked:"The deepest common ancestor, exploiting BST ordering for O(h) time.",why:"BST ordering decides the LCA without backtracking: if both targets are smaller, it is left; both bigger, it is right; split, the current node IS the LCA.",clues:["BST + two targets","split decides","no backtracking"],brute:{idea:"Generic binary-tree LCA (search both subtrees at every node).",time:"O(n)",space:"O(h)"},optimal:{idea:"Walk from the root: if both p and q are < node.val → go left; both > → go right; else node is the LCA (the first node where the path splits, or equals one target).",steps:["At node: if p.val < node.val && q.val < node.val → f(left).","If p.val > node.val && q.val > node.val → f(right).","Else return node.","One path, no recursion into both sides."],time:"O(h)",space:"O(1) iterative / O(h) recursive"},dry:["BST: 6 → 2 (0,4(3,5)) and 8 (7,9); p = 2, q = 8","6: 2 < 6 and 8 > 6 → split → LCA = 6","p = 7, q = 9: 6 → both > 6 → 8: 7 < 8, 9 > 8 → split → LCA = 8","Answer: 6 / 8 respectively"],hints:["If both targets are on the same side, where must the LCA be?","The first node that SPLITs the two targets is the answer — why?","A target equal to the current node is an ancestor of the other (if deeper) — the split rule still works."],code:{javascript:`function lowestCommonAncestor(root, p, q) {
  if (!root) return null;
  if (p.val < root.val && q.val < root.val)
    return lowestCommonAncestor(root.left, p, q);
  if (p.val > root.val && q.val > root.val)
    return lowestCommonAncestor(root.right, p, q);
  return root;
}`,python:`def lowestCommonAncestor(root, p, q):
    while root:
        if p.val < root.val and q.val < root.val:
            root = root.left
        elif p.val > root.val and q.val > root.val:
            root = root.right
        else:
            return root`,java:"",cpp:""}},{id:"tr-15",slug:"lca-of-deepest-leaves",title:"LCA of Deepest Leaves",pattern:"tree",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/",extra:[],summary:"Given a binary tree, return the LCA of the deepest leaves (the leaves with maximum depth; there may be several).",asked:"The lowest node that is an ancestor of ALL deepest leaves.",why:"Each subtree reports (height, candidate): if both children have EQUAL height, all deepest leaves live in BOTH subtrees → the current node is the candidate; otherwise only the taller side can hold them.",clues:["deepest leaves","height comparison","LCA of a set"],brute:{idea:"Find max depth, collect all leaves at that depth, run the generic LCA over the list.",time:"O(n²) worst",space:"O(n)"},optimal:{idea:"f(node) returns [height, candidate]: leaves → [0, node]. If left.height === right.height → [h+1, node] (the split point). Else pass up the taller side's candidate with height+1.",steps:["f(null) → [-1, null].","[lh, lc] = f(left); [rh, rc] = f(right).","If lh === rh: return [lh + 1, node].","Else return [max(lh, rh) + 1, taller side's candidate].","Answer = f(root)[1]."],time:"O(n)",space:"O(h)"},dry:["Tree A: 3 → 5 (6, 2) and 1 (0, 8) — leaves 6, 2, 0, 8 all sit at depth 2","f(6)=[0,6]; f(2)=[0,2] → equal heights → f(5)=[1,5]","f(0)=[0,0]; f(8)=[0,8] → equal heights → f(1)=[1,1]","f(3): both children at height 1 → [2, 3]","Answer: node 3 (deepest leaves live in BOTH subtrees → the root is their LCA)","Tree B: 1 → 2 (3, null) and 4 — the only deepest leaf is 3 (depth 2)","f(3)=[0,3]; f(2)=[1,3]; f(4)=[0,4]; f(1): heights 1 vs 0 → pass up the taller side → [2, 3] → Answer: node 3"],hints:["What does it mean if both subtrees have the SAME height? (deepest leaves exist in both)","When heights differ, can the shorter subtree contain the deepest leaves?","The answer node is the FIRST (lowest) node whose two sides both reach the maximum depth."],code:{javascript:`function lcaDeepestLeaves(root) {
  const f = (node) => {
    if (!node) return [-1, null];
    const [lh, lc] = f(node.left);
    const [rh, rc] = f(node.right);
    if (lh === rh) return [lh + 1, node];
    return [Math.max(lh, rh) + 1, lh > rh ? lc : rc];
  };
  return f(root)[1];
}`,python:`def lcaDeepestLeaves(root):
    def f(node):
        if not node:
            return -1, None
        lh, lc = f(node.left)
        rh, rc = f(node.right)
        if lh == rh:
            return lh + 1, node
        return max(lh, rh) + 1, (lc if lh > rh else rc)
    return f(root)[1]`,java:"",cpp:""}},{id:"tr-16",slug:"two-sum-iv",title:"Two Sum IV",pattern:"tree",difficulty:"Easy",platform:"LeetCode",url:"https://leetcode.com/problems/two-sum-iv-input-is-a-bst/",extra:[],summary:"Given a BST and a target k, determine if there exist two distinct nodes whose values sum to k.",asked:"True if any two distinct node values add up to k.",why:"Inorder traversal of a BST yields SORTED values — then the classic two-pointer pair-sum works. (Or: search for the complement in a set during one traversal.)",clues:["BST + pair sum","sorted via inorder","two distinct nodes"],brute:{idea:"Collect all values, check every pair.",time:"O(n²)",space:"O(n)"},optimal:{idea:"Walk the tree once with a set: for each node value v, if (k - v) is already in the set → true; else insert v. (Alternative: inorder into a sorted array + two pointers, O(1) extra space beyond the array.)",steps:["set = {}.","DFS: at each node: if set has k - v → return true.","Insert v into the set.","Recurse left and right; propagate the true upward.","Distinctness is automatic (complement must have been seen earlier as a DIFFERENT node)."],time:"O(n)",space:"O(n)"},dry:["BST: 5 → 3(2,4), 6; k = 7","visit 5: set{5}; visit 3: 7-3=4 not in set → set{5,3}; visit 2: 5 not in set → set{5,3,2}; visit 4: 7-4=3 IN set ✓","Answer: true (3 + 4 = 7)"],hints:['What special order does a BST give you "for free"? (inorder = sorted)',"For each value, what companion would complete the pair? (k - v)","The set must contain values seen BEFORE the current node — that guarantees two distinct nodes."],code:{javascript:`function findTarget(root, k) {
  const set = new Set();
  const f = (node) => {
    if (!node) return false;
    if (set.has(k - node.val)) return true;
    set.add(node.val);
    return f(node.left) || f(node.right);
  };
  return f(root);
}`,python:`def findTarget(root, k):
    seen = set()
    def f(node):
        if not node:
            return False
        if k - node.val in seen:
            return True
        seen.add(node.val)
        return f(node.left) or f(node.right)
    return f(root)`,java:"",cpp:""}}],ht=[{id:"tr-17",slug:"kth-smallest-element-in-bst",title:"Kth Smallest Element in BST",pattern:"tree",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/kth-smallest-element-in-a-bst/",extra:[],summary:"Given the root of a BST and an integer k, return the kth smallest value in the tree (1-indexed).",asked:"The kth value in inorder (sorted) order.",why:"Inorder traversal visits BST values in ascending order — so the kth node visited IS the kth smallest. Stop early as soon as you have counted k nodes.",clues:["kth smallest","BST sorted via inorder","early stop"],brute:{idea:"Full inorder into an array, return index k-1.",time:"O(n)",space:"O(n)"},optimal:{idea:"Inorder DFS with a counter: visit left, then if this is the kth node → record and stop; else visit right.",steps:["ans = null; counter = k.","f(node): if node null or ans set → return.","f(left).","If ans null: counter--; if counter === 0 → ans = node.val.","If ans still null: f(right).","Return ans."],time:"O(h + k)",space:"O(h)"},dry:["BST: 3 → 1(null,2) and 5; k = 1","inorder walk: 1 (counter 1→0 → ans = 1) → stop","Answer: 1","k = 3: visit 1, 2, 3 → ans = 3"],hints:["In what order does inorder visit a BST?","You only need the kth node — can you stop the traversal there?",'The counter decrements exactly at the "visit node" moment of inorder.'],code:{javascript:`function kthSmallest(root, k) {
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
}`,python:`def kthSmallest(root, k):
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
    return ans`,java:"",cpp:""}},{id:"tr-18",slug:"minimum-depth-of-binary-tree",title:"Minimum Depth of Binary Tree",pattern:"tree",difficulty:"Easy",platform:"LeetCode",url:"https://leetcode.com/problems/minimum-depth-of-binary-tree/",extra:[],summary:"Return the minimum depth: number of nodes along the shortest path from root to a LEAF.",asked:"Shortest root→leaf path length (in nodes).",why:"Recursion like max-depth, but with a trap: a node with only ONE child — that child IS the only leaf direction, so you cannot treat the missing side as depth 0.",clues:["shortest to a leaf","one-sided nodes","depth in nodes"],brute:{idea:"BFS — the first leaf dequeued gives the minimum depth.",time:"O(n)",space:"O(n)"},optimal:{idea:"f(node): null → 0. If no left child → 1 + f(right). If no right child → 1 + f(left). Else 1 + min(f(left), f(right)). The one-sided cases prevent min(·, 0) from short-circuiting.",steps:["null → 0.","Only right child: 1 + f(right).","Only left child: 1 + f(left).","Both: 1 + min(f(left), f(right))."],time:"O(n)",space:"O(h)"},dry:["Tree: 4 → left 2(1,3), right null","f(4): no right child → 1 + f(2)","f(2): both children → 1 + min(f(1), f(3)) = 1 + min(1, 1) = 2","Answer: 1 + 2 = 3","Tree [1, null, 2]: f(1): no left → 1 + f(2) = 2 ✓ (leaf must be the 2)"],hints:["Why is min(f(left), f(right)) + 1 WRONG for a one-sided node? (the null side is not a leaf)","A leaf is a node with NO children — paths must END at one.","BFS finds it too: first leaf reached is the answer."],code:{javascript:`function minDepth(root) {
  if (!root) return 0;
  if (!root.left) return minDepth(root.right) + 1;
  if (!root.right) return minDepth(root.left) + 1;
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
}`,python:`def minDepth(root):
    if not root:
        return 0
    if not root.left:
        return minDepth(root.right) + 1
    if not root.right:
        return minDepth(root.left) + 1
    return min(minDepth(root.left), minDepth(root.right)) + 1`,java:"",cpp:""}},{id:"tr-19",slug:"maximum-depth-of-binary-tree",title:"Maximum Depth of Binary Tree",pattern:"tree",difficulty:"Easy",platform:"LeetCode",url:"https://leetcode.com/problems/maximum-depth-of-binary-tree/",extra:[],summary:"Return the height of a binary tree: number of nodes along the longest path from root to leaf.",asked:"The longest root→leaf path length (in nodes).",why:"The canonical divide-and-conquer: depth(node) = 1 + max(depth(left), depth(right)); null → 0. One clean post-order pass.",clues:["longest path","height","max of children"],brute:{idea:"BFS counting levels (same asymptotics).",time:"O(n)",space:"O(n)"},optimal:{idea:"f(node): if null return 0; else 1 + max(f(left), f(right)).",steps:["null → 0.","Recursively compute both subtree depths.","Return 1 + max of the two.","Answer = f(root)."],time:"O(n)",space:"O(h)"},dry:["Tree: 3 → 9 and 20(15, 7)","f(9)=1, f(15)=1, f(7)=1, f(20)=1+max(1,1)=2, f(3)=1+max(1,2)=3","Answer: 3"],hints:["Depth of a node in terms of its children's depths?",'Base case: what is the depth of "nothing" (null)?',"This exact recurrence powers diameter and balanced-check too."],code:{javascript:`function maxDepth(root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}`,python:`def maxDepth(root):
    if not root:
        return 0
    return 1 + max(maxDepth(root.left), maxDepth(root.right))`,java:"",cpp:""}},{id:"tr-20",slug:"balanced-binary-tree",title:"Balanced Binary Tree",pattern:"tree",difficulty:"Easy",platform:"LeetCode",url:"https://leetcode.com/problems/balanced-binary-tree/",extra:[],summary:"A binary tree is height-balanced if every node's two subtrees have heights differing by at most 1. Check whether a tree is balanced.",asked:"True iff the balance property holds at EVERY node.",why:"Naive check recomputes heights → O(n²). The efficient version computes height AND balance in ONE bottom-up pass: a node is balanced iff both children are AND the height difference is ≤ 1.",clues:["height difference ≤ 1","at every node","avoid recomputing heights"],brute:{idea:"At each node, compute height of both subtrees separately, then recurse — heights recomputed many times.",time:"O(n²)",space:"O(h)"},optimal:{idea:"f(node) returns [height, balanced]: null → [0, true]. If either child unbalanced → unbalanced. Return [1 + max(lh, rh), |lh - rh| <= 1].",steps:["f(null) → [0, true].","[lh, lb] = f(left); [rh, rb] = f(right).","If !lb or !rb → [height, false] (propagate failure).","Else [1 + max(lh, rh), Math.abs(lh - rh) <= 1]."],time:"O(n)",space:"O(h)"},dry:["Tree: 3 → 4(5(6,7), null) and null; depths: left side depth 3, right 0","f(6)=[1,true], f(7)=[1,true] → f(5)=[2,true]; f(4): left [2], right [0] → diff 2 → [3,false]","f(3): child unbalanced → false","Answer: false","Balanced: 3 → 9, 20(15,7): f(20)=[2,true], f(9)=[1,true] → f(3)=[3,true] ✓"],hints:["Where does the O(n²) version waste time? (recomputing heights at every ancestor)","Have each subtree return its height AND its balance status together.","One child unbalanced → the whole tree is unbalanced (fail-fast propagation)."],code:{javascript:`function isBalanced(root) {
  const f = (node) => {
    if (!node) return [0, true];
    const [lh, lb] = f(node.left);
    const [rh, rb] = f(node.right);
    if (!lb || !rb) return [Math.max(lh, rh) + 1, false];
    return [Math.max(lh, rh) + 1, Math.abs(lh - rh) <= 1];
  };
  return f(root)[1];
}`,python:`def isBalanced(root):
    def f(node):
        if not node:
            return 0, True
        lh, lb = f(node.left)
        rh, rb = f(node.right)
        if not lb or not rb:
            return max(lh, rh) + 1, False
        return max(lh, rh) + 1, abs(lh - rh) <= 1
    return f(root)[1]`,java:"",cpp:""}},{id:"tr-21",slug:"diameter-of-binary-tree",title:"Diameter of Binary Tree",pattern:"tree",difficulty:"Easy",platform:"LeetCode",url:"https://leetcode.com/problems/diameter-of-binary-tree/",extra:[],summary:"The diameter is the number of nodes on the longest path between ANY two nodes in the tree (the path may or may not pass through the root).",asked:"Longest path between any two nodes, counted in nodes (equivalently edges + 1).",why:'The longest path passes through SOME node as its "top": at each node the best through-it path is left.height + right.height. Track the global max while computing heights bottom-up.',clues:["longest path anywhere","path through a node","height + global max"],brute:{idea:"For every node compute left+right depth and take the max — with height recomputation O(n²).",time:"O(n²)",space:"O(h)"},optimal:{idea:"f(node) returns height. On the way up: diameter candidate = left.height + right.height (paths through this node). Keep global max; return 1 + max(l, r).",steps:["diam = 0.","f(null) → 0.","l = f(left); r = f(right).","diam = max(diam, l + r).","Return 1 + max(l, r).","Answer: diam (edges) → nodes = diam + 1 in edge-count convention; here with height counted in nodes, l + r - 1... use: candidate = l + r (edges) then final answer in nodes = best + 1. (LeetCode counts edges: answer is l + r directly.)"],time:"O(n)",space:"O(h)"},dry:["Tree: 1 → 2(4, 5) and 3","f(4)=1, f(5)=1 → at 2: candidate = 2 (path 4-2-5); height 2","f(3)=1; at 1: candidate = 2 + 1 = 3 (path 4-2-1-3); height 3","Answer: 3 (edges) — LeetCode convention"],hints:["Any path has a HIGHEST node — at that node, the path is left-depth + right-depth.",'Compute heights once, bottom-up; evaluate the "through me" candidate at every node.',"A leaf-leaf path through the root can beat any root-leaf path."],code:{javascript:`function diameterOfBinaryTree(root) {
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
}`,python:`def diameterOfBinaryTree(root):
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
    return diam`,java:"",cpp:""}},{id:"tr-22",slug:"check-completeness-of-a-binary-tree",title:"Check Completeness of a Binary Tree",pattern:"tree",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/check-completeness-of-a-binary-tree/",extra:[],summary:"A binary tree is COMPLETE if every level is fully filled, and all nodes are as far left as possible. Check completeness.",asked:'True iff the level-order node sequence has no "gap" (null before a real node).',why:"Level order (BFS) of a complete tree produces all nodes first, then nulls. So: enqueue children (even nulls); if you see a null and then later a real node → not complete.",clues:["fully filled levels","left-packed","BFS gap detection"],brute:{idea:"Compute level sizes and shapes manually (error-prone).",time:"O(n)",space:"O(n)"},optimal:{idea:"queue = [root]; nullSeen = false. Dequeue: if null → nullSeen = true. If non-null: if nullSeen → false (gap); enqueue left and right (including nulls). Finish → true.",steps:["Start BFS with the root.","Track whether a null child has been seen.","A non-null node AFTER a null breaks completeness.","Always enqueue both children (nulls included) — that is what makes the gap visible."],time:"O(n)",space:"O(n)"},dry:["Complete: 1 → 2(4,5), 3(6,null): BFS order 1,2,3,null,4,5,6,null... nulls only after all nodes → true","Not complete: 1 → 2(null,5), 3: BFS: 1,2,3,null,null,5 → node 5 after nulls → false","Answer: true / false"],hints:["What does the BFS (level order) node sequence look like for a complete tree? (all nodes, then nulls)",'A single "gap" — a null followed by a real node — disproves completeness.',"You MUST enqueue null children to expose the gap."],code:{javascript:`function isCompleteTree(root) {
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
}`,python:`from collections import deque
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
    return True`,java:"",cpp:""}},{id:"tr-23",slug:"validate-bst",title:"Validate BST",pattern:"tree",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/validate-binary-search-tree/",extra:[],summary:"Check whether a binary tree is a valid BST: every node's left subtree holds only smaller values and right subtree only larger values (strict).",asked:"True iff the BST invariant holds globally — not just parent vs child.",why:"The trap is local checks only (child < parent): a grandchild can violate the rule against a distant ancestor. The fix: pass allowed bounds (lo, hi) down — every node must stay strictly inside its window.",clues:["global ordering","bounds window","not just parent-child"],brute:{idea:"Inorder traversal must be strictly increasing (valid but O(n) extra space).",time:"O(n)",space:"O(n)"},optimal:{idea:"f(node, lo, hi): null → true. If node.val <= lo or >= hi → false. Else f(left, lo, node.val) && f(right, node.val, hi). Start f(root, -∞, +∞).",steps:["Each node carries the open interval of legal values.","Left child inherits (lo, node.val); right inherits (node.val, hi).","Out-of-interval → false; null → true.","Strict inequalities (duplicates are illegal)."],time:"O(n)",space:"O(h)"},dry:["Tree: 2(1, 3(3, null)) → invalid: the 3 in the right-right position must be > 2 AND > 3? It is in the right subtree of the right child: bounds (3, ∞) → 3 <= 3 → false ✓","Tree: 2(1, 4(3,5)) → all inside windows → true","Answer: false / true"],hints:['Why is "every node > its left child and < its right child" NOT enough? (grandchildren vs ancestors)',"What information does a node need to check its children? (the allowed value RANGE, not just the parent)","The range narrows as you descend: left turns the upper bound, right turns the lower."],code:{javascript:`function isValidBST(root) {
  const f = (node, lo, hi) => {
    if (!node) return true;
    if (node.val <= lo || node.val >= hi) return false;
    return f(node.left, lo, node.val) && f(node.right, node.val, hi);
  };
  return f(root, -Infinity, Infinity);
}`,python:`def isValidBST(root):
    def f(node, lo, hi):
        if not node:
            return True
        if not (lo < node.val < hi):
            return False
        return f(node.left, lo, node.val) and f(node.right, node.val, hi)
    return f(root, float('-inf'), float('inf'))`,java:"",cpp:""}},{id:"tr-24",slug:"recover-bst",title:"Recover BST",pattern:"tree",difficulty:"Hard",platform:"LeetCode",url:"https://leetcode.com/problems/recover-binary-search-tree/",extra:[],summary:"Two nodes in a BST were accidentally swapped. Recover the tree (swap them back) in-place.",asked:"Identify and swap the two corrupted nodes. (Follow-up: O(1) space.)",why:`Inorder traversal of a valid BST is strictly increasing. Two swapped nodes create exactly ONE or TWO "descents" (prev > curr): the first descent's prev and the second descent's curr are the swapped pair.`,clues:["two nodes swapped","inorder should increase","one or two violations"],brute:{idea:"Collect inorder values, find the two out-of-place values by sorting comparison, swap.",time:"O(n log n)",space:"O(n)"},optimal:{idea:"Inorder walk with prev pointer: whenever prev.val > node.val, record first = first || prev, second = node. At the end, swap first.val and second.val. (One violation → neighbors; two violations → first's prev and second's curr.)",steps:["first = second = null; prev = null.","Inorder: at each node: if prev && prev.val > node.val: if !first: first = prev; second = node.","prev = node.","After the walk: swap first.val ↔ second.val."],time:"O(n)",space:"O(h) recursion (Morris → O(1))"},dry:["BST [1, 3, null, null, 2] → inorder: 1, 3, 2 → descents: (3,2) only once → first = 3, second = 2","swap → inorder 1, 2, 3 ✓","Two-violation example: 5(3,4) with 3 and 5 swapped: inorder 4, 5, 3 → descents (5,4)? values 4,5,3: descent at (5,3): first=5, second=3 → swap → 3,4,5 ✓","Answer: tree repaired in-place"],hints:['What order makes a BST "visible" as sorted? (inorder)',"A single swap breaks monotonicity in at most TWO adjacent pairs.","Which end of each broken pair is the misplaced node? (first pair: the LEFT end; second pair: the RIGHT end)"],code:{javascript:`function recoverTree(root) {
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
}`,python:`def recoverTree(root):
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
    first.val, second.val = second.val, first.val`,java:"",cpp:""}},{id:"tr-25",slug:"path-sum",title:"Path Sum",pattern:"tree",difficulty:"Easy",platform:"LeetCode",url:"https://leetcode.com/problems/path-sum/",extra:[],summary:"Given a binary tree and a target sum, determine if there is a root-to-leaf path where the node values sum to the target.",asked:"True iff some root→leaf path sums exactly to targetSum.",why:"Carry the running requirement DOWN: at a node, the subtrees must achieve (target - node.val). A leaf matches exactly when its value equals the remaining target. (A leaf is mandatory — an internal prefix does NOT count.)",clues:["root to leaf","remaining target","leaf check"],brute:{idea:"Enumerate all root-leaf paths and sum each.",time:"O(n²) worst",space:"O(h)"},optimal:{idea:"f(node, remaining): null → false. Leaf → node.val === remaining. Else f(left, remaining - node.val) || f(right, remaining - node.val).",steps:["null → false.","If leaf: return node.val === remaining.","Recurse into children with remaining - node.val.","OR the two sides."],time:"O(n)",space:"O(h)"},dry:["Tree: 5 → left 4 (11(2(1,4), 5)), right 3 (null, 8(13,4)); target 22","f(5, 22): not a leaf → f(4, 17) or f(3, 17)","f(4, 17): not a leaf → f(11, 13)","f(11, 13): not a leaf → f(2, 2)","f(2, 2): leaf and 2 === remaining → true","Answer: true (path 5 → 4 → 11 → 2 sums to 22)"],hints:['What does each subtree have to "achieve"? (the remaining target after the current node)',"Why must the path END at a leaf? (a node with value = remaining but children still existing is not a valid stop)",'Carry "remaining" down instead of "sum so far" up — same thing, cleaner base case.'],code:{javascript:`function hasPathSum(root, targetSum) {
  if (!root) return false;
  if (!root.left && !root.right) return root.val === targetSum;
  return hasPathSum(root.left, targetSum - root.val) ||
         hasPathSum(root.right, targetSum - root.val);
}`,python:`def hasPathSum(root, targetSum):
    if not root:
        return False
    if not root.left and not root.right:
        return root.val == targetSum
    return hasPathSum(root.left, targetSum - root.val) or hasPathSum(root.right, targetSum - root.val)`,java:"",cpp:""}},{id:"tr-26",slug:"path-sum-ii",title:"Path Sum II",pattern:"tree",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/path-sum-ii/",extra:[],summary:"Return ALL root-to-leaf paths where the node values sum to the target sum.",asked:"Every valid root→leaf path as a list of values.",why:'Backtracking on a tree: keep the current path, push as you go, pop as you retreat; record a copy of the path when a leaf matches. Same "remaining target" idea as Path Sum, plus the trail.',clues:["all paths","root to leaf","backtrack the path"],brute:{idea:"Recursion that copies the path array each step (same asymptotics, more allocation).",time:"O(n · h)",space:"O(h)"},optimal:{idea:"f(node, remaining, path): null → return. Push node.val. If leaf and remaining === node.val → save a copy. Recurse both sides with remaining - node.val. Pop node.val.",steps:["path = [] (shared, mutated).","Enter node: path.push(node.val).","Leaf check: remaining === node.val → res.push([...path]).","Recurse left/right with remaining - node.val.","Exit node: path.pop().","Start f(root, target, [])."],time:"O(n · h)",space:"O(h) + output"},dry:["Tree: 5 → left 4 (11(2(1,4), 5)), right 3 (null, 8(13,4)); target 22","Path 5→4→11→2: 5+4+11+2 = 22, and 2 is a leaf → save [5, 4, 11, 2]","Other leaves: 5→4→11→5 = 25 ✗; 5→3→8→13 = 29 ✗; 5→3→8→4 = 20 ✗","Answer: [[5, 4, 11, 2]]"],hints:['What do you need to remember between "entering" and "exiting" a node? (the current path)',"Why push/pop instead of copying at every node? (the shared path is mutated; only record a COPY on a match)","A match is only valid at a LEAF — an internal node with the right prefix sum does not stop the search."],code:{javascript:`function pathSum(root, targetSum) {
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
}`,python:`def pathSum(root, targetSum):
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
    return res`,java:"",cpp:""}},{id:"tr-27",slug:"sum-root-to-leaf-numbers",title:"Sum Root to Leaf Numbers",pattern:"tree",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/sum-root-to-leaf-numbers/",extra:[],summary:"Each root-to-leaf path forms a number (e.g. 1→2→3 → 123). Return the total sum of all such numbers.",asked:"Sum of the numbers encoded by every root-to-leaf path.",why:"Carry the running number DOWN: cur = cur * 10 + node.val. At a leaf, the number is complete — return cur; otherwise sum both subtrees' contributions.",clues:["path forms a number","shift and add","leaf completes"],brute:{idea:"Collect each path as a string, parse to a number, sum.",time:"O(n · h)",space:"O(h)"},optimal:{idea:"f(node, cur): null → 0. cur = cur * 10 + node.val. If leaf → cur. Else f(left, cur) + f(right, cur).",steps:["At each node, append its digit: cur * 10 + val.","Leaf: the number is done → return cur.","Internal: return the sum of both children's subtrees.","Start f(root, 0)."],time:"O(n)",space:"O(h)"},dry:["Tree: 1 → 2 and 3; numbers: 12 and 13","f(1,0) → cur 1; f(2,1) → cur 12 (leaf) → 12; f(3,1) → cur 13 → 13","Answer: 25"],hints:['How do you "append a digit" to a number arithmetically? (multiply by 10, add)',"Where is a number COMPLETE? (at a leaf)","Internal nodes contribute nothing directly — they only relay the running number."],code:{javascript:`function sumNumbers(root) {
  const f = (node, cur) => {
    if (!node) return 0;
    cur = cur * 10 + node.val;
    if (!node.left && !node.right) return cur;
    return f(node.left, cur) + f(node.right, cur);
  };
  return f(root, 0);
}`,python:`def sumNumbers(root):
    def f(node, cur):
        if not node:
            return 0
        cur = cur * 10 + node.val
        if not node.left and not node.right:
            return cur
        return f(node.left, cur) + f(node.right, cur)
    return f(root, 0)`,java:"",cpp:""}},{id:"tr-28",slug:"binary-tree-maximum-path-sum",title:"Binary Tree Maximum Path Sum",pattern:"tree",difficulty:"Hard",platform:"LeetCode",url:"https://leetcode.com/problems/binary-tree-maximum-path-sum/",extra:[],summary:"A path in a tree starts and ends at any node (does not need root/leaves, visits each node at most once). Return the maximum path sum.",asked:"Max over all paths of the sum of node values along it (values may be negative).",why:'At each node, the best path THROUGH it is node.val + best(left side) + best(right side) — but a side is only worth taking if it is positive. The function must also return the best "one-sided" gain (for the parent to extend), which is a different quantity than the through-me answer.',clues:["path anywhere","two possible exits","negative nodes hurt"],brute:{idea:"Try every pair of nodes with LCA-based path sums.",time:"O(n²)",space:"O(h)"},optimal:{idea:'f(node) returns the max gain of a path that STARTS at node and goes DOWN one side. Through-me candidate = node.val + max(0, f(left)) + max(0, f(right)) → update global best. Return node.val + max(0, max(f(left), f(right))). max(0, ·) means "take the side only if it helps" — a single negative node can be the best path.',steps:["best = -∞.","f(null) → 0.","l = max(0, f(left)); r = max(0, f(right)).","best = max(best, node.val + l + r).","Return node.val + max(l, r).","Answer = best."],time:"O(n)",space:"O(h)"},dry:["Tree: -10 → 9 and 20(15, 7); best path 15 + 20 + 7 = 42","f(9)=9; f(15)=15; f(7)=7; f(20): l=15,r=7 → best = 20+15+7 = 42; return 20+15=35","f(-10): l=max(0,9)=9? left child 9 → l=9, r=35 → best = max(42, -10+9+35=34) = 42","Answer: 42"],hints:["A path through a node can use AT MOST two of its branches (one per side) — why not more?","If a subtree's best downward gain is negative, should the parent use it? (no — max with 0)","The answer a node RETURNS (one-sided) is not the same as the answer it REPORTS (through-me) — keep both distinct."],code:{javascript:`function maxPathSum(root) {
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
}`,python:`def maxPathSum(root):
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
    return best`,java:"",cpp:""}},{id:"tr-29",slug:"construct-tree-preorder-inorder",title:"Construct Tree from Preorder and Inorder",pattern:"tree",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",extra:[],summary:"Given the preorder and inorder traversals of a binary tree (distinct values), reconstruct the tree.",asked:"The tree (as root node) that produces both traversals.",why:"Preorder's first element is the ROOT. Inorder splits around that root: everything left of it is the left subtree, everything right is the right subtree. Recurse on the two halves with advancing preorder windows.",clues:["preorder + inorder","root splits inorder","reconstruction"],brute:{idea:"Search for the root in inorder at every recursion step (linear scans).",time:"O(n²)",space:"O(n)"},optimal:{idea:"Map value → inorder index. preI = 0. f(lo, hi): if lo > hi → null. root = preorder[preI++]; node = new TreeNode(root); mid = index[root]; node.left = f(lo, mid-1); node.right = f(mid+1, hi); return node.",steps:["Build the value→index map for O(1) splits.","A shared preorder pointer advances as roots are consumed (preorder: root, left, right).","Left subtree first (it comes next in preorder), then right.","Base: lo > hi → null."],time:"O(n)",space:"O(n) map + O(h) stack"},dry:["preorder = [3, 9, 20, 15, 7], inorder = [9, 3, 15, 20, 7]","root 3: left part [9] → f(0,0) → node 9; right part [15,20,7] → f(2,4)","f(2,4): root 20: left [15] → 15; right [7] → 7","Tree: 3(9, 20(15,7)) ✓","Answer: root of reconstructed tree"],hints:["Which element of preorder is always the root of the current subtree?","What does the root's position in inorder tell you? (the size of each side)","Process the LEFT subtree before the RIGHT — that is exactly the order roots appear in preorder."],code:{javascript:`function buildTree(preorder, inorder) {
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
}`,python:`def buildTree(preorder, inorder):
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
        self.right = right`,java:"",cpp:""}},{id:"tr-30",slug:"construct-tree-inorder-postorder",title:"Construct Tree from Inorder and Postorder",pattern:"tree",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/",extra:[],summary:"Given the inorder and postorder traversals (distinct values), reconstruct the tree.",asked:"The tree that produces both traversals.",why:"Postorder's LAST element is the root. Same inorder-split as before — but now the right subtree must be built BEFORE the left (postorder: left, right, root — read from the end, roots come right-first).",clues:["postorder + inorder","root = last of postorder","right subtree first"],brute:{idea:"Linear scans for the root in inorder each step.",time:"O(n²)",space:"O(n)"},optimal:{idea:"postI = postorder.length - 1. f(lo, hi): if lo > hi → null. root = postorder[postI--]; node = new TreeNode(root); mid = index[root]; node.right = f(mid+1, hi); node.left = f(lo, mid-1); return node. (Right first — postorder was consumed from the end.)",steps:["Value → inorder-index map.","Consume postorder from the END (postI starts at the last index).","Build the RIGHT subtree, then the LEFT.","Base lo > hi → null."],time:"O(n)",space:"O(n) + O(h)"},dry:["inorder = [9, 3, 15, 20, 7], postorder = [9, 15, 7, 20, 3]","root = postorder[last] = 3; split inorder at 3: left [9], right [15, 20, 7]","Build right first: postI=3 → root 20; split at 20: left [15], right [7]; right: postI=2 → 7; left: postI=1 → 15","Build left: postI=0 → 9","Tree: 3(9, 20(15, 7)) ✓","Answer: root of reconstructed tree"],hints:["Which postorder element is the root of the whole tree? (the LAST one)","In what order should you build the subtrees now? (right, then left — why?)","It is the mirror image of the preorder version: same split, opposite consumption."],code:{javascript:`function buildTree(inorder, postorder) {
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
}`,python:`def buildTree(inorder, postorder):
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
        self.right = right`,java:"",cpp:""}},{id:"tr-31",slug:"sorted-array-to-bst",title:"Sorted Array to BST",pattern:"tree",difficulty:"Easy",platform:"LeetCode",url:"https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/",extra:[],summary:"Given a sorted (ascending) array of distinct integers, build a height-balanced binary search tree.",asked:"Any balanced BST containing the values (one valid construction is enough).",why:"Pick the middle element as the root — it splits the array into two equal halves that become the left and right subtrees. Recurse on each half. The middle choice is what keeps the height balanced.",clues:["sorted array","middle as root","height balanced"],brute:{idea:"Make the first element the root of a skewed chain (not balanced).",time:"O(n²) construction",space:"O(n)"},optimal:{idea:"f(lo, hi): if lo > hi → null. mid = (lo + hi) / 2; node = new TreeNode(nums[mid]); node.left = f(lo, mid-1); node.right = f(mid+1, hi); return node.",steps:["Middle element = current root.","Left half → left subtree; right half → right subtree.","Each recursion halves the interval → height ⌈log₂ n⌉.","Answer: f(0, n-1)."],time:"O(n)",space:"O(log n) recursion"},dry:["nums = [1, 2, 3, 4, 5]","root = nums[2] = 3","left: [1,2] → root 2, left 1","right: [4,5] → root 5, left 4","Tree: 3(2(1,null), 5(4,null)) — balanced, and its inorder is [1,2,3,4,5] ✓","Answer: root (node 3)"],hints:["Which array element should be the root to keep both sides equal-sized?",'What property makes the array "BST-ready"? (sorted = inorder order)',"The recursion interval [lo, hi] always exactly matches the subtree's node set."],code:{javascript:`function sortedArrayToBST(nums) {
  const f = (lo, hi) => {
    if (lo > hi) return null;
    const mid = (lo + hi) >> 1;
    const node = { val: nums[mid], left: null, right: null };
    node.left = f(lo, mid - 1);
    node.right = f(mid + 1, hi);
    return node;
  };
  return f(0, nums.length - 1);
}`,python:`def sortedArrayToBST(nums):
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
        self.right = right`,java:"",cpp:""}}],ut=[{id:"gr-01",slug:"flood-fill",title:"Flood Fill",pattern:"graphs",difficulty:"Easy",platform:"LeetCode",url:"https://leetcode.com/problems/flood-fill/",extra:[],summary:"Given a 2D image (grid of pixel colors) and a starting pixel, change the color of the connected region (4-directionally) that contains the starting pixel.",asked:"Flood the entire contiguous region of the original starting color with the new color.",why:'A grid is a graph where each cell links to its 4 neighbors. "Flood" = reach every connected cell: DFS/BFS from the start, repainting as you go. Remember the ORIGINAL color — otherwise the fill eats the whole grid.',clues:["grid","connected region","repaint","4 directions"],brute:{idea:"Recursion is the natural version; iterative BFS/DFS with a stack/queue avoids deep recursion.",time:"O(n·m)",space:"O(n·m) worst"},optimal:{idea:"Save orig = image[sr][sc]. If orig === color, nothing to do. DFS(r, c): out of bounds or image[r][c] !== orig → stop; else set color and recurse to the 4 neighbors.",steps:["orig = image[sr][sc]; early exit if orig === color.","f(r, c): bounds check + color check.",'Repaint image[r][c] = color BEFORE recursing (that is the "visited" mark).',"Recurse up, down, left, right.","Return the image."],time:"O(n·m)",space:"O(n·m) recursion"},dry:["image = [[1,1,1],[1,1,0],[1,0,1]], sr=1, sc=1, color=2","orig = 1","f(1,1): paint 2 → neighbors (0,1),(2,1),(1,0),(1,2): (1,2) is 0 → skip; (2,1) is 0 → skip","f(0,1): paint → f(0,0): paint → f(0,2)? no (not a neighbor chain)... all original-1 cells reachable become 2","Result: [[2,2,2],[2,2,0],[2,0,1]]","Answer: the flooded image"],hints:["Which cells should NOT be repainted? (cells whose color is NOT the original starting color)","What do you paint each cell with, and when? (the new color, before recursing — that marks it visited)","Moving to a newly-painted cell must be prevented — the color check does that for free."],code:{javascript:`function floodFill(image, sr, sc, color) {
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
}`,python:`def floodFill(image, sr, sc, color):
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
    return image`,java:"",cpp:""}},{id:"gr-02",slug:"number-of-islands",title:"Number of Islands",pattern:"graphs",difficulty:"Easy",platform:"LeetCode",url:"https://leetcode.com/problems/number-of-islands/",extra:[],summary:'Given a 2D grid of "1" (land) and "0" (water), count the number of islands. An island is land connected 4-directionally.',asked:"The number of connected land components.",why:"Component counting is the parent move of every connected-components problem: scan every cell; when you find unvisited land, that starts ONE new island — DFS/BFS to sink the whole island (mark it visited), then keep scanning.",clues:["count components","grid","land vs water","sinking the island"],brute:{idea:"Same algorithm with a separate visited set instead of mutating the grid.",time:"O(n·m)",space:"O(n·m)"},optimal:{idea:'For each cell: if it is "1" and not yet counted: count++, and DFS from it turning every connected "1" into "0" (the sink). The scan then never counts the same island twice.',steps:["count = 0.","Loop over every cell (r, c).",'If grid[r][c] === "1": count++; f(r, c).','f(r, c): out of bounds or "0" → stop; set "0"; recurse to 4 neighbors.',"Return count."],time:"O(n·m)",space:"O(n·m) recursion"},dry:['grid = ["11110", "11010", "11000", "00000"]',"Scan (0,0): land → island #1. DFS sinks its whole component: (0,0),(0,1),(0,2),(1,0),(1,1)","Scan continues: (0,3) is still land → island #2. DFS sinks (0,3) and (1,3)","Every remaining cell is now 0 — the scan ends","Answer: 2"],hints:["When you find a new island at cell (r,c), what do you do before moving on? (explore and mark the WHOLE island)",'Marking = mutating the grid ("1" → "0") — that doubles as the visited set.',"One DFS per NEW island found — the count is the number of times the DFS was triggered."],code:{javascript:`function numIslands(grid) {
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
}`,python:`def numIslands(grid):
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
    return count`,java:"",cpp:""}},{id:"gr-03",slug:"rotting-oranges",title:"Rotting Oranges",pattern:"graphs",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/rotting-oranges/",extra:[],summary:"A grid has fresh oranges (1), rotten (2), and empty cells (0). Each minute, every fresh orange adjacent (4-directional) to a rotten one rots. Return the minutes until no fresh orange remains, or -1 if impossible.",asked:"Time for rot to spread to every fresh orange (multi-source spread).",why:"All rotten oranges rot SIMULTANEOUSLY — that is BFS from MULTIPLE sources (seed the queue with every rotten orange at time 0). The number of levels the BFS expands = the minutes. If fresh oranges remain at the end → -1.",clues:["simultaneous spread","multi-source BFS","minutes = levels","-1 case"],brute:{idea:"Simulate minute by minute scanning the whole grid.",time:"O(n·m·min(n,m))",space:"O(n·m)"},optimal:{idea:"Seed the queue with ALL rotten oranges (time 0). Count fresh oranges. BFS in batches (one batch = one minute): each batch rots all adjacent fresh neighbors. When the queue empties: fresh === 0 → minutes, else -1.",steps:["queue = all (r, c) with grid[r][c] === 2; fresh = count of 1s.","If fresh === 0: return 0 (no fresh to rot).","minutes = 0.","While queue non-empty and fresh > 0: minutes++; for each node in the current batch: rot up to 4 fresh neighbors (set 2, fresh--, enqueue).","Return fresh === 0 ? minutes : -1."],time:"O(n·m)",space:"O(n·m)"},dry:["grid = [[2,1,1],[1,1,0],[0,1,1]]","t=0: queue [(0,0)], fresh = 5","minute 1: rot (0,1) and (1,0) → fresh 3","minute 2: rot (0,2) and (1,1) → fresh 1","minute 3: rot (1,2)? no — (2,1) is adjacent to (1,1) → rot (2,1) → fresh 0; (2,2) adjacent to (2,1) → minute 4: rot (2,2)","Recheck: (2,2) neighbors: (1,2)=1 (not rotten until...), (2,1) rots at minute 3 → (2,2) at minute 4","Answer: 4"],hints:["Every rotten orange is a SOURCE — seed the queue with all of them at once.","One BATCH of the queue = one minute of real time (process exactly queue.length nodes per minute).","Track the fresh count: if any remain when the BFS is done, the answer is -1."],code:{javascript:`function orangesRotting(grid) {
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
}`,python:`from collections import deque
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
    return minutes if fresh == 0 else -1`,java:"",cpp:""}},{id:"gr-04",slug:"course-schedule",title:"Course Schedule",pattern:"graphs",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/course-schedule/",extra:[],summary:"There are n courses (0..n-1) and prerequisites [a, b] meaning you must take b before a. Decide if you can finish all courses (i.e. the dependency graph is acyclic).",asked:"True iff the prerequisite graph has NO cycle (topologically sortable).",why:`A cycle of prerequisites is impossible to satisfy. "Can finish all?" = "does a topological order exist?" = "is the directed graph acyclic?" Kahn's algorithm (BFS on zero-indegree nodes) answers it: if it processes ALL nodes, there is no cycle.`,clues:["prerequisites","cycle = impossible","indegree","Kahn's algorithm"],brute:{idea:"DFS with a visited+recursion-stack per node (cycle detection).",time:"O(V + E)",space:"O(V)"},optimal:{idea:"Kahn's: build adj and indegree; queue all indegree-0 courses; repeatedly take a course, decrement its dependents' indegree (enqueue at 0). If processed count === n → true, else a cycle remains → false.",steps:["For each [a, b]: adj[b].push(a); indeg[a]++.","queue = all i with indeg[i] === 0.","count = 0; while queue: u = pop; count++; for v in adj[u]: if --indeg[v] === 0 enqueue v.","Answer: count === n."],time:"O(V + E)",space:"O(V + E)"},dry:["n = 4, prerequisites = [1,0,2,0,3,1,3,2] → edges 0→1, 0→2, 1→3, 2→3","indeg: [0, 1, 1, 2]; queue = [0]","take 0: indeg[1]→0 enqueue; indeg[2]→0 enqueue; count=1","take 1: indeg[3]→1; count=2","take 2: indeg[3]→0 enqueue; count=3","take 3: count=4 → all processed","Answer: true","Counter: [1,0],[0,1]: indeg [1,1] → queue empty, count=0 → false"],hints:["A course with NO prerequisites can always be taken first — what do you call such nodes? (indegree 0)",'After "taking" a course, what changes for its dependents? (their indegree drops)',"If the process stops before all courses are taken, what does the leftover subgraph contain? (a cycle)"],code:{javascript:`function canFinish(numCourses, prerequisites) {
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
}`,python:`from collections import deque
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
    return count == numCourses`,java:"",cpp:""}},{id:"gr-05",slug:"find-the-order",title:"Find the Order (Topological Sort)",pattern:"graphs",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/course-schedule-ii/",extra:[],summary:"Return the order in which you must take the courses (a topological ordering), or an empty array if some courses cannot be finished. (This is Course Schedule II — the topological sort.)",asked:"ANY valid topological order (all prerequisites before dependents), or [].",why:`Topological sort IS Kahn's algorithm with the queue visit order recorded. Every node you dequeue is "done" — that dequeuing order is a valid topological ordering.`,clues:["produce an order","topological sort","Kahn's algorithm"],brute:{idea:"DFS finishing-order (reverse postorder) also yields a topological order.",time:"O(V + E)",space:"O(V)"},optimal:{idea:"Same as Course Schedule, but record each node as it is dequeued. If all n nodes appear → that order; else [].",steps:["Build adj + indegree; queue zero-indegree nodes.","order = [].","While queue: u = pop; order.push(u); relax dependents (indeg--, enqueue at 0).","Return order.length === n ? order : []."],time:"O(V + E)",space:"O(V + E)"},dry:["n = 3, prereqs = [1,0],[2,1] → 0→1→2","indeg [0,1,1]; queue [0]","order: 0 → (indeg1→0) → 1 → (indeg2→0) → 2","Answer: [0, 1, 2]","Another valid example: n=4, [1,0],[2,0] → [0,1,2,3] or [0,2,1,3]"],hints:["Which node, when dequeued, is GUARANTEED to have all its prerequisites already taken?","Record the dequeue order — that IS the topological ordering.","Multiple valid orders can exist — any one is accepted."],code:{javascript:`function findOrder(numCourses, prerequisites) {
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
}`,python:`from collections import deque
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
    return order if len(order) == numCourses else []`,java:"",cpp:""}},{id:"gr-06",slug:"course-schedule-ii",title:"Course Schedule II",pattern:"graphs",difficulty:"Medium",platform:"GeeksforGeeks",url:"https://www.geeksforgeeks.org/problems/prerequisite-tasks-2/1",extra:[],summary:"GFG version: given V tasks and prerequisite pairs, return the order in which tasks can be completed, or -1 if it is not possible (cycle). (Same topic as LeetCode Course Schedule II.)",asked:"A valid task order array, or -1 when a cycle blocks completion.",why:"Same topological sort, GFG interface: prerequisites[i] = [a, b] means b before a. Return the order list; if any task is left behind, the answer is -1.",clues:["topological order","return -1 on cycle","GFG interface"],brute:{idea:"DFS-based topological sort (postorder, then reverse).",time:"O(V + E)",space:"O(V)"},optimal:{idea:"Kahn's algorithm; collect the dequeue order; return it if complete, else [-1].",steps:["adj[b].push(a); indeg[a]++ for each [a, b].","Queue all indeg-0 tasks; process, recording order and relaxing dependents.","If order.length === V → order, else [-1]."],time:"O(V + E)",space:"O(V + E)"},dry:["V = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]","indeg [0,1,1,2]; queue [0]","0 → order [0]; indeg[1]=0, indeg[2]=0 → queue [1,2]","1 → order [0,1]; indeg[3]=1","2 → order [0,1,2]; indeg[3]=0 → queue [3]","3 → order [0,1,2,3] → complete","Answer: [0, 1, 2, 3] (or [0, 2, 1, 3])"],hints:["The order in which zero-indegree nodes get processed is a valid schedule.","When is the schedule IMPOSSIBLE? (cycle → some indegrees never reach 0)","GFG wants -1 (not an empty list) when impossible."],code:{javascript:`function findOrder(V, prerequisites) {
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
}`,python:`from collections import deque
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
    return order if len(order) == V else [-1]`,java:"",cpp:""}},{id:"gr-07",slug:"dijkstra",title:"Dijkstra",pattern:"graphs",difficulty:"Hard",platform:"LeetCode",url:"https://leetcode.com/problems/network-delay-time/",extra:[],summary:"Learn and apply Dijkstra's algorithm: shortest paths from a single source in a graph with NON-NEGATIVE edge weights. (Applied here on LeetCode 743: maximum delay until every node receives a signal.)",asked:"Shortest distance from source k to every node; return the largest (or -1 if some node is unreachable).",why:"Dijkstra greedily settles the nearest unvisited node: its distance is FINAL because all remaining paths would only add non-negative weight. A min-priority queue keeps picking the closest frontier node. Negative edges would break this invariant (that is Bellman-Ford territory).",clues:["shortest path","non-negative weights","priority queue","greedy settlement"],brute:{idea:"Bellman-Ford (relax all edges V-1 times) or BFS-like relaxation without a heap.",time:"O(V·E)",space:"O(V)"},optimal:{idea:"dist[source] = 0, others ∞. Min-PQ of (dist, node). Pop the smallest d,u; if d > dist[u] skip (stale). For each edge u→v with weight w: if dist[u] + w < dist[v]: update and push. After the PQ drains: if any dist is ∞ → -1, else the max dist.",steps:["Build the adjacency list of weighted edges.","dist[k-1] = 0; pq = [(0, k-1)].","Pop (d, u); skip if d > dist[u].","Relax each neighbor: newDist = dist[u] + w; if better → update + push.","Answer: max(dist) if all finite, else -1."],time:"O(E log V)",space:"O(V + E)"},dry:["n = 4, times = [[0,1,1],[2,1,1],[0,2,1],[1,2,1],[2,3,1]], k = 1 (source node 0)","dist = [0, ∞, ∞, ∞]","pop (0,0): relax 0→1 (dist1=1), 0→2 (dist2=1)","pop (1,1): relax 1→2 (1+1=2 > 1, no update)","pop (1,2): relax 2→3 (dist3=2)","pop (2,3): no edges","dist = [0,1,1,2], all finite → answer = max = 2","Answer: 2"],hints:['Why can Dijkstra "settle" a node permanently? (all weights ≥ 0 — no cheaper path can appear later)',"Why skip popped entries with d > dist[u]? (stale queue entries from earlier, better updates)","The answer is the MAX over all dist — the last node to receive the signal."],code:{javascript:`function networkDelayTime(times, n, k) {
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
}`,python:`import heapq
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
    return max(dist)`,java:"",cpp:""}},{id:"gr-08",slug:"zero-one-bfs",title:"0-1 BFS",pattern:"graphs",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/path-with-minimum-effort/",extra:[],summary:"Learn 0-1 BFS: shortest paths when edge weights are only 0 or 1, using a DEQUE (push 0-weight edges to the front, 1-weight to the back) instead of a heap. Applied here on LeetCode 1514 (Path with Minimum Effort), where the effort of moving is the absolute height difference.",asked:"Minimum possible maximum step effort from top-left to bottom-right of the grid.",why:"0-1 BFS is Dijkstra specialized to weights {0, 1}: a deque keeps the frontier in distance order without a heap (0-edges = same distance = front; 1-edges = next distance = back) → O(V+E). The effort problem is the same engine (shortest path where edge cost = |height diff|; when diffs are only 0/1 it becomes literal 0-1 BFS, otherwise the identical Dijkstra loop with a heap).",clues:["weights 0 or 1","deque front/back","minimum effort","path cost = max edge"],brute:{idea:"Full Dijkstra with a priority queue (always correct for non-negative weights).",time:"O(E log V)",space:"O(V)"},optimal:{idea:'dist[r][c] = minimum "effort" (max step cost along the path). Relax neighbor with newEffort = max(dist, |diff|)... for 1514 the path cost is the MAX edge, so the Dijkstra variant: candidate = max(dist[u], w) < dist[v] → update. (For pure 0-1 weights the recurrence becomes dist[u] + w with a deque.)',steps:["dist grid = ∞; dist[0][0] = 0; priority queue (or deque for true 0/1 weights).","Pop the smallest; relax 4 neighbors with edge cost |grid[u] - grid[v]|.","New candidate = max(current, cost) — the path cost is the largest step.","Stop when the bottom-right is settled (or drain the queue).","For true 0-1 weights: replace the heap with a deque — push front on 0-cost, back on 1-cost."],time:"O(E log V) heap / O(V+E) true 0-1 BFS",space:"O(V)"},dry:["grid = [[0,1],[1,0]] → start (0,0) effort 0 → (0,1) cost 1 (max=1) → (1,1) cost 1 (max=1)","Alt: (1,0) cost 1 → (1,1) cost 1 (max=1)","Answer: 1","grid = [[1,2,3],[3,2,1],[2,1,1]] → path 1→2→3→2→1? no: 1→2 (1), 2→1? best: 1,2,3,2,1 costs 1,1,1,1 → effort 1? cells: (0,0)=1,(0,1)=2,(0,2)=3,(1,2)=2,(1,1)... known answer: 2","Answer: 2 (the minimum over paths of the maximum step difference)"],hints:["The cost of a path is the MAXIMUM step effort, not the sum — how does the relaxation change? (new = max(old, edge))","When weights are only 0 or 1, why does a deque replace the heap? (front = same distance, back = one more — distance order is preserved)","Settling order still matters: always expand the frontier cell with the smallest current effort."],code:{javascript:`function minEffort(grid) {
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
//     if w === 0 push to FRONT (unshift), else push to BACK.`,python:`import heapq
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

# True 0-1 BFS (weights 0/1): deque; 0-cost edges to the FRONT, 1-cost to the BACK.`,java:"",cpp:""}},{id:"gr-09",slug:"bfs-and-dfs-in-graphs",title:"BFS and DFS in Graphs",pattern:"graphs",difficulty:"Easy",platform:"GeeksforGeeks",url:"https://www.geeksforgeeks.org/problems/bfs-and-dfs-traversal-of-graph/1",extra:[],summary:"Given a directed graph (V vertices, adjacency list), print its BFS and DFS traversal starting from vertex 0. (GFG interface; adjacency lists are already sorted.)",asked:"Two arrays: the BFS order and the DFS order from vertex 0.",why:"The two fundamental graph traversals, side by side: BFS uses a queue (level-by-level, shortest-hop order); DFS uses a stack/recursion (depth-first, follow one path as far as it goes). Both need a visited set — the ONLY thing that prevents infinite loops.",clues:["graph","traversal order","queue vs stack","visited set"],brute:{idea:"These ARE the base algorithms — nothing to optimize; iterative versions avoid recursion depth.",time:"O(V + E)",space:"O(V)"},optimal:{idea:"BFS: queue = [0], visited[0]; dequeue, record, enqueue unvisited neighbors. DFS: recurse (or stack) from 0, mark visited BEFORE descending, record on entry.",steps:["BFS: mark start, queue it; while queue: pop front, record, push unvisited neighbors (mark on enqueue).","DFS: f(u): mark u, record u; for each unvisited neighbor: f(neighbor).","Return both orders (from vertex 0 for the connected part).","Disconnected graphs: loop over all starts (GFG test cases may be disconnected — standard approach is from 0 only; note it)."],time:"O(V + E)",space:"O(V)"},dry:["V = 4, adj = {0:[1,3], 1:[2], 2:[], 3:[1]}","BFS from 0: [0] → neighbors 1,3 → [0,1,3] → 1's neighbor 2 → [0,1,3,2]","DFS from 0: 0 → 1 → 2 → (back) → 3 → (3→1 visited) → [0,1,2,3]","Answer: BFS [0,1,3,2], DFS [0,1,2,3]"],hints:["Which data structure is the heart of BFS? And of DFS? (queue / stack-recursion)","When do you mark a node visited in BFS? (on ENQUEUE — otherwise it gets enqueued twice)","The same edge can be seen from both endpoints in undirected graphs — the visited set handles it."],code:{javascript:`function dfsOfGraph(V, adj) {
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
}`,python:`def dfsOfGraph(V, adj):
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
    return res`,java:"",cpp:""}},{id:"gr-10",slug:"cycle-detection-in-directed-graph",title:"Cycle Detection in Directed Graph",pattern:"graphs",difficulty:"Medium",platform:"GeeksforGeeks",url:"https://www.geeksforgeeks.org/problems/detect-cycle-in-a-directed-graph/1",extra:[],summary:"Detect whether a directed graph contains a cycle. (GFG interface: V vertices, adjacency list.)",asked:"True if any directed cycle exists.",why:"A directed DFS has three states: unvisited, ON THE CURRENT PATH (grey), and DONE (black). Reaching a GREY node means you came back to the current path → cycle. Reaching a BLACK node is fine (it finished earlier).",clues:["directed","cycle","three states","back edge"],brute:{idea:"Kahn's algorithm: if the processed count < V → a cycle remains.",time:"O(V + E)",space:"O(V)"},optimal:{idea:"DFS with state[u] ∈ {0: unvisited, 1: in current recursion path, 2: finished}. f(u): mark 1; for each neighbor: state 1 → cycle (true); state 0 → recurse; mark 2 before returning. Loop all vertices (disconnected graphs).",steps:["state array of 0s.","f(u): state[u] = 1.","For v in adj[u]: if state[v] === 1 → return true; if state[v] === 0 && f(v) → true.","state[u] = 2; return false.","Answer: any f(u) over unvisited u is true."],time:"O(V + E)",space:"O(V)"},dry:["Graph: 0→1→2→0 (cycle) plus 3 isolated","f(0): state[0]=1 → f(1): state[1]=1 → f(2): state[2]=1 → neighbor 0 is state 1 → CYCLE","Answer: true","Acyclic: 0→1, 0→2: f(0) → f(1) done(2) → f(2) done(2) → 0 done → no grey revisit → false"],hints:["An edge to a node that is ALREADY ANCESTOR of the current node closes a cycle — how do you know it is an ancestor? (it is still on the recursion path)","Why does an edge to a FINISHED (black) node NOT mean a cycle? (that node was explored in a different branch)","The three states collapse to two if you remove from the path set on exit (path set + visited set)."],code:{javascript:`function isCyclic(V, adj) {
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
}`,python:`def isCyclic(V, adj):
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
    return False`,java:"",cpp:""}},{id:"gr-11",slug:"detect-cycle-in-undirected-graph",title:"Detect Cycle in Undirected Graph",pattern:"graphs",difficulty:"Medium",platform:"GeeksforGeeks",url:"https://www.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1",extra:[],summary:"Detect whether an undirected graph contains a cycle. (GFG interface: V vertices, adjacency list.)",asked:"True iff some cycle exists (undirected: going back to the parent is NOT a cycle).",why:'Same DFS machinery as directed, with one twist: in undirected graphs every edge appears twice, so you will always see your PARENT — the cycle test is "visited neighbor that is NOT my parent".',clues:["undirected","parent exclusion","visited revisit"],brute:{idea:"BFS with parent tracking (works identically).",time:"O(V + E)",space:"O(V)"},optimal:{idea:"f(u, parent): mark visited; for each neighbor v: if !visited[v] → f(v, u); else if v !== parent → CYCLE. Loop all vertices.",steps:["visited array.","f(u, parent): visited[u] = true.","For v in adj[u]: if !visited[v] && f(v, u) → true.","Else if v !== parent → true (a back edge that is not the one we came in on).","Loop over all u (disconnected graphs)."],time:"O(V + E)",space:"O(V)"},dry:["Graph: 0-1, 1-2, 2-0 (triangle)","f(0,-1): visit 1 → f(1,0): visit 2 → f(2,1): neighbor 0 is visited and 0 !== 1 (parent) → CYCLE","Answer: true","Tree: 0-1, 0-2: f(0): f(1,0): neighbor 0 is the parent → skip; f(2,0): same → no cycle → false"],hints:["Why does the directed version not need a parent argument? (a single edge 0→1 is not also 1→0)",'The only "legal" revisit in undirected DFS is the edge you arrived by — exclude exactly that.',"Any other visited neighbor you bump into means there are TWO paths to it → a cycle."],code:{javascript:`function isCycle(V, adj) {
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
}`,python:`def isCycle(V, adj):
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
    return False`,java:"",cpp:""}},{id:"gr-12",slug:"number-of-provinces",title:"Number of Provinces",pattern:"graphs",difficulty:"Easy",platform:"LeetCode",url:"https://leetcode.com/problems/number-of-provinces/",extra:[],summary:"An n×n matrix isConnected where isConnected[i][j] = 1 means city i and city j are directly connected. A province is a group of directly or indirectly connected cities. Count the provinces.",asked:"The number of connected components in the graph defined by the adjacency matrix.",why:'An adjacency MATRIX is just an adjacency list you scan in O(n) per node. "Count the provinces" is the same scan-sink-scan loop as Number of Islands — only the representation changes.',clues:["adjacency matrix","connected components","count them"],brute:{idea:"Convert the matrix to an adjacency list, then component-count (same asymptotics).",time:"O(n³) naive scan",space:"O(n)"},optimal:{idea:"For each unvisited city i: provinces++; DFS from i — a node j is a neighbor iff isConnected[i][j] === 1 and j not visited.",steps:["visited array of n.","count = 0.","For i in 0..n-1: if !visited[i]: count++; f(i).","f(i): visited[i] = true; for j in 0..n-1: if isConnected[i][j] && !visited[j]: f(j).","Return count."],time:"O(n²)",space:"O(n)"},dry:["isConnected = [[1,1,0],[1,1,0],[0,0,1]]","city 0 unvisited → province 1: f(0) visits 1 (connected); city 1 now visited","city 2 unvisited → province 2","Answer: 2"],hints:["The matrix row IS the adjacency list — what do you check to find i's neighbors? (isConnected[i][j] === 1)","Same loop as islands: find unvisited → count → sink the component.","isConnected[i][i] = 1 (a city is connected to itself) — visited marking makes it harmless."],code:{javascript:`function findCircleNum(isConnected) {
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
}`,python:`def findCircleNum(isConnected):
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
    return count`,java:"",cpp:""}},{id:"gr-13",slug:"minimum-height-trees",title:"Minimum Height Trees",pattern:"graphs",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/minimum-height-trees/",extra:[],summary:'Given a tree (n nodes, n-1 edges) and a root choice, the "height" is the number of nodes on the longest root-to-leaf path. Return ALL roots that give the minimum possible height (the centroid(s) — 1 or 2 of them).',asked:"Every node that minimizes the tree height when chosen as root.",why:"The answer is the CENTER of the tree. Repeatedly strip the leaves (degree-1 nodes) layer by layer — the last 1 or 2 nodes standing are the centroids, exactly like peeling an onion from the outside in.",clues:["center of a tree","strip leaves","degree 1","1 or 2 answers"],brute:{idea:"For each node, BFS its farthest leaf → take the min over all nodes.",time:"O(n²)",space:"O(n)"},optimal:{idea:"Compute degrees; leaves = degree-1 nodes. While more than 2 nodes remain: remove all current leaves (decrement their neighbors' degrees; neighbors that hit degree 1 become the next leaves). The final set (size 1 or 2) is the answer.",steps:["adj from edges; degree[i] = adj[i].length.","leaves = [i : degree[i] === 1].","remaining = n.","While remaining > 2: for each leaf u: remaining--; for each neighbor v: degree[v]--; if degree[v] === 1 → next-leaves. leaves = next-leaves.","Return leaves (the last layer)."],time:"O(n)",space:"O(n)"},dry:["n = 6, edges = [3,0],[3,1],[3,2],[3,4],[5,4] → line 0-3-4-5 plus 1,2 on 3","degrees: 0:1, 1:1, 2:1, 3:4, 4:2, 5:1; leaves [0,1,2,5]","peel: 0,1,2,5 removed → deg3 4→1, deg4 2→1 → leaves [3,4]; remaining = 2 → stop","Answer: [3, 4]","Chain 0-1-2-3: peel 0,3 → peel 1,2 → remaining 2 → answer [1, 2]"],hints:['What happens to the "center" when you remove the outermost ring of leaves? (it stays the center of the smaller tree)',"A leaf has exactly one neighbor — degree 1.","Why do we stop at 2 nodes instead of 1? (an even-length path has TWO central nodes, both optimal)"],code:{javascript:`function findMinHeightTrees(n, edges) {
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
}`,python:`def findMinHeightTrees(n, edges):
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
    return leaves`,java:"",cpp:""}},{id:"gr-14",slug:"shortest-path-in-unweighted-graph",title:"Shortest Path in Unweighted Graph",pattern:"graphs",difficulty:"Easy",platform:"GeeksforGeeks",url:"https://www.geeksforgeeks.org/problems/shortest-path-in-unweighted-graph/1",extra:[],summary:"Given an unweighted undirected graph (edge list, V vertices) and a source and target, return the minimum number of edges in a path from source to target, or -1 if no path exists. (GFG interface.)",asked:"The shortest distance in EDGES, or -1.",why:'In an unweighted graph every edge costs 1, so "fewest edges" = "fewest hops" = BFS layers. The first time BFS reaches the target, that layer number IS the shortest distance — no other algorithm can beat this here.',clues:["unweighted","fewest edges","BFS layers","-1 if unreachable"],brute:{idea:'DFS from source trying all paths (exponential without visited tricks; visited turns it into "some path", not shortest).',time:"O(2^V) worst",space:"O(V)"},optimal:{idea:"dist array = -1; dist[src] = 0. BFS from src: dist[neighbor] = dist[u] + 1 (first visit only). Answer: dist[target].",steps:["Build adj from the edge list (both directions).","dist = [-1] * V; dist[src] = 0; queue = [src].","While queue: u = pop; for v in adj[u]: if dist[v] === -1: dist[v] = dist[u] + 1; enqueue v.","Return dist[target] (stays -1 if unreachable)."],time:"O(V + E)",space:"O(V)"},dry:["V = 5, edges = [0-1, 1-2, 2-3, 3-4, 0-4], src = 0, target = 3","dist[0]=0; level1: 1 (d1), 4 (d1); level2: 2 (d2); level3: 3 (d3) via 2 — but 3 is also... 4→3: d2! level2 from 4: neighbor 3 → d2","dist[3] = 2 (path 0-4-3)","Answer: 2"],hints:["In an unweighted graph, what traversal explores all nodes at distance 1, then 2, then 3? (BFS)","The FIRST visit to a node is always by a shortest path — why? (BFS expands in distance order)","dist[v] = dist[u] + 1 exactly once (on first visit) — that is the whole algorithm."],code:{javascript:`function shortestPath(edgeList, V, src, target) {
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
}`,python:`from collections import deque
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
    return dist[target]`,java:"",cpp:""}},{id:"gr-15",slug:"minimum-moves-to-reach-target",title:"Minimum Moves to Reach Target",pattern:"graphs",difficulty:"Medium",platform:"GeeksforGeeks",url:"https://www.geeksforgeeks.org/problems/minimum-moves-to-reach-target/1",extra:[],summary:"Starting from 1, you may move from i to i+1 or from i to 2*i (one move each). Find the minimum moves to reach n. (GFG interface.)",asked:"The fewest moves from 1 to n using +1 and ×2.",why:"Model the numbers as a graph (edges i→i+1, i→2i) and BFS — but there is a sharper lens: work BACKWARDS from n. From x you came from x-1 or x/2. Halving is always at least as good as decrementing, so a simple greedy backward walk is optimal: if even → halve; if odd → decrement.",clues:["moves +1 and ×2","backward thinking","halve when even","BFS alternative"],brute:{idea:"BFS over 1..n with edges +1 and ×2 (visits states in order).",time:"O(n)",space:"O(n)"},optimal:{idea:'x = n, count = 0. While x > 1: if x is even → x /= 2; else x -= 1; count++. The reverse operation is a "undo move" — undoing a ×2 (halving) removes a whole doubling, which no chain of -1 undos can match, so the greedy is optimal.',steps:["x = n; count = 0.",'If x is even: x /= 2 (undo a doubling — the "big" move).',"If x is odd: x -= 1 (undo an increment).","Stop at 1; return count.","Equivalently: count = (bit-length of n) + (popcount of n) - 2 — the bits are the doublings, the 1-bits the increments."],time:"O(log n)",space:"O(1)"},dry:["n = 7: 7 (odd) → 6 (1 move); 6 (even) → 3 (2); 3 (odd) → 2 (3); 2 (even) → 1 (4)","Answer: 4","Forward check: 1 → 2 (×2) → 3 (+1) → 6 (×2) → 7 (+1): 4 moves ✓","n = 8: 8 → 4 → 2 → 1 = 3 moves (1→2→4→8 ✓)"],hints:["What are the REVERSE moves of (+1) and (×2)? (-1 and ÷2)","From an even number, which reverse move is always at least as good? (halving — one undo vs many)","An odd number has NO halving option — it must decrement first."],code:{javascript:`function minMove(n) {
  let x = n, count = 0;
  while (x > 1) {
    if (x % 2 === 0) x /= 2;
    else x -= 1;
    count++;
  }
  return count;
}`,python:`def minMove(n):
    x = n
    count = 0
    while x > 1:
        if x % 2 == 0:
            x //= 2
        else:
            x -= 1
        count += 1
    return count`,java:"",cpp:""}},{id:"gr-16",slug:"cheapest-flights-within-k-stops",title:"Cheapest Flights Within K Stops",pattern:"graphs",difficulty:"Hard",platform:"LeetCode",url:"https://leetcode.com/problems/cheapest-flights-within-k-stops/",extra:[],summary:"n cities, flights [from, to, price]. Find the cheapest path from src to dst with AT MOST k stops (i.e. at most k+1 edges), or -1 if none.",asked:"Minimum cost under a constraint on the number of edges — not the unconstrained shortest path.",why:"Dijkstra optimizes COST but ignores the stop count; a cheap path may use too many stops. Bellman-Ford naturally constrains EDGE COUNT: after i rounds of relaxing every edge, dist[v] is the best price using AT MOST i edges. Run k+1 rounds and stop.",clues:["k stops limit","edge-count constraint","Bellman-Ford rounds","price vs hops"],brute:{idea:"Enumerate all paths up to k+1 edges (exponential in the worst case).",time:"O(E^(k+1))",space:"O(V)"},optimal:{idea:"dist = [∞]·n; dist[src] = 0. For round in 0..k: snapshot = copy of dist; for every flight (u,v,w): if snapshot[u] + w < dist[v] → dist[v] = snapshot[u] + w. The snapshot prevents using MORE than the allowed edges in one round. Answer: dist[dst] (∞ → -1).",steps:["k stops = k+1 edges → run k+1 relaxation rounds.","Each round relaxes ALL edges against the PREVIOUS round's distances.","This is Bellman-Ford cut short at k+1 passes.","Return dist[dst] or -1."],time:"O(k · E)",space:"O(V + E)"},dry:["n = 4, flights = [0→1(100), 1→2(100), 0→2(500), 0→1(1000), 3→0(200)], src 0, dst 2, k = 1","round 0: snapshot [0,∞,∞,∞] → 0→1: 100, 1000 (min 100); 0→2: 500 → dist [0,100,500,∞]","round 1: snapshot [0,100,500,∞] → 1→2: 100+100=200 < 500 → dist[2]=200","Answer: 200 (0→1→2, exactly 1 stop)","k = 0 would give 500 (direct only)"],hints:["Why can't plain Dijkstra be trusted here? (its cheapest path might exceed k stops)",'What does "i rounds of Bellman-Ford" guarantee about dist? (best price with at most i edges)',"Why copy dist before each round? (to forbid chaining updates within the same round = more edges than allowed)"],code:{javascript:`function findCheapestPrice(n, flights, src, dst, k) {
  const dist = new Array(n).fill(Infinity);
  dist[src] = 0;
  for (let round = 0; round <= k; round++) {
    const prev = [...dist];
    for (const [u, v, w] of flights) {
      if (prev[u] + w < dist[v]) dist[v] = prev[u] + w;
    }
  }
  return dist[dst] === Infinity ? -1 : dist[dst];
}`,python:`def findCheapestPrice(n, flights, src, dst, k):
    dist = [float('inf')] * n
    dist[src] = 0
    for _ in range(k + 1):
        prev = dist[:]
        for u, v, w in flights:
            if prev[u] + w < dist[v]:
                dist[v] = prev[u] + w
    return -1 if dist[dst] == float('inf') else dist[dst]`,java:"",cpp:""}},{id:"gr-17",slug:"network-delay-time",title:"Network Delay Time",pattern:"graphs",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/network-delay-time/",extra:[],summary:"A signal is sent from node k through a network of n nodes and directed, weighted links [u, v, w]. How long until EVERY node has received it? Return -1 if any node can never be reached. (Same engine as the Dijkstra entry — here framed as a network problem.)",asked:"The maximum shortest-path distance from k (or -1 if the graph is not fully reachable from k).",why:`It is Dijkstra's algorithm wearing a network costume: the moment the last node is "settled", the delay is complete. If the PQ drains with a node still at ∞, that node is unreachable → -1.`,clues:["signal to all nodes","Dijkstra","max of distances","-1 if unreachable"],brute:{idea:"BFS-like relaxation without a heap (fine for small graphs, O(VE) worst).",time:"O(V·E)",space:"O(V)"},optimal:{idea:"Standard single-source Dijkstra from k-1; after draining, scan dist: any ∞ → -1; else return max(dist).",steps:["Weighted adjacency list.","dist[k-1] = 0; min-PQ loop with stale-skip.","Relax edges on pop.","Answer: all finite ? max(dist) : -1."],time:"O(E log V)",space:"O(V + E)"},dry:["n = 2, times = [[1,2,1]], k = 2 (source node 1, 0-indexed 1)","dist = [∞, 0] → relax 1→0: dist[0] = 1 → drain","max = 1, all finite","Answer: 1","n = 2, times = [[1,2,1]], k = 1: dist[1] stays ∞ → Answer: -1"],hints:["Which node determines the FINAL delay? (the one with the largest shortest distance)","A node still at ∞ after Dijkstra means... (no path from k exists → -1)",`The signal propagates in "shortest-path order" — exactly Dijkstra's settlement order.`],code:{javascript:`function networkDelayTime(times, n, k) {
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
}`,python:`import heapq
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
    return delay`,java:"",cpp:""}},{id:"gr-18",slug:"number-of-connected-components-in-an-undirected-graph",title:"Number of Connected Components in an Undirected Graph",pattern:"graphs",difficulty:"Medium",platform:"GeeksforGeeks",url:"https://www.geeksforgeeks.org/problems/number-of-connected-components-in-an-undirected-graph/1",extra:[],summary:"Given n nodes and an edge list, count how many connected components the undirected graph has. (GFG interface.)",asked:"The number of disconnected pieces of the graph.",why:"The master loop of component counting: for each unvisited node, start a new component and DFS/BFS its whole piece. Islands (grid), provinces (matrix), and this (edge list) are the same algorithm in three costumes.",clues:["connected components","undirected","count them","scan-sink-scan"],brute:{idea:"DFS from every node without memoization (repeats work).",time:"O(V·E)",space:"O(V)"},optimal:{idea:"Build adj from edges. visited array. For u in 0..n-1: if !visited[u]: components++; DFS(u) marking everything reachable. Return components.",steps:["adj[u].push(v) and adj[v].push(u) for each edge.","components = 0.","Loop over all u: new unvisited u → components++; f(u).","f(u): mark visited; recurse to all unvisited neighbors.","Return components."],time:"O(V + E)",space:"O(V + E)"},dry:["n = 5, edges = [0-1, 2-3] (4 is isolated)","u=0: new component → sink {0,1}; u=1 visited; u=2: new → sink {2,3}; u=4: new → {4}","Answer: 3"],hints:["An unvisited node you bump into during the outer scan ALWAYS starts a new component — why?","The DFS from it is guaranteed to cover its ENTIRE component — that is what makes one count per trigger correct.","Same loop as Number of Islands — only the adjacency representation differs."],code:{javascript:`function countComponents(n, edges) {
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
}`,python:`def countComponents(n, edges):
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
    return count`,java:"",cpp:""}},{id:"gr-19",slug:"bfs-and-dfs-traversals-of-a-graph",title:"BFS and DFS Traversals of a Graph",pattern:"graphs",difficulty:"Easy",platform:"LeetCode",url:"https://leetcode.com/problems/binary-tree-level-order-traversal/",extra:[],summary:"Graph traversal applied to a binary tree: return the level order (BFS) — values grouped layer by layer, left to right. (Tree is a special graph: every node has ≤ 2 outgoing edges.)",asked:"The BFS layers of the tree as an array of arrays.",why:'A tree is the friendliest graph: no cycles, at most 2 children. BFS on it (the batch-by-queue-size trick) IS level order — the bridge between "graph BFS" and "tree level order" you have been building toward.',clues:["tree as a graph","level order","BFS batches","left to right"],brute:{idea:"Recursion with a depth argument appending to per-depth arrays.",time:"O(n)",space:"O(n)"},optimal:{idea:"queue = [root]. While queue non-empty: level = []; for i in 0..queue.length-1: pop node, record value, enqueue children; push level. The batch size is captured at the START of each level — that is what keeps layers separated.",steps:["If root null: [].","queue = [root].","Loop: batch = current queue length; process exactly batch nodes; collect their values; enqueue their children.","Push each batch as one level.","Return the levels."],time:"O(n)",space:"O(n)"},dry:["Tree: 3 → 9, 20(15, 7)","batch 1: [3] → children 9, 20 enqueued","batch 2: [9, 20] → children 15, 7 enqueued","batch 3: [15, 7]","Answer: [[3], [9, 20], [15, 7]]"],hints:["How do you know where one level ends and the next begins in a queue? (snapshot the queue size before processing a level)","Children enqueued during level d are exactly level d+1 — that is why the batch trick works.","The same BFS on a general graph (with a visited set) gives the same layered structure."],code:{javascript:`function levelOrder(root) {
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
}`,python:`from collections import deque
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
    return res`,java:"",cpp:""}}],ct=[{id:"dp-01",slug:"dp-fundamentals",title:"DP Fundamentals",pattern:"dp",difficulty:"Easy",platform:null,url:null,extra:[],summary:'Episode 01: what makes a problem "dynamic programming" — overlapping subproblems + optimal substructure — and the two ways to build a DP: memoization (top-down) and tabulation (bottom-up).',asked:"The mental model: break the problem into smaller SUBPROBLEMS, cache answers, combine.",why:"Before any DP table, you need the two signs: (1) the same subproblem is asked many times (overlap) and (2) the optimal answer is built from optimal answers of smaller subproblems (optimal substructure). Memoization writes the recursion and caches it; tabulation inverts the recursion into a filled table. Same recurrence, two directions.",clues:["repeated subproblems","optimal substructure","memoize or tabulate","base cases + transition"],brute:{idea:"Pure recursion — exponential because it recomputes subproblems.",time:"O(2ⁿ) typical",space:"O(n) stack"},optimal:{idea:"Step 1: define dp[i] = answer for the subproblem of size i. Step 2: write the transition (how dp[i] uses smaller dp[·]). Step 3: fix base cases. Step 4a top-down: recursion + cache. Step 4b bottom-up: fill the table iteratively.",steps:['Define the STATE: what does dp[i] mean? (often "best answer for the first i items / at position i")',"Write the TRANSITION: dp[i] = best of (options, each using smaller dp values).","Fix BASE CASES: the dp values you already know.","Top-down: function f(i): return cache[i] if present; compute with smaller f calls; store.","Bottom-up: loop i from base to n; compute dp[i] from already-filled cells.","The example below: both flavors of the same recurrence."],time:"O(n) for the example (vs O(2ⁿ) naive)",space:"O(n)"},dry:["fib(5): naive tree repeats fib(3) twice, fib(2) three times — overlap","Top-down: f(5) → f(4)+f(3); f(4) → f(3)+f(2); f(3) cached after first compute","Each subproblem computed ONCE: f(0)=0, f(1)=1, f(2)=1, f(3)=2, f(4)=3, f(5)=5","Bottom-up: table [0,1,1,2,3,5] filled left to right — same numbers, no recursion","Answer: both give 5; the lesson is the STATE + TRANSITION habit"],hints:['Ask: "if I knew the answers for smaller inputs, could I write the answer for this input?" — that question IS the recurrence.',"Memoization = recursion + a map; tabulation = the same table filled in a loop. Choose by comfort: top-down for sparse states, bottom-up for tight code.","A state that only needs O(1) previous values can be reduced to rolling variables (you will see this constantly)."],code:{javascript:`// TOP-DOWN (memoization)
function fibMemo(n) {
  const cache = new Array(n + 1).fill(-1);
  const f = (k) => {
    if (k <= 1) return k;
    if (cache[k] !== -1) return cache[k];
    return (cache[k] = f(k - 1) + f(k - 2));
  };
  return f(n);
}

// BOTTOM-UP (tabulation)
function fibTab(n) {
  if (n <= 1) return n;
  const dp = new Array(n + 1).fill(0);
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) dp[i] = dp[i - 1] + dp[i - 2];
  return dp[n];
}

// The habit: 1) state, 2) transition, 3) base cases, 4) direction.`,python:`# TOP-DOWN (memoization)
from functools import lru_cache

@lru_cache(None)
def fibMemo(n):
    if n <= 1:
        return n
    return fibMemo(n - 1) + fibMemo(n - 2)

# BOTTOM-UP (tabulation)
def fibTab(n):
    if n <= 1:
        return n
    dp = [0] * (n + 1)
    dp[1] = 1
    for i in range(2, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]
    return dp[n]

# Habit: state → transition → base cases → direction.`,java:"",cpp:""}},{id:"dp-02",slug:"climbing-stairs",title:"Climbing Stairs",pattern:"dp",difficulty:"Easy",platform:"LeetCode",url:"https://leetcode.com/problems/climbing-stairs/",extra:[],summary:'You can climb 1 or 2 stairs at a time. How many distinct ways can you reach the top of n stairs? (The classic "first DP" — Fibonacci in disguise.)',asked:"Count the distinct 1/2-step sequences that sum to n.",why:"To reach stair n you came from n-1 (then a 1-step) or n-2 (then a 2-step). So ways(n) = ways(n-1) + ways(n-2) — a Fibonacci recurrence with base ways(1) = 1, ways(2) = 2. Tabulate it in O(n).",clues:["choices at each step","count ways","last move decides","Fibonacci recurrence"],brute:{idea:"Recursion without memo — exponential tree of paths.",time:"O(2ⁿ)",space:"O(n)"},optimal:{idea:"dp[i] = dp[i-1] + dp[i-2]; dp[1] = 1, dp[2] = 2. Fill to n. Two rolling variables give O(1) space.",steps:["State: dp[i] = ways to reach stair i.","Transition: the LAST move was 1-step (from i-1) or 2-step (from i-2) — sum them.","Base: dp[1] = 1, dp[2] = 2.","Fill i = 3..n.","Rolling: a = 1, b = 2; iterate: c = a + b; a = b; b = c."],time:"O(n)",space:"O(1) rolling"},dry:["n = 4: dp[1]=1, dp[2]=2, dp[3]=dp[2]+dp[1]=3, dp[4]=dp[3]+dp[2]=5","Paths: 1111, 112, 121, 211, 22 → 5 ✓","n = 5: dp[5] = 5 + 3 = 8","Answer: 5 (for n = 4)"],hints:["Look only at the LAST move into stair n — what are the possibilities? (1 from n-1, or 2 from n-2)",'The subproblems "ways to n-1" and "ways to n-2" are INDEPENDENT — just add.',"This is Fibonacci: F(n) with different base values. If it looks like fib, it probably is."],code:{javascript:`function climbStairs(n) {
  if (n <= 2) return n;
  let a = 1, b = 2;
  for (let i = 3; i <= n; i++) {
    const c = a + b;
    a = b;
    b = c;
  }
  return b;
}

// Full table version:
function climbStairsTab(n) {
  const dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) dp[i] = dp[i - 1] + dp[i - 2];
  return dp[n];
}`,python:`def climbStairs(n):
    if n <= 2:
        return n
    a, b = 1, 2
    for _ in range(3, n + 1):
        a, b = b, a + b
    return b`,java:"",cpp:""}},{id:"dp-03",slug:"min-cost-climbing-stairs",title:"Min Cost Climbing Stairs",pattern:"dp",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/min-cost-climbing-stairs/",extra:[],summary:"Each stair i has a cost cost[i]. Paying cost[i] lets you climb i+1 or i+2 stairs. You may start at stair 0 OR 1. Find the minimum cost to reach the top (one past the last stair).",asked:"Cheapest sequence of 1/2-steps to step beyond the last stair.",why:'Same Fibonacci-shaped transition, now with WEIGHTS: the cost to land on stair i is cost[i] + min(cost to reach i-1, cost to reach i-2). The "top" is a virtual stair n — you may land exactly on it (that is why the table runs to n+1).',clues:["pay per stair","min cost","start at 0 or 1 free","virtual top"],brute:{idea:"Recursion over all 1/2-step paths with memo (exponential without).",time:"O(2ⁿ) naive",space:"O(n)"},optimal:{idea:"dp[i] = minimum cost to STAND on stair i (dp[0] = 0, dp[1] = 0 — starting is free). dp[i] = cost[i] + min(dp[i-1], dp[i-2]). Answer: min(dp[n-1], dp[n-2]) — either of the last two stairs can jump to the top. (Or add a virtual dp[n] with cost 0.)",steps:["State: dp[i] = min cost to stand on stair i.","Base: dp[0] = 0, dp[1] = 0 (you can start at either for free).","Transition: dp[i] = cost[i] + min(dp[i-1], dp[i-2]).","Answer: min(dp[n-1], dp[n-2]) — both can reach the top with one final jump."],time:"O(n)",space:"O(1) rolling / O(n)"},dry:["cost = [10, 15, 20]","dp[0]=0, dp[1]=0","dp[2] = 20 + min(0, 0) = 20","Answer: min(dp[2], dp[1]) = min(20, 0) = 0 → start at stair 1, jump 2 to the top","cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1] → dp fills: best = 6 (hopping over the 100s)","Answer: 6"],hints:["Standing on a stair costs its cost — but STANDING is where you pay, and the start is free. Set the base cases accordingly.",'The "top" is not a stair you stand on — it is a landing zone one past the end. How do you express that? (take the min of the last two)',"The transition is min, not sum — at each stair you CHOOSE the cheaper previous stair."],code:{javascript:`function minCostClimbingStairs(cost) {
  const n = cost.length;
  let prev2 = 0, prev1 = 0; // dp[i-2], dp[i-1]; dp[0] = dp[1] = 0
  for (let i = 2; i < n; i++) {
    const cur = cost[i] + Math.min(prev1, prev2);
    prev2 = prev1;
    prev1 = cur;
  }
  return Math.min(prev1, prev2);
}`,python:`def minCostClimbingStairs(cost):
    n = len(cost)
    prev2 = prev1 = 0
    for i in range(2, n):
        cur = cost[i] + min(prev1, prev2)
        prev2, prev1 = prev1, cur
    return min(prev1, prev2)`,java:"",cpp:""}},{id:"dp-04",slug:"fibonacci-number",title:"Fibonacci Number",pattern:"dp",difficulty:"Easy",platform:"LeetCode",url:"https://leetcode.com/problems/fibonacci-number/",extra:[],summary:"F(0) = 0, F(1) = 1, F(n) = F(n-1) + F(n-2). Return F(n). (The DP view of Fibonacci: the same recurrence now solved with a table.)",asked:"The nth Fibonacci number in O(n) time, O(1) space.",why:"You already met this as recursion — now as DP: the recurrence IS the transition. Top-down memoization and bottom-up tabulation are both O(n); the two-variable version is the cleanest.",clues:["F(n) = F(n-1) + F(n-2)","base cases 0 and 1","table or rolling"],brute:{idea:"Naive recursion (exponential — the reason DP exists).",time:"O(2ⁿ)",space:"O(n)"},optimal:{idea:"dp[0] = 0, dp[1] = 1; dp[i] = dp[i-1] + dp[i-2]; return dp[n]. Rolling variables: keep only the last two.",steps:["Base: a = 0 (F0), b = 1 (F1).","If n <= 1 return the matching base.","Loop i = 2..n: c = a + b; a = b; b = c.","Return b."],time:"O(n)",space:"O(1)"},dry:["n = 4: (a,b) = (0,1) → (1,1) → (1,2) → (2,3)","Answer: 3 (0, 1, 1, 2, 3)","n = 5 → 5"],hints:["What are F(0) and F(1)? (the only values you don't compute)","Each new value needs only the previous two — why does that permit O(1) space?","Top-down and bottom-up compute the exact same numbers; the table just changes who drives."],code:{javascript:`function fib(n) {
  if (n <= 1) return n;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    const c = a + b;
    a = b;
    b = c;
  }
  return b;
}

// Memoized (top-down):
function fibMemo(n) {
  const cache = new Array(n + 1).fill(-1);
  const f = (k) => {
    if (k <= 1) return k;
    if (cache[k] !== -1) return cache[k];
    return (cache[k] = f(k - 1) + f(k - 2));
  };
  return f(n);
}`,python:`def fib(n):
    a, b = 0, 1
    for _ in range(n):
        a, b = b, a + b
    return a`,java:"",cpp:""}},{id:"dp-05",slug:"knapsack-01",title:"0/1 Knapsack",pattern:"dp",difficulty:"Medium",platform:"GeeksforGeeks",url:"https://www.geeksforgeeks.org/problems/0-1-knapsack-problem-158711/1",extra:[],summary:"Given n items with weights wt[i] and values val[i], and a knapsack of capacity W, choose a subset (each item at most once) maximizing total value within the weight limit.",asked:"The maximum value achievable with total weight ≤ W.",why:"The canonical 0/1 DP: at each item you face a binary choice — skip it, or take it (losing its weight, gaining its value). dp[i][w] = best value using the first i items with capacity w: max(dp[i-1][w], val[i] + dp[i-1][w - wt[i]]).",clues:["subset, each item once","capacity constraint","maximize value","take or skip"],brute:{idea:"Enumerate all 2ⁿ subsets, check weight, track best value.",time:"O(2ⁿ · n)",space:"O(n)"},optimal:{idea:"2D table dp[i][w] (i items considered, capacity w). Skip: dp[i-1][w]. Take (if wt[i-1] ≤ w): val[i-1] + dp[i-1][w - wt[i-1]]. dp[i][w] = max of the two. Answer dp[n][W].",steps:["State: dp[i][w] = max value from items 1..i with capacity w.","Base: dp[0][w] = 0 for all w (no items → no value).","Transition: dp[i][w] = dp[i-1][w]; if wt[i-1] ≤ w: dp[i][w] = max(dp[i][w], val[i-1] + dp[i-1][w - wt[i-1]]).","Fill i = 1..n, w = 0..W.","Answer: dp[n][W]."],time:"O(n·W)",space:"O(n·W) → O(W) with a 1D row (see the next Knapsack entry)"},dry:["wt = [1, 2, 3], val = [6, 10, 12], W = 4 (n = 3)","Table (rows = items 1..3, cols = capacity 0..4):","i=1 (w1=1,v6): [0, 6, 6, 6, 6]","i=2 (w2=2,v10): [0, 6, 10, 10, 16]","i=3 (w3=3,v12): [0, 6, 10, 18, 22]  ← capacity 4: take item3 (12) + best of capacity 1 from items 1-2 (6) = 18; or item1+item2 (16) → max = 18? recheck: w=4: skip → 16; take 3 → 12 + dp[2][1] = 12 + 6 = 18 → 18","Answer: 18 (items 1+3: weight 4, value 18)"],hints:['For item i, what are your two choices? (skip it / take it — "0/1" means each item appears at most once)',"If you TAKE item i, what capacity remains for the previous items? (w - wt[i])",'The "i-1" in both dp[i-1][·] is crucial — using dp[i][·] would allow taking item i twice (that becomes unbounded knapsack).'],code:{javascript:`function knapSack(W, wt, val, n) {
  const dp = Array.from({ length: n + 1 }, () => new Array(W + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    for (let w = 0; w <= W; w++) {
      dp[i][w] = dp[i - 1][w]; // skip item i
      if (wt[i - 1] <= w) {
        dp[i][w] = Math.max(dp[i][w], val[i - 1] + dp[i - 1][w - wt[i - 1]]);
      }
    }
  }
  return dp[n][W];
}`,python:`def knapSack(W, wt, val, n):
    dp = [[0] * (W + 1) for _ in range(n + 1)]
    for i in range(1, n + 1):
        for w in range(W + 1):
            dp[i][w] = dp[i - 1][w]
            if wt[i - 1] <= w:
                dp[i][w] = max(dp[i][w], val[i - 1] + dp[i - 1][w - wt[i - 1]])
    return dp[n][W]`,java:"",cpp:""}},{id:"dp-06",slug:"tabulation-intro",title:"Introduction to Tabulation",pattern:"dp",difficulty:"Easy",platform:null,url:null,extra:[],summary:"Episode 06: from recursion + memo (top-down) to filling a table by hand (bottom-up). When to use which, and how to spot the table's base cases, fill order, and answer cell.",asked:"The skill of converting any memoized recurrence into a bottom-up table.",why:'Tabulation is memoization run in reverse: instead of the recursion chasing subproblems (and the cache filling as a side effect), YOU fill the table in an order where every cell only reads already-computed cells. Same recurrence — but no recursion stack, easier to optimize space, and no "what is the fill order?" guessing if you follow the dependency direction.',clues:["bottom-up","fill order","base row/column","no recursion stack"],brute:{idea:"Top-down memoization (perfectly fine — tabulation is an optimization, not a different algorithm).",time:"same",space:"O(n) stack overhead"},optimal:{idea:"Convert in 4 moves: (1) keep the same dp state and recurrence. (2) Base cases become the first row/column (or first cell) — fill them by hand. (3) Fill order = the recurrence's dependency direction (if dp[i] reads dp[i-1], fill i increasing). (4) The answer is the cell the original call asks for.",steps:["Write the memoized version first (it IS the spec).","Identify which cells never recurse: the base cases → initialize those table slots.",'Determine the fill order from the recurrence (small → big for "reads i-1, i-2"; left → right / top → bottom for grid DPs).',"Replace every f(k) with table[k]; replace the outer call with a loop over k.","Example below: coin change top-down → bottom-up, cell by cell."],time:"same asymptotics, lower constant, O(1) stack",space:"table size (often reducible)"},dry:["coins = [1, 2, 5], amount = 11 (min coins)","Top-down: f(a) = 1 + min(f(a - c) for each coin); base f(0) = 0","Bottom-up: dp[0] = 0; fill a = 1..11: dp[a] = 1 + min of dp[a - c] over valid coins","Table: dp = [0, 1, 1, 2, 2, 1, 2, 2, 3, 3, 2, 3]","Check dp[11] = 1 + min(dp[10], dp[9], dp[6]) = 1 + min(2, 3, 2) = 3","Answer: dp[11] = 3 (5 + 5 + 1)"],hints:["The memoized function's CACHE after one run is exactly the tabulated table — tabulation just builds it deterministically.","The fill order is the recurrence's arrow direction: if dp reads smaller indices, fill increasing; a grid cell reading up/left fills top-left to bottom-right.",'Ask yourself: "which cell is the final answer?" — usually the one matching the original inputs (dp[n], dp[amount], dp[N][M]).'],code:{javascript:`// TOP-DOWN
function coinChangeTopDown(coins, amount) {
  const memo = new Array(amount + 1).fill(-1);
  const f = (a) => {
    if (a === 0) return 0;
    if (a < 0) return Infinity;
    if (memo[a] !== -1) return memo[a];
    let best = Infinity;
    for (const c of coins) best = Math.min(best, 1 + f(a - c));
    return (memo[a] = best);
  };
  const ans = f(amount);
  return ans === Infinity ? -1 : ans;
}

// BOTTOM-UP (tabulation) — same recurrence, no stack
function coinChangeTab(coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0; // base case: row initialization
  for (let a = 1; a <= amount; a++) { // fill order: increasing
    for (const c of coins) {
      if (c <= a && dp[a - c] + 1 < dp[a]) dp[a] = dp[a - c] + 1;
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount]; // answer cell
}`,python:`# TOP-DOWN
def coinChangeTopDown(coins, amount):
    memo = {}
    def f(a):
        if a == 0:
            return 0
        if a < 0:
            return float('inf')
        if a in memo:
            return memo[a]
        best = min(1 + f(a - c) for c in coins)
        memo[a] = best
        return best
    ans = f(amount)
    return -1 if ans == float('inf') else ans

# BOTTOM-UP (tabulation)
def coinChangeTab(coins, amount):
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    for a in range(1, amount + 1):
        for c in coins:
            if c <= a and dp[a - c] + 1 < dp[a]:
                dp[a] = dp[a - c] + 1
    return -1 if dp[amount] == float('inf') else dp[amount]`,java:"",cpp:""}},{id:"dp-07",slug:"knapsack-02",title:"0/1 Knapsack (Space Optimized)",pattern:"dp",difficulty:"Medium",platform:"GeeksforGeeks",url:"https://www.geeksforgeeks.org/problems/0-1-knapsack-problem-158711/1",extra:[],summary:"0/1 Knapsack again (same GFG problem) — this time as the space-optimized 1D version: one row instead of n+1, filled right-to-left so each item is still usable at most once.",asked:"The same maximum value, with O(W) memory instead of O(n·W).",why:'Row i of the table only ever reads row i-1. So one array can roll: dp[w] = max(dp[w], val[i] + dp[w - wt[i]]) — but iterate w from HIGH to LOW. Why? With a low-to-high loop, dp[w - wt[i]] would already include item i from this same pass (item taken twice). Right-to-left keeps dp[w - wt[i]] in its "before item i" state.',clues:["one row","right to left","0/1 = use once","rolling"],brute:{idea:"The full 2D table (correct but O(n·W) memory).",time:"O(n·W)",space:"O(n·W)"},optimal:{idea:"dp[w] = best value with capacity w using the items processed so far. For each item i: for w from W down to wt[i]: dp[w] = max(dp[w], val[i] + dp[w - wt[i]]). Answer dp[W].",steps:["dp = [0] * (W + 1).","For each item (wt_i, val_i):","For w from W DOWN TO wt_i: dp[w] = max(dp[w], val_i + dp[w - wt_i]).",'The descending loop is the whole trick — it enforces "at most once".',"Answer: dp[W]."],time:"O(n·W)",space:"O(W)"},dry:["wt = [1, 2, 3], val = [6, 10, 12], W = 4","item 1 (1, 6): w=4..1: dp = [0, 6, 6, 6, 6]","item 2 (2, 10): w=4..2: dp[4] = max(6, 10 + dp[2]=6) = 16; dp[3] = max(6, 10 + dp[1]=6) = 16; dp[2] = max(6, 10 + 0) = 10 → [0, 6, 10, 16, 16]","item 3 (3, 12): w=4: max(16, 12 + dp[1]=6) = 18; w=3: max(16, 12 + dp[0]) = 16 → [0, 6, 10, 16, 18]","Answer: dp[4] = 18 (same as the 2D version ✓)"],hints:["Why is one row enough? (row i reads only row i-1 — the older rows are never needed again)","If you loop w low-to-high, which dp[w - wt[i]] cell would you accidentally read that already used item i? (the one you just updated this pass)","Descending w guarantees dp[w - wt[i]] is still from the PREVIOUS item set."],code:{javascript:`function knapSack(W, wt, val, n) {
  const dp = new Array(W + 1).fill(0);
  for (let i = 0; i < n; i++) {
    for (let w = W; w >= wt[i]; w--) {
      dp[w] = Math.max(dp[w], val[i] + dp[w - wt[i]]);
    }
  }
  return dp[W];
}`,python:`def knapSack(W, wt, val, n):
    dp = [0] * (W + 1)
    for i in range(n):
        for w in range(W, wt[i] - 1, -1):
            dp[w] = max(dp[w], val[i] + dp[w - wt[i]])
    return dp[W]`,java:"",cpp:""}},{id:"dp-08",slug:"egg-dropping",title:"Egg Dropping",pattern:"dp",difficulty:"Hard",platform:"GeeksforGeeks",url:"https://www.geeksforgeeks.org/problems/egg-puzzle-158711/1",extra:[],summary:"You have e identical eggs and a building of f floors. There is a critical floor F: eggs break when dropped above F, survive at or below F. Find the minimum number of drops (worst case) that GUARANTEES finding F.",asked:"min drops in the worst case, optimal strategy.",why:"The classic min-max DP: at floor x with e eggs, one drop has two outcomes — the egg BREAKS (e-1 eggs, floors below x) or SURVIVES (e eggs, floors above x). You must be ready for the WORSE outcome, so the cost is 1 + max(the two subproblems); then you CHOOSE the floor that minimizes that worst case.",clues:["worst case guarantee","min over floor, max over outcomes","eggs and floors","break or survive"],brute:{idea:"Binary search drops — fails when eggs are scarce (a break mid-way loses too many floors to recover).",time:"O(f log f) strategy but not optimal",space:"O(1)"},optimal:{idea:"dp[e][f] = min worst-case drops with e eggs and f floors. dp[e][f] = 1 + min over x in 1..f of max(dp[e-1][x-1], dp[e][f-x]). Base: dp[1][f] = f (linear scan), dp[e][1] = 1.",steps:["State: dp[e][f].","Base: 1 egg → f drops (linear); 1 floor → 1 drop.","Transition: try dropping at floor x: worst(x) = max(break: dp[e-1][x-1], survive: dp[e][f-x]).","dp[e][f] = 1 + min over x of worst(x).","Answer: dp[e][f]. (A binary-search over x optimizes each row to O(log f) — optional.)"],time:"O(e·f²) naive",space:"O(e·f)"},dry:["e = 2, f = 10","dp[1][f] = f for all f","dp[2][1]=1, dp[2][2]=2, dp[2][3]=2 (drop at 2: break→dp[1][1]=1, survive→dp[2][1]=1 → 1+max=2)","dp[2][4]: best x=2: max(dp[1][1], dp[2][2]) = max(1,2)=2 → 3; x=3: max(dp[1][2], dp[2][1]) = max(2,1)=2 → 3 → dp[2][4] = 3","Continuing: dp[2][10] = 4 (strategy: 4, 7, 9, 10)","Answer: 4"],hints:["After a drop at floor x, what are the TWO worlds? (egg broke → go down with one fewer egg; egg survived → go up with all eggs)","You must survive the WORST world — so max of the two outcomes; but you CHOOSE x — so min over x.","With 1 egg you cannot risk any break — that is why dp[1][f] = f (the base case that anchors everything)."],code:{javascript:`function eggDrop(eggs, floors) {
  const dp = Array.from({ length: eggs + 1 }, () => new Array(floors + 1).fill(0));
  for (let e = 1; e <= eggs; e++) dp[e][1] = 1;
  for (let f = 1; f <= floors; f++) dp[1][f] = f;
  for (let e = 2; e <= eggs; e++) {
    for (let f = 2; f <= floors; f++) {
      dp[e][f] = Infinity;
      for (let x = 1; x <= f; x++) {
        const worst = Math.max(dp[e - 1][x - 1], dp[e][f - x]);
        dp[e][f] = Math.min(dp[e][f], 1 + worst);
      }
    }
  }
  return dp[eggs][floors];
}`,python:`def eggDrop(eggs, floors):
    dp = [[0] * (floors + 1) for _ in range(eggs + 1)]
    for e in range(1, eggs + 1):
        dp[e][1] = 1
    for f in range(1, floors + 1):
        dp[1][f] = f
    for e in range(2, eggs + 1):
        for f in range(2, floors + 1):
            dp[e][f] = float('inf')
            for x in range(1, f + 1):
                worst = max(dp[e - 1][x - 1], dp[e][f - x])
                dp[e][f] = min(dp[e][f], 1 + worst)
    return dp[eggs][floors]`,java:"",cpp:""}},{id:"dp-09",slug:"matrix-chain-multiplication",title:"Matrix Chain Multiplication",pattern:"dp",difficulty:"Hard",platform:"LeetCode",url:"https://leetcode.com/problems/minimum-cost-to-cut-a-stick/",extra:[],summary:"Multiply a chain of matrices (i × j) in the order that minimizes scalar multiplications. (The linked problem — Minimum Cost to Cut a Stick — is the identical DP in a cutting costume: choose the first/any split, pay the interval cost, recurse on the two halves.)",asked:"The minimum total scalar multiplications (or minimum cut cost — same recurrence).",why:"Matrix multiplication is associative but NOT commutative in cost: ((A·B)·C) can be wildly cheaper than (A·(B·C)). A parenthesization is a tree of splits: pick a split point k, pay the interval cost, and multiply the two halves. dp[i][j] = min over k of (dp[i][k] + dp[k+1][j] + cost of the resulting multiplication). Interval DP: fill by increasing interval length.",clues:["parenthesization","split point k","interval DP","length-ordered fill"],brute:{idea:"Try all (2n-3)!! parenthesizations.",time:"exponential",space:"O(n)"},optimal:{idea:"dp[i][j] = min cost to compute the product of matrices i..j. dp[i][i] = 0. For length L = 2..n: for i, j = i+L-1: dp[i][j] = min over k in i..j-1 of dp[i][k] + dp[k+1][j] + dims[i-1]·dims[k]·dims[j]. The stick-cutting twin: dp[i][j] = min over cut k of dp[i][k] + dp[k][j] + (arr[j] - arr[i]).",steps:["State: dp over INTERVALS [i, j].","Base: dp[i][i] = 0 (single matrix / no cut).","Transition: choose the split k; cost = left + right + the cost of merging the two results.","Fill order: by interval LENGTH (2, 3, ..., n) — shorter intervals are always ready first.","Answer: dp[1][n] (or dp[0][n-1] for the stick)."],time:"O(n³)",space:"O(n²)"},dry:["dims = [3, 1, 10, 2, 2] → A(3×1), B(1×10), C(10×2), D(2×2)","Length 2: dp[1][2] = 3·1·10 = 30; dp[2][3] = 1·10·2 = 20; dp[3][4] = 10·2·2 = 40","Length 3: dp[1][3]: k=1: 20 + 3·1·2 = 26; k=2: 30 + 3·10·2 = 90 → 26","Length 3: dp[2][4]: k=2: 40 + 1·10·2 = 60; k=3: 20 + 1·2·2 = 24 → 24","Length 4: dp[1][4]: k=1: 24 + 3·1·2 = 30; k=2: 26 + 3·10·2 = 86; k=3: 30 + 3·2·2 = 42 → 30","Answer: 30 — best order: (A(BC))D"],hints:['The choice is always "where to split" — after the split, the two halves are INDEPENDENT subproblems (that is what makes it DP).',"Why fill by interval length? (dp[i][j] needs dp[i][k] and dp[k+1][j] — strictly shorter intervals — so length-ordered fill guarantees they exist).","The merge cost: multiplying (a×b)·(b×c) costs a·b·c — track the dimension array so you can price any split."],code:{javascript:`// MCM: dims[i-1] x dims[i] is the i-th matrix
function matrixChain(dims) {
  const n = dims.length - 1;
  const dp = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));
  for (let len = 2; len <= n; len++) {
    for (let i = 1; i + len - 1 <= n; i++) {
      const j = i + len - 1;
      dp[i][j] = Infinity;
      for (let k = i; k < j; k++) {
        const cost = dp[i][k] + dp[k + 1][j] + dims[i - 1] * dims[k] * dims[j];
        dp[i][j] = Math.min(dp[i][j], cost);
      }
    }
  }
  return dp[1][n];
}

// The linked problem — Minimum Cost to Cut a Stick (same interval DP):
function minCostCut(cost, cuts) {
  const arr = [0, ...cuts.sort((a, b) => a - b), cost];
  const n = arr.length;
  const dp = Array.from({ length: n }, () => new Array(n).fill(0));
  for (let len = 2; len < n; len++) {
    for (let i = 0; i + len < n; i++) {
      const j = i + len;
      dp[i][j] = Infinity;
      for (let k = i + 1; k < j; k++) {
        dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k][j] + arr[j] - arr[i]);
      }
    }
  }
  return dp[0][n - 1];
}`,python:`# MCM: dims[i-1] x dims[i] is the i-th matrix
def matrixChain(dims):
    n = len(dims) - 1
    dp = [[0] * (n + 1) for _ in range(n + 1)]
    for length in range(2, n + 1):
        for i in range(1, n - length + 2):
            j = i + length - 1
            dp[i][j] = float('inf')
            for k in range(i, j):
                cost = dp[i][k] + dp[k + 1][j] + dims[i - 1] * dims[k] * dims[j]
                dp[i][j] = min(dp[i][j], cost)
    return dp[1][n]

# Minimum Cost to Cut a Stick (same interval DP)
def minCostCut(cost, cuts):
    arr = [0] + sorted(cuts) + [cost]
    n = len(arr)
    dp = [[0] * n for _ in range(n)]
    for length in range(2, n):
        for i in range(n - length):
            j = i + length
            dp[i][j] = float('inf')
            for k in range(i + 1, j):
                dp[i][j] = min(dp[i][j], dp[i][k] + dp[k][j] + arr[j] - arr[i])
    return dp[0][n - 1]`,java:"",cpp:""}},{id:"dp-10",slug:"longest-common-subsequence",title:"Longest Common Subsequence",pattern:"dp",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/longest-common-subsequence/",extra:[],summary:"Given two strings, return the length of their longest common subsequence (a subsequence keeps order, not necessarily contiguous).",asked:"The max length of a sequence appearing in both strings in order.",why:"The classic 2D string DP: compare the ENDS. If text1[i-1] === text2[j-1], the characters match and join a common subsequence: dp[i][j] = dp[i-1][j-1] + 1. If not, the best skips one of them: dp[i][j] = max(dp[i-1][j], dp[i][j-1]).",clues:["two sequences","order not contiguity","compare the ends","2D table"],brute:{idea:"Enumerate all subsequences of the shorter string (2ⁿ) and test membership in the other.",time:"O(2ⁿ · m)",space:"O(n)"},optimal:{idea:"dp[i][j] = LCS length of text1[0..i) and text2[0..j). If chars match: dp[i-1][j-1] + 1. Else max(dp[i-1][j], dp[i][j-1]). Base: any dp[0][j] / dp[i][0] = 0. Answer dp[n][m].",steps:["State: dp[i][j] over prefixes of both strings.","Base: empty prefix → 0.","Match: diagonal + 1.","Mismatch: best of skip-in-text1 (up) or skip-in-text2 (left).","Answer: bottom-right cell."],time:"O(n·m)",space:"O(n·m) → O(min(n,m)) with two rows"},dry:['text1 = "abcde", text2 = "ace"',"Table (rows a..e, cols a,c,e):","row a: [0,1,1,1]; row b: [0,1,1,1]; row c: [0,1,2,2]; row d: [0,1,2,2]; row e: [0,1,2,3]",'Answer: 3 ("ace")'],hints:["Focus on the LAST characters of the two prefixes — what are the cases? (match / no match)",'A match "earns" a diagonal step + 1; a mismatch throws away one character (up or left — take the better).',"The answer cell is always the full-prefix corner dp[n][m]."],code:{javascript:`function longestCommonSubsequence(text1, text2) {
  const n = text1.length, m = text2.length;
  const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[n][m];
}`,python:`def longestCommonSubsequence(text1, text2):
    n, m = len(text1), len(text2)
    dp = [[0] * (m + 1) for _ in range(n + 1)]
    for i in range(1, n + 1):
        for j in range(1, m + 1):
            if text1[i - 1] == text2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
    return dp[n][m]`,java:"",cpp:""}},{id:"dp-11",slug:"lis-tabulation",title:"LIS — Tabulation",pattern:"dp",difficulty:"Medium",platform:null,url:null,extra:[],summary:"Episode 11: Longest Increasing Subsequence with the tabulation lens — dp[i] = length of the longest increasing subsequence ENDING at index i, filled left to right; plus the O(n log n) patience-sorted optimization.",asked:"The length of the longest strictly increasing subsequence, table-first.",why:'Two flavors of LIS state: "LIS ending at i" (dp[i] = 1 + max of dp[j] for j < i with nums[j] < nums[i]) — tabulates in O(n²) — and the clever O(n log n) version that maintains the smallest possible tail for each length (patience sorting: binary search the first tail ≥ x, replace or append). This episode is the tabulation of the first, with the second as the follow-up.',clues:["increasing subsequence","ending at i","O(n²) table","tails + binary search"],brute:{idea:"Recursion over subsequences (exponential).",time:"O(2ⁿ)",space:"O(n)"},optimal:{idea:"dp[i] = 1 + max(dp[j]) over all j < i with nums[j] < nums[i] (else 1). Answer = max over all dp[i]. O(n²). Optimization: tails[L] = smallest tail value of any increasing subsequence of length L+1; for each x, binary-search the first tails[k] >= x: replace it (or append if x is the largest) → O(n log n).",steps:["State: dp[i] = LIS length ending at i.","Base: dp[i] = 1 for all i (a single element).","Transition: for each j < i: if nums[j] < nums[i]: dp[i] = max(dp[i], dp[j] + 1).","Answer: max(dp).","O(n log n): keep tails[]; for x in nums: pos = lower_bound(tails, x); tails[pos] = x (extend if pos === tails.length)."],time:"O(n²) tabulation / O(n log n) optimized",space:"O(n)"},dry:["nums = [10, 9, 2, 5, 3, 7, 101, 18]","dp: i0(10)=1; i1(9)=1; i2(2)=1; i3(5)=2 (after 2); i4(3)=2 (after 2); i5(7)=3 (2,5? → 2,3,7 or 2,5,7); i6(101)=4; i7(18)=4","max = 4 → [2, 3, 7, 101] or [2, 3, 7, 18]","Answer: 4","tails walk: 10 → [10]; 9 → [9]; 2 → [2]; 5 → [2,5]; 3 → [2,3]; 7 → [2,3,7]; 101 → [2,3,7,101]; 18 → [2,3,7,18] → length 4 ✓"],hints:['"Ending at i" makes the transition local: to extend a subsequence to i, its previous element must be some earlier j with a smaller value.',"The answer is NOT dp[n-1] — it is the MAX over all dp[i] (the LIS can end anywhere).","In the tails array, replacing the first tail ≥ x never DESTROYS a valid subsequence — it just makes future extensions easier (smaller tail = easier to beat)."],code:{javascript:`// O(n^2) tabulation
function lengthOfLIS(nums) {
  const n = nums.length;
  if (n === 0) return 0;
  const dp = new Array(n).fill(1);
  let best = 1;
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) dp[i] = Math.max(dp[i], dp[j] + 1);
    }
    best = Math.max(best, dp[i]);
  }
  return best;
}

// O(n log n): patience sorting (tails)
function lengthOfLISFast(nums) {
  const tails = [];
  for (const x of nums) {
    let lo = 0, hi = tails.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (tails[mid] < x) lo = mid + 1;
      else hi = mid;
    }
    tails[lo] = x;
  }
  return tails.length;
}`,python:`from bisect import bisect_left

# O(n^2) tabulation
def lengthOfLIS(nums):
    n = len(nums)
    if n == 0:
        return 0
    dp = [1] * n
    best = 1
    for i in range(1, n):
        for j in range(i):
            if nums[j] < nums[i]:
                dp[i] = max(dp[i], dp[j] + 1)
        best = max(best, dp[i])
    return best

# O(n log n): patience sorting (tails)
def lengthOfLISFast(nums):
    tails = []
    for x in nums:
        lo, hi = 0, len(tails)
        while lo < hi:
            mid = (lo + hi) // 2
            if tails[mid] < x:
                lo = mid + 1
            else:
                hi = mid
        tails[lo] = x
    return len(tails)`,java:"",cpp:""}},{id:"dp-12",slug:"rod-cutting",title:"Rod Cutting",pattern:"dp",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/tiling-a-rectangle-with-the-fewest-squares/",extra:[],summary:'A rod of length n and a price list: price[i] for a piece of length i+1. Cut the rod (or not) to maximize the selling price. (The linked tiling problem is the same "split the length, recurse on the parts" structure.)',asked:"The maximum total price from any cut pattern.",why:"Consider the FIRST piece you cut off: if it has length i, you earn price[i] and face the same problem on the remaining length n - i. dp[len] = max over i in 1..len of (price[i-1] + dp[len - i]). It is unbounded knapsack in disguise (pieces of each length are unlimited).",clues:["cut a length","price per length","first-piece choice","unbounded pieces"],brute:{idea:"Recursion over all cut patterns (exponential without memo).",time:"O(2ⁿ)",space:"O(n)"},optimal:{idea:"dp[0] = 0; for len = 1..n: dp[len] = max over i in 1..len of (price[i-1] + dp[len - i]). Answer dp[n].",steps:["State: dp[len] = best price for a rod of length len.","Base: dp[0] = 0.","Transition: choose the first piece length i (1..len): earn price[i-1], add the best for the rest.","Fill len increasing; answer dp[n].","Equivalently: unbounded knapsack over item types (length, price)."],time:"O(n²)",space:"O(n)"},dry:["price = [1, 5, 8, 9, 10, 17, 17, 20], n = 8","dp[1] = 1; dp[2] = 5; dp[3] = 8","dp[4]: max(9, 1+8, 5+5, 8+1) = 10 (5 + 5)","dp[5]: max(10, 1+10, 5+8, 8+5, 9+1) = 13 (5 + 8)","dp[6]: max(17, 8+8, 5+10, ...) = 17 (17, or 8+9, or 10+5+...)","dp[7]: max(17, 5+13, 8+10, ...) = 18 (5 + 13 or 8 + 10 or 17 + 1)","dp[8]: max(20, 5+17, 8+13, 9+10, ...) = 22 (5 + 17 → pieces of length 2 and 6)","Answer: 22"],hints:['Look at just the FIRST cut: it splits the problem into "price of this piece" + "the same problem on the rest".',"Pieces are UNLIMITED (any number of length i) — that is why dp[len - i] may itself use length i again.",'This is unbounded knapsack: "item types" = lengths, "value" = price, "weight" = length, "capacity" = n.'],code:{javascript:`function cutRod(prices, n) {
  const dp = new Array(n + 1).fill(0);
  for (let len = 1; len <= n; len++) {
    for (let i = 1; i <= len; i++) {
      dp[len] = Math.max(dp[len], prices[i - 1] + dp[len - i]);
    }
  }
  return dp[n];
}

// Unbounded-knapsack framing (same answer):
function cutRodKnapsack(prices, n) {
  const dp = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {        // item type = length i+1
    for (let cap = i + 1; cap <= n; cap++) { // low-to-high: reuse allowed
      dp[cap] = Math.max(dp[cap], dp[cap - (i + 1)] + prices[i]);
    }
  }
  return dp[n];
}`,python:`def cutRod(prices, n):
    dp = [0] * (n + 1)
    for length in range(1, n + 1):
        for i in range(1, length + 1):
            dp[length] = max(dp[length], prices[i - 1] + dp[length - i])
    return dp[n]`,java:"",cpp:""}},{id:"dp-13",slug:"coin-change",title:"Coin Change 2",pattern:"dp",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/coin-change/",extra:[],summary:'Given coin denominations and an amount, find the fewest number of coins that make up the amount (or -1 if impossible). The "2" in the title refers to the counting variant (number of combinations) — both share the same DP skeleton; the main solution below matches the linked problem (minimum coins).',asked:"Minimum coin count for the exact amount.",why:"With a last coin c, the amount becomes amount - c: minCoins[a] = 1 + min over coins c ≤ a of minCoins[a - c]. Base minCoins[0] = 0. Fill the table increasing. (Counting variant: count[a] = sum of count[a - c] — same loop, sum instead of min, coins on the outside to avoid order-duplicates.)",clues:["exact amount","min coins","last coin choice","counting twin"],brute:{idea:"Recursion trying every first coin (exponential without memo).",time:"O(k^amount) naive",space:"O(amount)"},optimal:{idea:"dp[a] = min coins for amount a; dp[0] = 0; dp[a] = min over c ≤ a of (dp[a - c] + 1). If dp[amount] is still ∞ → -1. Counting variant: for each coin c (outer loop): for a = c..amount: count[a] += count[a - c].",steps:["State: dp[a] over amounts 0..amount.","Base: dp[0] = 0 (zero coins make zero).","Transition: last coin c → dp[a] = min(dp[a], dp[a - c] + 1).","Fill a = 1..amount.","Answer: dp[amount] (∞ → -1).","Counting: coins outer, amounts inner; count[a] += count[a - c]."],time:"O(amount · #coins)",space:"O(amount)"},dry:["coins = [1, 2, 5], amount = 11","dp[0]=0; dp[1]=1; dp[2]=1; dp[3]=2; dp[4]=2; dp[5]=1; dp[6]=2; dp[7]=2; dp[8]=3; dp[9]=3; dp[10]=2; dp[11]=3","Answer: 3 (5 + 5 + 1)","coins = [2], amount = 3 → dp[3] stays ∞ → Answer: -1","Counting variant check: [1,2,5], amount = 5 → combinations {5},{2,2,1},{2,1,1,1},{1×5} → 4 ✓"],hints:["Think in terms of the LAST coin used — removing it leaves a smaller, identical subproblem.",'dp[0] = 0 is what makes "exactly" work; without it, every sum is off by one.',"In the counting variant, why iterate COINS on the outside? (fixing the coin set before the amount makes each combination count once, in coin-type order — order matters for counting, not for min.)"],code:{javascript:`// Minimum coins (linked problem)
function coinChange(coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let a = 1; a <= amount; a++) {
    for (const c of coins) {
      if (c <= a && dp[a - c] + 1 < dp[a]) dp[a] = dp[a - c] + 1;
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
}

// Counting variant (number of combinations — the "Coin Change 2" idea)
function change(coins, amount) {
  const count = new Array(amount + 1).fill(0);
  count[0] = 1;
  for (const c of coins) {
    for (let a = c; a <= amount; a++) count[a] += count[a - c];
  }
  return count[amount];
}`,python:`# Minimum coins (linked problem)
def coinChange(coins, amount):
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    for a in range(1, amount + 1):
        for c in coins:
            if c <= a and dp[a - c] + 1 < dp[a]:
                dp[a] = dp[a - c] + 1
    return -1 if dp[amount] == float('inf') else dp[amount]

# Counting variant (number of combinations)
def change(coins, amount):
    count = [0] * (amount + 1)
    count[0] = 1
    for c in coins:
        for a in range(c, amount + 1):
            count[a] += count[a - c]
    return count[amount]`,java:"",cpp:""}},{id:"dp-14",slug:"stock-i",title:"Best Time to Buy and Sell Stock I",pattern:"dp",difficulty:"Easy",platform:"LeetCode",url:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",extra:[],summary:"One transaction only (buy then sell, at most one pair). Find the maximum profit from a single buy/sell pair, or 0 if no profit is possible.",asked:"Max (sell price - buy price) with sell after buy; 0 if the best is to do nothing.",why:"At day i, if you SELL today, your profit is prices[i] minus the cheapest buy BEFORE today. So one pass: track minSoFar and best = max(best, prices[i] - minSoFar). DP view: hold[i] = best value while holding a stock after day i; cash[i] = best value holding nothing — two states, one transition each.",clues:["one buy, one sell","sell after buy","min so far","hold/cash states"],brute:{idea:"Check every buy/sell pair (i < j).",time:"O(n²)",space:"O(1)"},optimal:{idea:"One pass: minSoFar = min(minSoFar, p); best = max(best, p - minSoFar). DP form: hold = max(hold, -p) [buy today or keep holding]; cash = max(cash, hold_prev + p) [sell today or wait]; answer cash.",steps:["minSoFar = ∞, best = 0.","For each price p: minSoFar = min(minSoFar, p); best = max(best, p - minSoFar).","Return best (0 = do nothing).","DP twin: two states (hold/cash) updated left to right — the seed of the whole stock series."],time:"O(n)",space:"O(1)"},dry:["prices = [7, 1, 5, 3, 6, 4]","p=7: min 7, best 0; p=1: min 1, best 0; p=5: min 1, best 4; p=3: best 4; p=6: best 5; p=4: best 5","Answer: 5 (buy 1, sell 6)","prices = [7, 6, 4, 3, 1] → best stays 0 → Answer: 0"],hints:["If you sell on day i, what matters about all earlier days? (the cheapest one)","You cannot sell before you buy — that is why the min is tracked BEFORE evaluating today's sell.",'The two-state DP (hold/cash) generalizes to "at most k transactions" — remember it.'],code:{javascript:`function maxProfit(prices) {
  let minSoFar = Infinity, best = 0;
  for (const p of prices) {
    minSoFar = Math.min(minSoFar, p);
    best = Math.max(best, p - minSoFar);
  }
  return best;
}

// Two-state DP (hold / cash):
function maxProfitDP(prices) {
  let hold = -Infinity, cash = 0;
  for (const p of prices) {
    const prevHold = hold;
    hold = Math.max(hold, -p);       // buy today (or keep holding)
    cash = Math.max(cash, prevHold + p); // sell today (or wait)
  }
  return cash;
}`,python:`def maxProfit(prices):
    min_so_far = float('inf')
    best = 0
    for p in prices:
        min_so_far = min(min_so_far, p)
        best = max(best, p - min_so_far)
    return best`,java:"",cpp:""}},{id:"dp-15",slug:"stock-ii",title:"Best Time to Buy and Sell Stock II",pattern:"dp",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/",extra:[],summary:"Unlimited transactions (but you must sell before buying again — no overlapping). Maximize total profit.",asked:"The sum of profits over any number of buy/sell pairs.",why:"With unlimited pairs, you should NEVER skip an upward move: capture every rise. That is the greedy insight — sum all positive day-to-day differences. The DP says the same thing: hold/cash states, but now cash can feed the NEXT buy (unlimited rounds), so hold = max(hold, cash - p).",clues:["unlimited transactions","capture every rise","sum positive diffs","cash → next hold"],brute:{idea:"Enumerate transaction subsets (exponential).",time:"O(2ⁿ)",space:"O(1)"},optimal:{idea:'Greedy: profit = sum over i of max(0, prices[i] - prices[i-1]). DP: hold = max(hold, cash - p); cash = max(cash, hold_prev + p) — the only change from Stock I is that the buy step reads CASH (a completed transaction), not just "nothing".',steps:["Each rise p[i] - p[i-1] > 0 can be captured as its own buy/sell pair.","Sum the positive differences.","DP twin: hold/cash with unlimited transitions between them.","Answer: total captured (greedy) or cash (DP)."],time:"O(n)",space:"O(1)"},dry:["prices = [7, 1, 5, 3, 6, 4]","diffs: -6, +4, -2, +3, -2 → positives 4 + 3 = 7","Pairs: buy 1 sell 5 (4), buy 3 sell 6 (3)","Answer: 7","prices = [1, 2, 3, 4, 5] → 1+1+1+1 = 4 (buy 1, sell 5 — same result, different framing)"],hints:["Any rise A→B can be decomposed into daily rises — does summing the daily positives ever OVERCOUNT? (no: buying at each dip and selling at each peak is exactly the decomposition)","In the DP, which state does a NEW buy come from? (cash — you are only allowed to buy after selling).",'Stock I + "unlimited rounds" = Stock II: change one input to the transition.'],code:{javascript:`function maxProfit(prices) {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) profit += prices[i] - prices[i - 1];
  }
  return profit;
}

// Two-state DP, unlimited rounds:
function maxProfitDP(prices) {
  let hold = -Infinity, cash = 0;
  for (const p of prices) {
    const prevHold = hold;
    hold = Math.max(hold, cash - p);  // buy using cash from any finished transaction
    cash = Math.max(cash, prevHold + p);
  }
  return cash;
}`,python:`def maxProfit(prices):
    profit = 0
    for i in range(1, len(prices)):
        if prices[i] > prices[i - 1]:
            profit += prices[i] - prices[i - 1]
    return profit`,java:"",cpp:""}},{id:"dp-16",slug:"stock-iii",title:"Best Time to Buy and Sell Stock III",pattern:"dp",difficulty:"Hard",platform:"LeetCode",url:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/",extra:[],summary:"At most TWO transactions (four actions: buy1, sell1, buy2, sell2 in order). Maximize profit.",asked:"Best profit with ≤ 2 buy/sell pairs.",why:`The state machine gets a counter: track the best value after each of the four actions. buy1 = max(buy1, -p); sell1 = max(sell1, buy1_prev + p); buy2 = max(buy2, sell1_prev - p); sell2 = max(sell2, buy2_prev + p). Each day, update all four (using the PREVIOUS day's values). The answer is sell2 — "at most 2" is automatic, since states can stay at -∞/0 (do nothing).`,clues:["two transactions","state machine","four actions","sequential constraints"],brute:{idea:"Brute-force all pairs of transactions: O(n²) (buy1, sell1, buy2, sell2 positions).",time:"O(n²)",space:"O(n)"},optimal:{idea:"Four scalar states updated per day (buy1 ≤ sell1 ≤ buy2 ≤ sell2 enforced by the transition order). Answer: sell2.",steps:["buy1 = -∞, sell1 = 0, buy2 = -∞, sell2 = 0.","For each price p (using previous values):","buy1 = max(buy1, -p).","sell1 = max(sell1, buy1 + p) [with buy1 from BEFORE this day].","buy2 = max(buy2, sell1 - p) [sell1 from before].","sell2 = max(sell2, buy2 + p) [buy2 from before].","Answer: sell2."],time:"O(n)",space:"O(1)"},dry:["prices = [3, 3, 5, 0, 0, 3, 1, 4]","Day 1 (3): buy1 = -3; sell1 = 0; buy2 = -∞; sell2 = 0","Day 2 (3): buy1 = -3; sell1 = 0; buy2 = 0 - 3 = -3; sell2 = 0","Day 3 (5): sell1 = -3 + 5 = 2; buy2 = max(-3, 0 - 5) = -3; sell2 = -3 + 5 = 2","Day 4 (0): sell1 = 2; buy2 = max(-3, 2 - 0) = 2; sell2 = max(2, -3 + 0) = 2","Day 5 (0): no change (buy2 = 2, sell2 = 2)","Day 6 (3): sell2 = max(2, 2 + 3) = 5","Day 7 (1): sell2 stays 5","Day 8 (4): sell2 = max(5, 2 + 4) = 6","Answer: 6 — two transactions: buy 0 sell 3 (+3), buy 1 sell 4 (+3)"],hints:["Each transaction is two states (holding / not-holding) — two transactions = four states in a line: buy1 → sell1 → buy2 → sell2.","Why must updates use the PREVIOUS day's values? (buy1 and sell1 on the same day with the new buy1 would be double-counting the same price).",'sell1 seeds buy2 — the "at most 2" ordering is enforced by the CHAIN, not by extra logic.'],code:{javascript:`function maxProfit(prices) {
  let buy1 = -Infinity, sell1 = 0, buy2 = -Infinity, sell2 = 0;
  for (const p of prices) {
    const prevBuy1 = buy1, prevSell1 = sell1, prevBuy2 = buy2;
    buy1 = Math.max(buy1, -p);
    sell1 = Math.max(sell1, prevBuy1 + p);
    buy2 = Math.max(buy2, prevSell1 - p);
    sell2 = Math.max(sell2, prevBuy2 + p);
  }
  return sell2;
}`,python:`def maxProfit(prices):
    buy1 = sell1 = buy2 = sell2 = None
    buy1 = float('-inf')
    buy2 = float('-inf')
    sell1 = 0
    sell2 = 0
    for p in prices:
        prev_buy1, prev_sell1, prev_buy2 = buy1, sell1, buy2
        buy1 = max(buy1, -p)
        sell1 = max(sell1, prev_buy1 + p)
        buy2 = max(buy2, prev_sell1 - p)
        sell2 = max(sell2, prev_buy2 + p)
    return sell2`,java:"",cpp:""}},{id:"dp-17",slug:"stock-iv",title:"Best Time to Buy and Sell Stock IV",pattern:"dp",difficulty:"Hard",platform:"LeetCode",url:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/",extra:[],summary:"At most k transactions. Maximize profit. (Generalizes I/II/III; collapses to the unlimited case when k is large enough.)",asked:"Best profit with at most k buy/sell pairs.",why:"The state machine scales: 2k states (buy_t, sell_t for t = 1..k), each chain into the next: buy_t = max(buy_t, sell_{t-1} - p); sell_t = max(sell_t, buy_t - 1 + p). If k ≥ n/2, unlimited transactions are possible → fall back to Stock II (sum positive diffs) and save the O(kn) loop.",clues:["k transactions","2k-state chain","collapse when k is big","general pattern"],brute:{idea:"DP over (day, transactions) with explicit action choices — O(k·n) is already near-optimal.",time:"O(k·n)",space:"O(k·n)"},optimal:{idea:"If k >= n/2: Stock II greedy. Else: arrays buy[t], sell[t] (t = 1..k), updated per day with previous-day values; answer sell[k]. O(k·n) time, O(k) space.",steps:["If 2k >= n: return sum of positive diffs (unlimited case).","buy[t] = -∞, sell[t] = 0 for all t.","For each price p: for t = 1..k (using previous values):","buy[t] = max(buy[t], (t === 1 ? 0 : sell[t-1]) - p).","sell[t] = max(sell[t], buy[t] + p) [previous buy[t]].","Answer: sell[k]."],time:"O(k·n)",space:"O(k)"},dry:["prices = [2, 4, 1], k = 1 → best pair: buy 2 sell 4 → Answer: 2","prices = [3, 2, 6, 5, 0, 3], k = 2 → pairs: (2→6 = 4) + (0→3 = 3) → Answer: 7","prices = [1, 2, 3, 4, 5], k = 2 → n/2 = 2 → k >= n/2 → unlimited: 4 → Answer: 4","k = 2 covers Stock III exactly; k = 1 covers Stock I — one algorithm, three problems."],hints:["The t-th buy can only be funded by the t-th-1 sell — the chain is the ordering constraint, no extra logic needed.","When k ≥ n/2, even alternating every day is feasible — the problem IS Stock II. Detect it and avoid the k loop.","t loops on the OUTSIDE per day (or inside — the key is using previous-day values so the same price is not both a sell and a buy)."],code:{javascript:`function maxProfit(k, prices) {
  const n = prices.length;
  if (n === 0) return 0;
  if (k >= n / 2) {
    let profit = 0;
    for (let i = 1; i < n; i++) {
      if (prices[i] > prices[i - 1]) profit += prices[i] - prices[i - 1];
    }
    return profit;
  }
  const buy = new Array(k + 1).fill(-Infinity);
  const sell = new Array(k + 1).fill(0);
  for (const p of prices) {
    const prevBuy = [...buy], prevSell = [...sell];
    for (let t = 1; t <= k; t++) {
      buy[t] = Math.max(buy[t], (t === 1 ? 0 : prevSell[t - 1]) - p);
      sell[t] = Math.max(sell[t], prevBuy[t] + p);
    }
  }
  return sell[k];
}`,python:`def maxProfit(k, prices):
    n = len(prices)
    if n == 0:
        return 0
    if k >= n // 2:
        return sum(prices[i] - prices[i - 1] for i in range(1, n) if prices[i] > prices[i - 1])
    buy = [float('-inf')] * (k + 1)
    sell = [0] * (k + 1)
    for p in prices:
        prev_buy, prev_sell = buy[:], sell[:]
        for t in range(1, k + 1):
            buy[t] = max(buy[t], (0 if t == 1 else prev_sell[t - 1]) - p)
            sell[t] = max(sell[t], prev_buy[t] + p)
    return sell[k]`,java:"",cpp:""}},{id:"dp-18",slug:"longest-increasing-subsequence",title:"Longest Increasing Subsequence",pattern:"dp",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/longest-increasing-subsequence/",extra:[],summary:"Given an integer array, return the length of the longest strictly increasing subsequence.",asked:'The LIS length — the DP workhorse of "sequence with an ordering constraint".',why:"dp[i] = LIS length ending at i: extend any earlier smaller element (dp[j] + 1 for j < i, nums[j] < nums[i]). O(n²). The famous O(n log n) upgrade maintains tails[length] = smallest possible tail, using binary search per element. (You met its tabulation in the Ep11 entry — this is the standard problem page.)",clues:["strictly increasing","subsequence","O(n²) DP","O(n log n) tails"],brute:{idea:"Recursion over subsets (exponential).",time:"O(2ⁿ)",space:"O(n)"},optimal:{idea:"O(n²): dp[i] = 1 + max(dp[j]) over j < i, nums[j] < nums[i]; answer max(dp). O(n log n): tails[] via lower_bound replacement.",steps:["dp[i] = 1 initially; for j < i: if nums[j] < nums[i]: dp[i] = max(dp[i], dp[j] + 1).","Answer: max over dp.","Fast: tails = []; for x: pos = first index with tails[pos] >= x; tails[pos] = x (append if none).","Answer: tails.length."],time:"O(n²) / O(n log n)",space:"O(n)"},dry:["nums = [10, 9, 2, 5, 3, 7, 101, 18] → dp = [1,1,1,2,2,3,4,4] → max 4","Example LIS: [2, 3, 7, 101] or [2, 3, 7, 18]","nums = [0, 1, 0, 3, 2, 3] → dp = [1,2,1,3,3,4] → Answer: 4 ([0,1,2,3])","tails: 0→[0], 1→[0,1], 0→[0,1], 3→[0,1,3], 2→[0,1,2], 3→[0,1,2,3] → 4 ✓"],hints:['"Ending at i" makes each dp[i] depend only on EARLIER, SMALLER elements — the ordering constraint lives in the j-loop condition.',"The answer is the max over all dp[i], not the last cell.","tails[] is not a subsequence — it tracks the BEST (smallest) tail for each length, which is what lets future elements extend."],code:{javascript:`function lengthOfLIS(nums) {
  const n = nums.length;
  if (n === 0) return 0;
  const dp = new Array(n).fill(1);
  let best = 1;
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) dp[i] = Math.max(dp[i], dp[j] + 1);
    }
    best = Math.max(best, dp[i]);
  }
  return best;
}

// O(n log n)
function lengthOfLISFast(nums) {
  const tails = [];
  for (const x of nums) {
    let lo = 0, hi = tails.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (tails[mid] < x) lo = mid + 1;
      else hi = mid;
    }
    tails[lo] = x;
  }
  return tails.length;
}`,python:`def lengthOfLIS(nums):
    n = len(nums)
    if n == 0:
        return 0
    dp = [1] * n
    best = 1
    for i in range(1, n):
        for j in range(i):
            if nums[j] < nums[i]:
                dp[i] = max(dp[i], dp[j] + 1)
        best = max(best, dp[i])
    return best

from bisect import bisect_left
def lengthOfLISFast(nums):
    tails = []
    for x in nums:
        pos = bisect_left(tails, x)
        tails[pos] = x
    return len(tails)`,java:"",cpp:""}},{id:"dp-19",slug:"dp-revision",title:"Revision (DP)",pattern:"dp",difficulty:"Medium",platform:null,url:null,extra:[],summary:"Episode 16: DP revision — the checklist that turns any new problem into state + transition + base + direction, a map of where each DP problem you have done lives, and the standard upgrades (rolling arrays, O(n log n) tails, binary search over x).",asked:"A revision pass: recognize the DP family in 30 seconds and write the table without fear.",why:"Revision is pattern recognition under time pressure. The whole unit compresses to a decision tree: is the state a COUNT (ways) or an EXTREMUM (min/max)? Is the choice a SPLIT (interval), a SEQUENCE (prefix), a SET (subset/knapsack), or a SEQUENTIAL DECISION (state machine/stocks)? Each family has a signature transition — the list below is your map.",clues:["checklist","family map","upgrades","30-second recognition"],brute:{idea:"Re-derive each problem from scratch (the pre-revision state).",time:"varies",space:"varies"},optimal:{idea:"The 5-line checklist: (1) State — what is dp[·] the answer for? (2) Transition — the last decision, written over smaller dp. (3) Base — the cells you know. (4) Direction — fill order / recursion. (5) Answer — which cell. Then the family map and upgrades.",steps:["COUNT vs EXTREMUM: ways (sum) vs best (min/max) — the operator in the transition tells you the family.","Prefix DPs: climb stairs, min cost stairs, fib, coin change, rod cutting — dp[i] over the first i / amount i.","2D prefix/string DPs: LCS (match → diagonal + 1, mismatch → up/left), grid DPs (up/left).","Set/knapsack DPs: 0/1 knapsack (skip/take, i-1 row), unbounded (same row, low-to-high), egg dropping (min-max split).","Interval DPs: MCM / stick cutting (split k, fill by length).","State-machine DPs: stocks I/II/III/IV (hold/cash chains), counting variants (coins on the outside).","Sequence-structure DPs: LIS (ending-at-i; tails + binary search), egg-drop row (binary search over x).","Upgrades to name-drop: rolling arrays (one row), O(n log n) tails, binary search over the split, k-collapse (k ≥ n/2 → unlimited)."],time:"recognition: O(1) ; any problem: its family cost",space:"—"},dry:["Quick-sort the unit: [7,1,5,3,6,4] stock I → one min-soFar pass (5)","climb 5 → fib rolling (8)","knapsack W=4 items (1,6)(2,10)(3,12) → 1D row right-to-left (18)","LIS [10,9,2,5,3,7,101,18] → dp ending-at-i (4) or tails (4)","MCM dims [3,1,10,2,2] → interval length fill (30)","egg 2/10 → min-max over x (4)","coins [1,2,5] 11 → min coins (3) / combinations (4)"],hints:["If you cannot name the STATE, do not write code — the state is 80% of the problem.",'The transition is a sentence: "the last decision was ___ , and the rest is dp[·]" — write that sentence first.',`When stuck on a new problem, ask: "which family's signature does the last decision have?" — prefix, 2D, set, interval, or state machine.`],code:{javascript:`// The unit in 60 lines — the five DPs you must be able to write from memory:

// 1. Prefix (counting): climb stairs
function climbStairs(n) {
  if (n <= 2) return n;
  let a = 1, b = 2;
  for (let i = 3; i <= n; i++) [a, b] = [b, a + b];
  return b;
}

// 2. Set/knapsack (0/1, 1D):
function knapsack(W, wt, val) {
  const dp = new Array(W + 1).fill(0);
  for (let i = 0; i < wt.length; i++)
    for (let w = W; w >= wt[i]; w--)
      dp[w] = Math.max(dp[w], val[i] + dp[w - wt[i]]);
  return dp[W];
}

// 3. 2D strings (LCS):
function lcs(a, b) {
  const dp = Array.from({ length: a.length + 1 }, () => new Array(b.length + 1).fill(0));
  for (let i = 1; i <= a.length; i++)
    for (let j = 1; j <= b.length; j++)
      dp[i][j] = a[i - 1] === b[j - 1] ? dp[i - 1][j - 1] + 1 : Math.max(dp[i - 1][j], dp[i][j - 1]);
  return dp[a.length][b.length];
}

// 4. Interval (MCM):
function mcm(dims) {
  const n = dims.length - 1;
  const dp = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));
  for (let len = 2; len <= n; len++)
    for (let i = 1; i + len - 1 <= n; i++) {
      const j = i + len - 1;
      dp[i][j] = Infinity;
      for (let k = i; k < j; k++)
        dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k + 1][j] + dims[i - 1] * dims[k] * dims[j]);
    }
  return dp[1][n];
}

// 5. State machine (stocks, k transactions):
function stocks(k, prices) {
  if (k >= prices.length / 2)
    return prices.reduce((s, p, i, arr) => s + (i ? Math.max(0, p - arr[i - 1]) : 0), 0);
  const buy = new Array(k + 1).fill(-Infinity), sell = new Array(k + 1).fill(0);
  for (const p of prices) {
    const pb = [...buy], ps = [...sell];
    for (let t = 1; t <= k; t++) {
      buy[t] = Math.max(buy[t], (t === 1 ? 0 : ps[t - 1]) - p);
      sell[t] = Math.max(sell[t], pb[t] + p);
    }
  }
  return sell[k];
}`,python:`# The unit in ~50 lines — five DPs from memory:

# 1. Prefix: climb stairs
def climbStairs(n):
    a, b = 1, 2
    for _ in range(3, n + 1):
        a, b = b, a + b
    return a if n > 2 else max(1, n)

# 2. Set/knapsack (0/1, 1D)
def knapsack(W, wt, val):
    dp = [0] * (W + 1)
    for i in range(len(wt)):
        for w in range(W, wt[i] - 1, -1):
            dp[w] = max(dp[w], val[i] + dp[w - wt[i]])
    return dp[W]

# 3. 2D strings (LCS)
def lcs(a, b):
    dp = [[0] * (len(b) + 1) for _ in range(len(a) + 1)]
    for i in range(1, len(a) + 1):
        for j in range(1, len(b) + 1):
            dp[i][j] = dp[i - 1][j - 1] + 1 if a[i - 1] == b[j - 1] else max(dp[i - 1][j], dp[i][j - 1])
    return dp[len(a)][len(b)]

# 4. Interval (MCM)
def mcm(dims):
    n = len(dims) - 1
    dp = [[0] * (n + 1) for _ in range(n + 1)]
    for length in range(2, n + 1):
        for i in range(1, n - length + 2):
            j = i + length - 1
            dp[i][j] = min(
                dp[i][k] + dp[k + 1][j] + dims[i - 1] * dims[k] * dims[j]
                for k in range(i, j)
            )
    return dp[1][n]

# 5. State machine (stocks, k transactions)
def stocks(k, prices):
    if k >= len(prices) // 2:
        return sum(max(0, prices[i] - prices[i - 1]) for i in range(1, len(prices)))
    buy = [float('-inf')] * (k + 1)
    sell = [0] * (k + 1)
    for p in prices:
        pb, ps = buy[:], sell[:]
        for t in range(1, k + 1):
            buy[t] = max(buy[t], (0 if t == 1 else ps[t - 1]) - p)
            sell[t] = max(sell[t], pb[t] + p)
    return sell[k]`,java:"",cpp:""}}],pt=[{id:"gd-01",slug:"jump-game",title:"Jump Game",pattern:"greedy",difficulty:"Easy",platform:"LeetCode",url:"https://leetcode.com/problems/jump-game/",extra:[],summary:"Each element is the maximum jump length from that position. Starting at index 0, can you reach the last index?",asked:"True iff the last index is reachable.",why:"Track the farthest index reachable so far. If at position i the farthest point is BEHIND i, the path is broken (unreachable). Otherwise extend farthest with i + nums[i]. The greedy insight: you do not need to know WHICH path — only the reachable frontier, and that frontier never shrinks.",clues:["reach the end","maximum jumps","reachable frontier","monotonic boundary"],brute:{idea:"BFS/DFS over reachable positions (works, O(n) with a visited set — same engine, less sharp).",time:"O(n)",space:"O(n)"},optimal:{idea:"farthest = 0. For i in 0..n-1: if i > farthest → false (gap). farthest = max(farthest, i + nums[i]). If farthest >= n-1 → true early. Finish → true.",steps:["farthest = 0 (the reachable boundary).","Walk i left to right — but only positions inside the boundary are real.","If i exceeds the boundary: the array is split → return false.","Otherwise the boundary may grow: i + nums[i].","Reaching (or passing) the last index → true."],time:"O(n)",space:"O(1)"},dry:["nums = [2, 3, 1, 1, 4]","i=0: boundary 2; i=1: boundary max(2, 1+3=4) = 4 ≥ 4 (last) → true","Answer: true (0 → 1 → 4)","nums = [3, 2, 1, 0, 4]: i=0: boundary 3; i=1: 3; i=2: 3; i=3: boundary 3 (3+0) → i=4 > 3 → false","Answer: false (stuck at the 0)"],hints:['Instead of simulating every jump, ask: "what is the farthest index I can be standing on, considering all positions so far?"',"The boundary only GROWS (monotonic) — that is the greedy contract.","A gap appears exactly when you are asked to stand on an index beyond the boundary."],code:{javascript:`function canJump(nums) {
  let farthest = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > farthest) return false;
    farthest = Math.max(farthest, i + nums[i]);
    if (farthest >= nums.length - 1) return true;
  }
  return true;
}`,python:`def canJump(nums):
    farthest = 0
    for i, x in enumerate(nums):
        if i > farthest:
            return False
        farthest = max(farthest, i + x)
        if farthest >= len(nums) - 1:
            return True
    return True`,java:"",cpp:""}},{id:"gd-02",slug:"jump-game-ii",title:"Jump Game II",pattern:"greedy",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/jump-game-ii/",extra:[],summary:"Same setup as Jump Game, but every position can reach the last. Return the MINIMUM number of jumps to reach the last index.",asked:"Fewest jumps from index 0 to index n-1.",why:'Think in layers: one jump from the current "layer" of reachable indices takes you to the next layer. Greedy: within the current layer (up to curEnd), compute the farthest you can go; when the layer is exhausted, that counts as ONE jump and the new layer becomes the farthest. Exactly BFS levels — without a queue.',clues:["minimum jumps","layers / levels","curEnd boundary","BFS without a queue"],brute:{idea:"BFS with a queue, level by level (correct, O(n)).",time:"O(n)",space:"O(n)"},optimal:{idea:"jumps = 0, curEnd = 0, farthest = 0. For i in 0..n-2: farthest = max(farthest, i + nums[i]); if i === curEnd: jumps++, curEnd = farthest (a new layer begins). Answer: jumps.",steps:["curEnd = the last index of the CURRENT jump layer (starts at 0).","Scan i; update farthest with i + nums[i].","When i reaches curEnd: the layer is done → one more jump; the next layer ends at farthest.","Stop at n-2 (the last index is a landing, not a launch).","Answer: jumps."],time:"O(n)",space:"O(1)"},dry:["nums = [2, 3, 1, 1, 4]","i=0: farthest 2; i === curEnd(0) → jumps 1, curEnd 2","i=1: farthest 4; i=2: i === curEnd(2) → jumps 2, curEnd 4","stop at n-2 = 3 (i=3: farthest stays 4)","Answer: 2 (0 → 1 → 4)","nums = [1, 1, 1, 1]: layers {0} → {1} → {2} → {3}: jumps = 3"],hints:["All indices reachable in the same number of jumps form a LAYER — count the layers, not the paths.","The layer boundary (curEnd) and the best reach (farthest) are two different numbers — when do they equalize? (at a jump).","This is BFS levels compressed: no queue needed because indices are naturally ordered."],code:{javascript:`function jump(nums) {
  let jumps = 0, curEnd = 0, farthest = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);
    if (i === curEnd) {
      jumps++;
      curEnd = farthest;
    }
  }
  return jumps;
}`,python:`def jump(nums):
    jumps = cur_end = farthest = 0
    for i in range(len(nums) - 1):
        farthest = max(farthest, i + nums[i])
        if i == cur_end:
            jumps += 1
            cur_end = farthest
    return jumps`,java:"",cpp:""}},{id:"gd-03",slug:"non-overlapping-intervals",title:"Non-overlapping Intervals",pattern:"greedy",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/non-overlapping-intervals/",extra:[],summary:"Given an array of intervals, return the minimum number of intervals to REMOVE so the rest are all non-overlapping (touching edges count as non-overlapping).",asked:"Fewest removals = total − maximum number of non-overlapping intervals you can keep.",why:"The classic interval scheduling greedy: to keep as many as possible, always keep the interval that ENDS earliest (it leaves the most room for everything after). Sort by end; walk the list; an interval overlapping the kept one must go (count++), otherwise keep it (advance the end boundary).",clues:["minimum removals","interval scheduling","earliest end wins","keep vs drop"],brute:{idea:"Try all subsets (2ⁿ) to find the largest non-overlapping set.",time:"O(2ⁿ · n)",space:"O(n)"},optimal:{idea:"Sort by end. keep = first interval (prevEnd = its end). For each next interval: if start < prevEnd → it overlaps → remove it (count++); else keep it (prevEnd = its end). Answer: count.",steps:["Sort intervals by END (not start).","prevEnd = intervals[0][1]; count = 0.","For each [s, e] from index 1: if s < prevEnd: count++ (must remove); else prevEnd = e (keep).","Why earliest-end is optimal: any other choice ends no earlier, so it can never allow more future intervals.","Answer: count (removals)."],time:"O(n log n) sort + O(n)",space:"O(1) beyond the sort"},dry:["intervals = [1,2], [2,3], [3,4], [1,3]","sorted by end: [1,2], [2,3], [1,3], [3,4]","keep [1,2] (prevEnd 2); [2,3]: 2 >= 2 → keep (prevEnd 3); [1,3]: 1 < 3 → remove (count 1); [3,4]: 3 >= 3 → keep","Answer: 1 (remove [1,3])","intervals = [1,2], [2,3], [3,4], [1,3] → 1; [[1,2],[1,2,]... [[1,2],[2,3]] → 0"],hints:["Which interval should you KEEP when two compete? (the one that ends earliest — it blocks the least future space)","After keeping an interval, the next kept one must start at or after the kept end — that is the whole loop condition.",'"Minimum removals" = "total minus maximum kept" — the greedy maximizes the kept set.'],code:{javascript:`function eraseOverlapIntervals(intervals) {
  if (intervals.length === 0) return 0;
  intervals.sort((a, b) => a[1] - b[1]); // by END
  let count = 0, prevEnd = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < prevEnd) {
      count++; // overlaps the kept one → remove
    } else {
      prevEnd = intervals[i][1]; // keep
    }
  }
  return count;
}`,python:`def eraseOverlapIntervals(intervals):
    if not intervals:
        return 0
    intervals.sort(key=lambda x: x[1])  # by END
    count = 0
    prev_end = intervals[0][1]
    for i in range(1, len(intervals)):
        if intervals[i][0] < prev_end:
            count += 1
        else:
            prev_end = intervals[i][1]
    return count`,java:"",cpp:""}},{id:"gd-04",slug:"merge-intervals-greedy",title:"Merge Intervals (Greedy View)",pattern:"greedy",difficulty:"Medium",platform:"LeetCode",url:"https://leetcode.com/problems/merge-intervals/",extra:[],summary:'Given an array of intervals, merge all overlapping intervals and return the resulting set. (The Merge Intervals pattern page covers the sweep — here it is framed as the greedy anchor: sorting by start makes "merge or not" a one-pass local decision.)',asked:"A partition into maximal non-overlapping intervals covering the same points.",why:"Greedy anchor of the interval family: after sorting by start, at any moment only the LAST output interval can overlap the next input (everything earlier ends before it starts). So the decision is always local: overlap → extend the last; disjoint → start a new one. No look-ahead, no backtracking.",clues:["merge overlaps","sort by start","only the last output matters","one pass"],brute:{idea:"Check every pair and union (O(n²) passes until stable).",time:"O(n² log n)",space:"O(n)"},optimal:{idea:"Sort by start. Walk: if the next start ≤ current end → extend current end to max(both) (merge); else push current as done and start fresh. Push the final one.",steps:["If empty: return [].","Sort by start ascending (tie-break by end).","cur = first interval.","For each [s, e]: if s <= cur[1]: cur[1] = max(cur[1], e); else: push cur; cur = [s, e].","Push cur; return the result.",'Why it is greedy: sorted starts make future intervals only "more to the right", so a closed interval can never be re-merged later.'],time:"O(n log n)",space:"O(n)"},dry:["intervals = [1,3], [2,6], [8,10], [15,18]","sorted (already): [1,3], [2,6], [8,10], [15,18]","cur [1,3]; [2,6]: 2 ≤ 3 → cur [1,6]; [8,10]: 8 > 6 → push [1,6], cur [8,10]; [15,18]: 15 > 10 → push [8,10], cur [15,18]; push [15,18]","Answer: [[1,6], [8,10], [15,18]]"],hints:["After sorting by start, which output interval can the next input possibly overlap? (only the LAST one)","Merging can only GROW the end of the current interval — never move its start.","This one-pass local decision is the greedy contract: no future interval can reopen a past decision."],code:{javascript:`function merge(intervals) {
  if (intervals.length === 0) return [];
  intervals.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const res = [];
  let cur = [...intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const [s, e] = intervals[i];
    if (s <= cur[1]) {
      cur[1] = Math.max(cur[1], e); // merge
    } else {
      res.push(cur); // close it
      cur = [s, e];
    }
  }
  res.push(cur);
  return res;
}`,python:`def merge(intervals):
    if not intervals:
        return []
    intervals.sort(key=lambda x: (x[0], x[1]))
    res = []
    cur = list(intervals[0])
    for s, e in intervals[1:]:
        if s <= cur[1]:
            cur[1] = max(cur[1], e)
        else:
            res.append(cur)
            cur = [s, e]
    res.append(cur)
    return res`,java:"",cpp:""}}],q=[...Xe,...Qe,...Ze,...Je,...et,...tt,...rt,...at,...nt,...it,...st,...ot,...lt,...dt,...ht,...ut,...ct,...pt],ar=q;new Map(q.map(t=>[t.slug,t]));new Map(q.map(t=>[t.id,t]));const nr=["LeetCode","GeeksforGeeks","CoderTrain"],ir=["Easy","Medium","Hard"],ue={Easy:0,Medium:1,Hard:2},sr=(t,r=4)=>q.filter(n=>n.pattern===t.pattern&&n.slug!==t.slug).sort((n,i)=>ue[n.difficulty]-ue[i.difficulty]||n.title.localeCompare(i.title)).slice(0,r),ve=[{id:"two-pointers",slug:"two-pointers",name:"Two Pointers",emoji:"👉",short:"Two indices move through a sorted array (or string) from both ends or the same direction, replacing O(n²) pair checks with O(n).",definition:'Two Pointers is a technique where you keep two indices ("pointers") in the data and move them based on a condition. When the data is sorted, you can decide from both ends whether the answer is to the left or right — so each element is visited a constant number of times.',whenToUse:["The input array is sorted (or you can sort it first).","You need a pair, triplet, or window whose sum/product must match a target.","You must remove or compress elements in place in a sorted array.","You compare elements from opposite ends of the structure."],clues:["sorted array + target sum","find a pair / triplet","return indices of two numbers","modify array in place","3Sum / 4Sum family"],approach:'Pick the two pointer positions (usually ends, or start+start). Compute the current combination. If it is too small, move the "increasing" pointer; if too big, move the "decreasing" pointer. Stop when pointers meet.',mistakes:["Moving both pointers in the same direction and missing combinations.","Forgetting the pointer meeting condition (left < right vs left <= right).","Using two pointers on unsorted data when order matters.","Off-by-one in index answers (1-indexed vs 0-indexed platforms differ)."],template:`left = 0, right = n - 1
while left < right:
    sum = arr[left] + arr[right]
    if sum == target:
        record(left, right); break
    elif sum < target:
        left++
    else:
        right--`},{id:"fast-slow-pointers",slug:"fast-slow-pointers",name:"Fast & Slow Pointers",emoji:"🐢",short:"One pointer moves 1 step, another moves 2 steps. Used to detect cycles, find midpoints, and detect the cycle entry in linked lists.",definition:"Also called the Floyd's Tortoise and Hare algorithm. A slow pointer advances one node while a fast pointer advances two. If they meet, a cycle exists; by the relationship of distances travelled you can also find where the cycle starts or the middle node.",whenToUse:["Detecting a cycle in a linked list (or any functional graph).","Finding the middle of a linked list.","Finding the start of a cycle.","Reordering a linked list (find middle first, reverse second half).","Detecting a cycle in number jumps / array as graph."],clues:["linked list + cycle / loop","find the middle node","does it loop back?","palindrome linked list (middle + reverse)","reorder list (l1/2 vs l2/1 interleaved)"],approach:"slow = head, fast = head. Each step: slow = slow.next, fast = fast.next.next. Meeting (fast === slow) means a cycle; fast === null means no cycle. For cycle start: reset one pointer to head and move both one step until they meet.",mistakes:["Not checking fast === null before fast.next.next (null pointer crash).","Moving both pointers the same speed — no cycle detection.","Forgetting that the middle of an even-length list is the second middle node.","Losing track of the node before the reversed segment after reversal."],template:`slow = head, fast = head
while fast and fast.next:
    slow = slow.next
    fast = fast.next.next
if fast === fast.next and fast !== null: cycle exists`},{id:"sliding-window",slug:"sliding-window",name:"Sliding Window",emoji:"🪟",short:'A growing/shrinking window [left, right] over a subarray or substring keeps the "best window" so every element is touched only a few times.',definition:'Sliding Window solves "subarray / substring with a property" problems in O(n) instead of O(n²). The right end keeps expanding to include new elements; when the window violates the constraint, the left end shrinks. You maintain a running state (sum, count map, etc.) and update it as the window moves.',whenToUse:["Find the longest / shortest (or any) contiguous subarray or substring with a property.","The property can be maintained incrementally (sum, frequency, distinct count).","Fixed or variable window over contiguous elements.","Anagrams, k-distinct, windowed counts."],clues:["contiguous subarray / substring","longest / smallest / minimum window","at most / at least K of something","anagram window of length n","fruit / basket / distinct character limits"],approach:"right expands one step at a time and updates the window state. While the window is invalid (or, for max-size, always), shrink from the left and update state. After each valid window, record the best answer (max or min size).",mistakes:["Updating the answer before the window is valid.","Forgetting to remove the outgoing element when shrinking.",'Confusing "at most K" with "exactly K" logic.',"Off-by-one in window size (right - left + 1).","Not shrinking in fixed-size problems until the window exceeds K."],template:`left = 0, best = 0
for right in 0..n-1:
    add(arr[right])
    while window invalid:
        remove(arr[left]); left++
    best = max(best, right - left + 1)   // for longest`},{id:"kadane",slug:"kadane",name:"Kadane",emoji:"📈",short:"Track the best subarray sum ending at the current index; either extend the previous best or restart here. O(n) for maximum subarray style problems.",definition:"Kadane's algorithm finds the maximum sum of a contiguous subarray in one pass. The key state is: the best sum of a subarray that MUST end at the current index. At each step: endHere = max(arr[i], endHere + arr[i]), best = max(best, endHere).",whenToUse:["Maximum (or minimum) sum of a contiguous subarray.","Variations: with one deletion, circular array, absolute sum, product.","Any DP over subarrays where the transition depends on the previous end.","Maximum sum with a constraint expressible per position."],clues:["contiguous subarray + maximum / minimum sum","can delete / must delete one element","circular array max sum","maximum product subarray","absolute sum of any subarray"],approach:"Maintain the best subarray sum ending at i. If the previous ending sum is negative (for max), starting fresh at i is better. Keep the global max. Variations swap the state (product needs min too; circular needs total - minSubarray).",mistakes:["Forgetting to restart when the running sum becomes negative.","Handling all-negative arrays (answer is the largest single element).",'For the circular case, forgetting the "all negative" edge case (answer = max element, not total - min).',"For product: not tracking both max and min because of sign flips."],template:`endHere = arr[0], best = arr[0]
for i = 1..n-1:
    endHere = max(arr[i], endHere + arr[i])
    best = max(best, endHere)
return best`},{id:"prefix-sum",slug:"prefix-sum",name:"Prefix Sum",emoji:"🧮",short:"Precompute running sums so any range sum is O(1). Combine with hash maps (or a deque) to count subarrays with a target sum in O(n).",definition:"A prefix sum P[i] is the sum of elements from the start up to index i. Then the sum of any range [l..r] is P[r] - P[l-1] in O(1). The deeper trick: a subarray from l+1..r has sum K exactly when P[r] - P[l] == K, so we look for a previous prefix value P[l] = P[r] - K using a hash map.",whenToUse:["Many range-sum queries over the same array.","Count subarrays whose sum equals / is divisible by K.","Subarrays with sum at least K (hard: monotonic deque).","Pivot / balance point problems.","Contiguous 0/1 balance (map 0 to -1 and find equal prefix sums)."],clues:["subarray sum equals K / divisible by K","count number of subarrays","range sum queries","left sum equals right sum (pivot)","sum of 0s equals sum of 1s"],approach:"Walk left to right keeping a running prefix sum and a map of prefix-sum value → count of times seen. For each position, the number of subarrays ending here with sum K is the count of previous prefix sums equal to (current - K). Update the map after counting.",mistakes:["Updating the map before counting (counts the empty prefix twice / self-matches).","Forgetting to initialize the map with prefix sum 0 → 1.","Confusing index-based range sum (P[r]-P[l-1]) with value-based counting.",'For "at least K" with negatives, still using the hash-map trick (it only works for equals / non-negative monotone cases).'],template:`map = { 0: 1 }
prefix = 0, count = 0
for x in arr:
    prefix += x
    count += map[prefix - K]
    map[prefix] += 1
return count`},{id:"merge-intervals",slug:"merge-intervals",name:"Merge Intervals",emoji:"🧩",short:"Sort intervals by start (or end) then sweep once, merging overlaps. The same sweep powers meeting rooms, CPU load, and free-time problems.",definition:"Interval problems become linear after sorting. Sort by start time; then if the current interval starts before or at the end of the last kept interval, they overlap — merge (extend the end). Otherwise, keep it as a new interval. Related sweeps: max overlap = meeting rooms / CPU load; gaps = free time.",whenToUse:["Merging overlapping intervals.","Inserting an interval into a sorted list.","Intersecting two interval lists.","Maximum number of overlapping intervals (rooms, load).","Finding gaps between intervals (free time)."],clues:["intervals [start, end]","overlap / merge / intersect","minimum rooms / maximum load","free time slots","insert / schedule"],approach:"Sort by start. Sweep with a result list: compare current start with the last kept end. Merge when overlapping, push when not. For max overlap, use a sweep-line on (time, +1/-1) events or a min-heap of ends. For gaps, record the space between merged intervals.",mistakes:["Not sorting before sweeping (the whole technique depends on it).","Treating [1,5] and [5,9] as non-overlapping when touching counts as overlap.","For meeting rooms: counting total intervals instead of maximum simultaneous.","For intersections: two-pointer requires both lists sorted; don't skip backwards in the wrong list."],template:`sort(intervals by start)
res = []
for iv in intervals:
    if res and iv.start <= last(res).end:
        last(res).end = max(last(res).end, iv.end)
    else:
        res.push(iv)
return res`},{id:"linked-list-reversal",slug:"linked-list-reversal",name:"In-place Reversal of a LinkedList",emoji:"🔁",short:"Rewire next pointers from left to right (or recursively) to reverse a list, a sublist, pairs, k-groups, or rotate it.",definition:'Reversing a linked list in place means changing the .next pointers without extra nodes. The core move: keep prev, and for each node, save its next, point it back to prev, then advance. Once you can reverse the whole list, every variant (sublist, k-group, pairs, rotation) is just "reverse this slice and stitch it back".',whenToUse:["Reverse the entire list.","Reverse a slice between positions m and n.","Swap/reverse nodes in pairs or in groups of K.","Rotate the list to the right by k.",'Any problem that says "reverse part of a linked list".'],clues:["reverse linked list","reverse between positions / k group","swap in pairs","rotate list","even-length groups"],approach:"Master the three-pointer reversal (prev, curr, next). For slices: walk to the start of the slice, reverse length L, then reconnect the left and right ends (keep a dummy node before the start to avoid head edge cases). For k-groups: count nodes ahead; only reverse when a full group exists.",mistakes:["Losing the rest of the list — always save curr.next before rewiring.","Forgetting the head can change after a full-list reversal.","Off-by-one when walking to position m (1-indexed problems!).","For k-groups: reversing a partial group at the end (must NOT reverse it).","Not using a dummy head for sublist reversal — edge cases explode."],template:`prev = null, curr = head
while curr:
    next = curr.next
    curr.next = prev
    prev = curr
    curr = next
head = prev`},{id:"stack",slug:"stack",name:"Stack",emoji:"📚",short:'LIFO memory: the most recent unmatched item decides the next one. Used for matching, next-greater queries, and "pop the previous" cancellations.',definition:'A stack keeps the most recent element on top. When processing left to right and an element "completes" or "cancels" a previous one, the previous one is the most recent unmatched — exactly what a stack top holds. Classic uses: balanced brackets, next greater element, monotonic stacks, path simplification, and removing adjacent duplicates.',whenToUse:["Matching / nesting: parentheses, tags, brackets.","Next greater / smaller element (monotonic stack).","Removal of the most recent item (adjacent duplicates, k digits).","Undo behaviour, path simplification (../).","Evaluating expressions."],clues:["valid / balanced parentheses","next greater element","days until warmer","remove adjacent duplicates","simplify path / remove k digits","nested structure"],approach:"For next-greater: push indices; while the new element beats the stack top, the top's answer is the new element. For matching: push openers, pop on a matching closer (mismatch → invalid). For cancellations: push each item; if it cancels the top, pop instead of push.",mistakes:["Pushing the value when you need the index (answers must reference positions).","Forgetting that elements left in a monotonic stack have no greater element (-1).","Mismatched bracket handling: pop only on a matching closer, else invalid.","Off-by-one when the stack stores indices vs values."],template:`stack = []
for i, x in enumerate(arr):
    while stack and beats(x, arr[stack.top]):
        answer[stack.top] = i
        stack.pop()
    stack.push(i)`},{id:"hash-maps",slug:"hash-maps",name:"Hash Maps",emoji:"🗺️",short:"O(1) lookup by key: count frequencies, remember seen values, or pair up complement values instead of scanning twice.",definition:'A hash map stores key → value with O(1) average lookup. In DSA it turns "have I seen this before?" and "how many times?" from O(n) scans into constant-time checks. Core uses: frequency counting, two-sum style complement lookup, and grouping.',whenToUse:["You need frequency / count of items.","Looking for a complement (target - x, pair, duplicate).","First/last occurrence, uniqueness checks.","Grouping or filtering by a property.","Anagram / character-count comparisons."],clues:["count / frequency / occurrences","first non-repeating","can we form / build (char counts)","unique / duplicate","pair with target (unsorted two-sum)"],approach:'Decide the key and the value (usually char/number → count or index). One pass: update the map and query the complement. For uniqueness, record first index and check count == 1. For "can form", compare required vs available counts.',mistakes:["Counting twice (two passes) when one pass with a running map works.","Key collision surprises — strings vs numbers as keys behave differently in JS/Java.","Forgetting negative modulo / normalizing keys (divisible-by-K prefix sums).","Iterating a map while mutating it."],template:`map = {}
for x in arr:
    if needed(x, map): answer...
    map[x] = (map[x] || 0) + 1`},{id:"binary-search",slug:"binary-search",name:"Binary Search",emoji:"🔍",short:'Halve the search space each step: O(log n) on sorted data, and O(log answer) for "minimize the maximum / maximize the minimum" problems on a monotonic check.',definition:'Binary search works whenever the search space is ordered and "is x enough?" is monotonic. Classic: sorted array, keep a mid, discard half. Power move: binary search on the answer (search the value range), where a predicate check(mid) is monotonic — e.g. capacity, minimum days, maximum distance.',whenToUse:["Sorted array: find index, first/last, rotation, peak, matrix.","Answer space is numeric and check(mid) is monotonic.","Minimize the maximum / maximize the minimum style.","Finding a boundary (upper/lower, first true).","Kth smallest in a structured matrix (count ≤ mid trick)."],clues:["sorted array + find / position","minimum days / minimum capacity / minimum effort","maximize the minimum distance","koko / cows / allocation / bouquets","peak / rotated / mountain"],approach:"Define the range [lo, hi] and the predicate P(x) that is false...false true...true (or the reverse). Move hi to mid when P(mid) is true, else lo to mid+1. Answer = first true. For arrays, keep the invariant (lo, hi) and choose < vs <= deliberately.",mistakes:["off-by-one: mixing lo < hi with hi = hi-1, or lo <= hi with lo = lo+1 — pick one invariant and stick to it.","Infinite loop when mid === lo and you set lo = mid (must be mid+1).","Searching values without thinking about the monotonic predicate.","For rotated arrays: deciding which half is sorted before choosing where target can be.","For 2D matrices II: staircase search is NOT two binary searches."],template:`lo = 0, hi = n - 1
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
answer = lo`},{id:"heap",slug:"heap",name:"Heap",emoji:"⛰️",short:"A priority queue gives the min/max in O(1) and insert/remove in O(log n). K-th problems, merging k streams, top-K, medians — all heap territory.",definition:`A heap is a complete binary tree where the parent is always greater (max-heap) or smaller (min-heap) than children. You don't traverse — you always get the extreme element in O(1) and maintain the structure in O(log n) per update. It is the go-to tool for "top K", "k-th smallest", "merge k sorted", and scheduling.`,whenToUse:["Top K / K-th smallest or largest (without full sort).","K closest elements / points.","Merging K sorted lists / arrays.","Streaming median (two heaps).","Greedy scheduling (stone weights, refueling, IPO, course schedule III).","Sliding window median (two heaps / two multisets)."],clues:["kth smallest / largest / top k frequent","merge k sorted","closest to origin / to target","median from a stream / window","always pick the largest / smallest available"],approach:"Choose the heap size strategy: keep a heap of size K (min-heap of the K best seen so far → top is the K-th), or use a heap of stream heads for k-way merge. For streaming median: max-heap of the lower half + min-heap of the upper half, rebalance to keep sizes equal (or differ by 1).",mistakes:["Using a max-heap when you need the K smallest kept (need a min-heap of size K).","K-way merge: pushing all elements instead of one head per list.","Forgetting heap operation cost is O(log n) — total is O(n log K), not O(n).","Rebalance logic in two heaps: after every insert/delete, fix the size difference.","JS: there is no built-in heap — implement or use a sorted array for small inputs (know the complexity difference)."],template:`// kth smallest
minHeap = []
for x in arr:
    push(x)
    if size > K: pop()
return top()   // K-th smallest

// k-way merge
heap of (value, listIndex, pos) for each head
repeat: pop min, output, push next from that list`},{id:"recursion-backtracking",slug:"recursion-backtracking",name:"Recursion and Backtracking",emoji:"🌀",short:"Define the choice at each step, recurse on the remaining choices, and undo (backtrack) when the choice fails. Builds all combinations and explores trees of decisions.",definition:"Recursion solves a problem in terms of smaller instances of itself (base case + recursive case). Backtracking is recursion with state: you make a choice, recurse, then undo the choice so the next branch starts clean. This enumerates combinations, permutations, subsets, and constraint solutions without duplicating work you didn't do.",whenToUse:["Generate all permutations / combinations / subsets.",'The problem is "try every possibility, prune bad ones".',"State grows by one decision at a time (parentheses, phone keypad, partitioning).","Simple divide steps: Fibonacci, palindrome, sorted check.","Search with undo (N-Queens, Sudoku).","Tree/graph traversal is recursion over structure."],clues:["all / every / generate all","combinations / permutations / partitions","choose K from N","valid parentheses / phone digits","can you reach / does it exist"],approach:'Write: function(state) { if done: save; for each choice: make choice; recurse; unmake choice }. The "state" is what changes (current path, start index, remaining target). Keep choices deterministic and deduplicate sorted inputs by skipping duplicates at the same level.',mistakes:["No base case → infinite recursion / stack overflow.","Forgetting to unmake the choice (backtrack) → corrupted next branch.","Duplicates in combinations: skip same value at the same recursion level.","Mutating shared state across branches instead of passing copies (or properly restoring).",'Off-by-one in the "start index" that prevents reusing earlier elements.'],template:`function backtrack(path, start):
    if valid/path complete: results.push(copy(path)); return
    for i in start..n-1:
        if duplicate at this level: continue
        path.push(choice i)
        backtrack(path, i + 1)
        path.pop()   // undo`},{id:"tree",slug:"tree",name:"Tree",emoji:"🌳",short:"Binary trees: traverse (pre/in/post, level-order), reason about paths and depths with recursion, and exploit BST ordering for search and validation.",definition:"A binary tree node has a value, a left child, and a right child. Almost every tree problem is one of: (1) traverse — visit nodes in a defined order (DFS: pre/in/post; BFS: level order), or (2) compute — recursively ask children for information (depth, sum, validity) and combine. BSTs add the invariant left < node < right, which makes search O(height).",whenToUse:["Node traversals in a specific order.","Depth / height / diameter / balance of a tree.","Paths: root-to-leaf sums, all paths, max path through nodes.","Validation: is it a BST / complete / symmetric.","BST search, k-th smallest, two-sum in BST, LCA.","Constructing a tree from traversals."],clues:["root of a binary tree","level order / zigzag","depth / height / diameter / balanced","root to leaf / path sum","validate / is it a (BST, complete, symmetric)","lowest common ancestor"],approach:"Pick the traversal (DFS is the default). Define what the recursive call returns (e.g. {height, bestPath}). Combine children's answers at the node, checking the base case (null → neutral value). For level order: BFS queue, process per level. For BST: use ordering instead of scanning.",mistakes:["Base case returning the wrong neutral (0 for max is fine, null checks for min).","Depth vs height confusion, and min-depth: a node with one child still has that child's depth.","Diameter: updating a global best with left.height + right.height at every node.","Validate BST: checking only parent-child is not enough — need range (min, max) from ancestors.","Symmetric: mirror comparison is left.left vs right.right AND left.right vs right.left."],template:`function dfs(node):
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
    levels.push(level)`},{id:"graphs",slug:"graphs",name:"Graphs",emoji:"🕸️",short:"Nodes + edges explored with BFS/DFS (and visited sets). Shortest paths, cycles, components, topological order, and weighted shortest paths (Dijkstra, Bellman-Ford).",definition:"A graph is a set of nodes connected by edges. The engine behind almost every graph problem: traversal (BFS for shortest in unweighted, DFS for order/connectivity) with a visited set. On top: components (islands, provinces), cycle detection (undirected: visited parent; directed: 3-color), topological sort (in-degrees), and weighted shortest paths (Dijkstra for non-negative, Bellman-Ford generally).",whenToUse:["Grid as graph (islands, rotten oranges, surrounded regions).","Connectivity / components / provinces.","Cycle detection, bipartiteness, coloring.","Shortest path: unweighted (BFS), weighted non-negative (Dijkstra), general (Bellman-Ford).","Ordering with dependencies (courses, topological sort).","State-space search (word ladder)."],clues:["grid + islands / regions / paths","prvinces / connected components","cycle / bipartite / colorable","shortest path / minimum time / effort","prerequisites / ordering","one character change (word ladder)"],approach:"Model it: nodes (cells, cities, words), edges (moves, flights, neighbors). Pick the traversal: BFS for levels/shortest-unweighted, DFS for everything else. Track visited. For weighted: Dijkstra with a priority queue; Bellman-Ford relaxes all edges V-1 times. Topological: Kahn's in-degree or DFS post-order reverse.",mistakes:["Not marking visited before enqueueing (duplicate processing / infinite loops on cycles).","Undirected cycle: the edge back to parent is NOT a cycle — check neighbor !== parent.","Dijkstra with negative weights (invalid) — need Bellman-Ford.",'BFS on a weighted graph for "shortest" (edge count ≠ distance).',"Forgetting 0-index vs 1-index in adjacency lists (GFG usually 1-indexed)."],template:`// BFS
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
        if d + w < dist[v]: dist[v] = d + w; push(pq, (dist[v], v))`},{id:"dp",slug:"dp",name:"DP (Dynamic Programming)",emoji:"🧠",short:"Break the problem into overlapping subproblems, memoize (top-down) or tabulate (bottom-up), and combine states: one table, one answer.",definition:"Dynamic Programming solves problems with two properties: overlapping subproblems (the same small problem is asked many times) and optimal substructure (the best answer is built from best answers of smaller parts). You define a state (what a subproblem is), a transition (how smaller states build it), and a base case — then compute it once and reuse (memoization) or fill a table (tabulation).",whenToUse:["Counting / optimizing over sequences (subarrays, subsequences, strings).","Choices at each step with a cost (knapsack, stocks, robbers, stairs).","Grid paths (unique paths, min cost).","String comparison (LCS, edit distance).",'Any "max/min over all ways" where naive recursion explodes.',"Optimization over cuts / intervals (min cost to cut)."],clues:["max / min / count ways","robbing / stocks / knapsack","longest ... subsequence / increasing","unique paths / min cost path","common subsequence of two strings","one deletion / with constraint variations"],approach:"1) Define dp[i] (or dp[i][j]) = answer for the subproblem at i. 2) Write the transition from smaller states. 3) Set base cases. 4) Compute bottom-up (or top-down with memo). 5) The answer lives at a specific state (often dp[n]). Reduce space when the transition only looks at the previous row/column.",mistakes:["State definition too vague → transition doesn't exist.","Wrong base cases (off-by-one, dp[0] vs dp[1]).","Counting order/duplicates (combination sum vs permutation sum).","For stocks III/IV: the state must track number of transactions used, not just bought/sold.",'Ignoring the "0/1" (each item once) vs "unbounded" (reusable) difference in knapsack — loop direction matters.'],template:`// top-down
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
answer = dp[n]`},{id:"greedy",slug:"greedy",name:"Greedy",emoji:"🎯",short:"Make the locally best choice now and never look back — works when the local choice can be proven safe and leads to the global optimum.",definition:"A greedy algorithm builds the answer step by step, each time taking the option that looks best right now. It is correct only when the problem has the greedy-choice property (a locally optimal choice is part of some global optimum) — classic examples: interval scheduling, jump game reachability, assign-to-need matching, fractional knapsack (take by value/weight ratio).",whenToUse:["Interval scheduling (earliest end first).","Reachability / jumps (track farthest reachable).","Matching two sorted lists (smallest that satisfies).","Fractional selection (best ratio first).","Coin change for canonical systems (exact currency).",'Any problem where "sort by one key, then sweep" proves optimal.'],clues:["can you reach / is it possible","maximum jumps / minimum jumps","assign / distribute / satisfy","fractional / partial allowed","always pick the earliest / smallest that works","coins / change with standard denominations"],approach:'Identify what "locally best" means (usually: earliest end, farthest reach, best ratio, smallest sufficient). Prove to yourself with an exchange argument: swapping a non-greedy choice for the greedy one never hurts. Then implement the sweep, tracking the running state (farthest, smallest unmet need, remaining capacity).',mistakes:["Applying greedy where DP is needed (coin change with arbitrary coins is NOT greedy).",'Wrong sort key (jump game II: sort by "reachable range" via current interval end, not by value).',"Not handling the impossibility case (a gap beyond reach → -1 / false).","For fractional knapsack: taking whole items by ratio but forgetting the fractional last item.",'Confusing "is it possible" (boolean greedy) with "minimum number of steps" (interval counting greedy).'],template:`sort(items by the greedy key)
state = initial
for item in items:
    if locallyBest(item, state):
        take(item); update(state)
return state.final`}],mt=t=>q.find(r=>r.id===t||r.slug===t)||null,G=t=>ve.find(r=>r.id===t||r.slug===t)||null,xe=t=>q.filter(r=>r.pattern===t);function ft(t,{limit:r=20}={}){const n=(t||"").trim().toLowerCase();if(!n)return{questions:[],patterns:[]};const i=q.filter(s=>[s.title,s.pattern,s.difficulty,s.platform,s.summary].join(" ").toLowerCase().includes(n)).slice(0,r),l=ve.filter(s=>s.name.toLowerCase().includes(n)||s.short.toLowerCase().includes(n)).slice(0,5);return{questions:i,patterns:l}}function B(t=new Date){const r=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),i=String(t.getDate()).padStart(2,"0");return`${r}-${n}-${i}`}function V(t){const r=new Date;return r.setDate(r.getDate()-t),B(r)}function or(t){if(!t)return"—";const r=new Date(t.length===10?t+"T00:00:00":t);if(Number.isNaN(r.getTime()))return"—";const n=B(),i=V(1);t.length;{const l=t.slice(0,10);if(l===n)return"Today";if(l===i)return"Yesterday"}return r.toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"})}function ce(t,r){const n=t[r];return n?(n.solved||0)+(n.practiced||0)+(n.checkpoints||0)>0:!1}function lr(t){let r=0,n=0;ce(t,B())?n=0:n=1;for(let i=n;i<3650&&ce(t,V(i));i++)r++;return r}function dr(t,r){const n=xe(r),i=n.filter(s=>{var o;return((o=t[s.id])==null?void 0:o.status)==="solved"}).length,l=n.length;return{solved:i,total:l,pct:l?Math.round(i/l*100):0}}function hr(t){const r=q.length,n=q.filter(i=>{var l;return((l=t[i.id])==null?void 0:l.status)==="solved"}).length;return{total:r,solved:n,remaining:r-n,pct:r?(n/r*100).toFixed(1):"0.0"}}function gt(t,r){const n=t[r]||{};return(n.solved||0)+(n.practiced||0)+(n.checkpoints||0)}function ur(t,r){const n=[];for(let i=r-1;i>=0;i--){const l=V(i);n.push({key:l,label:new Date(l+"T00:00:00").toLocaleDateString("en-IN",{weekday:"short"}),count:gt(t,l)})}return n}function cr(t){return t?/leetcode/i.test(t)?"Open LeetCode ↗":/geeksforgeeks|gfg/i.test(t)?"Open GeeksforGeeks ↗":/youtube/i.test(t)?"Watch Video ↗":`Open ${t} ↗`:""}const pe={Easy:"bg-brand-light text-brand-deep dark:bg-brand/15 dark:text-brand",Medium:"bg-blush-light text-ink dark:bg-blush/20 dark:text-white",Hard:"bg-ink text-white dark:bg-white/90 dark:text-ink"};function wt({difficulty:t}){return e.jsx("span",{className:`chip ${pe[t]||pe.Medium}`,children:t})}function pr({status:t}){const r={not_started:["Not Started","bg-black/5 text-ink/55 dark:bg-white/10 dark:text-white/55"],in_progress:["In Progress","bg-info-light text-info dark:bg-info/20 dark:text-info"],solved:["Solved","bg-brand-light text-brand-deep dark:bg-brand/15 dark:text-brand"]},[n,i]=r[t]||r.not_started;return e.jsx("span",{className:`chip ${i}`,children:n})}function mr({platform:t}){return t?e.jsx("span",{className:"chip bg-black/5 text-ink/60 dark:bg-white/10 dark:text-white/60",children:t}):null}function me({placeholder:t="Search problems, patterns…",compact:r=!1}){const[n,i]=a.useState(""),[l,s]=a.useState(!1),[o,p]=a.useState({questions:[],patterns:[]}),m=a.useRef(null),w=qe();a.useEffect(()=>{const h=setTimeout(()=>{p(ft(n))},120);return()=>clearTimeout(h)},[n]),a.useEffect(()=>{const h=k=>{m.current&&!m.current.contains(k.target)&&s(!1)},f=k=>k.key==="Escape"&&s(!1);return document.addEventListener("mousedown",h),document.addEventListener("keydown",f),()=>{document.removeEventListener("mousedown",h),document.removeEventListener("keydown",f)}},[]);const u=a.useCallback(h=>{s(!1),i(""),w(h)},[w]),d=l&&n.trim().length>0,x=n.trim().length>0&&o.questions.length===0&&o.patterns.length===0;return e.jsxs("div",{ref:m,className:"relative w-full",children:[e.jsxs("div",{className:"relative",children:[e.jsx("span",{"aria-hidden":"true",className:"pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm opacity-50",children:"🔍"}),e.jsx("input",{type:"search",className:`input pl-9 ${r?"min-h-[40px] text-[13px]":""}`,placeholder:t,value:n,role:"combobox","aria-expanded":d,"aria-label":"Search problems and patterns",onChange:h=>{i(h.target.value),s(!0)},onFocus:()=>s(!0),onKeyDown:h=>{h.key==="Enter"&&u(`/questions?q=${encodeURIComponent(n.trim())}`)}})]}),e.jsx(N,{children:d&&e.jsxs(A.div,{initial:{opacity:0,y:-6},animate:{opacity:1,y:0},exit:{opacity:0,y:-6},transition:{duration:.18,ease:"easeOut"},className:"absolute inset-x-0 top-[calc(100%+6px)] z-50 max-h-[70vh] overflow-y-auto rounded-2xl border border-line bg-white p-2 shadow-pop dark:border-night-line dark:bg-night-card",role:"listbox",children:[x&&e.jsxs("p",{className:"px-3 py-4 text-center text-sm text-ink/50 dark:text-white/50",children:["No matches for “",n,"”. Try a pattern name or a problem keyword."]}),o.patterns.length>0&&e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"px-3 pb-1 pt-2 text-[11px] font-bold uppercase tracking-wider text-ink/40 dark:text-white/40",children:"Patterns"}),o.patterns.map(h=>e.jsxs("button",{type:"button",className:"flex w-full items-start gap-2 rounded-xl px-3 py-2 text-left text-sm hover:bg-black/5 dark:hover:bg-white/10",onClick:()=>u(`/patterns/${h.slug}`),children:[e.jsx("span",{"aria-hidden":"true",children:h.emoji}),e.jsxs("span",{className:"min-w-0",children:[e.jsx("span",{className:"block font-semibold",children:h.name}),e.jsx("span",{className:"block truncate text-xs text-ink/50 dark:text-white/50",children:h.short})]})]},h.id))]}),o.questions.length>0&&e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"px-3 pb-1 pt-2 text-[11px] font-bold uppercase tracking-wider text-ink/40 dark:text-white/40",children:"Questions"}),o.questions.map(h=>e.jsxs("button",{type:"button",className:"flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-sm hover:bg-black/5 dark:hover:bg-white/10",onClick:()=>u(`/questions/${h.slug}`),children:[e.jsxs("span",{className:"min-w-0 flex-1",children:[e.jsx("span",{className:"block truncate font-medium",children:h.title}),e.jsxs("span",{className:"block text-xs text-ink/50 dark:text-white/50",children:[h.pattern," · ",h.platform||"—"]})]}),e.jsx(wt,{difficulty:h.difficulty})]},h.id)),e.jsxs("button",{type:"button",className:"mt-1 w-full rounded-xl px-3 py-2 text-left text-sm font-semibold text-brand hover:bg-brand-light dark:hover:bg-white/10",onClick:()=>u(`/questions?q=${encodeURIComponent(n.trim())}`),children:["See all results for “",n,"” →"]})]})]})})]})}const fe=[{to:"/",label:"Home",end:!0},{to:"/patterns",label:"Patterns"},{to:"/questions",label:"Questions"},{to:"/daily-practice",label:"Daily Practice"},{to:"/progress",label:"Progress"}],yt=[{to:"/bookmarks",label:"Bookmarks",icon:"🔖"},{to:"/revision",label:"Revision",icon:"🔁"},{to:"/notes",label:"My Notes",icon:"📝"},{to:"/profile",label:"Profile",icon:"👤"},{to:"/settings",label:"Settings",icon:"⚙️"},{to:"/about",label:"About",icon:"ℹ️"}];function U(){const{isDark:t,toggleTheme:r}=Ye(),{user:n,isAuthed:i,logout:l}=be(),[s,o]=a.useState(!1),p=K(),m=a.useRef(null);a.useEffect(()=>{o(!1)},[p.pathname]),a.useEffect(()=>{if(!s)return;const u=d=>d.key==="Escape"&&o(!1);return window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)},[s]);const w=({isActive:u})=>`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${u?"bg-brand-light text-brand-deep dark:bg-white/10 dark:text-white":"text-ink/70 hover:bg-black/5 hover:text-ink dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white"}`;return e.jsxs("header",{className:"sticky top-0 z-40 border-b border-line bg-white/90 backdrop-blur dark:border-night-line dark:bg-night/90",children:[e.jsxs("div",{className:"container-app flex h-16 items-center gap-3",children:[e.jsx("button",{type:"button",className:"btn-ghost -ml-2 lg:hidden","aria-label":"Open menu","aria-expanded":s,onClick:()=>o(!0),children:e.jsx("span",{"aria-hidden":"true",className:"text-lg leading-none",children:"☰"})}),e.jsxs(M,{to:"/",className:"flex min-w-0 items-center gap-2.5","aria-label":"DSA-60 Days home",children:[e.jsx("span",{"aria-hidden":"true",className:"grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand text-sm font-extrabold text-white",children:"60"}),e.jsxs("span",{className:"min-w-0 leading-tight",children:[e.jsx("span",{className:"block truncate text-[15px] font-extrabold tracking-tight",children:"DSA-60 Days"}),e.jsx("span",{className:"hidden text-[11px] font-medium text-ink/50 sm:block dark:text-white/50",children:"Master DSA Patterns. Solve Problems. Build Strong Logic."})]})]}),e.jsx("nav",{"aria-label":"Primary",className:"ml-4 hidden items-center gap-1 lg:flex",children:fe.map(u=>e.jsx(I,{to:u.to,end:u.end,className:w,children:u.label},u.to))}),e.jsxs("div",{className:"ml-auto flex items-center gap-2",children:[e.jsx("div",{className:"hidden w-56 xl:w-72 md:block",children:e.jsx(me,{placeholder:"Search problems, patterns…",compact:!0})}),e.jsx("button",{type:"button",className:"btn-ghost",onClick:r,"aria-label":t?"Switch to light theme":"Switch to dark theme",children:e.jsx("span",{"aria-hidden":"true",className:"text-lg leading-none",children:t?"☀️":"🌙"})}),i?e.jsx(M,{to:"/profile",className:"btn-ghost","aria-label":"Profile",children:e.jsx("span",{"aria-hidden":"true",className:"grid h-8 w-8 place-items-center rounded-full bg-brand text-xs font-bold text-white",children:((n==null?void 0:n.name)||"U").slice(0,1).toUpperCase()})}):e.jsx(M,{to:"/login",className:"btn-primary hidden sm:inline-flex",children:"Login"})]})]}),e.jsx(N,{children:s&&e.jsxs(e.Fragment,{children:[e.jsx(A.div,{className:"fixed inset-0 z-50 bg-black/40 lg:hidden",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2,ease:"easeOut"},onClick:()=>o(!1),"aria-hidden":"true"},"overlay"),e.jsxs(A.aside,{ref:m,className:"fixed inset-y-0 left-0 z-50 flex w-[300px] max-w-[85vw] flex-col bg-white shadow-pop dark:bg-night-card lg:hidden",initial:{x:-320},animate:{x:0},exit:{x:-320},transition:{duration:.28,ease:"easeOut"},role:"dialog","aria-modal":"true","aria-label":"Menu",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-line px-4 py-3 dark:border-night-line",children:[e.jsx("span",{className:"text-sm font-bold",children:"Menu"}),e.jsx("button",{type:"button",className:"btn-ghost","aria-label":"Close menu",onClick:()=>o(!1),children:e.jsx("span",{"aria-hidden":"true",children:"✕"})})]}),e.jsx("div",{className:"px-4 pt-3",children:e.jsx(me,{placeholder:"Search problems, patterns…"})}),e.jsxs("nav",{"aria-label":"Mobile",className:"flex-1 overflow-y-auto px-3 py-3",children:[fe.map(u=>e.jsx(I,{to:u.to,end:u.end,className:({isActive:d})=>`mb-1 flex min-h-[44px] items-center rounded-xl px-3 text-sm font-medium ${d?"bg-brand-light text-brand-deep dark:bg-white/10 dark:text-white":"text-ink/80 hover:bg-black/5 dark:text-white/80 dark:hover:bg-white/10"}`,children:u.label},u.to)),e.jsx("div",{className:"my-2 border-t border-line dark:border-night-line"}),yt.map(u=>e.jsxs(I,{to:u.to,className:({isActive:d})=>`mb-1 flex min-h-[44px] items-center gap-3 rounded-xl px-3 text-sm font-medium ${d?"bg-brand-light text-brand-deep dark:bg-white/10 dark:text-white":"text-ink/80 hover:bg-black/5 dark:text-white/80 dark:hover:bg-white/10"}`,children:[e.jsx("span",{"aria-hidden":"true",children:u.icon}),u.label]},u.to))]}),e.jsx("div",{className:"border-t border-line px-4 py-3 dark:border-night-line",children:i?e.jsx("button",{type:"button",className:"btn-outline w-full",onClick:()=>{l(),o(!1)},children:"Logout"}):e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx(M,{to:"/login",className:"btn-outline",children:"Login"}),e.jsx(M,{to:"/signup",className:"btn-primary",children:"Sign up"})]})})]},"drawer")]})})]})}const ke=a.createContext(null),bt=["not_started","in_progress","solved"];function vt({children:t}){const[r,n]=a.useState(()=>Le()),[i,l]=a.useState(()=>Me()),[s,o]=a.useState(()=>De()),[p,m]=a.useState(()=>Be()),[w,u]=a.useState(()=>ze()),[d,x]=a.useState(()=>Ke()),[h,f]=a.useState(()=>He()),k=a.useRef(!1);a.useEffect(()=>{if(!k.current){k.current=!0;return}ie(r)},[r]),a.useEffect(()=>{k.current&&se(i)},[i]),a.useEffect(()=>{k.current&&oe(s)},[s]),a.useEffect(()=>{k.current&&le(p)},[p]),a.useEffect(()=>{k.current&&Ge(w)},[w]),a.useEffect(()=>{k.current&&he(d)},[d]);const F=a.useCallback(c=>{var g;return((g=r[c])==null?void 0:g.status)||"not_started"},[r]),P=a.useCallback(c=>F(c)==="solved",[F]),R=a.useCallback(c=>i.includes(c),[i]),T=a.useCallback((c,g=1)=>{["solved","practiced","checkpoints"].includes(c)&&m(y=>{const j=B(),S=y[j]||{solved:0,practiced:0,checkpoints:0};return{...y,[j]:{...S,[c]:(S[c]||0)+g}}})},[]),L=a.useCallback((c,g)=>{bt.includes(g)&&(n(y=>{const j=y[c]||{status:"not_started",attempts:0,lastAttempt:null,solvedAt:null},S=new Date().toISOString();return{...y,[c]:{...j,status:g,lastAttempt:S,solvedAt:g==="solved"?j.solvedAt||S:null}}}),g==="solved"&&T("solved"))},[T]),$=a.useCallback(c=>{var y;const g=((y=r[c])==null?void 0:y.status)||"not_started";L(c,g==="solved"?"in_progress":"solved")},[r,L]),X=a.useCallback(c=>{var g,y;n(j=>{const S=j[c]||{status:"not_started",attempts:0,lastAttempt:null,solvedAt:null};return{...j,[c]:{...S,attempts:(S.attempts||0)+1,lastAttempt:new Date().toISOString()}}}),(g=r[c])==null||g.status,(((y=r[c])==null?void 0:y.status)||"not_started")==="not_started"&&L(c,"in_progress"),T("practiced")},[r,L,T]),Q=a.useCallback(c=>{l(g=>g.includes(c)?g.filter(y=>y!==c):[...g,c])},[]),Z=a.useCallback((c,{note:g,approach:y})=>{o(j=>{const S=j[c]||{note:"",approach:""};return{...j,[c]:{note:g!==void 0?g:S.note,approach:y!==void 0?y:S.approach,updatedAt:new Date().toISOString()}}}),T("checkpoints")},[T]),J=a.useCallback(c=>{o(g=>{if(!g[c])return g;const y={...g};return delete y[c],y})},[]),ee=a.useCallback(c=>{W(c),f(c),x(g=>[c,...g.filter(y=>y!==c)].slice(0,8))},[]),te=a.useCallback(c=>{u(g=>({...g,...c}))},[]),re=a.useCallback(()=>{n({}),l([]),o({}),m({}),x([]),W(null),f(null),ie({}),se([]),oe({}),le({}),he([]),W(null)},[]),Se=a.useMemo(()=>({progress:r,bookmarks:i,notes:s,activity:p,settings:w,recent:d,lastQuestion:h,statusOf:F,isSolved:P,isBookmarked:R,setStatus:L,toggleSolved:$,recordAttempt:X,toggleBookmark:Q,saveNote:Z,deleteNote:J,touchVisited:ee,logActivity:T,updateSettings:te,resetAll:re}),[r,i,s,p,w,d,h,F,P,R,L,$,X,Q,Z,J,ee,T,te,re]);return e.jsx(ke.Provider,{value:Se,children:t})}function xt(){const t=a.useContext(ke);if(!t)throw new Error("useProgress must be used inside ProgressProvider");return t}const kt=[{to:"/",label:"Dashboard",icon:"🏠",end:!0},{to:"/patterns",label:"Patterns",icon:"🧩"},{to:"/questions",label:"All Questions",icon:"📚"},{to:"/daily-practice",label:"Daily Practice",icon:"📅"},{to:"/progress",label:"Progress",icon:"📈"},{to:"/bookmarks",label:"Bookmarks",icon:"🔖"},{to:"/revision",label:"Revision",icon:"🔁"},{to:"/notes",label:"My Notes",icon:"📝"}];function Ot(){const{user:t,isAuthed:r,logout:n}=be(),{settings:i,updateSettings:l}=xt(),s=!!i.sidebarCollapsed;return e.jsx("aside",{className:`sticky top-20 hidden h-[calc(100vh-6.5rem)] shrink-0 lg:block ${s?"w-16":"w-60"}`,"aria-label":"Sidebar",children:e.jsxs("div",{className:"flex h-full flex-col rounded-2xl border border-line bg-white p-2 shadow-card dark:border-night-line dark:bg-night-card",children:[e.jsx("nav",{className:"flex-1 overflow-y-auto",children:kt.map(o=>e.jsxs(I,{to:o.to,end:o.end,title:o.label,className:({isActive:p})=>`mb-1 flex min-h-[44px] items-center gap-3 rounded-xl px-3 text-sm font-medium transition-colors ${p?"bg-brand-light text-brand-deep dark:bg-white/10 dark:text-white":"text-ink/70 hover:bg-black/5 hover:text-ink dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white"}`,children:[e.jsx("span",{"aria-hidden":"true",className:"text-base leading-none",children:o.icon}),!s&&e.jsx("span",{className:"truncate",children:o.label})]},o.to))}),e.jsxs("div",{className:"mt-2 border-t border-line pt-2 dark:border-night-line",children:[e.jsxs(I,{to:"/profile",title:"Profile",className:({isActive:o})=>`flex min-h-[44px] items-center gap-3 rounded-xl px-3 text-sm font-medium ${o?"bg-brand-light text-brand-deep dark:bg-white/10 dark:text-white":"text-ink/70 hover:bg-black/5 dark:text-white/70 dark:hover:bg-white/10"}`,children:[e.jsx("span",{"aria-hidden":"true",children:"👤"}),!s&&e.jsx("span",{className:"min-w-0 truncate",children:r?(t==null?void 0:t.name)||"Profile":"Login / Profile"})]}),e.jsxs(I,{to:"/settings",title:"Settings",className:({isActive:o})=>`flex min-h-[44px] items-center gap-3 rounded-xl px-3 text-sm font-medium ${o?"bg-brand-light text-brand-deep dark:bg-white/10 dark:text-white":"text-ink/70 hover:bg-black/5 dark:text-white/70 dark:hover:bg-white/10"}`,children:[e.jsx("span",{"aria-hidden":"true",children:"⚙️"}),!s&&e.jsx("span",{children:"Settings"})]}),r&&e.jsxs("button",{type:"button",title:"Logout",onClick:n,className:"flex min-h-[44px] w-full items-center gap-3 rounded-xl px-3 text-sm font-medium text-ink/70 hover:bg-black/5 dark:text-white/70 dark:hover:bg-white/10",children:[e.jsx("span",{"aria-hidden":"true",children:"🚪"}),!s&&e.jsx("span",{children:"Logout"})]}),e.jsxs("button",{type:"button",className:"mt-1 flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl px-3 text-xs font-semibold text-ink/50 hover:bg-black/5 dark:text-white/50 dark:hover:bg-white/10",onClick:()=>l({sidebarCollapsed:!s}),"aria-label":s?"Expand sidebar":"Collapse sidebar",children:[e.jsx(A.span,{"aria-hidden":"true",animate:{rotate:s?180:0},transition:{duration:.25,ease:"easeOut"},children:"⟨"}),e.jsx(N,{initial:!1,children:!s&&e.jsx(A.span,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.15},children:"Collapse"})})]})]})]})})}const jt=[{to:"/",label:"Home",icon:"🏠",end:!0},{to:"/patterns",label:"Patterns",icon:"🧩"},{to:"/daily-practice",label:"Practice",icon:"📅"},{to:"/progress",label:"Progress",icon:"📈"},{to:"/profile",label:"Profile",icon:"👤"}];function Oe(){return e.jsx("nav",{"aria-label":"Bottom navigation",className:"fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur dark:border-night-line dark:bg-night-card/95 lg:hidden",children:e.jsx("div",{className:"mx-auto grid max-w-lg grid-cols-5",children:jt.map(t=>e.jsxs(I,{to:t.to,end:t.end,className:({isActive:r})=>`flex min-h-[56px] flex-col items-center justify-center gap-0.5 text-[11px] font-medium ${r?"text-brand dark:text-brand":"text-ink/55 dark:text-white/55"}`,children:[e.jsx("span",{"aria-hidden":"true",className:"text-lg leading-none",children:t.icon}),t.label]},t.to))})})}const St=[{to:"/patterns",label:"Patterns"},{to:"/questions",label:"Questions"},{to:"/daily-practice",label:"Daily Practice"},{to:"/progress",label:"Progress"},{to:"/about",label:"About"}];function Tt(){return e.jsx("footer",{className:"border-t border-line bg-white pb-20 pt-10 dark:border-night-line dark:bg-night lg:pb-10",children:e.jsxs("div",{className:"container-app",children:[e.jsxs("div",{className:"flex flex-col gap-8 md:flex-row md:items-start md:justify-between",children:[e.jsxs("div",{className:"max-w-sm",children:[e.jsxs("div",{className:"flex items-center gap-2.5",children:[e.jsx("span",{"aria-hidden":"true",className:"grid h-9 w-9 place-items-center rounded-xl bg-brand text-sm font-extrabold text-white",children:"60"}),e.jsx("span",{className:"text-base font-extrabold tracking-tight",children:"DSA-60 Days"})]}),e.jsx("p",{className:"mt-3 text-sm text-ink/60 dark:text-white/60",children:"Master DSA Patterns. Solve Problems. Build Strong Logic."}),e.jsx("p",{className:"mt-1 text-sm font-medium text-brand dark:text-brand",children:"Learn. Solve. Track. Revise."})]}),e.jsx("nav",{"aria-label":"Footer",className:"grid grid-cols-2 gap-x-12 gap-y-2 sm:grid-cols-3",children:St.map(t=>e.jsx(M,{to:t.to,className:"text-sm text-ink/60 transition-colors hover:text-brand dark:text-white/60 dark:hover:text-brand",children:t.label},t.to))})]}),e.jsxs("div",{className:"mt-8 flex flex-col gap-1 border-t border-line pt-4 text-sm text-ink/50 dark:border-night-line dark:text-white/50 sm:flex-row sm:items-center sm:justify-between",children:[e.jsx("p",{children:"Developed by Naveen"}),e.jsx("p",{children:"© 2026 DSA-60 Days"})]})]})})}const At=["Explain in simple Hinglish","Give me a hint","Explain this pattern","Explain brute force","Explain optimal approach","Dry run this","Explain my code"];function qt(t){const r=(t||"").toLowerCase();return r.includes("hinglish")||r.includes("simple")?"hinglish":r.includes("hint")?"hint":r.includes("pattern")?"pattern":r.includes("brute")?"brute":r.includes("optimal")||r.includes("approach")?"optimal":r.includes("dry")?"dryrun":r.includes("code")||r.includes("explain my")?"mycode":"generic"}function Ct(){return At}function Et(t,r={}){var m,w,u,d,x;const n=qt(t),{question:i,pattern:l,difficulty:s,summary:o}=r;if(!i){if(n==="pattern"&&l){const h=G(l);return h?`${h.name}: ${h.definition}

When to use:
${h.whenToUse.map(f=>"• "+f).join(`
`)}`:"Open a question page and I can explain its pattern."}return["I'm the DSA-60 Assistant. I can help with the problem you're viewing.",'Open any question page and try one of the suggested prompts, e.g. "Explain in simple Hinglish" or "Give me a hint".'].join(`

`)}const p=G(i.pattern)||{};switch(n){case"hinglish":{const h=(m=i.clues)!=null&&m.length?`

Yeh problem pehle se "sorted/target/pair" jaisi cheezein deke pehchana jata hai — clues: ${i.clues.slice(0,3).join(", ")}.`:"";return`Acha samjho: isme tumhe ${o||i.title} karna hai.

Simple bhasha mein — pehle brute force socho (har cheez check karo), phir dekho kya bottleneck hai. Yahan pattern hai ${p.name||i.pattern}, matlab ${i.why||"problem structure is pattern ke liye perfect hai"}. Optimal idea: ${((w=i.optimal)==null?void 0:w.idea)||"see the Optimal Approach section"}.`+h}case"hint":return(u=i.hints)!=null&&u[0]?`Hint 1: ${i.hints[0]}

(If this helps, keep going — Hint 2 and 3 are in the question page.)`:"Try to state the input, output, and a brute force before looking at the approach.";case"pattern":{const h=xe(i.pattern).slice(0,4).map(f=>f.title);return`${p.name||i.pattern} — ${p.definition||""}

Why it fits here: ${i.why||""}

Keywords to spot it: ${(i.clues||[]).join(", ")||((d=p.clues)==null?void 0:d.slice(0,4).join(", "))||"see question"}.

More problems with this pattern on DSA-60: ${h.join(" • ")}`}case"brute":return i.brute?`Brute force idea: ${i.brute.idea}
Time: ${i.brute.time} | Space: ${i.brute.space}

Usually the brute force is the right first step — write it, then ask "where is it wasting time?"`:"Open the Approach section and expand Brute Force.";case"optimal":return i.optimal?`Optimal idea: ${i.optimal.idea}

Steps:
${i.optimal.steps.map((h,f)=>`${f+1}. ${h}`).join(`
`)}

Time: ${i.optimal.time} | Space: ${i.optimal.space}`:"Open the Approach section and expand Optimal Approach.";case"dryrun":return(x=i.dry)!=null&&x.length?`Let's walk through it step by step:

${i.dry.map((h,f)=>`Step ${f+1}: ${h}`).join(`
`)}

Use the Dry Run section on the page to navigate with arrows.`:"The Dry Run section on this page walks through the steps.";case"mycode":return`I can't see your code in this UI-only version (that will connect later), but here's how I'd check it:
1. Does it match the optimal idea above?
2. Did you test an edge case (empty input, all same values, n=1)?
3. Walk one sample input on paper and compare with the Dry Run.
Paste your code here in a future version and I will explain line by line.`;default:return`About "${i.title}" (${s||i.difficulty}): ${o||i.summary}

Ask me: "Explain in simple Hinglish", "Give me a hint", "Explain this pattern", "Explain brute force", "Explain optimal approach", or "Dry run this".`}}const Ft=["Hi! I'm your DSA Assistant 👋","Pick a suggested prompt below, or ask me anything about the problem you are viewing. I run fully in your browser — no backend."].join(`

`);function Y(){const[t,r]=a.useState(!1),[n,i]=a.useState([{from:"bot",text:Ft}]),[l,s]=a.useState(""),[o,p]=a.useState(!1),m=a.useRef(null),w=a.useRef(null),u=K(),d=a.useMemo(()=>{const f=u.pathname.match(/^\/questions\/([^/]+)$/);return f?mt(f[1]):null},[u.pathname]),x=Ct();a.useEffect(()=>{m.current&&(m.current.scrollTop=m.current.scrollHeight)},[n,o]),a.useEffect(()=>()=>clearTimeout(w.current),[]);const h=f=>{const k=(f||"").trim();if(!k||o)return;i(R=>[...R,{from:"user",text:k}]),s(""),p(!0),clearTimeout(w.current);const F=d?G(d.pattern):null,P={question:d,pattern:F==null?void 0:F.name,difficulty:d==null?void 0:d.difficulty,summary:d==null?void 0:d.summary};w.current=setTimeout(()=>{const R=Et(k,P);i(T=>[...T,{from:"bot",text:R}]),p(!1)},450)};return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>r(f=>!f),"aria-label":t?"Close DSA Assistant":"Open DSA Assistant","aria-expanded":t,className:"fixed bottom-20 right-4 z-50 grid h-14 w-14 place-items-center rounded-full bg-brand text-2xl text-white shadow-pop transition-transform hover:scale-105 active:scale-95 lg:bottom-6 lg:right-6",children:e.jsx("span",{"aria-hidden":"true",children:t?"✕":"💬"})}),e.jsx(N,{children:t&&e.jsxs(A.div,{initial:{opacity:0,y:24,scale:.97},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:24,scale:.97},transition:{duration:.25,ease:"easeOut"},className:"fixed bottom-[calc(5.5rem+env(safe-area-inset-bottom))] right-4 z-50 flex max-h-[min(70vh,560px)] w-[min(92vw,380px)] flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-pop dark:border-night-line dark:bg-night-card lg:bottom-24 lg:right-6",role:"dialog","aria-modal":"false","aria-label":"DSA Assistant",children:[e.jsxs("div",{className:"flex items-center gap-2.5 border-b border-line bg-brand-light px-4 py-3 dark:border-night-line dark:bg-night-soft",children:[e.jsx("span",{"aria-hidden":"true",className:"grid h-9 w-9 place-items-center rounded-full bg-brand text-lg text-white",children:"💬"}),e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsx("p",{className:"text-sm font-bold",children:"DSA Assistant"}),e.jsx("p",{className:"truncate text-[11px] text-ink/55 dark:text-white/55",children:d?"In context of your problem":"Local assistant · no backend"})]}),e.jsx("button",{type:"button",className:"btn-ghost min-h-[36px] px-2",onClick:()=>r(!1),"aria-label":"Close assistant",children:e.jsx("span",{"aria-hidden":"true",children:"✕"})})]}),d&&e.jsx("div",{className:"border-b border-line px-4 py-2 dark:border-night-line",children:e.jsxs("span",{className:"chip bg-brand-light text-brand-deep dark:bg-white/10 dark:text-brand",children:["📌 ",d.title]})}),e.jsxs("div",{ref:m,className:"flex-1 space-y-3 overflow-y-auto px-4 py-3",children:[n.map((f,k)=>e.jsx("div",{className:`flex ${f.from==="user"?"justify-end":"justify-start"}`,children:e.jsx("div",{className:`max-w-[85%] whitespace-pre-line rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed ${f.from==="user"?"rounded-br-md bg-brand text-white":"rounded-bl-md bg-black/4 text-ink dark:bg-white/10 dark:text-white"}`,children:f.text})},k)),o&&e.jsx("div",{className:"flex justify-start",children:e.jsx("div",{className:"rounded-2xl rounded-bl-md bg-black/4 px-4 py-3 dark:bg-white/10","aria-label":"Assistant is typing",children:e.jsxs("span",{className:"inline-flex gap-1","aria-hidden":"true",children:[e.jsx(A.span,{className:"h-1.5 w-1.5 rounded-full bg-ink/40 dark:bg-white/40",animate:{opacity:[.3,1,.3]},transition:{duration:1,repeat:1/0,delay:0}}),e.jsx(A.span,{className:"h-1.5 w-1.5 rounded-full bg-ink/40 dark:bg-white/40",animate:{opacity:[.3,1,.3]},transition:{duration:1,repeat:1/0,delay:.2}}),e.jsx(A.span,{className:"h-1.5 w-1.5 rounded-full bg-ink/40 dark:bg-white/40",animate:{opacity:[.3,1,.3]},transition:{duration:1,repeat:1/0,delay:.4}})]})})})]}),e.jsx("div",{className:"flex gap-1.5 overflow-x-auto border-t border-line px-3 py-2 dark:border-night-line",children:x.map(f=>e.jsx("button",{type:"button",onClick:()=>h(f),className:"shrink-0 rounded-full border border-line px-3 py-1.5 text-xs font-medium text-ink/65 transition-colors hover:border-brand hover:text-brand dark:border-night-line dark:text-white/65 dark:hover:border-brand dark:hover:text-brand",children:f},f))}),e.jsxs("form",{className:"flex items-center gap-2 border-t border-line px-3 py-2.5 dark:border-night-line",onSubmit:f=>{f.preventDefault(),h(l)},children:[e.jsx("input",{className:"input min-h-[40px] text-[13px]",placeholder:"Ask about this problem…",value:l,onChange:f=>s(f.target.value),"aria-label":"Message the DSA Assistant"}),e.jsx("button",{type:"submit",className:"btn-primary min-h-[40px] px-3.5 text-[13px]",disabled:!l.trim()||o,children:"Send"})]})]})})]})}function It(){return e.jsxs("div",{className:"flex min-h-screen flex-col",children:[e.jsx(U,{}),e.jsx("main",{className:"flex-1",children:e.jsx(H,{})}),e.jsx(Tt,{}),e.jsx(Oe,{}),e.jsx(Y,{})]})}function Rt(){return e.jsxs("div",{className:"min-h-screen",children:[e.jsx(U,{}),e.jsxs("div",{className:"mx-auto flex w-full max-w-[1600px] gap-6 px-4 pb-24 pt-4 sm:px-6 lg:px-8 lg:pb-10",children:[e.jsx(Ot,{}),e.jsx("main",{className:"min-w-0 flex-1",children:e.jsx(H,{})})]}),e.jsx(Oe,{}),e.jsx(Y,{})]})}function Lt(){return e.jsxs("div",{className:"flex min-h-screen flex-col",children:[e.jsx(U,{}),e.jsx("main",{className:"flex-1",children:e.jsx(H,{})}),e.jsx(Y,{})]})}function Mt(){const{pathname:t}=K();return a.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"auto"})},[t]),null}function D({className:t=""}){return e.jsx("div",{className:`relative overflow-hidden rounded-lg bg-black/8 dark:bg-white/10 ${t}`,children:e.jsx("div",{"aria-hidden":"true",className:"absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-black/10 to-transparent dark:via-white/10"})})}function Dt(){return e.jsxs("div",{className:"container-app py-16",role:"status","aria-label":"Loading",children:[e.jsx(D,{className:"h-8 w-64"}),e.jsx(D,{className:"mt-4 h-4 w-96 max-w-full"}),e.jsx("div",{className:"mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3","aria-hidden":"true",children:Array.from({length:6}).map((t,r)=>e.jsxs("div",{className:"card p-5",children:[e.jsx(D,{className:"h-4 w-1/3"}),e.jsx(D,{className:"mt-3 h-5 w-4/5"}),e.jsx(D,{className:"mt-3 h-4 w-3/5"}),e.jsx("div",{className:"mt-4 h-2 w-full rounded-full bg-black/8 dark:bg-white/10"})]},r))}),e.jsx("span",{className:"sr-only",children:"Loading…"})]})}const Nt=a.lazy(()=>O(()=>import("./Home-BPr_OWVI.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))),Pt=a.lazy(()=>O(()=>import("./About-F5xk5G_u.js"),__vite__mapDeps([8,1,2,6]))),Bt=a.lazy(()=>O(()=>import("./Patterns-oPNc0ydG.js"),__vite__mapDeps([9,1,2,4]))),_t=a.lazy(()=>O(()=>import("./PatternDetail-CDTptqhR.js"),__vite__mapDeps([10,1,2,4,7,11,12]))),Wt=a.lazy(()=>O(()=>import("./Questions-6yqqE8q_.js"),__vite__mapDeps([13,1,2,7,12]))),zt=a.lazy(()=>O(()=>import("./QuestionDetail-_uyLiNSC.js"),__vite__mapDeps([14,1,2,11]))),Gt=a.lazy(()=>O(()=>import("./DailyPractice-lIhbvuwn.js"),__vite__mapDeps([15,1,2,6,4,5]))),Kt=a.lazy(()=>O(()=>import("./ProgressPage-CBKuC_ES.js"),__vite__mapDeps([16,1,2,3,4]))),Ht=a.lazy(()=>O(()=>import("./Bookmarks-Dq_kb2Ci.js"),__vite__mapDeps([17,1,2,7,12]))),Vt=a.lazy(()=>O(()=>import("./Revision-CMp1__yo.js"),__vite__mapDeps([18,1,2,12]))),Ut=a.lazy(()=>O(()=>import("./Notes-B0PrqZho.js"),__vite__mapDeps([19,1,2,12]))),Yt=a.lazy(()=>O(()=>import("./Profile-Dr8oQFJQ.js"),__vite__mapDeps([20,1,2,3,4]))),$t=a.lazy(()=>O(()=>import("./Settings-CsSHidzP.js"),__vite__mapDeps([21,1,2]))),Xt=a.lazy(()=>O(()=>import("./Login-DqHT3nx4.js"),__vite__mapDeps([22,1,2]))),Qt=a.lazy(()=>O(()=>import("./Signup-CPg74XE_.js"),__vite__mapDeps([23,1,2]))),Zt=a.lazy(()=>O(()=>import("./NotFound-DN0OZJPC.js"),__vite__mapDeps([11,1,2])));function Jt(){return e.jsxs(e.Fragment,{children:[e.jsx(Mt,{}),e.jsx(a.Suspense,{fallback:e.jsx(Dt,{}),children:e.jsxs(Ce,{children:[e.jsxs(v,{element:e.jsx(It,{}),children:[e.jsx(v,{index:!0,element:e.jsx(Nt,{})}),e.jsx(v,{path:"about",element:e.jsx(Pt,{})})]}),e.jsxs(v,{element:e.jsx(Rt,{}),children:[e.jsx(v,{path:"patterns",element:e.jsx(Bt,{})}),e.jsx(v,{path:"patterns/:patternSlug",element:e.jsx(_t,{})}),e.jsx(v,{path:"questions",element:e.jsx(Wt,{})}),e.jsx(v,{path:"questions/:questionSlug",element:e.jsx(zt,{})}),e.jsx(v,{path:"daily-practice",element:e.jsx(Gt,{})}),e.jsx(v,{path:"progress",element:e.jsx(Kt,{})}),e.jsx(v,{path:"bookmarks",element:e.jsx(Ht,{})}),e.jsx(v,{path:"revision",element:e.jsx(Vt,{})}),e.jsx(v,{path:"notes",element:e.jsx(Ut,{})}),e.jsx(v,{path:"profile",element:e.jsx(Yt,{})}),e.jsx(v,{path:"settings",element:e.jsx($t,{})})]}),e.jsxs(v,{element:e.jsx(Lt,{}),children:[e.jsx(v,{path:"login",element:e.jsx(Xt,{})}),e.jsx(v,{path:"signup",element:e.jsx(Qt,{})})]}),e.jsx(v,{path:"*",element:e.jsx(Zt,{})})]})})]})}const je=a.createContext(null),ge={success:"border-brand/30 bg-brand-light text-brand-deep dark:bg-night-soft dark:text-brand",info:"border-line bg-white text-ink dark:border-night-line dark:bg-night-card dark:text-white",error:"border-blush/40 bg-blush-light text-ink dark:bg-night-soft"};function er({children:t}){const[r,n]=a.useState([]),i=a.useRef(0),l=a.useCallback((s,o="info")=>{const p=++i.current;n(m=>[...m,{id:p,message:s,type:o}]),setTimeout(()=>{n(m=>m.filter(w=>w.id!==p))},2800)},[]);return e.jsxs(je.Provider,{value:{push:l},children:[t,e.jsx("div",{"aria-live":"polite",className:"pointer-events-none fixed inset-x-0 top-4 z-[100] flex flex-col items-center gap-2 px-4",children:e.jsx(N,{children:r.map(s=>e.jsx(A.div,{initial:{opacity:0,y:-12,scale:.98},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-8,scale:.98},transition:{duration:.25,ease:"easeOut"},className:`pointer-events-auto max-w-sm rounded-xl border px-4 py-3 text-sm font-medium shadow-pop ${ge[s.type]||ge.info}`,role:"status",children:s.message},s.id))})})]})}function fr(){const t=a.useContext(je);if(!t)throw new Error("useToast must be used inside ToastProvider");return t}z.createRoot(document.getElementById("root")).render(e.jsx(Ee.StrictMode,{children:e.jsx(Fe,{children:e.jsx(Ue,{children:e.jsx($e,{children:e.jsx(vt,{children:e.jsx(er,{children:e.jsx(Jt,{})})})})})})}));export{q as A,ir as D,nr as P,ar as Q,me as S,mt as a,dr as b,lr as c,G as d,fr as e,or as f,hr as g,wt as h,pr as i,cr as j,mr as k,ur as l,V as m,ce as n,be as o,ve as p,xe as q,sr as r,Ye as s,B as t,xt as u};
