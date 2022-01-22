
// words.length
/**
 *
 * @param words {string[]}
 */
function allWordsLen(words) {
    return words.reduce((pre, str) => {
        return pre += str.length
    }, 0)
}

/**
 * 只检查最开始的
 * @param haystack {string}
 * @param needle {string}
 */
function singleCheck(haystack, needle) {
    let n = needle.length;
    if (n > haystack.length) return false;
    return haystack.slice(0, n) === needle

}

/**
 * 检查当前字符串是否匹配
 * @param s {string}
 * @param words {string[]}
 */
function currStrCheck(s, words) {
    let len = words[0].length
    if (words.length === 1 && s === words[0]) return true;
    let currStr = s.slice(0, len);
    let currIndex = words.indexOf(currStr);
    if (currIndex !== -1) {
        const tempWords = words.filter((item, idx) => idx !== currIndex);
        return currStrCheck(s.slice(len), tempWords);
    }
    return false
}

/**
 *
 * @param s {string}
 * @param words {string[]}
 */
function isRight(s, words) {
    let wordsLen = allWordsLen(words);
    let result = [];
    if (wordsLen > s.length) return result;
    for (let i = 0; i < s.length - wordsLen + 1; i++) {
        const currS = s.slice(i, i + wordsLen);
        console.log(currS)
        const res = currStrCheck(currS, words)
        if (res) {
            result.push(i)
        }
    }
    return result
}

const str = "barfoothefoobarman";
const words = ["foo","bar"]

const res = isRight(str, words)
console.log(res)

