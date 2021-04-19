function countingWords (str) {
	var words = str.split(" ").length;
    var newstr = str.match(/(\b(\w{1})\b(\s|$))/g,'').length
    var total;
    return total = words - newstr
}

console.log(countingWords(
    `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`
))