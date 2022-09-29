/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isFlipedString = function(s1, s2) {
	if (s1.length !== s2.length) return false;
	if (s1 === s2) return true;
	for (let i = 0; i < s1.length; i++) {
		const currLetter = s1[0];
		const res = s1.substring(1);
		s1 = res + currLetter;
		if (s1 === s2) return true;
	}
	return false;
};

function flipedString(s1, s2) {
	return s1.length === s2.length && (s1 + s1).indexOf(s2) > -1;
}