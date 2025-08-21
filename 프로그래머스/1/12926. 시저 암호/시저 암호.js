function solution(s, n) {
  const shift = ((n % 26) + 26) % 26;
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch === " ") { 
      answer += " ";
      continue;
    }

    const code = ch.charCodeAt(0);
    if (code >= 97 && code <= 122) {
      const shifted = ((code - 97 + shift) % 26) + 97;
      answer += String.fromCharCode(shifted);
    }
    else if (code >= 65 && code <= 90) {
      const shifted = ((code - 65 + shift) % 26) + 65;
      answer += String.fromCharCode(shifted);
    }
    else {
      answer += ch;
    }
  }

  return answer;
}