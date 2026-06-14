// ============================================================
// TextForge — Shared Text Processing Utilities
// Pure functions, zero dependencies
// ============================================================

/**
 * Remove duplicate lines from text
 * @param {string} text
 * @param {boolean} caseSensitive
 * @returns {{ result: string, duplicatesRemoved: number }}
 */
export function removeDuplicateLines(text, caseSensitive = true) {
  if (!text) return { result: '', duplicatesRemoved: 0 };
  const lines = text.split('\n');
  const seen = new Set();
  const unique = [];
  let duplicatesRemoved = 0;

  for (const line of lines) {
    const key = caseSensitive ? line : line.toLowerCase();
    if (!seen.has(key)) {
      seen.add(key);
      unique.push(line);
    } else {
      duplicatesRemoved++;
    }
  }

  return { result: unique.join('\n'), duplicatesRemoved };
}

/**
 * Remove empty lines from text
 * @param {string} text
 * @param {boolean} whitespaceOnly - also remove lines that are only whitespace
 * @returns {{ result: string, emptyLinesRemoved: number }}
 */
export function removeEmptyLines(text, whitespaceOnly = false) {
  if (!text) return { result: '', emptyLinesRemoved: 0 };
  const lines = text.split('\n');
  const filtered = [];
  let emptyLinesRemoved = 0;

  for (const line of lines) {
    const isEmpty = whitespaceOnly ? line.trim() === '' : line === '';
    if (!isEmpty) {
      filtered.push(line);
    } else {
      emptyLinesRemoved++;
    }
  }

  return { result: filtered.join('\n'), emptyLinesRemoved };
}

/**
 * Trim leading and trailing whitespace from each line
 * @param {string} text
 * @returns {string}
 */
export function trimLines(text) {
  if (!text) return '';
  return text.split('\n').map(line => line.trim()).join('\n');
}

/**
 * Convert text to UPPERCASE
 * @param {string} text
 * @returns {string}
 */
export function toUpperCase(text) {
  return text ? text.toUpperCase() : '';
}

/**
 * Convert text to lowercase
 * @param {string} text
 * @returns {string}
 */
export function toLowerCase(text) {
  return text ? text.toLowerCase() : '';
}

/**
 * Convert text to Title Case
 * @param {string} text
 * @returns {string}
 */
export function toTitleCase(text) {
  if (!text) return '';
  return text.replace(/\b\w+/g, word =>
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );
}

/**
 * Convert text to Sentence case
 * @param {string} text
 * @returns {string}
 */
export function toSentenceCase(text) {
  if (!text) return '';
  return text.toLowerCase().replace(/(^\s*|[.!?]\s+)([a-z])/g, (match, sep, char) =>
    sep + char.toUpperCase()
  );
}

/**
 * Toggle case of each character
 * @param {string} text
 * @returns {string}
 */
export function toggleCase(text) {
  if (!text) return '';
  return text.split('').map(char => {
    if (char === char.toUpperCase()) return char.toLowerCase();
    return char.toUpperCase();
  }).join('');
}

/**
 * Sort lines of text
 * @param {string} text
 * @param {'asc' | 'desc'} direction
 * @param {boolean} caseSensitive
 * @param {boolean} natural - use natural sort (alphanumeric)
 * @returns {string}
 */
export function sortLines(text, direction = 'asc', caseSensitive = true, natural = false) {
  if (!text) return '';
  const lines = text.split('\n');

  lines.sort((a, b) => {
    let compareA = caseSensitive ? a : a.toLowerCase();
    let compareB = caseSensitive ? b : b.toLowerCase();

    let result;
    if (natural) {
      result = compareA.localeCompare(compareB, undefined, { numeric: true, sensitivity: caseSensitive ? 'case' : 'base' });
    } else {
      result = compareA < compareB ? -1 : compareA > compareB ? 1 : 0;
    }

    return direction === 'desc' ? -result : result;
  });

  return lines.join('\n');
}

/**
 * Reverse the order of lines
 * @param {string} text
 * @returns {string}
 */
export function reverseLines(text) {
  if (!text) return '';
  return text.split('\n').reverse().join('\n');
}

/**
 * Count words in text
 * @param {string} text
 * @returns {number}
 */
export function countWords(text) {
  if (!text || !text.trim()) return 0;
  return text.trim().split(/\s+/).length;
}

/**
 * Count characters
 * @param {string} text
 * @param {boolean} withSpaces
 * @returns {number}
 */
export function countCharacters(text, withSpaces = true) {
  if (!text) return 0;
  return withSpaces ? text.length : text.replace(/\s/g, '').length;
}

/**
 * Count sentences
 * @param {string} text
 * @returns {number}
 */
export function countSentences(text) {
  if (!text || !text.trim()) return 0;
  const matches = text.match(/[^.!?]*[.!?]+/g);
  return matches ? matches.length : (text.trim().length > 0 ? 1 : 0);
}

/**
 * Count paragraphs
 * @param {string} text
 * @returns {number}
 */
export function countParagraphs(text) {
  if (!text || !text.trim()) return 0;
  return text.split(/\n\s*\n/).filter(p => p.trim().length > 0).length;
}

/**
 * Count lines
 * @param {string} text
 * @returns {number}
 */
export function countLines(text) {
  if (!text) return 0;
  return text.split('\n').length;
}

/**
 * Calculate reading time in minutes
 * @param {number} wordCount
 * @returns {string}
 */
export function calculateReadingTime(wordCount) {
  const minutes = Math.ceil(wordCount / 225);
  if (minutes < 1) return '< 1 min';
  return `${minutes} min`;
}

/**
 * Calculate speaking time in minutes
 * @param {number} wordCount
 * @returns {string}
 */
export function calculateSpeakingTime(wordCount) {
  const minutes = Math.ceil(wordCount / 150);
  if (minutes < 1) return '< 1 min';
  return `${minutes} min`;
}

/**
 * Calculate average word length
 * @param {string} text
 * @returns {string}
 */
export function averageWordLength(text) {
  if (!text || !text.trim()) return '0';
  const words = text.trim().split(/\s+/);
  const totalChars = words.reduce((sum, word) => sum + word.replace(/[^a-zA-Z0-9]/g, '').length, 0);
  return (totalChars / words.length).toFixed(1);
}

/**
 * Copy text to clipboard with fallback
 * @param {string} text
 * @returns {Promise<boolean>}
 */
export async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Fallback for older browsers
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      return true;
    } catch {
      return false;
    } finally {
      document.body.removeChild(textarea);
    }
  }
}

/**
 * Download text as a .txt file
 * @param {string} text
 * @param {string} filename
 */
export function downloadAsText(text, filename = 'textforge-output.txt') {
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Read a text file via FileReader
 * @param {File} file
 * @returns {Promise<string>}
 */
export function readTextFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(/** @type {string} */ (reader.result));
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsText(file);
  });
}

/**
 * Format a number with commas
 * @param {number} num
 * @returns {string}
 */
export function formatNumber(num) {
  return num.toLocaleString('en-US');
}

/**
 * Calculate percentage reduction
 * @param {number} before
 * @param {number} after
 * @returns {string}
 */
export function percentReduction(before, after) {
  if (before === 0) return '0%';
  const reduction = ((before - after) / before) * 100;
  return reduction.toFixed(1) + '%';
}
