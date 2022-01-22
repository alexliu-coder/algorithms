// 'dfsdf' 'asdf' 'ddd' 'dkkkkkds'
//
// 'sldkfalsdglsadkfjasldkfjasldkf'

// words.length
/**
 * 给出所有字符的长度
 * @param words {string[]}
 */
function allWordsLen(words) {
    return words.reduce((pre, str) => {
        return pre += str.length
    }, 0)
}

/**
 * 检查当前字符串是否匹配
 * @param s {string}
 * @param words {string[]}
 */
function currStrCheck(s, words) {
    if (words.length === 1 && s === words[0]) return true;
    for (let i = 0; i < words.length; i++) {
        let currWordLen = words[i].length;
        if (s.slice(0, currWordLen) === words[i]) {
            let temp = JSON.parse(JSON.stringify(words));
            temp.splice(i, 1)
            return currStrCheck(s.slice(currWordLen), temp)
        }
    }
    return false
}

/**
 * 找出所有子串的位置
 * @param s {string}
 * @param words {string[]}
 */
function findSubString(s, words) {
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


