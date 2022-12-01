function palindrome(text) {
    let word = text.split('').reverse().join('');
    return word === text ? 'is palindrome' : 'is not palindrome'

}
res = palindrome('bob');

console.log(res);