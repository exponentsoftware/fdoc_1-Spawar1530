
function countWords(paragraph, word1, word2) {

    var first = paragraph.split(word1).length - 1;
    var second = paragraph.split(word2).length - 1;

    if(first > second){
        console.log(`${word1} has occured more times than ${word2}`)
    } else {
        console.log(`${word2} has occured more times than ${word1}`)
    }

}

const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.';
console.log((countWords(paragraph, "love", "you")));